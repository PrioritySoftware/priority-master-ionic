var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.priorityapp;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'EBC0A619ADABC0EB10BF10EFEC3A0CAE';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {4:1, 7:1}, $intern_1 = {4:1, 6:1, 7:1}, $intern_2 = {4:1, 166:1}, $intern_3 = {8:1, 4:1, 6:1, 7:1}, $intern_4 = {4:1}, $intern_5 = 4194303, $intern_6 = 1048575, $intern_7 = 524288, $intern_8 = 4194304, $intern_9 = 17592186044416, $intern_10 = -9223372036854775808, $intern_11 = {45:1}, $intern_12 = {17:1}, $intern_13 = {4:1, 28:1, 63:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + toUnsignedRadixString(hashCode__I__devirtual$(this), 16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {4:1, 194:1, 25:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(64, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_13(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 64);
function isScript(){
  return true;
}

function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $initCause(this$static, cause){
  checkState(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static, out){
  var element, element$array, element$index, element$max, t, stackTrace;
  for (t = this$static; t; t = t.cause) {
    t != this$static && $append_0(out.builder, 'Caused by: ');
    $append_0(out.builder, '' + t);
    $append_0(out.builder, '\n');
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      $append_0(out.builder, '\tat ' + element);
      $append_0(out.builder, '\n');
    }
  }
}

function $toString(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

defineClass(7, 1, $intern_0);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  return $toString(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 7);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(6, 7, $intern_1);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 6);
function RuntimeException(){
  $fillInStackTrace(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

defineClass(19, 6, $intern_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 19);
defineClass(81, 19, $intern_1);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 81);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(24, 81, {24:1, 4:1, 6:1, 7:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 24);
function create(milliseconds){
  return new Date(milliseconds);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return s;
}

function escapeValue(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function getEscapeTable(){
  !escapeTable_0 && (escapeTable_0 = initEscapeTable());
  return escapeTable_0;
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

function safeEval(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}

function throwIllegalArgumentException(message, data_0){
  throw new IllegalArgumentException_0(message + '\n' + data_0);
}

var escapeTable_0;
defineClass(167, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 167);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 7)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw unwrap_5($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit_0(initialEntry);
  }
}

function exit_0(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $log_2(handler.val$log2, ($clinit_Level() , SEVERE), e.getMessage(), e);
    return;
  }
  reportToBrowser(instanceOf(e, 24)?dynamicCast(e, 24).getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function execute(cmd){
  return cmd.this$01.waitAutoProgress?$ProcCheckExecutionMobAsync($GetConnection_1(cmd.this$01), cmd.this$01.privateSession, new Proc$WaitProcessResponse($GetConnection_1(cmd.this$01), cmd.val$thisProc2, 'ProcCheckExecution', cmd.val$onSuccess3, cmd.val$onError4)):$ProcContinueMobAsync($GetConnection_1(cmd.this$01), cmd.this$01.privateSession, new Proc$WaitProcessResponse($GetConnection_1(cmd.this$01), cmd.val$thisProc2, 'ProcContinue', cmd.val$onSuccess3, cmd.val$onError4)) , false;
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?(t[0].this$01.waitAutoProgress?$ProcCheckExecutionMobAsync($GetConnection_1(t[0].this$01), t[0].this$01.privateSession, new Proc$WaitProcessResponse($GetConnection_1(t[0].this$01), t[0].val$thisProc2, 'ProcCheckExecution', t[0].val$onSuccess3, t[0].val$onError4)):$ProcContinueMobAsync($GetConnection_1(t[0].this$01), t[0].this$01.privateSession, new Proc$WaitProcessResponse($GetConnection_1(t[0].this$01), t[0].val$thisProc2, 'ProcContinue', t[0].val$onSuccess3, t[0].val$onError4)) , false) && (rescheduled = push_0(rescheduled, t)):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(111, 167, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 111);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_0(stackTrace.length);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 166);
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector;
defineClass(178, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 178);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(82, 178, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 31, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 82);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(179, 178, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 31, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 179);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(83, 179, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 83);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function $cancel(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  new RequestTimeoutException(this$static.timeoutMillis);
}

function Request(xmlHttpRequest, timeoutMillis){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(154, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 154);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(156, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $fireOnTimeout(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 156);
function Request$1(this$0){
  this.this$01 = this$0;
}

defineClass(157, 156, {}, Request$1);
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 157);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 24)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap_5($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 24)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap_5($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_0 > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers)).this$01); $hasNext(header$iterator);) {
      header = (checkStructuralChange(header$iterator.this$01, header$iterator) , checkCriticalElement($hasNext(header$iterator)) , dynamicCast(header$iterator.current.next_0(), 17));
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 24)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else 
          throw unwrap_5($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(66, 1, {});
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 66);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(91, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 91);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(41, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_2(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 41);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(8, 6, $intern_3, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 8);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(160, 8, $intern_3, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 160);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(163, 8, $intern_3, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 163);
defineClass(191, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 191);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(155, 191, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 155);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

defineClass(192, 1, {});
_.isString = function isString(){
  return null;
}
;
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 192);
function $get(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function $set(this$static, index_0, value_0){
  var previous;
  previous = $get(this$static, index_0);
  $set0(this$static, index_0, value_0);
  return previous;
}

function $set0(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.jsArray[index_0] = value_0;
}

function JSONArray(){
  this.jsArray = [];
}

function JSONArray_0(arr){
  this.jsArray = arr;
}

function unwrap(value_0){
  return value_0.jsArray;
}

defineClass(15, 192, {15:1}, JSONArray, JSONArray_0);
_.equals$ = function equals_0(other){
  if (!instanceOf(other, 15)) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 15).jsArray;
}
;
_.getUnwrapper = function getUnwrapper(){
  return unwrap;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this.jsArray);
}
;
_.toString$ = function toString_3(){
  var c, i, sb;
  sb = new StringBuilder_0('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append(sb, $get(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 15);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

function unwrap_0(value_0){
  return value_0.value_0;
}

defineClass(75, 192, {}, JSONBoolean);
_.getUnwrapper = function getUnwrapper_0(){
  return unwrap_0;
}
;
_.toString$ = function toString_4(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 75);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

function JSONException_0(cause){
  this.detailMessage = !cause?null:$toString(cause);
  this.cause = cause;
  $fillInStackTrace(this);
}

defineClass(60, 19, $intern_1, JSONException, JSONException_0);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 60);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance = new JSONNull;
}

function JSONNull(){
}

function unwrap_1(){
  return null;
}

defineClass(165, 192, {}, JSONNull);
_.getUnwrapper = function getUnwrapper_1(){
  return unwrap_1;
}
;
_.toString$ = function toString_5(){
  return 'null';
}
;
var instance;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 165);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

function unwrap_2(value_0){
  return value_0.value_0;
}

defineClass(27, 192, {27:1}, JSONNumber);
_.equals$ = function equals_1(other){
  if (!instanceOf(other, 27)) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 27).value_0;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return unwrap_2;
}
;
_.hashCode$ = function hashCode_2(){
  return round_int((new Double(this.value_0)).value_0);
}
;
_.toString$ = function toString_6(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 27);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_0(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $put(this$static, key, jsonValue){
  var previous;
  previous = $get_0(this$static, key);
  $put0(this$static, key, jsonValue);
  return previous;
}

function $put0(this$static, key, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    this$static.jsObject[key] = func(value_0);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function $toString_0(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_0('{');
  first = true;
  keys_0 = $computeKeys0(this$static, initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_0(sb, escapeValue(key));
    sb.string += ':';
    $append(sb, $get_0(this$static, key));
  }
  sb.string += '}';
  return sb.string;
}

function JSONObject(){
  JSONObject_0.call(this, {});
}

function JSONObject_0(jsValue){
  this.jsObject = jsValue;
}

function unwrap_3(value_0){
  return value_0.jsObject;
}

defineClass(5, 192, {5:1}, JSONObject, JSONObject_0);
_.equals$ = function equals_2(other){
  if (!instanceOf(other, 5)) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 5).jsObject;
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return unwrap_3;
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode(this.jsObject);
}
;
_.toString$ = function toString_7(){
  return $toString_0(this);
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 5);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject, 'function':createObject, undefined:createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray_0(o);
  }
   else {
    return new JSONObject_0(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function evaluate(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
   else {
    json = escapeJsonForEval(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
  var func = typeMap[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function parse_0(jsonString){
  $clinit_JSONParser();
  var ex;
  if (jsonString == null) {
    throw new NullPointerException;
  }
  if (jsonString.length == 0) {
    throw new IllegalArgumentException_0('empty argument');
  }
  try {
    return evaluate(jsonString, true);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 24)) {
      ex = $e0;
      throw new JSONException_0(ex);
    }
     else 
      throw unwrap_5($e0);
  }
}

function throwJSONException(message){
  throw new JSONException(message);
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw new NullPointerException;
  }
  this.value_0 = value_0;
}

function unwrap_4(value_0){
  return value_0.value_0;
}

defineClass(10, 192, {10:1}, JSONString);
_.equals$ = function equals_3(other){
  if (!instanceOf(other, 10)) {
    return false;
  }
  return $equals(this.value_0, dynamicCast(other, 10).value_0);
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return unwrap_4;
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode_0(this.value_0);
}
;
_.isString = function isString_0(){
  return this;
}
;
_.toString$ = function toString_8(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 10);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap_5(e){
  var jse;
  if (instanceOf(e, 24)) {
    jse = dynamicCast(e, 24);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 7)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_5;
  a1 = value_0 >> 22 & $intern_5;
  a2 = value_0 < 0?$intern_6:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_7 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg_0(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg_0(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg_0(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg_0(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg_0(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & $intern_5);
  setM(a, sum1 & $intern_5);
  setH(a, sum2 & $intern_6);
  return true;
}

var remainder;
function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_10) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_9) {
    a2 = round_int(value_0 / $intern_9);
    value_0 -= a2 * $intern_9;
  }
  a1 = 0;
  if (value_0 >= $intern_8) {
    a1 = round_int(value_0 / $intern_8);
    value_0 -= a1 * $intern_8;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_4, 198, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value_0));
    return result;
  }
  return create_0(value_0);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function neg_0(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_7) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_6:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_6:0;
    res1 = negative?$intern_5:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_6;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_5, m:sum1 & $intern_5, h:sum2 & $intern_6};
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_10;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg_0(a));
  }
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_9(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_9(neg_0(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_5, $intern_5, 524287);
  MIN_VALUE = create0(0, 0, $intern_7);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad($clinit_LogConfiguration());
  $onModuleLoad_1(new PriorityApp);
}

function $getLevel(this$static){
  if (this$static.level_0) {
    return this$static.level_0;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level_0 = newLevel;
}

defineClass(43, 1, {43:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 43);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(148, 43, {43:1}, ConsoleLogHandler);
_.publish = function publish(record){
  var msg, val;
  if (!window.console || ($getLevel(this) , -2147483648 > record.level_0.intValue_0())) {
    return;
  }
  msg = $format(this.formatter, record);
  val = record.level_0.intValue_0();
  val >= ($clinit_Level() , 1000)?(window.console.error(msg) , undefined):val >= 900?(window.console.warn(msg) , undefined):val >= 800?(window.console.info(msg) , undefined):(window.console.log(msg) , undefined);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 148);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(149, 43, {43:1}, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 149);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl = new LogConfiguration$LogConfigurationImplRegular;
}

function $onModuleLoad(){
  var log_0;
  $configureClientSideLogging(impl);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

var impl;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(78, 1, {}, LogConfiguration$1);
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 78);
function $configureClientSideLogging(this$static){
  this$static.root = (new LoggerImplRegular , $ensureLogger(getLogManager(), ''));
  this$static.root.impl.useParentHandlers = false;
  $setLevels(this$static.root);
  $setDefaultHandlers(this$static.root);
}

function $setDefaultHandlers(l){
  var console_0, dev;
  console_0 = new ConsoleLogHandler;
  $addHandler(l.impl, console_0);
  dev = new DevelopmentModeLogHandler;
  $addHandler(l.impl, dev);
}

function $setLevels(l){
  var level, levelParam, paramsForName;
  levelParam = (ensureListParameterMap() , paramsForName = dynamicCast(listParamMap.get_0('logLevel'), 28) , !paramsForName?null:dynamicCastToString(paramsForName.get_1(paramsForName.size_1() - 1)));
  level = levelParam == null?null:($clinit_Level() , $parse_0(levelParam));
  level?$setLevel_0(l.impl, level):$setLevel_1(l, ($clinit_Level() , ALL));
}

function LogConfiguration$LogConfigurationImplRegular(){
}

defineClass(77, 1, {}, LogConfiguration$LogConfigurationImplRegular);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 77);
defineClass(189, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 189);
defineClass(190, 189, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 190);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append_0(message, (date = new Date_0(event_0.millis) , s = new StringBuilder , $append_0(s, $toString_3(date)) , s.string += ' ' , $append_0(s, event_0.loggerName) , s.string += '\n' , $append_0(s, event_0.level_0.getName()) , s.string += ': ' , s.string));
  $append_0(message, event_0.msg);
  this$static.showStackTraces && !!event_0.thrown && $printStackTrace(event_0.thrown, new StackTracePrintStream(message));
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(73, 190, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 73);
function $parse_0(name_0){
  name_0 = name_0.toUpperCase();
  if ($equals(name_0, 'ALL')) {
    return $clinit_Level() , ALL;
  }
   else if ($equals(name_0, 'CONFIG')) {
    return $clinit_Level() , CONFIG;
  }
   else if ($equals(name_0, 'FINE')) {
    return $clinit_Level() , FINE;
  }
   else if ($equals(name_0, 'FINER')) {
    return $clinit_Level() , FINER;
  }
   else if ($equals(name_0, 'FINEST')) {
    return $clinit_Level() , FINEST;
  }
   else if ($equals(name_0, 'INFO')) {
    return $clinit_Level() , INFO;
  }
   else if ($equals(name_0, 'OFF')) {
    return $clinit_Level() , OFF;
  }
   else if ($equals(name_0, 'SEVERE')) {
    return $clinit_Level() , SEVERE;
  }
   else if ($equals(name_0, 'WARNING')) {
    return $clinit_Level() , WARNING;
  }
  throw new IllegalArgumentException_0('Invalid level "' + name_0 + '"');
}

function $addHandler(this$static, handler){
  $add(this$static.handlers, handler);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level_0) {
    return this$static.level_0;
  }
  logger = this$static.parent_0;
  while (logger) {
    effectiveLevel = logger.impl.level_0;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = logger.impl.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  return dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, {4:1, 76:1}, 43, this$static.handlers.array.length, 0, 1)), 76);
}

function $isLoggable(this$static, messageLevel){
  return $getEffectiveLevel(this$static).intValue_0() <= messageLevel.intValue_0();
}

function $log(this$static, level, msg, thrown){
  var record;
  if ($getEffectiveLevel(this$static).intValue_0() <= level.intValue_0()) {
    record = new LogRecord(level, msg);
    record.thrown = thrown;
    $setLoggerName(record, this$static.name_0);
    $log_0(this$static, record);
  }
}

function $log_0(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if ($isLoggable(this$static, record.level_0)) {
    for (handler$array0 = dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, {4:1, 76:1}, 43, this$static.handlers.array.length, 0, 1)), 76) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish(record);
    }
    logger = this$static.useParentHandlers?this$static.parent_0:null;
    while (logger) {
      for (handler$array = $getHandlers(logger.impl) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish(record);
      }
      logger = logger.impl.useParentHandlers?logger.impl.parent_0:null;
    }
  }
}

function $setLevel_0(this$static, newLevel){
  this$static.level_0 = newLevel;
}

function $setName(this$static, newName){
  this$static.name_0 = newName;
}

function $setParent(this$static, newParent){
  !!newParent && (this$static.parent_0 = newParent);
}

function LoggerImplRegular(){
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

defineClass(49, 1, {}, LoggerImplRegular);
_.level_0 = null;
_.useParentHandlers = false;
var Lcom_google_gwt_logging_impl_LoggerImplRegular_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplRegular', 49);
defineClass(185, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 185);
defineClass(186, 185, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 186);
defineClass(187, 186, {});
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 187);
function StackTracePrintStream(builder){
  this.builder = builder;
}

defineClass(151, 187, {}, StackTracePrintStream);
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 151);
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 24))
          throw unwrap_5($e0);
      }
      values = dynamicCast(out.get_0(key), 28);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_1(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 17);
    entry.setValue(unmodifiableList(dynamicCast(entry.getValue(), 28)));
  }
  out = new Collections$UnmodifiableMap(out);
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('gecko1_8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(53, 7, $intern_0);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 53);
defineClass(22, 53, $intern_0);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 22);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7):null);
}

defineClass(79, 22, $intern_0, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 79);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function $toString_1(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(20, 1, {4:1, 25:1, 20:1});
_.equals$ = function equals_4(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this);
}
;
_.toString$ = function toString_10(){
  return $toString_1(this);
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 20);
function $clinit_ColumnTypes(){
  $clinit_ColumnTypes = emptyMethod;
  None = new ColumnTypes('None', 0, 0, 'text');
  Char = new ColumnTypes('Char', 1, 99, 'text');
  Str = new ColumnTypes('Str', 2, 115, 'text');
  Rstr = new ColumnTypes('Rstr', 3, 83, 'text');
  Bool = new ColumnTypes('Bool', 4, 98, 'bool');
  Real = new ColumnTypes('Real', 5, 114, 'number');
  Int = new ColumnTypes('Int', 6, 105, 'number');
  Date8 = new ColumnTypes('Date8', 7, 100, 'date');
  Date10 = new ColumnTypes('Date10', 8, 101, 'date');
  Date14 = new ColumnTypes('Date14', 9, 68, 'date');
  Time5 = new ColumnTypes('Time5', 10, 116, 'time');
  Time6 = new ColumnTypes('Time6', 11, 84, 'time');
  Day = new ColumnTypes('Day', 12, 121, 'text');
  Unsigned = new ColumnTypes('Unsigned', 13, 117, 'number');
  Operator = new ColumnTypes('Operator', 14, 111, 'text');
}

function $getFormat(this$static){
  switch (this$static.ordinal) {
    case 7:
      return Lang == 3?'MM/DD/YY':'DD/MM/YY';
    case 8:
      return Lang == 3?'MM/DD/YYYY':'DD/MM/YYYY';
    case 9:
      return Lang == 3?'MM/DD/YY HH:mm':'DD/MM/YY HH:mm';
    case 10:
    case 11:
      return 'HH:mm';
  }
  return '';
}

function ColumnTypes(enum$name, enum$ordinal, value_0, inputType){
  Enum.call(this, enum$name, enum$ordinal);
  this.inputType = inputType;
  $put_0((!mappings && !mappings && (mappings = new HashMap) , mappings), valueOf(value_0), this);
}

function forValue(value_0){
  $clinit_ColumnTypes();
  return dynamicCast($get_1((!mappings && !mappings && (mappings = new HashMap) , mappings), valueOf(value_0)), 16);
}

function values_0(){
  $clinit_ColumnTypes();
  return initValues(getClassLiteralForArray(Lcom_priority_app_common_ColumnTypes_2_classLit, 1), $intern_4, 16, 0, [None, Char, Str, Rstr, Bool, Real, Int, Date8, Date10, Date14, Time5, Time6, Day, Unsigned, Operator]);
}

defineClass(16, 20, {16:1, 4:1, 25:1, 20:1}, ColumnTypes);
var Bool, Char, Date10, Date14, Date8, Day, Int, None, Operator, Real, Rstr, Str, Time5, Time6, Unsigned, mappings;
var Lcom_priority_app_common_ColumnTypes_2_classLit = createForEnum('com.priority.app.common', 'ColumnTypes', 16, values_0);
function $clinit_EntityTypes(){
  $clinit_EntityTypes = emptyMethod;
  None_0 = new EntityTypes('None', 0, 0);
  Form_0 = new EntityTypes('Form', 1, 70);
  Report = new EntityTypes('Report', 2, 82);
  Wizard = new EntityTypes('Wizard', 3, 87);
  Html = new EntityTypes('Html', 4, 72);
  Movie = new EntityTypes('Movie', 5, 109);
  Gantt = new EntityTypes('Gantt', 6, 71);
  Explorer = new EntityTypes('Explorer', 7, 69);
  Dashboard = new EntityTypes('Dashboard', 8, 68);
  Olap = new EntityTypes('Olap', 9, 79);
  Procedure = new EntityTypes('Procedure', 10, 80);
  Menu = new EntityTypes('Menu', 11, 77);
  WizardMenu = new EntityTypes('WizardMenu', 12, 119);
  BPM = new EntityTypes('BPM', 13, 98);
  Generators = new EntityTypes('Generators', 14, 103);
  CompliedProg = new EntityTypes('CompliedProg', 15, 67);
  Load = new EntityTypes('Load', 16, 76);
  Interface = new EntityTypes('Interface', 17, 73);
  ExtDoc = new EntityTypes('ExtDoc', 18, 102);
  Message = new EntityTypes('Message', 19, 40);
  Frame_0 = new EntityTypes('Frame', 20, 35);
}

function EntityTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  $put_0((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(value_0), this);
}

function getEntChar(type_0){
  $clinit_EntityTypes();
  var k, k$iterator;
  for (k$iterator = (!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , $iterator(new AbstractMap$1(mappings_0))); $hasNext(k$iterator.val$outerIter2);) {
    k = dynamicCast($next_0(k$iterator), 23).value_0;
    if (maskUndefined($get_1((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(k))) === maskUndefined(type_0)) {
      return k & 65535;
    }
  }
  return 0;
}

function values_1(){
  $clinit_EntityTypes();
  return initValues(getClassLiteralForArray(Lcom_priority_app_common_EntityTypes_2_classLit, 1), $intern_4, 11, 0, [None_0, Form_0, Report, Wizard, Html, Movie, Gantt, Explorer, Dashboard, Olap, Procedure, Menu, WizardMenu, BPM, Generators, CompliedProg, Load, Interface, ExtDoc, Message, Frame_0]);
}

defineClass(11, 20, {11:1, 4:1, 25:1, 20:1}, EntityTypes);
var BPM, CompliedProg, Dashboard, Explorer, ExtDoc, Form_0, Frame_0, Gantt, Generators, Html, Interface, Load, Menu, Message, Movie, None_0, Olap, Procedure, Report, Wizard, WizardMenu, mappings_0;
var Lcom_priority_app_common_EntityTypes_2_classLit = createForEnum('com.priority.app.common', 'EntityTypes', 11, values_1);
function $clinit_PriCommon(){
  $clinit_PriCommon = emptyMethod;
  logger_0 = (new LoggerImplRegular , $ensureLogger(getLogManager(), 'Pri'));
}

function IsNullOrEmpty(str){
  $clinit_PriCommon();
  return str == null || str.length == 0;
}

function JsonToString(json){
  $clinit_PriCommon();
  return JSON.stringify(json);
}

function Printlog(message){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), message);
}

function b64encode(str){
  $clinit_PriCommon();
  return window.btoa(unescape(encodeURIComponent(str)));
}

function getHyperLinkedText(obj, propertyName){
  $clinit_PriCommon();
  var h, jo, jstr, msgtext;
  msgtext = '';
  h = dynamicCast($get_0(obj, 'HyperLinkedText'), 15);
  if (!!h && h.jsArray.length > 0) {
    jo = dynamicCast($get(h, 0), 5);
    if ('text' in jo.jsObject) {
      jstr = $get_0(jo, 'text').isString();
      !!jstr && (msgtext = jstr.value_0);
    }
  }
  if (msgtext == null || msgtext.length == 0) {
    if (propertyName in obj.jsObject) {
      jstr = $get_0(obj, propertyName).isString();
      !!jstr && (msgtext = jstr.value_0);
    }
  }
  return msgtext;
}

function getJSONNumberProperty(obj, propertyName){
  $clinit_PriCommon();
  var js;
  js = dynamicCast($get_0(obj, propertyName), 27);
  if (!js)
    return 0;
  return js.value_0;
}

function getJSONStringProperty(obj, propertyName){
  $clinit_PriCommon();
  var js;
  js = dynamicCast($get_0(obj, propertyName), 10);
  if (!js)
    return '';
  return js.value_0;
}

function split_0(str, delim){
  $clinit_PriCommon();
  var i, jo, len, ret;
  jo = str.split(delim);
  if (jo) {
    len = jo.length;
    if (len >= 0) {
      ret = initDim(Ljava_lang_String_2_classLit, $intern_4, 2, len, 4, 1);
      for (i = 0; i < len; i++)
        ret[i] = jo[i];
      return ret;
    }
  }
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 0, 4, 1);
}

var AppMain, SystemImagesDir = '', SystemMailDir = '', isDebugging = true, logger_0;
function $clinit_PriCommon$ChooseTypes(){
  $clinit_PriCommon$ChooseTypes = emptyMethod;
  Normal = new PriCommon$ChooseTypes('Normal', 0, -18);
  Zoom = new PriCommon$ChooseTypes('Zoom', 1, 0);
  Full = new PriCommon$ChooseTypes('Full', 2, 38);
  Alternate = new PriCommon$ChooseTypes('Alternate', 3, 39);
}

function PriCommon$ChooseTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.intValue = value_0;
  $put_0((!mappings_1 && !mappings_1 && (mappings_1 = new HashMap) , mappings_1), valueOf(value_0), this);
}

function values_2(){
  $clinit_PriCommon$ChooseTypes();
  return initValues(getClassLiteralForArray(Lcom_priority_app_common_PriCommon$ChooseTypes_2_classLit, 1), $intern_4, 37, 0, [Normal, Zoom, Full, Alternate]);
}

defineClass(37, 20, {37:1, 4:1, 25:1, 20:1}, PriCommon$ChooseTypes);
_.intValue = 0;
var Alternate, Full, Normal, Zoom, mappings_1;
var Lcom_priority_app_common_PriCommon$ChooseTypes_2_classLit = createForEnum('com.priority.app.common', 'PriCommon/ChooseTypes', 37, values_2);
function $clinit_PriCommon$PriMessageType(){
  $clinit_PriCommon$PriMessageType = emptyMethod;
  Ok = new PriCommon$PriMessageType('Ok', 0);
  OkCancel = new PriCommon$PriMessageType('OkCancel', 1);
  None_1 = new PriCommon$PriMessageType('None', 2);
  Cancel = new PriCommon$PriMessageType('Cancel', 3);
  YesNo = new PriCommon$PriMessageType('YesNo', 4);
  YesNoCancel = new PriCommon$PriMessageType('YesNoCancel', 5);
  ReadWriteCancel = new PriCommon$PriMessageType('ReadWriteCancel', 6);
}

function PriCommon$PriMessageType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_PriCommon$PriMessageType();
  return initValues(getClassLiteralForArray(Lcom_priority_app_common_PriCommon$PriMessageType_2_classLit, 1), $intern_4, 30, 0, [Ok, OkCancel, None_1, Cancel, YesNo, YesNoCancel, ReadWriteCancel]);
}

