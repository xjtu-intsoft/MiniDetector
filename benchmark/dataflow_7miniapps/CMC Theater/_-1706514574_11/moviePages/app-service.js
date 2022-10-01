	var __wxAppConsole__ = console;definePlugin("plugin://wxa75efa648b60994b", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console) {            var __vd_version_info__=__vd_version_info__||{};            if (typeof console === 'undefined') {console=__wxAppConsole__; };			
			/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
Z(z[51])
Z([[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]])
Z([[2,'!'],[[7],[3,'isSupportControlsToggle']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'fullscreen']]],[[2,'!'],[[7],[3,'isHideFullscreenBtn']]]])
Z([[2,'!'],[[2,'!'],[[7],[3,'formats_selected']]]])
Z(z[55])
Z(z[56])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[2,'||'],[[7],[3,'showHDSelector']],[[7],[3,'showBrightSelector']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]],[[7],[3,'formats']]],[[6],[[7],[3,'formats']],[3,'length']]])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showBrightSelector']]])
Z([[7],[3,'isUsePlayerErrorTips']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
}
__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b=z;
__WXML_GLOBAL__.ops_init.$gwx_wxa75efa648b60994b=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./component/live/live.wxml','./component/video/video.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_1()
var oB=_mz(z,'video',['autoplay',0,'bindended',1,'bindenterpictureinpicture',1,'binderror',2,'bindfullscreenchange',3,'bindleavepictureinpicture',4,'bindpause',5,'bindplay',6,'bindtimeupdate',7,'bindwaiting',8,'class',9,'controls',10,'danmuBtn',11,'danmuList',12,'enableAutoRotation',13,'enableDanmu',14,'hidden',15,'id',16,'pictureInPictureMode',17,'poster',18,'showCenterPlayBtn',19,'showScreenLockButton',20,'src',21,'title',22],[],e,s,gg)
var xC=_n('slot')
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_2()
var fE=_mz(z,'view',['class',0,'hidden',1,'style',1],[],e,s,gg)
var hG=_mz(z,'video',['adUnitId',3,'autoPauseIfNavigate',1,'autoPauseIfOpenNative',2,'autoplay',3,'bindcontrolstoggle',4,'bindended',5,'bindenterpictureinpicture',6,'binderror',7,'bindfullscreenchange',8,'bindleavepictureinpicture',9,'bindloadedmetadata',10,'bindpause',11,'bindplay',12,'bindprogress',13,'bindtimeupdate',14,'bindwaiting',15,'class',16,'controls',17,'danmuBtn',18,'danmuList',19,'direction',20,'enableAutoRotation',21,'enableDanmu',22,'enablePlayGesture',23,'enableProgressGesture',24,'hidden',25,'id',26,'initialTime',27,'loop',28,'muted',29,'objectFit',30,'pictureInPictureMode',31,'playBtnPosition',32,'poster',33,'posterForCrawler',34,'showCastingButton',35,'showCenterPlayBtn',36,'showFullscreenBtn',37,'showMuteBtn',38,'showPlayBtn',39,'showProgress',40,'showScreenLockButton',41,'src',42,'title',43,'vslideGesture',44,'vslideGestureInFullscreen',45],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,49,e,s,gg)){oH.wxVkey=1
var tM=_n('view')
_rz(z,tM,'class',50,e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,51,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,52,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(tM,oP)
if(_oz(z,53,e,s,gg)){oP.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
_(oH,tM)
}
var cI=_v()
_(hG,cI)
if(_oz(z,54,e,s,gg)){cI.wxVkey=1
var xQ=_v()
_(cI,xQ)
if(_oz(z,55,e,s,gg)){xQ.wxVkey=1
var oR=_v()
_(xQ,oR)
if(_oz(z,56,e,s,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
}
xQ.wxXCkey=1
}
else{cI.wxVkey=2
var fS=_v()
_(cI,fS)
if(_oz(z,57,e,s,gg)){fS.wxVkey=1
var cT=_v()
_(fS,cT)
if(_oz(z,58,e,s,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
}
fS.wxXCkey=1
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,59,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(hG,lK)
if(_oz(z,60,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(hG,aL)
if(_oz(z,61,e,s,gg)){aL.wxVkey=1
}
var hU=_n('slot')
_(hG,hU)
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
_(fE,hG)
var cF=_v()
_(fE,cF)
if(_oz(z,62,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = [$gwx_wxa75efa648b60994b, './component/live/live.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = $gwx_wxa75efa648b60994b( './component/live/live.wxml' );
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = [$gwx_wxa75efa648b60994b, './component/video/video.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = $gwx_wxa75efa648b60994b( './component/video/video.wxml' );
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.json'] = {"publicComponents":{"video":"component/video/video","live":"component/live/live"},"main":"component/txv-context.js"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.wxml'] = [$gwx_wxa75efa648b60994b, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.wxml'] = $gwx_wxa75efa648b60994b( './plugin.wxml' );
	
				define("component/live/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../src/util/base64text");module.exports={tvpUrl:e,tvpIsAd:!1,tvpState:"",tvpVideoError:"",title:"",liveEndInfo:"",liveStatus:"",liveStartTime:"",getDataError:"",errCode:"",isBefore:!1,isAfter:!1,isHiddenContainer:!1,isHiddenVideo:!1,isHiddenWithVoice:!1}; 
 			}); 
		define("component/live/properties.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={pid:{type:String,value:"",observer:"onVideoChange"},sid:{type:String,value:"",observer:"onVideoChange"},playerid:{type:String,value:""},autoplay:{type:Boolean,value:!1},width:{type:String,value:""},height:{type:String,value:""},isHiddenStop:{type:Boolean,value:!1},isNeedMutex:{type:Boolean,value:!0},enableDanmu:{type:Boolean,value:!1},danmuBtn:{type:Boolean,value:!1},danmuList:{type:Array,value:[]},poster:{type:String,value:""},showCenterPlayBtn:{type:Boolean,value:!1},beforeText:{type:String,value:"直播未开始"},afterText:{type:String,value:"直播已结束"},isStopPoll:{type:Boolean,value:!1},extraParam:{type:Object,value:{}},title:{type:String,value:""},pictureInPictureMode:{type:Array,value:[]},enableAutoRotation:{type:Boolean,value:!1},showScreenLockButton:{type:Boolean,value:!1}}; 
 			}); 
		define("component/txv-context.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../src/module/log"),t=require("../src/module/reporter/index"),r=require("../src/lib/request"),n={},o="",s=Object.create({report:{on:function(e){"report"==e&&(t.off("report"),t.on.apply(t,arguments))},release:t.release,saveState:t.saveState,restoreState:t.restoreState,checkState:t.checkState},setRequest:function(e){r.busRequest=e}});module.exports=Object.assign(s,{getTxvContext:function(e){if(!n[e])throw new Error("找不到playerid为"+e+"的txv-video组件");return n[e]},existTxvContext:function(e){return!!n[e]},txvAttached:function(e,t){n[e]=t},txvDetached:function(e){delete n[e]},getAllContext:function(){return n},getLastPlayId:function(){return o},setLastPlayId:function(e){o=e},setTvpPlayState:function(e,t){this.getTxvContext(e).isPlaying=t},openLog:function(){e.isOpenLog=!0},closeLog:function(){e.isOpenLog=!1}}); 
 			}); 
		define("component/video/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r=require("../../src/util/index");module.exports={progressBaseTime:0,progressSkipTime:0,progressTime:0,progressDuration:0,tvpUrl:"",tvpIsAd:!1,tvpState:"",tvpVideoError:"",reportUrl:"",isHiddenContainer:!1,isHiddenVideo:!1,fullscreen:!1,showHDSelector:!1,showBrightSelector:!1,showRateSelector:!1,showControlBtn:!1,isSupportControlsToggle:r.isHigherVersion("2.9.5"),isSupportCasting:r.isHigherVersion("2.10.2"),isControlsShow:!0,bright:function(){for(var r=[],e=1;e<=8;e++)r.push({val:.125*e});return r}(),currentBright:0,isPlaying:!1,isIpx:!1}; 
 			}); 
		define("component/video/properties.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={vid:{type:String,value:"",observer:"onVideoChange"},playerid:{type:String,value:"",observer:"onPlayeridChange"},adCloseText:{type:String,value:"关闭广告"},adJumpText:{type:String,value:"后可关闭"},autoplay:{type:Boolean,value:!1},objectFit:{type:String,value:"contain"},poster:{type:String,value:""},showProgress:{type:Boolean,value:!0},controls:{type:Boolean,value:!0},initialTime:{type:Number,value:0},showFullscreenBtn:{type:Boolean,value:!0},showPlayBtn:{type:Boolean,value:!0},showCenterPlayBtn:{type:Boolean,value:!0},enableProgressGesture:{type:Boolean,value:!0},vslideGesture:{type:Boolean,value:!1},pageGesture:{type:Boolean,value:!1},muted:{type:Boolean,value:!1},loop:{type:Boolean,value:!1},direction:{type:Number,value:-1},width:{type:String,value:""},height:{type:String,value:""},usePoster:{type:Boolean,value:!0},isHiddenStop:{type:Boolean,value:!1},isNeedMutex:{type:Boolean,value:!0},enableDanmu:{type:Boolean,value:!1},danmuBtn:{type:Boolean,value:!1},danmuList:{type:Array,value:[]},videoInfo:{type:Object,value:{}},defn:{type:String,value:""},extraParam:{type:Object,value:{}},title:{type:String,value:""},vslideGestureInFullscreen:{type:Boolean,value:!0},autoPauseIfNavigate:{type:Boolean,value:!0},autoPauseIfOpenNative:{type:Boolean,value:!0},enablePlayGesture:{type:Boolean,value:!1},showMuteBtn:{type:Boolean,value:!1},playBtnPosition:{type:String,value:"bottom"},isHideQB:{type:Boolean,value:!0},isHideFullscreenBtn:{type:Boolean,value:!1},isUsePlayerErrorTips:{type:Boolean,value:!0},showCastingButton:{type:Boolean,value:!1},posterForCrawler:{type:String,value:""},adUnitId:{type:String,value:""},pictureInPictureMode:{type:Array,value:[]},enableAutoRotation:{type:Boolean,value:!1},showScreenLockButton:{type:Boolean,value:!1}}; 
 			}); 
		define("conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={version:"1.3.7"}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./src/video");module.exports=e; 
 			}); 
		define("lib-inject.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="./src/lib/es6-promise",r="./src/lib/request";try{var s=require("../tvp.js");e=s.Promise||e,r=s.request||r}catch(e){}module.exports={Promise:require(e),request:require(r).get,post:require(r).post}; 
 			}); 
		define("private-setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t={};module.exports={set:function(e,r){return t[e]=r,this},get:function(e){return t[e]}}; 
 			}); 
		define("src/classes/Content.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),n=require("../lib/message"),r=1;module.exports=function(){function o(e){var i=this;t(this,o),this.mockUpdate=0,this._urlIndex=0,Object.defineProperties(this,{_iretcode:{value:e.iretcode},_url:{value:e.url instanceof Array?e.url:[e.url]},_id:{value:r++},_duration:{value:e.duration},_filesize:{value:e.filesize},_charged:{value:e.charged},_preview:{value:e.preview},isad:{value:e.isad}}),(new n).assign(this);var u=null,a=null;this.on("play",function(){u=setTimeout(function(){i.emit("timeout",1e4)},1e4),a=setTimeout(function(){i.emit("timeout",2e4)},2e4)},!0),this.on("start",function(){clearTimeout(u),clearTimeout(a)},!0)}return i(o,[{key:"url",get:function(){return this._url[this._urlIndex]}},{key:"id",get:function(){return this._id}},{key:"duration",get:function(){return this._duration}},{key:"filesize",get:function(){return this._filesize}},{key:"preview",get:function(){return this._preview}},{key:"charged",get:function(){return this._charged}},{key:"iretcode",get:function(){return this._iretcode}}]),i(o,[{key:"onContentEnd",value:function(){this.emit("end")}},{key:"onContentPlay",value:function(){this.emittedPlay=!0,this.emit("play")}},{key:"onContentPause",value:function(){this.emit("pause")}},{key:"onContentTimeupdate",value:function(t){this.emittedPlay&&(t&&t.target&&(t=t.detail.currentTime),!this.emittedStart&&((void 0===t?"undefined":e(t))===e(void 0)?this.mockUpdate++>5:t>0)&&(this.emit("start",t||this.mockUpdate),this.emittedStart=!0),this.emit.apply(this,["timeupdate",t]))}},{key:"onContentError",value:function(){if(this._url.length>this._urlIndex+1)return this._urlIndex++,void this.emit("change",this.url);this.emit.apply(this,["error"].concat([].slice.call(arguments,0)))}},{key:"onContentSkip",value:function(){this.isad&&this.emit("skip")}},{key:"onContentWaiting",value:function(){this.emit("waiting")}}]),o}(); 
 			}); 
		define("src/classes/Controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){var e={};return(t instanceof Array?t:[].slice.call(arguments,0)).forEach(function(t){var n=t.initialize;Object.defineProperty(e,t.name,{get:function(){return n},set:function(e){var r=n;n=e,t.onChange&&t.onChange(e,r)}})}),e}var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=require("../lib/message"),i=require("../../lib-inject").Promise;module.exports=function(){function o(){for(var n=this,a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];t(this,o),this.started=i.defer(),(new r).assign(this);var u=this.model=new e([{name:"state",onChange:function(t,e){n.emit("statechange",t,e)},initialize:"loading"},{name:"currentContent",initialize:null}]);Object.defineProperties(this,{currentContent:{get:function(){return u.currentContent}},state:{get:function(){return u.state}}}),this.flow=this.createFlow.apply(this,s),this.flow.catch(function(t){n.emit("error",t)}),["End","Play","Pause","Timeupdate","Error","Skip","Waiting"].forEach(function(t){n["onContent"+t]=function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];n.emit.apply(n,["content"+t.toLowerCase()].concat(r))},n["on"+t]=function(){console.warn("不建议再使用video.on"+t+"，请使用onContent"+t),this["onContent"+t].apply(this,arguments)}})}return n(o,[{key:"createFlow",value:function(){}},{key:"start",value:function(){return console.log("process start"),this.started.resolve(),this}},{key:"stop",value:function(){return this.started.reject(),this.flow&&this.flow.stop&&this.flow.stop(),this.off(),this}}]),o}(); 
 			}); 
		define("src/classes/State.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(){}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=require("../lib/message"),s=require("../../lib-inject").Promise;module.exports=function(){function a(n,s){e(this,a),this.destroyed=!1;var i=Object.keys(n);i.forEach(function(e){!(n[e].to instanceof Array)&&(n[e].to=[]),!("function"==typeof n[e].beforeLeave)&&(n[e].beforeLeave=t),!("function"==typeof n[e].beforeEnter)&&(n[e].beforeEnter=t),!("function"==typeof n[e].afterLeave)&&(n[e].afterLeave=t),!("function"==typeof n[e].afterEnter)&&(n[e].afterEnter=t)}),this.message=new r,this.states=n,this._state=i[0],this._laststate="",Object.defineProperties(this,{state:{get:function(){return this._state}},lastState:{get:function(){return this._laststate}}})}return n(a,null,[{key:"create",value:function(e,t){return new a(e,t)}}]),n(a,[{key:"setState",value:function(e,t){var n=(t=t||{}).force||!1,r=t.silent||!1,s=this.states;if(n||~s[this._state].to.indexOf(e)){var a=this._state;if(r)this._laststate=this._state,this._state=e;else{var i=!1;if(n||(i=!1===s[a].beforeLeave(e),i=!1===s[e].beforeEnter(a)||!0===i),i)return;this._laststate=this._state,this._state=e,this.message.emit("change",e,a),s[a].afterLeave(e),s[e].afterEnter(a)}return 0==s[e].to.length&&(this.message.emit("end",e),this.message.off()),this}}},{key:"getStatePromise",value:function(e){var t=this;if("function"!=typeof e){var n=e;e=function(e){return e==n}}return new s(function(n,r){var s=t.message.on("change",function(t){e(t)&&(s(),n())});t.message.on("end",function(e){s(),r(new Error("state ended:"+e))},!0)})}},{key:"onChange",value:function(e){return this.message.on("change",e),this}}]),a}(); 
 			}); 
		define("src/controller-live/flow-getinfo/err-code.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={4444:"网络错误",3333:"播放出错"};module.exports={PLAY_ERROR:1,errCode:e,genCode:function(e,r){return"63"+(1==r?104:200)+"."+e},genError:function(r){var n=new Error(r.msg||e[r.em]),o=1==r.scene;return n.code=o?"P.0":"G."+r.em,n.em=r.em,n.fullecode=this.genCode(r.em,o?0:1),n}}; 
 			}); 
		define("src/controller-live/flow-getinfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../util/platform-config").APP_PLATFORM,r=require("../../../lib-inject").request,t=require("../../lib/algorithm/qvsec"),i=require("../../module/network"),n=require("../../lib/algorithm/fillTimeStamp"),o=require("../../../lib-inject").Promise,u=require("../../module/log")("live-info"),c=require("./err-code"),f=require("../../module/guid");module.exports=function(l,d,m,q){function a(r){return"https://info.zb.video.qq.com/?host=qq.com&cmd=2&qq=0&guid="+f+"&appVer=7&stream=2&ip=&system=1&sdtfrom="+e[m]+"&livepid="+d+"&cnlid="+l+"&_rnd="+v+"&"+h+"&newnettype="+r.networkCode+(q?"&defn="+q+"&fntick="+r.fntick:"")}function s(){return w=a({fntick:Date.now(),networkCode:p}),b=Date.now(),r(w,{needlogin:!0})}var v=n(),g=t["v4138"==m?"$xxzb":"$xxzbf"](e[m],l,1,1,v),h="";g&&(h="encver="+("v4138"==m?"201":"301")+"&_qv_rmtv2="+g);var p=0,w=void 0,b=void 0;return new o(function(e){i(function(r){p=r,e()})}).then(s).catch(function(e){return u("first request error",e),s()}).catch(function(){throw c.genError({em:4444})}).then(function(e){return u("getinfo result:",e),e.loadTime=Date.now()-b,e})}; 
 			}); 
		define("src/controller-live/flow-getinfo/live-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(d){return e("https://accessv6.video.qq.com.video.qq.com/tinyapp/live_detail?vappid=49109510&vsecret=c1202d7f3ba41f86cdd2d3d1082605b4ed764c21e29520f3&pid="+d)}; 
 			}); 
		define("src/controller-live/flow-getinfo/live-poll.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){return e("https://zbaccess.video.qq.com/fcgi/live_poll?vappid=31678259&vsecret=1e029a67beb2d7e7e7bb8321fb161a46fe76c7837beb2cee",{data:t})}; 
 			}); 
		define("src/controller-live/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)},i=require("./flow-getinfo/index"),a=require("../classes/Controller"),u=require("../classes/Content"),c=require("./reporter"),f=require("../lib/message"),l=require("../lib/es6-promise"),s=require("../module/gen-guid"),p=require("./flow-getinfo/err-code"),d=require("../util/platform-config").APP_PLATFORM,m=function(m){function v(){return e(this,v),t(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return n(v,a),o(v,[{key:"createFlow",value:function(e,t){var n=this,o=e.sid,r=e.from,a=e.pid,m=(e.defn,t.getReportParam);var v=null,y=!1,h=void 0,w=s(),g=new c;g.setInitData({seq:0,firstreport:1,playno:w,platform:d[r],sid:o,pid:a,getReportParam:m});var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=Date.now();return i(o,a,r,e.defn||"").then(function(e){v&&v.off(),v=new u({url:e.data.playurl,iretcode:e.data.iretcode}),n.emit("contentchange",{currentContent:v,getinforaw:e}),t.isSwitchDefn&&h&&h.emit("videoend",{switch:o}),h&&h.off(),h=new f;var r={url:v.url,iretcode:v.iretcode};t.isSwitchDefn&&(r.switch=o),g.initPlay(h,r,e.data),g.report({firstload:Date.now()-c,geturltime:e.loadTime,cmd:205})}).then(function(){return new l(function(e,t){!y&&v.on("start",function(){h.emit("videoplaying",v),y=!0},!0),v.on("start",function(e){h.emit("videostart",e)}),v.on("play",function(){h.emit("videoplay",v)}),v.on("pause",function(){h.emit("videopause",v)}),v.on("timeupdate",function(e){h.emit("videotimeupdate",e)}),v.on("error",function(e){var n=p.genError({msg:e?e.detail&&e.detail.errMsg||e.message:"",em:3333,scene:p.PLAY_ERROR});t(n)},!0),v.on("end",function(){e(),h.emit("videoend")},!0),v.on("timeout",function(e){h.emit("videotimeout",e)}),v.on("waiting",function(){h.emit("videowaiting")})})}).catch(function(e){g.error(e),n.emit("error",e)})},O=b();return["End","Play","Pause","Timeupdate","Error","Skip","Waiting"].forEach(function(e){n.on("content"+e.toLowerCase(),function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];v&&v["onContent"+e].apply(v,o)})}),this.switchDefn=function(e){b({defn:e},{isSwitchDefn:!0})},O}},{key:"stop",value:function(){r(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"stop",this).call(this),this.playflow&&this.playflow.stop()}}]),v}();module.exports=function(e,t){return new m(e,t)}; 
 			}); 
		define("src/controller-live/reporter-play.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,r){var t=e.sid||r.sid||0,i={lookback:f,guid:o,fplayerver:s,BossId:l,Pwd:a,prog:+t,livepid:+(e.pid||0),viewid:t.slice(0,-2),_dc:Math.random(),devtype:v,playertype:m},n=void 0;return g.forEach(function(o){n=r[o]||e[o],i[o]="number"==typeof n?n:n||""}),i}var r=require("../module/reporter/report-queue"),o=require("../module/guid"),t=require("../module/system-info")(),i=require("../module/network"),n=require("../module/log")("txv-live-reporter-play"),c=require("../module/account"),u=require("../../conf"),p=c.getAccountInfoSync(),s=p&&p.plugin&&p.plugin.version||u.version,d=t.system.match(/ios/i),l=7433,a=1230624807,f=0,m=0,y={"6g":6,"5g":5,"4g":4,"3g":3,"2g":2,wifi:1,"有线":100,0:0},v=0;switch(t.platform){case"devtools":v=d?3:2;break;case"android":v=2;break;case"ios":v=3;break;case"ipad":v=4}var g=["playno","hc_qq","sdtfrom","firstload","blocktime","block","prd","errcode","dsip","durl","firstreport","sUrl","sRef","seq","cmd","fullecode","live_type","geturltime","playtime","ispay","isuserpay","switch","freetype","https","cdn","vip_type","hc_pvid","login_type","open_id"];module.exports=function(o,t){t(function(t,c){!t&&c||(c={}),n("before",o);var u=e(o,c);(c.networkCode?function(e){e&&e(y[c.networkCode])}:i)(function(e){Object.assign(u,{nettype:e}),n("report obj",u),r.push({reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(u).map(function(e){return e in u?e+"="+encodeURIComponent(u[e]):""}).filter(function(e){return e}).join("&")})},y)})}; 
 			}); 
		define("src/controller-live/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){if(!t)return{};var a=t.durl=t.url||t.durl||"",r=n.queryParse(a),o=a.match(/\/\/([^/]+?)\//),l=/^https:/.test(a),u="0.0.0.0";o&&o[1]&&(u=(o[1]||"").split(":")[0]);var m={dsip:u,sdtfrom:r.sdtfrom,cdn:s[r.cdn]||0,https:l?1:0,live_type:e(i),playtime:i.playtime,ispay:i.ispay,isuserpay:i.isuserpay,errcode:i.iretcode};return Object.assign(m,t)}function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i="";return i+=1==t.stream?"0":"1",i+=1==t.vcode?"10":"01",i+=1==t.live360?"1":"0",i+=2==t.acode?"1":"0",parseInt(i,2)}var a=function(){function t(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(i,e,a){return e&&t(i.prototype,e),a&&t(i,a),i}}(),r=require("./reporter-play"),n=require("../lib/url"),o=require("../module/log")("txv-live-reporter"),s={zijian:1,lanxun:2,wangsu:3,dilian:4,akama:5,tongxin:6},l=function(){function e(){t(this,e),this.baseParam=null,this.initParam=null,this.getReportParam=null,this.firstreport=0,this.lastStartTime=0,this.waitingCount=0,this.waitingTotalDuration=0,this.lastTimeUpdate=0,this.waitingStartTimeStamp=0}return a(e,[{key:"initBaseData",value:function(t){o("initBaseData~~~~~~~~~"),this.lastStartTime=t||0,this.waitingCount=0,this.waitingTotalDuration=0,this.waitingStartTimeStamp=0,this.lastTimeUpdate=0}},{key:"initPlay",value:function(t,e,a){var r=this;r.baseParam=i(e,a),t.on("videoplaying",function(t){o("videoplaying~~~~")}),t.on("videostart",function(t){o("START~~~~~~~~~~~",t),r.initBaseData(t)}),t.on("videoplay",function(t){o("playing~~~~~~~~~~~",r.waitingStartTimeStamp),r.waitingStartTimeStamp&&(r.waitingTotalDuration+=Date.now()-r.waitingStartTimeStamp,r.waitingStartTimeStamp=0)}),t.on("videopause",function(){}),t.on("videotimeupdate",function(t){r.lastTimeUpdate=t,t-r.lastStartTime>=60&&(o("timeupdate~~~~~~~~~",r.lastStartTime,t),r.report({cmd:263,prd:Math.floor(6e4),block:r.waitingCount,blocktime:r.waitingTotalDuration}),r.initBaseData(t))}),t.on("videotimeout",function(t){}),t.on("videoend",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o("ended~~~~~~",r.lastTimeUpdate-r.lastStartTime),r.report(Object.assign({cmd:263,prd:Math.floor(1e3*(r.lastTimeUpdate-r.lastStartTime)),block:r.waitingCount,blocktime:r.waitingTotalDuration},t)),r.initBaseData()}),t.on("videowaiting",function(){r.waitingStartTimeStamp||(r.waitingStartTimeStamp=Date.now()),o("WAITING~~~~~~~~~~~",r.waitingStartTimeStamp),++r.waitingCount})}},{key:"report",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this;t.firstreport=i.firstreport,i.firstreport&&(i.firstreport=0),r(Object.assign({},i.initParam,i.baseParam,t),i.getReportParam),i.initParam.seq++}},{key:"error",value:function(t){this.report({cmd:150,errcode:t.em,fullecode:t.fullecode})}},{key:"setfirstreport",value:function(t){this.firstreport=t}},{key:"setAsyncFn",value:function(t){this.getReportParam=t}},{key:"setInitData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setfirstreport(t.firstreport),this.setAsyncFn(t.getReportParam),delete t.firstreport,delete t.getReportParam,this.initParam=t,this.initParam.seq=t.seq||0}}]),e}();module.exports=l; 
 			}); 
		define("src/controller-video/flow-getinfo/data/ad.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function r(r){a(r,{header:{Cookie:"appuser="+K+"; Lturn="+y}}).then(function(r){l("上报成功"),l(r)},function(e){l("上报失败"),l(e),r=r+"&appuesr="+K,q.emit("report",{reportUrl:r}),l("用message抛出上报事件")})}function e(){y=n.get("Lturn"),l("Lturn:"+y),y?l("Lturn+1:"+(y+=1)):(y=Math.floor(1e3*Math.random()),l("create Lturn:"+y)),y>999&&(y=0),n.set("Lturn",y,72e5)}function t(r){var e=[];return r.item.forEach(function(r,t){e.push(r)}),e}function i(r){l("开始检查trueview贴片状态");for(var e=r.length,t=[],i=0,p=0;p<e;p++)r[p].trueviewTurn=!1,1==r[p].order_id||"FT"==r[p].type?t[p]=0:(o(r[p])&&(r[p].trueviewTurn=!0),t[p]=1,i+=1);D=1==i,l("trueviewCheckArr内容是："+t+",trueviewCount值是："+i)}function o(r){if(l("开始检查trueview开关"),r.params&&void 0!=r.params&&""!=r.params){var e=r.params;if(-1!=e.indexOf("richdata=")){var t=e.substr(e.indexOf("richdata=")+9);-1!=t.indexOf("&")&&(t=t.substr(0,t.indexOf("&"))),t=decodeURIComponent(t.replace(/\+/g," ")),l("转换出来的richdata参数是："+t);try{var i=JSON.parse(t);if(l("转换成json后的对象是："+i),i.plugins&&void 0!=i.plugins&&i.plugins.trueview&&void 0!=i.plugins.trueview&&"Y"==i.plugins.trueview)return l("trueview开关是打开的Y！"),!0}catch(r){l("richdata解析出错！")}}}return!1}function p(r){L=0;for(var e=0;e<r.length;e++)1!=r[e].order_id&&(L+=r[e].duration/1e3);l("广告总时长为："+L)}var a=require("../../../../lib-inject").request,d=require("../../../lib/message"),n=require("../../../module/cache"),l=require("../../../module/log")("ad"),u=require("./adReport"),s=require("./md5"),h=require("../../../../private-setting"),c="",v=0,m="",U=0,f=-1,g=1,D=void 0,w=-1,L=0,T="",O="",S=void 0,y=void 0,K=void 0,R=void 0,q=new d;(module.exports=function(o){l(o),o.vid&&(c=o.vid),o.live&&(v=o.live),o.chid&&(U=o.chid),o.coverid&&(m=o.coverid),o.pu&&(f=o.pu),o.openid&&(O=o.openid),K=String(s(O).substr(0,16)).toUpperCase(),e();var d={};return S=(new Date).getTime(),a("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live="+v+"&pu="+f+"&rfid="+T+"&openid="+O+"&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid="+U+"&st=0&resp_type=json&_t=1478361546359&rfid=&vid="+c+"&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&"+(1===h.get("adstyle")?"style=1":"")+"&coverid="+m,{needlogin:!0,header:{Cookie:"appuser="+K+"; Lturn="+y}}).then(function(r){R=r,r.data.adLoc&&r.data.adLoc.tpid&&(g=r.data.adLoc.tpid),d={t:"0",url:"",vid:c,coverid:m,pf:"H5",vptag:"",pid:"",chid:U,tpid:g};var e=(new Date).getTime()-S;l("livew请求完成，进行dp3上报,时间为:"+e),u.reportDp3(2,"WL",e,1,100,0,O,d),S=(new Date).getTime();var o=t(r.data.adList);return l("最终adList:"+o),i(o),p(o),o},function(r){l("livew error，再试一次");var e=(new Date).getTime()-S;return l("livew请求失败，进行dp3上报,时间为:"+e),u.reportDp3(2,"WL",e,1,202,0,O,d),S=(new Date).getTime(),a("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live="+v+"&pu="+f+"&rfid="+T+"&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid="+U+"&openid="+O+"&st=0&resp_type=json&_t=1478361546359&rfid=&vid="+c+"&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&coverid="+m,{needlogin:!0,header:{Cookie:"appuser="+K+"; Lturn="+y}}).then(function(r){R=r,r.data.adLoc&&r.data.adLoc.tpid&&(g=r.data.adLoc.tpid),d={t:"0",url:"",vid:c,coverid:m,pf:"H5",vptag:"",pid:"",chid:U,tpid:g};var e=(new Date).getTime()-S;l("livew重试请求完成，进行dp3上报,时间为:"+e),u.reportDp3(2,"WL",e,1,100,0,O,d),S=(new Date).getTime();var o=t(r.data.adList);return l("最终adList:"+o),i(o),p(o),o},function(r){var e=(new Date).getTime()-S;return l("livew error，订单获取失败，返回空数组，进行dp3上报,时间为:"+e),u.reportDp3(2,"WL",e,1,202,0,O,d),S=(new Date).getTime(),[]})}).then(function(e){return e=e.map(function(e,t){return function(){var t=[];if(e.reportUrlOther.reportitem)for(o=0;o<e.reportUrlOther.reportitem.length;o++)t[o]={url:e.reportUrlOther.reportitem[o].url,time:e.reportUrlOther.reportitem[o].reporttime,isReported:!1};var i=[];if(e.reportUrlSDK.reportitem)for(var o=0;o<e.reportUrlSDK.reportitem.length;o++)i[o]={url:e.reportUrlSDK.reportitem[o].url,time:e.reportUrlSDK.reportitem[o].reporttime,isReported:!1};return l("当前广告的trueview开关是否打开："+e.trueviewTurn),l("当前广告是否符合trueview条件："+D),D?(l("allAdDuration:"+L),w=L<=5?0:5):w=-1,l("skipable:"+w),{oid:e.order_id,url:e.image[0].url,reportUrl:{url:e.reportUrl,time:e.ReportTime,isReported:!1},reportUrlOther:t,reportUrlSDK:i,skipable:w,duration:e.duration/1e3,allDuration:L,onSkip:function(){l("当前广告被跳过了，上报智慧点10237"),u.reportWisdomPoint(10237,e.order_id,e.order_id,"");var r=(new Date).getTime()-S;l("当前广告被跳过，进行dp3上报,时间为:"+r),u.reportDp3(4,"WL",r,1,"",0,O,d),S=(new Date).getTime()},onTimeupdate:function(r){},onEnd:function(){var r=(new Date).getTime()-S;l("当前广告播放结束，进行dp3上报,时间为:"+r),u.reportDp3(5,"WL",r,1,"",0,O,d),S=(new Date).getTime(),R.data.adLoc&&R.data.adLoc.rfid&&(T=R.data.adLoc.rfid,l("rfid赋值成功："+T))},onStart:function(){l("当前广告开始播放"+e),l("当前广告的oid是："+this.oid);var t=(new Date).getTime()-S;if(l("素材加载完成，开始播放，进行dp3上报,时间为:"+t),u.reportDp3(3,"WL",t,1,"",0,O,d),S=(new Date).getTime(),this.reportUrl.url=u.updateUrlParam(this.reportUrl.url,d),this.reportUrl.time>=0&&!this.reportUrl.isReported){this.reportUrl.isReported=!0;try{r(this.reportUrl.url)}catch(r){}}for(i=0;i<this.reportUrlOther.length;i++)if(this.reportUrlOther[i].url=u.updateUrlParam(this.reportUrlOther[i].url,d),this.reportUrlOther[i].time>=0&&!this.reportUrlOther[i].isReported){this.reportUrlOther[i].isReported=!0;try{u.pingUrl(this.reportUrlOther[i].url)}catch(r){}}for(var i=0;i<this.reportUrlSDK.length;i++)if(this.reportUrlSDK[i].url=u.updateUrlParam(this.reportUrlSDK[i].url,d),this.reportUrlSDK[i].time>=0&&!this.reportUrlSDK[i].isReported){this.reportUrlSDK[i].isReported=!0;try{u.pingUrl(this.reportUrlSDK[i].url)}catch(r){}}},onError:function(){var r=(new Date).getTime()-S;l("当前广告播放出错，进行dp3上报,时间为:"+r),u.reportDp3(4,"WL",r,1,"",0,O,d),S=(new Date).getTime()},onReportEmpty:function(){l("我是空单上报，当前广告的上报地址是："+this.reportUrl.url),this.reportUrl.url=u.updateUrlParam(this.reportUrl.url,d);try{r(this.reportUrl.url)}catch(r){}for(e=0;e<this.reportUrlOther.length;e++)if(this.reportUrlOther[e].url=u.updateUrlParam(this.reportUrlOther[e].url,d),this.reportUrlOther[e].time>=0&&!this.reportUrlOther[e].isReported){this.reportUrlOther[e].isReported=!0;try{u.pingUrl(this.reportUrlOther[e].url)}catch(r){}}for(var e=0;e<this.reportUrlSDK.length;e++)if(this.reportUrlSDK[e].url=u.updateUrlParam(this.reportUrlSDK[e].url,d),this.reportUrlSDK[e].time>=0&&!this.reportUrlSDK[e].isReported){this.reportUrlSDK[e].isReported=!0;try{u.pingUrl(this.reportUrlSDK[e].url)}catch(r){}}}}}}),{adList:e}}).catch(function(r){return{}})}).reporter=u.reporter; 
 			}); 
		define("src/controller-video/flow-getinfo/data/adReport.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function r(r){var t=r.indexOf("?"),e=new Object,i=r;if(t>=0)for(var o=(i=i.substr(t+1)).split("&"),n=void 0,a=0;a<o.length;a++)(n=o[a].split("=")).length>1?e[n[0]]=n[1]:e[n[0]]="null";return e}var t=require("../../../lib/message"),e=(require("../../../module/cache"),require("../../../module/log")("ad-report")),i=new t;(module.exports={updateUrlParam:function(t,e){try{var i=r(t),o=t,n=!0;if(-1!=t.indexOf("?")){o=t.substring(0,t.indexOf("?"));var a=void 0;for(a in e)i[a]=e[a];for(a in i)n?(n=!1,o+="?"+a+"="+i[a]):o+="&"+a+"="+i[a]}}catch(r){o=""}return o},reportDp3:function(r,t,i,o,n,a,d,p){e("开始dp3上报");var s="https://dp3.qq.com/stdlog/?bid=weixin&step="+r+"&merged="+o+"&errorcode="+n+"&trycount="+a+"&openid="+d;s=this.updateUrlParam(s,p);try{this.pingUrl(s)}catch(r){e("dp3上报失败")}},reportWisdomPoint:function(r,t,i,o){e("开始智慧点上报");var n="https://t.l.qq.com?t=s&actid="+r;n+="&oid="+t+"&mid="+i+"&locid="+o;try{this.pingUrl(n)}catch(r){}},pingUrl:function(r,t,o,n){e("ping上报地址："+r);var a=(new Date).getTime();r=this.updateUrlParam(r,{reportTime:a}),i.emit("report",{reportUrl:r}),e("用message抛出上报事件")}}).reporter=i; 
 			}); 
		define("src/controller-video/flow-getinfo/data/getinfo-status.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={};e[10001]=e[50]=e[68]=e[71]=e[73]=e[74]=e[76]=e[77]=e[445]=e[444]="啊哦，没能找到你要的节目信息~",e[51]=e[52]=e[64]=e[61]=e[62]=e[63]=e[65]=e[66]=e[81]=e[82]=e[84]=e[86]="啊哦，本来在这儿的视频不见了~",e[69]="小程序暂不支持该视频播放，请使用腾讯视频手机版观看~",e[94]="经检测您当前登录的账号存在安全问题，为保障您的账号安全，已暂停了您的会员权益。",e[80]=e[83]="啊哦，版权原因，该视频暂时无法播放~",module.exports=e; 
 			}); 
		define("src/controller-video/flow-getinfo/data/getinfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,m,d,s,v){if(v&&v.vl&&v.fl)return l.resolve(v);a=m,d=d||"auto";var y=i(),h=o["v4138"==m?"$xx":"$xxf"](p[m],e,a,1,y),g="";h&&(g="encver="+("v4138"==m?2:300)+"&_qv_rmtv2="+h),u("getinfo waiting");var b=0,q="";return l.resolve().then(function(){return s.onBeforeGetinfo(e)}).then(function(e){q="object"===(void 0===e?"undefined":t(e))?e:{},(q=Object.keys(q).map(function(e,t){return-1!=["auth_from","auth_ext","defnpayver","spvideo","spaudio"].indexOf(e)?e+"="+q[e]:""}).filter(function(e){return e}).join("&"))&&(q="&"+q),console.log("getinfo beforeGetinfoParam",q)}).then(function(){return new l(function(e,t){f(function(t){b=t,e()})})}).then(function(){u("request start");var t="https://h5vv6.video.qq.com/getinfo?"+g+"&defn="+d+"&platform="+p[m]+"&otype=json&sdtfrom="+m+"&_rnd="+y+"&appVer=7&"+(c?"dtype=3&":"")+"vid="+e+"&newnettype="+b+q;return r(t,{needlogin:!0,needLoginCase:!0})}).catch(function(t){return r("https://bkvv.video.qq.com/getinfo?"+g+"&defn="+d+"&platform="+p[m]+"&otype=json&sdtfrom="+m+"&_rnd="+y+"&appVer=7&"+(c?"dtype=3&":"")+"vid="+e+"&newnettype="+b+q,{needlogin:!0,needLoginCase:!0})}).catch(function(){var e=new Error(n[444]);throw e.em=444,e.code="G.444",e=s.onAfterGetInfo&&s.onAfterGetInfo(e)||e}).then(function(e){return e=e.data,u("getinfo result:",e),e})}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=require("./getinfo-status"),r=require("../../../../lib-inject").request,o=require("../../../lib/algorithm/qvsec"),i=require("../../../lib/algorithm/fillTimeStamp"),f=require("../../../module/network"),u=require("../../../module/log")("getInfo"),l=require("../../../../lib-inject").Promise,c="devtools"!=wx.getSystemInfoSync().platform,a=void 0,p=require("../../../util/platform-config").APP_PLATFORM;module.exports=function(){var t=arguments[3]||{};return e.apply(this,arguments).then(function(e){if(e.em){var r=new Error(n[e.em]||e.msg);throw r.em=e.em,r.code="G."+e.em,r=t.onAfterGetInfo&&t.onAfterGetInfo(r)||r}return e}).then(function(e){var n=e.vl.vi[0],r={duration:+n.td,dltype:e.dltype,fmid:e.fl.fi.filter(function(e){return+e.sl})[0].id,filesize:e.fl.fi.filter(function(e){return+e.sl})[0].fs,preview:e.preview,charge:n.ch,raw:e};return n.ch<1&&(r.preview=e.preview,r.charged=n.ch),3==e.dltype?(r.url=n.ul.ui.map(function(e){return e.hls.pt?e.url+e.hls.pt+"&platform="+p[a]+"&sdtfrom="+a:""}),r.url=r.url.filter(function(e){return e})):r.url=n.ul.ui.map(function(e){return e.url+n.fn+"?vkey="+n.fvkey+"&br="+n.br+"&fmt=auto&level="+n.level+"&platform="+p[a]+"&sdtfrom="+a}),r=t.onAfterGetInfo&&t.onAfterGetInfo(null,r)||r})}; 
 			}); 
		define("src/controller-video/flow-getinfo/data/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(t){function o(n,t){var o=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(o>>16)<<16|65535&o}function r(n,t){return n<<t|n>>>32-t}function e(n,t,e,u,i,f){return o(r(o(o(t,n),o(u,f)),i),e)}function u(n,t,o,r,u,i,f){return e(t&o|~t&r,n,t,u,i,f)}function i(n,t,o,r,u,i,f){return e(t&r|o&~r,n,t,u,i,f)}function f(n,t,o,r,u,i,f){return e(t^o^r,n,t,u,i,f)}function c(n,t,o,r,u,i,f){return e(o^(t|~r),n,t,u,i,f)}function d(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var r=void 0,e=void 0,d=void 0,v=void 0,l=void 0,a=1732584193,h=-271733879,m=-1732584194,y=271733878;for(r=0;r<n.length;r+=16)e=a,d=h,v=m,l=y,h=c(h=c(h=c(h=c(h=f(h=f(h=f(h=f(h=i(h=i(h=i(h=i(h=u(h=u(h=u(h=u(h,m=u(m,y=u(y,a=u(a,h,m,y,n[r],7,-680876936),h,m,n[r+1],12,-389564586),a,h,n[r+2],17,606105819),y,a,n[r+3],22,-1044525330),m=u(m,y=u(y,a=u(a,h,m,y,n[r+4],7,-176418897),h,m,n[r+5],12,1200080426),a,h,n[r+6],17,-1473231341),y,a,n[r+7],22,-45705983),m=u(m,y=u(y,a=u(a,h,m,y,n[r+8],7,1770035416),h,m,n[r+9],12,-1958414417),a,h,n[r+10],17,-42063),y,a,n[r+11],22,-1990404162),m=u(m,y=u(y,a=u(a,h,m,y,n[r+12],7,1804603682),h,m,n[r+13],12,-40341101),a,h,n[r+14],17,-1502002290),y,a,n[r+15],22,1236535329),m=i(m,y=i(y,a=i(a,h,m,y,n[r+1],5,-165796510),h,m,n[r+6],9,-1069501632),a,h,n[r+11],14,643717713),y,a,n[r],20,-373897302),m=i(m,y=i(y,a=i(a,h,m,y,n[r+5],5,-701558691),h,m,n[r+10],9,38016083),a,h,n[r+15],14,-660478335),y,a,n[r+4],20,-405537848),m=i(m,y=i(y,a=i(a,h,m,y,n[r+9],5,568446438),h,m,n[r+14],9,-1019803690),a,h,n[r+3],14,-187363961),y,a,n[r+8],20,1163531501),m=i(m,y=i(y,a=i(a,h,m,y,n[r+13],5,-1444681467),h,m,n[r+2],9,-51403784),a,h,n[r+7],14,1735328473),y,a,n[r+12],20,-1926607734),m=f(m,y=f(y,a=f(a,h,m,y,n[r+5],4,-378558),h,m,n[r+8],11,-2022574463),a,h,n[r+11],16,1839030562),y,a,n[r+14],23,-35309556),m=f(m,y=f(y,a=f(a,h,m,y,n[r+1],4,-1530992060),h,m,n[r+4],11,1272893353),a,h,n[r+7],16,-155497632),y,a,n[r+10],23,-1094730640),m=f(m,y=f(y,a=f(a,h,m,y,n[r+13],4,681279174),h,m,n[r],11,-358537222),a,h,n[r+3],16,-722521979),y,a,n[r+6],23,76029189),m=f(m,y=f(y,a=f(a,h,m,y,n[r+9],4,-640364487),h,m,n[r+12],11,-421815835),a,h,n[r+15],16,530742520),y,a,n[r+2],23,-995338651),m=c(m,y=c(y,a=c(a,h,m,y,n[r],6,-198630844),h,m,n[r+7],10,1126891415),a,h,n[r+14],15,-1416354905),y,a,n[r+5],21,-57434055),m=c(m,y=c(y,a=c(a,h,m,y,n[r+12],6,1700485571),h,m,n[r+3],10,-1894986606),a,h,n[r+10],15,-1051523),y,a,n[r+1],21,-2054922799),m=c(m,y=c(y,a=c(a,h,m,y,n[r+8],6,1873313359),h,m,n[r+15],10,-30611744),a,h,n[r+6],15,-1560198380),y,a,n[r+13],21,1309151649),m=c(m,y=c(y,a=c(a,h,m,y,n[r+4],6,-145523070),h,m,n[r+11],10,-1120210379),a,h,n[r+2],15,718787259),y,a,n[r+9],21,-343485551),a=o(a,e),h=o(h,d),m=o(m,v),y=o(y,l);return[a,h,m,y]}function v(n){var t=void 0,o="",r=32*n.length;for(t=0;t<r;t+=8)o+=String.fromCharCode(n[t>>5]>>>t%32&255);return o}function l(n){var t=void 0,o=[];for(o[(n.length>>2)-1]=void 0,t=0;t<o.length;t+=1)o[t]=0;var r=8*n.length;for(t=0;t<r;t+=8)o[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return o}function a(n){return v(d(l(n),8*n.length))}function h(n,t){var o=void 0,r=l(n),e=[],u=[],i=void 0;for(e[15]=u[15]=void 0,r.length>16&&(r=d(r,8*n.length)),o=0;o<16;o+=1)e[o]=909522486^r[o],u[o]=1549556828^r[o];return i=d(e.concat(l(t)),512+8*t.length),v(d(u.concat(i),640))}function m(n){var t="",o=void 0,r=void 0;for(r=0;r<n.length;r+=1)o=n.charCodeAt(r),t+="0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o);return t}function y(n){return unescape(encodeURIComponent(n))}function p(n){return a(y(n))}function g(n){return m(p(n))}function b(n,t){return h(y(n),y(t))}function s(n,t){return m(b(n,t))}function S(n,t,o){return t?o?b(t,n):s(t,n):o?p(n):g(n)}"function"==typeof define&&define.amd?define(function(){return S}):"object"===("undefined"==typeof module?"undefined":n(module))&&module.exports?module.exports=S:t.md5=S}(void 0); 
 			}); 
		define("src/controller-video/flow-getinfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e){e=e||"";var n=u.test(e);if(n)return n;var r="";return e.replace(f,function(e,n){r=n}),/qq\.com/.test(r)}var n=function(e){return e&&e.__esModule?e:{default:e}}(require("../../dataset/ad-text")),r=require("../../../lib-inject").Promise,t=require("./data/ad"),i=require("./data/getinfo"),o=require("../../module/account"),u=/\/\/[^/]*?qq\.com/,f=/\/\/[^/]+?\/([^/]+?)\//;module.exports=function(u,f){var d=(u=u||{}).vid,a=u.cid,c=u.from,l=u.openid,v=u.defn,s=u.videoInfo||{},q=u.chid;(f=f||{}).onBeforeGetinfo="function"==typeof f.onBeforeGetinfo?f.onBeforeGetinfo:function(){};[d,c,v].join("/");var m=o.isInner(),p=o.canUse(),h=p&&m;if(s.hasOwnProperty("url")&&(h||!p&&e(s.url))){var x=s.vecDefn;return x&&x.length&&(s.fmid=x.filter(function(e){return e.selected})[0].id),r.resolve({videoinfo:s,ad:{}})}if((h||!p)&&s.vl&&s.fl)return i(d,c,v,f,s).then(function(e){return{videoinfo:e,ad:{}}});var B=1===u.scene&&(h||!p&&u.qwer);return r.all([B?r.resolve({}):t({coverid:a,vid:d,live:0,chid:q||41,pu:1,openid:l||""}),i(d,c,v,f),(0,n.default)()]).then(function(e){return{ad:e[0],videoinfo:e[1],adText:e[2]}})}; 
 			}); 
		define("src/controller-video/flow-play/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n=require("../../../lib-inject").Promise,e=require("../../lib/message"),t=require("../../classes/Content"),i=require("../../module/log")("flow-getinfo");module.exports=function(o,r,u){var a={time:0,duration:0,skipable:!1},c={},f={},d=[],s=n.defer(),l=s.promise,p=new e,m=null,v=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t={currentContent:n=n||m,preloadContents:d.filter(function(e){return!f[e.id]&&e!=n}),extra:e,getinforaw:g.raw};n&&n.isad&&(t.progress=a),m=n,u(t)},h=o.ad,g=o.videoinfo,w=!1;(h.adList||[]).forEach(function(e){var o=e(),r=new t({url:o.url,duration:o.duration,isad:!0}),u=new n(function(n){w||(r.on("end",function(){n(),o.onEnd()},!0),r.on("error",function(){n(),o.onError()},!0),r.on("timeout",function(){n(),o.onError()},!0),r.on("skip",function(){w=!0,n(),o.onSkip()},!0),r.on("start",function(){p.emit("adplaying",r),o.onStart()},!0),r.on("timeupdate",function(n){o.onTimeupdate(n)},!0),p.on("_terminate",function(){n()}))}).then(function(n){return f[r.id]=!0,n});c[r.id]=r,d.push(r),a.duration+=o.duration,a.skipable=o.skipable,l=l.then(function(){return i("playflow: ad."+o.url),"1"==o.oid?(i("这是一个空单，往下走"),void o.onReportEmpty()):(v(r),u.then(function(n){a.time+=r.duration}))})});var y=new t({url:g.url,duration:g.duration,filesize:g.filesize,isad:!1,preview:g.preview,charged:g.charged});c[y.id]=y,d.unshift(y);var E=new n(function(n,e){function t(t){!i&&t.on("start",function(){p.emit("videoplaying",t),i=!0},!0),t.on("start",function(){p.emit("videostart",t)}),t.on("play",function(){p.emit("videoplay",t)}),t.on("pause",function(){p.emit("videopause",t)}),t.on("timeupdate",function(n){p.emit("videotimeupdate",n,g.duration)}),t.on("error",function(n){var t=new Error(n?n.detail&&n.detail.errMsg||n.message:"播放出错");t.code="P.0",e(t)},!0),t.on("end",n,!0),t.on("timeout",function(n){p.emit("videotimeout",n)})}var i=!1;t(y),p.on("_terminate",function(){n()}),p.on("_changevideocontent",function(n){y.off(),f[y.id]=!0,d.every(function(e,t){return e!=y||(d.splice(t,1,n),!1)}),t(n),m==y?v(n):v(null,{isPlayingAd:!0}),c[n.id]=n,y=n})}).then(function(n){return f[y.id]=!0,n});l=l.then(function(){return y.off("change"),y.on("change",function(){v(y)}),p.on("_changevideocontent",function(n){y.off("change"),n.on("change",function(){v(n)})}),v(y),E}).then(function(){p.emit("end")}).catch(function(n){throw p.emit("error",n),n}),v(null);var k={currentContent:m,progress:l,stop:function(){return p.emit("_terminate"),p.emit("terminate"),Object.keys(c).forEach(function(n){c[n].off()}),p.off(),this},start:function(){return s.resolve(),l},on:function(){return p.on.apply(p,arguments)},switchVideo:function(n){var e=n.videoinfo;g=e;var i=new t({url:e.url,duration:e.duration,filesize:e.filesize,isad:!1,preview:e.preview,charged:e.charged});p.emit("_changevideocontent",i)}};return["End","Play","Pause","Timeupdate","Error","Skip"].forEach(function(n){r.on("content"+n.toLowerCase(),function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];var r=e&&c[e]?c[e]:m;r&&r["onContent"+n].apply(r,i)})}),k}; 
 			}); 
		define("src/controller-video/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var u=o.get;if(void 0!==u)return u.call(n)},i=function(e){return e&&e.__esModule?e:{default:e}}(require("../lib/message")),u=require("../../lib-inject").Promise,a=require("./flow-getinfo/index"),f=require("./flow-play/index"),c=require("./reporter"),l=require("../module/reporter/index"),p=require("../classes/Controller"),s=require("../module/log")("controller-video-index");require("./flow-getinfo/data/ad").reporter.on("report",function(e){s("url",e),l.any(e)});var d=function(l){function s(){return e(this,s),t(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return r(s,p),n(s,[{key:"createFlow",value:function(e,t){var r=this;e=e||{},t=t||{};var n=e,o=n.vid,l=n.from,p=n.cid,s=(n.defn,n.qwer,n.scene,n.videoInfo,t.getReportParam),d=new u(function(e){s?s(function(t,r){e(r&&r.hc_openid||"")}):e("")}),y=c({cid:p,vid:o},{getReportParam:s}),h=this.model,v=d.then(function(r){return e.openid=r,a(e,t)}).then(function(e){h.state="ready",i.default.emit("adText",e.adText);var t=r.playflow=f(e,r,function(e){h.currentContent=e.currentContent,r.emit("contentchange",e)});return y.setPlayFlow(t),y.setVideoInfo(e.videoinfo),t.on("videotimeupdate",function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.emit.apply(r,["videotimeupdate"].concat(t))}),t.on("videostart",function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.emit.apply(r,["videostart"].concat(t))}),r.started.promise}).then(function(){return h.state="playing",r.playflow.start()}).then(function(e){h.state="ended"}).catch(function(e){throw h.state="error",r.playflow&&r.playflow.stop(),y.error(e),e});return this.switchDefn=function(e){var n=r.currDefn;return d.then(function(r){return a({vid:o,from:l,cid:p,openid:r,defn:e||n},t)}).then(function(e){y.setVideoInfo(e&&e.videoinfo),r.playflow.switchVideo(e)})},v}},{key:"stop",value:function(){this.model.state="ended",o(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"stop",this).call(this),this.playflow&&this.playflow.stop()}}]),s}();module.exports=function(e,t){return new d(e,t)}; 
 			}); 
		define("src/controller-video/report-play.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=require("./../module/reporter/report-queue"),t=require("../../conf"),n=wx.getSystemInfoSync();module.exports=function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments[2],p=arguments[3];c(function(c,a){c&&(a={}),delete(a=a||{}).val1,delete a.val2,delete a.val3,"object"===e(a[r])&&(["val1","val2","val3"].forEach(function(e){a[e]=a[r][e]}),delete a[r]),(a.isReportNetwork?wx.getNetworkType:function(e){e&&e.success({})})({success:function(e){var c={BossId:4327,Pwd:944465292,app_version:t.version,platform:n.platform,client_model:n.model,wx_version:n.version,network:e&&e.networkType?e.networkType:"",step:r,page_url:a.pageName||"",page_query:a.pageQuery||"",page_ref:a.refName||""};["hc_vuserid","hc_openid","hc_appid","ptag","iformat","duration","defn","tpay","adid","playtime","page_url","page_query","page_ref","cid","vid","isvip","val1","val2","val3","appname","nick","rmd","scene","additional","videourl"].forEach(function(e){e in i&&(c[e]=i[e]),e in a&&(c[e]=a[e]),void 0==c[e]&&(c[e]="")}),p&&"function"==typeof p?p(null,{reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(c).map(function(e){return e in c?e+"="+encodeURIComponent(c[e]):""}).filter(function(e){return e}).join("&")}):o.push({reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(c).map(function(e){return e in c?e+"="+encodeURIComponent(c[e]):""}).filter(function(e){return e}).join("&")})}})})}; 
 			}); 
		define("src/controller-video/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e){return{1:1,2:1,10001:4,10002:3,10003:2,10201:4,10202:3,10203:2,100001:2,320089:2,320091:3,320092:4,320093:5}[e]}var n=require("./report-play"),o=require("../module/reporter/index"),t=require("../util/index").Oncer,r=[5,30];module.exports=function(i,a){function u(e){return(e instanceof Array?e:[e||""]).join("+")}function l(){return{iformat:d&&d.dltype?d.dltype:0,duration:d&&d.duration?Math.floor(d.duration):"",defn:d&&d.fmid?e(d.fmid):"",videourl:u(d&&d.url),playtime:m+(s?Date.now()-s:0),vid:c||"",cid:v||""}}var c=i.vid,v=i.cid,f=a.getReportParam||function(e){return e({})},d=null,p=0,s=void 0,m=0,w=!1,y=!1,D=t(function(e){var o=l();o.val1=0,o.val2=0,o.val3=e,o.videourl=e,n(7,o,f)}),h=t(function(e){var o=l();o.val1=p?Date.now()-p:0,o.val2=w?0:1,o.val3=e,o.videourl=e,n(6,o,f)}),g=t(function(e,o){var t=l();t.val1=p?Date.now()-p:0,t.val2={error:3,complete:1,incomplete:y?2:0}[e],void 0==t.val2&&(t.val2=2),t.val3=o,n(5,t,f)}),C=null,q=t(function(e,t){o.reportCache.del("step30");var r=l();r.val1=e,r.val2=t,n(30,r,f)}),x=function(e,t){if(1e4==e){C=setTimeout(function(){q(e)},11e3);var r=l();r.val1=e,r.val2=t,n(30,r,f,function(e,n){o.reportCache.set("step30",n)})}else clearTimeout(C),q(e)};return n(3,l(),f),o.on("_save",function(){var e=l();e.val1=p?Date.now()-p:0,e.val2=y?2:0,n(5,e,f,function(e,n){o.reportCache.set("step5",n)})}),o.on("_restore",function(){r.forEach(function(e){o.reportCache.del("step"+e)})}),{setPlayFlow:t(function(e){e.on("adplaying",function(e){w=!0,D(e.url)}),e.on("videoplay",function(e){!p&&(p=Date.now()),s=Date.now()}),e.on("videoplaying",function(e){y=!0,h(e.url),x(p?Date.now()-p:0,0)}),e.on("videopause",function(){m+=Date.now()-s,s=0}),e.on("videotimeout",function(e){x(e,1)}),e.on("terminate",function(){g("incomplete")}),e.on("end",function(){g("complete")}),e.on("error",function(e){g("error","1 "+(e.code||"")+" "+e.message)})}),setVideoInfo:t(function(e){d=e}),error:function(e){g("error","2 "+(e.code||"")+" "+e.message)}}}; 
 			}); 
		define("src/dataset/ad-text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../lib-inject"),t=function(e){return e&&e.__esModule?e:{default:e}}(require("../lib/es6-promise")),a="";exports.default=function(){return a?t.default.resolve(a):(0,e.request)("https://wuji.video.qq.com/fcgi-bin/wuji?appid=1001781&appkey=fe7eb78d8f694f8b9de1c4be3a0802c6").then(function(e){var t=e&&e.data&&e.data.data&&e.data.data[0],r="";return t&&(r={adCloseText:t.adCloseText||"",adJumpText:t.adJumpText||""},a=r),r}).catch(function(e){return""})}; 
 			}); 
		define("src/lib/algorithm/fillTimeStamp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(r){r=r||10;var t=""+parseInt(+new Date);if(t.length===r)return t;if(t.length>r)return t.substring(0,r);for(var e=r-t.length;e>0;)t="0"+t,e--;return t}; 
 			}); 
		define("src/lib/algorithm/qvsec.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r={};r.ha=function(r){function t(r,t){return((r>>1)+(t>>1)<<1)+(1&r)+(1&t)}for(var e=[],n=0;n<64;)e[n]=0|4294967296*Math.abs(Math.sin(++n));return function(r){for(var n=void 0,o=void 0,a=void 0,u=void 0,c=[],i=decodeURIComponent(encodeURI(r)),h=i.length,d=[n=1732584193,o=-271733879,~n,~o],f=0;f<=h;)c[f>>2]|=(i.charCodeAt(f)||128)<<f++%4*8;for(c[r=16*(h+8>>6)+14]=8*h,f=0;f<r;f+=16){for(h=d,u=0;u<64;)h=[a=h[3],t(n=h[1],(a=t(t(h[0],[n&(o=h[2])|~n&a,a&n|~a&o,n^o^a,o^(n|~a)][h=u>>4]),t(e[u],c[[u,5*u+1,3*u+5,7*u][h]%16+f])))<<(h=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*h+u++%4])|a>>>32-h),n,o];for(u=4;u;)d[--u]=t(d[u],h[u])}for(r="";u<32;)r+=(d[u>>3]>>4*(1^7&u++)&15).toString(16);return r}}(),r.stringToHex=function(r){for(var t="",e=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),n=0;n<r.length;n++)t+=e[r.charCodeAt(n)>>4]+e[15&r.charCodeAt(n)];return t},r.hexToString=function(r){for(var t="",e="0x"==r.substr(0,2)?2:0;e<r.length;e+=2)t+=String.fromCharCode(parseInt(r.substr(e,2),16));return t},r._Seed="#$#@#*ad",r.tempcalc=function(r,t){for(var e="",n=0;n<r.length;n++)e+=String.fromCharCode(r.charCodeAt(n)^t.charCodeAt(n%4));return e},r.u1=function(r,t){for(var e="",n=t;n<r.length;n+=2)e+=r.charAt(n);return e},r._urlStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r.urlenc=function(t,e,n){for(var o="",a=void 0,u=void 0,c=void 0,i=void 0,h=void 0,d=void 0,f=void 0,v=0;v<t.length;)a=t.charCodeAt(v++),u=t.charCodeAt(v++),c=t.charCodeAt(v++),15==v&&(o+="A",o+=e,o+=n),i=a>>2,h=(3&a)<<4|u>>4,d=(15&u)<<2|c>>6,f=63&c,isNaN(u)?d=f=64:isNaN(c)&&(f=64),o=o+r._urlStr.charAt(i)+r._urlStr.charAt(h)+r._urlStr.charAt(d)+r._urlStr.charAt(f);return o},r.$xx=function(t,e,n,o,a){var a=a||parseInt(+new Date/1e3);return r.ha(t+e+a+r._Seed+n+"heherand")},r.$xxzb=function(t,e,n,o,a){var a=a||parseInt(+new Date/1e3);return r.ha(e+"tmp123"+t+"#$$&c2*KA"+a)},r.$xxf=function(t,e,n,o,a){var a=a||parseInt(+new Date/1e3);return r.ha(t+"ques"+a+"*&%$(SD!L}"+e+n)},r.$xxzbf=function(t,e,n,o,a){var a=a||parseInt(+new Date/1e3);return r.ha(e+a+"*#016"+t+"zput")},module.exports=r; 
 			}); 
		define("src/lib/es6-promise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,n){"object"===("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.ES6Promise=n()}(void 0,function(){function e(e){return"function"==typeof e||"object"===(void 0===e?"undefined":t(e))&&null!==e}function n(t){return"function"==typeof t}function r(){return void 0!==D?function(){D(i)}:o()}function o(){var t=setTimeout;return function(){return t(i,1)}}function i(){for(var t=0;t<F;t+=2)(0,G[t])(G[t+1]),G[t]=void 0,G[t+1]=void 0;F=0}function s(t,e){var n=arguments,r=this,o=new this.constructor(c);void 0===o[I]&&x(o);var i=r._state;return i?function(){var t=n[i-1];L(function(){return j(i,o,t,r._result)})}():w(r,o,t,e),o}function u(e){var n=this;if(e&&"object"===(void 0===e?"undefined":t(e))&&e.constructor===n)return e;var r=new n(c);return _(r,e),r}function c(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function a(){return new TypeError("A promises callback cannot return that same promise.")}function l(t){try{return t.then}catch(t){return V.error=t,V}}function h(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function p(t,e,n){L(function(t){var r=!1,o=h(n,e,function(n){r||(r=!0,e!==n?_(t,n):m(t,n))},function(e){r||(r=!0,b(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,b(t,o))},t)}function d(t,e){e._state===Q?m(t,e._result):e._state===R?b(t,e._result):w(e,void 0,function(e){return _(t,e)},function(e){return b(t,e)})}function v(t,e,r){e.constructor===t.constructor&&r===s&&e.constructor.resolve===u?d(t,e):r===V?b(t,V.error):void 0===r?m(t,e):n(r)?p(t,e,r):m(t,e)}function _(t,n){t===n?b(t,f()):e(n)?v(t,n,l(n)):m(t,n)}function y(t){t._onerror&&t._onerror(t._result),g(t)}function m(t,e){t._state===J&&(t._result=e,t._state=Q,0!==t._subscribers.length&&L(g,t))}function b(t,e){t._state===J&&(t._state=R,t._result=e,L(y,t))}function w(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Q]=n,o[i+R]=r,0===i&&t._state&&L(g,t)}function g(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?j(n,r,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function S(t,e){try{return t(e)}catch(t){return X.error=t,X}}function j(t,e,r,o){var i=n(r),s=void 0,u=void 0,c=void 0,f=void 0;if(i){if((s=S(r,o))===X?(f=!0,u=s.error,s=null):c=!0,e===s)return void b(e,a())}else s=o,c=!0;e._state!==J||(i&&c?_(e,s):f?b(e,u):t===Q?m(e,s):t===R&&b(e,s))}function E(t,e){try{e(function(e){_(t,e)},function(e){b(t,e)})}catch(e){b(t,e)}}function T(){return Z++}function x(t){t[I]=Z++,t._state=void 0,t._result=void 0,t._subscribers=[]}function M(t,e){this._instanceConstructor=t,this.promise=new t(c),this.promise[I]||x(this.promise),q(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?m(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&m(this.promise,this._result))):b(this.promise,P())}function P(){return new Error("Array Methods must be provided an Array")}function C(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function O(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function k(t){this[I]=T(),this._result=this._state=void 0,this._subscribers=[],c!==t&&("function"!=typeof t&&C(),this instanceof k?E(this,t):O())}var Y=void 0,q=Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},F=0,D=void 0,K=void 0,L=function(t,e){G[F]=t,G[F+1]=e,2===(F+=2)&&(K?K(i):H())},N="undefined"!=typeof window?window:void 0,U=N||{},W=U.MutationObserver||U.WebKitMutationObserver,z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),B="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,G=new Array(1e3),H=void 0;H=z?function(){return process.nextTick(i)}:W?function(){var t=0,e=new W(i),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():B?function(){var t=new MessageChannel;return t.port1.onmessage=i,function(){return t.port2.postMessage(0)}}():void 0===N&&"function"==typeof require?function(){try{var t=require("vertx");return D=t.runOnLoop||t.runOnContext,r()}catch(t){return o()}}():o();var I=Math.random().toString(36).substring(16),J=void 0,Q=1,R=2,V=new A,X=new A,Z=0;return M.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===J&&n<t;n++)this._eachEntry(e[n],n)},M.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===u){var o=l(t);if(o===s&&t._state!==J)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===k){var i=new n(c);v(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},M.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===J&&(this._remaining--,t===R?b(r,n):this._result[e]=n),0===this._remaining&&m(r,this._result)},M.prototype._willSettleAt=function(t,e){var n=this;w(t,void 0,function(t){return n._settledAt(Q,e,t)},function(t){return n._settledAt(R,e,t)})},k.all=function(t){return new M(this,t).promise},k.race=function(t){var e=this;return new e(q(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},k.resolve=u,k.reject=function(t){var e=new this(c);return b(e,t),e},k._setScheduler=function(t){K=t},k._setAsap=function(t){L=t},k._asap=L,k.prototype={constructor:k,then:s,catch:function(t){return this.then(null,t)}},k.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=k},k.Promise=k,k.defer=function(){var t={};return t.promise=new k(function(e,n){t.resolve=e,t.reject=n}),t},k}); 
 			}); 
		define("src/lib/message.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(){this._evtObjs={},this._outdatedMsgs={}}function e(){}t.prototype.on=function(t,e,s){this._evtObjs[t]||(this._evtObjs[t]=[]),this._evtObjs[t].push({handler:e,once:s});var n=this;return function(){n.off(t,e)}},t.prototype.wait=function(t,s){return this._outdatedMsgs[t]?(s.apply(null,this._outdatedMsgs[t]),e):this.on(t,s,!0)},t.prototype.off=function(t,e){var s=this;return(t?[t]:Object.keys(this._evtObjs)).forEach(function(t){if(e){var n=[];(s._evtObjs[t]||[]).forEach(function(t){t.handler!==e&&n.push(t)}),s._evtObjs[t]=n}else s._evtObjs[t]=[]}),this},t.prototype.emit=function(t){var e=Array.prototype.slice.call(arguments,1);this._outdatedMsgs[t]=e,(this._evtObjs[t]||[]).forEach(function(t){if(!t.once||!t.called){t.called=!0;try{t.handler&&t.handler.apply(null,e)}catch(t){console.error(t.stack||t.message||t)}}})},t.prototype.emitAsync=function(){var t=arguments,e=this;setTimeout(function(){e.emit.apply(e,t)},0)},t.prototype.assign=function(t){var e=this;["on","off","wait","emit","emitAsync"].forEach(function(s){var n=e[s];t[s]=function(){return n.apply(e,arguments)}})},(new t).assign(t),module.exports=t; 
 			}); 
		define("src/lib/parse-body.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(t){if("string"!=typeof t)return t;t&&(t=t.trim()),t&&/^(data|QZOutputJson)=/.test(t)&&(t=t.replace(/^(data|QZOutputJson)=/,"").replace(/;?$/,""));try{return JSON.parse(t)}catch(t){throw new Error("parse jsonp body failed")}}; 
 			}); 
		define("src/lib/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./parse-body"),n=require("./es6-promise"),t=require("../module/log")("lib-request"),u=module.exports={request:function(n){return n.success=function(n){return n=n||function(){},function(u){if(t("wx.request success"),u&&200==u.statusCode)try{u.data=e(u.data)}catch(e){}n(u)}}(n.success),t("wx.request",n.url),wx.request(n)},get:function(e,t){return t=t||{},new n(function(n,s){(u.busRequest||u.request)({url:e,data:t.data||{},header:t.header||{},method:"GET",success:function(e){n(e)},fail:function(e){s(e)},needLoginCase:t.needLoginCase,needlogin:t.needlogin})})},post:function(e,t){return t=t||{},new n(function(n,s){(u.busRequest||u.request)({url:e,data:t.data||{},header:t.header||{},method:"POST",success:function(e){n(e)},fail:function(e){s(e)},needLoginCase:t.needLoginCase,needlogin:t.needlogin})})}}; 
 			}); 
		define("src/lib/url.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={queryParse:function(e,n){if(!e)return{};n=n||"&";var r=e.replace(/^\?/,""),t={},i=r?r.split(n):null;return i&&i.length>0&&i.forEach(function(e){var n=(e=e.split("=")).splice(0,1),r=e.join("=");t[n]=decodeURIComponent(r)}),t},queryJoin:function(n){var r=[].slice.call(arguments);r[0]={};var t=e.queryStringify(Object.extend.apply(Object,r));if(!t)return n;var i=void 0;return i=/[\?&]$/.test(n)?"":~n.indexOf("?")?"&":"?",n+i+t},queryStringify:function(e,n){return e?Object.keys(e).map(function(n){return n+"="+encodeURIComponent(e[n])}).join(n||"&"):""}};module.exports=e; 
 			}); 
		define("src/module/account.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n=require("../util/appids"),e=require("./system-info")(),r={canUse:function(){return!!wx.getAccountInfoSync},isInner:function(){if(r.canUse()){var c=wx.getAccountInfoSync();return!!e.isQB||!!n[c.miniProgram.appId]}return!1},getAccountInfoSync:function(){if(r.canUse())return wx.getAccountInfoSync()},canUseInner:function(){return r.canUse()&&r.isInner()}};module.exports=r; 
 			}); 
		define("src/module/cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={set:function(e,t,a){wx.setStorageSync("_cache_"+e,{expr:a||0,date:+new Date,data:t})},get:function(e){e="_cache_"+e;var t=wx.getStorageSync(e);return t?t.expr&&t.expr?new Date-(t.date+t.expr)<0?t.data:(wx.removeStorageSync(e),null):t.data:null},del:function(e){e="_cache_"+e,wx.removeStorageSync(e)}}; 
 			}); 
		define("src/module/curr-page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r=void 0;module.exports={getCurrUrl:function(e){if(!(r=e.getCurrentPages||r))return"/pages/default";var t=r();return t[t.length-1].route},getCurrPageQuery:function(e){if(!(r=e.getCurrentPages||r))return"/pages/default";var t=r();return(e=t[t.length-1].options)||{}},getCurrUrlWithQuery:function(){var r=this.getCurrPageQuery(),e=this.getCurrUrl()+"?";for(var t in r)e+=t+"="+r[t]+"&";return e=e.substring(0,e.length-1)}}; 
 			}); 
		define("src/module/gen-guid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(){return Math.random().toString(16).substring(2)}; 
 			}); 
		define("src/module/guid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./cache"),r=require("./gen-guid"),t=e.get("tvp_guid");t||(t=r(),e.set("tvp_guid",t)),module.exports=t; 
 			}); 
		define("src/module/log.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function o(a){var t=[Math.floor(50*Math.random()+200),Math.floor(50*Math.random()+150),Math.floor(50*Math.random()+100)].sort(function(){return Math.random()-.5});return t="rgb("+t[0]+", "+t[1]+", "+t[2]+")",n?function(){if(o.isOpenLog){var n=["%c【%s】%c "+a+" %c %s ","background: #ddd",new Date,"background: "+t,"background: #333;color: white"];console.log.apply(console,n.concat([].slice.call(arguments,0)))}}:function(){if(o.isOpenLog){var n=["【%s】 "+a+" %s ",new Date];console.log.apply(console,n.concat([].slice.call(arguments,0)))}}}var n="devtools"==wx.getSystemInfoSync().platform;o.isOpenLog=!1,module.exports=o; 
 			}); 
		define("src/module/network.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={"4g":4,"3g":3,"2g":2,wifi:1};module.exports=function(t,o){wx.getNetworkType({complete:function(r){var i=(o||e)[r&&r.networkType]||0;t&&t(i)}})}; 
 			}); 
		define("src/module/reporter/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=new(require("../../lib/message")),r=require("./report-queue"),t=require("../log")("module-reporter");r.onReport=function(e){s.emit("report",e)};var o=require("./report-cache"),s={};s.any=function(e){r.push(e)},s.saveState=function(){t("reporter.js","saveState"),s.emit("_save")},s.restoreState=function(){t("reporter.js","restoreState"),s.emit("_restore")},s.checkState=function(){t("reporter.js","checkState"),o.getAll().forEach(r.push),o.del()},s.reportCache=o,e.assign(s),module.exports=s; 
 			}); 
		define("src/module/reporter/report-cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../cache"),e=t.get("tvp_report")||{};exports.get=function(t){return e[t]},exports.set=function(r,n){e[r]=n,t.set("tvp_report",e)},exports.del=function(r){r?delete e[r]:e={},t.set("tvp_report",e)},exports.getAll=function(){return Object.keys(e).map(function(t){return e[t]})}; 
 			}); 
		define("src/module/reporter/report-queue.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){function n(t){~t.reportUrl.indexOf("btrace.qq.com")?e(t.reportUrl).then(function(){o.release()}).catch(function(){o.onReport&&o.onReport(t)}):o.onReport&&o.onReport(t),c=setTimeout(function(){o.release()},r)}var r=3e3,o=void 0,u=!1,i=[],c=null;return o={release:function(e){u&&e&&e!=u||(u=!1,clearTimeout(c),i.length&&n(i.shift()))},push:function(e){u?i.push(e):(u=e,n(e))}}}(); 
 			}); 
		define("src/module/system-info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=void 0;module.exports=function(){return t=t||wx.getSystemInfoSync()}; 
 			}); 
		define("src/module/visiable.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./log")("visiable"),t=void 0;module.exports=function(o){if(!o.dom){var i=wx.createSelectorQuery().in(o);o.dom=i.select("#"+o.data.playerid)}o.dom.boundingClientRect(function(i){t=t||wx.getSystemInfoSync();var r=!0;(i.top>=t.windowHeight||i.bottom<=0)&&(e(i),r=!1),r||o.isEnterFullscreen||o._controller.pause()}).exec()}; 
 			}); 
		define("src/util/appids.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={wxa75efa648b60994b:!0,wxac48d234d44e23e3:!0,wxcb0c43c76ee475e9:!0}; 
 			}); 
		define("src/util/base64text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAtxtZGF0AAACvAYF//+43EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDEzNSByMjM0NSBmMGMxYzUzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxMyAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTYgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9YWJyIG1idHJlZT0xIGJpdHJhdGU9NTAgcmF0ZXRvbD0xLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAQZYiEABr//vfUt8yy8ER/gQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAA8AAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAAAoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAn/4QAZZ2QACazZX+TAWyAAAAMAIAAAAwKB4kSywAEABWjr7LIsAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAtQAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU1LjEyLjEwMg=="; 
 			}); 
		define("src/util/defn-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,r,d){return r in e?Object.defineProperty(e,r,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[r]=d,e}var r;module.exports=(r={"流畅":"msd","标清":"sd","高清":"mp4"},e(r,"高清","hd"),e(r,"超清","shd"),e(r,"蓝光","fhd"),e(r,"4K","uhd"),e(r,"杜比","dolby"),r); 
 			}); 
		define("src/util/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){e=e.split("."),t=t.split(".");for(var r=Math.max(e.length,t.length);e.length<r;)e.push("0");for(;t.length<r;)t.push("0");for(var n=0;n<r;n++){var s=parseInt(e[n]),o=parseInt(t[n]);if(s>o)return 1;if(s<o)return-1}return 0}var t=wx.getSystemInfoSync();module.exports={sysInfo:t,compareVersion:e,formatDate:function(e,t){if(!e)return"";"string"==typeof e&&(e=new Date(e.replace(/-/g,"/"))),t=t||"yyyy-MM-dd";var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(""+e.getFullYear()).substr(4-RegExp.$1.length)));for(var n in r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t},Oncer:function(e){var t=!1,r=function(){t||(t=!0,e.done=t,e.apply(this,arguments))};return r.done=t,r},isHigherVersion:function(r){return-1!=e(t.SDKVersion,r)}}; 
 			}); 
		define("src/util/platform-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={APP_NAME:{v4170:"zhihuiwang",v4163:"xiaosongliu",v4162:"dongqiji",v4161:"egame.qq.com",v4169:"plugin",v4160:"sport.qq.com",v4159:"oddjohn",v4158:"sherrygu",v4157:"sophiachang",v4153:"yidiandian",v4152:"pvp.wx.com",v4151:"pipixia",v4150:"wechat_class",v4149:"x5.qq.com",v4148:"auto.qq.com",v4146:"wuxia.qq.com",v4145:"dnf.qq.com",v4144:"pvp.qq.com",v4143:"ke.qq.com",v4142:"qnreading",v4141:"om",v4140:"wx_reader",v4139:"news",v4138:"video"},APP_PLATFORM:{v4170:"4340801",v4163:"4090801",v4162:"4120801",v4161:"3960801",v4169:"4210801",v4160:"40801",v4159:"3810801",v4158:"3710801",v4157:"3690801",v4153:"3500801",v4152:"3470801",v4151:"3450801",v4150:"3310801",v4149:"3280801",v4148:"3170801",v4146:"3140801",v4145:"3110801",v4144:"3100801",v4143:"260801",v4142:"570801",v4141:"3040801",v4140:"60801",v4139:"20801",v4138:"10801"}}; 
 			}); 
		define("src/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./module/reporter/index"),t=require("./controller-video/index"),o=require("./controller-live/index"),n=require("./util/platform-config").APP_NAME,r=module.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.from,f=void 0===r.autoplay||r.autoplay,d=r.defn||"",c=r.chid||void 0,p="function"==typeof r.getReportParam?r.getReportParam:"function"==typeof r.getLoginData?function(e){r.getLoginData(function(t,o){o.hc_openid=o.openid,delete o.openid,e(t,o)})}:function(e){return e()},u=e.vid;"string"==typeof e&&(u=e);var l=e.cid||"",v=e.sid,s=e.pid,g=r.scene,m=r.qwer,h=void 0;return h=u?t({vid:u,cid:l,from:a,chid:c,defn:d,scene:g,qwer:m,videoInfo:i},{onBeforeGetinfo:r.onBeforeGetinfo,onAfterGetInfo:r.onAfterGetInfo,getReportParam:function(e){p(function(t,o){o&&(o.appname=n[a]),e(t,o)})}}):o({sid:v,pid:s,from:a,defn:d},{getReportParam:function(e){p(function(t,o){o&&(o.appname=n[a]),e(t,o)})}}),f&&h.start(),h};r.on=function(t){"report"==t&&(e.off("report"),e.on.apply(e,arguments))},r.release=e.release,r.saveState=e.saveState,r.restoreState=e.restoreState,r.checkState=e.checkState; 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wxa75efa648b60994b/component/live/live.js';global.__wxRouteBegin = true; 	define("component/live/live.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../../index"),e=require("../txv-context"),i=require("../../src/module/log")("txv-live-component"),r=(require("../../src/controller-live/flow-getinfo/live-detail"),require("../../src/controller-live/flow-getinfo/live-poll")),n=(require("../../src/util/index"),require("../../src/util/base64text")),a=require("./properties"),o=require("./data");Component({properties:a,data:o,attached:function(){i("attached",this.data);var t=this;wx.onNetworkStatusChange(function(i){function r(){t.currPlayTime=t.data.progressTime,t.networkChange&&t.networkChange()}t.data.tvpIsAd||(t.data.playerid!=e.getLastPlayId()?t.delayNetworkChangeReq=r:r())})},detached:function(){i("detached",this.data),e.txvDetached(this.data.playerid),clearTimeout(this.livePollTimer),this.networkChange=null,this.livePollTimer=!1},methods:{registerInterface:function(){var t=this,i=this.data.playerid;if(!i)throw new Error("需要为txv-live组件指定一个playerid，可以采用sid+pid组合形成playerid");if(!this._controller){this.videoContext=wx.createVideoContext(i,this);var r=this._controller={};["play","pause","seek","playbackRate","requestFullScreen","exitFullScreen","sendDanmu"].forEach(function(e){r[e]=function(){for(var i=arguments.length,r=Array(i),n=0;n<i;n++)r[n]=arguments[n];t.videoContext[e].apply(t.videoContext,r)}}),e.txvAttached(i,r),this.mountMore(r)}},mountMore:function(t){var e=this,i={hideVideo:function(){e.setData({isHiddenVideo:!0})},showVideo:function(){e.setData({isHiddenVideo:!1})},hideVideoWithVoice:function(){e.setData({isHiddenWithVoice:!0})},showVideoWithVoice:function(){e.setData({isHiddenWithVoice:!1},function(){})},showContainer:function(){e.setData({isHiddenContainer:!1})},hideContainer:function(){e.setData({isHiddenContainer:!0})}};Object.assign(t,i)},getVideoInfo:function(){if(this.data.sid&&this.data.pid)return t({sid:this.data.sid,pid:this.data.pid},Object.assign({from:"v4169"},this.data.extraParam))},onVideoChange:function(t,e,r){var n=this.data.sid,a=this.data.pid;this.formerPid==a&&this.formerSid==n||(this.formerPid=a,this.formerSid=n,n&&a&&(this.registerInterface(),i("onVideoChange",n,a),clearTimeout(this.livePollTimer),this.livePollTimer=null,this.createPlayer()))},triggerLivePoll:function(t,e){var a=this;if(!this.isPolling)return this.isPolling=!0,r({pollDataKey:t,pollContext:e||""}).then(function(e){a.isPolling=!1,i("@@@@@@@@@@@@@@@",e),e=e&&e.data&&e.data.data,!1!==a.livePollTimer&&(a.livePollTimer=setTimeout(function(){a.triggerLivePoll(t,e.pollContext)},1e3*(e.pollTimeOut||5)));var r={onlineNumber:e.onlineNumber,likeNum:e.likeNum,popularity:e.popularity,playCount:e.playCount,attentNumber:e.attentNumber};2!=e.liveStatus?(clearTimeout(a.livePollTimer),a.livePollTimer=!1,a.triggerEvent("livestatus",{status:3,msg:"直播已结束",data:r}),a.setData({getDataError:"",isAfter:!0,isBefore:!1,tvpUrl:n,autoplay:!1})):a.triggerEvent("livestatus",{status:2,msg:"直播中",data:r})}).catch(function(i){a.isPolling=!1,!1!==a.livePollTimer&&(a.livePollTimer=setTimeout(function(){a.triggerLivePoll(t,e)},2e4))})},createPlayer:function(){var t=this;this.video=this.getVideoInfo(),this.video&&(this.networkChange=this.video.switchDefn,this.video.on("contentchange",function(e){if(t.triggerEvent("contentchange",e),e.currentContent){i("tvpUrl",e,e.currentContent);var r=e.currentContent.url,n=e.currentContent.iretcode,a={isBefore:!1,isAfter:!1,getDataError:!1,errCode:""};0===n&&r?(a.tvpUrl=r,t.triggerEvent("livestatus",{status:2,msg:"直播中"}),!t.data.isStopPoll&&t.triggerLivePoll("pid="+t.data.pid)):7==n?(a.isBefore=!0,t.triggerEvent("livestatus",{status:1,msg:"直播未开始"})):8==n?(a.isAfter=!0,t.triggerEvent("livestatus",{status:3,msg:"直播已结束"})):(a.getDataError=!0,a.errCode=n||8888,t.triggerEvent("livestatus",{status:n,msg:"未知错误"})),t.setData(a)}}),this.video.on("error",function(e){t.triggerEvent("contenterror",e)}))},__onTvpPlay:function(t){var i=this.data.playerid,r=e.getLastPlayId();if(e.setTvpPlayState(i,!0),r!=i){if(r){var n=e.getTxvContext(r);this.data.isNeedMutex&&n&&n.pause(),e.setTvpPlayState(r,!1)}e.setLastPlayId(i)}if(this.delayNetworkChangeReq)return this.delayNetworkChangeReq(),void(this.delayNetworkChangeReq=null);try{this.video&&this.video.onContentPlay()}finally{this.triggerEvent("play",t.detail)}},__onTvpPause:function(t){e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentPause()}finally{this.triggerEvent("pause",t.detail)}},__onTvpEnded:function(t){e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentEnd()}finally{this.triggerEvent("ended",t.detail)}},__onTvpTimeupdate:function(t){e.setTvpPlayState(this.data.playerid,!0),this.triggerEvent("timeupdate",t.detail),this.video&&this.video.onContentTimeupdate(null,t)},__onTvpFullScreenChange:function(t){this.isEnterFullscreen=!!t.detail.fullScreen,this.triggerEvent("fullscreenchange",t.detail)},__onTvpError:function(t){if(this.data.tvpUrl!==n){console.log("__onTvpError",this.data.tvpUrl,t),e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentError(null,t)}finally{this.triggerEvent("error",t.detail)}}},__onTvpWaiting:function(t){this.video&&this.video.onContentWaiting()},_onEnterPictureInPicture:function(t){this.triggerEvent("enterpictureinpicture",t&&t.detail||{})},_onLeavePictureInPicture:function(t){this.triggerEvent("leavepictureinpicture",t&&t.detail||{})}}}); 
 			}); 	require("component/live/live.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wxa75efa648b60994b/component/video/video.js';global.__wxRouteBegin = true; 	define("component/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("../../src/lib/message")),e=require("../../index"),i=require("../txv-context"),n=require("../../src/module/log")("txv-video-component"),r=require("../../src/util/defn-config"),a=require("../../src/module/system-info")(),o=require("./properties"),s=require("./data"),d=wx.getStorageSync("tvp_openid");d||(d=["_",Math.random().toString(16).slice(2),Math.random().toString(16).slice(2),Math.random().toString(16).slice(2)].join("").slice(0,28),wx.setStorageSync("tvp_openid",d)),Component({properties:o,data:s,attached:function(){var t=this;n("attached",this.data);var r=this;wx.onNetworkStatusChange(function(t){function e(){r.currPlayTime=r.data.progressTime,r.isNetworkChange=!0,r.networkChange&&r.networkChange()}r.data.tvpIsAd||(console.log("network change"),r.data.playerid!=i.getLastPlayId()?r.delayNetworkChangeReq=e:e())}),e.on("report",function(e){t.setData({reportUrl:e.reportUrl.replace("https","http")})}),this.initBright(),this.isIpx()},ready:function(){this.register()},moved:function(){},detached:function(){n("detached",this.data),i.txvDetached(this.data.playerid),this._controller=null,this.networkChange=null},methods:{register:function(){this.data.isHiddenStop&&this.registerIntersectionObserver()},registerIntersectionObserver:function(){var t=this;this.createIntersectionObserver().relativeToViewport().observe("#"+this.data.playerid,function(e){var i=e.boundingClientRect;t.isEnterFullscreen||t.data.isHiddenWithVoice||!i||(i.bottom<=0||i.top>=a.windowHeight)&&t.videoContext.pause()})},registerInterface:function(){var t=this;if(!this.data.playerid)throw new Error('需要为txv-video组件指定一个playerid，如果是采用的playerid="{{playerid}}"，请加上wx:if="{{playerid}}"');if(!this._controller){this.videoContext=wx.createVideoContext(this.data.playerid,this);var e=this._controller={videoContext:this.videoContext};["play","pause","seek","playbackRate","requestFullScreen","exitFullScreen","sendDanmu"].forEach(function(i){e[i]=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];t.videoContext[i].apply(t.videoContext,n)}}),this.mountMore(e),i.txvAttached(this.data.playerid,e),n("!!!!!!!",i)}},mountMore:function(t){var e=this,i=this,n={hideVideo:function(){i.setData({isHiddenVideo:!0})},showVideo:function(){i.setData({isHiddenVideo:!1})},hideVideoWithVoice:function(){i.setData({isHiddenWithVoice:!0})},showVideoWithVoice:function(){i.setData({isHiddenWithVoice:!1},function(){})},showContainer:function(){i.setData({isHiddenContainer:!1})},hideContainer:function(){i.setData({isHiddenContainer:!0})},controller:this.video||null,replay:function(t,i,n){i=i||e.data,n=n||e.data.videoInfo,e.start(t,i,n),setTimeout(function(){e.videoContext.play()})}};Object.assign(t,n)},skipAd:function(){this.video.onContentSkip(0)},onPlayeridChange:function(t,e){e&&i.txvDetached(e),t&&this._controller&&i.txvAttached(t,this._controller)},onVideoChange:function(t,e){this.start(t,this.data,this.data.videoInfo)},getVideoInfo:function(t,i,a){if(t)return n("denf",r[i.defn]),e(t,Object.assign({from:"v4169",defn:r[i.defn]||"",getReportParam:function(t){t(null,{hc_openid:d,hc_vuserid:d})}},i.extraParam),a)},start:function(e,r,o){var s=this;if(e){this.registerInterface();var d={tvpState:"",formattedVid:e=e.replace(/^\s+|\s+$/,"")};this.setData(d),r=r||{},o=o||{},n("onVideoChange",e),console.log("onVideoCHnage"),t.default.on("adText",function(t){t&&s.setData({adJumpText:t.adJumpText||s.data.adJumpText,adCloseText:t.adCloseText||s.data.adCloseText})},!0);var c=this.video=this.getVideoInfo(e,r,o);if(c){try{var h=i.getTxvContext(this.data.playerid);h&&(h.controller=c)}catch(t){}this.networkChange=c.switchDefn,c.on("error",function(t){s.triggerEvent("contenterror",t),s.setData({tvpVideoError:t.message+"("+(t.code||"L")+")"})}),c.on("statechange",function(t,e){if(n("onstatechange",t,e),s.triggerEvent("statechange",{newstate:t,oldstate:e}),t!=s.data.tvpState){switch(n("playerstatechange "+s.data.tvpState+" => "+t),s.data.tvpState){case"stop":break;case"error":return}s.setData({tvpState:t})}});var l=!0;c.on("contentchange",function(t){n("contentchange",t);var i=s.isSwitchDefn?1:s.isNetworkChange?2:0;if(t=t||{},t.origin=i,s.triggerEvent("contentchange",t),t.currentContent){var r={};t.extra.isPlayingAd||(r.progressTime=0,t.progress?(r.progressDuration=t.progress.duration,r.progressBaseTime=t.progress.time,r.progressSkipTime=t.progress.skipable):(r.progressDuration=0,r.progressBaseTime=0,r.progressSkipTime=0)),r.isQB=a.isQB&&s.data.isHideQB||!1,r.tvpUrl=t.currentContent.url;var d=r.tvpIsAd=!!t.currentContent.isad;if(!d&&r.tvpUrl===s.data.tvpUrl){var h=/\?/.test(r.tvpUrl)?"&":"?";r.tvpUrl+=h+"_r="+Math.random()}if(n("tvpUrl",r.tvpUrl),console.log("tvpUrl",r.tvpUrl),-1==s.data.direction){var u=t.getinforaw&&t.getinforaw.vl&&t.getinforaw.vl.vi;u&&u.length?u.some(function(t){t.vid===e&&t.vh&&t.vw&&(r.direction=t.vh<t.vw?90:0)}):o&&o.vh&&o.vw&&(r.direction=o.vh<o.vw?90:0)}if(!d){var v=t.getinforaw&&t.getinforaw.fl&&t.getinforaw.fl.fi,g="",f="";(v=v||o&&o.vecDefn)&&v.length&&(v.forEach(function(t){t.cname.replace(/([^;]+?);\(([^)]+?)\)/,function(e,i,n){t.cname=i+" "+n,t.cname_short=i}),t.selected=t.selected||!1,g||!t.selected&&!t.sl||(g=t.cname_short||"",f=t.name,t.selected=!0)}),v.reverse(),c.currDefn=f,r.formats=v,r.formats_selected=g)}s.setData(r,function(){l||setTimeout(function(){s.videoContext.play()},200),l=!1}),s.isSwitchDefn&&(s.currPlayTime&&t.currentContent.wait("start",function(){n("seek"),s.videoContext.seek(s.currPlayTime)}),s.isSwitchDefn=!1)}else n("first content change",t)}),c.on("videostart",function(t){s.triggerEvent("videostart",t)})}}},__onTvpPlay:function(t){this.setData({isPlaying:!0}),this.isNetworkChange&&(this.videoContext.seek(this.currPlayTime),this.isNetworkChange=!1);var e=this.data.playerid;i.setTvpPlayState(e,!0);var n=i.getLastPlayId();if(n!=e){if(n&&i.existTxvContext(n)){var r=i.getTxvContext(n);this.data.isNeedMutex&&r&&r.pause(),i.setTvpPlayState(n,!1)}i.setLastPlayId(e)}if(this.delayNetworkChangeReq)return this.delayNetworkChangeReq(),void(this.delayNetworkChangeReq=null);try{this.video&&this.video.onContentPlay()}finally{this.triggerEvent("play",t.detail)}},__onTvpPause:function(t){this.setData({isPlaying:!1}),i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentPause()}finally{this.triggerEvent("pause",t.detail)}},__onTvpEnded:function(t){i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentEnd()}finally{t.detail=t.detail||{},t.detail.isAd=!!this.data.tvpIsAd,this.triggerEvent("ended",t.detail)}},__onTvpTimeupdate:function(t){i.setTvpPlayState(this.data.playerid,!0),this.triggerEvent("timeupdate",t.detail);try{this.setData({progressTime:Math.floor(t.detail.currentTime)}),this.video&&this.video.onContentTimeupdate(null,t)}catch(t){}},__onTvpError:function(t){i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentError(null,t)}finally{this.triggerEvent("error",t.detail)}},__onTvpFullScreenChange:function(t){this.isEnterFullscreen=!!t.detail.fullScreen,this.triggerEvent("fullscreenchange",t.detail),this.setData({fullscreen:this.isEnterFullscreen,showControlBtn:!this.data.fullscreen&&this.isEnterFullscreen}),this.showControlBtn()},__onTvpWaiting:function(t){this.triggerEvent("waiting",t&&t.detail||{})},__onTvpProgress:function(t){this.triggerEvent("progress",t&&t.detail||{})},_onTvpLoadedmetadata:function(t){this.triggerEvent("loadedmetadata",t&&t.detail||{})},_onTvpControlstoggle:function(t){var e=t.detail.show;e!=this.data.isControlsShow&&this.setData({isControlsShow:!!e}),this.triggerEvent("controlstoggle",t&&t.detail||{})},_onEnterPictureInPicture:function(t){this.triggerEvent("enterpictureinpicture",t&&t.detail||{})},_onLeavePictureInPicture:function(t){this.triggerEvent("leavepictureinpicture",t&&t.detail||{})},tapRetry:function(t){},isIpx:function(){var t=this;wx.getSystemInfo({success:function(e){"iPhone X"==e.model.substring(0,e.model.indexOf("X"))+"X"&&t.setData({isIpx:!0})}})},initBright:function(){var t=this;wx.getScreenBrightness({success:function(e){var i=e.value;t.setData({currentBright:i})}})},__onTvpCloseBright:function(){this.setData({showBrightSelector:!1,showControlBtn:!0}),this.showControlBtn()},__onTvpShowBright:function(){this.setData({showBrightSelector:!0,showControlBtn:!0})},setBright:function(t){var e=t.currentTarget.dataset.type,i=this.data.currentBright;0==e?(i-=.125)<0&&(i=0):(i+=.125)>1&&(i=1),wx.setScreenBrightness({value:i,success:function(){n("设置亮度成功",new Date)},fail:function(){n("设置亮度失败",new Date)}}),this.setData({currentBright:i})},__onTvpCloseHD:function(){this.setData({showHDSelector:!1,showControlBtn:!0}),this.showControlBtn()},__onTvpShowHD:function(){this.setData({showHDSelector:!0,showControlBtn:!0})},selectHD:function(t){if("end"!=this.data.tvpState){var e=t.currentTarget.dataset;e.fname&&!e.selected&&(this.isSwitchDefn=!0,this.currPlayTime=this.data.progressTime,this.video&&this.video.switchDefn&&this.video.switchDefn(e.fname))}},showControlBtn:function(t){var e=this;clearTimeout(this._playerHDSelectorBtnTimer),this._playerHDSelectorBtnTimer=setTimeout(function(){e.setData({showControlBtn:!1})},t||3e3)}}}); 
 			}); 	require("component/video/video.js");
 	
				global.publishDomainComponents({
			"plugin://wxa75efa648b60994b/video":"plugin-private://wxa75efa648b60994b/component/video/video","plugin://wxa75efa648b60994b/live":"plugin-private://wxa75efa648b60994b/component/live/live"
	})
				module.exports = function() {
		return require('component/txv-context.js')
	}
			});
	requirePlugin("plugin://wxa75efa648b60994b");
