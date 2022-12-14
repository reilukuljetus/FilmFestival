import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  main: {
    marginTop: '10%',
    width: '100%',
    borderTopColor: globalStyles.Theme.border,
    borderTopWidth: heightRef,
    flexDirection: 'row',
    flex: 1,
    paddingVertical: heightRef * 25,
  },
  border: {
    height: '80%',
    width: widthRef,
    backgroundColor: globalStyles.Theme.border,
    alignSelf: 'center',
  },
  left: {
    flex: 0.5,
    paddingHorizontal: widthRef * 10,
    flexDirection: 'row',
  },
  textLeft: {
    flex: 0.5,
    fontSize: isPhone ? fontRef * 7 : fontRef * 12,
    color: globalStyles.Theme.white,
  },
  right: {
    flex: 0.5,
    paddingHorizontal: widthRef * 20,
  },
  logoImage: {
    height: heightRef * 30,
    width: widthRef * 75,
    resizeMode: 'contain',
    ...breakpoints.up('sm', {height: heightRef * 60, width: widthRef * 126}),
  },
  socialLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingTop: heightRef * 10,
  },
  logo: {
    flex: 0.5,
    alignItems: 'center',
  },
  filmFestival: {
    color: globalStyles.Theme.white,
    fontSize: isPhone ? fontRef * 10 : fontRef * 16,
    fontWeight: '500',
  },
  linkSection: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    marginTop: heightRef * 12,
  },
  link: {
    fontSize: isPhone ? fontRef * 8 : fontRef * 12,
    fontWeight: '300',
    color: globalStyles.Theme.white,
    marginBottom: heightRef * 8,
  },
  rights: {
    backgroundColor: '#1C1C23',
    padding: heightRef * 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightsText: {
    color: globalStyles.Theme.white,
    fontWeight: '300',
    fontSize: fontRef * 9,
  },
}));