defineClass(30, 20, {30:1, 4:1, 25:1, 20:1}, PriCommon$PriMessageType);
var Cancel, None_1, Ok, OkCancel, ReadWriteCancel, YesNo, YesNoCancel;
var Lcom_priority_app_common_PriCommon$PriMessageType_2_classLit = createForEnum('com.priority.app.common', 'PriCommon/PriMessageType', 30, values_3);
function $clinit_SearchActions(){
  $clinit_SearchActions = emptyMethod;
  None_2 = new SearchActions('None', 0, -1);
  Start = new SearchActions('Start', 1, 0);
  Next = new SearchActions('Next', 2, 1);
  Prev = new SearchActions('Prev', 3, 2);
  TypeChange = new SearchActions('TypeChange', 4, 3);
  TextChange = new SearchActions('TextChange', 5, 4);
  StartChange = new SearchActions('StartChange', 6, 5);
  IgnoreCaseChanged = new SearchActions('IgnoreCaseChanged', 7, 6);
}

function SearchActions(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.intValue = value_0;
  $put_0((!mappings_2 && !mappings_2 && (mappings_2 = new HashMap) , mappings_2), valueOf(value_0), this);
}

function values_4(){
  $clinit_SearchActions();
  return initValues(getClassLiteralForArray(Lcom_priority_app_common_SearchActions_2_classLit, 1), $intern_4, 29, 0, [None_2, Start, Next, Prev, TypeChange, TextChange, StartChange, IgnoreCaseChanged]);
}

defineClass(29, 20, {29:1, 4:1, 25:1, 20:1}, SearchActions);
_.intValue = 0;
var IgnoreCaseChanged, Next, None_2, Prev, Start, StartChange, TextChange, TypeChange, mappings_2;
var Lcom_priority_app_common_SearchActions_2_classLit = createForEnum('com.priority.app.common', 'SearchActions', 29, values_4);
function $onResponseReceived(this$static, response){
  var e, res;
  try {
    !!this$static.myWcf && !!this$static.myWcf.conHolder && this$static.myWcf.conHolder.ServerTripCompleted(this$static.myWcf, this$static);
    if (response.xmlHttpRequest.status != 200) {
      response.xmlHttpRequest.status == 0?(this$static.error_0 = '@@@The server has failed to respond due to a communication error. Please try again later.\nIf this problem persists, please check your network/internet connection, and notify your system manager.\n'):(this$static.error_0 = "@@@Can't connect to server. HTTP Response: " + response.xmlHttpRequest.status + ', ' + response.xmlHttpRequest.statusText + '\ndetails: ' + response.xmlHttpRequest.responseText);
      this$static.OnPriError(this$static.error_0, false);
    }
     else {
      res = $ResponseResult(this$static.myWcf, response);
      this$static.OnPriResponse(($clinit_PriCommon() , decodeURIComponent(escape(window.atob(res)))));
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      !!this$static.myWcf && !!this$static.myWcf.conHolder && this$static.myWcf.conHolder.ServerTripCompleted(this$static.myWcf, this$static);
      this$static.error_0 = $toString(e);
      this$static.OnPriError(this$static.error_0, false);
    }
     else 
      throw unwrap_5($e0);
  }
}

function WCFResponse(con){
  this.myWcf = con;
}

defineClass(12, 1, {});
_.OnPriError = function OnPriError(error, isOnServer){
}
;
_.OnPriResponse = function OnPriResponse(response){
}
;
var Lcom_priority_app_common_WCFResponse_2_classLit = createForClass('com.priority.app.common', 'WCFResponse', 12);
function $FormActivateMobAsync(this$static, statexml, before, callback){
  var data_0;
  this$static.curop = 'FormActivateMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + $OneParameter('before', ($clinit_Boolean() , before?TRUE_0:FALSE_0)) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormExitFormMobAsync(this$static, statexml, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    $OnPriError(callback, null);
    return;
  }
  this$static.curop = 'FormExitFormMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormHtmlMobAsync(this$static, statexml, tstext, tsline, modified, html, key, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    callback.OnPriError(null, true);
    return;
  }
  this$static.curop = 'FormHtmlMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + $OneParameter_0('tstext', tstext) + ('<tsline>' + ('' + toString_9(tsline)) + '<\/' + 'tsline' + '>') + ('<modified>' + ('' + toString_9(modified)) + '<\/' + 'modified' + '>') + $OneParameter_0('html', html) + $OneParameter_0('comment', '') + ('<key>' + ('' + toString_9(key)) + '<\/' + 'key' + '>') + '<param1>0<\/param1>' + '<param2>0<\/param2>' + '<param3>0<\/param3>' + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormIsAliveMobAsync(this$static, statexml, callback){
  var data_0;
  this$static.curop = 'FormIsAliveMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormJumpLineMobAsync(this$static, statexml, line, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    $OnPriError_0(callback, null);
    return;
  }
  this$static.curop = 'FormJumpLineMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<line>' + ('' + toString_9(line)) + '<\/' + 'line' + '>') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormKeyMobAsync(this$static, statexml, key, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    callback.OnPriError(null, true);
    return;
  }
  this$static.curop = 'FormKeyMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<key>' + ('' + toString_9(key)) + '<\/' + 'key' + '>') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormQueryDlgExecuteMobAsync(this$static, statexml, add_0, xml, top_0, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    $OnPriError_4(callback, null);
    return;
  }
  this$static.curop = 'FormQueryDlgExecuteMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + $OneParameter('add', ($clinit_Boolean() , add_0?TRUE_0:FALSE_0)) + $OneParameter_0('xml', xml) + $OneParameter('ic', (null , TRUE_0)) + $OneParameter_0('queryname', '') + ('<top>' + ('' + toString_9(top_0)) + '<\/' + 'top' + '>') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormSearchMobAsync(this$static, statexml, mode, editvalue, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    $OnPriError_2(callback);
    return;
  }
  this$static.curop = 'FormSearchMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<mode>' + ('' + toString_9(mode)) + '<\/' + 'mode' + '>') + $OneParameter_0('editvalue', editvalue) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormSearchSetDirtyMobAsync(this$static, statexml, callback){
  var data_0;
  this$static.curop = 'FormSearchSetDirtyMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormStartMobAsync(this$static, form_0, autoRetrieveFirstRows, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    InvokeFormStartCallback(null, 0, null, null, null, 'exception', callback.val$onSuccess4, callback.val$onError5);
    return;
  }
  this$static.curop = 'FormStartMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('form', form_0) + '<scrwidth>-1<\/scrwidth>' + $OneParameter_0('link', '') + $OneParameter_0('linkid', '') + '<zoomcolumn>0<\/zoomcolumn>' + $OneParameter_0('zoomname', '') + $OneParameter('debug', ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)) + $OneParameter('sendtitles', (null , FALSE_0)) + $OneParameter_0('zoomvalue', '') + $OneParameter('autoRetrieveFirstRows', autoRetrieveFirstRows?TRUE_0:FALSE_0) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormSubFormMobAsync(this$static, statexml, self_0, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    $OnPriError_1(callback, null);
    return;
  }
  this$static.curop = 'FormSubFormMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<self>' + ('' + toString_9(self_0)) + '<\/' + 'self' + '>') + $OneParameter('empty', ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormUploadFileAsyncMob(this$static, statexml, mode, file, base64, callback){
  var data_0;
  this$static.curop = 'FormUploadFileMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<mode>' + ('' + toString_9(mode)) + '<\/' + 'mode' + '>') + $OneParameter_0('file', file) + $OneParameter_0('base64', base64) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $FormWarningMobAsync(this$static, statexml, wsql, wval, wline, wkey, wstep, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    $OnPriError_3(callback, null);
    return;
  }
  this$static.curop = 'FormWarningMob';
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + $OneParameter_0('wsql', wsql) + ('<wval>' + ('' + toString_9(wval)) + '<\/' + 'wval' + '>') + ('<wline>' + ('' + toString_9(wline)) + '<\/' + 'wline' + '>') + ('<wkey>' + ('' + toString_9(wkey)) + '<\/' + 'wkey' + '>') + ('<wstep>' + ('' + toString_9(wstep)) + '<\/' + 'wstep' + '>') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $GeneralValidPasswordMobAsync(this$static, password, callback){
  var data_0;
  this$static.curop = 'GeneralValidPasswordMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('password', password) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $OneParameter(name_0, value_0){
  return '<' + name_0 + '>' + (value_0.value_0?'true':'false') + '<\/' + name_0 + '>';
}

function $OneParameter_0(name_0, value_0){
  if (value_0 == null)
    return '';
  return '<' + name_0 + '>' + escapeString(value_0) + '<\/' + name_0 + '>';
}

function $ProcAskPrintOKMobAsync(this$static, session, format, pdf, callback){
  var data_0;
  this$static.curop = 'ProcAskPrintOKMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + '<mode>2<\/mode>' + ('<format>' + ('' + toString_9(format)) + '<\/' + 'format' + '>') + $OneParameter('sendattach', ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)) + '<copies>1<\/copies>' + $OneParameter('pdf', pdf?TRUE_0:FALSE_0) + $OneParameter('sign', (null , FALSE_0)) + $OneParameter('quick', (null , FALSE_0)) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcCheckExecutionMobAsync(this$static, session, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    $OnPriError_5(callback);
    return;
  }
  this$static.curop = 'ProcCheckExecutionMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcChooseFieldsOKMobAsync(this$static, session, field, callback){
  var data_0;
  this$static.curop = 'ProcChooseFieldsOKMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + ('<field>' + ('' + toString_9(field)) + '<\/' + 'field' + '>') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcContinueMobAsync(this$static, session, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    callback.OnPriError(null, true);
    return;
  }
  this$static.curop = 'ProcContinueMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcEditFieldsOKMobAsync(this$static, session, xml, callback){
  var data_0;
  this$static.curop = 'ProcEditFieldsOKMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + $OneParameter('save', ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)) + $OneParameter_0('xml', xml) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcEndMobAsync(this$static, session, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    !!callback.onError && InvokeError_0(callback.proc_0, null, true, callback.onError);
    return;
  }
  this$static.curop = 'ProcEndMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcKillExecutionMobAsync(this$static, session, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    !!callback.onError && InvokeError_0(callback.proc_0, null, true, callback.onError);
    return;
  }
  this$static.curop = 'ProcKillExecutionMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcKillProcessMobAsync(this$static, session, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    !!callback.onError && InvokeError_0(callback.proc_0, null, true, callback.onError);
    return;
  }
  this$static.curop = 'ProcKillProcessMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcNewReportMobAsync(this$static, type_0, ename, format, callback){
  var data_0;
  this$static.curop = 'ProcNewReportMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('type', type_0) + $OneParameter_0('ename', ename) + $OneParameter('debug', ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)) + $OneParameter_0('mode', 'H') + ('<format>' + ('' + toString_9(format)) + '<\/' + 'format' + '>') + $OneParameter_0('zoomvalue', '') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcParamChooseMobAsync(this$static, session, field, xml, callback){
  var data_0;
  this$static.curop = 'ProcParamChooseMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + ('<field>' + ('' + toString_9(field)) + '<\/' + 'field' + '>') + $OneParameter_0('xml', xml) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcParamSearchMobAsync(this$static, session, field, mode, cursor, start_0, last, editvalue, xml, callback){
  var data_0;
  this$static.curop = 'ProcParamSearchMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + ('<field>' + ('' + toString_9(field)) + '<\/' + 'field' + '>') + ('<mode>' + ('' + toString_9(mode)) + '<\/' + 'mode' + '>') + ('<cursor>' + ('' + toString_9(cursor)) + '<\/' + 'cursor' + '>') + ('<start>' + ('' + toString_9(start_0)) + '<\/' + 'start' + '>') + $OneParameter_0('last', last) + $OneParameter_0('editvalue', editvalue) + $OneParameter_0('xml', xml) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcStartActivateMobAsync(this$static, type_0, ename, table, link_0, linkid, avoidmessages, callback){
  var data_0;
  this$static.curop = 'ProcStartActivateMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('type', type_0) + $OneParameter_0('ename', ename) + $OneParameter_0('table', table) + $OneParameter_0('link', link_0) + $OneParameter_0('linkid', linkid) + $OneParameter('avoidmessages', ($clinit_Boolean() , avoidmessages?TRUE_0:FALSE_0)) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcStartMobAsync(this$static, type_0, ename, avoidmessages, callback){
  var data_0;
  this$static.curop = 'ProcStartMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('type', type_0) + $OneParameter_0('ename', ename) + $OneParameter('debug', ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)) + '<repexec>0<\/repexec>' + $OneParameter('avoidmessages', avoidmessages?TRUE_0:FALSE_0) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ProcWarningOKMobAsync(this$static, session, callback){
  var data_0;
  if (!!this$static.conHolder && !this$static.conHolder.SetIsGoneToServer(callback)) {
    !!callback.onError && InvokeError_0(callback.proc_0, null, true, callback.onError);
    return;
  }
  this$static.curop = 'ProcWarningOKMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (!!this$static.conHolder && this$static.conHolder.getDname() != null?this$static.conHolder.getDname():this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + ('<OtherInfo xmlns="PriorityNS">app_' + AppName + ',<\/OtherInfo>') + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('session', session) + '<warnings>0<\/warnings>' + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 8))
      throw unwrap_5($e0);
  }
}

function $ResponseResult(this$static, r){
  var a;
  a = split_0(r.xmlHttpRequest.responseText, this$static.curop + 'Result>');
  if (a.length < 2 || a[1].length <= 2)
    return '';
  return $substring(a[1], 0, a[1].length - 2);
}

function $SetComputerName(this$static, name_0){
  this$static.Compname = name_0 == null?'':name_0;
}

function $SetUsernamePassword(this$static, app, username, password){
  this$static.Username = username + '\t' + app;
  this$static.Password = password;
}

function GMTDates(){
  return $wnd.GMTDates();
}

function JSGetTimeAndPlace(){
  return -(new Date).getTimezoneOffset() + ($wnd.GPSLocation == null?'':$wnd.GPSLocation);
}

function WCFService(url_0, holder){
  $clinit_RequestBuilder();
  RequestBuilder.call(this, POST, url_0);
  $setHeader(this, 'content-type', 'text/xml; charset=utf-8');
  this.conHolder = holder;
}

function escapeString(str){
  str = str.indexOf('&') >= 0?str.replace(/&/g, '&amp;'):str;
  str = str.indexOf('<') >= 0?str.replace(/</g, '&lt;'):str;
  str = str.indexOf('>') >= 0?str.replace(/>/g, '&gt;'):str;
  return str;
}

defineClass(90, 66, {}, WCFService);
_.Userlang = 0;
var Lcom_priority_app_common_WCFService_2_classLit = createForClass('com.priority.app.common', 'WCFService', 90);
function GetWCFServiceClient(conHolder){
  var con;
  con = new WCFService(Host, conHolder);
  $SetUsernamePassword(con, App, Login, Pwd);
  $SetComputerName(con, ComputerName);
  con.WindowsUser = '';
  con.Userlang = Lang;
  con.Dname = DName;
  return con;
}

function SetWCFServiceParams(host, app, lang_0, dname, appname){
  Host = host;
  App = app;
  Lang = lang_0;
  DName = dname;
  AppName = appname;
}

var App, AppName, ComputerName, DName, Host, Lang = 0, Login, Pwd;
function $clinit_ZoomTypes(){
  $clinit_ZoomTypes = emptyMethod;
  None_3 = new ZoomTypes('None', 0, 0);
  Attach = new ZoomTypes('Attach', 1, 1);
  Search = new ZoomTypes('Search', 2, 2);
  Choose = new ZoomTypes('Choose', 3, 3);
  Zoom_0 = new ZoomTypes('Zoom', 4, 4);
  Date14_0 = new ZoomTypes('Date14', 5, 5);
  Date8_0 = new ZoomTypes('Date8', 6, 6);
  Date10_0 = new ZoomTypes('Date10', 7, 7);
  EMail = new ZoomTypes('EMail', 8, 8);
  URL_0 = new ZoomTypes('URL', 9, 9);
  HiddenZoom = new ZoomTypes('HiddenZoom', 10, 10);
  LinkFile = new ZoomTypes('LinkFile', 11, 11);
  QEdit = new ZoomTypes('QEdit', 12, 12);
  SpecialAttach = new ZoomTypes('SpecialAttach', 13, 99);
}

function ZoomTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  $put_0((!mappings_3 && !mappings_3 && (mappings_3 = new HashMap) , mappings_3), valueOf(value_0), this);
}

function forValue_0(value_0){
  $clinit_ZoomTypes();
  return dynamicCast($get_1((!mappings_3 && !mappings_3 && (mappings_3 = new HashMap) , mappings_3), valueOf(value_0)), 18);
}

function values_5(){
  $clinit_ZoomTypes();
  return initValues(getClassLiteralForArray(Lcom_priority_app_common_ZoomTypes_2_classLit, 1), $intern_4, 18, 0, [None_3, Attach, Search, Choose, Zoom_0, Date14_0, Date8_0, Date10_0, EMail, URL_0, HiddenZoom, LinkFile, QEdit, SpecialAttach]);
}

defineClass(18, 20, {18:1, 4:1, 25:1, 20:1}, ZoomTypes);
var Attach, Choose, Date10_0, Date14_0, Date8_0, EMail, HiddenZoom, LinkFile, None_3, QEdit, Search, SpecialAttach, URL_0, Zoom_0, mappings_3;
var Lcom_priority_app_common_ZoomTypes_2_classLit = createForEnum('com.priority.app.common', 'ZoomTypes', 18, values_5);
function DirectAct(){
}

defineClass(164, 1, {}, DirectAct);
var Lcom_priority_app_form_DirectAct_2_classLit = createForClass('com.priority.app.form', 'DirectAct', 164);
function $Activate(this$static, start_0, onSuccess, onError, ename, type_0, onProgress){
  var memento;
  if ($InvokeErrorIfRowChanged(this$static, onSuccess, onError))
    return;
  memento = $CreateMemento(this$static.curTab);
  $FormActivateMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), start_0, new Form$9(this$static, $GetConnection(this$static), this$static, start_0, ename, type_0, onProgress, onSuccess, onError));
}

function $ActivateStart(this$static, onSuccess, onError, ename, type_0, onProgress, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In ActivateStart: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , ActivateStart_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError, ename, type_0, onProgress]))))
    return;
  $Activate(this$static, true, onSuccess, onError, ename, type_0, onProgress);
}

function $AddCurrentRow(row, retObj){
  retObj.NewRow = {};
  retObj.NewRow.rowindex = row;
}

function $AddHtmlToResponseObject(this$static, retObj, isGetRows){
  var ind, styleEnd, styleStart, text_0;
  text_0 = this$static.curTab.htmltext;
  if (text_0 != null && text_0.length > 0) {
    styleStart = text_0.indexOf('<style>');
    styleEnd = text_0.indexOf('<\/style>');
    styleStart == 0 && styleEnd > 0 && (text_0 = $trim(__substr(text_0, styleEnd + 8, text_0.length - (styleEnd + 8))));
    if ($equals(__substr(text_0, text_0.length - 10, 10), '&nbsp;<\/P>'))
      text_0 = $substring(text_0, 0, text_0.length - 10) + '<\/P>';
    else {
      ind = text_0.indexOf('&nbsp;<\/P><timestamp:');
      ind >= 0 && (text_0 = text_0.substr(0, ind) + $substring(text_0, ind + 6, text_0.length));
    }
  }
  $FormHtmlRetobj(retObj, text_0, isGetRows, this$static.curTab.table_0, this$static);
}

function $AddText(this$static, text_0, addFlag, commentFlag, lang2Flag, onSuccess, onError, executeNow){
  var error, errorType, memento, newtext;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In AddText: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , AddText_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [text_0, valueOf(addFlag), valueOf(commentFlag), valueOf(lang2Flag), onSuccess, onError]))))
    return;
  memento = $CreateMemento(this$static.curTab);
  error = null;
  errorType = null;
  newtext = null;
  if (this$static.curTab.ishtml_0 == 0) {
    error = 'Not an Html form.';
    errorType = 'noHtml';
  }
   else if (this$static.curTab.isEdit == 0) {
    error = 'This form is readonly.';
    errorType = 'readOnlyForm';
  }
   else {
    newtext = $ComposeText(this$static.curTab, this$static.curTab.htmltext, text_0, addFlag == 1, commentFlag == 1, lang2Flag == 1);
  }
  if (newtext != null && newtext.length >= 190000) {
    error = 'Text is too long (limited to 190000 Characters).';
    errorType = 'textTooLong';
  }
  if (error != null) {
    InvokeCallback(this$static, null, null, error, errorType, onSuccess, onError);
    return;
  }
  newtext.length < 190000 && $FormHtmlMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), this$static.curTab.tstext_0, fromInt(this$static.curTab.tsline_0), {l:1, m:0, h:0}, b64encode(newtext), fromInt(-($clinit_PriKeys() , SaveHtml).intValue), new Form$16(this$static, $GetConnection(this$static), this$static, onSuccess, onError));
}

function $ClearRows(this$static, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In ClearRows: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , ClearRows_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError]))))
    return;
  if (this$static.curTab.level_0 > 0) {
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, ClearRows may be used in top level forms only (error)');
    InvokeCallback(this$static, null, null, 'ClearRows may be used in top level forms only.', 'noClearOnSubForm', onSuccess, onError);
    return;
  }
  $setAdd(this$static.curTab, false);
  $FormKey(this$static, ($clinit_PriKeys() , Clntb), onSuccess, onError);
}

function $ClearSearchFilter(this$static, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In ClearSearchFilter: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , ClearSearchFilter_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError]))))
    return;
  $ClearSearchFilter_0(this$static.curTab, onSuccess);
}

function $Con_FormUploadFileCompleted(this$static, jo, retObj, fileName, userState, uploadFileSection, isLast, fileContents, onSuccess, onError){
  var fn, progress, ret;
  try {
    fn = retObj.UploadFile.file;
    fn != null && fn.length > 0 && (fileName = fn);
    if (isLast) {
      ret = new JSONObject;
      PrepareRetObj(ret, 100, true, fileName);
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, upload last (success)');
      InvokeCallback(this$static, jo, ret, null, null, onSuccess, onError);
    }
     else {
      progress = round_int((uploadFileSection + 1) * 19456 / fileContents.length * 100);
      progress > 100 && (progress = 100);
      ret = new JSONObject;
      PrepareRetObj(ret, progress, false, fileName);
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeSuccessNow, upload not last (success)');
      onSuccess(ret);
      $UploadFile(this$static, uploadFileSection + 1, fileName, fileContents, onSuccess, onError, userState);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      return;
    }
     else 
      throw unwrap_5($e0);
  }
}

function $DelRow(this$static, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In DelRow: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , DelRow_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError]))))
    return;
  $FormKey(this$static, ($clinit_PriKeys() , Del), onSuccess, onError);
}

function $EndCurrentForm(this$static, onSuccess, onError, executeNow){
  var memento;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In EndCurrentForm: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , EndCurrentForm_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError]))))
    return;
  if ($InvokeErrorIfRowChanged(this$static, onSuccess, onError))
    return;
  if (this$static.curTab.ishtml_0 == 1 && this$static.curTab.isEdit == 1) {
    memento = $CreateMemento(this$static.curTab);
    $FormHtmlMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), this$static.curTab.tstext_0, fromInt(this$static.curTab.tsline_0), {l:0, m:0, h:0}, b64encode(''), fromInt(-($clinit_PriKeys() , Tab).intValue), new Form$10($GetConnection(this$static), this$static, onSuccess, onError));
  }
   else if (this$static.curTab.level_0 == 0) {
    memento = $CreateMemento(this$static.curTab);
    $FormExitFormMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), new Form$11($GetConnection(this$static), this$static, onSuccess, onError));
  }
   else {
    $SaveCurrentRow(this$static, 1, onSuccess, onError, 1);
  }
}

function $FormChoose(this$static, fieldName, fieldValue, onSuccess, onError, executeNow){
  var col, memento;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In FormChoose: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , Choose_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [fieldName, fieldValue, onSuccess, onError]))))
    return;
  col = $getCol(this$static.curTab, fieldName);
  if (!col) {
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), "Before InvokeCallback, FormChoose can't find column (error)");
    InvokeFormChooseCallback(this$static, null, null, "Can't find column: " + fieldName, 'noSuchColumn', onSuccess, onError);
    return;
  }
  $SetField(this$static.curTab, col.field_0, fieldValue);
  memento = $CreateMemento(this$static.curTab);
  $FormKeyMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(($clinit_PriCommon$ChooseTypes() , Normal).intValue), new Form$18($GetConnection(this$static), this$static, onSuccess, onError));
}

function $FormFieldUpdate(this$static, fieldName, value_0, onSuccess, onError, executeNow){
  var col;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In FormFieldUpdate: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , FieldUpdate), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [fieldName, value_0, onSuccess, onError]))))
    return;
  col = $getCol(this$static.curTab, fieldName);
  if (!col) {
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), "Before InvokeCallback, FormFieldUpdate can't find column (error)");
    InvokeCallback(this$static, null, null, "Can't find column: " + fieldName, 'noSuchColumn', onSuccess, onError);
    return;
  }
  col.type_0 == 'date' && (value_0 = ISOToDate(col.width_0, value_0));
  $SetField(this$static.curTab, col.field_0, value_0);
  $FormKey(this$static, ($clinit_PriKeys() , Return), onSuccess, onError);
}

function $FormGoto(this$static, row, getData, onSuccess, onError){
  var firstrow, hasData, jo, lastrow, memento, retObj;
  if ($InvokeErrorIfRowChanged(this$static, onSuccess, onError))
    return;
  firstrow = this$static.curTab.line_0;
  lastrow = this$static.curTab.line_0 + this$static.curTab.rowcount;
  if (row >= firstrow && row <= lastrow + 1) {
    hasData = true;
    retObj = new JSONObject;
    getData?(hasData = $GetRowsData(this$static.curTab.table_0, row, retObj, this$static)):$AddCurrentRow(row, retObj);
    if (hasData) {
      $SetRowClient(this$static, row);
      jo = {};
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormGoto hasData=true (success)');
      InvokeCallback(this$static, jo, retObj, null, null, onSuccess, onError);
      return;
    }
  }
  memento = $CreateMemento(this$static.curTab);
  $FormJumpLineMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(row), new Form$12($GetConnection(this$static), this$static, getData, row, onSuccess, onError));
}

function $FormHtmlRetobj(retObj, htmltext, isGetRows, table, that){
  var gform = that.GetJsTableObject(table);
  if (isGetRows) {
    retObj.RowsData = {};
    retObj.RowsData[gform.name] = {};
    retObj.RowsData[gform.name][1] = {};
    retObj.RowsData[gform.name][1]['htmltext'] = htmltext;
  }
   else {
    !retObj.ReplaceText && (retObj.ReplaceText = {});
    retObj.ReplaceText[gform.name] = {};
    retObj.ReplaceText[gform.name][1] = {};
    retObj.ReplaceText[gform.name][1]['htmltext'] = htmltext;
  }
}

