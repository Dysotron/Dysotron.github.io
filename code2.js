gdjs.Level1Code = {};
gdjs.Level1Code.GDWizardObjects1= [];
gdjs.Level1Code.GDWizardObjects2= [];
gdjs.Level1Code.GDWizardObjects3= [];
gdjs.Level1Code.GDFloor2Objects1= [];
gdjs.Level1Code.GDFloor2Objects2= [];
gdjs.Level1Code.GDFloor2Objects3= [];
gdjs.Level1Code.GDFPSObjects1= [];
gdjs.Level1Code.GDFPSObjects2= [];
gdjs.Level1Code.GDFPSObjects3= [];
gdjs.Level1Code.GDLifeObjects1= [];
gdjs.Level1Code.GDLifeObjects2= [];
gdjs.Level1Code.GDLifeObjects3= [];
gdjs.Level1Code.GDWallObjects1= [];
gdjs.Level1Code.GDWallObjects2= [];
gdjs.Level1Code.GDWallObjects3= [];
gdjs.Level1Code.GDParticlesObjects1= [];
gdjs.Level1Code.GDParticlesObjects2= [];
gdjs.Level1Code.GDParticlesObjects3= [];
gdjs.Level1Code.GDShockballObjects1= [];
gdjs.Level1Code.GDShockballObjects2= [];
gdjs.Level1Code.GDShockballObjects3= [];
gdjs.Level1Code.GDPoisonballObjects1= [];
gdjs.Level1Code.GDPoisonballObjects2= [];
gdjs.Level1Code.GDPoisonballObjects3= [];
gdjs.Level1Code.GDIceballObjects1= [];
gdjs.Level1Code.GDIceballObjects2= [];
gdjs.Level1Code.GDIceballObjects3= [];
gdjs.Level1Code.GDFireballObjects1= [];
gdjs.Level1Code.GDFireballObjects2= [];
gdjs.Level1Code.GDFireballObjects3= [];
gdjs.Level1Code.GDStairsObjects1= [];
gdjs.Level1Code.GDStairsObjects2= [];
gdjs.Level1Code.GDStairsObjects3= [];
gdjs.Level1Code.GDIceZombieObjects1= [];
gdjs.Level1Code.GDIceZombieObjects2= [];
gdjs.Level1Code.GDIceZombieObjects3= [];
gdjs.Level1Code.GDDoorObjects1= [];
gdjs.Level1Code.GDDoorObjects2= [];
gdjs.Level1Code.GDDoorObjects3= [];
gdjs.Level1Code.GDKeyObjects1= [];
gdjs.Level1Code.GDKeyObjects2= [];
gdjs.Level1Code.GDKeyObjects3= [];
gdjs.Level1Code.GDHealthFlaskObjects1= [];
gdjs.Level1Code.GDHealthFlaskObjects2= [];
gdjs.Level1Code.GDHealthFlaskObjects3= [];
gdjs.Level1Code.GDBigHealthFlaskObjects1= [];
gdjs.Level1Code.GDBigHealthFlaskObjects2= [];
gdjs.Level1Code.GDBigHealthFlaskObjects3= [];
gdjs.Level1Code.GDOrcWarriorObjects1= [];
gdjs.Level1Code.GDOrcWarriorObjects2= [];
gdjs.Level1Code.GDOrcWarriorObjects3= [];
gdjs.Level1Code.GDOrcAxeObjects1= [];
gdjs.Level1Code.GDOrcAxeObjects2= [];
gdjs.Level1Code.GDOrcAxeObjects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.condition4IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};
gdjs.Level1Code.condition4IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Level1Code.GDFireballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Level1Code.GDIceballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Level1Code.GDShockballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Level1Code.GDPoisonballObjects2});gdjs.Level1Code.eventsList0x6857e0 = function(runtimeScene) {

{

gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDWizardObjects2[k] = gdjs.Level1Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWizardObjects2.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWizardObjects2[i].getVariableNumber(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDWizardObjects2[k] = gdjs.Level1Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDWizardObjects2 */
gdjs.Level1Code.GDFireballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireballObjects2Objects, (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Level1Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDFireballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDWizardObjects2[k] = gdjs.Level1Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWizardObjects2.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWizardObjects2[i].getVariableNumber(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 2 ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDWizardObjects2[k] = gdjs.Level1Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDWizardObjects2 */
gdjs.Level1Code.GDIceballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceballObjects2Objects, (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Level1Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDIceballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDWizardObjects2[k] = gdjs.Level1Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWizardObjects2.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWizardObjects2[i].getVariableNumber(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 3 ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDWizardObjects2[k] = gdjs.Level1Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDWizardObjects2 */
gdjs.Level1Code.GDShockballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShockballObjects2Objects, (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Level1Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShockballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDWizardObjects2[k] = gdjs.Level1Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWizardObjects2.length = k;}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWizardObjects2[i].getVariableNumber(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 4 ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDWizardObjects2[k] = gdjs.Level1Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDWizardObjects2 */
gdjs.Level1Code.GDPoisonballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPoisonballObjects2Objects, (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Level1Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPoisonballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].returnVariable(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num2");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].returnVariable(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(2);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num3");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].returnVariable(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(3);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num4");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects1[i].returnVariable(gdjs.Level1Code.GDWizardObjects1[i].getVariables().getFromIndex(1)).setNumber(4);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x6857e0
gdjs.Level1Code.eventsList0x67c490 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].addPolarForce(180, 50, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].returnVariable(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].flipX(true);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].addPolarForce(0, 50, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].returnVariable(gdjs.Level1Code.GDWizardObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].flipX(false);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].addPolarForce(270, 50, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].setAnimationName("Run");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].addPolarForce(90, 50, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].setAnimationName("Run");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
gdjs.Level1Code.condition3IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if( gdjs.Level1Code.condition3IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].setAnimationName("Idle");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects2[i].setOpacity(0);
}
}}

}


