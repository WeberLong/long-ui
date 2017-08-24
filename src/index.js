// import content from './content'
import scrollView from './components/scrollView/scrollView'
import ripple from './components/ripple/ripple'
import overlay from './components/overlay/overlay'
import icon from './components/icon/icon'
import iconButton from './components/icon/iconButton'
import badge from './components/badge/badge'
import circular from './components/circular/circular'
import refreshControl from './components/refreshControl/refreshControl'
import infiniteScroll from './components/infiniteScroll/infiniteScroll'

// button
import buttonArea from './components/button/buttonArea'
import buttonRow from './components/button/buttonRow'
import Button from './components/button/button'
import floatButton from './components/button/floatButton'
// bars
import headerBar from './components/bars/headerBar'
import tabBar from './components/bars/tabBar'
import tabBarItem from './components/bars/tabBarItem'
import searchBar from './components/bars/searchBar'
import snackBar from './components/bars/snackBar'
// bottomNav
import bottomNav from './components/bottomNav/bottomNav'
import bottomNavItem from './components/bottomNav/bottomNavItem'

// tips
import toast from './components/toast/toast'

// listview
import list from './components/list/list'
import item from './components/list/item'
import itemCell from './components/list/itemCell'
import itemMedia from './components/list/itemMedia'
import itemContent from './components/list/itemContent'
import itemTitleRow from './components/list/itemTitleRow'
import itemTitle from './components/list/itemTitle'
import itemTitleAfter from './components/list/itemTitleAfter'
import itemSubTitle from './components/list/itemSubTitle'
import itemText from './components/list/itemText'
import itemDivider from './components/list/itemDivider'

// card
import card from './components/card/card'
import cardHeader from './components/card/cardHeader'
import cardFooter from './components/card/cardFooter'
import cardContent from './components/card/cardContent'
import cardTitle from './components/card/cardTitle'
import cardTools from './components/card/cardTools'
import cardImage from './components/card/cardImage'

// content block
import contentBlock from './components/contentBlock/contentBlock'
import contentTitle from './components/contentTitle/contentTitle'

// grid
import gridRow from './components/grid/gridRow'
import gridCol from './components/grid/gridCol'

// forms
import formList from './components/forms/formList'
import itemForm from './components/forms/itemForm'
import textField from './components/forms/textField'
import _switch from './components/forms/switch'
import range from './components/forms/range'
import checkbox from './components/forms/checkbox'
import radio from './components/forms/radio'
import selectField from './components/forms/selectField'
import dateSelect from './components/forms/dateSelect'

// modal
import modal from './components/modal/modal'
import alert from './components/modal/alert'
import confirm from './components/modal/confirm'
import prompt from './components/modal/prompt'

import popup from './components/popup/popup'
import actionSheet from './components/actionSheet/actionSheet'
import popover from './components/popover/popover'
import indicator from './components/indicator/indicator'
import picker from './components/picker/picker'
import pickerSlot from './components/picker/picker-slot'
import navDrawer from './components/nav/navDrawer'
import navMenu from './components/nav/navMenu'
import navDivider from './components/nav/navDivider'
import navMenuHeader from './components/nav/navMenuHeader'

var components = {
  'scroll-view': scrollView,
  overlay,
  icon,
  ripple,
  'icon-button': iconButton,
  badge,
  circular,
  'refresh-control': refreshControl,
  'infinite-scroll': infiniteScroll,
  'button-area': buttonArea,
  'button-row': buttonRow,
  Button,
  'float-button': floatButton,
  'header-bar': headerBar,
  'tab-bar': tabBar,
  'tab-bar-item': tabBarItem,
  'search-bar': searchBar,
  'snack-bar': snackBar,
  'bottom-nav': bottomNav,
  'bottom-nav-item': bottomNavItem,
  toast,
  list,
  item,
  'item-cell': itemCell,
  'item-media': itemMedia,
  'item-content': itemContent,
  'item-title-row': itemTitleRow,
  'item-title': itemTitle,
  'item-title-after': itemTitleAfter,
  'item-sub-title': itemSubTitle,
  'item-text': itemText,
  'item-divider': itemDivider,
  'content-block': contentBlock,
  'content-title': contentTitle,
  'grid-row': gridRow,
  'grid-col': gridCol,
  card,
  'card-header': cardHeader,
  'card-footer': cardFooter,
  'card-content': cardContent,
  'card-title': cardTitle,
  'card-tools': cardTools,
  'card-image': cardImage,
  'form-list': formList,
  'item-form': itemForm,
  'text-field': textField,
  'ui-switch': _switch,
  range,
  checkbox,
  radio,
  'select-field': selectField,
  'date-select': dateSelect,
  modal,
  alert,
  confirm,
  prompt,
  popup,
  popover,
  'action-sheet': actionSheet,
  indicator,
  picker,
  'picker-slot': pickerSlot,
  'nav-drawer': navDrawer,
  'nav-menu': navMenu,
  'nav-divider': navDivider,
  'nav-menu-header': navMenuHeader
}

export default {
  install (Vue) {
    Object.keys(components).forEach((key) => Vue.component(key, components[key]))
  }
}