function $FormKey(this$static, key, onSuccess, onError){
  var memento;
  memento = $CreateMemento(this$static.curTab);
  $FormKeyMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(-key.intValue), new Form$4($GetConnection(this$static), this$static, key, onSuccess, onError));
}

function $FormQuery(this$static, filter, fromRow, onSuccess, onError){
  var memento, xml;
  if (this$static.started == 1 && !filter && fromRow <= 1) {
    $setAdd(this$static.curTab, true);
    $FormGoto(this$static, 1, true, onSuccess, onError);
    return;
  }
  memento = $CreateMemento(this$static.curTab);
  xml = null;
  !!filter && (xml = b64encode(JsonToString(filter)));
  $FormQueryDlgExecuteMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), this$static.curTab.isAdd, xml, fromInt(fromRow + this$static.curTab.rowcount - 2), new Form$3(this$static, $GetConnection(this$static), this$static, onSuccess, onError, fromRow));
}

function $FormSearchAction(this$static, action, searchText, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In FormSearchAction: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , SearchAction), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(action), searchText, onSuccess, onError]))))
    return;
  $FormSearchMobAsync($GetConnection(this$static), ($InitDummyFormState(this$static) , this$static.dummyFormState), fromInt(action), searchText, new Form$17($GetConnection(this$static), this$static, onSuccess, onError));
}

function $FormWarning(this$static, ok, executeNow){
  var onError, onSuccess;
  onSuccess = this$static.onSuccess;
  onError = this$static.onError;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In FormWarning: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , WarningApproved), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(ok), onError]))))
    return;
  if (ok == 0 && this$static.warningData.readWrite == 0) {
    $HandleError(this$static.RequestsQueue);
    sendMessage(this$static, onError, '', 'apiError', 'warningCancel', 0, 0, 1);
    return;
  }
  $FormWarningMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, $CreateMemento(this$static.curTab))), this$static.warningData.wsql, this$static.warningData.wval, this$static.warningData.readWrite == 0?this$static.warningData.wline:fromInt(ok), this$static.warningData.wkey, this$static.warningData.wstep, new Form$2(this$static, $GetConnection(this$static), this$static, onSuccess, onError));
}

function $GetConnection(this$static){
  if (this$static.con)
    return this$static.con;
  this$static.con = GetWCFServiceClient(this$static);
  return this$static.con;
}

function $GetRows(this$static, fromRow, onSuccess, onError, executeNow){
  var filter, retObj, jo;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In GetRows: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , GetRows_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(fromRow), onSuccess, onError]))))
    return;
  if ($InvokeErrorIfRowChanged(this$static, onSuccess, onError))
    return;
  filter = this$static.curTab.filter;
  this$static.curTab.ishtml_0 == 1?(retObj = new JSONObject , $AddHtmlToResponseObject(this$static, retObj, true) , jo = {} , InvokeCallback(this$static, jo, retObj, null, null, onSuccess, onError) , undefined):this$static.curTab.level_0 == 0?$FormQuery(this$static, filter, fromRow, onSuccess, onError):$FormGoto(this$static, fromRow, true, onSuccess, onError);
}

function $GetRowsData(table, fromRow, retObj, that){
  var gform = that.GetJsTableObject(table);
  if (gform == null)
    return false;
  var global_forms_rows = that.global_forms_rows;
  if (!global_forms_rows || !global_forms_rows[table] || global_forms_rows[table].length <= 0) {
    retObj.RowsData = {};
    retObj.RowsData[gform.name] = {};
    return true;
  }
  var offset = that.getRowOffset(table);
  var currow = fromRow - offset;
  var lines = that.getTableLines(table);
  var tab = global_forms_rows[table];
  var hasRows = false;
  var curlines = lines - offset;
  var rowcount = that.getTableRowCount(table);
  curlines > rowcount && (curlines = rowcount);
  if (that.getIsAppend()) {
    retObj.RowsData = {};
    retObj.RowsData[gform.name] = {};
    return true;
  }
  retObj.RowsData = {};
  retObj.RowsData[gform.name] = {};
  for (var i = currow; i <= curlines; i++) {
    for (var field in tab[i]) {
      var colName = that.getColNameById(table, field);
      if (colName != null && colName.length > 0 && gform.columns[colName] != null) {
        !retObj.RowsData[gform.name][i + offset] && (retObj.RowsData[gform.name][i + offset] = {});
        var value_0 = tab[i][field];
        gform.columns[colName].type == 'date' && (value_0 = DateToISO(value_0));
        retObj.RowsData[gform.name][i + offset][colName] = value_0;
        hasRows = true;
      }
    }
  }
  return hasRows;
}

function $GotoSubForm(this$static, formName, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError, executeNow){
  var ft, memento;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In GotoSubForm: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , StartSubForm), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [formName, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError]))))
    return;
  if ($InvokeErrorIfRowChanged(this$static, onSuccess, onError))
    return;
  ft = this$static.curTab;
  if (!$hasStringValue(ft.SubForms, formName)) {
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), "Before InvokeCallback, GotoSubForm can't find subform (error)");
    InvokeCallback(this$static, null, null, "Can't find Sub Form: " + formName, 'noSuchSubForm', onSuccess, onError);
    return;
  }
  memento = $CreateMemento(this$static.curTab);
  $FormSubFormMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(dynamicCast($getStringValue(ft.SubForms, formName), 61).self_0), new Form$13(this$static, $GetConnection(this$static), this$static, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError));
}

function $InitDummyFormState(this$static){
  var jop, opTable, opsTable, ses, tableState;
  if (this$static.privateSession == null || !this$static.privateSession.length)
    return;
  tableState = new JSONObject;
  opTable = new JSONArray;
  opsTable = new JSONArray;
  $put(tableState, 'Operations', opsTable);
  $put(tableState, 'Operation', opTable);
  ses = new JSONObject;
  $put(ses, 'session', new JSONString(this$static.privateSession));
  $set(opsTable, opsTable.jsArray.length, ses);
  jop = new JSONObject;
  $put(jop, 'field', new JSONString('0'));
  $put(jop, 'line', new JSONString('0'));
  $put(jop, 'curtab', new JSONString('0'));
  $put(jop, 'value', new JSONString(''));
  $put(jop, 'active', new JSONString('1'));
  $put(jop, 'key', new JSONString('0'));
  $set(opTable, opTable.jsArray.length, jop);
  this$static.dummyFormState = b64encode($toString_0(tableState));
}

function $InvokeErrorIfRowChanged(this$static, onSuccess, onError){
  if (this$static.position_0.changed_0 == 1) {
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, InvokeErrorIfRowChanged');
    InvokeCallback(this$static, null, null, 'Must save/discard changes in current row first.', 'mustSaveOrDiscard', onSuccess, onError);
    return true;
  }
  return false;
}

function $IsAlive(this$static, onSuccess, onError, executeNow){
  var memento;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In IsAlive: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , IsAlive_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError]))))
    return;
  memento = $CreateMemento(this$static.curTab);
  $FormIsAliveMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), new Form$15($GetConnection(this$static), this$static, onSuccess, onError));
}

function $NewRow(this$static, onSuccess, onError, executeNow){
  var line;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In NewRow: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , NewRow_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError]))))
    return;
  if ($InvokeErrorIfRowChanged(this$static, onSuccess, onError))
    return;
  line = this$static.curTab.lines_0 + 1;
  this$static.position_0.isappend_0 == 1 && (line -= 1);
  $FormGoto(this$static, line, false, onSuccess, onError);
}

function $SaveCurrentRow(this$static, exit, onSuccess, onError, executeNow){
  var memento;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In SaveCurrentRow: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , SaveRow), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(exit), onSuccess, onError]))))
    return;
  memento = $CreateMemento(this$static.curTab);
  exit == 1 && this$static.curTab.level_0 > 0?$FormKey(this$static, ($clinit_PriKeys() , Tab), onSuccess, onError):$FormKeyMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(($clinit_PriKeys() , SaveRow_0).intValue), new Form$14($GetConnection(this$static), this$static, onSuccess, onError));
}

function $SetActiveRow(this$static, row, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In SetActiveRow: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , SetActiveRow_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(row), onSuccess, onError]))))
    return;
  $FormGoto(this$static, row, false, onSuccess, onError);
}

function $SetCurFieldValue(this$static){
  var value_0;
  value_0 = $getFieldValue(this$static.position_0.table_0, this$static.position_0.line_0, this$static.position_0.field_0, this$static);
  $SetField(this$static.curTab, this$static.position_0.field_0, value_0);
}

function $SetRowClient(this$static, row){
  var tab;
  tab = this$static.curTab;
  if (tab) {
    this$static.position_0.field_0 = 1;
    this$static.position_0.line_0 = row - tab.line_0 + 1;
    $SetCurRowInData(tab, row - tab.line_0 + 1);
    $SetCurFieldValue(this$static);
  }
}

function $SetSearchFilter(this$static, filter, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In SetSearchFilter: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , SetSearchFilter_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [filter, onSuccess, onError]))))
    return;
  $SetSearchFilter_0(this$static.curTab, filter, onSuccess, onError);
}

function $SetSimpleSearchFilter(this$static, filter, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In SetSimpleSearchFilter: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , SetSimpleSearchFilter_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [filter, onSuccess, onError]))))
    return;
  $SetSimpleSearchFilter_0(this$static.curTab, filter, onSuccess, onError);
}

function $Undo(this$static, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In Undo: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , Undo_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError]))))
    return;
  $FormKey(this$static, ($clinit_PriKeys() , Undo_1), onSuccess, onError);
}

function $UploadFile(this$static, uploadFileSection, fileName, fileContents, onSuccess, onError, userState){
  var b64, finished, macFileTransfer, memento, ret, uploadmode;
  uploadmode = 0;
  if (uploadFileSection == 0) {
    b64 = fileContents.indexOf('base64,', 0);
    b64 >= 0 && (fileContents = __substr(fileContents, b64 + 7, fileContents.length - (b64 + 7)));
  }
   else {
    uploadmode = 1;
  }
  if (this$static.isCancelFileUpload) {
    ret = new JSONObject;
    PrepareRetObj(ret, -1, true, '');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, cancel file upload (success)');
    InvokeCallback(this$static, onSuccess, ret, null, null, onSuccess, onError);
    this$static.isCancelFileUpload = false;
    return;
  }
  finished = false;
  macFileTransfer = null;
  $clinit_PriCommon();
  fileContents == null || fileContents.length == 0?(finished = true):uploadFileSection * 19456 >= fileContents.length?(finished = true):(macFileTransfer = fileContents.substr(uploadFileSection * 19456, (uploadFileSection + 1) * 19456 - uploadFileSection * 19456));
  memento = $CreateMemento(this$static.curTab);
  finished?$FormUploadFileAsyncMob($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), {l:2, m:0, h:0}, fileName, b64encode(''), new Form$8(this$static, $GetConnection(this$static), this$static, fileName, userState, uploadFileSection, fileContents, onSuccess, onError)):$FormUploadFileAsyncMob($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(uploadmode), fileName, b64encode(macFileTransfer), new Form$7(this$static, $GetConnection(this$static), this$static, fileName, userState, uploadFileSection, fileContents, onSuccess, onError));
}

function $UploadFile_0(this$static, file, onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In UploadFile: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this$static.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , UploadFile_1), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [file, onSuccess, onError]))))
    return;
  if (!file) {
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, UploadFile file is null (error)');
    InvokeCallback(this$static, null, null, 'file is null.', 'fileIsNull', onSuccess, onError);
    return;
  }
  $FormSearchSetDirtyMobAsync($GetConnection(this$static), ($InitDummyFormState(this$static) , this$static.dummyFormState), new Form$5($GetConnection(this$static), this$static, file, onSuccess, onError));
}

function $getFieldValue(table, row, field, that){
  var value_0 = '';
  var global_forms_rows = that.global_forms_rows;
  global_forms_rows[table] && global_forms_rows[table][row] && global_forms_rows[table][row][field] && (value_0 = global_forms_rows[table][row][field]);
  return value_0;
}

function ContainsError(obj){
  if (obj.Error != null)
    return true;
  return false;
}

function DateToISO(dateStr){
  if (dateStr == null || dateStr == '')
    return '';
  var lang_0 = Lang;
  var dateParts = dateStr.split(/\/| /);
  var year = dateParts[2];
  var month = lang_0 == '3'?Number(dateParts[0]) - 1:Number(dateParts[1]) - 1;
  var day = lang_0 == '3'?Number(dateParts[1]):Number(dateParts[0]);
  var time = dateParts[3];
  var hours = 0;
  var minutes = 0;
  var date;
  if (time !== undefined) {
    var timeParts = time.split(':');
    hours = timeParts[0];
    minutes = timeParts[1];
    hours = Number(hours);
    minutes = Number(minutes);
  }
  year = Number(year);
  year >= 88 && year <= 99?(year = 1900 + year):year < 88 && (year = 2000 + year);
  date = new Date(Date.UTC(year, month, day, hours, minutes, 0));
  return date.toISOString();
}

function Form_1(){
  this.FormTables = new HashMap;
  this.ActiveTables = new HashMap;
  this.RequestsQueue = new FormAPIQueue(this);
  this._currentFormState = new FormTableOperations;
  this.position_0 = new Form$Position;
  this.warningData = new Form$WarningMessageData;
  this.global_forms_rows = [];
}

function ISOToDate(colWidth, ISODate){
  var date = new Date(ISODate);
  if (isNaN(date.getTime()))
    return '';
  var dateStr = '';
  var month = date.getUTCMonth() + 1 < 10?'0' + (date.getUTCMonth() + 1):date.getUTCMonth() + 1;
  var day = date.getUTCDate();
  day = day < 10?'0' + day:day;
  var year = colWidth != 10?date.getUTCFullYear().toString().substr(2, 2):date.getUTCFullYear();
  Lang != '3'?(dateStr = day + '/' + month + '/' + year):(dateStr = month + '/' + day + '/' + year);
  if (colWidth == 14) {
    var hours = date.getUTCHours() < 10?'0' + date.getUTCHours():date.getUTCHours();
    var minutes = date.getUTCMinutes() < 10?'0' + date.getUTCMinutes():date.getUTCMinutes();
    dateStr = dateStr + ' ' + hours + ':' + minutes;
  }
  return dateStr;
}

function ParseJO(jo, retObj, that, operation){
  var zt, ct, ct_0;
  that.UpdateStarted();
  var global_forms_rows = that.global_forms_rows;
  if (jo.Form[0].FreeTable && jo.Form[0].FreeTable.length > 0) {
    for (i = 0; i < jo.Form[0].FreeTable.length; i++) {
      var table = jo.Form[0].FreeTable[i].table;
      global_forms_rows[table] = [];
    }
  }
  if (operation == 'FormKey_Del') {
    if (jo.Form[0].ClearLine && jo.Form[0].ClearLine.length > 0) {
      var table = jo.Form[0].ClearLine[0].table;
      if (table == jo.Form[0].Position[0].table) {
        var line = jo.Form[0].ClearLine[0].line;
        global_forms_rows[table][line] = [];
        var gform = that.GetJsTableObject(table);
        if (gform) {
          var addline = that.getRowOffset(table);
          retObj.ClearLine = {};
          retObj.ClearLine.rowindex = line + addline;
        }
      }
    }
  }
  if (jo.Form[0].NewTable && jo.Form[0].NewTable.length > 0) {
    for (var i = 0; i < jo.Form[0].NewTable.length; i++) {
      var maintable = jo.Form[0].NewTable[i];
      var form_0 = parseInt(maintable.form);
      var table = parseInt(maintable.table);
      var self_0 = parseInt(maintable.self);
      var title_0 = maintable.title;
      var name_0 = maintable.name;
      var level = parseInt(maintable.level);
      var rowcount = 0;
      var oneline = parseInt(maintable.oneline);
      var ishtml = parseInt(maintable.ishtml);
      var isquery = parseInt(maintable.query);
      that.AddTable(form_0, table, title_0, name_0, level, self_0, ishtml, oneline, isquery);
      var gform = that.GetJsTableObject(table);
      if (maintable.NewColumn && maintable.NewColumn.length > 0) {
        for (var j = 0; j < maintable.NewColumn.length; j++) {
          var zoomname = maintable.NewColumn[j].zoomname;
          var field = parseInt(maintable.NewColumn[j].field);
          var decimal = parseInt(maintable.NewColumn[j].decimal);
          var width_0 = parseInt(maintable.NewColumn[j].width);
          var zoom = parseInt(maintable.NewColumn[j].zoom);
          var rowcount = parseInt(maintable.NewColumn[j].height);
          var zoomstr = (zt = ($clinit_ZoomTypes() , dynamicCast($get_1((!mappings_3 && !mappings_3 && (mappings_3 = new HashMap) , mappings_3), valueOf(zoom)), 18)) , zt.name_0 != null?zt.name_0:'' + zt.ordinal);
          var type_0 = parseInt(maintable.NewColumn[j].type);
          var bool = parseInt(maintable.NewColumn[j].bool);
          var typestr = bool == 1?'bool':(ct = ($clinit_ColumnTypes() , dynamicCast($get_1((!mappings && !mappings && (mappings = new HashMap) , mappings), valueOf(type_0)), 16)) , ct.inputType);
          var format = (ct_0 = ($clinit_ColumnTypes() , dynamicCast($get_1((!mappings && !mappings && (mappings = new HashMap) , mappings), valueOf(type_0)), 16)) , $getFormat(ct_0));
          parseInt(maintable.NewColumn[j].height) > rowcount && (rowcount = parseInt(maintable.NewColumn[j].height));
          var attachment = parseInt(maintable.NewColumn[j].attachment);
          var title_0 = maintable.NewColumn[j].title;
          that.AddColumn(self_0, zoomname, typestr, width_0, field);
          if (gform != null) {
            gform.columns[zoomname] = {};
            gform.columns[zoomname].field = field;
            gform.columns[zoomname].zoom = zoomstr;
            gform.columns[zoomname].type = typestr;
            gform.columns[zoomname].decimal = decimal;
            gform.columns[zoomname].maxLength = width_0;
            gform.columns[zoomname].format = format;
            gform.columns[zoomname].mandatory = maintable.NewColumn[j].mandatory;
            gform.columns[zoomname].readonly = maintable.NewColumn[j].readonly;
            gform.columns[zoomname].attachment = attachment;
            gform.columns[zoomname].title = title_0;
          }
        }
      }
      if (maintable.SubForm && maintable.SubForm.length > 0) {
        for (j = 0; j < maintable.SubForm.length; j++) {
          that.AddSubForm(self_0, maintable.SubForm[j].ename, maintable.SubForm[j].exec, maintable.SubForm[j].form, maintable.SubForm[j].self, maintable.SubForm[j].table, maintable.SubForm[j].title);
        }
      }
      if (maintable.Activation && maintable.Activation.length > 0) {
        for (j = 0; j < maintable.Activation.length; j++) {
          that.AddActivation(self_0, maintable.Activation[j].ename, maintable.Activation[j].exec, maintable.Activation[j].form, maintable.Activation[j].table, maintable.Activation[j].title, maintable.Activation[j].background, maintable.Activation[j].confirm, maintable.Activation[j].etype, maintable.Activation[j].type);
        }
      }
      that.SetTableRowCount(table, rowcount);
    }
  }
  if (jo.Form[0].Position && jo.Form[0].Position.length > 0) {
    if (jo.Form[0].Position[0].TableLines && jo.Form[0].Position[0].TableLines.length > 0) {
      var tableLines = jo.Form[0].Position[0].TableLines;
      for (i = 0; i < tableLines.length; i++) {
        that.SetTableLines(parseInt(tableLines[i].table), parseInt(tableLines[i].lines), parseInt(tableLines[i].line), parseInt(tableLines[i].curline));
      }
    }
    that.SetPosition(jo.Form[0].Position[0].session, jo.Form[0].Position[0].table, jo.Form[0].Position[0].field, jo.Form[0].Position[0].line, jo.Form[0].Position[0].lines, jo.Form[0].Position[0].curline, jo.Form[0].Position[0].changed, jo.Form[0].Position[0].isappend);
    if (operation == 'FormKey_Del' && jo.Form[0].Position[0].isappend == 1) {
      var table = jo.Form[0].Position[0].table;
      var gform = that.GetJsTableObject(table);
      if (gform) {
        var addline = that.getRowOffset(table);
        retObj.ClearLine = {};
        retObj.ClearLine.rowindex = jo.Form[0].Position[0].line + addline;
      }
    }
  }
  if (jo.Form[0].RT && jo.Form[0].RT.length > 0) {
    for (i = 0; i < jo.Form[0].RT.length; i++) {
      var rt = jo.Form[0].RT[i].FV;
      var tabId = [];
      var colIdx = [];
      var line = [];
      var value_0 = [];
      ParseRT(rt, tabId, colIdx, line, value_0);
      !global_forms_rows[tabId[0]] && (global_forms_rows[tabId[0]] = []);
      !global_forms_rows[tabId[0]][line[0]] && (global_forms_rows[tabId[0]][line[0]] = []);
      global_forms_rows[tabId[0]][line[0]][colIdx[0]] = value_0[0];
      if (operation == 'FormKey_Return' || operation == 'FormWarning' || operation == 'FormKey_Tab' || operation == 'FormKey_SaveRow' || operation == 'FormKey_Undo' || operation == 'FormKey_Del' || operation == 'FormActivate' || operation == 'FormAutomaticActivate') {
        var gform = that.GetJsTableObject(tabId[0]);
        if (gform != null) {
          var colName = that.getColNameById(tabId[0], colIdx[0]);
          if (colName != null && colName.length > 0 && gform != null && gform.columns[colName] != null) {
            !retObj.ReplaceText && (retObj.ReplaceText = {});
            !retObj.ReplaceText[gform.name] && (retObj.ReplaceText[gform.name] = {});
            var addline = that.getRowOffset(tabId[0]);
            !retObj.ReplaceText[gform.name][line[0] + addline] && (retObj.ReplaceText[gform.name][line[0] + addline] = {});
            gform.columns[colName].type == 'date' && (value_0[0] = DateToISO(value_0[0]));
            retObj.ReplaceText[gform.name][line[0] + addline][colName] = value_0[0];
          }
        }
      }
    }
  }
  if (jo.Form[0].ReplaceTextHtml && jo.Form[0].ReplaceTextHtml.length > 0) {
    var rth = jo.Form[0].ReplaceTextHtml[0];
    that.SetTableHtml(rth.table, rth.edit, rth.tsline, rth.tstext, rth.text);
    var gform = that.GetJsTableObject(rth.table);
    gform && gform != null && (gform.ishtmleditable = rth.edit);
    for (var k = 0; k < 2; k++) {
      var signature = k == 0?jo.Form[0].ReplaceTextHtml[0].Signature:jo.Form[0].ReplaceTextHtml[0].SignatureEng;
      if (signature && signature.length > 0) {
        var s = signature[0];
        that.SetTableSignature(rth.table, k, s.date, s.name, s.hr, s.begin, s.position, s.email, s.phone, s.message, s.fontsize, s.cellphone, s.branch, s.dept, s.company);
      }
    }
  }
  jo.Form[0].Position && jo.Form[0].Position.length > 0 && that.SetCurFieldValue();
  jo.Form[0].fatalerror == 1 && (retObj.fatalerror = 1);
  if (jo.Form[0].Error && jo.Form[0].Error.length > 0) {
    var msg = '';
    var err = jo.Form[0].Error[0];
    err.HyperLinkedText != null && err.HyperLinkedText.length > 0 && (msg = err.HyperLinkedText[0].text);
    msg == '' && (msg = err.message);
    retObj.Error = {};
    retObj.Error.message = msg;
    jo.Form[0].Error[0].messagetype && (retObj.Error.messagetype = jo.Form[0].Error[0].messagetype);
  }
  if (jo.Form[0].Warning && jo.Form[0].Warning.length > 0) {
    var msg = '';
    var wrn = jo.Form[0].Warning[0];
    wrn.HyperLinkedText != null && wrn.HyperLinkedText.length > 0 && (msg = wrn.HyperLinkedText[0].text);
    msg == '' && (msg = wrn.message);
    var readWrite = 0;
    jo.Form[0].Warning[0].messagetype && jo.Form[0].Warning[0].messagetype == 'information' && that.IsHtmlForm(jo.Form[0].Position[0].table) && (readWrite = 1);
    that.SetWarningData(wrn.warningsql, parseInt(wrn.warningvalue), parseInt(wrn.warningline), parseInt(wrn.warningkey), parseInt(wrn.warningstep), readWrite);
    retObj.Warning = {};
    retObj.Warning.message = msg;
    jo.Form[0].Warning[0].messagetype && (readWrite?(retObj.Warning.messagetype = 'readWrite'):(retObj.Warning.messagetype = jo.Form[0].Warning[0].messagetype));
  }
  if (jo.Form[0].Choose && jo.Form[0].Choose.length > 0) {
    var coltype = that.getColTypeById(jo.Form[0].Position[0].table, jo.Form[0].Position[0].field);
    if (coltype == 'date') {
      var chooseobj = jo.Form[0].Choose[0];
      if (chooseobj && chooseobj.ChooseLine && chooseobj.ChooseLine.length > 0) {
        for (var k = 0; k < chooseobj.ChooseLine.length; k++) {
          if (chooseobj.ChooseLine[k].retval && chooseobj.ChooseLine[k].retval.length > 0) {
            var iso = DateToISO(chooseobj.ChooseLine[k].retval);
            chooseobj.ChooseLine[k].retval = iso;
          }
        }
      }
    }
    retObj.Choose = jo.Form[0].Choose.length > 0?jo.Form[0].Choose[0]:null;
  }
  if (jo.Form[0].Search && jo.Form[0].Search.length > 0) {
    var coltype = that.getColTypeById(jo.Form[0].Position[0].table, jo.Form[0].Position[0].field);
    if (coltype == 'date') {
      var searchobj = jo.Form[0].Search[0];
      if (searchobj && searchobj.SearchLine && searchobj.SearchLine.length > 0) {
        for (var k = 0; k < searchobj.SearchLine.length; k++) {
          if (searchobj.SearchLine[k].retval && searchobj.SearchLine[k].retval.length > 0) {
            var iso = DateToISO(searchobj.SearchLine[k].retval);
            searchobj.SearchLine[k].retval = iso;
          }
        }
      }
    }
    retObj.Search = jo.Form[0].Search.length > 0?jo.Form[0].Search[0]:null;
  }
  if (jo.Form[0].Activate && jo.Form[0].Activate.length > 0) {
    retObj.ActivationLink = {};
    retObj.ActivationLink.table = jo.Form[0].Activate[0].table;
    retObj.ActivationLink.link = jo.Form[0].Activate[0].link;
    retObj.ActivationLink.linkid = jo.Form[0].Activate[0].linkid;
  }
  if (jo.Form[0].UploadFile && jo.Form[0].UploadFile.length > 0) {
    retObj.UploadFile = {};
    retObj.UploadFile.file = jo.Form[0].UploadFile[0].file;
  }
}

