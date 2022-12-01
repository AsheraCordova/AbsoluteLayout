import {Activity, Inject} from './app/Activity';
import ListView from './view/ListView';

import * as linearlayout from './android/widget/LinearLayoutImpl';
import * as view from './android/widget/ViewImpl';
import * as textview from './android/widget/TextViewImpl';
import {Gravity} from './widget/TypeConstants';
import {plainToClass} from "class-transformer";
import {NavController, InjectController} from './navigation/NavController';
import {OnClickEvent} from "./android/widget/ViewImpl";

export default class HomeActivity extends Activity{
    @Inject({ id : "@+id/listView"})
    private listView!: ListView;

	@InjectController({})
    navController!: NavController;

    constructor() {
        super();
    }

    async onCreate(obj:any) {
        this.listView.setBorderColor("red");
        this.listView.setBorderBottomWidth("2dp");
        let data = [
                {"id": "framelayout","name" : "Frame Layout"},
                {"id": "linearlayout","name" : "Linear Layout"},
                {"id": "relativelayout","name" : "Relative Layout"},
                {"id": "tablelayout","name" : "Table Layout"},
                {"id": "gridlayout","name" : "Grid Layout"},
                {"id": "constraintlayout","name" : "Constraint Layout"},
                {"id": "imageview","name" : "Image View"},
                {"id": "button","name" : "Button"},
                {"id": "textview","name" : "TextView"},
				//start - body    
								{"id": "ViewAndroidActivity","name" : "ViewAndroidActivity"},
				{"id": "ViewIosActivity","name" : "ViewIosActivity"},
				{"id": "ViewGroupAndroidActivity","name" : "ViewGroupAndroidActivity"},
				{"id": "ViewGroupIosActivity","name" : "ViewGroupIosActivity"},
				{"id": "ViewSwtActivity","name" : "ViewSwtActivity"},
				{"id": "ViewWebActivity","name" : "ViewWebActivity"},
				{"id": "ViewGroupSwtActivity","name" : "ViewGroupSwtActivity"},
				{"id": "ViewGroupWebActivity","name" : "ViewGroupWebActivity"},
				{"id": "ViewGroupModelAndroidActivity","name" : "ViewGroupModelAndroidActivity"},
				{"id": "ViewGroupModelIosActivity","name" : "ViewGroupModelIosActivity"},
				{"id": "ViewGroupModelWebActivity","name" : "ViewGroupModelWebActivity"},
				{"id": "ViewGroupModelSwtActivity","name" : "ViewGroupModelSwtActivity"},
				{"id": "FrameLayoutAndroidActivity","name" : "FrameLayoutAndroidActivity"},
				{"id": "FrameLayoutSwtActivity","name" : "FrameLayoutSwtActivity"},
				{"id": "FrameLayoutIosActivity","name" : "FrameLayoutIosActivity"},
				{"id": "FrameLayoutWebActivity","name" : "FrameLayoutWebActivity"},
				{"id": "LinearLayoutAndroidActivity","name" : "LinearLayoutAndroidActivity"},
				{"id": "LinearLayoutSwtActivity","name" : "LinearLayoutSwtActivity"},
				{"id": "LinearLayoutIosActivity","name" : "LinearLayoutIosActivity"},
				{"id": "LinearLayoutWebActivity","name" : "LinearLayoutWebActivity"},
				{"id": "TextViewAndroidActivity","name" : "TextViewAndroidActivity"},
				{"id": "LinkAndroidActivity","name" : "LinkAndroidActivity"},
				{"id": "TextViewIosActivity","name" : "TextViewIosActivity"},
				{"id": "LinkIosActivity","name" : "LinkIosActivity"},
				{"id": "UITextViewLabelIosActivity","name" : "UITextViewLabelIosActivity"},
				{"id": "TextViewSwtActivity","name" : "TextViewSwtActivity"},
				{"id": "TextViewWebActivity","name" : "TextViewWebActivity"},
				{"id": "CLabelSwtActivity","name" : "CLabelSwtActivity"},
				{"id": "LinkSwtActivity","name" : "LinkSwtActivity"},
				{"id": "LinkWebActivity","name" : "LinkWebActivity"},
				{"id": "ModelAndroidActivity","name" : "ModelAndroidActivity"},
				{"id": "ModelSwtActivity","name" : "ModelSwtActivity"},
				{"id": "ModelWebActivity","name" : "ModelWebActivity"},
				{"id": "ModelIosActivity","name" : "ModelIosActivity"},
				{"id": "ListViewAndroidActivity","name" : "ListViewAndroidActivity"},
				{"id": "ScrollViewAndroidActivity","name" : "ScrollViewAndroidActivity"},
				{"id": "ScrollViewSwtActivity","name" : "ScrollViewSwtActivity"},
				{"id": "ScrollViewWebActivity","name" : "ScrollViewWebActivity"},
				{"id": "ScrollViewIosActivity","name" : "ScrollViewIosActivity"},
				{"id": "ImageViewAndroidActivity","name" : "ImageViewAndroidActivity"},
				{"id": "EditTextAndroidActivity","name" : "EditTextAndroidActivity"},
				{"id": "RelativeLayoutAndroidActivity","name" : "RelativeLayoutAndroidActivity"},
				{"id": "RelativeLayoutSwtActivity","name" : "RelativeLayoutSwtActivity"},
				{"id": "RelativeLayoutIosActivity","name" : "RelativeLayoutIosActivity"},
				{"id": "RelativeLayoutWebActivity","name" : "RelativeLayoutWebActivity"},
				{"id": "TableLayoutAndroidActivity","name" : "TableLayoutAndroidActivity"},
				{"id": "TableLayoutSwtActivity","name" : "TableLayoutSwtActivity"},
				{"id": "TableLayoutIosActivity","name" : "TableLayoutIosActivity"},
				{"id": "TableLayoutWebActivity","name" : "TableLayoutWebActivity"},
				{"id": "TableRowAndroidActivity","name" : "TableRowAndroidActivity"},
				{"id": "TableRowSwtActivity","name" : "TableRowSwtActivity"},
				{"id": "TableRowIosActivity","name" : "TableRowIosActivity"},
				{"id": "TableRowWebActivity","name" : "TableRowWebActivity"},
				{"id": "HorizontalScrollViewAndroidActivity","name" : "HorizontalScrollViewAndroidActivity"},
				{"id": "HorizontalScrollViewSwtActivity","name" : "HorizontalScrollViewSwtActivity"},
				{"id": "HorizontalScrollViewWebActivity","name" : "HorizontalScrollViewWebActivity"},
				{"id": "HorizontalScrollViewIosActivity","name" : "HorizontalScrollViewIosActivity"},
				{"id": "ButtonAndroidActivity","name" : "ButtonAndroidActivity"},
				{"id": "CheckBoxAndroidActivity","name" : "CheckBoxAndroidActivity"},
				{"id": "RadioButtonAndroidActivity","name" : "RadioButtonAndroidActivity"},
				{"id": "SwitchAndroidActivity","name" : "SwitchAndroidActivity"},
				{"id": "SwitchIosActivity","name" : "SwitchIosActivity"},
				{"id": "SwitchWebActivity","name" : "SwitchWebActivity"},
				{"id": "ToggleButtonAndroidActivity","name" : "ToggleButtonAndroidActivity"},
				{"id": "RadioGroupAndroidActivity","name" : "RadioGroupAndroidActivity"},
				{"id": "RadioGroupSwtActivity","name" : "RadioGroupSwtActivity"},
				{"id": "RadioGroupWebActivity","name" : "RadioGroupWebActivity"},
				{"id": "RadioGroupIosActivity","name" : "RadioGroupIosActivity"},
				{"id": "ImageButtonAndroidActivity","name" : "ImageButtonAndroidActivity"},
				{"id": "ChronometerAndroidActivity","name" : "ChronometerAndroidActivity"},
				{"id": "ChronometerSwtActivity","name" : "ChronometerSwtActivity"},
				{"id": "ChronometerWebActivity","name" : "ChronometerWebActivity"},
				{"id": "ChronometerIosActivity","name" : "ChronometerIosActivity"},
				{"id": "ListViewSwtActivity","name" : "ListViewSwtActivity"},
				{"id": "ListViewWebActivity","name" : "ListViewWebActivity"},
				{"id": "ListViewIosActivity","name" : "ListViewIosActivity"},
				{"id": "ImageViewSwtActivity","name" : "ImageViewSwtActivity"},
				{"id": "ImageViewWebActivity","name" : "ImageViewWebActivity"},
				{"id": "ImageViewIosActivity","name" : "ImageViewIosActivity"},
				{"id": "ImageButtonIosActivity","name" : "ImageButtonIosActivity"},
				{"id": "ImageButtonSwtActivity","name" : "ImageButtonSwtActivity"},
				{"id": "ImageButtonWebActivity","name" : "ImageButtonWebActivity"},
				{"id": "EditTextIosActivity","name" : "EditTextIosActivity"},
				{"id": "UITextViewIosActivity","name" : "UITextViewIosActivity"},
				{"id": "ButtonIosActivity","name" : "ButtonIosActivity"},
				{"id": "EditTextSwtActivity","name" : "EditTextSwtActivity"},
				{"id": "EditTextWebActivity","name" : "EditTextWebActivity"},
				{"id": "TextAreaWebActivity","name" : "TextAreaWebActivity"},
				{"id": "ButtonSwtActivity","name" : "ButtonSwtActivity"},
				{"id": "ButtonWebActivity","name" : "ButtonWebActivity"},
				{"id": "TextViewButtonSwtActivity","name" : "TextViewButtonSwtActivity"},
				{"id": "CheckBoxSwtActivity","name" : "CheckBoxSwtActivity"},
				{"id": "CheckBoxWebActivity","name" : "CheckBoxWebActivity"},
				{"id": "ImageCheckBoxSwtActivity","name" : "ImageCheckBoxSwtActivity"},
				{"id": "CheckBoxIosActivity","name" : "CheckBoxIosActivity"},
				{"id": "RadioButtonIosActivity","name" : "RadioButtonIosActivity"},
				{"id": "RadioButtonSwtActivity","name" : "RadioButtonSwtActivity"},
				{"id": "RadioButtonWebActivity","name" : "RadioButtonWebActivity"},
				{"id": "ImageRadioButtonSwtActivity","name" : "ImageRadioButtonSwtActivity"},
				{"id": "ToggleButtonSwtActivity","name" : "ToggleButtonSwtActivity"},
				{"id": "ToggleButtonIosActivity","name" : "ToggleButtonIosActivity"},
				{"id": "ToggleButtonWebActivity","name" : "ToggleButtonWebActivity"},
				{"id": "SpinnerAndroidActivity","name" : "SpinnerAndroidActivity"},
				{"id": "SpinnerSwtActivity","name" : "SpinnerSwtActivity"},
				{"id": "CComboSwtActivity","name" : "CComboSwtActivity"},
				{"id": "SpinnerWebActivity","name" : "SpinnerWebActivity"},
				{"id": "SpinnerIosActivity","name" : "SpinnerIosActivity"},
				{"id": "MultiSelectionSpinnerAndroidActivity","name" : "MultiSelectionSpinnerAndroidActivity"},
				{"id": "MultiSelectionSpinnerSwtActivity","name" : "MultiSelectionSpinnerSwtActivity"},
				{"id": "MultiSelectionSpinnerWebActivity","name" : "MultiSelectionSpinnerWebActivity"},
				{"id": "MultiSelectionSpinnerIosActivity","name" : "MultiSelectionSpinnerIosActivity"},
				{"id": "WebViewAndroidActivity","name" : "WebViewAndroidActivity"},
				{"id": "WebViewSwtActivity","name" : "WebViewSwtActivity"},
				{"id": "WebViewIosActivity","name" : "WebViewIosActivity"},
				{"id": "WebViewWebActivity","name" : "WebViewWebActivity"},
				{"id": "StyledLabelSwtActivity","name" : "StyledLabelSwtActivity"},
				{"id": "StyledTextSwtActivity","name" : "StyledTextSwtActivity"},
				{"id": "RadioButtonStyledLabelSwtActivity","name" : "RadioButtonStyledLabelSwtActivity"},
				{"id": "CheckBoxStyledLabelSwtActivity","name" : "CheckBoxStyledLabelSwtActivity"},
				{"id": "SwitchSwtActivity","name" : "SwitchSwtActivity"},
				{"id": "SwitchStyledLabelSwtActivity","name" : "SwitchStyledLabelSwtActivity"},
				{"id": "ProgressBarAndroidActivity","name" : "ProgressBarAndroidActivity"},
				{"id": "ProgressBarSwtActivity","name" : "ProgressBarSwtActivity"},
				{"id": "ProgressBarWebActivity","name" : "ProgressBarWebActivity"},
				{"id": "ProgressBarIosActivity","name" : "ProgressBarIosActivity"},
				{"id": "UIProgressViewIosActivity","name" : "UIProgressViewIosActivity"},
				{"id": "AbsoluteLayoutAndroidActivity","name" : "AbsoluteLayoutAndroidActivity"},
				{"id": "AbsoluteLayoutSwtActivity","name" : "AbsoluteLayoutSwtActivity"},
				{"id": "AbsoluteLayoutIosActivity","name" : "AbsoluteLayoutIosActivity"},
				{"id": "AbsoluteLayoutWebActivity","name" : "AbsoluteLayoutWebActivity"},
                //end - body
        ];
        let filteredData = [];
        for (let i=0;i < data.length;i++) {
        	let name:string = data[i].name;
        	if (name.indexOf('Ios') != -1) {
        		filteredData.push(data[i]);
        	}
        }
        this.listView.updateModelData(filteredData, "layouts->view as list");
        await this.executeCommand(this.listView);
    }

