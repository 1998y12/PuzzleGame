class gamebtn extends eui.Component implements  eui.UIComponent {

	public btn_easy:eui.Button;
	public btn_normal:eui.Button;
	public btn_hard:eui.Button;

	public constructor() {
		super();
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		
		this.btn_easy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onEasyClick,this);
		this.btn_normal.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNormalClick,this);
		this.btn_hard.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHardClick,this);
		
	}

	public onEasyClick(){
		
		this.dispatchEventWith("starteasy");
	}
	
	public onNormalClick(){
		this.dispatchEventWith("startnormal");
	}

	public onHardClick(){
		this.dispatchEventWith("starthard");
	}

}