/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
Z([1,false])
Z([3,'onFullScreenChange'])
Z([3,'onStateChange'])
Z([3,'onTimeUpdate'])
Z([3,'true'])
Z([1,true])
Z([[7],[3,'height']])
Z([3,'center'])
Z([3,'txv0'])
Z(z[1])
Z([[7],[3,'showProgress1']])
Z([[7],[3,'title']])
Z([[7],[3,'vid']])
Z(z[6])
Z([[7],[3,'width']])
Z([3,'flex_colum_info'])
Z([[6],[[7],[3,'movie_info']],[3,'movie_rate']])
Z([[2,'>'],[[6],[[7],[3,'movieTypes']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_1
}
function gz$gwx0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_2
__WXML_GLOBAL__.ops_cached.$gwx0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_2
}
function gz$gwx0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_3)return __WXML_GLOBAL__.ops_cached.$gwx0_3
__WXML_GLOBAL__.ops_cached.$gwx0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
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
var xC=_mz(z,'txv-video',['autoplay',1,'bindfullscreenchange',1,'bindstatechange',2,'bindtimeupdate',3,'controls',4,'enablePlayGesture',5,'height',6,'playBtnPosition',7,'playerid',8,'showProgress',9,'showProgress',10,'title',11,'vid',12,'vslideGesture',13,'width',14],[],e,s,gg)
_(oB,xC)
var oD=_n('view')
_rz(z,oD,'class',16,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,17,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,18,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(oB,oD)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx0_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['moviePages/pages/detail/movieDetails.json'] = {"navigationBarTitleText":"影片详情","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['moviePages/pages/detail/movieDetails.wxml'] = [$gwx0, './moviePages/pages/detail/movieDetails.wxml'];else __wxAppCode__['moviePages/pages/detail/movieDetails.wxml'] = $gwx0( './moviePages/pages/detail/movieDetails.wxml' );
		__wxAppCode__['moviePages/pages/gallery/galleryList.json'] = {"navigationBarTitleText":"剧照","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['moviePages/pages/gallery/galleryList.wxml'] = [$gwx0, './moviePages/pages/gallery/galleryList.wxml'];else __wxAppCode__['moviePages/pages/gallery/galleryList.wxml'] = $gwx0( './moviePages/pages/gallery/galleryList.wxml' );
		__wxAppCode__['moviePages/pages/gallerydetail/gdetail.json'] = {"navigationBarTitleText":"剧照详情","navigationBarBackgroundColor":"#ffffff","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['moviePages/pages/gallerydetail/gdetail.wxml'] = [$gwx0, './moviePages/pages/gallerydetail/gdetail.wxml'];else __wxAppCode__['moviePages/pages/gallerydetail/gdetail.wxml'] = $gwx0( './moviePages/pages/gallerydetail/gdetail.wxml' );
	
	__wxRoute = 'moviePages/pages/detail/movieDetails';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'moviePages/pages/detail/movieDetails.js';	define("moviePages/pages/detail/movieDetails.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=require("./../../../config/httpHtlper"),e=requirePlugin("tencentvideo");Page({data:{movie_info:{},isExtend:!1,isGalleryShow:!1,isPlayShow:!0,rate_bg:"/images/common/yingpianxiangqing_icon_xing_weidian.png",rate_half:"/images/common/yingpianxiangqing_icon_xing_yidian.png",rate_seleted:"/images/common/yingpianxiangqing_icon_xing_yidian1.png",rates:[1,2,3,4,5],movieTypes:[],sell_status:"",vid:"",tvphide:!0,title:"",defn:"超清",changingvid:"",showProgress1:!0,width:"100%",height:"350rpx",is_show_trailer:"0"},onLoad:function(e){var a=this,t=e.id;this.data.movie_id=t;var o=e.sell_status,n=e.fromFlag;this.data.fromFlag=n;var s=e.cinema_id,l=e.city_id;console.log("id = "+t+" fromFlag = "+n+" status = "+o+" cinemaId="+s+" cityId="+l),i.movieInfo(t,s,l).then(function(i){if(1==i.data.status){var e=i.data.data.movie_data,t=i.data.data.is_show_trailer;e.sell_status=o;var n=!1,s=!1,l=e.poster_data;l.length>0?e.video_img=l[l.length-1].original_poster_url:(e.video_img=e.movie_img_url,n=!0,s=!0);var d=e.movie_rate,g=[];if(d)for(var r=d.split("."),m=r[0],_=parseInt(m/2)-1,v=0;v<5;v++){var h={};v<=_?h.img=a.data.rate_seleted:v==_+1?r[1]&&0==r[1]?h.img=a.data.rate_bg:h.img=a.data.rate_half:h.img=a.data.rate_bg,g.push(h)}var c=[],p=e.movie_type;if(p){var f="/";-1!=p.indexOf(",")&&(f=",");var u=p.split(f);if(console.log(u),u&&u.length>0)for(var x=0;x<u.length;x++)c.push(u[x])}e.tencent_vid&&e.tencent_vid.length>0?e.tencent_vid=e.tencent_vid.trim():e.tencent_vid="";var w=!1;"1"!=t&&(w=!0),a.setData({movie_info:e,rates:g,vid:e.tencent_vid,tvphide:w,isGalleryShow:n,isExtend:s,movieTypes:c,is_show_trailer:t})}})},playClick:function(i){console.log(i),i.target.dataset.bean.tencent_vid?(this.setData({isPlayShow:!1}),this.txvContext=e.getTxvContext("txv0"),this.txvContext.play()):getApp().showModalApp("这部影片很神秘，暂时还没预告片")},onStateChange:function(i){console.log(i)},onTimeUpdate:function(i){console.log(i)},onFullScreenChange:function(){console.log("onFullScreenChange!!!")},videoError:function(){console.log("---------1111----");var i=this.data.movie_info;i.video_img_error=!0,this.setData({movie_info:i})},videoPlayError:function(i){console.log(i),getApp().showModalApp("播放错误")},descClick:function(){var i=this.data.isExtend,e=this.data.isGalleryShow;this.setData({isExtend:!i,isGalleryShow:!e})},posterClick:function(i){var e=i.target.id;console.log("index = "+e),wx.navigateTo({url:"/moviePages/pages/gallerydetail/gdetail?index="+e+"&list="+getApp().encodeDataAndJsonStringify(i.target.dataset.list)})},gotoSeat:function(i){console.log("gotoSeat = ");{if("cinema"!=this.data.fromFlag)return"app_movie_detail"==this.data.fromFlag||"wx_mini_ticket_order_movie"==this.data.fromFlag||"wx_mini_movie_detail"==this.data.fromFlag?(getApp().globalData.movie_id_share=this.data.movie_id,void wx.reLaunch({url:"/pages/home/cinema/cinema?movie_id="+this.data.movie_id})):"wx_gzh_menu_movie"==this.data.fromFlag?(getApp().globalData.movie_id_share=this.data.movie_id,void wx.reLaunch({url:"/pages/home/cinema/cinema?movie_id="+this.data.movie_id})):void wx.navigateTo({url:"/pages/home/cinemaList/cinemaList?type=movie_detail"});wx.navigateBack({})}},galleryClick:function(i){wx.navigateTo({url:"/moviePages/pages/gallery/galleryList?list="+getApp().encodeDataAndJsonStringify(i.target.dataset.list)})},onShareAppMessage:function(){var i=this.data.movie_info.movie_name,e=this.data.movie_info.movie_img_url,a=this.data.movie_id;return e&&e.length>0?-1==e.indexOf("?")&&(e+="?op=imageView2&mode=1&width=300&height=240"):e="",{title:i,imageUrl:e,path:"/moviePages/pages/detail/movieDetails?id="+a+"&fromFlag=wx_mini_movie_detail",desc:""}}}); 
 			}); 	require("moviePages/pages/detail/movieDetails.js");
 		__wxRoute = 'moviePages/pages/gallery/galleryList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'moviePages/pages/gallery/galleryList.js';	define("moviePages/pages/gallery/galleryList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{list:[],originalSize:0,add:0},onLoad:function(t){console.log(t.list);var a=getApp().decodeDataAndJsonParse(t.list);console.log("size = "+a.length);var i=a.length,e=a.length%3;if(console.log("size = "+a.length+" add = "+e),0!=e)for(var l=0;l<3-e;l++)a.push({}),console.log("======");this.setData({list:a,originalSize:i,add:3-e}),wx.setNavigationBarTitle({title:"剧照("+i+")"}),console.log("size = "+this.data.list.length)},imgClick:function(t){var a=t.target.dataset.index;console.log("index = "+a),this.data.list[a]&&this.data.list[a].original_poster_url&&(this.data.list.splice(this.data.list.length-this.data.add,this.data.add),wx.navigateTo({url:"/moviePages/pages/gallerydetail/gdetail?index="+a+"&list="+getApp().encodeDataAndJsonStringify(this.data.list)}))}}); 
 			}); 	require("moviePages/pages/gallery/galleryList.js");
 		__wxRoute = 'moviePages/pages/gallerydetail/gdetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'moviePages/pages/gallerydetail/gdetail.js';	define("moviePages/pages/gallerydetail/gdetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("./../../../util/imageUtil.js");Page({data:{currentIndex:0,list:[],imgheights:[],imgwidth:750},onLoad:function(t){this.setData({currentIndex:t.index,list:getApp().decodeDataAndJsonParse(t.list)}),console.log("index = "+this.data.currentIndex),console.log(this.data.list)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},bindchange:function(t){console.log("index =bindchange "+t.detail.current),console.log(t),this.setData({currentIndex:t.detail.current})},imageLoad:function(t){console.log(t);t.detail.width;var n=t.detail.height,e=this.data.imgheights;e.push(n),this.setData({imgheights:e})}}); 
 			}); 	require("moviePages/pages/gallerydetail/gdetail.js");
 	