{


gdjs.Level1Code.eventsList0x6857e0(runtimeScene);
}


}; //End of gdjs.Level1Code.eventsList0x67c490
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Level1Code.GDFireballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Level1Code.GDIceballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Level1Code.GDShockballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Level1Code.GDPoisonballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Level1Code.GDOrcAxeObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects1});gdjs.Level1Code.eventsList0x692748 = function(runtimeScene) {

{

gdjs.Level1Code.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Level1Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFireballObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDFireballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));
gdjs.Level1Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDIceballObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDShockballObjects2.createFrom(runtimeScene.getObjects("Shockball"));
gdjs.Level1Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShockballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShockballObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShockballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDPoisonballObjects2.createFrom(runtimeScene.getObjects("Poisonball"));
gdjs.Level1Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPoisonballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPoisonballObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPoisonballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));
gdjs.Level1Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDOrcAxeObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDOrcAxeObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDOrcAxeObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.Level1Code.GDIceZombieObjects1.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Level1Code.GDOrcWarriorObjects1.createFrom(runtimeScene.getObjects("OrcWarrior"));
gdjs.Level1Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));
gdjs.Level1Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects1[i].separateFromObjectsList(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Level1Code.GDIceZombieObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDIceZombieObjects1[i].separateFromObjectsList(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Level1Code.GDOrcWarriorObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDOrcWarriorObjects1[i].separateFromObjectsList(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects, true);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x692748
gdjs.Level1Code.eventsList0x688ed0 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}}

}


