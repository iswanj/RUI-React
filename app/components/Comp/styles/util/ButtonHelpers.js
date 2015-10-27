import Color from 'color';
class Helper {
    buttonVariant(btnColor, Background, Border) {
        return {
            color: btnColor,
            backgroundColor: Background,
            borderColor: Border
        }
    }

    buttonVariantClicked(btnColor, Background, Border) {
        return {
          color: btnColor,
          backgroundColor: (Background === 'transparent') ? Background : Color(Background).darken(0.15).hexString(),
          borderColor: Color(Border).darken(0.25).hexString(),
        }
    }

    buttonVariantHovered(btnColor, Background, Border) {
        return {
          color: btnColor,
          backgroundColor: (Background === 'transparent') ? Background : Color(Background).darken(0.1).hexString(),
          borderColor: Color(Border).darken(0.12).hexString(),
        }
    }
}
export default new Helper();