function ParseRT(rt, tabId, colIdx, line, value_0){
  var i, index_0, len, neg;
  index_0 = 0;
  tabId[0] = colIdx[0] = line[0] = 0;
  neg = false;
  for (i = 0 , len = rt.length; index_0 < 6 && i < len; i++) {
    switch (rt.charCodeAt(i)) {
      case 9:
        if (neg) {
          switch (index_0) {
            case 0:
              tabId[0] = -tabId[0];
              break;
            case 1:
              colIdx[0] = -colIdx[0];
              break;
            case 2:
              line[0] = -line[0];
          }
        }

        ++index_0;
        neg = false;
        break;
      case 45:
        neg = true;
        index_0 == 5 && i + 1 == len && (value_0[0] = '-');
        break;
      default:switch (index_0) {
          case 0:
            tabId[0] = tabId[0] * 10 + (rt.charCodeAt(i) - 48);
            break;
          case 1:
            colIdx[0] = colIdx[0] * 10 + (rt.charCodeAt(i) - 48);
            break;
          case 2:
            line[0] = line[0] * 10 + (rt.charCodeAt(i) - 48);
            break;
          case 5:
            value_0[0] = neg?'-' + __substr(rt, i, rt.length - i):__substr(rt, i, rt.length - i);
            ++index_0;
        }

    }
  }
}

function PrepareRetObj(retObj, progress, isLast, fileName){
  retObj.progress = progress;
  retObj.isLast = isLast;
  isLast && (retObj.file = fileName);
}

function ReadFile(that, file, onSuccess, onError){
  var reader = new FileReader;
  reader.onload = function(event_0){
    var res = event_0.target.result;
    that.UploadFile_0(0, 'c:/' + file.name, res, onSuccess, onError);
  }
  ;
  reader.readAsDataURL(file);
}

