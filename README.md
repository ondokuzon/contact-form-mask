# Contact Form 7 | Phone Number Masking

<center>
<img src="https://user-images.githubusercontent.com/10114716/80103010-3e8ba700-857c-11ea-9d82-65618c7400b8.gif"/>
</center>

## Usage
Call the `app.js` in your page.
```html
<script src="{app.js}"></script>
```

```javascript
// in app.js

// Line 1
const phoneForm = document.querySelector("#phone"); 
// #phone should change with your phone input id. or you should attribute id as phone

// Line 26
const formSubmitButton = document.querySelector('.wpcf7-submit');

// Check your ContactForm submit button class. If it's different, change with in that.
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
