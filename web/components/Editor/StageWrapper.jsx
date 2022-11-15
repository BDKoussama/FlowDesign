import { Stage, Layer} from 'react-konva';
import StageBackground from '../Editor/StageBackground';
import { useEffect, useRef} from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Zoom from './Zoom';
import { useDispatch, useSelector } from 'react-redux';
import { addShape, deleteElement, scaleStage, updateElement } from '../../app/features/canvas/stageSlice';
import Shape from './Shape';
import CustomImage from './CustomImage';
import { setCopiedItem, setDragProps, setSelected } from '../../app/features/canvas/selectSlice';
import Konva from 'konva';
import { v4 as uuidv4 } from 'uuid';
import {Button} from 'flowbite-react';

const  GUIDELINE_OFFSET = 10;

export default function StageWrapper({toggle}){

    const wrapper = useRef();
    const stageRef = useRef();
    const layerRef = useRef();

    const [parentSize , setParentSize] = useState({
        height: 0,
        width: 0
    })

    // get stage wrapper bounds 
    useLayoutEffect(() => {
        if(wrapper.current){
            const {height , width} = wrapper.current.getBoundingClientRect();
            setParentSize({
                height,
                width
            })
        }
    },[]) 

    // get stage props from store
    const {
        height , 
        width , 
        initialWidth,
        initialHeight ,
        scale,
    } = useSelector((state) => state.stage.present.size)

    // get all childre elements from store
    const { children } = useSelector((state) => state.stage.present)

    // get stage background from store
    const {fillPatternImage , type , fill } = useSelector((state) => state.stage.present.background)
    
    const selected = useSelector(state => state.selected.present);

    const dispatch = useDispatch();

    // dispatch stage scale
    const zoom = (direction) => {
        dispatch(scaleStage({direction})) 
    }

    useEffect(()=>{
        const {item} = selected;
        //check if there is a selected item
        if(item.id !== null ){
            dispatch(updateElement({
                id : item.id,
                attrs : {
                    ...item.attrs
                }
            }))
        }
    },[selected.item])

    useEffect(() => {
      if(stageRef.current && stageRef.current !== null) {
        const container = stageRef.current.container();
        container.focus() 
      }
    },[])


    const moveElement = (position) => {
      dispatch(setDragProps({
        position
      }))
    }

    const deleteKey = (id) => {

      dispatch(deleteElement({
        id 
      }))

      dispatch(setSelected({
          type : "",
          id : null,
          attrs : {}
      }))

    }

    const ctrlC = (item) => {
      dispatch(setCopiedItem({
        ...item
      }))
    }

    const ctrlV = () =>{
      const id = uuidv4()
      if(selected.copiedItem.id !== null) {
        dispatch(addShape({
          className : selected.copiedItem.type,
          attrs : {
              ...selected.copiedItem.attrs,
              id
          }
      })) 
      }
    }


    const handleKeyboardEvents = (e) => {
      e.preventDefault();
      const DELTA = 4;

      if(selected.item.id !== null){
        if (e.keyCode === 37) {

          moveElement({
            x : selected.item.attrs.x - DELTA,
            y : selected.item.attrs.y
          })

        } else if (e.keyCode === 38) {

          moveElement({ 
            x : selected.item.attrs.x,
            y : selected.item.attrs.y - DELTA
          })

        } else if (e.keyCode === 39) {

          moveElement({
                x : selected.item.attrs.x + DELTA,
                y : selected.item.attrs.y
          })

        } else if (e.keyCode === 40) {
          
          moveElement({
            x : selected.item.attrs.x ,
            y : selected.item.attrs.y + DELTA
          })

        } else if (e.keyCode === 8) {
          // delete element
          deleteKey(selected.item.id)
        } else if( (e.ctrlKey || e.metaKey) && e.keyCode === 67){
            ctrlC(selected.item)
        } else if ((e.ctrlKey || e.metaKey) && e.keyCode === 86) {
            ctrlV()
        } else {
          return;
        }
      }
    }
    //deselect all items
    const checkDeslect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        const clickedOnBg = e.target?.attrs?.name === "background"
        if (clickedOnEmpty || clickedOnBg) {
            dispatch(setSelected({
                type : "",
                id : null,
                attrs : {}
            }))
        }
    }

     // were can we snap our objects?
    function getLineGuideStops(skipShape) {
        const stage = stageRef.current;
      // we can snap to stage borders and the center of the stage
      var vertical = [0, stage.width() / 2, stage.width()];
      var horizontal = [0, stage.height() / 2, stage.height()];

      // and we snap over edges and center of each object on the canvas
      stage.find('.object').forEach((guideItem) => {
        if (guideItem === skipShape) {
          return;
        }
        var box = guideItem.getClientRect();
        // and we can snap to all edges of shapes
        vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
        horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
      });
      return {
        vertical: vertical.flat(),
        horizontal: horizontal.flat(),
      };
    }

    // what points of the object will trigger to snapping?
    // it can be just center of the object
    // but we will enable all edges and center
    function getObjectSnappingEdges(node) {
    var box = node.getClientRect();
    var absPos = node.absolutePosition();

    return {
      vertical: [
        {
          guide: Math.round(box.x),
          offset: Math.round(absPos.x - box.x),
          snap: "start"
        },
        {
          guide: Math.round(box.x + box.width / 2),
          offset: Math.round(absPos.x - box.x - box.width / 2),
          snap: "center"
        },
        {
          guide: Math.round(box.x + box.width),
          offset: Math.round(absPos.x - box.x - box.width),
          snap: "end"
        }
      ],
      horizontal: [
        {
          guide: Math.round(box.y),
          offset: Math.round(absPos.y - box.y),
          snap: "start"
        },
        {
          guide: Math.round(box.y + box.height / 2),
          offset: Math.round(absPos.y - box.y - box.height / 2),
          snap: "center"
        },
        {
          guide: Math.round(box.y + box.height),
          offset: Math.round(absPos.y - box.y - box.height),
          snap: "end"
        }
      ]
    };
  }


    // find all snapping possibilities
  function getGuides(lineGuideStops, itemBounds) {
    var resultV = [];
    var resultH = [];

    lineGuideStops.vertical.forEach((lineGuide) => {
      itemBounds.vertical.forEach((itemBound) => {
        var diff = Math.abs(lineGuide - itemBound.guide);
        // if the distance between guild line and object snap point is close we can consider this for snapping
        if (diff < GUIDELINE_OFFSET) {
          resultV.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          });
        }
      });
    });

    lineGuideStops.horizontal.forEach((lineGuide) => {
      itemBounds.horizontal.forEach((itemBound) => {
        var diff = Math.abs(lineGuide - itemBound.guide);
        if (diff < GUIDELINE_OFFSET) {
          resultH.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          });
        }
      });
    });

    var guides = [];

    // find closest snap
    var minV = resultV.sort((a, b) => a.diff - b.diff)[0];
    var minH = resultH.sort((a, b) => a.diff - b.diff)[0];
    if (minV) {
      guides.push({
        lineGuide: minV.lineGuide,
        offset: minV.offset,
        orientation: "V",
        snap: minV.snap
      });
    }
    if (minH) {
      guides.push({
        lineGuide: minH.lineGuide,
        offset: minH.offset,
        orientation: "H",
        snap: minH.snap
      });
    }
    return guides;
  }

  function drawGuides(guides) {
    guides.forEach((lg) => {
      if (lg.orientation === "H") {
        var line = new Konva.Line({
          points: [-6000, 0, 6000, 0],
          stroke: "rgb(0, 161, 255)",
          strokeWidth: 1,
          name: "guid-line",
          dash: [4, 6]
        });
        layerRef.current.add(line);
        line.absolutePosition({
          x: 0,
          y: lg.lineGuide
        });
      } else if (lg.orientation === "V") {
        var line = new Konva.Line({
          points: [0, -6000, 0, 6000],
          stroke: "rgb(0, 161, 255)",
          strokeWidth: 1,
          name: "guid-line",
          dash: [4, 6]
        });
        layerRef.current.add(line);
        line.absolutePosition({
          x: lg.lineGuide,
          y: 0
        });
      }
    });
  }

    
    const layerDragMove = (e) => {
        // clear all previous lines on the screen
        layerRef.current.find(".guid-line").forEach((l) => l.destroy());
    
        // find possible snapping lines
        var lineGuideStops = getLineGuideStops(e.target);
        // find snapping points of current object
        var itemBounds = getObjectSnappingEdges(e.target);
    
        // now find where can we snap current object
        var guides = getGuides(lineGuideStops, itemBounds);
    
        // do nothing of no snapping
        if (!guides.length) {
          return;
        }
    
        drawGuides(guides);
    
        var absPos = e.target.absolutePosition();
        // now force object position
        guides.forEach((lg) => {
          switch (lg.snap) {
            case "start": {
              switch (lg.orientation) {
                case "V": {
                  absPos.x = lg.lineGuide + lg.offset;
                  break;
                }
                case "H": {
                  absPos.y = lg.lineGuide + lg.offset;
                  break;
                }
              }
              break;
            }
            case "center": {
              switch (lg.orientation) {
                case "V": {
                  absPos.x = lg.lineGuide + lg.offset;
                  break;
                }
                case "H": {
                  absPos.y = lg.lineGuide + lg.offset;
                  break;
                }
              }
              break;
            }
            case "end": {
              switch (lg.orientation) {
                case "V": {
                  absPos.x = lg.lineGuide + lg.offset;
                  break;
                }
                case "H": {
                  absPos.y = lg.lineGuide + lg.offset;
                  break;
                }
              }
              break;
            }
          }
        });
        e.target.absolutePosition(absPos);
      };
    
    const layerDragEnd = (e) => {
        // clear all previous lines on the screen
        layerRef.current.find(".guid-line").forEach((l) => l.destroy());
      };
    
      const serializeStage = () => {
        if(stageRef.current && stageRef.current !== null){
          const json = stageRef.current.toJSON();
          console.log(json);
        }
      }

    return(
        <div className={`stage-wrapper ${( parentSize.height >= initialHeight && parentSize.width >= initialWidth ) ? 'center-stage' : '' }`}  ref={wrapper}>
            <Zoom scale = {scale.x} zoom = {zoom} />
            <div className="serialize-stage absolute right-10 bottom-10">
                    <Button onClick={serializeStage}>
                        Serialize
                    </Button>
              </div>
            <div tabIndex={1} onKeyDown = {handleKeyboardEvents} className='stage' style = {{ height : `${initialHeight}px` , width : `${initialWidth}px`}} >
                <Stage 
                    ref={stageRef}  
                    width={initialWidth} 
                    height={initialHeight} 
                    scaleX = {scale.x} 
                    scaleY = {scale.y} 
                    onMouseDown = {checkDeslect}
                    onTouchStart = {checkDeslect}
                >
                    <Layer
                        ref = {layerRef}
                        onDragEnd = {layerDragEnd}
                    >
                        {type !== null ? 
                            <StageBackground 
                                height={height} 
                                width = {width} 
                                fill = {fill} 
                                type = {type} 
                                fillPatternImage = {fillPatternImage}
                                onMouseDown = {checkDeslect}
                                onTouchStart = {checkDeslect}
                            /> : null 
                                
                            }
                        {children.length !== 0 && (
                            children.map(item => {
                                if(item.className === "Image"){
                                    return (
                                        <CustomImage 
                                            key={item.attrs.id} 
                                            attrs = {item.attrs} 
                                            url = {item.attrs.url}
                                            isSelected = {item.attrs.id === selected.item.id}
                                            onSnap = {layerDragMove}
                                            onSelect = {() => {
                                                dispatch(setSelected({
                                                    id : item.attrs.id,
                                                    type : item.attrs.type,
                                                    attrs : item.attrs
                                                }))
                                            }}
                                        />)
                                }
                                return (
                                    <Shape 
                                        key={item.attrs.id} 
                                        attrs = {item.attrs} 
                                        type = {item.attrs.type} 
                                        isSelected = {item.attrs.id === selected.item.id}  
                                        onSelect = {() => {
                                            dispatch(setSelected({
                                                id : item.attrs.id,
                                                type : item.attrs.type,
                                                attrs: item.attrs
                                            }))
                                        }}
                                        onSnap = {layerDragMove}
                                    />)
                            }))
                        }
                    </Layer>
                </Stage>
            </div>
        </div>   
    )
}