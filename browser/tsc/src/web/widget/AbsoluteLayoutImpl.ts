// start - imports

	
import CommandAttr from '../../widget/CommandAttr';
import IWidget from '../../widget/IWidget';
import ILayoutParam from '../../widget/ILayoutParam';
import {plainToClass, Type, Exclude, Expose, Transform} from "class-transformer";
import {Gravity} from '../../widget/TypeConstants';
import {ITranform, TransformerFactory} from '../../widget/TransformerFactory';
import {Event} from '../../app/Event';
import {MotionEvent} from '../../app/MotionEvent';
import {DragEvent} from '../../app/DragEvent';
import {KeyEvent} from '../../app/KeyEvent';
import { ScopedObject } from '../../app/ScopedObject';
import { Mixin, decorate } from 'ts-mixer';



import {ViewGroupImpl_LayoutParams} from './ViewGroupImpl';

// end - imports
import {ViewGroupImpl} from './ViewGroupImpl';
export abstract class AbsoluteLayoutImpl<T> extends ViewGroupImpl<T>{
	//start - body
	static initialize() {
    }	

	@decorate(Exclude())
	protected thisPointer: T;	
	protected abstract getThisPointer(): T;
	reset() : T {	
		super.reset();
		return this.thisPointer;
	}
	constructor(id: string, path: string[], event:  string) {
		super(id, path, event);
		this.thisPointer = this.getThisPointer();
	}
	
	//end - body

}
	
//start - staticinit
export abstract class AbsoluteLayoutImpl_LayoutParams<T> extends ViewGroupImpl_LayoutParams<T> {
	@decorate(Type(() => CommandAttr))
	@decorate(Expose({ name: "layout_x" }))
	layout_x!:CommandAttr<string>| undefined;
	@decorate(Type(() => CommandAttr))
	@decorate(Expose({ name: "layout_y" }))
	layout_y!:CommandAttr<string>| undefined;
	@decorate(Exclude())
	protected thisPointer: T;	
	protected abstract getThisPointer(): T;
	reset() : T {	
		super.reset();
		this.layout_x = undefined;
		this.layout_y = undefined;
		return this.thisPointer;
	}
	constructor() {
		super();
		this.thisPointer = this.getThisPointer();
	}
	
	public tryGetLayoutX() : T {
		if (this.layout_x == null || this.layout_x == undefined) {
			this.layout_x = new CommandAttr<string>()
		}
		
		this.layout_x.setGetter(true);
		this.orderGet++;
		this.layout_x.setOrderGet(this.orderGet);
		return this.thisPointer;
	}
	
	public getLayoutX() : string {
		if (this.layout_x == null || this.layout_x == undefined) {
			this.layout_x = new CommandAttr<string>();
		}
		return this.layout_x.getCommandReturnValue();
	}
	public setLayoutX(value : string) : T {
		if (this.layout_x == null || this.layout_x == undefined) {
			this.layout_x = new CommandAttr<string>();
		}
		this.layout_x.setSetter(true);
		this.layout_x.setValue(value);
		this.orderSet++;
		this.layout_x.setOrderSet(this.orderSet);
		return this.thisPointer;
	}
	public tryGetLayoutY() : T {
		if (this.layout_y == null || this.layout_y == undefined) {
			this.layout_y = new CommandAttr<string>()
		}
		
		this.layout_y.setGetter(true);
		this.orderGet++;
		this.layout_y.setOrderGet(this.orderGet);
		return this.thisPointer;
	}
	
	public getLayoutY() : string {
		if (this.layout_y == null || this.layout_y == undefined) {
			this.layout_y = new CommandAttr<string>();
		}
		return this.layout_y.getCommandReturnValue();
	}
	public setLayoutY(value : string) : T {
		if (this.layout_y == null || this.layout_y == undefined) {
			this.layout_y = new CommandAttr<string>();
		}
		this.layout_y.setSetter(true);
		this.layout_y.setValue(value);
		this.orderSet++;
		this.layout_y.setOrderSet(this.orderSet);
		return this.thisPointer;
	}
}

export class AbsoluteLayout_LayoutParams extends AbsoluteLayoutImpl_LayoutParams<AbsoluteLayout_LayoutParams> implements ILayoutParam {
    getThisPointer(): AbsoluteLayout_LayoutParams {
        return this;
    }

   	constructor() {
		super();	
	}
}

export class AbsoluteLayout extends AbsoluteLayoutImpl<AbsoluteLayout> implements IWidget{
    getThisPointer(): AbsoluteLayout {
        return this;
    }
    
   	public getClass() {
		return AbsoluteLayout;
	}
	
   	constructor(id: string, path: string[], event: string) {
		super(id, path, event);	
	}
}

AbsoluteLayoutImpl.initialize();

//end - staticinit
