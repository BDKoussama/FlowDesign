# Duvory

[Duvory Live Demo](https://imgify.netlify.app/)

Duvory is an online graphical design tool inspired by Canva, allowing users to easily create designs. With intuitive drag & drop features, users can easily add shapes, text, and image elements to a blank canvas. Additionally, Duvory offers a diverse collection of inspiring public design templates for users to explore and choose from.

![App Demo](https://duvory.netlify.app/_ipx/w_3840,q_75/%2Fimages%2Fapp.webp?url=%2Fimages%2Fapp.webp&w=3840&q=75)

## Technologies

- React / Nextjs / Redux / TailwindCss
- [react-konva](https://github.com/konvajs/react-konva) : JavaScript library for drawing complex canvas graphics using React. It provides declarative and reactive bindings to the [Konva Framework.](https://konvajs.org/)

## Features

- Add, delete, resize, rearrange, copy/paste, and duplicate items
- Customizable design elements, including text, colors, and graphics.
- Access to a wide range of fonts and typography options.
- Ability to upload and incorporate your own images and logos.
- Advanced editing capabilities, such as layers and image effects.
- Graphics and icon library to enhance your designs.
- Support for undo/redo
- Design to Save and Download
- Canvas zoom/pan
- Support for guidelines 
- Select Images from Unsplash



## Installation

To get started with UpDesign, follow these steps:

1. Clone the repository: `git clone https://github.com/BDKoussama/Duvory.git`
2. Change to the project directory: `cd Duvory/web`
3. Install the dependencies: `npm install`
4. Set up the required API keys:

   - Unsplash API: Obtain your API key from [Unsplash Developer Portal](https://unsplash.com/developers) and add it to the `.env` file:

     ```
     NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
     NEXT_PUBLIC_UNSPLASH_SECRET_KEY=your_unsplash_secret_key
     NEXT_PUBLIC_URL=https://api.unsplash.com/

     ```

   - Google Fonts API: Get your API key from [Google Fonts Developer Guide](https://developers.google.com/fonts/docs/developer_api) and add it to the `.env` file:

     ```
     NEXT_PUBLIC_GOOGLE_FONTS_KEY=your_google_fonts_api_key
     ```

5. Start the development server: `npm start`
6. Open your web browser and visit [http://localhost:3000](http://localhost:3000)

## Contributing

Contributions are always welcome! If you'd like to contribute to UpDesign app, please follow these guidelines:

1. Fork the repository and create your branch: `git checkout -b my-feature-branch`
2. Make your changes and test thoroughly.
3. Commit your changes: `git commit -m "Add my awesome feature"`
4. Push to the branch: `git push origin my-feature-branch`
5. Open a pull request, describing the changes you've made.

## License

Licensed under the MIT License.


## Acknowledgements

- [List any libraries, frameworks, or resources you've used and want to acknowledge]

## Contact

If you have any questions, suggestions, or just want to say hi, you can reach me at [bdk.oussama@gmail.com].

Happy coding! 🚀

Feel free to modify and customize the above template to match your app's specific requirements.