defineClass(121, 1, {}, Form_1);
_.ActivateEnd = function ActivateEnd(onSuccess, onError, executeNow){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In ActivateEnd: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , ActivateEnd_0), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [onSuccess, onError]))))
    return;
  $Activate(this, false, onSuccess, onError, null, null, null);
}
;
_.ActivateStart = function ActivateStart(onSuccess, onError, ename, type_0, onProgress, executeNow){
  $ActivateStart(this, onSuccess, onError, ename, type_0, onProgress, executeNow);
}
;
_.AddActivation = function AddActivation(tabself, ename, exec_0, form_0, table, title_0, background, confirm_0, etype, type_0){
  var ft, da;
  ft = dynamicCast($get_1(this.FormTables, valueOf(tabself)), 21);
  !!ft && (da = new DirectAct(($clinit_EntityTypes() , dynamicCast($get_1((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(etype)), 11) , dynamicCast($get_1((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(type_0)), 11))) , $putStringValue(ft.Activations, ename + '.' + charToString(getEntChar(dynamicCast($get_1((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(etype)), 11))), da) , $AddActivationJS(ft.jsTableObject, ename, title_0, getEntChar(dynamicCast($get_1((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(etype)), 11)), background, confirm_0) , undefined);
}
;
_.AddColumn = function AddColumn(form_0, name_0, type_0, width_0, field){
  var ft, fc;
  ft = dynamicCast($get_1(this.FormTables, valueOf(form_0)), 21);
  !!ft && (fc = new FormColumn(name_0, type_0, width_0, field) , $putStringValue(ft.FormColumns, name_0, fc) , $put_0(ft.FormColumnsI, valueOf(field), fc) , undefined);
}
;
_.AddSubForm = function AddSubForm(tabself, ename, exec_0, form_0, self_0, table, title_0){
  var ft, sb;
  ft = dynamicCast($get_1(this.FormTables, valueOf(tabself)), 21);
  !!ft && (sb = new SubForm(self_0) , $putStringValue(ft.SubForms, ename, sb) , $AddSubFormJS(ft.jsTableObject, ename, title_0) , undefined);
}
;
_.AddTable = function AddTable(form_0, table, title_0, name_0, level, self_0, ishtml, oneline, isquery){
  var ft;
  ft = new FormTable(this, table, title_0, name_0, level, ishtml, oneline, isquery);
  $put_0(this.FormTables, valueOf(self_0), ft);
  $put_0(this.ActiveTables, valueOf(table), ft);
}
;
_.AddText = function AddText(text_0, addFlag, commentFlag, lang2Flag, onSuccess, onError, executeNow){
  $AddText(this, text_0, addFlag, commentFlag, lang2Flag, onSuccess, onError, executeNow);
}
;
_.ClearRows = function ClearRows(onSuccess, onError, executeNow){
  $ClearRows(this, onSuccess, onError, executeNow);
}
;
_.ClearSearchFilter = function ClearSearchFilter(onSuccess, onError, executeNow){
  $ClearSearchFilter(this, onSuccess, onError, executeNow);
}
;
_.DelRow = function DelRow(onSuccess, onError, executeNow){
  $DelRow(this, onSuccess, onError, executeNow);
}
;
_.EndCurrentForm = function EndCurrentForm(onSuccess, onError, executeNow){
  $EndCurrentForm(this, onSuccess, onError, executeNow);
}
;
_.ExecuteNextRequest = function ExecuteNextRequest(){
  $ExecuteNextRequest(this.RequestsQueue);
}
;
_.FormChoose = function FormChoose(fieldName, fieldValue, onSuccess, onError, executeNow){
  $FormChoose(this, fieldName, fieldValue, onSuccess, onError, executeNow);
}
;
_.FormFieldUpdate = function FormFieldUpdate(fieldName, value_0, onSuccess, onError, executeNow){
  $FormFieldUpdate(this, fieldName, value_0, onSuccess, onError, executeNow);
}
;
_.FormSearchAction = function FormSearchAction(action, searchText, onSuccess, onError, executeNow){
  $FormSearchAction(this, action, searchText, onSuccess, onError, executeNow);
}
;
_.FormWarning = function FormWarning(ok, executeNow){
  $FormWarning(this, ok, executeNow);
}
;
_.GetFileUrl = function GetFileUrl(file){
  return $clinit_PriCommon() , $startsWith($replace(file.toLowerCase(), 92, 47), '../../system/mail')?SystemMailDir + '/' + $replace(__substr(file, 18, file.length - 18), 92, 47):$startsWith($replace(file.toLowerCase(), 92, 47), '../../system/images')?SystemImagesDir + '/' + $replace(__substr(file, 20, file.length - 20), 92, 47):$startsWith(file.toLowerCase(), 'file:///')?file.substr(0, 0) + __substr(file, 8, file.length - 8):file;
}
;
_.GetJsTableObject = function GetJsTableObject(table){
  var ft;
  ft = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  if (ft)
    return ft.jsTableObject;
  return null;
}
;
_.GetRows = function GetRows(fromRow, onSuccess, onError, executeNow){
  $GetRows(this, fromRow, onSuccess, onError, executeNow);
}
;
_.GotoSubForm = function GotoSubForm(formName, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError, executeNow){
  $GotoSubForm(this, formName, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError, executeNow);
}
;
_.HandleError = function HandleError(){
  $HandleError(this.RequestsQueue);
}
;
_.IsAlive = function IsAlive(onSuccess, onError, executeNow){
  $IsAlive(this, onSuccess, onError, executeNow);
}
;
_.IsHtmlForm = function IsHtmlForm(table){
  var tab;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  if (!!tab && tab.ishtml_0 == 1)
    return true;
  return false;
}
;
_.NewRow_0 = function NewRow(onSuccess, onError, executeNow){
  $NewRow(this, onSuccess, onError, executeNow);
}
;
_.SaveCurrentRow = function SaveCurrentRow(exit, onSuccess, onError, executeNow){
  $SaveCurrentRow(this, exit, onSuccess, onError, executeNow);
}
;
_.ServerTripCompleted = function ServerTripCompleted(sender, e){
  this.isOnServer = false;
}
;
_.SetActiveRow = function SetActiveRow(row, onSuccess, onError, executeNow){
  $SetActiveRow(this, row, onSuccess, onError, executeNow);
}
;
_.SetCurFieldValue = function SetCurFieldValue(){
  $SetCurFieldValue(this);
}
;
_.SetIsGoneToServer = function SetIsGoneToServer(userState){
  if (this.isOnServer)
    return false;
  this.isOnServer = true;
  return true;
}
;
_.SetPosition = function SetPosition(session, table, field, line, lines, curline, changed, isappend){
  var tab;
  this.position_0.table_0 = table;
  this.position_0.field_0 = field;
  this.position_0.line_0 = line;
  this.position_0.changed_0 = changed;
  this.position_0.isappend_0 = isappend;
  this.privateSession = session;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  if (tab) {
    this.curTab = tab;
    $SetCurRowInData(tab, this.position_0.line_0);
  }
}
;
_.SetSearchFilter = function SetSearchFilter(filter, onSuccess, onError, executeNow){
  $SetSearchFilter(this, filter, onSuccess, onError, executeNow);
}
;
_.SetSimpleSearchFilter = function SetSimpleSearchFilter(filter, onSuccess, onError, executeNow){
  $SetSimpleSearchFilter(this, filter, onSuccess, onError, executeNow);
}
;
_.SetTableHtml = function SetTableHtml(table, edit, tsline, tstext, url_0){
  var ft;
  ft = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  !!ft && (ft.isEdit = edit , ft.tsline_0 = tsline , ft.tstext_0 = tstext , ft.htmltext = url_0);
}
;
_.SetTableLines = function SetTableLines(table, lines, line, curline){
  var ft;
  ft = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  !!ft && (ft.lines_0 = lines , ft.line_0 = line);
}
;
_.SetTableRowCount = function SetTableRowCount(table, rowcount){
  var ft;
  ft = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  !!ft && (ft.rowcount = rowcount);
}
;
_.SetTableSignature = function SetTableSignature(table, eng, date, name_0, hr, begin, position, email, phone, message, fontsize, cellphone, branch, dept, company){
  var ft;
  ft = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  !!ft && (eng == 1?(ft.EngSignature = new FormTable$Signature(date, name_0, hr, begin, position, email, phone, message, cellphone, branch, dept, company)):(ft.HebSignature = new FormTable$Signature(date, name_0, hr, begin, position, email, phone, message, cellphone, branch, dept, company)));
}
;
_.SetWarningData = function SetWarningData(wsql, wval, wline, wkey, wstep, readWrite){
  $SetData(this.warningData, wsql, fromInt(wval), fromInt(wline), fromInt(wkey), fromInt(wstep), readWrite);
}
;
_.Undo = function Undo(onSuccess, onError, executeNow){
  $Undo(this, onSuccess, onError, executeNow);
}
;
_.UpdateStarted = function UpdateStarted(){
  this.started == 0?(this.started = 1):this.started == 1 && (this.started = 2);
}
;
_.UploadDataUrl = function UploadDataUrl(dataUrl, type_0, onSuccess, onError, executeNow){
  var that;
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'In UploadFile: executeNow=' + executeNow);
  if (executeNow == 0 && !$CanExecuteNow(this.RequestsQueue, new FormAPIRequest(($clinit_FormAPIRequest$RequestTypes() , UploadFile_1), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [dataUrl, type_0, onSuccess, onError]))))
    return;
  if (dataUrl == '') {
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, Upload data is empty (error)');
    InvokeCallback(this, null, null, 'empty data.', 'exception', onSuccess, onError);
    return;
  }
  that = this;
  $FormSearchSetDirtyMobAsync($GetConnection(this), ($InitDummyFormState(this) , this.dummyFormState), new Form$6($GetConnection(this), that, type_0, dataUrl, onSuccess, onError));
}
;
_.UploadFile_0 = function UploadFile(uploadFileSection, fileName, fileContents, onSuccess, onError, userState){
  $UploadFile(this, uploadFileSection, fileName, fileContents, onSuccess, onError, userState);
}
;
_.UploadFile_1 = function UploadFile_0(file, onSuccess, onError, executeNow){
  $UploadFile_0(this, file, onSuccess, onError, executeNow);
}
;
_.WaitForWarningApprove = function WaitForWarningApprove(){
  this.RequestsQueue.isWaitingForWarningApprove = true;
}
;
_.getColNameById = function getColNameById(table, colId){
  var col, ret, tab;
  ret = null;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  if (tab) {
    col = dynamicCast($get_1(tab.FormColumnsI, valueOf(colId)), 44);
    !!col && (ret = col.zoomname_0);
  }
  return ret;
}
;
_.getColTypeById = function getColTypeById(table, colId){
  var col, ret, tab;
  ret = null;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  if (tab) {
    col = dynamicCast($get_1(tab.FormColumnsI, valueOf(colId)), 44);
    !!col && (ret = col.type_0);
  }
  return ret;
}
;
_.getCurrentTable = function getCurrentTable(){
  return this.curTab?this.curTab.table_0:0;
}
;
_.getDname = function getDname(){
  return this.dname;
}
;
_.getIsAppend = function getIsAppend(){
  return this.position_0.isappend_0;
}
;
_.getRowOffset = function getRowOffset(table){
  var offset, tab;
  offset = 0;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  !!tab && (offset = tab.line_0 - 1);
  return offset;
}
;
_.getTableLines = function getTableLines(table){
  var lines, tab;
  lines = 0;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  !!tab && (lines = tab.lines_0);
  return lines;
}
;
_.getTableMessageFunc = function getTableMessageFunc(){
  if (!this.curTab)
    return null;
  return this.curTab.onShowMessage;
}
;
_.getTableRowCount = function getTableRowCount(table){
  var rowcount, tab;
  rowcount = 0;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 21);
  !!tab && (rowcount = tab.rowcount);
  return rowcount;
}
;
_.getTableUpdateFieldsFunc = function getTableUpdateFieldsFunc(){
  if (!this.curTab)
    return null;
  return this.curTab.updateFieldsFunc;
}
;
_.con = null;
_.dname = null;
_.fromStartForm = 0;
_.isCancelFileUpload = false;
_.isOnServer = false;
_.onError = null;
_.onShowMessage = null;
_.onSuccess = null;
_.started = 0;
_.updateFieldsFunc = null;
var Lcom_priority_app_form_Form_2_classLit = createForClass('com.priority.app.form', 'Form', 121);
function Form$1(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(124, 12, {}, Form$1);
_.OnPriError = function OnPriError_0(error, isOnServer){
  InvokeFormStartCallback(null, 0, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_0(response){
  var e, ftable, jo, retObj, table;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormStart');
    table = this.this$01.curTab?this.this$01.curTab.table_0:0;
    InvokeFormStartCallback(this.val$thisForm3, table, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      ftable = this.this$01.curTab?this.this$01.curTab.table_0:0;
      InvokeFormStartCallback(this.val$thisForm3, ftable, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$1_2_classLit = createForClass('com.priority.app.form', 'Form/1', 124);
function Form$10($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(133, 12, {}, Form$10);
_.OnPriError = function OnPriError_1(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormExitForm (error)');
  InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_1(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormExitForm');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormExitForm (success)');
    InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormExitForm (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$10_2_classLit = createForClass('com.priority.app.form', 'Form/10', 133);
function $OnPriError(this$static, error){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormExitForm (error)');
  InvokeCallback(this$static.val$thisForm3, null, null, error, 'exception', this$static.val$onSuccess4, this$static.val$onError5);
}

function Form$11($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(134, 12, {}, Form$11);
_.OnPriError = function OnPriError_2(error, isOnServer){
  $OnPriError(this, error);
}
;
_.OnPriResponse = function OnPriResponse_2(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormExitForm');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormExitForm (success)');
    InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormExitForm (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$11_2_classLit = createForClass('com.priority.app.form', 'Form/11', 134);
function $OnPriError_0(this$static, error){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormJumpLine (error)');
  InvokeCallback(this$static.val$thisForm3, null, null, error, 'exception', this$static.val$onSuccess6, this$static.val$onError7);
}

function Form$12($anonymous0, val$thisForm, val$getData, val$row, val$onSuccess, val$onError){
  this.val$thisForm3 = val$thisForm;
  this.val$getData4 = val$getData;
  this.val$row5 = val$row;
  this.val$onSuccess6 = val$onSuccess;
  this.val$onError7 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(135, 12, {}, Form$12);
_.OnPriError = function OnPriError_3(error, isOnServer){
  $OnPriError_0(this, error);
}
;
_.OnPriResponse = function OnPriResponse_3(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormJumpLine');
    if (this.val$getData4) {
      retObj = new JSONObject;
      $GetRowsData(this.val$thisForm3.curTab.table_0, this.val$row5, retObj, this.val$thisForm3);
    }
     else {
      $AddCurrentRow(this.val$row5, retObj);
    }
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormJumpLine (success)');
    InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess6, this.val$onError7);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormJumpLine (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess6, this.val$onError7);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.val$getData4 = false;
_.val$row5 = 0;
var Lcom_priority_app_form_Form$12_2_classLit = createForClass('com.priority.app.form', 'Form/12', 135);
function $OnPriError_1(this$static, error){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormSubForm (error)');
  InvokeSubFormStartCallback(null, 0, null, null, error, 'exception', this$static.val$onSuccess6, this$static.val$onError7);
}

function Form$13(this$0, $anonymous0, val$thisForm, val$onMessageFunc, val$onUpdateFieldsFunc, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onMessageFunc4 = val$onMessageFunc;
  this.val$onUpdateFieldsFunc5 = val$onUpdateFieldsFunc;
  this.val$onSuccess6 = val$onSuccess;
  this.val$onError7 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(136, 12, {}, Form$13);
_.OnPriError = function OnPriError_4(error, isOnServer){
  $OnPriError_1(this, error);
}
;
_.OnPriResponse = function OnPriResponse_4(response){
  var e, jo, retObj, table;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormSubForm');
    table = this.this$01.curTab?this.this$01.curTab.table_0:0;
    if (this.this$01.curTab) {
      this.this$01.curTab.onShowMessage = this.val$onMessageFunc4;
      this.this$01.curTab.updateFieldsFunc = this.val$onUpdateFieldsFunc5;
    }
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormSubForm (success)');
    InvokeSubFormStartCallback(this.val$thisForm3, table, jo, retObj, null, null, this.val$onSuccess6, this.val$onError7);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormSubForm (error)');
      InvokeSubFormStartCallback(null, 0, null, null, e.getMessage(), 'exception', this.val$onSuccess6, this.val$onError7);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$13_2_classLit = createForClass('com.priority.app.form', 'Form/13', 136);
function Form$14($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(137, 12, {}, Form$14);
_.OnPriError = function OnPriError_5(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormKey_SaveRow (error)');
  InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_5(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormKey_SaveRow');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormKey_SaveRow (success)');
    InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormKey_SaveRow (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$14_2_classLit = createForClass('com.priority.app.form', 'Form/14', 137);
function Form$15($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(138, 12, {}, Form$15);
_.OnPriError = function OnPriError_6(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, IsAlive (error)');
  InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_6(response){
  var e, jo;
  try {
    jo = safeEval(response);
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, IsAlive');
    InvokeIsAliveCallback(this.val$thisForm3, jo, this.val$onSuccess4);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, IsAlive (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$15_2_classLit = createForClass('com.priority.app.form', 'Form/15', 138);
function Form$16(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(139, 12, {}, Form$16);
_.OnPriError = function OnPriError_7(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormHtml (error)');
  InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_7(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormHtml');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormHtml (success)');
    $AddHtmlToResponseObject(this.this$01, retObj, false);
    InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormSearch (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$16_2_classLit = createForClass('com.priority.app.form', 'Form/16', 139);
function $OnPriError_2(this$static){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormSearch (error)');
  InvokeFormSearchActionCallback(this$static.val$thisForm3, null, null, 'exception', this$static.val$onSuccess4, this$static.val$onError5);
}

function Form$17($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(140, 12, {}, Form$17);
_.OnPriError = function OnPriError_8(error, isOnServer){
  $OnPriError_2(this);
}
;
_.OnPriResponse = function OnPriResponse_8(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormSearch');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormSearch (success)');
    InvokeFormSearchActionCallback(this.val$thisForm3, jo, retObj, null, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormSearch (error)');
      InvokeFormSearchActionCallback(this.val$thisForm3, null, null, (e.getMessage() , 'exception'), this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$17_2_classLit = createForClass('com.priority.app.form', 'Form/17', 140);
function Form$18($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(141, 12, {}, Form$18);
_.OnPriError = function OnPriError_9(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormChoose (error)');
  InvokeFormChooseCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_9(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormKey_Normal');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormChoose (success)');
    InvokeFormChooseCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormChoose (error)');
      InvokeFormChooseCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$18_2_classLit = createForClass('com.priority.app.form', 'Form/18', 141);
function $OnPriError_3(this$static, error){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormWarning (error)');
  this$static.val$thisForm3.fromStartForm == 1?InvokeSubFormStartCallback(this$static.val$thisForm3, 0, null, null, error, 'exception', this$static.val$onSuccess4, this$static.val$onError5):InvokeCallback(this$static.val$thisForm3, null, null, error, 'exception', this$static.val$onSuccess4, this$static.val$onError5);
}

function Form$2(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(125, 12, {}, Form$2);
_.OnPriError = function OnPriError_10(error, isOnServer){
  $OnPriError_3(this, error);
}
;
_.OnPriResponse = function OnPriResponse_10(response){
  var e, jo, retObj, table;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormWarning');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormWarning (success)');
    if (this.val$thisForm3.fromStartForm == 1) {
      table = this.this$01.curTab?this.this$01.curTab.table_0:0;
      InvokeSubFormStartCallback(this.val$thisForm3, table, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
    }
     else {
      InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormWarning (error)');
      this.val$thisForm3.fromStartForm == 1?InvokeSubFormStartCallback(this.val$thisForm3, 0, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5):InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$2_2_classLit = createForClass('com.priority.app.form', 'Form/2', 125);
function $OnPriError_4(this$static, error){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormQueryDlgExecute (error)');
  InvokeCallback(this$static.val$thisForm3, null, null, error, 'exception', this$static.val$onSuccess4, this$static.val$onError5);
}

function Form$3(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError, val$fromRow){
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  this.val$fromRow6 = val$fromRow;
  WCFResponse.call(this, $anonymous0);
}

defineClass(126, 12, {}, Form$3);
_.OnPriError = function OnPriError_11(error, isOnServer){
  $OnPriError_4(this, error);
}
;
_.OnPriResponse = function OnPriResponse_11(response){
  var e, jo, retObj;
  try {
    $setAdd(this.val$thisForm3.curTab, true);
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormQueryDlgExecute');
    ContainsError(retObj)?InvokeCallback(this.val$thisForm3, jo, retObj, '', null, this.val$onSuccess4, this.val$onError5):$FormGoto(this.this$01, this.val$fromRow6, true, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormQueryDlgExecute (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.val$fromRow6 = 0;
var Lcom_priority_app_form_Form$3_2_classLit = createForClass('com.priority.app.form', 'Form/3', 126);
function Form$4($anonymous0, val$thisForm, val$key, val$onSuccess, val$onError){
  this.val$thisForm3 = val$thisForm;
  this.val$key4 = val$key;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(127, 12, {}, Form$4);
_.OnPriError = function OnPriError_12(error, isOnServer){
  Printlog('Before InvokeCallback, FormKey_' + $name(this.val$key4) + ' (error)');
  InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess5, this.val$onError6);
}
;
_.OnPriResponse = function OnPriResponse_12(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormKey_' + $name(this.val$key4));
    Printlog('Before InvokeCallback, FormKey_' + $name(this.val$key4) + ' (success)');
    InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      Printlog('Before InvokeCallback, FormKey_' + $name(this.val$key4) + ' (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess5, this.val$onError6);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$4_2_classLit = createForClass('com.priority.app.form', 'Form/4', 127);
function Form$5($anonymous0, val$that, val$file, val$onSuccess, val$onError){
  this.val$that3 = val$that;
  this.val$file4 = val$file;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(128, 12, {}, Form$5);
_.OnPriError = function OnPriError_13(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, UploadFile (error)');
  InvokeCallback(this.val$that3, null, null, error, 'exception', this.val$onSuccess5, this.val$onError6);
}
;
_.OnPriResponse = function OnPriResponse_13(response){
  var e;
  try {
    ReadFile(this.val$that3, this.val$file4, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, UploadFile (error)');
      InvokeCallback(this.val$that3, null, null, e.getMessage(), 'exception', this.val$onSuccess5, this.val$onError6);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$5_2_classLit = createForClass('com.priority.app.form', 'Form/5', 128);
function Form$6($anonymous0, val$that, val$type, val$dataUrl, val$onSuccess, val$onError){
  this.val$that3 = val$that;
  this.val$type4 = val$type;
  this.val$dataUrl5 = val$dataUrl;
  this.val$onSuccess6 = val$onSuccess;
  this.val$onError7 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(129, 12, {}, Form$6);
_.OnPriError = function OnPriError_14(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, UploadFile (error)');
  InvokeCallback(this.val$that3, null, null, error, 'exception', this.val$onSuccess6, this.val$onError7);
}
;
_.OnPriResponse = function OnPriResponse_14(response){
  var e;
  try {
    $UploadFile(this.val$that3, 0, '.' + this.val$type4, this.val$dataUrl5, this.val$onSuccess6, this.val$onError7, null);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, UploadFile (error)');
      InvokeCallback(this.val$that3, null, null, e.getMessage(), 'exception', this.val$onSuccess6, this.val$onError7);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$6_2_classLit = createForClass('com.priority.app.form', 'Form/6', 129);
function Form$7(this$0, $anonymous0, val$thisForm, val$fileName, val$userState, val$uploadFileSection, val$contents, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$fileName4 = val$fileName;
  this.val$userState5 = val$userState;
  this.val$uploadFileSection6 = val$uploadFileSection;
  this.val$contents7 = val$contents;
  this.val$onSuccess8 = val$onSuccess;
  this.val$onError9 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(130, 12, {}, Form$7);
_.OnPriError = function OnPriError_15(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormUploadFile (error)');
  InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess8, this.val$onError9);
}
;
_.OnPriResponse = function OnPriResponse_15(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormUploadFile');
    $Con_FormUploadFileCompleted(this.this$01, jo, retObj, this.val$fileName4, this.val$userState5, this.val$uploadFileSection6, false, this.val$contents7, this.val$onSuccess8, this.val$onError9);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormUploadFile (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess8, this.val$onError9);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.val$uploadFileSection6 = 0;
var Lcom_priority_app_form_Form$7_2_classLit = createForClass('com.priority.app.form', 'Form/7', 130);
function Form$8(this$0, $anonymous0, val$thisForm, val$fileName, val$userState, val$uploadFileSection, val$contents, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$fileName4 = val$fileName;
  this.val$userState5 = val$userState;
  this.val$uploadFileSection6 = val$uploadFileSection;
  this.val$contents7 = val$contents;
  this.val$onSuccess8 = val$onSuccess;
  this.val$onError9 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(131, 12, {}, Form$8);
_.OnPriError = function OnPriError_16(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormUploadFile2 (error)');
  InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess8, this.val$onError9);
}
;
_.OnPriResponse = function OnPriResponse_16(response){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormUploadFile');
    $Con_FormUploadFileCompleted(this.this$01, jo, retObj, this.val$fileName4, this.val$userState5, this.val$uploadFileSection6, true, this.val$contents7, this.val$onSuccess8, this.val$onError9);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      $clinit_PriCommon();
      isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormUploadFile2 (error)');
      InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess8, this.val$onError9);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.val$uploadFileSection6 = 0;
var Lcom_priority_app_form_Form$8_2_classLit = createForClass('com.priority.app.form', 'Form/8', 131);
function Form$9(this$0, $anonymous0, val$thisForm, val$start, val$ename, val$type, val$onProgress, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$start4 = val$start;
  this.val$ename5 = val$ename;
  this.val$type6 = val$type;
  this.val$onProgress7 = val$onProgress;
  this.val$onSuccess8 = val$onSuccess;
  this.val$onError9 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(132, 12, {}, Form$9);
_.OnPriError = function OnPriError_17(error, isOnServer){
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormActivate (error)');
  InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess8, this.val$onError9);
}
;
_.OnPriResponse = function OnPriResponse_17(response){
  var activationLink, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm3, 'FormActivate');
    $clinit_PriCommon();
    isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'Before InvokeCallback, FormActivate (success)');
    if (this.val$start4) {
      activationLink = retObj.ActivationLink;
      ProcStartActivate(this.val$ename5, this.val$type6, activationLink, this.val$onProgress7, this.this$01.dname, this.val$onSuccess8, this.val$onError9);
      $ExecuteNextRequest(this.this$01.RequestsQueue);
    }
     else {
      InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess8, this.val$onError9);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 6))
      throw unwrap_5($e0);
  }
}
;
_.val$start4 = false;
var Lcom_priority_app_form_Form$9_2_classLit = createForClass('com.priority.app.form', 'Form/9', 132);
function Form$Position(){
}

defineClass(122, 1, {}, Form$Position);
_.changed_0 = 0;
_.field_0 = 0;
_.isappend_0 = 0;
_.line_0 = 0;
_.table_0 = 0;
var Lcom_priority_app_form_Form$Position_2_classLit = createForClass('com.priority.app.form', 'Form/Position', 122);
function $SetData(this$static, wsql, wval, wline, wkey, wstep, readWrite){
  this$static.wsql = wsql;
  this$static.wval = wval;
  this$static.wline = wline;
  this$static.wkey = wkey;
  this$static.wstep = wstep;
  this$static.readWrite = readWrite;
}

function Form$WarningMessageData(){
}

defineClass(123, 1, {}, Form$WarningMessageData);
_.readWrite = 0;
_.wkey = {l:0, m:0, h:0};
_.wline = {l:0, m:0, h:0};
_.wstep = {l:0, m:0, h:0};
_.wval = {l:0, m:0, h:0};
var Lcom_priority_app_form_Form$WarningMessageData_2_classLit = createForClass('com.priority.app.form', 'Form/WarningMessageData', 123);
function FormStart(name_0, onShowMessageFunc, updateFieldsFunc, onSuccess, onError, autoRetrieveFirstRows, dname){
  var f;
  f = new Form_1;
  dname != null && dname.length > 0 && (f.dname = dname);
  f.onShowMessage = onShowMessageFunc;
  f.updateFieldsFunc = updateFieldsFunc;
  $clinit_FormManager();
  $putStringValue(FormsMap, name_0, f);
  $FormStartMobAsync($GetConnection(f), name_0, autoRetrieveFirstRows == 1, new Form$1(f, $GetConnection(f), f, onSuccess, onError));
}

function InvokeCallback(form_0, jo, retObj, errorMsg, errType, onSuccess, onError){
  if (jo == null || retObj == null) {
    onSrvError(form_0, onError, errorMsg, 0, errType);
    return;
  }
  retObj.fatalerror && retObj.fatalerror == 1?onSrvError(form_0, onError, retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, 1, errType):onSrvSuccess_0(form_0, retObj, onSuccess, onError, null, null, 0);
}

function InvokeError(form_0, onError, message, errType, fatal){
  onSrvError(form_0, onError, message, fatal, errType);
}

function InvokeErrorNow(form_0, onError, message, fatal, errType){
  sendMessage(form_0, onError, message, 'apiError', errType, fatal, 1, 1);
}

function InvokeFormChooseCallback(form_0, jo, retObj, error, errType, onSuccess, onError){
  if (jo == null || retObj == null) {
    onSrvError(form_0, onError, error, 0, errType);
    return;
  }
  if (retObj.fatalerror && retObj.fatalerror == 1)
    onSrvError(form_0, onError, retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, 1, errType);
  else {
    var type_0 = 'None';
    retObj.Search != null?(type_0 = 'Search'):retObj.Choose != null && (type_0 = 'Choose');
    onSrvSuccess_0(form_0, retObj, onSuccess, onError, type_0, null, 0);
  }
}

function InvokeFormSearchActionCallback(form_0, jo, retObj, errType, onSuccess, onError){
  if (jo == null || retObj == null) {
    onSrvError(form_0, onError, null, 0, errType);
    return;
  }
  retObj.fatalerror && retObj.fatalerror == 1?onSrvError(form_0, onError, retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, 1, errType):onSrvSuccess_0(form_0, retObj, onSuccess, onError, null, null, 0);
}

function InvokeFormStartCallback(form_0, table, jo, retObj, errorMsg, errType, onSuccess, onError){
  if (jo == null || retObj == null) {
    onSrvError(form_0, onError, errorMsg, 0, errType);
    return;
  }
  if (retObj.fatalerror && retObj.fatalerror == 1) {
    onSrvError(form_0, onError, retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, 1, errType);
  }
   else {
    var gform = form_0.GetJsTableObject(table);
    onSuccess(gform);
  }
}

function InvokeIsAliveCallback(form_0, jo, onSuccess){
  var isalive = 0;
  jo.Form && jo.Form.length > 0 && jo.Form[0] && jo.Form[0].isalive == 1 && (isalive = 1);
  onSuccess(isalive);
  form_0.ExecuteNextRequest();
}

function InvokeLoginError(error, onError, errType){
  var msg = {};
  msg.type = 'apiError';
  msg.code = errType;
  msg.message = error;
  msg.form = null;
  msg.fatal = false;
  onError(msg);
}

function InvokeSubFormStartCallback(form_0, table, jo, retObj, errorMsg, errType, onSuccess, onError){
  if (jo == null || retObj == null) {
    onSrvError(form_0, onError, errorMsg, 0, errType);
    return;
  }
  if (retObj.fatalerror && retObj.fatalerror == 1)
    onSrvError(form_0, onError, retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, 1, errType);
  else {
    var gform = form_0.GetJsTableObject(table);
    if (retObj.Warning || retObj.Error) {
      onSrvSuccess_0(form_0, retObj, onSuccess, onError, null, null, 1);
      retObj.Error && retObj.Error.messagetype == 'information' && onSrvSuccess(form_0, gform, onSuccess);
    }
     else 
      onSrvSuccess(form_0, gform, onSuccess);
  }
}

function InvokeSuccess(form_0, onSuccess){
  onSrvSuccess(form_0, null, onSuccess);
}

function Login_0(configuration, onSuccess, onError){
  var conf;
  conf = configuration;
  SetWCFServiceParams(conf.url + '/wcf/wcf/service.svc', conf.tabulaini, conf.language, conf.company, conf.appname);
  Login_1(conf.username, conf.password, conf.devicename, onSuccess, onError);
}

function Login_1(username, pwd, computerName, onSuccess, onError){
  Login = username;
  Pwd = pwd;
  ComputerName = computerName;
  ($clinit_PriCommon() , AppMain).con = null;
  $GeneralValidPasswordMobAsync($GetConnection_0(AppMain), Pwd, new FormAPI$1($GetConnection_0(AppMain), onSuccess, onError));
}

function createJsHelperFunc(){
  $wnd.GMTTime = function(dt){
    var mon = 1 + dt.getUTCMonth();
    mon < 10 && (mon = '0' + mon);
    var day = dt.getUTCDate();
    day < 10 && (day = '0' + day);
    var hours = dt.getUTCHours();
    hours < 10 && (hours = '0' + hours);
    var minutes = dt.getUTCMinutes();
    minutes < 10 && (minutes = '0' + minutes);
    var sec = dt.getUTCSeconds();
    sec < 10 && (sec = '0' + sec);
    var msec = dt.getUTCMilliseconds();
    msec < 10?(msec = '00' + msec):msec < 100 && (msec = '0' + msec);
    var year = dt.getUTCFullYear();
    year < 1900 && (year += 1900);
    return year + '-' + mon + '-' + day + 'T' + hours + ':' + minutes + ':' + sec + '.' + msec + 'Z';
  }
  ;
  $wnd.GMTDates = function(){
    var cr = new Date;
    var exp_0 = new Date(cr);
    exp_0.setMinutes(cr.getMinutes() + 6);
    return '<u:Created>' + $wnd.GMTTime(cr) + '<\/u:Created><u:Expires>' + $wnd.GMTTime(exp_0) + '<\/u:Expires>';
  }
  ;
}

function onSrvError(form_0, onError, message, fatal, errType){
  sendMessage(form_0, onError, message, 'apiError', errType, fatal, 1, 1);
  form_0.HandleError();
}

function onSrvSuccess(form_0, gform, onSuccess){
  onSuccess != null && (gform && gform != null?onSuccess(gform):onSuccess());
  form_0.ExecuteNextRequest();
}

function onSrvSuccess_0(form_0, resultObj, onSuccess, onError, par1, par2, fromStartForm){
  var responseVal = resultObj;
  var showMessage = form_0.onShowMessage;
  var updateFieldsFunc;
  form_0.onSuccess = onSuccess;
  form_0.onError = onError;
  form_0.fromStartForm = fromStartForm;
  var table = form_0.getCurrentTable();
  var gform = form_0.GetJsTableObject(table);
  var tableShowMessage = form_0.getTableMessageFunc();
  var tableUpdateFields = form_0.getTableUpdateFieldsFunc();
  tableUpdateFields != null?(updateFieldsFunc = tableUpdateFields):(updateFieldsFunc = form_0.updateFieldsFunc);
  if (resultObj == null) {
    onSuccess != null && onSuccess();
    form_0.ExecuteNextRequest();
    return;
  }
  if (resultObj.Error != null) {
    form_0.HandleError();
    sendMessage(form_0, onError, resultObj.Error.message, 'error', resultObj.Error.messagetype, 0, 1, 1);
    resultObj.ReplaceText != null && updateFieldsFunc != null && updateFieldsFunc(resultObj.ReplaceText, gform);
    return;
  }
   else if (resultObj.Warning != null) {
    form_0.WaitForWarningApprove();
    sendMessage(form_0, onError, resultObj.Warning.message, 'warning', resultObj.Warning.messagetype, 0, 1, 0);
    resultObj.ReplaceText != null && updateFieldsFunc != null && updateFieldsFunc(resultObj.ReplaceText, gform);
    return;
  }
   else if (resultObj.ReplaceText != null) {
    updateFieldsFunc != null && updateFieldsFunc(resultObj.ReplaceText, gform);
    delete responseVal.ReplaceText;
  }
   else 
    resultObj.RowsData != null?(responseVal = resultObj.RowsData):resultObj.Choose != null?(responseVal = resultObj.Choose):resultObj.Search != null && (responseVal = resultObj.Search);
  resultObj.ClearLine != null?(responseVal = resultObj.ClearLine):resultObj.NewRow != null && (responseVal = resultObj.NewRow);
  onSuccess != null && onSuccess(responseVal, par1, par2);
  form_0.ExecuteNextRequest();
}

function publishAPIfuncForm(){
  $wnd.formStart = function(formName, onShowMessge, afterMessageShownFunc, dname, autoRetrieveFirstRows, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      FormStart(formName, onShowMessge, afterMessageShownFunc, onSuccess_0, onError_0, autoRetrieveFirstRows, dname);
    else 
      return new Promise(function(onSuccess, onError){
        FormStart(formName, onShowMessge, afterMessageShownFunc, onSuccess, onError, autoRetrieveFirstRows, dname);
      }
      );
  }
  ;
}

function sendMessage(form_0, onError, message, type_0, iconType, fatal, invokeMessage, invokeError){
  var table = form_0.getCurrentTable();
  var gform = form_0.GetJsTableObject(table);
  var showMessage = form_0.onShowMessage;
  var tableShowMessage = form_0.getTableMessageFunc();
  var msg = {};
  msg.type = type_0;
  msg.code = iconType;
  msg.message = message;
  msg.form = gform;
  msg.fatal = fatal == 1;
  invokeMessage == 1 && (tableShowMessage != null?tableShowMessage(msg):showMessage != null && showMessage(msg));
  invokeError == 1 && onError(msg);
}

function FormAPI$1($anonymous0, val$onSuccess, val$onError){
  this.val$onSuccess2 = val$onSuccess;
  this.val$onError3 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(92, 12, {}, FormAPI$1);
_.OnPriError = function OnPriError_18(error, isOnServer){
  var response;
  response = "Can't connect to server.";
  error.indexOf('InvalidSecurityToken') != -1 && (response = 'Authorization failed. \nPlease check the username and password.');
  InvokeLoginError(response, this.val$onError3, 'loginFailed');
}
;
_.OnPriResponse = function OnPriResponse_18(response){
  var e, jo, ret, retStr, ret_0;
  try {
    jo = safeEval(response);
    retStr = initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 1, 4, 1);
    ret = (ret_0 = 0 , jo.General && jo.General.length > 0 && jo.General[0].ValidPassword && jo.General[0].ValidPassword.length > 0 && (ret_0 = jo.General[0].ValidPassword[0].valid) , jo.General && jo.General.length > 0 && jo.General[0].Message && jo.General[0].Message.length > 0?(retStr[0] = jo.General[0].Message[0].message):(retStr[0] = null) , jo.General && jo.General.length > 0 && jo.General[0].systemmail?(retStr[1] = jo.General[0].systemmail):(retStr[1] = null) , jo.General && jo.General.length > 0 && jo.General[0].systemimages?(retStr[2] = jo.General[0].systemimages):(retStr[2] = null) , ret_0);
    if (ret == 1) {
      retStr[1] != null && retStr[1].length > 0 && ($clinit_PriCommon() , SystemMailDir = retStr[1]);
      retStr[2] != null && retStr[2].length > 0 && ($clinit_PriCommon() , SystemImagesDir = retStr[2]);
      this.val$onSuccess2();
    }
     else {
      (retStr[0] == null || retStr[0].length <= 0) && (retStr[0] = "Can't connect to server.");
      InvokeLoginError(retStr[0], this.val$onError3, 'loginFailed');
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeLoginError(e.getMessage(), this.val$onError3, 'loginFailed');
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_FormAPI$1_2_classLit = createForClass('com.priority.app.form', 'FormAPI/1', 92);
function $CanExecuteNow(this$static, req){
  if (this$static.isExecutingNow && req.type_0 == ($clinit_FormAPIRequest$RequestTypes() , WarningApproved)) {
    if (this$static.isWaitingForWarningApprove) {
      this$static.isWaitingForWarningApprove = false;
      return true;
    }
    $addFirst(this$static.RequestsQueue, req);
    return false;
  }
  if (this$static.RequestsQueue.size_0 > 0 || this$static.isExecutingNow) {
    $offerLast(this$static.RequestsQueue, req);
    return false;
  }
  this$static.isExecutingNow = true;
  return true;
}

function $ExecuteNextRequest(this$static){
  var req;
  this$static.isExecutingNow = false;
  if (this$static.RequestsQueue.size_0 <= 0)
    return;
  req = dynamicCast($pollFirst(this$static.RequestsQueue), 13);
  Printlog('In ExecuteNextRequest: Executing:' + $toString_1(req.type_0));
  switch (req.type_0.ordinal) {
    case 0:
      $SetActiveRow(this$static.form_0, dynamicCast(req.params[0], 23).value_0, dynamicCastJso(req.params[1]), dynamicCastJso(req.params[2]), 1);
      break;
    case 1:
      $FormChoose(this$static.form_0, dynamicCastToString(req.params[0]), dynamicCastToString(req.params[1]), dynamicCastJso(req.params[2]), dynamicCastJso(req.params[3]), 1);
      break;
    case 2:
      $FormSearchAction(this$static.form_0, dynamicCast(req.params[0], 23).value_0, dynamicCastToString(req.params[1]), dynamicCastJso(req.params[2]), dynamicCastJso(req.params[3]), 1);
      break;
    case 3:
      $FormFieldUpdate(this$static.form_0, dynamicCastToString(req.params[0]), dynamicCastToString(req.params[1]), dynamicCastJso(req.params[2]), dynamicCastJso(req.params[3]), 1);
      break;
    case 4:
      $FormWarning(this$static.form_0, dynamicCast(req.params[0], 23).value_0, 1);
      break;
    case 5:
      $SaveCurrentRow(this$static.form_0, dynamicCast(req.params[0], 23).value_0, dynamicCastJso(req.params[1]), dynamicCastJso(req.params[2]), 1);
      break;
    case 6:
      $GotoSubForm(this$static.form_0, dynamicCastToString(req.params[0]), dynamicCastJso(req.params[1]), dynamicCastJso(req.params[2]), dynamicCastJso(req.params[3]), dynamicCastJso(req.params[4]), 1);
      break;
    case 7:
      $GetRows(this$static.form_0, dynamicCast(req.params[0], 23).value_0, dynamicCastJso(req.params[1]), dynamicCastJso(req.params[2]), 1);
      break;
    case 8:
      $NewRow(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), 1);
      break;
    case 9:
      $EndCurrentForm(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), 1);
      break;
    case 10:
      $Undo(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), 1);
      break;
    case 11:
      $DelRow(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), 1);
      break;
    case 12:
      $ClearRows(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), 1);
      break;
    case 13:
      $SetSearchFilter(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), dynamicCastJso(req.params[2]), 1);
      break;
    case 14:
      $SetSimpleSearchFilter(this$static.form_0, dynamicCastToString(req.params[0]), dynamicCastJso(req.params[1]), dynamicCastJso(req.params[2]), 1);
      break;
    case 15:
      $ClearSearchFilter(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), 1);
      break;
    case 16:
      $ActivateStart(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), dynamicCastToString(req.params[2]), dynamicCastToString(req.params[3]), dynamicCastJso(req.params[4]), 1);
      break;
    case 17:
      $ActivateStart(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), null, null, null, 1);
      break;
    case 18:
      $UploadFile_0(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), dynamicCastJso(req.params[2]), 1);
      break;
    case 21:
      $AddText(this$static.form_0, dynamicCastToString(req.params[0]), dynamicCast(req.params[1], 23).value_0, dynamicCast(req.params[2], 23).value_0, dynamicCast(req.params[3], 23).value_0, dynamicCastJso(req.params[4]), dynamicCastJso(req.params[5]), 1);
    case 22:
      $IsAlive(this$static.form_0, dynamicCastJso(req.params[0]), dynamicCastJso(req.params[1]), 1);
  }
}

function $HandleError(this$static){
  var onError, req;
  this$static.isExecutingNow = false;
  while (this$static.RequestsQueue.size_0 > 0) {
    req = dynamicCast($pollFirst(this$static.RequestsQueue), 13);
    onError = null;
    Printlog('In HandleError: Sending error to request:' + $toString_1(req.type_0));
    switch (req.type_0.ordinal) {
      case 5:
      case 7:
      case 13:
      case 14:
      case 18:
      case 0:
        onError = dynamicCastJso(req.params[2]);
        break;
      case 2:
      case 3:
      case 1:
        onError = dynamicCastJso(req.params[3]);
        break;
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 15:
      case 16:
      case 17:
      case 4:
        onError = dynamicCastJso(req.params[1]);
        break;
      case 21:
      case 6:
        onError = dynamicCastJso(req.params[4]);
        break;
      case 22:
        onError = dynamicCastJso(req.params[1]);
    }
    !!onError && InvokeErrorNow(this$static.form_0, onError, 'A previous request has failed, causing all subsequent requests to fail', 0, 'failedPreviousRequest');
  }
}

function FormAPIQueue(form_0){
  this.RequestsQueue = new LinkedList;
  this.form_0 = form_0;
}

defineClass(152, 1, {}, FormAPIQueue);
_.isExecutingNow = false;
_.isWaitingForWarningApprove = false;
var Lcom_priority_app_form_FormAPIQueue_2_classLit = createForClass('com.priority.app.form', 'FormAPIQueue', 152);
function FormAPIRequest(type_0, params){
  this.type_0 = type_0;
  this.params = params;
}

defineClass(13, 1, {13:1}, FormAPIRequest);
var Lcom_priority_app_form_FormAPIRequest_2_classLit = createForClass('com.priority.app.form', 'FormAPIRequest', 13);
function $clinit_FormAPIRequest$RequestTypes(){
  $clinit_FormAPIRequest$RequestTypes = emptyMethod;
  SetActiveRow_0 = new FormAPIRequest$RequestTypes('SetActiveRow', 0, 1);
  Choose_0 = new FormAPIRequest$RequestTypes('Choose', 1, 2);
  SearchAction = new FormAPIRequest$RequestTypes('SearchAction', 2, 3);
  FieldUpdate = new FormAPIRequest$RequestTypes('FieldUpdate', 3, 4);
  WarningApproved = new FormAPIRequest$RequestTypes('WarningApproved', 4, 5);
  SaveRow = new FormAPIRequest$RequestTypes('SaveRow', 5, 6);
  StartSubForm = new FormAPIRequest$RequestTypes('StartSubForm', 6, 7);
  GetRows_0 = new FormAPIRequest$RequestTypes('GetRows', 7, 8);
  NewRow_0 = new FormAPIRequest$RequestTypes('NewRow', 8, 9);
  EndCurrentForm_0 = new FormAPIRequest$RequestTypes('EndCurrentForm', 9, 10);
  Undo_0 = new FormAPIRequest$RequestTypes('Undo', 10, 11);
  DelRow_0 = new FormAPIRequest$RequestTypes('DelRow', 11, 12);
  ClearRows_0 = new FormAPIRequest$RequestTypes('ClearRows', 12, 13);
  SetSearchFilter_0 = new FormAPIRequest$RequestTypes('SetSearchFilter', 13, 14);
  SetSimpleSearchFilter_0 = new FormAPIRequest$RequestTypes('SetSimpleSearchFilter', 14, 15);
  ClearSearchFilter_0 = new FormAPIRequest$RequestTypes('ClearSearchFilter', 15, 16);
  ActivateStart_0 = new FormAPIRequest$RequestTypes('ActivateStart', 16, 17);
  ActivateEnd_0 = new FormAPIRequest$RequestTypes('ActivateEnd', 17, 18);
  UploadFile_1 = new FormAPIRequest$RequestTypes('UploadFile', 18, 19);
  CancelFileUpload = new FormAPIRequest$RequestTypes('CancelFileUpload', 19, 20);
  GetFileUrl_0 = new FormAPIRequest$RequestTypes('GetFileUrl', 20, 21);
  AddText_0 = new FormAPIRequest$RequestTypes('AddText', 21, 22);
  IsAlive_0 = new FormAPIRequest$RequestTypes('IsAlive', 22, 23);
}

function FormAPIRequest$RequestTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  $put_0((!mappings_4 && !mappings_4 && (mappings_4 = new HashMap) , mappings_4), valueOf(value_0), this);
}

function values_6(){
  $clinit_FormAPIRequest$RequestTypes();
  return initValues(getClassLiteralForArray(Lcom_priority_app_form_FormAPIRequest$RequestTypes_2_classLit, 1), $intern_4, 14, 0, [SetActiveRow_0, Choose_0, SearchAction, FieldUpdate, WarningApproved, SaveRow, StartSubForm, GetRows_0, NewRow_0, EndCurrentForm_0, Undo_0, DelRow_0, ClearRows_0, SetSearchFilter_0, SetSimpleSearchFilter_0, ClearSearchFilter_0, ActivateStart_0, ActivateEnd_0, UploadFile_1, CancelFileUpload, GetFileUrl_0, AddText_0, IsAlive_0]);
}

defineClass(14, 20, {14:1, 4:1, 25:1, 20:1}, FormAPIRequest$RequestTypes);
var ActivateEnd_0, ActivateStart_0, AddText_0, CancelFileUpload, Choose_0, ClearRows_0, ClearSearchFilter_0, DelRow_0, EndCurrentForm_0, FieldUpdate, GetFileUrl_0, GetRows_0, IsAlive_0, NewRow_0, SaveRow, SearchAction, SetActiveRow_0, SetSearchFilter_0, SetSimpleSearchFilter_0, StartSubForm, Undo_0, UploadFile_1, WarningApproved, mappings_4;
var Lcom_priority_app_form_FormAPIRequest$RequestTypes_2_classLit = createForEnum('com.priority.app.form', 'FormAPIRequest/RequestTypes', 14, values_6);
function FormColumn(zoomname, type_0, width_0, field){
  this.field_0 = field;
  this.zoomname_0 = zoomname;
  this.type_0 = type_0;
  this.width_0 = width_0;
}

defineClass(44, 1, {44:1}, FormColumn);
_.field_0 = 0;
_.width_0 = 0;
var Lcom_priority_app_form_FormColumn_2_classLit = createForClass('com.priority.app.form', 'FormColumn', 44);
function $clinit_FormManager(){
  $clinit_FormManager = emptyMethod;
  FormsMap = new HashMap;
}

var FormsMap;
function $AddActivationJS(gform, name_0, title_0, etype, background, confirm_0){
  var key = name_0 + '.' + String.fromCharCode(etype);
  gform.activations[key] = {};
  gform.activations[key].title = title_0;
  gform.activations[key].background = background;
  gform.activations[key].confirm = confirm_0;
}

function $AddSubFormJS(gform, name_0, title_0){
  gform.subForms[name_0] = {};
  gform.subForms[name_0].title = title_0;
}

function $AddTableJS(form_0, table, oneline, isquery, ishtml, name_0, title_0){
  var gform = {};
  gform.name = name_0;
  gform.title = title_0;
  gform.subForms = {};
  gform.activations = {};
  gform.columns = {};
  gform.oneline = oneline;
  gform.isquery = isquery;
  gform.ishtml = ishtml;
  gform.setActiveRow = function(row, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.SetActiveRow(row, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.SetActiveRow(row, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.choose = function(fieldName, fieldValue, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.FormChoose(fieldName, fieldValue, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.FormChoose(fieldName, fieldValue, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.searchAction = function(action, searchText, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.FormSearchAction(action, searchText, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.FormSearchAction(action, searchText, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.fieldUpdate = function(fieldName, fieldValue, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.FormFieldUpdate(fieldName, fieldValue, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.FormFieldUpdate(fieldName, fieldValue, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.warningConfirm = function(ok){
    form_0.FormWarning(ok, 0);
  }
  ;
  gform.saveRow = function(backToParentForm, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.SaveCurrentRow(backToParentForm, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.SaveCurrentRow(backToParentForm, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.startSubForm = function(formName, onMessageFunc, onUpdateFieldsFunc, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.GotoSubForm(formName, onMessageFunc, onUpdateFieldsFunc, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.GotoSubForm(formName, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.getRows = function(fromRow, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.GetRows(fromRow, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.GetRows(fromRow, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.newRow = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.NewRow_0(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.NewRow_0(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.endCurrentForm = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.EndCurrentForm(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.EndCurrentForm(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.undo = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.Undo(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.Undo(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.delRow = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.DelRow(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.DelRow(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.clearRows = function(onSuccess_0, onError_0, userState){
    if (onSuccess_0 || onError_0)
      form_0.ClearRows(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.ClearRows(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.setSearchFilter = function(filter, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.SetSearchFilter(filter, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.SetSearchFilter(filter, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.setSimpleSearchFilter = function(filter, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.SetSimpleSearchFilter(filter, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.SetSimpleSearchFilter(filter, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.clearSearchFilter = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.ClearSearchFilter(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.ClearSearchFilter(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.activateStart = function(ename, type_0, onProgress, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.ActivateStart(onSuccess_0, onError_0, ename, type_0, onProgress, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.ActivateStart(onSuccess, onError, ename, type_0, onProgress, 0);
      }
      );
    }
  }
  ;
  gform.activateEnd = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.ActivateEnd(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.ActivateEnd(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.uploadFile = function(file, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.UploadFile_1(file, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.UploadFile_1(file, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.uploadDataUrl = function(dataUrl, type_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.UploadDataUrl(dataUrl, type_0, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.UploadDataUrl(dataUrl, type_0, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.cancelFileUpload = function(){
    form_0.isCancelFileUpload = true;
  }
  ;
  gform.getFileUrl = function(file){
    return form_0.GetFileUrl(file);
  }
  ;
  gform.saveText = function(text_0, addFlag, commentFlag, lang2Flag, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0) {
      form_0.AddText(text_0, addFlag, commentFlag, lang2Flag, onSuccess_0, onError_0, 0);
    }
     else {
      return new Promise(function(onSuccess, onError){
        form_0.AddText(text_0, addFlag, commentFlag, lang2Flag, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.isAlive = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0) {
      form_0.IsAlive(onSuccess_0, onError_0, 0);
    }
     else {
      return new Promise(function(onSuccess, onError){
        form_0.IsAlive(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  table.SetJsTableObject(gform);
}

function $ClearSearchFilter_0(this$static, onSuccess){
  this$static.isAdd = false;
  this$static.filter = null;
  InvokeSuccess(this$static.mainform, onSuccess);
}

function $ComposeText(this$static, curText, textToAdd, addFlag, addSignature, lang2){
  var end, hr, ret, sig, start_0;
  sig = lang2?this$static.EngSignature:this$static.HebSignature;
  start_0 = '';
  end = '';
  if (addSignature) {
    if (!IsNullOrEmpty(sig.date_0)) {
      start_0 += $pGet(fixtime(sig.date_0, Lang == 3), lang2);
      start_0 += ($clinit_PriCommon() , '<p dir=' + (Lang == 1 && !lang2?'rtl':'ltr') + '>' + '&nbsp;' + '<\/p>\n');
    }
    end += ($clinit_PriCommon() , '<p dir=' + (Lang == 1 && !lang2?'rtl':'ltr') + '>' + '&nbsp;' + '<\/p>\n' + $pGet(sig.message_0, lang2) + $pGet(sig.name_0, lang2) + $pGet(sig.position_0, lang2) + $pGet(sig.email_0, lang2) + $pGet(sig.phone_0, lang2) + $pGet(sig.cellphone_0, lang2) + $pGet(sig.dept_0, lang2) + $pGet(sig.branch_0, lang2) + $pGet(sig.company_0, lang2));
  }
  hr = addSignature && sig.hr_0 == 1?'<hr/>':'';
  sig.begin_0 == 1?(ret = start_0 + ($clinit_PriCommon() , textToAdd == null || textToAdd.length == 0?'':'<p dir=' + (Lang == 1 && !lang2?'rtl':'ltr') + '>' + textToAdd + '<\/p>\n') + end + hr + (addFlag?curText:'')):(ret = (addFlag?curText:'') + hr + start_0 + ($clinit_PriCommon() , textToAdd == null || textToAdd.length == 0?'':'<p dir=' + (Lang == 1 && !lang2?'rtl':'ltr') + '>' + textToAdd + '<\/p>\n') + end);
  return ret;
}

function $CreateMemento(this$static){
  return $CreateMemento_0(this$static, ($clinit_PriKeys() , None_4), this$static.curfield, this$static.rowInData, this$static.curfieldval);
}

function $CreateMemento_0(this$static, key, field, row, value_0){
  return new FormTableMemento(field, row, value_0, this$static._isQueryMode?-1:1, key);
}

function $SetCurRowInData(this$static, row){
  this$static.rowInData = row;
}

function $SetField(this$static, field, value_0){
  this$static.curfield = field;
  this$static.curfieldval = value_0;
}

function $SetSearchFilter_0(this$static, filter, onSuccess, onError){
  var fixed_0;
  this$static.isAdd = false;
  fixed_0 = FixFilter(filter, this$static.table_0, this$static.mainform);
  if (!!filter && !fixed_0) {
    InvokeError(this$static.mainform, onError, 'Invalid filter.', 'invalidFilter', false);
    return;
  }
  this$static.filter = fixed_0;
  InvokeSuccess(this$static.mainform, onSuccess);
}

function $SetSimpleSearchFilter_0(this$static, filter, onSuccess, onError){
  var jfilter;
  this$static.isAdd = false;
  if (filter == null || filter.length <= 0) {
    InvokeError(this$static.mainform, onError, 'Invalid filter.', 'invalidFilter', false);
    return;
  }
  filter = FixFilterValue(filter);
  if (filter == null || filter.length <= 0) {
    InvokeError(this$static.mainform, onError, 'Invalid filter.', 'invalidFilter', false);
    return;
  }
  jfilter = BuildFilter(filter, this$static.table_0, this$static.mainform);
  if (!jfilter) {
    InvokeError(this$static.mainform, onError, 'Invalud filter.', 'invalidFilter', false);
    return;
  }
  this$static.filter = jfilter;
  InvokeSuccess(this$static.mainform, onSuccess);
}

function $getCol(this$static, fieldName){
  return dynamicCast($getStringValue(this$static.FormColumns, fieldName), 44);
}

function $pGet(str, lang2){
  return $clinit_PriCommon() , str == null || str.length == 0?'':'<p dir=' + (Lang == 1 && !lang2?'rtl':'ltr') + '>' + str + '<\/p>\n';
}

function $setAdd(this$static, add_0){
  this$static.isAdd = add_0;
}

function BuildFilter(filter, table, form_0){
  var gform = form_0.GetJsTableObject(table);
  if (!gform)
    return null;
  var filt = {};
  filt.or = 1;
  filt.ignorecase = 1;
  filt.QueryValues = [];
  var col = 0;
  for (var colname in gform.columns) {
    if (colname) {
      if (gform.columns[colname].searchfield == 1 && gform.columns[colname].field > 0) {
        filt.QueryValues[col] = {};
        filt.QueryValues[col].field = gform.columns[colname].field;
        filt.QueryValues[col].fromval = filter + '*';
        filt.QueryValues[col].toval = '';
        filt.QueryValues[col].op = '=';
        filt.QueryValues[col].sort = 0;
        filt.QueryValues[col].isdesc = 0;
        col++;
      }
    }
  }
  if (filt.QueryValues.length <= 0)
    return null;
  return filt;
}

function FixFilter(filter, table, form_0){
  var gform = form_0.GetJsTableObject(table);
  if (!gform || filter == null)
    return null;
  if (!filter.QueryValues || filter.QueryValues.length <= 0)
    return null;
  for (var i = 0; i < filter.QueryValues.length; i++) {
    var colname = filter.QueryValues[i].field;
    var val = filter.QueryValues[i].fromval;
    if (!val || val.length <= 0)
      return null;
    if (!colname || !gform.columns[colname] || !gform.columns[colname].field || gform.columns[colname].field <= 0) {
      return null;
    }
    val = FixFilterValue(val);
    gform.columns[colname].type == 'date' && (val = ISOToDate(gform.columns[colname].maxLength, val));
    if (!val || val.length <= 0)
      return null;
    var toval = filter.QueryValues[i].toval;
    if (toval && toval.length > 0) {
      toval = FixFilterValue(toval);
      gform.columns[colname].type == 'date' && (toval = ISOToDate(gform.columns[colname].maxLength, toval));
      if (!toval || toval.length <= 0)
        return null;
    }
    filter.QueryValues[i].field = gform.columns[colname].field;
  }
  if (filter.QueryValues.length <= 0)
    return null;
  return filter;
}

function FixFilterValue(value_0){
  while (value_0 != null && value_0.length > 0 && ($equals(value_0.substr(0, 1), '*') || $equals(value_0.substr(0, 1), '%'))) {
    value_0 = __substr(value_0, 1, value_0.length - 1);
  }
  return value_0;
}

function FormTable(mainform, table, title_0, name_0, level, ishtml, oneline, isquery){
  this.FormColumns = new HashMap;
  this.FormColumnsI = new HashMap;
  this.SubForms = new HashMap;
  this.Activations = new HashMap;
  this.mainform = mainform;
  this.table_0 = table;
  this.level_0 = level;
  this.ishtml_0 = ishtml;
  $AddTableJS(mainform, this, oneline, isquery, ishtml, name_0, title_0);
}

function fixtime(str, ampm){
  var time = new Date;
  var hour = time.getHours();
  var ampms;
  if (ampm) {
    ampms = hour >= 12?'PM':'AM';
    hour == 0?(hour = 12):hour > 12 && (hour -= 12);
  }
  hour < 10 && (hour = '0' + hour);
  var minu = time.getMinutes();
  minu < 10 && (minu = '0' + minu);
  hm = hour + ':' + minu + (ampm?' ' + ampms:'');
  return str.replace('HH:MM', hm);
}

defineClass(21, 1, {21:1}, FormTable);
_.SetJsTableObject = function SetJsTableObject(jsTableObject){
  this.jsTableObject = jsTableObject;
}
;
_._isQueryMode = false;
_.curfield = 0;
_.filter = null;
_.isAdd = false;
_.isEdit = 0;
_.ishtml_0 = 0;
_.jsTableObject = null;
_.level_0 = 0;
_.line_0 = 0;
_.lines_0 = 0;
_.onShowMessage = null;
_.rowInData = 0;
_.rowcount = 0;
_.table_0 = 0;
_.tsline_0 = 0;
_.updateFieldsFunc = null;
var Lcom_priority_app_form_FormTable_2_classLit = createForClass('com.priority.app.form', 'FormTable', 21);
function FormTable$Signature(date, name_0, hr, begin, position, email, phone, message, cellphone, branch, dept, company){
  this.date_0 = removeQuote(date);
  this.name_0 = removeQuote(name_0);
  this.hr_0 = hr;
  this.begin_0 = begin;
  this.position_0 = removeQuote(position);
  this.email_0 = removeQuote(email);
  this.phone_0 = removeQuote(phone);
  this.message_0 = removeQuote(message);
  this.cellphone_0 = removeQuote(cellphone);
  this.branch_0 = removeQuote(branch);
  this.dept_0 = removeQuote(dept);
  this.company_0 = removeQuote(company);
}

function removeQuote(str){
  if (str == null)
    return str;
  return str.replace(/\\'/g, "'");
}

defineClass(74, 1, {}, FormTable$Signature);
_.begin_0 = 0;
_.hr_0 = 0;
var Lcom_priority_app_form_FormTable$Signature_2_classLit = createForClass('com.priority.app.form', 'FormTable/Signature', 74);
function FormTableMemento(currentFieldNum, currentLine, currentFieldValue, isActive, key){
  this.m_key = values_7()[0];
  $clinit_PriCommon();
  isDebugging && $log_1(logger_0, ($clinit_Level() , ALL), 'FormTableMemento. currentFieldNum: ' + currentFieldNum + '\ncurrentLine: ' + currentLine + '\ncurrentTab: ' + '0' + '\ncurrentFieldValue: ' + currentFieldValue + '\nisActive: ' + isActive + '\nkey: ' + key);
  this.m_currentFieldNum = currentFieldNum;
  this.m_currentLine = currentLine;
  this.m_currentTab = {l:0, m:0, h:0};
  this.m_currentFieldValue = currentFieldValue;
  this.m_isActive = isActive;
  this.m_key = key;
}

defineClass(62, 1, {62:1}, FormTableMemento);
_.m_currentFieldNum = 0;
_.m_currentLine = 0;
_.m_currentTab = {l:0, m:0, h:0};
_.m_isActive = 0;
var Lcom_priority_app_form_FormTableMemento_2_classLit = createForClass('com.priority.app.form', 'FormTableMemento', 62);
function $ToStringData(this$static, session, currState){
  var jop, op, op$iterator, opTable, opsTable, retData, ses, tableState;
  tableState = new JSONObject;
  opTable = new JSONArray;
  opsTable = new JSONArray;
  $put(tableState, 'Operations', opsTable);
  $put(tableState, 'Operation', opTable);
  ses = new JSONObject;
  $put(ses, 'session', new JSONString(session));
  $set(opsTable, opsTable.jsArray.length, ses);
  $add(this$static.operations, currState);
  if (this$static.operations.array.length > 0) {
    for (op$iterator = new AbstractList$IteratorImpl(this$static.operations); op$iterator.i < op$iterator.this$01.size_1();) {
      op = (checkCriticalElement(op$iterator.i < op$iterator.this$01.size_1()) , dynamicCast(op$iterator.this$01.get_1(op$iterator.i++), 62));
      jop = new JSONObject;
      $put(jop, 'field', new JSONString('' + op.m_currentFieldNum));
      $put(jop, 'line', new JSONString('' + op.m_currentLine));
      $put(jop, 'curtab', new JSONString('' + toString_9(op.m_currentTab)));
      $put(jop, 'value', new JSONString(op.m_currentFieldValue));
      $put(jop, 'active', new JSONString('' + op.m_isActive));
      $put(jop, 'key', new JSONString('' + toString_9(fromInt(-op.m_key.intValue))));
      $set(opTable, opTable.jsArray.length, jop);
    }
  }
   else {
    jop = new JSONObject;
    $put(jop, 'field', new JSONString('0'));
    $put(jop, 'line', new JSONString('0'));
    $put(jop, 'curtab', new JSONString('0'));
    $put(jop, 'value', new JSONString(''));
    $put(jop, 'active', new JSONString('1'));
    $put(jop, 'key', new JSONString('0'));
    $set(opTable, opTable.jsArray.length, jop);
  }
  retData = $toString_0(tableState);
  this$static.operations.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
  return retData;
}

function FormTableOperations(){
  this.operations = new ArrayList;
}

defineClass(153, 1, {}, FormTableOperations);
var Lcom_priority_app_form_FormTableOperations_2_classLit = createForClass('com.priority.app.form', 'FormTableOperations', 153);
function $clinit_PriKeys(){
  $clinit_PriKeys = emptyMethod;
  QueryIncr = new PriKeys('QueryIncr', 0, -5);
  QueryDecr = new PriKeys('QueryDecr', 1, -6);
  QueryEnd = new PriKeys('QueryEnd', 2, -7);
  FormBrother = new PriKeys('FormBrother', 3, -8);
  SaveHtml = new PriKeys('SaveHtml', 4, -10);
  FormZoom = new PriKeys('FormZoom', 5, -18);
  FormNavigateBack = new PriKeys('FormNavigateBack', 6, -27);
  PrevReturn = new PriKeys('PrevReturn', 7, -29);
  DebugMode = new PriKeys('DebugMode', 8, -32);
  SendLink = new PriKeys('SendLink', 9, -31);
  RestoreColumnWidths = new PriKeys('RestoreColumnWidths', 10, -33);
  FullZoom = new PriKeys('FullZoom', 11, -38);
  NotifyViewChange = new PriKeys('NotifyViewChange', 12, -39);
  CopyRecordLink = new PriKeys('CopyRecordLink', 13, -40);
  SaveChoose = new PriKeys('SaveChoose', 14, -43);
  MailTaskUsers = new PriKeys('MailTaskUsers', 15, -45);
  SendLabels = new PriKeys('SendLabels', 16, -46);
  GoogleMaps = new PriKeys('GoogleMaps', 17, -48);
  RefreshTimer = new PriKeys('RefreshTimer', 18, -51);
  SetFollowup = new PriKeys('SetFollowup', 19, -52);
  UnsetFollowup = new PriKeys('UnsetFollowup', 20, -52);
  SaveRow_0 = new PriKeys('SaveRow', 21, -78);
  None_4 = new PriKeys('None', 22, 0);
  Return = new PriKeys('Return', 23, 4);
  Tab = new PriKeys('Tab', 24, 5);
  Up = new PriKeys('Up', 25, 6);
  Down = new PriKeys('Down', 26, 7);
  Right = new PriKeys('Right', 27, 8);
  Left = new PriKeys('Left', 28, 9);
  Del = new PriKeys('Del', 29, 10);
  Cont = new PriKeys('Cont', 30, 11);
  Srch = new PriKeys('Srch', 31, 12);
  App_0 = new PriKeys('App', 32, 13);
  Blk = new PriKeys('Blk', 33, 14);
  DefaultSubLevel = new PriKeys('DefaultSubLevel', 34, 15);
  Backs = new PriKeys('Backs', 35, 16);
  Allbacks = new PriKeys('Allbacks', 36, 17);
  Do = new PriKeys('Do', 37, 18);
  Hebeng = new PriKeys('Hebeng', 38, 19);
  Ins = new PriKeys('Ins', 39, 20);
  Copyf = new PriKeys('Copyf', 40, 21);
  Copyc = new PriKeys('Copyc', 41, 22);
  Setval = new PriKeys('Setval', 42, 23);
  Getval = new PriKeys('Getval', 43, 24);
  Help = new PriKeys('Help', 44, 25);
  Undo_1 = new PriKeys('Undo', 45, 26);
  Learn = new PriKeys('Learn', 46, 27);
  Autofill = new PriKeys('Autofill', 47, 28);
  Tquery = new PriKeys('Tquery', 48, 29);
  Total = new PriKeys('Total', 49, 30);
  Npage = new PriKeys('Npage', 50, 31);
  Ppage = new PriKeys('Ppage', 51, 32);
  Draw = new PriKeys('Draw', 52, 33);
  Prnt = new PriKeys('Prnt', 53, 34);
  Downfirst = new PriKeys('Downfirst', 54, 35);
  SubLevels = new PriKeys('SubLevels', 55, 36);
  Splitdef = new PriKeys('Splitdef', 56, 37);
  Clnln = new PriKeys('Clnln', 57, 38);
  Clntb = new PriKeys('Clntb', 58, 39);
  Lputscr = new PriKeys('Lputscr', 59, 40);
  Lgetscr = new PriKeys('Lgetscr', 60, 41);
  Hebengs = new PriKeys('Hebengs', 61, 42);
  Repins = new PriKeys('Repins', 62, 43);
  Activations = new PriKeys('Activations', 63, 44);
  Gotolin = new PriKeys('Gotolin', 64, 45);
  Gotolinn = new PriKeys('Gotolinn', 65, 46);
  FullMultiRecord = new PriKeys('FullMultiRecord', 66, 47);
  Element_0 = new PriKeys('Element', 67, 48);
  Begin = new PriKeys('Begin', 68, 49);
  Dolearn = new PriKeys('Dolearn', 69, 50);
  Lstlearn = new PriKeys('Lstlearn', 70, 51);
  Lstval = new PriKeys('Lstval', 71, 52);
  Lstscr = new PriKeys('Lstscr', 72, 53);
  Nframe = new PriKeys('Nframe', 73, 54);
  Pframe = new PriKeys('Pframe', 74, 55);
  Select_0 = new PriKeys('Select', 75, 56);
  Tabhelp = new PriKeys('Tabhelp', 76, 57);
  Refresh = new PriKeys('Refresh', 77, 58);
  Activate = new PriKeys('Activate', 78, 59);
  Gotopos = new PriKeys('Gotopos', 79, 60);
  Home = new PriKeys('Home', 80, 61);
  End = new PriKeys('End', 81, 62);
  Top = new PriKeys('Top', 82, 63);
  Bottom = new PriKeys('Bottom', 83, 64);
  Oneline = new PriKeys('Oneline', 84, 65);
  Printtofile = new PriKeys('Printtofile', 85, 66);
  Execute = new PriKeys('Execute', 86, 67);
  Phone = new PriKeys('Phone', 87, 68);
  Sort = new PriKeys('Sort', 88, 69);
  Wdel = new PriKeys('Wdel', 89, 70);
  Enlarge = new PriKeys('Enlarge', 90, 71);
  Mailinter = new PriKeys('Mailinter', 91, 72);
  Movetab = new PriKeys('Movetab', 92, 73);
  Splitempty = new PriKeys('Splitempty', 93, 74);
  DlgQuery = new PriKeys('DlgQuery', 94, 75);
  Execform = new PriKeys('Execform', 95, 76);
  Scroll = new PriKeys('Scroll', 96, 77);
  SelectAll = new PriKeys('SelectAll', 97, 78);
  StoreRecords = new PriKeys('StoreRecords', 98, 79);
  RetrieveRecords = new PriKeys('RetrieveRecords', 99, 80);
  IncrDecrValue = new PriKeys('IncrDecrValue', 100, 81);
  Macro = new PriKeys('Macro', 101, 82);
  ExecuteQuery = new PriKeys('ExecuteQuery', 102, 83);
  DlgBusiness = new PriKeys('DlgBusiness', 103, 84);
  DlgData = new PriKeys('DlgData', 104, 85);
  DlgFields = new PriKeys('DlgFields', 105, 86);
  DlgDirectActivations = new PriKeys('DlgDirectActivations', 106, 87);
  DlgSubLevels = new PriKeys('DlgSubLevels', 107, 88);
  RowColors = new PriKeys('RowColors', 108, 89);
  MacroList = new PriKeys('MacroList', 109, 90);
  DlgMultiComp = new PriKeys('DlgMultiComp', 110, 91);
  AttachActivateApp = new PriKeys('AttachActivateApp', 111, 92);
  AttachBrowse = new PriKeys('AttachBrowse', 112, 93);
  AttachImport = new PriKeys('AttachImport', 113, 94);
  AttachPasteImport = new PriKeys('AttachPasteImport', 114, 95);
  AttachClear = new PriKeys('AttachClear', 115, 96);
  AttachDelete = new PriKeys('AttachDelete', 116, 97);
  AttachSaveAs = new PriKeys('AttachSaveAs', 117, 98);
  AttachHelp = new PriKeys('AttachHelp', 118, 99);
  ShiftDo = new PriKeys('ShiftDo', 119, 100);
  ExecuteDirectAct = new PriKeys('ExecuteDirectAct', 120, 101);
  GotoSubForm_0 = new PriKeys('GotoSubForm', 121, 102);
  Navigate = new PriKeys('Navigate', 122, 103);
  SendExcel = new PriKeys('SendExcel', 123, 104);
  DesignExcel = new PriKeys('DesignExcel', 124, 105);
  SaveExcel = new PriKeys('SaveExcel', 125, 106);
  FormFontSize = new PriKeys('FormFontSize', 126, 107);
  CopyColumn = new PriKeys('CopyColumn', 127, 108);
  PasteColumn = new PriKeys('PasteColumn', 128, 109);
  Skype = new PriKeys('Skype', 129, 110);
  Messenger = new PriKeys('Messenger', 130, 111);
  Dialer = new PriKeys('Dialer', 131, 112);
  Calculator = new PriKeys('Calculator', 132, 113);
  MacroRecStart = new PriKeys('MacroRecStart', 133, 114);
  MacroRecStop = new PriKeys('MacroRecStop', 134, 115);
  RunApp = new PriKeys('RunApp', 135, 116);
  Browse = new PriKeys('Browse', 136, 117);
  Clnfld = new PriKeys('Clnfld', 137, 118);
  Pastec = new PriKeys('Pastec', 138, 119);
  SendWord = new PriKeys('SendWord', 139, 120);
  DesignWord = new PriKeys('DesignWord', 140, 121);
  SubLevelsQuery = new PriKeys('SubLevelsQuery', 141, 122);
  DefaultSubLevelQuery = new PriKeys('DefaultSubLevelQuery', 142, 123);
  MailInterface = new PriKeys('MailInterface', 143, 124);
  PasteOnServer = new PriKeys('PasteOnServer', 144, 125);
  AttachDuplicate = new PriKeys('AttachDuplicate', 145, 126);
  AutoSaveHtml = new PriKeys('AutoSaveHtml', 146, 127);
  Enter = new PriKeys('Enter', 147, 128);
  DynamicKeyboard = new PriKeys('DynamicKeyboard', 148, 129);
}

function PriKeys(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.intValue = value_0;
  $put_0((!mappings_5 && !mappings_5 && (mappings_5 = new HashMap) , mappings_5), valueOf(value_0), this);
}

function values_7(){
  $clinit_PriKeys();
  return initValues(getClassLiteralForArray(Lcom_priority_app_form_PriKeys_2_classLit, 1), $intern_4, 3, 0, [QueryIncr, QueryDecr, QueryEnd, FormBrother, SaveHtml, FormZoom, FormNavigateBack, PrevReturn, DebugMode, SendLink, RestoreColumnWidths, FullZoom, NotifyViewChange, CopyRecordLink, SaveChoose, MailTaskUsers, SendLabels, GoogleMaps, RefreshTimer, SetFollowup, UnsetFollowup, SaveRow_0, None_4, Return, Tab, Up, Down, Right, Left, Del, Cont, Srch, App_0, Blk, DefaultSubLevel, Backs, Allbacks, Do, Hebeng, Ins, Copyf, Copyc, Setval, Getval, Help, Undo_1, Learn, Autofill, Tquery, Total, Npage, Ppage, Draw, Prnt, Downfirst, SubLevels, Splitdef, Clnln, Clntb, Lputscr, Lgetscr, Hebengs, Repins, Activations, Gotolin, Gotolinn, FullMultiRecord, Element_0, Begin, Dolearn, Lstlearn, Lstval, Lstscr, Nframe, Pframe, Select_0, Tabhelp, Refresh, Activate, Gotopos, Home, End, Top, Bottom, Oneline, Printtofile, Execute, Phone, Sort, Wdel, Enlarge, Mailinter, Movetab, Splitempty, DlgQuery, Execform, Scroll, SelectAll, StoreRecords, RetrieveRecords, IncrDecrValue, Macro, ExecuteQuery, DlgBusiness, DlgData, DlgFields, DlgDirectActivations, DlgSubLevels, RowColors, MacroList, DlgMultiComp, AttachActivateApp, AttachBrowse, AttachImport, AttachPasteImport, AttachClear, AttachDelete, AttachSaveAs, AttachHelp, ShiftDo, ExecuteDirectAct, GotoSubForm_0, Navigate, SendExcel, DesignExcel, SaveExcel, FormFontSize, CopyColumn, PasteColumn, Skype, Messenger, Dialer, Calculator, MacroRecStart, MacroRecStop, RunApp, Browse, Clnfld, Pastec, SendWord, DesignWord, SubLevelsQuery, DefaultSubLevelQuery, MailInterface, PasteOnServer, AttachDuplicate, AutoSaveHtml, Enter, DynamicKeyboard]);
}

defineClass(3, 20, {3:1, 4:1, 25:1, 20:1}, PriKeys);
_.intValue = 0;
var Activate, Activations, Allbacks, App_0, AttachActivateApp, AttachBrowse, AttachClear, AttachDelete, AttachDuplicate, AttachHelp, AttachImport, AttachPasteImport, AttachSaveAs, AutoSaveHtml, Autofill, Backs, Begin, Blk, Bottom, Browse, Calculator, Clnfld, Clnln, Clntb, Cont, CopyColumn, CopyRecordLink, Copyc, Copyf, DebugMode, DefaultSubLevel, DefaultSubLevelQuery, Del, DesignExcel, DesignWord, Dialer, DlgBusiness, DlgData, DlgDirectActivations, DlgFields, DlgMultiComp, DlgQuery, DlgSubLevels, Do, Dolearn, Down, Downfirst, Draw, DynamicKeyboard, Element_0, End, Enlarge, Enter, Execform, Execute, ExecuteDirectAct, ExecuteQuery, FormBrother, FormFontSize, FormNavigateBack, FormZoom, FullMultiRecord, FullZoom, Getval, GoogleMaps, GotoSubForm_0, Gotolin, Gotolinn, Gotopos, Hebeng, Hebengs, Help, Home, IncrDecrValue, Ins, Learn, Left, Lgetscr, Lputscr, Lstlearn, Lstscr, Lstval, Macro, MacroList, MacroRecStart, MacroRecStop, MailInterface, MailTaskUsers, Mailinter, Messenger, Movetab, Navigate, Nframe, None_4, NotifyViewChange, Npage, Oneline, PasteColumn, PasteOnServer, Pastec, Pframe, Phone, Ppage, PrevReturn, Printtofile, Prnt, QueryDecr, QueryEnd, QueryIncr, Refresh, RefreshTimer, Repins, RestoreColumnWidths, RetrieveRecords, Return, Right, RowColors, RunApp, SaveChoose, SaveExcel, SaveHtml, SaveRow_0, Scroll, Select_0, SelectAll, SendExcel, SendLabels, SendLink, SendWord, SetFollowup, Setval, ShiftDo, Skype, Sort, Splitdef, Splitempty, Srch, StoreRecords, SubLevels, SubLevelsQuery, Tab, Tabhelp, Top, Total, Tquery, Undo_1, UnsetFollowup, Up, Wdel, mappings_5;
var Lcom_priority_app_form_PriKeys_2_classLit = createForEnum('com.priority.app.form', 'PriKeys', 3, values_7);
function SubForm(self_0){
  this.self_0 = self_0;
}

defineClass(61, 1, {61:1}, SubForm);
_.self_0 = 0;
var Lcom_priority_app_form_SubForm_2_classLit = createForClass('com.priority.app.form', 'SubForm', 61);
function $GetConnection_0(this$static){
  if (this$static.con)
    return this$static.con;
  this$static.con = GetWCFServiceClient(this$static);
  return this$static.con;
}

function $onModuleLoad_1(this$static){
  $clinit_PriCommon();
  AppMain = this$static;
  createJsHelperFunc();
  publishAPIfuncForm();
  publishAPIfuncProc();
  publishAPIfuncMain();
}

function PriorityApp(){
}

function publishAPIfuncMain(){
  $wnd.login = function(configuration, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      Login_0(configuration, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        Login_0(configuration, onSuccess, onError);
      }
      );
  }
  ;
  !(typeof module !== 'undefined' && typeof module.exports !== 'undefined') && $wnd.priorityReady();
}

defineClass(80, 1, {}, PriorityApp);
_.ServerTripCompleted = function ServerTripCompleted_0(sender, e){
}
;
_.SetIsGoneToServer = function SetIsGoneToServer_0(userState){
  return true;
}
;
_.getDname = function getDname_0(){
  return null;
}
;
_.con = null;
var Lcom_priority_app_main_PriorityApp_2_classLit = createForClass('com.priority.app.main', 'PriorityApp', 80);
function $AskPrint(this$static, proc, onSuccess){
  var askprint, formats, par, pdfVal, wantsPdf;
  askprint = dynamicCast($get_0(proc, 'AskPrint'), 15);
  formats = null;
  wantsPdf = false;
  if (!!askprint && askprint.jsArray.length > 0) {
    par = dynamicCast($get(askprint, 0), 5);
    formats = dynamicCast($get_0(par, 'Formats'), 15);
    pdfVal = round_int(getJSONNumberProperty(par, 'pdf'));
    wantsPdf = pdfVal % 2 != 0;
  }
  InvokeDocumentOptions(this$static, wantsPdf, !formats?null:formats.jsArray, onSuccess);
}

function $CancelProcedure(this$static, killFlag, executionFlag, onSuccess, onError){
  if (this$static.isFinished || IsNullOrEmpty(this$static.privateSession)) {
    !!onSuccess && InvokeEnd(this$static, onSuccess);
    return;
  }
  killFlag?executionFlag?$ProcKillExecutionMobAsync($GetConnection_1(this$static), this$static.privateSession, new Proc$CommonResponse($GetConnection_1(this$static), this$static, 'ProcKillExecution', onSuccess, onError)):$ProcKillProcessMobAsync($GetConnection_1(this$static), this$static.privateSession, new Proc$CommonResponse($GetConnection_1(this$static), this$static, 'ProcKillProcess', onSuccess, onError)):$ProcEndMobAsync($GetConnection_1(this$static), this$static.privateSession, new Proc$CommonResponse($GetConnection_1(this$static), this$static, 'ProcEnd', onSuccess, onError));
}

function $GetConnection_1(this$static){
  if (this$static.con)
    return this$static.con;
  this$static.con = GetWCFServiceClient(this$static);
  return this$static.con;
}

function $Input(this$static, proc, onSuccess){
  var chooseField, chooseFields, columntype, editField, editFields, field, helpString, i, isboolean, ispassword, mandatory, name_0, op, opId, operator, operators, par, parameters, readonly, ret, selected, text_0, title_0, title0, value_0, value1, width_0, zoomtype, op_0;
  ret = ($reset(this$static.inputFields_0) , {});
  parameters = dynamicCast($get_0(proc, 'Parameters'), 15);
  if (!!parameters && parameters.jsArray.length > 0) {
    par = dynamicCast($get(parameters, 0), 5);
    editFields = dynamicCast($get_0(par, 'EditField'), 15);
    if (editFields) {
      for (i = 0; i < editFields.jsArray.length; i++) {
        editField = dynamicCast($get(editFields, i), 5);
        field = round_int(getJSONNumberProperty(editField, 'field'));
        helpString = getHyperLinkedText(editField, 'help');
        isboolean = round_int(getJSONNumberProperty(editField, 'isboolean'));
        ispassword = round_int(getJSONNumberProperty(editField, 'ispassword'));
        mandatory = round_int(getJSONNumberProperty(editField, 'mandatory'));
        operator = round_int(getJSONNumberProperty(editField, 'operator'));
        readonly = round_int(getJSONNumberProperty(editField, 'simplechoose'));
        title0 = getJSONStringProperty(editField, 'title');
        columntype = forValue(getJSONStringProperty(editField, 'type').charCodeAt(0));
        value_0 = getJSONStringProperty(editField, 'value');
        value1 = getJSONStringProperty(editField, 'value1');
        width_0 = round_int(getJSONNumberProperty(editField, 'width'));
        zoomtype = forValue_0(round_int(getJSONNumberProperty(editField, 'zoomtype')));
        $put_0(this$static.inputFields_0, valueOf(field), new Proc$InputField(zoomtype));
        $InputFieldAddNative(ret, field, helpString, isboolean, ispassword, mandatory, operator, readonly, title0, columntype.name_0 != null?columntype.name_0:'' + columntype.ordinal, value_0, value1, width_0, zoomtype.name_0 != null?zoomtype.name_0:'' + zoomtype.ordinal);
      }
    }
    operators = dynamicCast($get_0(par, 'Operators'), 15);
    if (operators) {
      for (i = 0; i < operators.jsArray.length; i++) {
        op = dynamicCast($get(operators, i), 5);
        name_0 = getJSONStringProperty(op, 'name');
        opId = round_int(getJSONNumberProperty(op, 'op'));
        title0 = getJSONStringProperty(op, 'title');
        op_0 = {};
        op_0.name = name_0;
        op_0.op = opId;
        op_0.title = title0;
        !ret.Operators && (ret.Operators = []);
        ret.Operators.push(op_0);
      }
    }
    chooseFields = dynamicCast($get_0(par, 'ChooseField'), 15);
    if (chooseFields) {
      for (i = 0; i < chooseFields.jsArray.length; i++) {
        chooseField = dynamicCast($get(chooseFields, i), 5);
        field = round_int(getJSONNumberProperty(chooseField, 'field'));
        helpString = getHyperLinkedText(chooseField, 'help');
        name_0 = getJSONStringProperty(chooseField, 'name');
        selected = round_int(getJSONNumberProperty(chooseField, 'selected'));
        title0 = getJSONStringProperty(chooseField, 'title');
        $InputChooseAdd(ret, field, helpString, name_0, selected, title0);
      }
    }
    text_0 = getJSONStringProperty(par, 'text');
    title_0 = getJSONStringProperty(par, 'title');
    ret.text = text_0;
    ret.title = title_0;
  }
  InvokeInput(this$static, ret, onSuccess);
}

function $InputChooseAdd(retObj, fieldId, helpString, name_0, selected, title_0){
  var field = {};
  field.field = fieldId;
  field.help = helpString;
  field.name = name_0;
  field.selected = selected;
  field.title = title_0;
  !retObj.Options && (retObj.Options = []);
  retObj.Options.push(field);
}

function $InputFieldAddNative(retObj, fieldId, helpstring, isboolean, ispassword, mandatory, operator, readonly, title_0, columntype, value_0, value1, width_0, zoomtype){
  var field = {};
  field.field = fieldId;
  field.helpstring = helpstring;
  field.isboolean = isboolean;
  field.ispassword = ispassword;
  field.mandatory = mandatory;
  field.operator = operator;
  field.readonly = readonly;
  field.title = title_0;
  field.columntype = columntype;
  field.value = value_0;
  field.value1 = value1;
  field.width = width_0;
  field.zoom = zoomtype;
  !retObj.EditFields && (retObj.EditFields = []);
  retObj.EditFields.push(field);
}

function $NewReport(this$static, proc, onSuccess, onError){
  var firstFormat, format, formats, i, nformat, nselected, oformat, option, selectedFormat, str;
  dynamicCast($get_0(proc, 'showexcel'), 27);
  str = dynamicCast($get_0(proc, 'optionselected'), 10);
  option = null;
  !!str && (option = str.value_0);
  selectedFormat = 0;
  firstFormat = 0;
  formats = dynamicCast($get_0(proc, 'Formats'), 15);
  if (!!formats && formats.jsArray.length > 0) {
    for (i = 0; i < formats.jsArray.length; i++) {
      oformat = dynamicCast($get(formats, i), 5);
      format = 0;
      nformat = dynamicCast($get_0(oformat, 'format'), 27);
      if (nformat) {
        format = round_int(nformat.value_0);
        firstFormat == 0 && (firstFormat = format);
      }
      nselected = dynamicCast($get_0(oformat, 'selected'), 27);
      !!nselected && nselected.value_0 == 1 && (selectedFormat = format);
    }
  }
  !formats || formats.jsArray.length <= 1?$ProcNewReportMobAsync($GetConnection_1(this$static), this$static.etype_0, this$static.ename_0, fromInt(selectedFormat == 0?firstFormat:selectedFormat), new Proc$CommonResponse($GetConnection_1(this$static), this$static, 'ProcNewReport', onSuccess, onError)):InvokeReportOptions(this$static, ($equals('excel', option) , formats.jsArray), onSuccess);
}

function $ProcContinue(this$static, onSuccess, onError){
  if (this$static.isFinished) {
    InvokeEnd(this$static, onSuccess);
    return;
  }
  $ProcContinueMobAsync($GetConnection_1(this$static), this$static.privateSession, new Proc$CommonResponse($GetConnection_1(this$static), this$static, 'ProcContinue', onSuccess, onError));
}

function $ProcMessage(this$static, curmsg, onSuccess){
  var msgtext, mt;
  mt = dynamicCast($get_0(curmsg, 'messagetype'), 10);
  $setLastMessageType(this$static, mt.value_0);
  msgtext = getHyperLinkedText(curmsg, 'message');
  InvokeMessage(this$static, msgtext, mt.value_0, onSuccess);
}

function $ProcStep(this$static, jo, operation, newStep, onSuccess, onError){
  var curmsg, messages, msgs, n, pa, proc, s, step, urls, ret;
  pa = dynamicCast($get_0(dynamicCast(jo, 5), 'Procedure'), 15);
  proc = dynamicCast($get(pa, 0), 5);
  step = dynamicCast($get_0(proc, 'step'), 10).value_0;
  this$static.lastOperation = operation;
  newStep && (this$static.MsgCounter = 0);
  s = dynamicCast($get_0(proc, 'session'), 10);
  !!s && $setSession(this$static, s.value_0);
  n = dynamicCast($get_0(proc, 'finished'), 27);
  !!n && $setFinished(this$static, n.value_0 == 1);
  n = dynamicCast($get_0(proc, 'spreadsheet'), 27);
  !!n && round_int(n.value_0);
  !!n && $setFinished(this$static, n.value_0 == 1);
  messages = dynamicCast($get_0(proc, 'Message'), 15);
  if (!!messages && messages.jsArray.length > this$static.MsgCounter) {
    curmsg = dynamicCast($get(messages, this$static.MsgCounter), 5);
    this$static.lastResponse = jo;
    $ProcMessage(this$static, curmsg, onSuccess);
    return;
  }
  switch (step) {
    case 'newsaved':
      $NewReport(this$static, proc, onSuccess, onError);
      break;
    case 'input':
      $Input(this$static, proc, onSuccess);
      break;
    case 'displayurl':
      urls = dynamicCast($get_0(proc, 'URL'), 15);
      InvokeDisplayUrl(this$static, urls.jsArray, onSuccess);
      break;
    case 'askprint':
      $AskPrint(this$static, proc, onSuccess);
      break;
    case 'NETLABELSINIT':
    case 'upload':
    case 'download':
    case 'excel':
    case 'savefile':
    case 'movie':
    case 'wizard':
    case 'document':
    case 'GANTT':
    case 'WINDBI':
    case 'EXPLORER':
    case 'PRIVTREE':
    case 'BPM':
    case 'form':
    case 'mailurl':
    case 'internalmail':
    case 'procedure':
    case 'passthru':
    case 'labels':
    case 'synccontacts':
    case 'prexfile':
    case 'OLPORTAL':
    case 'SENDMSG':
    case 'PRINTDLG':
    case 'OPENWORD':
    case 'WORDCONV':
    case 'GTOKENS':
    case 'MSPROJ':
    case 'WORDTMPL':
    case 'SHVAEXEC':
    case 'WINFORM':
    case 'WINPROC':
    case 'WINHTMLH':
    case 'STARSHIP':
      ret = {};
      ret.proc = this$static.GetProc();
      ret.type = 'NotSupported';
      ret.text = 'step ' + step + ' is not supported';
      onError(ret);
      $CancelProcedure(this$static, false, false, null, null);
      break;
    case 'warning':
      this$static.lastResponse = null;
      msgs = dynamicCast($get_0(proc, 'Warning'), 15);
      curmsg = dynamicCast($get(msgs, 0), 5);
      $ProcMessage(this$static, curmsg, onSuccess);
      break;
    case 'BACKGROUND':
      $ProcContinue(this$static, onSuccess, onError);
      break;
    case 'waitprocess':
    case 'waitexecution':
      this$static.waitMS = 400;
      $WaitProcess(this$static, $equals('waitexecution', step), onSuccess, onError);
      break;
    default:InvokeEnd(this$static, onSuccess);
  }
}

function $RefreshSearch(this$static, jo){
  var pa, pr, search, searcharr;
  search = null;
  pa = dynamicCast($get_0(jo, 'Procedure'), 15);
  pr = dynamicCast($get(pa, 0), 5);
  searcharr = dynamicCast($get_0(pr, 'Search'), 15);
  if (searcharr) {
    search = dynamicCast($get(searcharr, 0), 5);
    this$static.SearchCursor = fromDouble(getJSONNumberProperty(search, 'stack_cursor'));
    this$static.SearchStart = fromDouble(getJSONNumberProperty(search, 'stack_stack'));
    $add(this$static.SearchLast, getJSONStringProperty(search, 'stack_last'));
  }
  return search;
}

function $WaitContinue(this$static, jo, onSuccess, onError, operation){
  var pa, proc, step, val;
  this$static.errCount = 0;
  pa = dynamicCast($get_0(dynamicCast(jo, 5), 'Procedure'), 15);
  proc = dynamicCast($get(pa, 0), 5);
  step = dynamicCast($get_0(proc, 'step'), 10).value_0;
  $equals('waitprocess', step) && this$static.waitAutoProgress?(this$static.waitAutoProgress = false):$equals('waitexecution', step) && !this$static.waitAutoProgress && (this$static.waitAutoProgress = true);
  if ($equals('waitprocess', step)) {
    val = dynamicCast($get_0(proc, 'sandglass'), 27).value_0;
    val > 0 && InvokeProgress(this$static, round_int(val), this$static.progressFunc);
  }
   else if (!$equals('waitexecution', step)) {
    $ProcStep(this$static, jo, operation, true, onSuccess, onError);
    return;
  }
  $WaitProcess(this$static, this$static.waitAutoProgress, onSuccess, onError);
}

function $WaitProcess(this$static, autoprogress, onSuccess, onError){
  this$static.waitAutoProgress = autoprogress;
  scheduleFixedDelayImpl(($clinit_SchedulerImpl() , new Proc$5(this$static, this$static, onSuccess, onError)), this$static.waitMS);
  this$static.waitMS = max_0(this$static.waitMS + 200, 5000);
}

function $setFinished(this$static, finished){
  this$static.isFinished = finished;
}

function $setLastMessageType(this$static, type_0){
  this$static.lastMessageType = ($clinit_PriCommon$PriMessageType() , Ok);
  $equals('warning', type_0) && (this$static.lastMessageType = OkCancel);
}

function $setSession(this$static, value_0){
  this$static.privateSession = value_0;
}

function Proc(){
  this.SearchLast = new ArrayList;
  this.inputFields_0 = new HashMap;
  !ExtMessages && (ExtMessages = new HashMap);
}

defineClass(72, 1, {}, Proc);
_.CancelProcedure = function CancelProcedure(onSuccess, onError){
  $CancelProcedure(this, true, this.waitAutoProgress, onSuccess, onError);
}
;
_.DocumentOptions = function DocumentOptions(ok, selectedFormat, pdf, onSuccess, onError){
  ok == 0?$CancelProcedure(this, false, false, onSuccess, onError):$ProcAskPrintOKMobAsync($GetConnection_1(this), this.privateSession, fromInt(selectedFormat), pdf == 1, new Proc$CommonResponse($GetConnection_1(this), this, 'ProcNewReport', onSuccess, onError));
}
;
_.GetProc = function GetProc(){
  return GetProc_0(this);
}
;
_.InputChoose = function InputChoose(ok, selection, onSuccess, onError){
  ok == 0?$CancelProcedure(this, false, false, onSuccess, onError):$ProcChooseFieldsOKMobAsync($GetConnection_1(this), this.privateSession, fromInt(selection), new Proc$CommonResponse($GetConnection_1(this), this, 'ProcChooseFieldsOK', onSuccess, onError));
}
;
_.InputFields = function InputFields(ok, data_0, onSuccess, onError){
  var json;
  if (ok == 0) {
    $CancelProcedure(this, false, false, onSuccess, onError);
  }
   else {
    json = b64encode(JsonToString(data_0));
    $ProcEditFieldsOKMobAsync($GetConnection_1(this), this.privateSession, json, new Proc$CommonResponse($GetConnection_1(this), this, 'ProcEditFieldsOK', onSuccess, onError));
  }
}
;
_.InputHelp = function InputHelp(ok, onSuccess, onError){
  ok == 0?$CancelProcedure(this, false, false, onSuccess, onError):$ProcContinueMobAsync($GetConnection_1(this), this.privateSession, new Proc$CommonResponse($GetConnection_1(this), this, 'ProcContinue', onSuccess, onError));
}
;
_.OpenChoose = function OpenChoose(fieldId, value_0, data_0, onSuccess, onError){
  var field, json, proc;
  field = dynamicCast($get_1(this.inputFields_0, valueOf(fieldId)), 56);
  proc = this;
  if (!field) {
    InvokeError_0(this, 'Field not found: ' + fieldId, false, onError);
  }
   else {
    json = b64encode(JsonToString(data_0));
    $ProcParamChooseMobAsync($GetConnection_1(this), this.privateSession, fromInt(field.zoomtype == ($clinit_ZoomTypes() , Date8_0) || field.zoomtype == Date10_0 || field.zoomtype == Date14_0?-1:fieldId), json, new Proc$4(this, $GetConnection_1(this), proc, onSuccess, fieldId, value_0, json, onError));
  }
}
;
_.ProcContinue = function ProcContinue(onSuccess, onError){
  $ProcContinue(this, onSuccess, onError);
}
;
_.ProcMessageHidden = function ProcMessageHidden(ok, onSuccess, onError){
  if (this.lastMessageType == ($clinit_PriCommon$PriMessageType() , Ok)) {
    if (this.lastResponse) {
      ++this.MsgCounter;
      $ProcStep(this, this.lastResponse, this.lastOperation, false, onSuccess, onError);
    }
     else {
      $ProcContinue(this, onSuccess, onError);
    }
  }
   else 
    ok == 1?$ProcWarningOKMobAsync($GetConnection_1(this), this.privateSession, new Proc$CommonResponse($GetConnection_1(this), this, 'ProcWarningOK', onSuccess, onError)):$CancelProcedure(this, false, false, onSuccess, onError);
}
;
_.ReportOptions = function ReportOptions(ok, selectedFormat, onSuccess, onError){
  ok == 0?$CancelProcedure(this, false, false, onSuccess, onError):$ProcNewReportMobAsync($GetConnection_1(this), this.etype_0, this.ename_0, fromInt(selectedFormat), new Proc$CommonResponse($GetConnection_1(this), this, 'ProcNewReport', onSuccess, onError));
}
;
_.SearchAction = function SearchAction_0(fieldId, value_0, action, data_0, onSuccess, onError){
  var count, from, i, lastval, proc, to;
  proc = this;
  count = this.SearchLast.array.length;
  lastval = '';
  if (action == ($clinit_SearchActions() , Prev).intValue) {
    action = Next.intValue;
    if (count > 0) {
      from = count - 2;
      to = (2 < count?2:count) + (0 > count - 2?0:count - 2);
      for (i = to - 1; i >= from; i--)
        this.SearchLast.remove(i);
    }
    count -= 2;
  }
  action == Next.intValue && count > 0?(lastval = dynamicCastToString($get_2(this.SearchLast, count - 1))):(this.SearchLast.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1));
  $ProcParamSearchMobAsync($GetConnection_1(this), this.privateSession, fromInt(fieldId), fromInt(action), this.SearchCursor, this.SearchStart, lastval, value_0, null, new Proc$3(this, $GetConnection_1(this), proc, onSuccess, onError));
}
;
_.ServerTripCompleted = function ServerTripCompleted_1(sender, e){
  this.isOnServer = false;
}
;
_.SetIsGoneToServer = function SetIsGoneToServer_1(userState){
  if (this.isOnServer)
    return false;
  this.isOnServer = true;
  return true;
}
;
_.getDname = function getDname_1(){
  return this.dname;
}
;
_.MsgCounter = 0;
_.SearchCursor = {l:0, m:0, h:0};
_.SearchStart = {l:0, m:0, h:0};
_.con = null;
_.dname = null;
_.errCount = 0;
_.isFinished = false;
_.isOnServer = false;
_.progressFunc = null;
_.waitAutoProgress = false;
_.waitMS = 0;
var ExtMessages;
var Lcom_priority_app_proc_Proc_2_classLit = createForClass('com.priority.app.proc', 'Proc', 72);
function Proc$1(this$0, $anonymous0, val$onSuccess, val$onError, val$thisProc){
  this.this$01 = this$0;
  this.val$onSuccess3 = val$onSuccess;
  this.val$onError4 = val$onError;
  this.val$thisProc5 = val$thisProc;
  WCFResponse.call(this, $anonymous0);
}

defineClass(142, 12, {}, Proc$1);
_.OnPriError = function OnPriError_19(error, isOnServer){
  InvokeError_0(this.val$thisProc5, error, isOnServer, this.val$onError4);
}
;
_.OnPriResponse = function OnPriResponse_19(response){
  var e, jo;
  try {
    jo = ($clinit_JSONParser() , parse_0(response));
    $ProcStep(this.this$01, jo, 'ProcStart', false, this.val$onSuccess3, this.val$onError4);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeError_0(this.val$thisProc5, e.getMessage(), false, this.val$onError4);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_proc_Proc$1_2_classLit = createForClass('com.priority.app.proc', 'Proc/1', 142);
function Proc$2(this$0, $anonymous0, val$onSuccess, val$onError, val$thisProc){
  this.this$01 = this$0;
  this.val$onSuccess3 = val$onSuccess;
  this.val$onError4 = val$onError;
  this.val$thisProc5 = val$thisProc;
  WCFResponse.call(this, $anonymous0);
}

defineClass(143, 12, {}, Proc$2);
_.OnPriError = function OnPriError_20(error, isOnServer){
  InvokeError_0(this.val$thisProc5, error, isOnServer, this.val$onError4);
}
;
_.OnPriResponse = function OnPriResponse_20(response){
  var e, jo;
  try {
    jo = ($clinit_JSONParser() , parse_0(response));
    $ProcStep(this.this$01, jo, 'ProcStartActivate', false, this.val$onSuccess3, this.val$onError4);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeError_0(this.val$thisProc5, e.getMessage(), false, this.val$onError4);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_proc_Proc$2_2_classLit = createForClass('com.priority.app.proc', 'Proc/2', 143);
function Proc$3(this$0, $anonymous0, val$proc, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$proc3 = val$proc;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(144, 12, {}, Proc$3);
_.OnPriError = function OnPriError_21(error, isOnServer){
  InvokeError_0(this.val$proc3, error, isOnServer, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_21(response){
  var jo, search;
  jo = ($clinit_JSONParser() , dynamicCast(parse_0(response), 5));
  search = $RefreshSearch(this.this$01, jo);
  search?InvokeSearch(this.val$proc3, search.jsObject, this.val$onSuccess4):InvokeError_0(this.val$proc3, 'Error in choose/search', this.this$01.isOnServer, this.val$onError5);
}
;
var Lcom_priority_app_proc_Proc$3_2_classLit = createForClass('com.priority.app.proc', 'Proc/3', 144);
function Proc$4(this$0, $anonymous0, val$proc, val$onSuccess, val$fieldId, val$value, val$json, val$onError){
  this.this$01 = this$0;
  this.val$proc3 = val$proc;
  this.val$onSuccess4 = val$onSuccess;
  this.val$fieldId5 = val$fieldId;
  this.val$value6 = val$value;
  this.val$json7 = val$json;
  this.val$onError8 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(145, 12, {}, Proc$4);
_.OnPriError = function OnPriError_22(error, isOnServer){
  InvokeError_0(this.val$proc3, error, isOnServer, this.val$onError8);
}
;
_.OnPriResponse = function OnPriResponse_22(response){
  var choose, choosearr, chooselines, jo, pa, pr;
  chooselines = null;
  choose = null;
  jo = ($clinit_JSONParser() , parse_0(response));
  pa = dynamicCast($get_0(dynamicCast(jo, 5), 'Procedure'), 15);
  pr = dynamicCast($get(pa, 0), 5);
  choosearr = dynamicCast($get_0(pr, 'Choose'), 15);
  if (choosearr) {
    choose = dynamicCast($get(choosearr, 0), 5);
    !!choose && (chooselines = dynamicCast($get_0(choose, 'ChooseLine'), 15));
  }
  if (!!chooselines && chooselines.jsArray.length > 0) {
    InvokeChoose(this.val$proc3, choose.jsObject, this.val$onSuccess4);
  }
   else {
    this.this$01.SearchLast.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
    $ProcParamSearchMobAsync($GetConnection_1(this.this$01), this.this$01.privateSession, fromInt(this.val$fieldId5), fromInt(($clinit_SearchActions() , Start).intValue), {l:0, m:0, h:0}, {l:0, m:0, h:0}, '', this.val$value6, this.val$json7, new Proc$4$1(this, $GetConnection_1(this.this$01), this.val$proc3, this.val$onSuccess4, this.val$onError8));
  }
}
;
_.val$fieldId5 = 0;
var Lcom_priority_app_proc_Proc$4_2_classLit = createForClass('com.priority.app.proc', 'Proc/4', 145);
function Proc$4$1(this$1, $anonymous0, val$proc, val$onSuccess, val$onError){
  this.this$11 = this$1;
  this.val$proc3 = val$proc;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(146, 12, {}, Proc$4$1);
_.OnPriError = function OnPriError_23(error, isOnServer){
  InvokeError_0(this.val$proc3, error, isOnServer, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_23(response){
  var jo, search;
  jo = ($clinit_JSONParser() , dynamicCast(parse_0(response), 5));
  search = $RefreshSearch(this.this$11.this$01, jo);
  search?InvokeSearch(this.val$proc3, search.jsObject, this.val$onSuccess4):InvokeError_0(this.val$proc3, 'Error in choose/search', this.this$11.this$01.isOnServer, this.val$onError5);
}
;
var Lcom_priority_app_proc_Proc$4$1_2_classLit = createForClass('com.priority.app.proc', 'Proc/4/1', 146);
function Proc$5(this$0, val$thisProc, val$onSuccess, val$onError){
  this.this$01 = this$0;
  this.val$thisProc2 = val$thisProc;
  this.val$onSuccess3 = val$onSuccess;
  this.val$onError4 = val$onError;
}

defineClass(147, 1, {}, Proc$5);
var Lcom_priority_app_proc_Proc$5_2_classLit = createForClass('com.priority.app.proc', 'Proc/5', 147);
function Proc$CommonResponse(con, proc, operation, onSuccess, onError){
  WCFResponse.call(this, con);
  this.proc_0 = proc;
  this.operation = operation;
  this.onSuccess = onSuccess;
  this.onError = onError;
}

defineClass(26, 12, {}, Proc$CommonResponse);
_.OnPriError = function OnPriError_24(error, isOnServer){
  !!this.onError && InvokeError_0(this.proc_0, error, isOnServer, this.onError);
}
;
_.OnPriResponse = function OnPriResponse_24(response){
  var e, jo;
  if (this.onSuccess) {
    try {
      jo = ($clinit_JSONParser() , parse_0(response));
      $ProcStep(this.proc_0, jo, this.operation, false, this.onSuccess, this.onError);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        InvokeError_0(this.proc_0, e.getMessage(), false, this.onError);
      }
       else 
        throw unwrap_5($e0);
    }
  }
}
;
var Lcom_priority_app_proc_Proc$CommonResponse_2_classLit = createForClass('com.priority.app.proc', 'Proc/CommonResponse', 26);
function Proc$InputField(zoomtype){
  this.zoomtype = zoomtype;
}

defineClass(56, 1, {56:1}, Proc$InputField);
var Lcom_priority_app_proc_Proc$InputField_2_classLit = createForClass('com.priority.app.proc', 'Proc/InputField', 56);
function $OnPriError_5(this$static){
  if (this$static.proc_0.errCount >= 100) {
    $CancelProcedure(this$static.proc_0, true, this$static.proc_0.waitAutoProgress, this$static.onSuccess, this$static.onError);
  }
   else {
    ++this$static.proc_0.errCount;
    $WaitProcess(this$static.proc_0, this$static.proc_0.waitAutoProgress, this$static.onSuccess, this$static.onError);
  }
}

function Proc$WaitProcessResponse(con, proc, operation, onSuccess, onError){
  WCFResponse.call(this, con);
  this.proc_0 = proc;
  this.operation = operation;
  this.onSuccess = onSuccess;
  this.onError = onError;
}

defineClass(50, 12, {}, Proc$WaitProcessResponse);
_.OnPriError = function OnPriError_25(error, isOnServer){
  $OnPriError_5(this);
}
;
_.OnPriResponse = function OnPriResponse_25(response){
  var jo;
  if ($equals('ProcContinue', this.operation) || $equals('ProcCheckExecution', this.operation)) {
    jo = ($clinit_JSONParser() , parse_0(response));
    $WaitContinue(this.proc_0, jo, this.onSuccess, this.onError, this.operation);
  }
}
;
var Lcom_priority_app_proc_Proc$WaitProcessResponse_2_classLit = createForClass('com.priority.app.proc', 'Proc/WaitProcessResponse', 50);
function GetProc_0(thisProc){
  var proc = thisProc.proc_0;
  if (proc)
    return proc;
  proc = {};
  proc.message = function(ok, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.ProcMessageHidden(ok, onSuccess_0, onError_0);
    else {
      return new Promise(function(onSuccess, onError){
        thisProc.ProcMessageHidden(ok, onSuccess, onError);
      }
      );
    }
  }
  ;
  proc.reportOptions = function(ok, selectedFormat, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.ReportOptions(ok, selectedFormat, onSuccess_0, onError_0);
    else {
      return new Promise(function(onSuccess, onError){
        thisProc.ReportOptions(ok, selectedFormat, onSuccess, onError);
      }
      );
    }
  }
  ;
  proc.documentOptions = function(ok, selectedFormat, pdf, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.DocumentOptions(ok, selectedFormat, pdf, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.DocumentOptions(ok, selectedFormat, pdf, onSuccess, onError);
      }
      );
  }
  ;
  proc.inputFields = function(ok, data_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.InputFields(ok, data_0, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.InputFields(ok, data_0, onSuccess, onError);
      }
      );
  }
  ;
  proc.inputOptions = function(ok, data_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.InputChoose(ok, data_0, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.InputChoose(ok, data_0, onSuccess, onError);
      }
      );
  }
  ;
  proc.inputHelp = function(ok, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.InputHelp(ok, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.InputHelp(ok, onSuccess, onError);
      }
      );
  }
  ;
  proc.continueProc = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.ProcContinue(onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.ProcContinue(onSuccess, onError);
      }
      );
  }
  ;
  proc.cancel = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.CancelProcedure(onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.CancelProcedure(onSuccess, onError);
      }
      );
  }
  ;
  proc.choose = function(fieldId, value_0, data_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.OpenChoose(fieldId, value_0, data_0, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.OpenChoose(fieldId, value_0, data_0, onSuccess, onError);
      }
      );
  }
  ;
  proc.searchAction = function(fieldId, value_0, action, data_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.SearchAction(fieldId, value_0, action, data_0, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.SearchAction(fieldId, value_0, action, data_0, onSuccess, onError);
      }
      );
  }
  ;
  thisProc.proc_0 = proc;
  return proc;
}

function InvokeChoose(thisProc, jo, onSuccess){
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'Choose';
  delete jo.chooseid;
  delete jo.sortby;
  ret.Choose = jo;
  onSuccess(ret);
}

function InvokeDisplayUrl(thisProc, urls, onSuccess){
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'displayUrl';
  ret.Urls = urls;
  onSuccess(ret);
}

function InvokeDocumentOptions(thisProc, wantsPdf, formats, onSuccess){
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'documentOptions';
  ret.formats = formats;
  ret.pdf = wantsPdf?1:0;
  onSuccess(ret);
}

function InvokeEnd(thisProc, onSuccess){
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'end';
  onSuccess(ret);
}

function InvokeError_0(thisProc, message, isOnServer, onError){
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = isOnServer?'ServerBusy':'Error';
  ret.text = message;
  onError(ret);
}

function InvokeInput(thisProc, inputObj, onSuccess){
  var ret = {};
  ret.proc = thisProc.GetProc();
  var type_0 = 'inputHelp';
  inputObj.EditFields?(type_0 = 'inputFields'):inputObj.ChooseFields && (type_0 = 'inputOptions');
  ret.type = type_0;
  ret.input = inputObj;
  onSuccess(ret);
}

function InvokeMessage(thisProc, message, messageType, onSuccess){
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'message';
  ret.message = message;
  ret.messagetype = messageType;
  onSuccess(ret);
}

function InvokeProgress(thisProc, progress, onProgress){
  onProgress && onProgress(thisProc.GetProc(), progress);
}

function InvokeReportOptions(thisProc, formats, onSuccess){
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'reportOptions';
  ret.formats = formats;
  onSuccess(ret);
}

function InvokeSearch(thisProc, jo, onSuccess){
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'Search';
  delete jo.stack_last;
  delete jo.stack_cursor;
  delete jo.stack_start;
  delete jo.start;
  ret.Search = jo;
  onSuccess(ret);
}

function ProcStart(ename, type_0, progressFunc, dname, onSuccess, onError){
  var p;
  p = new Proc;
  p.progressFunc = progressFunc;
  p.dname = dname;
  p.ename_0 = ename;
  p.etype_0 = type_0;
  $ProcStartMobAsync($GetConnection_1(p), type_0, ename, !!ExtMessages && ExtMessages.size_0 != 0, new Proc$1(p, $GetConnection_1(p), onSuccess, onError, p));
}

function ProcStartActivate(ename, type_0, link_0, progressFunc, dname, onSuccess, onError){
  var p, lnk;
  p = new Proc;
  p.progressFunc = progressFunc;
  p.dname = dname;
  lnk = link_0;
  p.ename_0 = ename;
  p.etype_0 = type_0;
  $ProcStartActivateMobAsync($GetConnection_1(p), type_0, ename, lnk.table, lnk.link, lnk.linkid, !!ExtMessages && ExtMessages.size_0 != 0, new Proc$2(p, $GetConnection_1(p), onSuccess, onError, p));
}

function publishAPIfuncProc(){
  $wnd.procStart = function(ename, type_0, onProgress, dname, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0) {
      ProcStart(ename, type_0, onProgress, dname, onSuccess_0, onError_0);
    }
     else 
      return new Promise(function(onSuccess, onError){
        ProcStart(ename, type_0, onProgress, dname, onSuccess, onError);
      }
      );
  }
  ;
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(65, 1, {});
_.toString$ = function toString_11(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 65);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(89, 19, $intern_1, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 89);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(46, 19, $intern_1, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 46);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE_0 = new Boolean_0(false);
  TRUE_0 = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(39, 1, {4:1, 39:1, 25:1}, Boolean_0);
_.equals$ = function equals_5(o){
  return instanceOf(o, 39) && dynamicCast(o, 39).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_6(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_12(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE_0, TRUE_0;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 39);
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(36, 19, $intern_1, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 36);
defineClass(54, 1, {4:1, 54:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 54);
function Double(value_0){
  this.value_0 = value_0;
}

defineClass(47, 54, {4:1, 25:1, 47:1, 54:1}, Double);
_.equals$ = function equals_6(o){
  return instanceOf(o, 47) && dynamicCast(o, 47).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_7(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 47);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(35, 19, $intern_1, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 35);
function IllegalStateException(){
  RuntimeException_0.call(this, "Can't overwrite cause");
}

defineClass(161, 19, $intern_1, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 161);
function IndexOutOfBoundsException(message){
  RuntimeException_0.call(this, message);
}

defineClass(57, 19, $intern_1, IndexOutOfBoundsException);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 57);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(23, 54, {4:1, 25:1, 23:1, 54:1}, Integer);
_.equals$ = function equals_7(o){
  return instanceOf(o, 23) && dynamicCast(o, 23).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_8(){
  return this.value_0;
}
;
_.toString$ = function toString_15(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 23);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_4, 23, 256, 0, 1);
}

var boxedValues_0;
function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0){
  return x_0 < 5?x_0:5;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(34, 19, $intern_1, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 34);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(31, 1, {4:1, 31:1}, StackTraceElement);
_.equals$ = function equals_8(other){
  var st;
  if (instanceOf(other, 31)) {
    st = dynamicCast(other, 31);
    return this.lineNumber == st.lineNumber && equals_19(this.methodName, st.methodName) && equals_19(this.className, st.className) && equals_19(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_9(){
  return hashCode_15(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_16(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 31);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var hex = toUnsignedRadixString(from, 16);
  var regex = '\\u' + '0000'.substring(hex.length) + hex;
  return this$static.replace(RegExp(regex, 'g'), String.fromCharCode(to));
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $startsWith(this$static, prefix){
  return $equals(__substr(this$static, 0, prefix.length), prefix);
}

function $substring(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return valueOf_0(hiSurrogate) + valueOf_0(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function valueOf_0(x_0){
  return String.fromCharCode(x_0);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(32, 65, {194:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 32);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(42, 19, $intern_1, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 42);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

defineClass(181, 1, {});
_.contains = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toString$ = function toString_17(){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 181);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); $hasNext(iter);) {
    entry = (checkStructuralChange(iter.this$01, iter) , checkCriticalElement($hasNext(iter)) , dynamicCast(iter.current.next_0(), 17));
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(180, 1, {52:1});
_.equals$ = function equals_9(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 52)) {
    return false;
  }
  otherMap = dynamicCast(obj, 52);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 17);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_0(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_16(new AbstractHashMap$EntrySet(this));
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.size_1 = function size_1(){
  return (new AbstractHashMap$EntrySet(this)).this$01.size_0;
}
;
_.toString$ = function toString_18(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next_0(), 17));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_2(this, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_2(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 180);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_1(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined);
}

function $put_0(this$static, key, value_0){
  return $put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(84, 180, {52:1});
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_1(key){
  return $get_1(this, key);
}
;
_.put = function put_0(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 84);
defineClass(182, 181, $intern_11);
_.equals$ = function equals_10(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 45)) {
    return false;
  }
  other = dynamicCast(o, 45);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_11(){
  return hashCode_16(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 182);
function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(33, 182, $intern_11, AbstractHashMap$EntrySet);
_.contains = function contains_0(o){
  if (instanceOf(o, 17)) {
    return $containsEntry(this.this$01, dynamicCast(o, 17));
  }
  return false;
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 33);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , dynamicCast(this$static.current.next_0(), 17);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(40, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext(){
  return $hasNext(this);
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 40);
defineClass(183, 181, {28:1});
_.add_0 = function add_1(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_2(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_11(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 28)) {
    return false;
  }
  other = dynamicCast(o, 28);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_17(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 183);
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(69, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_0(){
  return this.i < this.this$01.size_1();
}
;
_.next_0 = function next_1(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 69);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(87, 182, $intern_11, AbstractMap$1);
_.contains = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_2(){
  return $iterator(this);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 87);
function $next_0(this$static){
  var entry;
  entry = $next(this$static.val$outerIter2);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(88, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_1(){
  return $hasNext(this.val$outerIter2);
}
;
_.next_0 = function next_2(){
  return $next_0(this);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 88);
defineClass(85, 1, $intern_12);
_.equals$ = function equals_12(other){
  var entry;
  if (!instanceOf(other, 17)) {
    return false;
  }
  entry = dynamicCast(other, 17);
  return equals_19(this.key, entry.getKey()) && equals_19(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_23(this.key) ^ hashCode_23(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_19(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 85);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(86, 85, $intern_12, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 86);
defineClass(184, 1, $intern_12);
_.equals$ = function equals_13(other){
  var entry;
  if (!instanceOf(other, 17)) {
    return false;
  }
  entry = dynamicCast(other, 17);
  return equals_19(this.getKey(), entry.getKey()) && equals_19(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_14(){
  return hashCode_23(this.getKey()) ^ hashCode_23(this.getValue());
}
;
_.toString$ = function toString_20(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 184);
defineClass(193, 183, {28:1});
_.add_0 = function add_3(index_0, element){
  var iter;
  iter = $listIterator(this, index_0);
  $addNode(iter.this$01, element, iter.currentNode.prev, iter.currentNode);
  ++iter.currentIndex;
  iter.lastNode = null;
}
;
_.get_1 = function get_2(index_0){
  var iter;
  iter = $listIterator(this, index_0);
  try {
    return checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 59)) {
      throw new IndexOutOfBoundsException("Can't get element " + index_0);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.iterator = function iterator_3(){
  return $listIterator(this, 0);
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 193);
function $add(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_2(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_19(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $toArray(this$static, out){
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(38, 183, $intern_13, ArrayList);
_.add_0 = function add_4(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice_0(this.array, index_0, 0, o);
}
;
_.add_1 = function add_5(o){
  return $add(this, o);
}
;
_.contains = function contains_2(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return $get_2(this, index_0);
}
;
_.remove = function remove(index_0){
  return $remove(this, index_0);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 38);
function hashCode_15(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_16(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_17(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function unmodifiableList(list){
  return instanceOf(list, 63)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(67, 1, {});
_.add_1 = function add_6(o){
  throw new UnsupportedOperationException;
}
;
_.iterator = function iterator_4(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_6(){
  return this.coll.size_1();
}
;
_.toString$ = function toString_21(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 67);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(98, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_2(){
  return this.it.hasNext();
}
;
_.next_0 = function next_3(){
  return this.it.next_0();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 98);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(68, 67, {28:1}, Collections$UnmodifiableList);
_.equals$ = function equals_14(o){
  return this.list.equals$(o);
}
;
_.get_1 = function get_4(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode$ = function hashCode_18(){
  return this.list.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 68);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(93, 1, {52:1}, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_0(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_15(o){
  return this.map_0.equals$(o);
}
;
_.get_0 = function get_5(key){
  return this.map_0.get_0(key);
}
;
_.hashCode$ = function hashCode_19(){
  return this.map_0.hashCode$();
}
;
_.put = function put_1(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_7(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_22(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 93);
defineClass(94, 67, $intern_11);
_.equals$ = function equals_16(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_20(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 94);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(95, 94, $intern_11, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_5(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 95);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(99, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_3(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_4(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(this.val$it2.next_0(), 17));
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 99);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(96, 1, $intern_12, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_17(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_0(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_21(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_0(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_23(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 96);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(97, 68, {28:1, 63:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 97);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(162, 19, $intern_1, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 162);
function $toString_3(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_0(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(51, 1, {4:1, 25:1, 51:1}, Date_0);
_.equals$ = function equals_18(obj){
  return instanceOf(obj, 51) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 51).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_22(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_24(){
  return $toString_3(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 51);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

defineClass(9, 84, {4:1, 52:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 9);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, !key?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_0(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_0(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(71, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 71);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_4, 17, 0, 0, 1);
}

defineClass(110, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_4(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_5(){
  return checkCriticalElement($hasNext_0(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 110);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(108, 71, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 108);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(109, 38, $intern_13, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove = function remove_0(index_0){
  var removed;
  return removed = dynamicCast($remove(this, index_0), 17) , $remove_0(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 109);
function InternalJsMapFactory(){
}

defineClass(105, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 105);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(107, 105, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 107);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(106, 105, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 106);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_0(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_1(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_0(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(55, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_2 = function get_6(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_2(key, value_0){
  return $put_2(this, key, value_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 55);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(103, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_5(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_6(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 103);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(70, 184, $intern_12, InternalJsStringMap$2);
_.getKey = function getKey_1(){
  return this.val$key2;
}
;
_.getValue = function getValue_1(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_1(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 70);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(100, 55, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_7(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_3(key, value_0){
  return $put_2(this, ':' + key, value_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 100);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(102, 38, $intern_13, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove = function remove_1(index_0){
  var removed;
  return removed = dynamicCast($remove(this, index_0), 17) , $remove_1(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 102);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(101, 55, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 101);
function $addFirst(this$static, o){
  $addNode(this$static, o, this$static.header, this$static.header.next);
}

function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next = next;
  next.prev = prev.next = node;
  ++this$static.size_0;
}

function $listIterator(this$static, index_0){
  var i, node;
  checkPositionIndex(index_0, this$static.size_0);
  if (index_0 >= this$static.size_0 >> 1) {
    node = this$static.tail;
    for (i = this$static.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header.next;
    for (i = 0; i < index_0; ++i) {
      node = node.next;
    }
  }
  return new LinkedList$ListIteratorImpl(this$static, index_0, node);
}

function $offerLast(this$static, e){
  $addNode(this$static, e, this$static.tail.prev, this$static.tail);
  return true;
}

function $pollFirst(this$static){
  return this$static.size_0 == 0?null:(checkCriticalElement(this$static.size_0 != 0) , $removeNode(this$static, this$static.header.next));
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.next = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next = null;
  this.size_0 = 0;
}

defineClass(158, 193, {4:1, 28:1}, LinkedList);
_.add_1 = function add_7(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.size_1 = function size_8(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 158);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(159, 1, {}, LinkedList$ListIteratorImpl);
_.hasNext = function hasNext_6(){
  return this.currentNode != this.this$01.tail;
}
;
_.next_0 = function next_7(){
  return checkCriticalElement(this.currentNode != this.this$01.tail) , this.lastNode = this.currentNode , this.currentNode = this.currentNode.next , ++this.currentIndex , this.lastNode.value_0;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 159);
function LinkedList$Node(){
}

defineClass(58, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 58);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(59, 19, {4:1, 6:1, 7:1, 59:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 59);
function equals_19(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_23(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

defineClass(188, 1, $intern_4);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue_0 = function intValue(){
  return -1;
}
;
_.toString$ = function toString_25(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 188);
function Level$LevelAll(){
}

defineClass(112, 188, $intern_4, Level$LevelAll);
_.getName = function getName_1(){
  return 'ALL';
}
;
_.intValue_0 = function intValue_0(){
  return -2147483648;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 112);
function Level$LevelConfig(){
}

defineClass(113, 188, $intern_4, Level$LevelConfig);
_.getName = function getName_2(){
  return 'CONFIG';
}
;
_.intValue_0 = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 113);
function Level$LevelFine(){
}

defineClass(114, 188, $intern_4, Level$LevelFine);
_.getName = function getName_3(){
  return 'FINE';
}
;
_.intValue_0 = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 114);
function Level$LevelFiner(){
}

defineClass(115, 188, $intern_4, Level$LevelFiner);
_.getName = function getName_4(){
  return 'FINER';
}
;
_.intValue_0 = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 115);
function Level$LevelFinest(){
}

defineClass(116, 188, $intern_4, Level$LevelFinest);
_.getName = function getName_5(){
  return 'FINEST';
}
;
_.intValue_0 = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 116);
function Level$LevelInfo(){
}

defineClass(117, 188, $intern_4, Level$LevelInfo);
_.getName = function getName_6(){
  return 'INFO';
}
;
_.intValue_0 = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 117);
function Level$LevelOff(){
}

defineClass(118, 188, $intern_4, Level$LevelOff);
_.getName = function getName_7(){
  return 'OFF';
}
;
_.intValue_0 = function intValue_6(){
  return 2147483647;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 118);
function Level$LevelSevere(){
}

defineClass(119, 188, $intern_4, Level$LevelSevere);
_.getName = function getName_8(){
  return 'SEVERE';
}
;
_.intValue_0 = function intValue_7(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 119);
function Level$LevelWarning(){
}

defineClass(120, 188, $intern_4, Level$LevelWarning);
_.getName = function getName_9(){
  return 'WARNING';
}
;
_.intValue_0 = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 120);
function $addLoggerImpl(this$static, logger){
  $putStringValue(this$static.loggerMap, logger.impl.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = dynamicCast($getStringValue(this$static.loggerMap, name_0), 48);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = newLogger.impl.name_0;
    parentName = $substring(name_1, 0, max_0(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $setParent_0(newLogger, $ensureLogger(this$static, parentName));
    $putStringValue(this$static.loggerMap, newLogger.impl.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton) {
    singleton = new LogManager;
    rootLogger = new Logger('');
    $setLevel_1(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(104, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 104);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(level, msg){
  this.level_0 = level;
  this.msg = msg;
  this.millis = fromDouble(now_1());
}

defineClass(150, 1, $intern_4, LogRecord);
_.loggerName = '';
_.millis = {l:0, m:0, h:0};
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 150);
function $log_1(this$static, level, msg){
  $log(this$static.impl, level, msg, null);
}

function $log_2(this$static, level, msg, thrown){
  $log(this$static.impl, level, msg, thrown);
}

function $setLevel_1(this$static, newLevel){
  $setLevel_0(this$static.impl, newLevel);
}

function $setParent_0(this$static, newParent){
  $setParent(this$static.impl, newParent);
}

function Logger(name_0){
  this.impl = new LoggerImplRegular;
  $setName(this.impl, name_0);
}

function getLogger(name_0){
  new LoggerImplRegular;
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(48, 1, {48:1}, Logger);
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 48);
var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 169), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 171), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 174), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=priorityapp-0.js