{


{
gdjs.Level1Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level1Code.GDWizardObjects1.length !== 0 ? gdjs.Level1Code.GDWizardObjects1[0] : null), false, "", 0);
}}

}


}; //End of gdjs.Level1Code.eventsList0x688ed0
gdjs.Level1Code.eventsList0x6892b8 = function(runtimeScene) {

{


{
gdjs.Level1Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
gdjs.Level1Code.GDLifeObjects2.createFrom(runtimeScene.getObjects("Life"));
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects2[i].setString("Life: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.Level1Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDFPSObjects2[i].setString("FPS: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
{for(var i = 0, len = gdjs.Level1Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDFPSObjects2[i].setOpacity(0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
{for(var i = 0, len = gdjs.Level1Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDFPSObjects2[i].setOpacity(100);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F2");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


}; //End of gdjs.Level1Code.eventsList0x6892b8
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Level1Code.GDWizardObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDStairsObjects1Objects = Hashtable.newFrom({"Stairs": gdjs.Level1Code.GDStairsObjects1});gdjs.Level1Code.eventsList0x689c28 = function(runtimeScene) {

{

gdjs.Level1Code.GDStairsObjects1.createFrom(runtimeScene.getObjects("Stairs"));
gdjs.Level1Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDStairsObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CopyOfLevel1", true);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


}; //End of gdjs.Level1Code.eventsList0x689c28
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Level1Code.GDFireballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Level1Code.GDIceZombieObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Level1Code.GDIceballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Level1Code.GDIceZombieObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Level1Code.GDPoisonballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Level1Code.GDIceZombieObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Level1Code.GDShockballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Level1Code.GDIceZombieObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Level1Code.GDWizardObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Level1Code.GDIceZombieObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Level1Code.GDWizardObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects1Objects = Hashtable.newFrom({"IceZombie": gdjs.Level1Code.GDIceZombieObjects1});gdjs.Level1Code.eventsList0x68a030 = function(runtimeScene) {

{

gdjs.Level1Code.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Level1Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFireballObjects2 */
/* Reuse gdjs.Level1Code.GDIceZombieObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDIceZombieObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDIceZombieObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDFireballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Level1Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDIceballObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Level1Code.GDPoisonballObjects2.createFrom(runtimeScene.getObjects("Poisonball"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPoisonballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPoisonballObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPoisonballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Level1Code.GDShockballObjects2.createFrom(runtimeScene.getObjects("Shockball"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShockballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShockballObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShockballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects2Objects, 100, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDIceZombieObjects2 */
/* Reuse gdjs.Level1Code.GDWizardObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDIceZombieObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDIceZombieObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointX("")), (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Level1Code.GDIceZombieObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDIceZombieObjects2[i].setAnimationName("Running");
}
}}

}


{

gdjs.Level1Code.GDIceZombieObjects1.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Level1Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceZombieObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDIceZombieObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(1);
}{for(var i = 0, len = gdjs.Level1Code.GDIceZombieObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDIceZombieObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x68a030
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Level1Code.GDWizardObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level1Code.GDDoorObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level1Code.GDDoorObjects1});gdjs.Level1Code.eventsList0x6989e0 = function(runtimeScene) {

{

gdjs.Level1Code.GDDoorObjects2.createFrom(runtimeScene.getObjects("Door"));
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "Keys", "doorKey1");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDDoorObjects2[i].setAnimationName("Open");
}
}}

}


{

gdjs.Level1Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDDoorObjects1[i].isCurrentAnimationName("Closed") ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDDoorObjects1[k] = gdjs.Level1Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDDoorObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDDoorObjects1 */
gdjs.Level1Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Level1Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWizardObjects1[i].separateFromObjectsList(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDDoorObjects1Objects, true);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x6989e0
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Level1Code.GDWizardObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDKeyObjects1Objects = Hashtable.newFrom({"Key": gdjs.Level1Code.GDKeyObjects1});gdjs.Level1Code.eventsList0x698fc0 = function(runtimeScene) {

{

gdjs.Level1Code.GDKeyObjects1.createFrom(runtimeScene.getObjects("Key"));
gdjs.Level1Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDKeyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDKeyObjects1 */
{gdjs.evtTools.inventory.add(runtimeScene, "Keys", "doorKey1");
}{for(var i = 0, len = gdjs.Level1Code.GDKeyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDKeyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x698fc0
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Level1Code.GDOrcAxeObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Level1Code.GDIceballObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Level1Code.GDOrcAxeObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireballObjects1Objects = Hashtable.newFrom({"Fireball": gdjs.Level1Code.GDFireballObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDOrcAxeObjects1Objects = Hashtable.newFrom({"OrcAxe": gdjs.Level1Code.GDOrcAxeObjects1});gdjs.Level1Code.eventsList0x699348 = function(runtimeScene) {

{

gdjs.Level1Code.GDOrcWarriorObjects2.createFrom(runtimeScene.getObjects("OrcWarrior"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDOrcWarriorObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDOrcWarriorObjects2[i].timerElapsedTime("throw", 3) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDOrcWarriorObjects2[k] = gdjs.Level1Code.GDOrcWarriorObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDOrcWarriorObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDOrcWarriorObjects2 */
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
gdjs.Level1Code.GDOrcAxeObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDOrcAxeObjects2Objects, (( gdjs.Level1Code.GDOrcWarriorObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDOrcWarriorObjects2[0].getPointX("")), (( gdjs.Level1Code.GDOrcWarriorObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDOrcWarriorObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDOrcAxeObjects2[i].addForceTowardPosition((( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointX("")), (( gdjs.Level1Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDWizardObjects2[0].getPointY("")), 100, 1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDOrcWarriorObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDOrcWarriorObjects2[i].resetTimer("throw");
}
}}

}


{

gdjs.Level1Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));
gdjs.Level1Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDIceballObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDOrcAxeObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDIceballObjects2 */
/* Reuse gdjs.Level1Code.GDOrcAxeObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDOrcAxeObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDFireballObjects1.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Level1Code.GDOrcAxeObjects1.createFrom(runtimeScene.getObjects("OrcAxe"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireballObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDOrcAxeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFireballObjects1 */
/* Reuse gdjs.Level1Code.GDOrcAxeObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDOrcAxeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDOrcAxeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDFireballObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFireballObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x699348
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Level1Code.GDWizardObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHealthFlaskObjects2Objects = Hashtable.newFrom({"HealthFlask": gdjs.Level1Code.GDHealthFlaskObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Level1Code.GDWizardObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBigHealthFlaskObjects1Objects = Hashtable.newFrom({"BigHealthFlask": gdjs.Level1Code.GDBigHealthFlaskObjects1});gdjs.Level1Code.eventsList0x67b9c8 = function(runtimeScene) {

{

gdjs.Level1Code.GDHealthFlaskObjects2.createFrom(runtimeScene.getObjects("HealthFlask"));
gdjs.Level1Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHealthFlaskObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5));
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHealthFlaskObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDHealthFlaskObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDHealthFlaskObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDBigHealthFlaskObjects1.createFrom(runtimeScene.getObjects("BigHealthFlask"));
gdjs.Level1Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWizardObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBigHealthFlaskObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBigHealthFlaskObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.Level1Code.GDBigHealthFlaskObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBigHealthFlaskObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x67b9c8
gdjs.Level1Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Level1Code.eventsList0x67c490(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x692748(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x688ed0(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x6892b8(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x689c28(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x68a030(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x6989e0(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x698fc0(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x699348(runtimeScene);
}


{


gdjs.Level1Code.eventsList0x67b9c8(runtimeScene);
}


}; //End of gdjs.Level1Code.eventsList0xb25a8


gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Level1Code.GDWizardObjects1.length = 0;
gdjs.Level1Code.GDWizardObjects2.length = 0;
gdjs.Level1Code.GDWizardObjects3.length = 0;
gdjs.Level1Code.GDFloor2Objects1.length = 0;
gdjs.Level1Code.GDFloor2Objects2.length = 0;
gdjs.Level1Code.GDFloor2Objects3.length = 0;
gdjs.Level1Code.GDFPSObjects1.length = 0;
gdjs.Level1Code.GDFPSObjects2.length = 0;
gdjs.Level1Code.GDFPSObjects3.length = 0;
gdjs.Level1Code.GDLifeObjects1.length = 0;
gdjs.Level1Code.GDLifeObjects2.length = 0;
gdjs.Level1Code.GDLifeObjects3.length = 0;
gdjs.Level1Code.GDWallObjects1.length = 0;
gdjs.Level1Code.GDWallObjects2.length = 0;
gdjs.Level1Code.GDWallObjects3.length = 0;
gdjs.Level1Code.GDParticlesObjects1.length = 0;
gdjs.Level1Code.GDParticlesObjects2.length = 0;
gdjs.Level1Code.GDParticlesObjects3.length = 0;
gdjs.Level1Code.GDShockballObjects1.length = 0;
gdjs.Level1Code.GDShockballObjects2.length = 0;
gdjs.Level1Code.GDShockballObjects3.length = 0;
gdjs.Level1Code.GDPoisonballObjects1.length = 0;
gdjs.Level1Code.GDPoisonballObjects2.length = 0;
gdjs.Level1Code.GDPoisonballObjects3.length = 0;
gdjs.Level1Code.GDIceballObjects1.length = 0;
gdjs.Level1Code.GDIceballObjects2.length = 0;
gdjs.Level1Code.GDIceballObjects3.length = 0;
gdjs.Level1Code.GDFireballObjects1.length = 0;
gdjs.Level1Code.GDFireballObjects2.length = 0;
gdjs.Level1Code.GDFireballObjects3.length = 0;
gdjs.Level1Code.GDStairsObjects1.length = 0;
gdjs.Level1Code.GDStairsObjects2.length = 0;
gdjs.Level1Code.GDStairsObjects3.length = 0;
gdjs.Level1Code.GDIceZombieObjects1.length = 0;
gdjs.Level1Code.GDIceZombieObjects2.length = 0;
gdjs.Level1Code.GDIceZombieObjects3.length = 0;
gdjs.Level1Code.GDDoorObjects1.length = 0;
gdjs.Level1Code.GDDoorObjects2.length = 0;
gdjs.Level1Code.GDDoorObjects3.length = 0;
gdjs.Level1Code.GDKeyObjects1.length = 0;
gdjs.Level1Code.GDKeyObjects2.length = 0;
gdjs.Level1Code.GDKeyObjects3.length = 0;
gdjs.Level1Code.GDHealthFlaskObjects1.length = 0;
gdjs.Level1Code.GDHealthFlaskObjects2.length = 0;
gdjs.Level1Code.GDHealthFlaskObjects3.length = 0;
gdjs.Level1Code.GDBigHealthFlaskObjects1.length = 0;
gdjs.Level1Code.GDBigHealthFlaskObjects2.length = 0;
gdjs.Level1Code.GDBigHealthFlaskObjects3.length = 0;
gdjs.Level1Code.GDOrcWarriorObjects1.length = 0;
gdjs.Level1Code.GDOrcWarriorObjects2.length = 0;
gdjs.Level1Code.GDOrcWarriorObjects3.length = 0;
gdjs.Level1Code.GDOrcAxeObjects1.length = 0;
gdjs.Level1Code.GDOrcAxeObjects2.length = 0;
gdjs.Level1Code.GDOrcAxeObjects3.length = 0;

gdjs.Level1Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Level1Code'] = gdjs.Level1Code;
