import Index from './Index';
import ErrorFragment from './ErrorFragment';
import ErrorDetailFragment from './ErrorDetailFragment';
 
import HomeActivity from './HomeActivity';
import TestActivity from './TestActivity';
import ModelListActivity from './ModelListActivity';
//start - imports
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
	'layout/absolutelayoutandroid_test.xml': AbsoluteLayoutAndroidActivity,
	'layout/absolutelayoutswt_test.xml': AbsoluteLayoutSwtActivity,
	'layout/absolutelayoutios_test.xml': AbsoluteLayoutIosActivity,
	'layout/absolutelayoutweb_test.xml': AbsoluteLayoutWebActivity,
   //end - body
};