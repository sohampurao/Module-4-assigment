var names=new Array();
names[0]="virat";
names[1]="John";
names[2]="Jonny";
names[3]="jackline";
names[4]="rahul";
names[5]="marrie";
names[6]="laura";
names[7]="chessy";
names[8]="timmy";
names[9]="jessy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}