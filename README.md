# User-Interface-Project-Week [ REACT ]

A take on Lambda School's [User-Interface-Project-Week](https://github.com/LambdaSchool/User-Interface-Project-Week) in ReactJS.

Designs courtesy of [Josh Knell](https://github.com/BigKnell).

#### How to Use

1.  Fork and Clone.
2.  In Gitbash/Terminal `yarn` or `npm i` to install dependencies.
3.  Then `npm start` or `yarn start` to create a locally hosted instance.

# Documentation

### ToDo

- Pixel-Perfect Navigation / Implement animation for Hambuger / Change size

- There is absolutely zero reactivity to lower layouts that 1920x1080 - this will need to be fixed.

- `Future:` Shift all the text into state `{this.text}` and create two layouts, allowing for mobile/desktop layouts to exist.

- Colors are off, will need to be adjusted. Same with Text.

### Issues

- Display image provided is not enough to fit the viewport, will need to find something more suitable. Image scaling is off at 1920x1080 + but lower is fine. Try using Z-Axis to shift the original image?

- NavBar on HomePage displays as `text-align: center`, by fixing this the page is skewed and will need to be redone.

## Dependencies

[`React`](https://reactjs.org/)

[`Reactstrap`](https://reactstrap.github.io/)

[`Bootstrap`](https://getbootstrap.com/)

[`React-Router`](https://github.com/ReactTraining/react-router)

[`GreenSock`](https://greensock.com/)

## Routes

`HomePage` = /

`Services` = /services

`Contact` = /contact

## Styles

Font family can be found here: https://fonts.google.com/specimen/Roboto

**All CSS can be found in `main.scss` - exported with SASS to `index.css`**

**All Animations can be found in `animation.css`**

#### GENERAL STYLES

- Background: #FFFFFF
- Color: #222222
- Font Family: Roboto, Arial, sans-serif

### Page Specific

#### Home Page

- Recent Projects Gray Square: #D8D8D8
- Button borders: #222222

#### Services Page

- Tab selected background: #5E9FB9
- Tab Hover background: #222222
- Tab Hover color: #FFF;

### Footer

Background: #828282

#### General Text

- Font Weight: Regular
- Font Size: 16px
- Line Height: 24px

#### Jumbotron Headers

- Font Weight: Bold
- Font Size: 64px
- Line Height: 75px
- Color: #FFFFFF

#### Sub Headers

- Font Weight: Bold
- Font Size: 28px
- Color: #222222

#### Footer Headings

- Font Weight: Regular
- Font Size: 20px
- Line Height: 24px
- Color: #FFFFFF

#### Footer Text

- Font Weight: Regular
- Font Size: 14px
- Line Height: 26px
- Color: #FFFFFF

#### Navigation Logo

- Font Weight: Bold
- Font Size: 24px
- Color: #FFFFFF

#### Navigation Text (Expanded)

- Font Weight: Bold
- Font Size: 48px
- Line Height: 85px
- Color: #FFFFFF
- Hover Color: #222222
