import Index from './Index';
import ErrorFragment from './ErrorFragment';
import ErrorDetailFragment from './ErrorDetailFragment';
 
import HomeActivity from './HomeActivity';
import TestActivity from './TestActivity';
import ModelListActivity from './ModelListActivity';
//start - imports
import ViewAndroidActivity from './ViewAndroidActivity';
import ViewIosActivity from './ViewIosActivity';
import ViewGroupAndroidActivity from './ViewGroupAndroidActivity';
import ViewGroupIosActivity from './ViewGroupIosActivity';
import ViewSwtActivity from './ViewSwtActivity';
import ViewWebActivity from './ViewWebActivity';
import ViewGroupSwtActivity from './ViewGroupSwtActivity';
import ViewGroupWebActivity from './ViewGroupWebActivity';
import ViewGroupModelAndroidActivity from './ViewGroupModelAndroidActivity';
import ViewGroupModelIosActivity from './ViewGroupModelIosActivity';
import ViewGroupModelWebActivity from './ViewGroupModelWebActivity';
import ViewGroupModelSwtActivity from './ViewGroupModelSwtActivity';
import FrameLayoutAndroidActivity from './FrameLayoutAndroidActivity';
import FrameLayoutSwtActivity from './FrameLayoutSwtActivity';
import FrameLayoutIosActivity from './FrameLayoutIosActivity';
import FrameLayoutWebActivity from './FrameLayoutWebActivity';
import LinearLayoutAndroidActivity from './LinearLayoutAndroidActivity';
import LinearLayoutSwtActivity from './LinearLayoutSwtActivity';
import LinearLayoutIosActivity from './LinearLayoutIosActivity';
import LinearLayoutWebActivity from './LinearLayoutWebActivity';
import TextViewAndroidActivity from './TextViewAndroidActivity';
import LinkAndroidActivity from './LinkAndroidActivity';
import TextViewIosActivity from './TextViewIosActivity';
import LinkIosActivity from './LinkIosActivity';
import UITextViewLabelIosActivity from './UITextViewLabelIosActivity';
import TextViewSwtActivity from './TextViewSwtActivity';
import TextViewWebActivity from './TextViewWebActivity';
import CLabelSwtActivity from './CLabelSwtActivity';
import LinkSwtActivity from './LinkSwtActivity';
import LinkWebActivity from './LinkWebActivity';
import ModelAndroidActivity from './ModelAndroidActivity';
import ModelSwtActivity from './ModelSwtActivity';
import ModelWebActivity from './ModelWebActivity';
import ModelIosActivity from './ModelIosActivity';
import ListViewAndroidActivity from './ListViewAndroidActivity';
import ScrollViewAndroidActivity from './ScrollViewAndroidActivity';
import ScrollViewSwtActivity from './ScrollViewSwtActivity';
import ScrollViewWebActivity from './ScrollViewWebActivity';
import ScrollViewIosActivity from './ScrollViewIosActivity';
import ImageViewAndroidActivity from './ImageViewAndroidActivity';
import EditTextAndroidActivity from './EditTextAndroidActivity';
import RelativeLayoutAndroidActivity from './RelativeLayoutAndroidActivity';
import RelativeLayoutSwtActivity from './RelativeLayoutSwtActivity';
import RelativeLayoutIosActivity from './RelativeLayoutIosActivity';
import RelativeLayoutWebActivity from './RelativeLayoutWebActivity';
import TableLayoutAndroidActivity from './TableLayoutAndroidActivity';
import TableLayoutSwtActivity from './TableLayoutSwtActivity';
import TableLayoutIosActivity from './TableLayoutIosActivity';
import TableLayoutWebActivity from './TableLayoutWebActivity';
import TableRowAndroidActivity from './TableRowAndroidActivity';
import TableRowSwtActivity from './TableRowSwtActivity';
import TableRowIosActivity from './TableRowIosActivity';
import TableRowWebActivity from './TableRowWebActivity';
import HorizontalScrollViewAndroidActivity from './HorizontalScrollViewAndroidActivity';
import HorizontalScrollViewSwtActivity from './HorizontalScrollViewSwtActivity';
import HorizontalScrollViewWebActivity from './HorizontalScrollViewWebActivity';
import HorizontalScrollViewIosActivity from './HorizontalScrollViewIosActivity';
import ButtonAndroidActivity from './ButtonAndroidActivity';
import CheckBoxAndroidActivity from './CheckBoxAndroidActivity';
import RadioButtonAndroidActivity from './RadioButtonAndroidActivity';
import SwitchAndroidActivity from './SwitchAndroidActivity';
import SwitchIosActivity from './SwitchIosActivity';
import SwitchWebActivity from './SwitchWebActivity';
import ToggleButtonAndroidActivity from './ToggleButtonAndroidActivity';
import RadioGroupAndroidActivity from './RadioGroupAndroidActivity';
import RadioGroupSwtActivity from './RadioGroupSwtActivity';
import RadioGroupWebActivity from './RadioGroupWebActivity';
import RadioGroupIosActivity from './RadioGroupIosActivity';
import ImageButtonAndroidActivity from './ImageButtonAndroidActivity';
import ChronometerAndroidActivity from './ChronometerAndroidActivity';
import ChronometerSwtActivity from './ChronometerSwtActivity';
import ChronometerWebActivity from './ChronometerWebActivity';
import ChronometerIosActivity from './ChronometerIosActivity';
import ListViewSwtActivity from './ListViewSwtActivity';
import ListViewWebActivity from './ListViewWebActivity';
import ListViewIosActivity from './ListViewIosActivity';
import ImageViewSwtActivity from './ImageViewSwtActivity';
import ImageViewWebActivity from './ImageViewWebActivity';
import ImageViewIosActivity from './ImageViewIosActivity';
import ImageButtonIosActivity from './ImageButtonIosActivity';
import ImageButtonSwtActivity from './ImageButtonSwtActivity';
import ImageButtonWebActivity from './ImageButtonWebActivity';
import EditTextIosActivity from './EditTextIosActivity';
import UITextViewIosActivity from './UITextViewIosActivity';
import ButtonIosActivity from './ButtonIosActivity';
import EditTextSwtActivity from './EditTextSwtActivity';
import EditTextWebActivity from './EditTextWebActivity';
import TextAreaWebActivity from './TextAreaWebActivity';
import ButtonSwtActivity from './ButtonSwtActivity';
import ButtonWebActivity from './ButtonWebActivity';
import TextViewButtonSwtActivity from './TextViewButtonSwtActivity';
import CheckBoxSwtActivity from './CheckBoxSwtActivity';
import CheckBoxWebActivity from './CheckBoxWebActivity';
import ImageCheckBoxSwtActivity from './ImageCheckBoxSwtActivity';
import CheckBoxIosActivity from './CheckBoxIosActivity';
import RadioButtonIosActivity from './RadioButtonIosActivity';
import RadioButtonSwtActivity from './RadioButtonSwtActivity';
import RadioButtonWebActivity from './RadioButtonWebActivity';
import ImageRadioButtonSwtActivity from './ImageRadioButtonSwtActivity';
import ToggleButtonSwtActivity from './ToggleButtonSwtActivity';
import ToggleButtonIosActivity from './ToggleButtonIosActivity';
import ToggleButtonWebActivity from './ToggleButtonWebActivity';
import SpinnerAndroidActivity from './SpinnerAndroidActivity';
import SpinnerSwtActivity from './SpinnerSwtActivity';
import CComboSwtActivity from './CComboSwtActivity';
import SpinnerWebActivity from './SpinnerWebActivity';
import SpinnerIosActivity from './SpinnerIosActivity';
import MultiSelectionSpinnerAndroidActivity from './MultiSelectionSpinnerAndroidActivity';
import MultiSelectionSpinnerSwtActivity from './MultiSelectionSpinnerSwtActivity';
import MultiSelectionSpinnerWebActivity from './MultiSelectionSpinnerWebActivity';
import MultiSelectionSpinnerIosActivity from './MultiSelectionSpinnerIosActivity';
import WebViewAndroidActivity from './WebViewAndroidActivity';
import WebViewSwtActivity from './WebViewSwtActivity';
import WebViewIosActivity from './WebViewIosActivity';
import WebViewWebActivity from './WebViewWebActivity';
import StyledLabelSwtActivity from './StyledLabelSwtActivity';
import StyledTextSwtActivity from './StyledTextSwtActivity';
import RadioButtonStyledLabelSwtActivity from './RadioButtonStyledLabelSwtActivity';
import CheckBoxStyledLabelSwtActivity from './CheckBoxStyledLabelSwtActivity';
import SwitchSwtActivity from './SwitchSwtActivity';
import SwitchStyledLabelSwtActivity from './SwitchStyledLabelSwtActivity';
import ProgressBarAndroidActivity from './ProgressBarAndroidActivity';
import ProgressBarSwtActivity from './ProgressBarSwtActivity';
import ProgressBarWebActivity from './ProgressBarWebActivity';
import ProgressBarIosActivity from './ProgressBarIosActivity';
import UIProgressViewIosActivity from './UIProgressViewIosActivity';
import PopupWindowAndroidActivity from './PopupWindowAndroidActivity';
import PopupWindowSwtActivity from './PopupWindowSwtActivity';
import PopupWindowWebActivity from './PopupWindowWebActivity';
import PopupWindowIosActivity from './PopupWindowIosActivity';
import AutoCompleteTextViewAndroidActivity from './AutoCompleteTextViewAndroidActivity';
import AutoCompleteTextViewSwtActivity from './AutoCompleteTextViewSwtActivity';
import AutoCompleteTextViewWebActivity from './AutoCompleteTextViewWebActivity';
import AutoCompleteTextViewIosActivity from './AutoCompleteTextViewIosActivity';
import AbsoluteLayoutAndroidActivity from './AbsoluteLayoutAndroidActivity';
import AbsoluteLayoutSwtActivity from './AbsoluteLayoutSwtActivity';
import AbsoluteLayoutIosActivity from './AbsoluteLayoutIosActivity';
import AbsoluteLayoutWebActivity from './AbsoluteLayoutWebActivity';
//end - imports
export const fragmentMapper : any = {
  'layout/error.xml': ErrorFragment,
  'layout/error_detail.xml': ErrorDetailFragment,
  'layout/index.xml': HomeActivity,
  'layout/relativelayout.xml': TestActivity,
  'layout/linearlayout.xml': TestActivity,
  'layout/framelayout.xml': TestActivity,
  'layout/imageview.xml': TestActivity,
  'layout/button.xml': TestActivity,
  'layout/textview.xml': TestActivity,
  'layout/textbox.xml': TestActivity,
  'layout/gridlayout.xml': TestActivity,
  'layout/constraint_layout.xml': TestActivity,
  'layout/modeltest_listview.xml': ModelListActivity,
   //start - body 
	'layout/viewandroid_test.xml': ViewAndroidActivity,
	'layout/viewios_test.xml': ViewIosActivity,
	'layout/viewgroupandroid_test.xml': ViewGroupAndroidActivity,
	'layout/viewgroupios_test.xml': ViewGroupIosActivity,
	'layout/viewswt_test.xml': ViewSwtActivity,
	'layout/viewweb_test.xml': ViewWebActivity,
	'layout/viewgroupswt_test.xml': ViewGroupSwtActivity,
	'layout/viewgroupweb_test.xml': ViewGroupWebActivity,
	'layout/viewgroupmodelandroid_test.xml': ViewGroupModelAndroidActivity,
	'layout/viewgroupmodelios_test.xml': ViewGroupModelIosActivity,
	'layout/viewgroupmodelweb_test.xml': ViewGroupModelWebActivity,
	'layout/viewgroupmodelswt_test.xml': ViewGroupModelSwtActivity,
	'layout/framelayoutandroid_test.xml': FrameLayoutAndroidActivity,
	'layout/framelayoutswt_test.xml': FrameLayoutSwtActivity,
	'layout/framelayoutios_test.xml': FrameLayoutIosActivity,
	'layout/framelayoutweb_test.xml': FrameLayoutWebActivity,
	'layout/linearlayoutandroid_test.xml': LinearLayoutAndroidActivity,
	'layout/linearlayoutswt_test.xml': LinearLayoutSwtActivity,
	'layout/linearlayoutios_test.xml': LinearLayoutIosActivity,
	'layout/linearlayoutweb_test.xml': LinearLayoutWebActivity,
	'layout/textviewandroid_test.xml': TextViewAndroidActivity,
	'layout/linkandroid_test.xml': LinkAndroidActivity,
	'layout/textviewios_test.xml': TextViewIosActivity,
	'layout/linkios_test.xml': LinkIosActivity,
	'layout/uitextviewlabelios_test.xml': UITextViewLabelIosActivity,
	'layout/textviewswt_test.xml': TextViewSwtActivity,
	'layout/textviewweb_test.xml': TextViewWebActivity,
	'layout/clabelswt_test.xml': CLabelSwtActivity,
	'layout/linkswt_test.xml': LinkSwtActivity,
	'layout/linkweb_test.xml': LinkWebActivity,
	'layout/modelandroid_test.xml': ModelAndroidActivity,
	'layout/modelswt_test.xml': ModelSwtActivity,
	'layout/modelweb_test.xml': ModelWebActivity,
	'layout/modelios_test.xml': ModelIosActivity,
	'layout/listviewandroid_test.xml': ListViewAndroidActivity,
	'layout/scrollviewandroid_test.xml': ScrollViewAndroidActivity,
	'layout/scrollviewswt_test.xml': ScrollViewSwtActivity,
	'layout/scrollviewweb_test.xml': ScrollViewWebActivity,
	'layout/scrollviewios_test.xml': ScrollViewIosActivity,
	'layout/imageviewandroid_test.xml': ImageViewAndroidActivity,
	'layout/edittextandroid_test.xml': EditTextAndroidActivity,
	'layout/relativelayoutandroid_test.xml': RelativeLayoutAndroidActivity,
	'layout/relativelayoutswt_test.xml': RelativeLayoutSwtActivity,
	'layout/relativelayoutios_test.xml': RelativeLayoutIosActivity,
	'layout/relativelayoutweb_test.xml': RelativeLayoutWebActivity,
	'layout/tablelayoutandroid_test.xml': TableLayoutAndroidActivity,
	'layout/tablelayoutswt_test.xml': TableLayoutSwtActivity,
	'layout/tablelayoutios_test.xml': TableLayoutIosActivity,
	'layout/tablelayoutweb_test.xml': TableLayoutWebActivity,
	'layout/tablerowandroid_test.xml': TableRowAndroidActivity,
	'layout/tablerowswt_test.xml': TableRowSwtActivity,
	'layout/tablerowios_test.xml': TableRowIosActivity,
	'layout/tablerowweb_test.xml': TableRowWebActivity,
	'layout/horizontalscrollviewandroid_test.xml': HorizontalScrollViewAndroidActivity,
	'layout/horizontalscrollviewswt_test.xml': HorizontalScrollViewSwtActivity,
	'layout/horizontalscrollviewweb_test.xml': HorizontalScrollViewWebActivity,
	'layout/horizontalscrollviewios_test.xml': HorizontalScrollViewIosActivity,
	'layout/buttonandroid_test.xml': ButtonAndroidActivity,
	'layout/checkboxandroid_test.xml': CheckBoxAndroidActivity,
	'layout/radiobuttonandroid_test.xml': RadioButtonAndroidActivity,
	'layout/switchandroid_test.xml': SwitchAndroidActivity,
	'layout/switchios_test.xml': SwitchIosActivity,
	'layout/switchweb_test.xml': SwitchWebActivity,
	'layout/togglebuttonandroid_test.xml': ToggleButtonAndroidActivity,
	'layout/radiogroupandroid_test.xml': RadioGroupAndroidActivity,
	'layout/radiogroupswt_test.xml': RadioGroupSwtActivity,
	'layout/radiogroupweb_test.xml': RadioGroupWebActivity,
	'layout/radiogroupios_test.xml': RadioGroupIosActivity,
	'layout/imagebuttonandroid_test.xml': ImageButtonAndroidActivity,
	'layout/chronometerandroid_test.xml': ChronometerAndroidActivity,
	'layout/chronometerswt_test.xml': ChronometerSwtActivity,
	'layout/chronometerweb_test.xml': ChronometerWebActivity,
	'layout/chronometerios_test.xml': ChronometerIosActivity,
	'layout/listviewswt_test.xml': ListViewSwtActivity,
	'layout/listviewweb_test.xml': ListViewWebActivity,
	'layout/listviewios_test.xml': ListViewIosActivity,
	'layout/imageviewswt_test.xml': ImageViewSwtActivity,
	'layout/imageviewweb_test.xml': ImageViewWebActivity,
	'layout/imageviewios_test.xml': ImageViewIosActivity,
	'layout/imagebuttonios_test.xml': ImageButtonIosActivity,
	'layout/imagebuttonswt_test.xml': ImageButtonSwtActivity,
	'layout/imagebuttonweb_test.xml': ImageButtonWebActivity,
	'layout/edittextios_test.xml': EditTextIosActivity,
	'layout/uitextviewios_test.xml': UITextViewIosActivity,
	'layout/buttonios_test.xml': ButtonIosActivity,
	'layout/edittextswt_test.xml': EditTextSwtActivity,
	'layout/edittextweb_test.xml': EditTextWebActivity,
	'layout/textareaweb_test.xml': TextAreaWebActivity,
	'layout/buttonswt_test.xml': ButtonSwtActivity,
	'layout/buttonweb_test.xml': ButtonWebActivity,
	'layout/textviewbuttonswt_test.xml': TextViewButtonSwtActivity,
	'layout/checkboxswt_test.xml': CheckBoxSwtActivity,
	'layout/checkboxweb_test.xml': CheckBoxWebActivity,
	'layout/imagecheckboxswt_test.xml': ImageCheckBoxSwtActivity,
	'layout/checkboxios_test.xml': CheckBoxIosActivity,
	'layout/radiobuttonios_test.xml': RadioButtonIosActivity,
	'layout/radiobuttonswt_test.xml': RadioButtonSwtActivity,
	'layout/radiobuttonweb_test.xml': RadioButtonWebActivity,
	'layout/imageradiobuttonswt_test.xml': ImageRadioButtonSwtActivity,
	'layout/togglebuttonswt_test.xml': ToggleButtonSwtActivity,
	'layout/togglebuttonios_test.xml': ToggleButtonIosActivity,
	'layout/togglebuttonweb_test.xml': ToggleButtonWebActivity,
	'layout/spinnerandroid_test.xml': SpinnerAndroidActivity,
	'layout/spinnerswt_test.xml': SpinnerSwtActivity,
	'layout/ccomboswt_test.xml': CComboSwtActivity,
	'layout/spinnerweb_test.xml': SpinnerWebActivity,
	'layout/spinnerios_test.xml': SpinnerIosActivity,
	'layout/multiselectionspinnerandroid_test.xml': MultiSelectionSpinnerAndroidActivity,
	'layout/multiselectionspinnerswt_test.xml': MultiSelectionSpinnerSwtActivity,
	'layout/multiselectionspinnerweb_test.xml': MultiSelectionSpinnerWebActivity,
	'layout/multiselectionspinnerios_test.xml': MultiSelectionSpinnerIosActivity,
	'layout/webviewandroid_test.xml': WebViewAndroidActivity,
	'layout/webviewswt_test.xml': WebViewSwtActivity,
	'layout/webviewios_test.xml': WebViewIosActivity,
	'layout/webviewweb_test.xml': WebViewWebActivity,
	'layout/styledlabelswt_test.xml': StyledLabelSwtActivity,
	'layout/styledtextswt_test.xml': StyledTextSwtActivity,
	'layout/radiobuttonstyledlabelswt_test.xml': RadioButtonStyledLabelSwtActivity,
	'layout/checkboxstyledlabelswt_test.xml': CheckBoxStyledLabelSwtActivity,
	'layout/switchswt_test.xml': SwitchSwtActivity,
	'layout/switchstyledlabelswt_test.xml': SwitchStyledLabelSwtActivity,
	'layout/progressbarandroid_test.xml': ProgressBarAndroidActivity,
	'layout/progressbarswt_test.xml': ProgressBarSwtActivity,
	'layout/progressbarweb_test.xml': ProgressBarWebActivity,
	'layout/progressbarios_test.xml': ProgressBarIosActivity,
	'layout/uiprogressviewios_test.xml': UIProgressViewIosActivity,
	'layout/popupwindowandroid_test.xml': PopupWindowAndroidActivity,
	'layout/popupwindowswt_test.xml': PopupWindowSwtActivity,
	'layout/popupwindowweb_test.xml': PopupWindowWebActivity,
	'layout/popupwindowios_test.xml': PopupWindowIosActivity,
	'layout/autocompletetextviewandroid_test.xml': AutoCompleteTextViewAndroidActivity,
	'layout/autocompletetextviewswt_test.xml': AutoCompleteTextViewSwtActivity,
	'layout/autocompletetextviewweb_test.xml': AutoCompleteTextViewWebActivity,
	'layout/autocompletetextviewios_test.xml': AutoCompleteTextViewIosActivity,
	'layout/absolutelayoutandroid_test.xml': AbsoluteLayoutAndroidActivity,
	'layout/absolutelayoutswt_test.xml': AbsoluteLayoutSwtActivity,
	'layout/absolutelayoutios_test.xml': AbsoluteLayoutIosActivity,
	'layout/absolutelayoutweb_test.xml': AbsoluteLayoutWebActivity,
   //end - body
};