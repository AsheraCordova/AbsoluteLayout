// start - imports
import {Fragment, Inject} from './app/Fragment';
import {AbsoluteLayout} from './swt/widget/AbsoluteLayoutImpl';
import * as targetSuperClassView from './android/widget/ViewImpl';
import {AbsoluteLayout_LayoutParams} from './swt/widget/AbsoluteLayoutImpl';

import * as targetView from './swt/widget/AbsoluteLayoutImpl';
import {Gravity} from './widget/TypeConstants';
import {View} from './swt/widget/ViewImpl';
import {NavController, InjectController} from './navigation/NavController';
// end - imports


export default class AbsoluteLayoutActivity extends Fragment{
	// start - body
	@Inject({ id : "@+id/sampleWidget"})
	private sampleWidget!: AbsoluteLayout;
	@Inject({ path : ["@+id/sampleWidget", "@+pos/0"]})
	private sampleWidgetChild0!: View;
	@Inject({ path : ["@+id/sampleWidget", "@+pos/1"]})
	private sampleWidgetChild1!: View;
				@Inject({ id : "@+id/layout_x0"})
				private layout_x0!: AbsoluteLayout;
				@Inject({ path : ["@+id/layout_x0", "@+pos/0"]})
				private layout_x0Child0!: View;
				@Inject({ id : "@+id/layout_y0"})
				private layout_y0!: AbsoluteLayout;
				@Inject({ path : ["@+id/layout_y0", "@+pos/0"]})
				private layout_y0Child0!: View;
	@InjectController({})
    navController!: NavController;
    constructor() {
        super();
    }
	
	async onClicklayout_x(obj:any) {		
			this.layout_x0.reset().setAttributeUnderTest('AbsoluteLayout,layout_x');
			await this.executeCommand(this.layout_x0);
				let layout_x0Child0LayoutParams: AbsoluteLayout_LayoutParams = new AbsoluteLayout_LayoutParams();
				layout_x0Child0LayoutParams.setLayoutX('20dp');			
				this.layout_x0Child0.setLayoutParams(layout_x0Child0LayoutParams);
				await this.executeCommand(this.layout_x0Child0);
				await this.executeCommand(this.layout_x0);	
				
				
		
		
	}
	async onClicklayout_y(obj:any) {		
			this.layout_y0.reset().setAttributeUnderTest('AbsoluteLayout,layout_y');
			await this.executeCommand(this.layout_y0);
				let layout_y0Child0LayoutParams: AbsoluteLayout_LayoutParams = new AbsoluteLayout_LayoutParams();
				layout_y0Child0LayoutParams.setLayoutY('20dp');			
				this.layout_y0Child0.setLayoutParams(layout_y0Child0LayoutParams);
				await this.executeCommand(this.layout_y0Child0);
				await this.executeCommand(this.layout_y0);	
				
				
		
		
	}
	
	delay<T>(ms: number, result?: T ) {
 		return new Promise(resolve => setTimeout(() => resolve(result), ms));
	}

	async testGetAndSet(obj:any) {
		try {
		let errors: string[] = [];
		let value:any = null;
						var sampleWidgetChild0LP = new AbsoluteLayout_LayoutParams();
						sampleWidgetChild0LP.setLayoutX('20dp').tryGetLayoutX();
						this.sampleWidgetChild0.reset().setLayoutParams(sampleWidgetChild0LP);
						await this.executeCommand(this.sampleWidgetChild0);
						
						value = this.sampleWidgetChild0.getLayoutParams<AbsoluteLayout_LayoutParams>().getLayoutX();
						
						if (value != '20dp') {
							errors.push('getLayoutX ' + value +" " + ('20dp'));
						}
						var sampleWidgetChild0LP = new AbsoluteLayout_LayoutParams();
						sampleWidgetChild0LP.setLayoutY('20dp').tryGetLayoutY();
						this.sampleWidgetChild0.reset().setLayoutParams(sampleWidgetChild0LP);
						await this.executeCommand(this.sampleWidgetChild0);
						
						value = this.sampleWidgetChild0.getLayoutParams<AbsoluteLayout_LayoutParams>().getLayoutY();
						
						if (value != '20dp') {
							errors.push('getLayoutY ' + value +" " + ('20dp'));
						}
		
		if (errors.length > 0) {
			alert(errors);
		} else {
			alert("Success!!");
		}
		
		} catch (e) {
			alert(e);
		}
	}
	
	checkTextDirection(value: string, testcase: string) {
		if (testcase == 'inherit' && value == 'firstStrong') {
			return false;
		} 

		return value != testcase;
	}
	checkTextAlignment(value: string, testcase: string) {
		if (testcase == 'inherit' && value == 'gravity') {
			return false;
		} 

		return value != testcase;
	}
	checkLayoutDirection(value: string, testcase: string) {
		if ((testcase == 'locale' || testcase == 'inherit')  && value == 'ltr') {
			return false;
		} 
		
		return value != testcase;
	}
	checkGravity(value: string, testcase: string) {
		if (testcase == 'fill_horizontal' && value == 'top|fill_horizontal') {
			return false;
		} 
		if (testcase == 'end' && (value == 'top|right' || value == 'right')) {
			return false;
		}
		if (testcase == 'start' && (value == 'top|left' || value == 'left')) {
			return false;
		} 
		if (testcase == 'clip_horizontal' && value == 'top|left|clip_horizontal') {
			return false;
		}
		
		if (testcase == 'clip_vertical' && (value == 'top|left' || value == 'top|left|clip_vertical')) {
			return false;
		} 
		
		if (testcase == 'fill' && value == 'fill_vertical|fill_horizontal') {
			return false;
		} 
		
		if (testcase == 'center' && value == 'center_vertical|center_horizontal') {
			return false;
		}
		
		if (testcase == 'center_horizontal' && value == 'top|center_horizontal') {
			return false;
		}
		
		if (testcase == 'fill_vertical' && value == 'fill_vertical|left') {
			return false;
		}
		
		if (testcase == 'center_vertical' && value == 'center_vertical|left') {
			return false;
		}
		
		if (testcase == 'right' && value == 'top|right') {
			return false;
		}
		
		if (testcase == 'left' && value == 'top|left') {
			return false;
		}
		
		if (testcase == 'bottom' && value == 'bottom|left') {
			return false;
		}
		
		if (testcase == 'top' && value == 'top|left') {
			return false;
		}
		
		if (testcase == 'clip_vertical' && value == '') {
			return false;
		}
		return value != testcase;
	}
	
	
	    
	// end - body
}