     goToView = async(obj:OnClickEvent) => {
        if (obj.id == 'linearlayout') {
            await this.navController.reset().navigate("fragment#framelayout#layout/linearlayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'framelayout') {
            await this.navController.reset().navigate("fragment#framelayout#layout/framelayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'relativelayout') {
             await this.navController.reset().navigate("fragment#framelayout#layout/relativelayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'tablelayout') {
               await this.navController.reset().navigate("fragment#framelayout#layout/tablelayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'imageview') {
              await this.navController.reset().navigate("fragment#framelayout#layout/imageview.xml", "", {}).executeCommand();
        } else if (obj.id == 'button') {
             await this.navController.reset().navigate("fragment#framelayout#layout/button.xml", "", {}).executeCommand();
        } else if (obj.id == 'textview') {
            await this.navController.reset().navigate("fragment#framelayout#layout/textview.xml", "", {}).executeCommand();
        } else if (obj.id == 'textbox') {
          await this.navController.reset().navigate("fragment#framelayout#layout/edittext_test.xml", "", {}).executeCommand();
        } else if (obj.id == 'gridlayout') {
            await this.navController.reset().navigate("fragment#framelayout#layout/gridlayout.xml", "", {}).executeCommand();
        } else if (obj.id == 'constraintlayout') {
            await this.navController.reset().navigate("fragment#framelayout#layout/constraint_layout.xml", "", {}).executeCommand();
        } 
        //start - imports                
		else if (obj.id == 'ViewAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewGroupAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewgroupandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewGroupIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewgroupios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewGroupSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewgroupswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewGroupWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewgroupweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewGroupModelAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewgroupmodelandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewGroupModelIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewgroupmodelios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewGroupModelWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewgroupmodelweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ViewGroupModelSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/viewgroupmodelswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'FrameLayoutAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/framelayoutandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'FrameLayoutSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/framelayoutswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'FrameLayoutIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/framelayoutios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'FrameLayoutWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/framelayoutweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'LinearLayoutAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/linearlayoutandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'LinearLayoutSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/linearlayoutswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'LinearLayoutIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/linearlayoutios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'LinearLayoutWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/linearlayoutweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TextViewAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/textviewandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'LinkAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/linkandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TextViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/textviewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'LinkIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/linkios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'UITextViewLabelIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/uitextviewlabelios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TextViewSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/textviewswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TextViewWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/textviewweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'CLabelSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/clabelswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'LinkSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/linkswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'LinkWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/linkweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ModelAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/modelandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ModelSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/modelswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ModelWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/modelweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ModelIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/modelios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ListViewAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/listviewandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ScrollViewAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/scrollviewandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ScrollViewSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/scrollviewswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ScrollViewWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/scrollviewweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ScrollViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/scrollviewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageViewAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imageviewandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'EditTextAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/edittextandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RelativeLayoutAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/relativelayoutandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RelativeLayoutSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/relativelayoutswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RelativeLayoutIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/relativelayoutios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RelativeLayoutWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/relativelayoutweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TableLayoutAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/tablelayoutandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TableLayoutSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/tablelayoutswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TableLayoutIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/tablelayoutios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TableLayoutWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/tablelayoutweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TableRowAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/tablerowandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TableRowSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/tablerowswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TableRowIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/tablerowios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TableRowWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/tablerowweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'HorizontalScrollViewAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/horizontalscrollviewandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'HorizontalScrollViewSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/horizontalscrollviewswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'HorizontalScrollViewWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/horizontalscrollviewweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'HorizontalScrollViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/horizontalscrollviewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ButtonAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/buttonandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'CheckBoxAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/checkboxandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioButtonAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiobuttonandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SwitchAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/switchandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SwitchIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/switchios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SwitchWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/switchweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ToggleButtonAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/togglebuttonandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioGroupAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiogroupandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioGroupSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiogroupswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioGroupWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiogroupweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioGroupIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiogroupios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageButtonAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imagebuttonandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ChronometerAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/chronometerandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ChronometerSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/chronometerswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ChronometerWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/chronometerweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ChronometerIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/chronometerios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ListViewSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/listviewswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ListViewWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/listviewweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ListViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/listviewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageViewSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imageviewswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageViewWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imageviewweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imageviewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageButtonIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imagebuttonios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageButtonSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imagebuttonswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageButtonWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imagebuttonweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'EditTextIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/edittextios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'UITextViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/uitextviewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ButtonIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/buttonios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'EditTextSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/edittextswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'EditTextWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/edittextweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TextAreaWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/textareaweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ButtonSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/buttonswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ButtonWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/buttonweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'TextViewButtonSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/textviewbuttonswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'CheckBoxSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/checkboxswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'CheckBoxWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/checkboxweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageCheckBoxSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imagecheckboxswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'CheckBoxIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/checkboxios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioButtonIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiobuttonios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioButtonSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiobuttonswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioButtonWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiobuttonweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ImageRadioButtonSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/imageradiobuttonswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ToggleButtonSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/togglebuttonswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ToggleButtonIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/togglebuttonios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ToggleButtonWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/togglebuttonweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SpinnerAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/spinnerandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SpinnerSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/spinnerswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'CComboSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/ccomboswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SpinnerWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/spinnerweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SpinnerIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/spinnerios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'MultiSelectionSpinnerAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/multiselectionspinnerandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'MultiSelectionSpinnerSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/multiselectionspinnerswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'MultiSelectionSpinnerWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/multiselectionspinnerweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'MultiSelectionSpinnerIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/multiselectionspinnerios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'WebViewAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/webviewandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'WebViewSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/webviewswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'WebViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/webviewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'WebViewWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/webviewweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'StyledLabelSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/styledlabelswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'StyledTextSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/styledtextswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'RadioButtonStyledLabelSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/radiobuttonstyledlabelswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'CheckBoxStyledLabelSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/checkboxstyledlabelswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SwitchSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/switchswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'SwitchStyledLabelSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/switchstyledlabelswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ProgressBarAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/progressbarandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ProgressBarSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/progressbarswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ProgressBarWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/progressbarweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'ProgressBarIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/progressbarios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'UIProgressViewIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/uiprogressviewios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'AbsoluteLayoutAndroidActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/absolutelayoutandroid_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'AbsoluteLayoutSwtActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/absolutelayoutswt_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'AbsoluteLayoutIosActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/absolutelayoutios_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
		else if (obj.id == 'AbsoluteLayoutWebActivity') {
        	await this.navController.reset().navigate("fragment#framelayout#layout/absolutelayoutweb_test.xml", "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}, looptest: {textlayout: [{"sectionName":"test123"}, {"id":1, "a": "1"}, {"id":2, "a": "2"}]}}).executeCommand();
    	}	
    	//end - imports
    }

}
