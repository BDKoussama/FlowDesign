import '../styles/fonts.css'
import '../styles/globals.css'
import '../styles/stage.css'
import {Provider} from 'react-redux'
import {store} from '../app/store'

function MyApp({ Component, pageProps}) {

  return (
    <Provider store={store}>
      <div className='overflow-hidden'>
          <Component {...pageProps}/>
      </div>
    </Provider>
  )
      
  
}

export default MyApp
