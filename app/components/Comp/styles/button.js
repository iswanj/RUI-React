import Color from 'color';
import helpers from './util/ButtonHelpers';
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
    outline: 'none',
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
  normalSize: {
    padding: `${$.button.btnPaddingVertical} ${$.button.btnPaddingHorizontal}`,
    fontSize: '.9em',
    lineHeight: 1.444,
    borderRadius: $.bordeRadiusBase,
  },
  small: {
    padding: `${$.button.btnPaddingSmVertical} ${$.button.btnPaddingSmHorizontal}`,
    fontSize: '.75em',
    lineHeight: 1.444,
    borderRadius: $.bordeRadiusBase,
  },
  large: {
    padding: `${$.button.btnPaddingLgVertical} ${$.button.btnPaddingLgHorizontal}`,
    fontSize: '1.4em',
    fontWeight: '400',
    lineHeight: 1.444,
    borderRadius: $.bordeRadiusBase,
  },
  normal: helpers.buttonVariant($.textNormal, $.def, $.def),
  normalClicked: helpers.buttonVariantClicked($.textNormal, $.def, $.def),
  normalHovered: helpers.buttonVariantHovered($.textNormal, $.def, $.def),

  primary: helpers.buttonVariant($.textWhite, $.primary, $.primary),
  primaryClicked: helpers.buttonVariantClicked($.textWhite, $.primary, $.primary),
  primaryHovered: helpers.buttonVariantHovered($.textWhite, $.primary, $.primary),

  danger: helpers.buttonVariant($.textWhite, $.danger, $.danger),
  dangerClicked: helpers.buttonVariantClicked($.textWhite, $.danger, $.danger),
  dangerHovered: helpers.buttonVariantHovered($.textWhite, $.danger, $.danger),

  secondary: helpers.buttonVariant($.textWhite, $.secondary, $.secondary),
  secondaryClicked: helpers.buttonVariantClicked($.textWhite, $.secondary, $.secondary),
  secondaryHovered: helpers.buttonVariantHovered($.textWhite, $.secondary, $.secondary),

  normal_o: helpers.buttonVariant($.textNormal, 'transparent', $.def),
  normal_oClicked: helpers.buttonVariantClicked(Color($.textNormal).darken(0.1), 'transparent', $.def),
  normal_oHovered: helpers.buttonVariantHovered( Color($.textNormal).darken(0.15).hexString(), 'transparent', $.def),

  primary_o: helpers.buttonVariant($.textNormal, 'transparent', $.primary),
  primary_oClicked: helpers.buttonVariantClicked(Color($.primary).darken(0.1), 'transparent', $.primary),
  primary_oHovered: helpers.buttonVariantHovered( Color($.primary).darken(0.15).hexString(), 'transparent', $.primary),

  danger_o: helpers.buttonVariant($.textNormal, 'transparent', $.danger),
  danger_oClicked: helpers.buttonVariantClicked(Color($.danger).darken(0.1), 'transparent', $.danger),
  danger_oHovered: helpers.buttonVariantHovered( Color($.danger).darken(0.15).hexString(), 'transparent', $.danger),

  secondary_o: helpers.buttonVariant($.textNormal, 'transparent', $.secondary),
  secondary_oClicked: helpers.buttonVariantClicked(Color($.secondary).darken(0.1), 'transparent', $.secondary),
  secondary_oHovered: helpers.buttonVariantHovered( Color($.secondary).darken(0.15).hexString(), 'transparent', $.secondary),
};
