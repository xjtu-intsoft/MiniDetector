     var __subPageFrameStartTime__ = __subPageFrameStartTime__ || Date.now();      var __webviewId__ = __webviewId__;      var __wxAppCode__= __wxAppCode__ || {};      var __WXML_GLOBAL__= __WXML_GLOBAL__ || {entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};      var __vd_version_info__=__vd_version_info__||{};          var __pluginFrameStartTime_wxa75efa648b60994b__ = Date.now();      var __mainPageFrameReady__ = window.__mainPageFrameReady__ || function(){};      var __webviewId__ = __webviewId__;      var __wxAppCode__= __wxAppCode__ || {};      var __WXML_GLOBAL__= __WXML_GLOBAL__ || {entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};      (function(){var __vd_version_info__=__vd_version_info__||{};
      /*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wxa75efa648b60994b=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wxa75efa648b60994b:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b || [];
function gz$gwx_wxa75efa648b60994b_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'mod_player '],[[2,'?:'],[[7],[3,'isHiddenWithVoice']],[1,'hidden_with_voice'],[1,'']]])
Z([[7],[3,'isHiddenContainer']])
Z([a,[3,'width: '],[[7],[3,'width']],[3,'; height: '],[[7],[3,'height']]])
Z([[7],[3,'autoplay']])
Z([3,'__onTvpEnded'])
Z([3,'_onEnterPictureInPicture'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'_onLeavePictureInPicture'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpTimeupdate'])
Z([3,'__onTvpWaiting'])
Z([3,'player_video'])
Z([[2,'!'],[[7],[3,'tvpIsAd']]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[7],[3,'enableAutoRotation']])
Z([[7],[3,'enableDanmu']])
Z([[2,'||'],[[7],[3,'isHiddenVideo']],[[2,'=='],[[7],[3,'tvpState']],[1,'error']]])
Z([[7],[3,'playerid']])
Z([[7],[3,'pictureInPictureMode']])
Z([[7],[3,'poster']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showScreenLockButton']])
Z([[7],[3,'tvpUrl']])
Z([[7],[3,'title']])
Z([[7],[3,'getDataError']])
Z([3,'tips'])
Z([3,'tips_center'])
Z([a,[3,'获取数据失败-('],[[7],[3,'errCode']],[3,')']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isStopPoll']]],[[2,'||'],[[7],[3,'isBefore']],[[7],[3,'isAfter']]]])
Z(z[28])
Z([[7],[3,'isBefore']])
Z(z[29])
Z([a,[[7],[3,'beforeText']]])
Z([[7],[3,'isAfter']])
Z(z[29])
Z([a,[[7],[3,'afterText']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
}
function gz$gwx_wxa75efa648b60994b_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'mod_player '],[[2,'?:'],[[7],[3,'isHiddenWithVoice']],[1,'hidden_with_voice'],[1,'']]])
Z([[7],[3,'isHiddenContainer']])
Z([a,[3,'width: '],[[7],[3,'width']],[3,'; height: '],[[7],[3,'height']]])
Z([[7],[3,'adUnitId']])
Z([[7],[3,'autoPauseIfNavigate']])
Z([[7],[3,'autoPauseIfOpenNative']])
Z([[7],[3,'autoplay']])
Z([3,'_onTvpControlstoggle'])
Z([3,'__onTvpEnded'])
Z([3,'_onEnterPictureInPicture'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'_onLeavePictureInPicture'])
Z([3,'_onTvpLoadedmetadata'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpProgress'])
Z([3,'__onTvpTimeupdate'])
Z([3,'__onTvpWaiting'])
Z([3,'player_video'])
Z([[2,'!'],[[2,'==='],[[7],[3,'controls']],[1,false]]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'direction']],[[2,'-'],[1,1]]],[1,90],[[7],[3,'direction']]])
Z([[7],[3,'enableAutoRotation']])
Z([[7],[3,'enableDanmu']])
Z([[7],[3,'enablePlayGesture']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,false],[[7],[3,'enableProgressGesture']]])
Z([[2,'||'],[[7],[3,'isHiddenVideo']],[[2,'=='],[[7],[3,'tvpState']],[1,'error']]])
Z([[7],[3,'playerid']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,0],[[7],[3,'initialTime']]])
Z([[7],[3,'loop']])
Z([[7],[3,'muted']])
Z([[7],[3,'objectFit']])
Z([[7],[3,'pictureInPictureMode']])
Z([[7],[3,'playBtnPosition']])
Z([[2,'?:'],[[7],[3,'usePoster']],[[2,'||'],[[7],[3,'poster']],[[2,'?:'],[[7],[3,'formattedVid']],[[2,'+'],[[2,'+'],[1,'http://shp.qpic.cn/qqvideo/0/'],[[7],[3,'formattedVid']]],[1,'/0']],[1,'']]],[1,'']])
Z([[2,'||'],[[7],[3,'posterForCrawler']],[[2,'?:'],[[7],[3,'formattedVid']],[[2,'+'],[[2,'+'],[1,'http://shp.qpic.cn/qqvideo/0/'],[[7],[3,'formattedVid']]],[1,'/0']],[1,'']]])
Z([[7],[3,'showCastingButton']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showFullscreenBtn']])
Z([[7],[3,'showMuteBtn']])
Z([[7],[3,'showPlayBtn']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'showProgress']]])
Z([[7],[3,'showScreenLockButton']])
Z([[7],[3,'tvpUrl']])
Z([[7],[3,'title']])
Z([[2,'||'],[[7],[3,'pageGesture']],[[7],[3,'vslideGesture']]])
Z([[7],[3,'vslideGestureInFullscreen']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isQB']]],[[7],[3,'tvpIsAd']]],[[2,'>'],[[7],[3,'progressSkipTime']],[[2,'-'],[1,1]]]])
Z([a,[3,'mod_skipad '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCastingButton']],[[7],[3,'isSupportCasting']]],[1,'mod_skipad_with_casting'],[1,'']]])
Z([[2,'!'],[[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]]])
Z([3,'progress ad_common'])
Z([a,[[2,'-'],[[2,'-'],[[7],[3,'progressSkipTime']],[[7],[3,'progressBaseTime']]],[[7],[3,'progressTime']]]])
Z(z[51])
Z([3,'skipbtn disabled ad_common'])
Z([a,[3,'秒'],[[7],[3,'adJumpText']]])
Z([[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]])
Z([3,'skipAd'])
Z([3,'skipbtn ad_common'])
Z([a,[[7],[3,'adCloseText']]])
Z([[2,'!'],[[7],[3,'isSupportControlsToggle']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'fullscreen']]],[[2,'!'],[[7],[3,'isHideFullscreenBtn']]]])
Z([a,[3,'player_control_tab '],[[2,'?:'],[[2,'&&'],[[2,'||'],[[7],[3,'showControlBtn']],[[2,'!'],[[7],[3,'isPlaying']]]],[[2,'&&'],[[2,'!'],[[7],[3,'showHDSelector']]],[[2,'!'],[[7],[3,'showBrightSelector']]]]],[1,''],[1,'hidden']],[3,'  '],[[2,'?:'],[[2,'!'],[[7],[3,'isIpx']]],[1,''],[1,'x']],[3,'   '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'isIpx']],[[7],[3,'showCastingButton']]],[[7],[3,'isSupportCasting']]],[1,'x_with_casting'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCastingButton']],[[7],[3,'isSupportCasting']]],[1,'player_control_tab_with_casting'],[1,'']]])
Z([3,'__onTvpShowBright'])
Z([a,[3,'player_control_item '],[[2,'?:'],[[2,'&&'],[[7],[3,'showCastingButton']],[[7],[3,'isSupportCasting']]],[1,'player_control_item_with_casting'],[1,'']]])
Z([3,'亮度'])
Z([[2,'!'],[[2,'!'],[[7],[3,'formats_selected']]]])
Z([3,'__onTvpShowHD'])
Z([a,z[65][1],z[65][2]])
Z([a,[[7],[3,'formats_selected']]])
Z(z[62])
Z([a,z[63][1],[[2,'?:'],[[7],[3,'isControlsShow']],[1,''],[1,'hidden']],z[63][3],z[63][4],z[63][5],z[63][6],z[63][7],z[63][8]])
Z(z[64])
Z([a,z[65][1],z[65][2]])
Z(z[66])
Z(z[67])
Z(z[68])
Z([a,z[65][1],z[65][2]])
Z([a,z[70][1]])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[2,'||'],[[7],[3,'showHDSelector']],[[7],[3,'showBrightSelector']]]])
Z([3,'player_mask_buttons'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]],[[7],[3,'formats']]],[[6],[[7],[3,'formats']],[3,'length']]])
Z([3,'__onTvpCloseHD'])
Z([3,'player_hd_buttons'])
Z([3,'player_hd_pro'])
Z([3,'item'])
Z([[7],[3,'formats']])
Z([3,'name'])
Z([3,'selectHD'])
Z([a,[3,'player_hd_item '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'player_hd_item_current'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([3,'player'])
Z([[6],[[7],[3,'item']],[3,'selected']])
Z([3,'player_hd_text'])
Z([a,[[6],[[7],[3,'item']],[3,'cname']]])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showBrightSelector']]])
Z([3,'__onTvpCloseBright'])
Z([3,'player_bright_buttons'])
Z([3,'player_bright_pic'])
Z([3,'//puui.qpic.cn/vupload/0/20190103_icon_light%403x.png/0'])
Z([3,'player_bright_text'])
Z(z[66])
Z([3,'player_bright_pro'])
Z([[7],[3,'bright']])
Z([3,'index'])
Z([a,[3,'player_bright_pro_item '],[[2,'?:'],[[2,'>='],[[7],[3,'currentBright']],[[6],[[7],[3,'item']],[3,'val']]],[1,'player_bright_pro_item_current'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'val']])
Z([[7],[3,'index']])
Z([3,'setBright'])
Z([3,'player_bright_btn player_bright_minus'])
Z([3,'0'])
Z([3,'player_bright_btn_w'])
Z(z[109])
Z([3,'player_bright_btn player_bright_add'])
Z([3,'1'])
Z(z[112])
Z([3,'player_bright_btn_h'])
Z([[7],[3,'isUsePlayerErrorTips']])
Z([3,'tapRetry'])
Z([[2,'+'],[1,'player_error_layer'],[[2,'?:'],[[2,'!='],[[7],[3,'tvpState']],[1,'error']],[1,' hidden'],[1,'']]])
Z([a,[3,'\n        '],[[7],[3,'tvpVideoError']],[3,'\n    ']])
Z([[7],[3,'reportUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
}
__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b=z;
__WXML_GLOBAL__.ops_init.$gwx_wxa75efa648b60994b=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./component/live/live.wxml','./component/video/video.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_1()
var oB=_mz(z,'view',['class',0,'hidden',1,'style',1],[],e,s,gg)
var xC=_mz(z,'video',['autoplay',3,'bindended',1,'bindenterpictureinpicture',2,'binderror',3,'bindfullscreenchange',4,'bindleavepictureinpicture',5,'bindpause',6,'bindplay',7,'bindtimeupdate',8,'bindwaiting',9,'class',10,'controls',11,'danmuBtn',12,'danmuList',13,'enableAutoRotation',14,'enableDanmu',15,'hidden',16,'id',17,'pictureInPictureMode',18,'poster',19,'showCenterPlayBtn',20,'showScreenLockButton',21,'src',22,'title',23],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,27,e,s,gg)){oD.wxVkey=1
var fE=_n('cover-view')
_rz(z,fE,'class',28,e,s,gg)
var cF=_n('cover-view')
_rz(z,cF,'class',29,e,s,gg)
var hG=_oz(z,30,e,s,gg)
_(cF,hG)
_(fE,cF)
_(oD,fE)
}
else if(_oz(z,31,e,s,gg)){oD.wxVkey=2
var oH=_n('cover-view')
_rz(z,oH,'class',32,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,33,e,s,gg)){cI.wxVkey=1
var oJ=_n('cover-view')
_rz(z,oJ,'class',34,e,s,gg)
var lK=_oz(z,35,e,s,gg)
_(oJ,lK)
_(cI,oJ)
}
else if(_oz(z,36,e,s,gg)){cI.wxVkey=2
var aL=_n('cover-view')
_rz(z,aL,'class',37,e,s,gg)
var tM=_oz(z,38,e,s,gg)
_(aL,tM)
_(cI,aL)
}
cI.wxXCkey=1
_(oD,oH)
}
var eN=_n('slot')
_(xC,eN)
oD.wxXCkey=1
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_2()
var oP=_mz(z,'view',['class',0,'hidden',1,'style',1],[],e,s,gg)
var oR=_mz(z,'video',['adUnitId',3,'autoPauseIfNavigate',1,'autoPauseIfOpenNative',2,'autoplay',3,'bindcontrolstoggle',4,'bindended',5,'bindenterpictureinpicture',6,'binderror',7,'bindfullscreenchange',8,'bindleavepictureinpicture',9,'bindloadedmetadata',10,'bindpause',11,'bindplay',12,'bindprogress',13,'bindtimeupdate',14,'bindwaiting',15,'class',16,'controls',17,'danmuBtn',18,'danmuList',19,'direction',20,'enableAutoRotation',21,'enableDanmu',22,'enablePlayGesture',23,'enableProgressGesture',24,'hidden',25,'id',26,'initialTime',27,'loop',28,'muted',29,'objectFit',30,'pictureInPictureMode',31,'playBtnPosition',32,'poster',33,'posterForCrawler',34,'showCastingButton',35,'showCenterPlayBtn',36,'showFullscreenBtn',37,'showMuteBtn',38,'showPlayBtn',39,'showProgress',40,'showScreenLockButton',41,'src',42,'title',43,'vslideGesture',44,'vslideGestureInFullscreen',45],[],e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,49,e,s,gg)){fS.wxVkey=1
var oX=_n('view')
_rz(z,oX,'class',50,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,51,e,s,gg)){lY.wxVkey=1
var e2=_n('view')
_rz(z,e2,'class',52,e,s,gg)
var b3=_oz(z,53,e,s,gg)
_(e2,b3)
_(lY,e2)
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,54,e,s,gg)){aZ.wxVkey=1
var o4=_n('view')
_rz(z,o4,'class',55,e,s,gg)
var x5=_oz(z,56,e,s,gg)
_(o4,x5)
_(aZ,o4)
}
var t1=_v()
_(oX,t1)
if(_oz(z,57,e,s,gg)){t1.wxVkey=1
var o6=_mz(z,'view',['bindtap',58,'class',1],[],e,s,gg)
var f7=_oz(z,60,e,s,gg)
_(o6,f7)
_(t1,o6)
}
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
_(fS,oX)
}
var cT=_v()
_(oR,cT)
if(_oz(z,61,e,s,gg)){cT.wxVkey=1
var c8=_v()
_(cT,c8)
if(_oz(z,62,e,s,gg)){c8.wxVkey=1
var h9=_n('view')
_rz(z,h9,'class',63,e,s,gg)
var cAB=_mz(z,'view',['bindtap',64,'class',1],[],e,s,gg)
var oBB=_oz(z,66,e,s,gg)
_(cAB,oBB)
_(h9,cAB)
var o0=_v()
_(h9,o0)
if(_oz(z,67,e,s,gg)){o0.wxVkey=1
var lCB=_mz(z,'view',['bindtap',68,'class',1],[],e,s,gg)
var aDB=_oz(z,70,e,s,gg)
_(lCB,aDB)
_(o0,lCB)
}
o0.wxXCkey=1
_(c8,h9)
}
c8.wxXCkey=1
}
else{cT.wxVkey=2
var tEB=_v()
_(cT,tEB)
if(_oz(z,71,e,s,gg)){tEB.wxVkey=1
var eFB=_n('view')
_rz(z,eFB,'class',72,e,s,gg)
var oHB=_mz(z,'view',['bindtap',73,'class',1],[],e,s,gg)
var xIB=_oz(z,75,e,s,gg)
_(oHB,xIB)
_(eFB,oHB)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,76,e,s,gg)){bGB.wxVkey=1
var oJB=_mz(z,'view',['bindtap',77,'class',1],[],e,s,gg)
var fKB=_oz(z,79,e,s,gg)
_(oJB,fKB)
_(bGB,oJB)
}
bGB.wxXCkey=1
_(tEB,eFB)
}
tEB.wxXCkey=1
}
var hU=_v()
_(oR,hU)
if(_oz(z,80,e,s,gg)){hU.wxVkey=1
var cLB=_n('view')
_rz(z,cLB,'class',81,e,s,gg)
_(hU,cLB)
}
var oV=_v()
_(oR,oV)
if(_oz(z,82,e,s,gg)){oV.wxVkey=1
var hMB=_mz(z,'view',['bindtap',83,'class',1],[],e,s,gg)
var oNB=_n('view')
_rz(z,oNB,'class',85,e,s,gg)
var cOB=_v()
_(oNB,cOB)
var oPB=function(aRB,lQB,tSB,gg){
var bUB=_mz(z,'view',['bindtap',89,'class',1,'data-fname',2,'data-pos',3,'data-selected',4],[],aRB,lQB,gg)
var oVB=_n('view')
_rz(z,oVB,'class',94,aRB,lQB,gg)
var xWB=_oz(z,95,aRB,lQB,gg)
_(oVB,xWB)
_(bUB,oVB)
_(tSB,bUB)
return tSB
}
cOB.wxXCkey=2
_2z(z,87,oPB,e,s,gg,cOB,'item','index','name')
_(hMB,oNB)
_(oV,hMB)
}
var cW=_v()
_(oR,cW)
if(_oz(z,96,e,s,gg)){cW.wxVkey=1
var oXB=_mz(z,'view',['bindtap',97,'class',1],[],e,s,gg)
var fYB=_mz(z,'image',['class',99,'src',1],[],e,s,gg)
_(oXB,fYB)
var cZB=_n('view')
_rz(z,cZB,'class',101,e,s,gg)
var h1B=_oz(z,102,e,s,gg)
_(cZB,h1B)
_(oXB,cZB)
var o2B=_n('view')
_rz(z,o2B,'class',103,e,s,gg)
var c3B=_v()
_(o2B,c3B)
var o4B=function(a6B,l5B,t7B,gg){
var b9B=_mz(z,'view',['class',106,'data-bright',1,'data-index',2],[],a6B,l5B,gg)
_(t7B,b9B)
return t7B
}
c3B.wxXCkey=2
_2z(z,104,o4B,e,s,gg,c3B,'item','index','index')
_(oXB,o2B)
var o0B=_mz(z,'view',['catchtap',109,'class',1,'data-type',2],[],e,s,gg)
var xAC=_n('view')
_rz(z,xAC,'class',112,e,s,gg)
_(o0B,xAC)
_(oXB,o0B)
var oBC=_mz(z,'view',['catchtap',113,'class',1,'data-type',2],[],e,s,gg)
var fCC=_n('view')
_rz(z,fCC,'class',116,e,s,gg)
_(oBC,fCC)
var cDC=_n('view')
_rz(z,cDC,'class',117,e,s,gg)
_(oBC,cDC)
_(oXB,oBC)
_(cW,oXB)
}
var hEC=_n('slot')
_(oR,hEC)
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
_(oP,oR)
var xQ=_v()
_(oP,xQ)
if(_oz(z,118,e,s,gg)){xQ.wxVkey=1
var oFC=_mz(z,'view',['bindtap',119,'class',1],[],e,s,gg)
var cGC=_oz(z,121,e,s,gg)
_(oFC,cGC)
_(xQ,oFC)
}
var oHC=_mz(z,'image',['hidden',-1,'src',122],[],e,s,gg)
_(oP,oHC)
xQ.wxXCkey=1
_(r,oP)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}

      var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var usingStyleSheetManager = !!window.__styleSheetManager__
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (usingStyleSheetManager) {
window.__styleSheetManager__.setCss(info.path, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
if (usingStyleSheetManager) {
window.__styleSheetManager__.addPath(info.path);
}
return rewritor;
}
setCssToHead([])();setCssToHead([])();
      		__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxss'] = setCssToHead([".",[1],"mod_player{position:relative;z-index:11;left:0;top:0;width:100%}\n.",[1],"mod_player:before{content:\x22\x22;display:block;width:100%;padding-bottom:56.25%}\n.",[1],"mod_player .",[1],"player_video{position:absolute;top:0;left:0;width:100%;height:100%}\n.",[1],"tips{position:relative;text-align:center;width:100%;height:100%;background-color:rgba(0,0,0,.75);display:flex;justify-content:center;align-items:center;flex-direction:column}\n.",[1],"tips_center{color:#fff}\n",],undefined,{path:"./component/live/live.wxss"});
		__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = $gwx_wxa75efa648b60994b( './component/live/live.wxml' );
				__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxss'] = setCssToHead([".",[1],"mod_player{position:relative;z-index:11;left:0;top:0;width:100%}\n.",[1],"mod_player:before{content:\x22\x22;display:block;width:100%;padding-bottom:56.25%}\n.",[1],"mod_player .",[1],"player_video{position:absolute;top:0;left:0;width:100%;height:100%}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad{background:rgba(0,0,0,.6);position:absolute;color:#fff;top:7.5px;right:7.5px;height:14px;font-size:12px;padding:7px 12px;border-radius:80px;overflow:hidden;white-space:nowrap;z-index:100;box-sizing:content-box!important;-webkit-border-radius:80px;-moz-border-radius:80px;-ms-border-radius:80px;-o-border-radius:80px}\n.",[1],"mod_skipad_with_casting{top:14px!important;right:45.5px!important}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad .",[1],"ad_common{display:inline;line-height:1.2;font-size:12px}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad .",[1],"progress{color:#ff7000;margin-right:3px}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad .",[1],"skipbtn{color:#ff7000}\n.",[1],"mod_player .",[1],"player_video .",[1],"mod_skipad .",[1],"skipbtn.",[1],"disabled{color:#fff}\n.",[1],"mod_player .",[1],"player_error_layer{width:100%;height:100%;position:absolute;left:0;top:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background:#000;color:#fff;padding:0 ",[0,20],";box-sizing:border-box;text-align:center;line-height:normal}\n.",[1],"mod_player .",[1],"player_error_layer.",[1],"hidden{display:none}\n.",[1],"hidden_with_voice{top:-999px;width:5px!important;height:5px!important}\n.",[1],"player_control_tab{position:absolute;z-index:2;top:27px;right:5px;opacity:1;transition:opacity .6s;text-align:right}\n.",[1],"player_control_tab_with_casting{top:21px!important;right:53px!important}\n.",[1],"player_control_tab.",[1],"x{right:83px}\n.",[1],"x_with_casting{right:131px!important}\n.",[1],"player_control_tab.",[1],"hidden{opacity:0}\n.",[1],"player_control_item{display:inline-block;padding:0 12px;font-size:18px;line-height:40px;color:#fff;letter-spacing:0;text-align:center;text-shadow:0 0 6px rgba(0,0,0,.3)}\n.",[1],"player_control_item_with_casting{line-height:18px!important}\n.",[1],"player_mask_buttons{background-color:rgba(0,0,0,.75);z-index:1;width:100%}\n.",[1],"player_hd_buttons,.",[1],"player_mask_buttons{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}\n.",[1],"player_hd_buttons{z-index:2}\n.",[1],"player_hd_buttons,.",[1],"player_hd_pro{display:flex;align-items:center;justify-content:center}\n.",[1],"player_hd_pro{padding:0 50px}\n.",[1],"player_hd_item{flex:1 1 auto;min-width:110px;max-width:130px;height:56px;background:#3d3d3d;border-radius:2px;color:#fff;margin-right:7px;display:flex;align-items:center;justify-content:center}\n.",[1],"player_hd_item:last-child{margin-right:0}\n.",[1],"player_hd_item_current{color:#ff6022}\n.",[1],"player_hd_text{width:100%;font-size:16px;line-height:normal;letter-spacing:normal;text-align:center}\n.",[1],"player_bright_buttons{position:absolute;z-index:2;left:0;right:0;top:0;bottom:0;margin:auto;display:flex;flex-direction:column;align-items:center;justify-content:center}\n.",[1],"player_bright_pic{width:80px;height:80px;margin-bottom:16px}\n.",[1],"player_bright_text{font-size:17px;line-height:30px;color:#fff;text-align:center;margin-bottom:13px}\n.",[1],"player_bright_pro{display:flex;justify-content:center;border-radius:12px;overflow:hidden}\n.",[1],"player_bright_pro_item{flex:0 0 auto;width:20px;height:12px;background:#fff;margin-right:5px;opacity:.4}\n.",[1],"player_bright_pro_item:last-child{margin-right:0}\n.",[1],"player_bright_pro_item_current{opacity:1}\n.",[1],"player_bright_btn{position:absolute;top:50%;margin-top:-36px;width:72px;height:72px;background:#3d3d3d;border-radius:100%}\n.",[1],"player_bright_btn_w{margin:-3px 0 0 -18px;width:36px;height:6px}\n.",[1],"player_bright_btn_h,.",[1],"player_bright_btn_w{content:\x22 \x22;position:absolute;top:50%;left:50%;border-radius:6px;background:#fff}\n.",[1],"player_bright_btn_h{margin:-18px 0 0 -3px;width:6px;height:36px}\n.",[1],"player_bright_minus{left:80px}\n.",[1],"player_bright_add{right:80px}\n.",[1],"t{width:80px;height:40px;line-height:40px;font-size:16px;color:#ff7000;margin:0}\n",],undefined,{path:"./component/video/video.wxss"});
		__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = $gwx_wxa75efa648b60994b( './component/video/video.wxml' );
		
      })();     var __pluginFrameEndTime_wxa75efa648b60994b__ = Date.now();       
     /*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx0=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx0:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx0 || [];
function gz$gwx0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_1
__WXML_GLOBAL__.ops_cached.$gwx0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'flex_colum'])
Z([3,'play_parent'])
Z([3,'videoError'])
Z([a,[3,'video_bg '],[[2,'?:'],[[6],[[7],[3,'movie_info']],[3,'video_img_error']],[1,'banner_bg'],[1,'']]])
Z([[2,'!'],[[7],[3,'isPlayShow']]])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'movie_info']],[3,'video_img']])
Z([3,'playClick'])
Z([3,'img_play'])
Z([[7],[3,'movie_info']])
Z([[2,'||'],[[2,'!'],[[7],[3,'isPlayShow']]],[[2,'!='],[[7],[3,'is_show_trailer']],[1,'1']]])
Z([3,'/images/common/yingpianxiangqing_icon_bofang.png'])
Z([[7],[3,'tvphide']])
Z([1,false])
Z([3,'onFullScreenChange'])
Z([3,'onStateChange'])
Z([3,'onTimeUpdate'])
Z([3,'true'])
Z([1,true])
Z([[7],[3,'height']])
Z([3,'center'])
Z([3,'txv0'])
Z(z[13])
Z([[7],[3,'showProgress1']])
Z([[7],[3,'title']])
Z([[7],[3,'vid']])
Z(z[18])
Z([[7],[3,'width']])
Z(z[0])
Z(z[17])
Z([3,'width:100%;background:black'])
Z([3,'flex_row'])
Z([3,'image_details movie_list_bg'])
Z(z[5])
Z([[6],[[7],[3,'movie_info']],[3,'movie_img_url']])
Z([3,'flex_colum_info'])
Z(z[0])
Z([3,'movie_name'])
Z([3,'margin-top:30rpx'])
Z([a,[[6],[[7],[3,'movie_info']],[3,'movie_name']]])
Z([3,'en_movie_name'])
Z([a,[[6],[[7],[3,'movie_info']],[3,'movie_en_name']]])
Z([[6],[[7],[3,'movie_info']],[3,'movie_rate']])
Z([3,'rate_parent'])
Z([[7],[3,'rates']])
Z([3,'rate_img'])
Z(z[45])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([3,'rate1'])
Z([a,[[12],[[6],[[7],[3,'point']],[3,'rate']],[[5],[[5],[[6],[[7],[3,'movie_info']],[3,'movie_rate']]],[1,0]]]])
Z([3,'rate'])
Z([a,[3,'.'],[[12],[[6],[[7],[3,'point']],[3,'rate']],[[5],[[5],[[6],[[7],[3,'movie_info']],[3,'movie_rate']]],[1,1]]]])
Z(z[0])
Z([3,'movie_date'])
Z([a,[[6],[[7],[3,'movie_info']],[3,'movie_show_date']]])
Z([3,'movie_date_parent'])
Z([3,'margin-top:10rpx;'])
Z([3,'icon_time'])
Z([3,'/images/common/yingpianxiangqing_icon_shijian.png'])
Z(z[53])
Z([3,'margin-left: 12rpx'])
Z([a,[[6],[[7],[3,'movie_info']],[3,'movie_length']],[3,'分钟']])
Z(z[57])
Z([3,'/images/common/yingpianxiangqing_icon_zhipian.png'])
Z([3,'margin-left: 30rpx'])
Z(z[53])
Z([3,'margin-left: 10rpx'])
Z([a,[[6],[[7],[3,'movie_info']],[3,'movie_country']]])
Z([[2,'>'],[[6],[[7],[3,'movieTypes']],[3,'length']],[1,0]])
Z([3,'movie_type_parent'])
Z([3,'margin-top:15rpx;'])
Z([[7],[3,'movieTypes']])
Z([3,'movie_type'])
Z([3,'movie_type_loukong'])
Z([a,[[7],[3,'item']]])
Z([3,'h_line_8b'])
Z([3,'margin-left:20rpx;margin-right:20rpx;margin-top:33rpx;'])
Z([3,'flex_colum_center'])
Z([3,'descClick'])
Z([3,'movie_desc'])
Z([a,[[2,'?:'],[[7],[3,'isExtend']],[1,''],[1,'-webkit-line-clamp:2']],[3,';']])
Z([a,[3,'\n        '],[[6],[[7],[3,'movie_info']],[3,'movie_desc']],[3,'\n      ']])
Z(z[75])
Z([3,'margin-top:20rpx;margin-bottom:20rpx;'])
Z(z[79])
Z([a,[3,'导演：'],[[6],[[7],[3,'movie_info']],[3,'movie_director']]])
Z(z[79])
Z([a,[3,'主演：'],[[6],[[7],[3,'movie_info']],[3,'movie_cast']]])
Z(z[17])
Z([3,'height:200rpx;width:100%;display:block;background:black;'])
Z([3,'movie_bottom'])
Z([a,[3,'background:'],[[2,'?:'],[[7],[3,'isGalleryShow']],[1,'black'],[1,'white']]])
Z([3,'height:60rpx;background:black;padding:0rpx;margig:0rpx;'])
Z(z[78])
Z([3,'icon_gallery_handler'])
Z([[2,'?:'],[[7],[3,'isGalleryShow']],[1,'/images/common/yingpianxiangqing_icon_shanghua.png'],[1,'/images/common/yingpianxiangqing_icon_xiala.png']])
Z([3,'movie_scroll'])
Z([[7],[3,'isGalleryShow']])
Z(z[17])
Z([a,[3,'display:'],[[2,'?:'],[[7],[3,'isGalleryShow']],[[7],[3,'none']],[1,'']]])
Z([3,'movie_scroll_child'])
Z([[6],[[7],[3,'movie_info']],[3,'poster_data']])
Z([3,'small_poster_url'])
Z([3,'poster_view_item'])
Z([3,'posterClick'])
Z([3,'juzhao_list_bg'])
Z(z[101])
Z([[7],[3,'index']])
Z(z[5])
Z([[6],[[7],[3,'item']],[3,'small_poster_url']])
Z([3,'width:254rpx;height:254rpx'])
Z([3,'galleryClick'])
Z([a,[3,'gallery_list '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'movie_info']],[3,'sell_status']],[1,3]],[1,'gallery_list_nosell'],[1,'']]])
Z(z[101])
Z([3,'/images/common/yingpianxiangqing_icon_jiantouyou.png'])
Z([3,'h_line'])
Z(z[97])
Z([a,z[99][1],z[99][2]])
Z([3,'gotoSeat'])
Z([3,'buy_btn'])
Z([[2,'=='],[[6],[[7],[3,'movie_info']],[3,'sell_status']],[1,3]])
Z([3,'选座购票'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_1
}
function gz$gwx0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_2
__WXML_GLOBAL__.ops_cached.$gwx0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'grids_parent'])
Z([3,'grids'])
Z([[7],[3,'list']])
Z([3,'original_poster_url'])
Z([3,'grids_item'])
Z([3,'imgClick'])
Z([a,[3,'grids_item_img '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'original_poster_url']],[1,'juzhao_list_bg'],[1,'']]])
Z([[7],[3,'index']])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'original_poster_url']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_2
}
function gz$gwx0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_3)return __WXML_GLOBAL__.ops_cached.$gwx0_3
__WXML_GLOBAL__.ops_cached.$gwx0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page_gdetails'])
Z([3,'bindchange'])
Z([3,'swiper'])
Z([[7],[3,'currentIndex']])
Z([[7],[3,'list']])
Z([3,'original_poster_url'])
Z([3,'imageLoad'])
Z([3,'swiper_image'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'original_poster_url']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_3);return __WXML_GLOBAL__.ops_cached.$gwx0_3
}
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={"m_./moviePages/pages/detail/movieDetails.wxml:point":np_0,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./moviePages/pages/detail/movieDetails.wxml']={};
f_['./moviePages/pages/detail/movieDetails.wxml']['point'] =nv_require("m_./moviePages/pages/detail/movieDetails.wxml:point");
function np_0(){var nv_module={nv_exports:{}};var nv_rate = (function (nv_rate,nv_index){if (!nv_rate){return("")};var nv_tempRate = nv_rate + "";var nv_array = nv_tempRate.nv_split(".");if (nv_array.nv_length == 2){if (nv_index == 0){return(nv_array[(0)])} else {return(nv_array[(1)])}} else {if (nv_index == 0){return(nv_array[(0)])} else {return("0")}}});nv_module.nv_exports = ({nv_rate:nv_rate,});return nv_module.nv_exports;}

var x=['./moviePages/pages/detail/movieDetails.wxml','./moviePages/pages/gallery/galleryList.wxml','./moviePages/pages/gallerydetail/gdetail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_mz(z,'image',['binderror',2,'class',1,'hidden',2,'mode',3,'src',4],[],e,s,gg)
_(xC,oD)
var fE=_mz(z,'image',['bindtap',7,'class',1,'data-bean',2,'hidden',3,'src',4],[],e,s,gg)
_(xC,fE)
var cF=_n('view')
_rz(z,cF,'hidden',12,e,s,gg)
var hG=_mz(z,'txv-video',['autoplay',13,'bindfullscreenchange',1,'bindstatechange',2,'bindtimeupdate',3,'controls',4,'enablePlayGesture',5,'height',6,'playBtnPosition',7,'playerid',8,'showProgress',9,'showProgress',10,'title',11,'vid',12,'vslideGesture',13,'width',14],[],e,s,gg)
_(cF,hG)
_(xC,cF)
_(oB,xC)
var oH=_mz(z,'scroll-view',['class',28,'scrollY',1,'style',2],[],e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',31,e,s,gg)
var oJ=_mz(z,'image',['class',32,'mode',1,'src',2],[],e,s,gg)
_(cI,oJ)
var lK=_n('view')
_rz(z,lK,'class',35,e,s,gg)
var aL=_n('view')
_rz(z,aL,'class',36,e,s,gg)
var eN=_mz(z,'text',['class',37,'style',1],[],e,s,gg)
var bO=_oz(z,39,e,s,gg)
_(eN,bO)
_(aL,eN)
var oP=_n('text')
_rz(z,oP,'class',40,e,s,gg)
var xQ=_oz(z,41,e,s,gg)
_(oP,xQ)
_(aL,oP)
var tM=_v()
_(aL,tM)
if(_oz(z,42,e,s,gg)){tM.wxVkey=1
var oR=_n('view')
_rz(z,oR,'class',43,e,s,gg)
var fS=_v()
_(oR,fS)
var cT=function(oV,hU,cW,gg){
var lY=_mz(z,'image',['class',46,'src',1],[],oV,hU,gg)
_(cW,lY)
return cW
}
fS.wxXCkey=2
_2z(z,44,cT,e,s,gg,fS,'item','index','rate_img')
var aZ=_n('text')
_rz(z,aZ,'class',48,e,s,gg)
var t1=_oz(z,49,e,s,gg)
_(aZ,t1)
_(oR,aZ)
var e2=_n('text')
_rz(z,e2,'class',50,e,s,gg)
var b3=_oz(z,51,e,s,gg)
_(e2,b3)
_(oR,e2)
_(tM,oR)
}
tM.wxXCkey=1
_(lK,aL)
var o4=_n('view')
_rz(z,o4,'class',52,e,s,gg)
var o6=_n('text')
_rz(z,o6,'class',53,e,s,gg)
var f7=_oz(z,54,e,s,gg)
_(o6,f7)
_(o4,o6)
var c8=_mz(z,'view',['class',55,'style',1],[],e,s,gg)
var h9=_mz(z,'image',['class',57,'src',1],[],e,s,gg)
_(c8,h9)
var o0=_mz(z,'text',['class',59,'style',1],[],e,s,gg)
var cAB=_oz(z,61,e,s,gg)
_(o0,cAB)
_(c8,o0)
var oBB=_mz(z,'image',['class',62,'src',1,'style',2],[],e,s,gg)
_(c8,oBB)
var lCB=_mz(z,'text',['class',65,'style',1],[],e,s,gg)
var aDB=_oz(z,67,e,s,gg)
_(lCB,aDB)
_(c8,lCB)
_(o4,c8)
var x5=_v()
_(o4,x5)
if(_oz(z,68,e,s,gg)){x5.wxVkey=1
var tEB=_mz(z,'view',['class',69,'style',1],[],e,s,gg)
var eFB=_v()
_(tEB,eFB)
var bGB=function(xIB,oHB,oJB,gg){
var cLB=_n('view')
_rz(z,cLB,'class',73,xIB,oHB,gg)
var hMB=_oz(z,74,xIB,oHB,gg)
_(cLB,hMB)
_(oJB,cLB)
return oJB
}
eFB.wxXCkey=2
_2z(z,71,bGB,e,s,gg,eFB,'item','index','movie_type')
_(x5,tEB)
}
x5.wxXCkey=1
_(lK,o4)
_(cI,lK)
_(oH,cI)
var oNB=_mz(z,'view',['class',75,'style',1],[],e,s,gg)
_(oH,oNB)
var cOB=_n('view')
_rz(z,cOB,'class',77,e,s,gg)
var oPB=_mz(z,'view',['bindtap',78,'class',1,'style',2],[],e,s,gg)
var lQB=_oz(z,81,e,s,gg)
_(oPB,lQB)
_(cOB,oPB)
var aRB=_mz(z,'view',['class',82,'style',1],[],e,s,gg)
_(cOB,aRB)
var tSB=_n('text')
_rz(z,tSB,'class',84,e,s,gg)
var eTB=_oz(z,85,e,s,gg)
_(tSB,eTB)
_(cOB,tSB)
var bUB=_n('text')
_rz(z,bUB,'class',86,e,s,gg)
var oVB=_oz(z,87,e,s,gg)
_(bUB,oVB)
_(cOB,bUB)
var xWB=_mz(z,'text',['hidden',88,'style',1],[],e,s,gg)
_(cOB,xWB)
_(oH,cOB)
_(oB,oH)
var oXB=_mz(z,'view',['class',90,'style',1],[],e,s,gg)
var fYB=_n('view')
_rz(z,fYB,'style',92,e,s,gg)
var cZB=_mz(z,'image',['bindtap',93,'class',1,'src',2],[],e,s,gg)
_(fYB,cZB)
_(oXB,fYB)
var h1B=_mz(z,'scroll-view',['class',96,'hidden',1,'scrollX',2,'style',3],[],e,s,gg)
var o2B=_n('view')
_rz(z,o2B,'class',100,e,s,gg)
var c3B=_v()
_(o2B,c3B)
var o4B=function(a6B,l5B,t7B,gg){
var b9B=_n('view')
_rz(z,b9B,'class',103,a6B,l5B,gg)
var o0B=_mz(z,'image',['bindtap',104,'class',1,'data-list',2,'id',3,'mode',4,'src',5,'style',6],[],a6B,l5B,gg)
_(b9B,o0B)
_(t7B,b9B)
return t7B
}
c3B.wxXCkey=2
_2z(z,101,o4B,e,s,gg,c3B,'item','index','small_poster_url')
_(h1B,o2B)
var xAC=_mz(z,'image',['bindtap',111,'class',1,'data-list',2,'src',3],[],e,s,gg)
_(h1B,xAC)
_(oXB,h1B)
var oBC=_mz(z,'text',['class',115,'hidden',1,'style',2],[],e,s,gg)
_(oXB,oBC)
var fCC=_mz(z,'text',['bindtap',118,'class',1,'hidden',2],[],e,s,gg)
var cDC=_oz(z,121,e,s,gg)
_(fCC,cDC)
_(oXB,fCC)
_(oB,oXB)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_2()
var oFC=_n('view')
var cGC=_n('view')
_rz(z,cGC,'class',0,e,s,gg)
var oHC=_n('view')
_rz(z,oHC,'class',1,e,s,gg)
var lIC=_v()
_(oHC,lIC)
var aJC=function(eLC,tKC,bMC,gg){
var xOC=_n('view')
_rz(z,xOC,'class',4,eLC,tKC,gg)
var oPC=_mz(z,'image',['bindtap',5,'class',1,'data-index',2,'mode',3,'src',4],[],eLC,tKC,gg)
_(xOC,oPC)
_(bMC,xOC)
return bMC
}
lIC.wxXCkey=2
_2z(z,2,aJC,e,s,gg,lIC,'item','index','original_poster_url')
_(cGC,oHC)
_(oFC,cGC)
_(r,oFC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx0_3()
var cRC=_n('view')
_rz(z,cRC,'class',0,e,s,gg)
var hSC=_mz(z,'swiper',['bindchange',1,'class',1,'current',2],[],e,s,gg)
var oTC=_v()
_(hSC,oTC)
var cUC=function(lWC,oVC,aXC,gg){
var eZC=_n('swiper-item')
var b1C=_mz(z,'image',['bindload',6,'class',1,'mode',2,'src',3],[],lWC,oVC,gg)
_(eZC,b1C)
_(aXC,eZC)
return aXC
}
oTC.wxXCkey=2
_2z(z,4,cUC,e,s,gg,oTC,'item','index','original_poster_url')
_(cRC,hSC)
_(r,cRC)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}
 
     var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}

var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([],undefined,{path:"./moviePages/app.wxss"})(); 
     		__wxAppCode__['moviePages/pages/detail/movieDetails.wxss'] = setCssToHead(["body{background:#fff}\n.",[1],"flex_colum{flex-direction:column}\n.",[1],"flex_colum,.",[1],"flex_colum_info{display:-webkit-flex;display:flex;-webkit-flex-direction:column}\n.",[1],"flex_colum_info{flex-direction:column;-webkit-flex:1;flex:1;-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"flex_colum_center{margin-left:",[0,20],";margin-right:",[0,20],"}\n.",[1],"flex_colum_center,.",[1],"movie_bottom{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"movie_bottom{position:fixed;bottom:0;width:100%;text-align:center}\n.",[1],"flex_row{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;width:100%}\n.",[1],"movie_name{max-width:",[0,380],";font-size:var(--font-tb);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}\n.",[1],"en_movie_name,.",[1],"movie_name{color:var(--color-cf);overflow:hidden;text-overflow:ellipsis}\n.",[1],"en_movie_name{font-size:var(--font-tf);white-space:nowrap}\n.",[1],"movie_date_parent{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-align-items:center;align-items:center}\n.",[1],"movie_date{font-size:var(--font-tf);color:var(--color-cf)}\n.",[1],"icon_time{width:",[0,24],";height:",[0,24],"}\n.",[1],"movie_desc{font-size:var(--font-te);color:var(--color-cd);display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;text-overflow:ellipsis;margin-top:",[0,20],"}\n.",[1],"movie_scroll{box-sizing:border-box;padding:",[0,10]," ",[0,5],";overflow:scroll}\n.",[1],"movie_scroll,.",[1],"movie_scroll_child{width:100%;white-space:nowrap;height:",[0,254],";display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-start;justify-content:flex-start}\n.",[1],"poster_view_item{display:inline-block;width:",[0,254],";height:",[0,254],";margin-left:",[0,5],";margin-right:",[0,5],"}\n.",[1],"gallery_list{width:",[0,24],";height:",[0,42],";position:fixed;right:",[0,0],";padding:",[0,116]," ",[0,25]," ",[0,96]," ",[0,35],";bottom:",[0,124],"}\n.",[1],"gallery_list_nosell{bottom:",[0,0],"}\n.",[1],"gallery_list2{width:",[0,24],";height:",[0,42],";position:absolute;right:5px;top:",[0,100],";z-index:1}\n.",[1],"play_parent{position:relative}\n.",[1],"play_parent,.",[1],"video_bg{width:100%;height:",[0,350],"}\n.",[1],"video_bg{background-size:100% 100%;position:absolute;z-index:99}\n.",[1],"img_play{width:",[0,68],";height:",[0,68],";position:absolute;left:46%;top:",[0,140],";z-index:100}\n.",[1],"image_details{width:",[0,274],";height:",[0,374],";margin-left:",[0,54],";margin-right:",[0,34],";margin-top:",[0,20],"}\n.",[1],"icon_gallery_handler{width:",[0,42],";height:",[0,24],";margin:0 auto}\n.",[1],"rate_parent{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-align-items:baseline;align-items:baseline}\n.",[1],"rate_img{width:",[0,28],";height:",[0,26],"}\n.",[1],"rate1{font-size:var(--font-tc);margin-left:",[0,5],"}\n.",[1],"rate,.",[1],"rate1{color:var(--color-cb)}\n.",[1],"rate{font-size:var(--font-tf)}\n.",[1],"movie_type_parent{width:",[0,300],";display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;padding-left:",[0,5],";-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:flex-start;align-items:flex-start}\n.",[1],"movie_type_loukong{color:var(--color-cd);font-size:var(--font-tf);margin-top:",[0,5],";border-radius:",[0,2],";border:1px solid var(--color-cd);text-align:center;vertical-align:middle;padding-left:",[0,10],";padding-right:",[0,10],";line-height:",[0,35],";height:",[0,35],";margin-right:",[0,10],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./moviePages/pages/detail/movieDetails.wxss:1:1)",{path:"./moviePages/pages/detail/movieDetails.wxss"});
		if (__vd_version_info__.delayedGwx) __wxAppCode__['moviePages/pages/detail/movieDetails.wxml'] = [ $gwx0, './moviePages/pages/detail/movieDetails.wxml' ];
		else __wxAppCode__['moviePages/pages/detail/movieDetails.wxml'] = $gwx0( './moviePages/pages/detail/movieDetails.wxml' );
				__wxAppCode__['moviePages/pages/gallery/galleryList.wxss'] = setCssToHead([".",[1],"container{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"grids_parent{width:100%;height:100%;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:flex-start;align-items:flex-start;padding-left:",[0,6],";padding-right:",[0,6],"}\n.",[1],"grids,.",[1],"grids_parent{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"grids{width:98.4%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-around;justify-content:space-around}\n.",[1],"grids_item{width:32.25%;margin-top:",[0,10],";height:",[0,238],";margin-left:",[0,4],";margin-right:",[0,4],"}\n.",[1],"grids_item_img{width:100%;height:100%}\n",],undefined,{path:"./moviePages/pages/gallery/galleryList.wxss"});
		if (__vd_version_info__.delayedGwx) __wxAppCode__['moviePages/pages/gallery/galleryList.wxml'] = [ $gwx0, './moviePages/pages/gallery/galleryList.wxml' ];
		else __wxAppCode__['moviePages/pages/gallery/galleryList.wxml'] = $gwx0( './moviePages/pages/gallery/galleryList.wxml' );
				__wxAppCode__['moviePages/pages/gallerydetail/gdetail.wxss'] = setCssToHead(["body{height:100%}\n.",[1],"page_gdetails{height:100%;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-align-items:center;align-items:center}\n.",[1],"page_gdetails,.",[1],"swiper{width:100%;background:#000}\n.",[1],"swiper{height:",[0,500],"}\n.",[1],"swiper_image,.",[1],"swiper_item{height:100%;width:100%}\n.",[1],"swiper_image{background:var(--color-cg)}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./moviePages/pages/gallerydetail/gdetail.wxss:1:1)",{path:"./moviePages/pages/gallerydetail/gdetail.wxss"});
		if (__vd_version_info__.delayedGwx) __wxAppCode__['moviePages/pages/gallerydetail/gdetail.wxml'] = [ $gwx0, './moviePages/pages/gallerydetail/gdetail.wxml' ];
		else __wxAppCode__['moviePages/pages/gallerydetail/gdetail.wxml'] = $gwx0( './moviePages/pages/gallerydetail/gdetail.wxml' );
		 
     ;var __subPageFrameEndTime__ = Date.now() 	 