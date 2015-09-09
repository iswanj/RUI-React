import Color from 'color';
import helpers from './util/Helpers';
import $ from './util/variables';

export default {
  base: {
    backgroundColor: $.def,
    borderStyle: 'solid',
    borderWidth: '1px',
  	borderColor: Color($.def).darken(0.1).hexString(),
  	display: 'inline-block',
  	marginBottom: 0, // For input.btn
  	marginRight: '.3em',
  	fontWeight: 400,
  	textAlign: 'center',
  	verticalAlign: 'middle',
  	touchAction: 'manipulation',
  	cursor: 'pointer',
  	backgroundImage: 'none', // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
  	//border: '1px solid transparent',
  	textDecoration: 'none',
  	whiteSpace: 'nowrap',
    borderRadius: $.bordeRadiusBase,
    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
  },
  large: {
    padding: `${$.btnPaddingVertical} ${$.btnPaddingHorizontal}`,
    fontSize: '.9em',
    lineHeight: 1.444,
    borderRadius: $.bordeRadiusBase,
  },
  small: {
    padding: `${$.btnPaddingSmVertical} ${$.btnPaddingSmHorizontal}`,
    fontSize: '.75em',
    lineHeight: 1.444,
    borderRadius: $.bordeRadiusBase,
  },
  normal: helpers.buttonVariant($.primaryDark, $.def, Color($.def).darken(0.1).hexString()),
  primary: helpers.buttonVariant('#fff', $.primary, Color($.primary).darken(0.1).hexString()),
  danger: helpers.buttonVariant('#fff', $.danger, Color($.danger).darken(0.1).hexString()),
  normal_o: {
    backgroundColor: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: Color($.def).darken(0.1).hexString(),
    color: $.primaryDark,
    ':hover': {
      color: Color($.def).darken(0.1).hexString(),
      borderColor: Color($.def).darken(0.1).hexString(),
      textDecoration: 'none'
    },
    ':focus': {
      color: Color($.def).darken(0.1).hexString(),
      borderColor: Color($.def).darken(0.1).hexString(),
      textDecoration: 'none'
    },
    ':active': {
      color: Color($.def).darken(0.1).hexString(),
      borderColor: Color($.def).darken(0.1).hexString(),
      textDecoration: 'none'
    }
  },
  primary_o: {
    backgroundColor: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: $.primary,
    color: $.primary,
    ':hover': {
      color: Color($.primary).darken(0.1).hexString(),
      borderColor: Color($.primary).darken(0.1).hexString(),
      textDecoration: 'none'
    },
    ':focus': {
      color: Color($.primary).darken(0.1).hexString(),
      borderColor: Color($.primary).darken(0.1).hexString(),
      textDecoration: 'none'
    },
    ':active': {
      color: Color($.primary).darken(0.1).hexString(),
      borderColor: Color($.primary).darken(0.1).hexString(),
      textDecoration: 'none'
    }
  },
  danger_o: {
    backgroundColor: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: $.danger,
    color: $.danger,
    ':hover': {
      color: Color($.danger).darken(0.1).hexString(),
      borderColor: Color($.danger).darken(0.1).hexString(),
      textDecoration: 'none'
    },
    ':focus': {
      color: Color($.danger).darken(0.1).hexString(),
      borderColor: Color($.danger).darken(0.1).hexString(),
      textDecoration: 'none'
    },
    ':active': {
      color: Color($.danger).darken(0.1).hexString(),
      borderColor: Color($.danger).darken(0.1).hexString(),
      textDecoration: 'none'
    }
  }
};
