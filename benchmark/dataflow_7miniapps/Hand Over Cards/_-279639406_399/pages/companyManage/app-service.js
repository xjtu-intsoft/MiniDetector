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
Z([[7],[3,'animationT']])
Z([3,'actionsheet-content'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'platform']],[1,'ios']],[1,'border-radius:0;'],[1,';']])
Z([3,'autoContent'])
Z([[7],[3,'sheetList']])
Z([[6],[[7],[3,'item']],[3,'text']])
Z([[2,'&&'],[[2,'>='],[[6],[[7],[3,'sheetList']],[3,'length']],[1,2]],[[2,'=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'sheetList']],[3,'length']],[1,2]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_1
}
function gz$gwx0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_2
__WXML_GLOBAL__.ops_cached.$gwx0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'edit'])
Z([3,'photo'])
Z([[2,'=='],[[6],[[7],[3,'photoList']],[3,'length']],[1,0]])
Z([[2,'&&'],[[2,'>='],[[6],[[7],[3,'photoList']],[3,'length']],[1,1]],[[2,'<'],[[6],[[7],[3,'photoList']],[3,'length']],[1,9]]])
Z([3,'_videoFun'])
Z([[7],[3,'pageFlag']])
Z([[7],[3,'videoList']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_2
}
function gz$gwx0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_3)return __WXML_GLOBAL__.ops_cached.$gwx0_3
__WXML_GLOBAL__.ops_cached.$gwx0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'form']])
Z([[2,'=='],[[6],[[7],[3,'item']],[1,'show']],[1,1]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[1,'format']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[1,'show']],[1,1]]],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[1,'name']],[1,'mophone1']],[[2,'=='],[[6],[[7],[3,'item']],[1,'name']],[1,'mophone2']]],[[2,'=='],[[6],[[7],[3,'item']],[1,'name']],[1,'mophone3']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[1,'format']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[1,'show']],[1,1]]],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[1,'name']],[1,'email1']],[[2,'=='],[[6],[[7],[3,'item']],[1,'name']],[1,'email2']]],[[2,'=='],[[6],[[7],[3,'item']],[1,'name']],[1,'email3']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_3);return __WXML_GLOBAL__.ops_cached.$gwx0_3
}
function gz$gwx0_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_4)return __WXML_GLOBAL__.ops_cached.$gwx0_4
__WXML_GLOBAL__.ops_cached.$gwx0_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_4);return __WXML_GLOBAL__.ops_cached.$gwx0_4
}
function gz$gwx0_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_5)return __WXML_GLOBAL__.ops_cached.$gwx0_5
__WXML_GLOBAL__.ops_cached.$gwx0_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'modalListData']],[3,'length']],[1,1]])
Z([[2,'<='],[[6],[[7],[3,'modalListData']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_5);return __WXML_GLOBAL__.ops_cached.$gwx0_5
}
function gz$gwx0_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_6)return __WXML_GLOBAL__.ops_cached.$gwx0_6
__WXML_GLOBAL__.ops_cached.$gwx0_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_ss'])
Z([3,'record-con'])
Z([a,[3,'recored-content '],[[2,'?:'],[[2,'=='],[[7],[3,'animationPosition']],[1,'up']],[1,'record-animation-up'],[[2,'?:'],[[2,'=='],[[7],[3,'animationPosition']],[1,'down']],[1,'record-animation-down'],[1,'']]]])
Z([[2,'=='],[[7],[3,'recordState']],[1,'loading']])
Z([3,'#666666'])
Z([3,'loading'])
Z([3,'loadingIcon'])
Z([[2,'=='],[[7],[3,'recordState']],[1,'null']])
Z([[2,'=='],[[7],[3,'recordState']],[1,'list']])
Z([[7],[3,'listData']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'getState']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_6);return __WXML_GLOBAL__.ops_cached.$gwx0_6
}
function gz$gwx0_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_7)return __WXML_GLOBAL__.ops_cached.$gwx0_7
__WXML_GLOBAL__.ops_cached.$gwx0_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_7);return __WXML_GLOBAL__.ops_cached.$gwx0_7
}
function gz$gwx0_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_8)return __WXML_GLOBAL__.ops_cached.$gwx0_8
__WXML_GLOBAL__.ops_cached.$gwx0_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'create'])
Z([[2,'=='],[[7],[3,'num']],[1,0]])
Z([[2,'=='],[[7],[3,'num']],[1,1]])
Z([[7],[3,'animationData']])
Z([3,'chooseCard bottom-positon'])
Z([3,'submission'])
Z([[2,'=='],[[7],[3,'choiceIndex']],[1,null]])
Z([[2,'!=='],[[7],[3,'choiceIndex']],[1,null]])
Z([3,'myCard'])
Z([[7],[3,'cardList']])
Z([[7],[3,'item']])
Z([3,'selectCards'])
Z([3,'card_prefs'])
Z([[6],[[7],[3,'item']],[3,'entId']])
Z([[7],[3,'index']])
Z([a,[[2,'?:'],[[2,'=='],[[7],[3,'choiceIndex']],[[7],[3,'index']]],[1,'border: 2px solid #2979FF;'],[1,';']],[3,';']])
Z([[2,'=='],[[7],[3,'choiceIndex']],[[7],[3,'index']]])
Z(z[13])
Z([[2,'<'],[[6],[[7],[3,'cardList']],[3,'length']],[1,5]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_8);return __WXML_GLOBAL__.ops_cached.$gwx0_8
}
function gz$gwx0_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_9)return __WXML_GLOBAL__.ops_cached.$gwx0_9
__WXML_GLOBAL__.ops_cached.$gwx0_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_ss'])
Z([3,'modal'])
Z([3,'modal-content'])
Z([[7],[3,'attestation']])
Z([3,'modal-content-button'])
Z([[2,'?:'],[[7],[3,'attestation']],[1,'margin-top:20rpx;'],[1,'']])
Z([[7],[3,'canSave']])
Z([[2,'!'],[[7],[3,'canSave']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_9);return __WXML_GLOBAL__.ops_cached.$gwx0_9
}
function gz$gwx0_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_10)return __WXML_GLOBAL__.ops_cached.$gwx0_10
__WXML_GLOBAL__.ops_cached.$gwx0_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'textarea-con'])
Z([3,'textareaCon'])
Z([[7],[3,'areaShow']])
Z([[2,'&&'],[[7],[3,'introValue']],[[2,'!'],[[7],[3,'areaShow']]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'introValue']]],[[2,'!'],[[7],[3,'areaShow']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_10);return __WXML_GLOBAL__.ops_cached.$gwx0_10
}
function gz$gwx0_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_11)return __WXML_GLOBAL__.ops_cached.$gwx0_11
__WXML_GLOBAL__.ops_cached.$gwx0_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'new-pay'])
Z([3,'right'])
Z([3,'name'])
Z([[2,'=='],[[7],[3,'payStatus']],[1,'试用']])
Z([[2,'=='],[[7],[3,'payStatus']],[1,'到期']])
Z([3,'tip'])
Z([[2,'||'],[[2,'=='],[[7],[3,'payStatus']],[1,'试用']],[[2,'=='],[[7],[3,'payStatus']],[1,'付费']]])
Z(z[4])
Z([3,'xieyi-con'])
Z([[6],[[7],[3,'compatibleManage']],[1,'openContact']])
Z([[2,'!'],[[6],[[7],[3,'compatibleManage']],[1,'openContact']]])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx0_11);return __WXML_GLOBAL__.ops_cached.$gwx0_11
}
function gz$gwx0_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_12)return __WXML_GLOBAL__.ops_cached.$gwx0_12
__WXML_GLOBAL__.ops_cached.$gwx0_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ss'])
Z([3,'new-guideCon'])
Z([[7],[3,'canvasCheck']])
Z([3,'canvasCheck'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_12);return __WXML_GLOBAL__.ops_cached.$gwx0_12
}
function gz$gwx0_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_13)return __WXML_GLOBAL__.ops_cached.$gwx0_13
__WXML_GLOBAL__.ops_cached.$gwx0_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<='],[[6],[[7],[3,'photoCon']],[3,'length']],[1,0]])
Z([[7],[3,'photoCon']])
Z([[7],[3,'item']])
Z([[2,'>'],[[6],[[7],[3,'photoCon']],[3,'length']],[1,0]])
Z([[2,'&&'],[[2,'>='],[[6],[[7],[3,'photoCon']],[3,'length']],[1,1]],[[2,'<'],[[6],[[7],[3,'photoCon']],[3,'length']],[1,9]]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_13);return __WXML_GLOBAL__.ops_cached.$gwx0_13
}
function gz$gwx0_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_14)return __WXML_GLOBAL__.ops_cached.$gwx0_14
__WXML_GLOBAL__.ops_cached.$gwx0_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mini-con'])
Z([[2,'?:'],[[6],[[7],[3,'autherizedData']],[3,'autherized']],[1,'_autherizedLook'],[1,'']])
Z([3,'mini-company'])
Z([[7],[3,'autherizedDetailShow']])
Z([[6],[[7],[3,'autherizedData']],[3,'autherized']])
Z([[2,'=='],[[6],[[7],[3,'products']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'products']],[3,'length']],[1,1]])
Z([[2,'>'],[[6],[[7],[3,'products']],[3,'length']],[1,1]])
Z([[7],[3,'swiperShow']])
Z([3,'_proTap'])
Z([[7],[3,'pageName']])
Z([[7],[3,'swiperCon']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_14);return __WXML_GLOBAL__.ops_cached.$gwx0_14
}
function gz$gwx0_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_15)return __WXML_GLOBAL__.ops_cached.$gwx0_15
__WXML_GLOBAL__.ops_cached.$gwx0_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pro-intro'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'introInput']]],[[7],[3,'intro']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'introInput']]],[[2,'!'],[[7],[3,'intro']]]])
Z([[7],[3,'introInput']])
Z([3,'pro-photo'])
Z([[2,'=='],[[6],[[7],[3,'photo']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'photo']],[3,'length']],[1,0]])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'photo']],[3,'length']],[1,0]],[[2,'<'],[[6],[[7],[3,'photo']],[3,'length']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_15);return __WXML_GLOBAL__.ops_cached.$gwx0_15
}
function gz$gwx0_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_16)return __WXML_GLOBAL__.ops_cached.$gwx0_16
__WXML_GLOBAL__.ops_cached.$gwx0_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'swiperShow']])
Z([3,'_itemTap'])
Z([3,'_ss'])
Z([3,'swiperCon'])
Z([a,[3,'padding-top:'],[[2,'?:'],[[7],[3,'customIf']],[[2,'+'],[[6],[[6],[[7],[3,'systemInfo']],[3,'menuButton']],[1,'height']],[[6],[[6],[[7],[3,'systemInfo']],[3,'menuButton']],[1,'top']]],[1,0]],[3,'px;']])
Z([[2,'?:'],[[7],[3,'circular']],[1,'swiperchangeNew'],[1,'swiperchange']])
Z([[7],[3,'circular']])
Z([3,'swiper'])
Z([[7],[3,'current']])
Z([3,'30rpx'])
Z([3,'60rpx'])
Z([[2,'?:'],[[7],[3,'productViewHeight']],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'productViewHeight']]],[1,'rpx;']],[1,';']])
Z([[2,'>'],[[6],[[6],[[7],[3,'swiper0']],[3,'image']],[3,'length']],[1,1]])
Z([[7],[3,'swiper1']])
Z([[2,'>'],[[6],[[6],[[7],[3,'swiper1']],[3,'image']],[3,'length']],[1,1]])
Z([[7],[3,'swiper2']])
Z([[2,'>'],[[6],[[6],[[7],[3,'swiper2']],[3,'image']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_16);return __WXML_GLOBAL__.ops_cached.$gwx0_16
}
function gz$gwx0_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_17)return __WXML_GLOBAL__.ops_cached.$gwx0_17
__WXML_GLOBAL__.ops_cached.$gwx0_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<='],[[6],[[7],[3,'videoCon']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_17);return __WXML_GLOBAL__.ops_cached.$gwx0_17
}
function gz$gwx0_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_18)return __WXML_GLOBAL__.ops_cached.$gwx0_18
__WXML_GLOBAL__.ops_cached.$gwx0_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'#F4A625'])
Z([3,'warn'])
Z([3,'icon'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_18);return __WXML_GLOBAL__.ops_cached.$gwx0_18
}
function gz$gwx0_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_19)return __WXML_GLOBAL__.ops_cached.$gwx0_19
__WXML_GLOBAL__.ops_cached.$gwx0_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_ss'])
Z([3,'add-panel'])
Z([3,'idx'])
Z([3,'newlyCard'])
Z([[6],[[7],[3,'shareData']],[3,'shareList']])
Z(z[2])
Z([[2,'<'],[[7],[3,'idx']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_19);return __WXML_GLOBAL__.ops_cached.$gwx0_19
}
function gz$gwx0_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_20)return __WXML_GLOBAL__.ops_cached.$gwx0_20
__WXML_GLOBAL__.ops_cached.$gwx0_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'videoList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_20);return __WXML_GLOBAL__.ops_cached.$gwx0_20
}
function gz$gwx0_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_21)return __WXML_GLOBAL__.ops_cached.$gwx0_21
__WXML_GLOBAL__.ops_cached.$gwx0_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showBulletLayer']])
Z([3,'1018'])
Z([3,'_backgroundTap'])
Z([3,'layer'])
Z([3,'bulletLayer'])
Z([1,false])
Z([3,'anroid-pay'])
Z([3,'box'])
Z([3,'right'])
Z([[2,'=='],[[7],[3,'payStatus']],[1,'试用']])
Z([3,'tip'])
Z([[2,'||'],[[2,'=='],[[7],[3,'payStatus']],[1,'试用']],[[2,'=='],[[7],[3,'payStatus']],[1,'付费']]])
Z([[2,'=='],[[7],[3,'payStatus']],[1,'到期']])
Z([3,'_renewalRecord'])
Z([3,'to-records'])
Z([3,'#FFFFFF'])
Z([3,'arrow-right'])
Z([3,'icon right-icon'])
Z([[2,'!'],[[2,'&&'],[[2,'=='],[[7],[3,'platForm']],[1,'ios']],[[2,'!'],[[6],[[7],[3,'payManagement']],[3,'isShow']]]]])
Z([[2,'||'],[[2,'=='],[[7],[3,'payStatus']],[1,'付费']],[[2,'=='],[[7],[3,'payStatus']],[1,'到期']]])
Z(z[9])
Z(z[9])
Z([[6],[[7],[3,'cacheCompany']],[1,'receiptTop']])
Z([3,'_editTikect'])
Z([3,'ticket'])
Z([3,'#DDDDDD'])
Z(z[16])
Z([3,'icon contact-icon'])
Z([3,'_toFillTikect'])
Z(z[24])
Z(z[25])
Z(z[16])
Z(z[27])
Z([3,'contact'])
Z([3,'cardMy-contact'])
Z([3,'activeStyle'])
Z([[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'platForm']],[1,'ios']],[[2,'!'],[[6],[[7],[3,'payManagement']],[3,'isShow']]]],[1,'margin-bottom: 400rpx;'],[1,'']])
Z(z[25])
Z(z[16])
Z(z[27])
Z([[7],[3,'isScroll']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_21);return __WXML_GLOBAL__.ops_cached.$gwx0_21
}
function gz$gwx0_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_22)return __WXML_GLOBAL__.ops_cached.$gwx0_22
__WXML_GLOBAL__.ops_cached.$gwx0_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_22);return __WXML_GLOBAL__.ops_cached.$gwx0_22
}
function gz$gwx0_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_23)return __WXML_GLOBAL__.ops_cached.$gwx0_23
__WXML_GLOBAL__.ops_cached.$gwx0_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search'])
Z([1,false])
Z([3,'search-con'])
Z([[2,'?:'],[[6],[[7],[3,'ifDelete']],[3,'show']],[1,'margin-top:0;'],[1,';']])
Z([[7],[3,'valueStatus']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'valueStatus']]],[[7],[3,'setting']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_23);return __WXML_GLOBAL__.ops_cached.$gwx0_23
}
function gz$gwx0_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_24)return __WXML_GLOBAL__.ops_cached.$gwx0_24
__WXML_GLOBAL__.ops_cached.$gwx0_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_24);return __WXML_GLOBAL__.ops_cached.$gwx0_24
}
function gz$gwx0_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_25)return __WXML_GLOBAL__.ops_cached.$gwx0_25
__WXML_GLOBAL__.ops_cached.$gwx0_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_25);return __WXML_GLOBAL__.ops_cached.$gwx0_25
}
function gz$gwx0_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_26)return __WXML_GLOBAL__.ops_cached.$gwx0_26
__WXML_GLOBAL__.ops_cached.$gwx0_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_26);return __WXML_GLOBAL__.ops_cached.$gwx0_26
}
function gz$gwx0_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_27)return __WXML_GLOBAL__.ops_cached.$gwx0_27
__WXML_GLOBAL__.ops_cached.$gwx0_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[6],[[7],[3,'payRecords']],[3,'length']]])
Z([3,'idx'])
Z([[7],[3,'payRecords']])
Z(z[1])
Z([[6],[[7],[3,'payRecords']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_27);return __WXML_GLOBAL__.ops_cached.$gwx0_27
}
function gz$gwx0_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_28)return __WXML_GLOBAL__.ops_cached.$gwx0_28
__WXML_GLOBAL__.ops_cached.$gwx0_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'success-con'])
Z([3,'#07C160'])
Z([3,'success'])
Z([3,'success-icon'])
Z([[7],[3,'imgUrl']])
Z([3,'#333333'])
Z([3,'loading'])
Z([3,'icon'])
Z([3,'#F4A625'])
Z([3,'warn'])
Z(z[7])
Z([3,'success-intro-detail'])
Z(z[5])
Z([3,'arrow-double'])
Z(z[7])
Z(z[5])
Z(z[13])
Z(z[7])
Z(z[5])
Z(z[13])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx0_28);return __WXML_GLOBAL__.ops_cached.$gwx0_28
}
function gz$gwx0_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_29)return __WXML_GLOBAL__.ops_cached.$gwx0_29
__WXML_GLOBAL__.ops_cached.$gwx0_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'edit-style'])
Z([3,'closeMemberFunc'])
Z([3,'dialog'])
Z([3,'contianer'])
Z(z[1])
Z([3,'close'])
Z([3,'#D6D6D6'])
Z(z[5])
Z(z[5])
Z([3,'#F4A625'])
Z([3,'warn'])
Z([3,'icon'])
Z([3,'information-con'])
Z([[7],[3,'showMember']])
Z([[8],'systemInfo',[[7],[3,'systemInfo']]])
Z(z[0])
Z([[2,'=='],[[7],[3,'companyState']],[1,'到期']])
Z([3,'swiperChange'])
Z([[7],[3,'companyState']])
Z([[7],[3,'entId']])
Z([[7],[3,'modalList']])
Z([3,'showTip'])
Z([3,'updateMessage'])
Z([[7],[3,'formData']])
Z([3,'edit'])
Z([[7],[3,'deleteShow']])
Z([3,'delelteConfirm'])
Z([3,'deleteCancel'])
Z([3,'#FF3B2F'])
Z([3,'删除'])
Z([3,'#000000'])
Z([3,'取消'])
Z([3,'名片将被移除企业且无法继续使用企业名片样式'])
Z([3,'确认删除名片？'])
Z([3,'intro'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_29);return __WXML_GLOBAL__.ops_cached.$gwx0_29
}
function gz$gwx0_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_30)return __WXML_GLOBAL__.ops_cached.$gwx0_30
__WXML_GLOBAL__.ops_cached.$gwx0_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'information-con'])
Z([[2,'=='],[[7],[3,'companyState']],[1,'到期']])
Z(z[1])
Z([3,'swiperChange'])
Z([[7],[3,'companyState']])
Z([[7],[3,'entId']])
Z([[7],[3,'modalList']])
Z([3,'updateMessage'])
Z([[7],[3,'formData']])
Z([3,'build'])
Z([[2,'>'],[[6],[[7],[3,'notClaimData']],[3,'length']],[1,0]])
Z([[7],[3,'recordShow']])
Z([3,'shareClaim'])
Z([3,'closeRecord'])
Z([3,'shareCard'])
Z([[7],[3,'notClaimData']])
Z([[7],[3,'recordData']])
Z([[7],[3,'recordState']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_30);return __WXML_GLOBAL__.ops_cached.$gwx0_30
}
function gz$gwx0_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_31)return __WXML_GLOBAL__.ops_cached.$gwx0_31
__WXML_GLOBAL__.ops_cached.$gwx0_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'admin']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_31);return __WXML_GLOBAL__.ops_cached.$gwx0_31
}
function gz$gwx0_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_32)return __WXML_GLOBAL__.ops_cached.$gwx0_32
__WXML_GLOBAL__.ops_cached.$gwx0_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'admin']])
Z([3,'replacements'])
Z([[7],[3,'canshare']])
Z([[2,'!'],[[7],[3,'canshare']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_32);return __WXML_GLOBAL__.ops_cached.$gwx0_32
}
function gz$gwx0_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_33)return __WXML_GLOBAL__.ops_cached.$gwx0_33
__WXML_GLOBAL__.ops_cached.$gwx0_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_33);return __WXML_GLOBAL__.ops_cached.$gwx0_33
}
function gz$gwx0_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_34)return __WXML_GLOBAL__.ops_cached.$gwx0_34
__WXML_GLOBAL__.ops_cached.$gwx0_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'rights-box'])
Z([[7],[3,'showBulletLayer']])
Z([3,'1018'])
Z([3,'_backgroundTap'])
Z([3,'layer'])
Z([3,'bulletLayer'])
Z([1,false])
Z([3,'right'])
Z([3,'topBack'])
Z([3,'topNavigation'])
Z([3,'center'])
Z([3,'#fff'])
Z([3,'linear-gradient(314deg, #232C41 0%, #232B3F 100%);'])
Z([3,'企业版特权'])
Z([3,'prePage'])
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_34);return __WXML_GLOBAL__.ops_cached.$gwx0_34
}
function gz$gwx0_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_35)return __WXML_GLOBAL__.ops_cached.$gwx0_35
__WXML_GLOBAL__.ops_cached.$gwx0_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'select-con'])
Z([3,'name'])
Z([3,'showSettingTipFunc'])
Z([3,'icon'])
Z([3,'#000000'])
Z([3,'question-mark-outline'])
Z(z[3])
Z([3,'132'])
Z([3,'setting'])
Z([3,'为样式设置名称，帮助企业管理多个名片样式（多部门企业如需同时使用多个样式，请前往网站端进行配置）'])
Z([3,'50'])
Z([[7],[3,'customShow']])
Z([3,'swiperChange'])
Z([3,'style-swiper'])
Z([[7],[3,'current']])
Z([3,'33'])
Z(z[15])
Z([3,'height:560rpx;'])
Z([[7],[3,'defaultCard']])
Z([a,z[18],[3,'?mark\x3d'],[[7],[3,'mark']]])
Z([[7],[3,'logo']])
Z([[6],[[7],[3,'item']],[3,'logoStyle']])
Z([3,'no'])
Z([3,'item'])
Z([[7],[3,'cardsData']])
Z([3,'index'])
Z([[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[1,'url']],[1,'?t\x3d']],[[7],[3,'mark']]])
Z(z[20])
Z(z[21])
Z([3,'yes'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'defaultStatus']],[1,'推荐样式']],[[2,'!'],[[7],[3,'logo']]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'defaultStatus']],[1,'推荐样式']],[[7],[3,'logo']]])
Z(z[1])
Z([3,'showCompanyTipFunc'])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[3])
Z([3,'196'])
Z([3,'companyTip'])
Z([3,'配置后将自动同步至所有使用该样式的员工名片，方便客户在收到员工名片时了解企业的基本信息'])
Z(z[10])
Z([3,'introFun'])
Z([3,'testFailFunc'])
Z([[6],[[7],[3,'contentTestFail']],[1,3]])
Z([[7],[3,'intro']])
Z([3,'photoFun'])
Z([3,'previewPhoto'])
Z([3,'videoFun'])
Z([3,'add'])
Z([[7],[3,'photoList']])
Z([[7],[3,'videoList']])
Z([[2,'>'],[[6],[[7],[3,'cardsData']],[3,'length']],[1,0]])
Z([[7],[3,'autoStyleLayerShow']])
Z([3,'known'])
Z([[7],[3,'modalShow']])
Z([3,'deleteConfirm'])
Z([3,'deleteCancel'])
Z([3,'#FF3B2F'])
Z([3,'确认删除'])
Z([3,'text'])
Z([3,'取消'])
Z([1,false])
Z(z[55])
Z([3,'确认删除？'])
Z([3,'true'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_35);return __WXML_GLOBAL__.ops_cached.$gwx0_35
}
function gz$gwx0_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_36)return __WXML_GLOBAL__.ops_cached.$gwx0_36
__WXML_GLOBAL__.ops_cached.$gwx0_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'prePage'])
Z([3,'white'])
Z([3,'topNavigation'])
Z([3,'center'])
Z([3,'false'])
Z([3,'#000'])
Z([3,'#ffffff'])
Z([3,'我的企业'])
Z(z[1])
Z(z[0])
Z([3,'style-more'])
Z([[2,'>'],[[6],[[7],[3,'styleCon']],[3,'length']],[1,0]])
Z([3,'finishSwiper'])
Z([3,'swiperChange'])
Z([3,'style-swiper'])
Z([[7],[3,'current']])
Z([3,'20'])
Z([[2,'?:'],[[2,'>'],[[6],[[7],[3,'styleCon']],[3,'length']],[1,1]],[1,'25'],[1,'20']])
Z([3,'height:calc(100% - 350rpx);'])
Z([[7],[3,'styleCon']])
Z([[2,'?:'],[[2,'||'],[[2,'=='],[[7],[3,'roleId']],[1,1]],[[2,'=='],[[7],[3,'roleId']],[1,2]]],[1,'changeStyle'],[1,'needRoot']])
Z([a,[3,'style-card '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[1,0]],[1,'first'],[1,'not-first']],[3,' '],[[2,'?:'],[[2,'!'],[[7],[3,'startAnimation']]],[1,''],[[2,'?:'],[[2,'=='],[[7],[3,'current']],[[7],[3,'index']]],[1,'choosed-card'],[1,'no-choosed-card']]]])
Z([[6],[[7],[3,'item']],[1,'deptNames']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[1,'tplBaseNum']])
Z(z[25])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'styleCon']],[3,'length']],[1,1]],[1,'margin:30rpx auto 0;'],[1,'']])
Z([[2,'?:'],[[6],[[7],[3,'item']],[1,'defaultTplUrl']],[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[1,'defaultTplUrl']],[1,'?t\x3d']],[[7],[3,'mark']]],[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[1,'tplUrl']],[1,'?t\x3d']],[[7],[3,'mark']]]])
Z([[6],[[7],[3,'item']],[3,'tplLogo']])
Z([[6],[[7],[3,'item']],[3,'logoStyle']])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'tplType']])
Z([[6],[[7],[3,'tipPos']],[3,'isShow']])
Z([[7],[3,'sheetShow']])
Z([3,'sheetItemTap'])
Z(z[35])
Z([[7],[3,'chooseDeptList']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_36);return __WXML_GLOBAL__.ops_cached.$gwx0_36
}
function gz$gwx0_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_37)return __WXML_GLOBAL__.ops_cached.$gwx0_37
__WXML_GLOBAL__.ops_cached.$gwx0_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'conditions']],[1,'0']])
Z([[2,'=='],[[7],[3,'conditions']],[1,'1']])
Z([[7],[3,'fillInformation']])
Z([[6],[[7],[3,'administrators']],[3,'adminName']])
Z([3,'closeWindow'])
Z([3,'requiredConditions'])
Z([[7],[3,'cardList']])
Z([[7],[3,'sourceType']])
Z([[6],[[7],[3,'administrators']],[3,'entId']])
Z([[6],[[7],[3,'administrators']],[3,'entName']])
Z([3,'确定'])
Z([3,'cardInfor'])
Z(z[10])
Z([[6],[[7],[3,'administrators']],[3,'openId']])
Z([3,'constructor'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_37);return __WXML_GLOBAL__.ops_cached.$gwx0_37
}
function gz$gwx0_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_38)return __WXML_GLOBAL__.ops_cached.$gwx0_38
__WXML_GLOBAL__.ops_cached.$gwx0_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'notClaimedMembers']],[[6],[[7],[3,'notClaimedMembers']],[3,'length']]])
Z([[7],[3,'showAddmyCard']])
Z([3,'idx'])
Z([3,'member'])
Z([[7],[3,'allMembers']])
Z(z[2])
Z([3,'teamDetail'])
Z([3,'card'])
Z([[6],[[7],[3,'member']],[3,'cardId']])
Z([[6],[[7],[3,'member']],[3,'formtoken']])
Z([[6],[[7],[3,'member']],[1,'role']])
Z([[6],[[7],[3,'member']],[3,'tplId']])
Z([[6],[[7],[3,'member']],[3,'vcardId']])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'member']],[1,'roleId']],[1,1]],[[2,'=='],[[6],[[7],[3,'member']],[1,'roleId']],[1,2]]])
Z([[7],[3,'fillInformation']])
Z([3,'_closeWindow'])
Z([3,'_teamInfo'])
Z([[7],[3,'matchCardList']])
Z([[6],[[7],[3,'chooseTeamData']],[1,'phoneNumber']])
Z([[6],[[7],[3,'chooseTeamData']],[3,'entName']])
Z([[6],[[7],[3,'chooseTeamData']],[1,'entId']])
Z([3,'完成填写'])
Z([3,'cardInfor'])
Z([3,'确认选择'])
Z([[7],[3,'createOpenType']])
Z([3,'360'])
Z([3,'company'])
Z([3,'120'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_38);return __WXML_GLOBAL__.ops_cached.$gwx0_38
}
function gz$gwx0_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_39)return __WXML_GLOBAL__.ops_cached.$gwx0_39
__WXML_GLOBAL__.ops_cached.$gwx0_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tolookhomepage'])
Z([3,'touxiangFun'])
Z([[7],[3,'freshNum']])
Z([[7],[3,'singleData']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'claimState']],[1,'已认领']],[[2,'!'],[[7],[3,'showDetail']]]])
Z([3,'lookClaimDetail'])
Z([3,'content-bottom-left'])
Z([3,'wechat-icon'])
Z([3,'#28C445'])
Z([3,'wechat'])
Z([3,'wechat-mini-icon'])
Z([[2,'=='],[[7],[3,'claimState']],[1,'未认领']])
Z([[7],[3,'showDetail']])
Z([3,'closeDetail'])
Z([3,'content-bottom-close'])
Z([3,'#999999'])
Z([3,'close'])
Z([3,'close-mini-icon'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_39);return __WXML_GLOBAL__.ops_cached.$gwx0_39
}
function gz$gwx0_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_40)return __WXML_GLOBAL__.ops_cached.$gwx0_40
__WXML_GLOBAL__.ops_cached.$gwx0_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'confirmCompany'])
Z([3,'nofirst'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_40);return __WXML_GLOBAL__.ops_cached.$gwx0_40
}
function gz$gwx0_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_41)return __WXML_GLOBAL__.ops_cached.$gwx0_41
__WXML_GLOBAL__.ops_cached.$gwx0_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'openid']],[[6],[[7],[3,'templateObjects']],[3,'userOpenId']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_41);return __WXML_GLOBAL__.ops_cached.$gwx0_41
}
function gz$gwx0_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_42)return __WXML_GLOBAL__.ops_cached.$gwx0_42
__WXML_GLOBAL__.ops_cached.$gwx0_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_42);return __WXML_GLOBAL__.ops_cached.$gwx0_42
}
function gz$gwx0_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_43)return __WXML_GLOBAL__.ops_cached.$gwx0_43
__WXML_GLOBAL__.ops_cached.$gwx0_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'home'])
Z([3,'topNavigation'])
Z([[7],[3,'topTitle']])
Z([[7],[3,'topType']])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx0_43);return __WXML_GLOBAL__.ops_cached.$gwx0_43
}
function gz$gwx0_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_44)return __WXML_GLOBAL__.ops_cached.$gwx0_44
__WXML_GLOBAL__.ops_cached.$gwx0_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_44);return __WXML_GLOBAL__.ops_cached.$gwx0_44
}
function gz$gwx0_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_45)return __WXML_GLOBAL__.ops_cached.$gwx0_45
__WXML_GLOBAL__.ops_cached.$gwx0_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_45);return __WXML_GLOBAL__.ops_cached.$gwx0_45
}
function gz$gwx0_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_46)return __WXML_GLOBAL__.ops_cached.$gwx0_46
__WXML_GLOBAL__.ops_cached.$gwx0_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'form '],[[2,'?:'],[[2,'=='],[[7],[3,'type']],[1,'read']],[1,'read-only'],[1,'']]])
Z([[7],[3,'showMore']])
Z([3,'btn-item'])
Z([[2,'!'],[[7],[3,'disabled']]])
Z([[2,'=='],[[7],[3,'orderstate']],[1,1]])
Z([[2,'=='],[[7],[3,'orderstate']],[1,2]])
Z([[2,'=='],[[7],[3,'orderstate']],[1,3]])
Z([[7],[3,'showSubmitDlg']])
Z([3,'cancelSubmit'])
Z([3,'confirmSubmit'])
Z([1,true])
Z([3,'取消'])
Z(z[10])
Z([3,'确认'])
Z([3,'请确认您的发票抬头和电子邮箱正确，错误信息开具发票后将不再补开'])
Z([3,'确认提交'])
Z([3,'intro'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_46);return __WXML_GLOBAL__.ops_cached.$gwx0_46
}
function gz$gwx0_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_47)return __WXML_GLOBAL__.ops_cached.$gwx0_47
__WXML_GLOBAL__.ops_cached.$gwx0_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[2,'==='],[[7],[3,'status']],[1,'200']])
Z([[2,'==='],[[7],[3,'status']],[1,'1040']])
Z([[2,'||'],[[2,'||'],[[2,'==='],[[7],[3,'status']],[1,'1041']],[[2,'==='],[[7],[3,'status']],[1,'1065']]],[[2,'==='],[[7],[3,'status']],[1,'1064']]])
Z([[2,'==='],[[7],[3,'status']],[1,'1041']])
Z(z[1])
Z(z[2])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx0_47);return __WXML_GLOBAL__.ops_cached.$gwx0_47
}
function gz$gwx0_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_48)return __WXML_GLOBAL__.ops_cached.$gwx0_48
__WXML_GLOBAL__.ops_cached.$gwx0_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'noBleed']])
Z([[7],[3,'fillInformation']])
Z([3,'closeWindow'])
Z([3,'teamInfo'])
Z([[7],[3,'cardList']])
Z([[7],[3,'userPhoneNumber']])
Z([[7],[3,'deptId']])
Z([[7],[3,'entId']])
Z([[7],[3,'entName']])
Z([3,'完成填写'])
Z([3,'cardInfor'])
Z([3,'确认选择'])
Z([[2,'?:'],[[2,'&&'],[[7],[3,'claimCardsData']],[[6],[[7],[3,'claimCardsData']],[3,'length']]],[1,'fromTeam'],[1,'fromMicro']])
Z([3,'240'])
Z([3,'joinenterprise'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_48);return __WXML_GLOBAL__.ops_cached.$gwx0_48
}
function gz$gwx0_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_49)return __WXML_GLOBAL__.ops_cached.$gwx0_49
__WXML_GLOBAL__.ops_cached.$gwx0_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'fillInformation']])
Z([3,'closeWindow'])
Z([3,'teamInfo'])
Z([[7],[3,'cardList']])
Z([[7],[3,'userPhoneNumber']])
Z([[7],[3,'deptId']])
Z([[7],[3,'entId']])
Z([[7],[3,'entName']])
Z([3,'完成填写'])
Z([3,'cardInfor'])
Z([3,'确认选择'])
Z([[2,'?:'],[[2,'&&'],[[7],[3,'claimCardsData']],[[6],[[7],[3,'claimCardsData']],[3,'length']]],[1,'fromTeam'],[1,'fromMicro']])
Z([3,'240'])
Z([3,'joinenterprise'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_49);return __WXML_GLOBAL__.ops_cached.$gwx0_49
}
function gz$gwx0_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_50)return __WXML_GLOBAL__.ops_cached.$gwx0_50
__WXML_GLOBAL__.ops_cached.$gwx0_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'conditions']],[1,'0']])
Z([[2,'!=='],[[7],[3,'teamData']],[1,'']])
Z([[2,'=='],[[7],[3,'conditions']],[1,'1']])
Z([[2,'=='],[[7],[3,'conditions']],[1,'2']])
Z([[7],[3,'fillInformation']])
Z([3,'closeWindow'])
Z([3,'teamInfo'])
Z([[7],[3,'cardList']])
Z([[7],[3,'userPhoneNumber']])
Z([[7],[3,'deptId']])
Z([[7],[3,'entId']])
Z([[7],[3,'entname']])
Z([3,'完成填写'])
Z([3,'cardInfor'])
Z([3,'确认选择'])
Z([[2,'?:'],[[2,'&&'],[[7],[3,'claimCardsData']],[[6],[[7],[3,'claimCardsData']],[3,'length']]],[1,'fromTeam'],[1,'fromMicro']])
Z([3,'240'])
Z([3,'joinenterprise'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_50);return __WXML_GLOBAL__.ops_cached.$gwx0_50
}
function gz$gwx0_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_51)return __WXML_GLOBAL__.ops_cached.$gwx0_51
__WXML_GLOBAL__.ops_cached.$gwx0_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'getCardsData']])
Z([3,'item'])
Z([3,'cardTap'])
Z([3,'perCardImg hasBor addShadowRadius'])
Z([[6],[[7],[3,'item']],[3,'cardId']])
Z([[6],[[7],[3,'item']],[3,'cardImgUrl']])
Z([[2,'?:'],[[2,'=='],[[7],[3,'checkedCards']],[[6],[[7],[3,'item']],[3,'cardId']]],[1,';'],[1,'border:none;']])
Z([[2,'=='],[[7],[3,'checkedCards']],[[6],[[7],[3,'item']],[3,'cardId']]])
Z([[7],[3,'mycard']])
Z([a,[3,'bottomButton '],[[2,'?:'],[[6],[[7],[3,'systemInfo']],[3,'modelX']],[1,'bottomButtonDetail'],[1,'bottomButtonDetailF']]])
Z([[7],[3,'checkedCards']])
Z([[2,'!'],[[7],[3,'checkedCards']]])
Z([[7],[3,'cardTipShow']])
Z([3,'modalButton'])
Z([3,'管理我的名片'])
Z([3,'text'])
Z([1,false])
Z([3,'warn'])
Z(z[13])
Z([3,'你的名片数量达到上限，建议删除废弃名片后再重新领取'])
Z([3,'领取失败'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_51);return __WXML_GLOBAL__.ops_cached.$gwx0_51
}
function gz$gwx0_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_52)return __WXML_GLOBAL__.ops_cached.$gwx0_52
__WXML_GLOBAL__.ops_cached.$gwx0_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'prePage'])
Z([3,'topNavigation'])
Z([3,'递名片'])
Z(z[1])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx0_52);return __WXML_GLOBAL__.ops_cached.$gwx0_52
}
function gz$gwx0_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_53)return __WXML_GLOBAL__.ops_cached.$gwx0_53
__WXML_GLOBAL__.ops_cached.$gwx0_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'我的企业'])
Z([[7],[3,'topType']])
Z(z[0])
Z([3,'mini-detail'])
Z([[7],[3,'autherizedData']])
Z([3,'miniWeb'])
Z([[7],[3,'webData']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'options']],[3,'main']],[1,'company']],[[2,'||'],[[2,'=='],[[7],[3,'editType']],[1,'add']],[[2,'=='],[[7],[3,'editType']],[1,'edit']]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'options']],[3,'main']],[1,'company']],[[2,'=='],[[7],[3,'editType']],[1,'look']]])
Z([[7],[3,'leadModalShow']])
Z([3,'leadIn'])
Z([3,'leadCancel'])
Z([3,'#2979FF'])
Z([3,'导入'])
Z([3,'text'])
Z([3,'不导入'])
Z([1,false])
Z(z[10])
Z([3,'系统不再支持个人名片内编辑企业主页，是否将您名片的企业主页信息导入企业微官网？'])
Z([3,'提示'])
Z([[7],[3,'deleteImageTipShow']])
Z([3,'deleteImageCancel'])
Z([3,'deleteImageConfirm'])
Z([3,'#000000'])
Z([3,'取消'])
Z([3,'#FF3B2F'])
Z([3,'确认删除'])
Z([3,'删除已上传的背景图？'])
Z([3,'tip'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_53);return __WXML_GLOBAL__.ops_cached.$gwx0_53
}
function gz$gwx0_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_54)return __WXML_GLOBAL__.ops_cached.$gwx0_54
__WXML_GLOBAL__.ops_cached.$gwx0_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_54);return __WXML_GLOBAL__.ops_cached.$gwx0_54
}
function gz$gwx0_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_55)return __WXML_GLOBAL__.ops_cached.$gwx0_55
__WXML_GLOBAL__.ops_cached.$gwx0_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'autherizedData']])
Z([3,'miniWebDemo'])
Z([[7],[3,'webData']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_55);return __WXML_GLOBAL__.ops_cached.$gwx0_55
}
function gz$gwx0_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_56)return __WXML_GLOBAL__.ops_cached.$gwx0_56
__WXML_GLOBAL__.ops_cached.$gwx0_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'autherizedData']])
Z([3,'miniWebDetail'])
Z([[7],[3,'webData']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_56);return __WXML_GLOBAL__.ops_cached.$gwx0_56
}
function gz$gwx0_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_57)return __WXML_GLOBAL__.ops_cached.$gwx0_57
__WXML_GLOBAL__.ops_cached.$gwx0_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'我的企业'])
Z([[7],[3,'topType']])
Z(z[0])
Z([[2,'=='],[[7],[3,'overDate']],[1,'false']])
Z([[7],[3,'autherizedData']])
Z([3,'miniWeb'])
Z([[7],[3,'webData']])
Z([[2,'=='],[[7],[3,'overDate']],[1,'true']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_57);return __WXML_GLOBAL__.ops_cached.$gwx0_57
}
function gz$gwx0_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_58)return __WXML_GLOBAL__.ops_cached.$gwx0_58
__WXML_GLOBAL__.ops_cached.$gwx0_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'prePageQA'])
Z([3,'企业微官网'])
Z([[7],[3,'topType']])
Z(z[0])
Z([3,'miniweb'])
Z([[2,'!'],[[7],[3,'fullnameInput']]])
Z([[6],[[7],[3,'autherizedData']],[3,'autherized']])
Z([3,'autherizedLook'])
Z([3,'company-image-1'])
Z([3,'autherized-id'])
Z([3,'../AImages/vip-autherized.png'])
Z([[7],[3,'autherizedDetailShow']])
Z([[7],[3,'fullnameInput']])
Z([3,'mini-slogan'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'sloganInput']]],[[7],[3,'slogan']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'sloganInput']]],[[2,'!'],[[7],[3,'slogan']]]])
Z([[7],[3,'sloganInput']])
Z([3,'mini-intro'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'introInput']]],[[7],[3,'intro']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'introInput']]],[[2,'!'],[[7],[3,'intro']]]])
Z([[7],[3,'introInput']])
Z([3,'mini-products'])
Z([[2,'<='],[[6],[[7],[3,'products']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'products']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'products']],[3,'length']],[1,10]])
Z([3,'mini-photo'])
Z([3,'photoComplete'])
Z([3,'photoDelete'])
Z([3,'photoPreview'])
Z([[7],[3,'companyPhoto']])
Z([3,'videoComplete'])
Z([3,'videoDelete'])
Z([[7],[3,'companyVideo']])
Z([[7],[3,'saveModalShow']])
Z([3,'saveCancel'])
Z([3,'saveIn'])
Z([3,'不保存'])
Z([3,'保存'])
Z([3,'是否保存本次修改？'])
Z([3,'tip'])
Z([[7],[3,'deleteProductTipShow']])
Z([3,'deleteProductConfirm'])
Z([3,'deleteProductCancel'])
Z([3,'#FF3B2F'])
Z([3,'删除'])
Z([3,'#000000'])
Z([3,'取消'])
Z([3,'确定删除此产品？'])
Z(z[40])
})(__WXML_GLOBAL__.ops_cached.$gwx0_58);return __WXML_GLOBAL__.ops_cached.$gwx0_58
}
function gz$gwx0_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_59)return __WXML_GLOBAL__.ops_cached.$gwx0_59
__WXML_GLOBAL__.ops_cached.$gwx0_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'industry'])
Z([[7],[3,'showRight']])
Z([[7],[3,'rightCon']])
Z([[7],[3,'item']])
Z([3,'rightTap'])
Z([3,'right-item'])
Z([[7],[3,'index']])
Z([[2,'?:'],[[2,'=='],[[7],[3,'selectRight']],[[6],[[7],[3,'item']],[3,'industryCode']]],[1,'color:#2979FF;'],[1,'']])
Z([[2,'=='],[[7],[3,'selectRight']],[[6],[[7],[3,'item']],[3,'industryCode']]])
Z([a,[3,'bottomButton '],[[2,'?:'],[[6],[[7],[3,'systemInfo']],[3,'modelX']],[1,'bottomButtonDetail'],[1,'bottomButtonDetailF']]])
Z([[7],[3,'save']])
Z([[2,'!'],[[7],[3,'save']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_59);return __WXML_GLOBAL__.ops_cached.$gwx0_59
}
function gz$gwx0_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_60)return __WXML_GLOBAL__.ops_cached.$gwx0_60
__WXML_GLOBAL__.ops_cached.$gwx0_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_60);return __WXML_GLOBAL__.ops_cached.$gwx0_60
}
function gz$gwx0_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_61)return __WXML_GLOBAL__.ops_cached.$gwx0_61
__WXML_GLOBAL__.ops_cached.$gwx0_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'previewEditImage'])
Z([3,'savePro'])
Z([3,'upldComplete'])
Z([[7],[3,'intro']])
Z([[7],[3,'photo']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_61);return __WXML_GLOBAL__.ops_cached.$gwx0_61
}
function gz$gwx0_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_62)return __WXML_GLOBAL__.ops_cached.$gwx0_62
__WXML_GLOBAL__.ops_cached.$gwx0_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'freshNum']])
Z([[7],[3,'singleData']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_62);return __WXML_GLOBAL__.ops_cached.$gwx0_62
}
function gz$gwx0_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_63)return __WXML_GLOBAL__.ops_cached.$gwx0_63
__WXML_GLOBAL__.ops_cached.$gwx0_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'status']],[1,'success']])
Z([[2,'=='],[[7],[3,'status']],[1,'loseEfficacy']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_63);return __WXML_GLOBAL__.ops_cached.$gwx0_63
}
function gz$gwx0_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_64)return __WXML_GLOBAL__.ops_cached.$gwx0_64
__WXML_GLOBAL__.ops_cached.$gwx0_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_64);return __WXML_GLOBAL__.ops_cached.$gwx0_64
}
function gz$gwx0_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_65)return __WXML_GLOBAL__.ops_cached.$gwx0_65
__WXML_GLOBAL__.ops_cached.$gwx0_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'openid']],[[6],[[7],[3,'templateObjects']],[3,'userOpenId']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_65);return __WXML_GLOBAL__.ops_cached.$gwx0_65
}
function gz$gwx0_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_66)return __WXML_GLOBAL__.ops_cached.$gwx0_66
__WXML_GLOBAL__.ops_cached.$gwx0_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'fillInformation']])
Z([3,'closeWindow'])
Z([3,'teamInfo'])
Z([[7],[3,'cardList']])
Z([[7],[3,'userPhoneNumber']])
Z([[7],[3,'deptId']])
Z([[7],[3,'entId']])
Z([[7],[3,'entname']])
Z([3,'完成填写'])
Z([3,'cardInfor'])
Z([3,'确认选择'])
Z([[2,'?:'],[[2,'&&'],[[7],[3,'claimCardsData']],[[6],[[7],[3,'claimCardsData']],[3,'length']]],[1,'fromMicro'],[1,'fromTeam']])
Z([3,'240'])
Z([3,'joinenterprise'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_66);return __WXML_GLOBAL__.ops_cached.$gwx0_66
}
function gz$gwx0_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_67)return __WXML_GLOBAL__.ops_cached.$gwx0_67
__WXML_GLOBAL__.ops_cached.$gwx0_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'packup'])
Z([[7],[3,'singleData']])
Z([[7],[3,'dynamicCardVideoPlay']])
Z([[7],[3,'saveHave']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_67);return __WXML_GLOBAL__.ops_cached.$gwx0_67
}
function gz$gwx0_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_68)return __WXML_GLOBAL__.ops_cached.$gwx0_68
__WXML_GLOBAL__.ops_cached.$gwx0_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[6],[[7],[3,'tip']],[3,'show']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'pageType']],[1,'shareCardlibrary']],[[2,'>'],[[6],[[7],[3,'myConnections']],[3,'length']],[1,0]]])
Z([[7],[3,'myConnections']])
Z([[7],[3,'item']])
Z([3,'toShareDetail'])
Z([3,'cardInfoCon'])
Z([[6],[[7],[3,'item']],[3,'formtoken']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'openid']])
Z([[6],[[7],[3,'item']],[3,'cardUrl']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'cardUrl']]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'pageType']],[1,'coreTeam']],[[2,'>'],[[6],[[7],[3,'myConnections']],[3,'length']],[1,0]]])
Z(z[3])
Z(z[4])
Z([3,'toDetail'])
Z(z[6])
Z([[6],[[7],[3,'item']],[3,'cardId']])
Z(z[7])
Z([[6],[[7],[3,'item']],[1,'role']])
Z([[6],[[7],[3,'item']],[3,'tplId']])
Z([[6],[[7],[3,'item']],[3,'vcardId']])
Z([[6],[[7],[3,'item']],[3,'avatarUrl']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'avatarUrl']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_68);return __WXML_GLOBAL__.ops_cached.$gwx0_68
}
function gz$gwx0_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_69)return __WXML_GLOBAL__.ops_cached.$gwx0_69
__WXML_GLOBAL__.ops_cached.$gwx0_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_69);return __WXML_GLOBAL__.ops_cached.$gwx0_69
}
function gz$gwx0_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_70)return __WXML_GLOBAL__.ops_cached.$gwx0_70
__WXML_GLOBAL__.ops_cached.$gwx0_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'comStatus']],[1,'试用']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_70);return __WXML_GLOBAL__.ops_cached.$gwx0_70
}
function gz$gwx0_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_71)return __WXML_GLOBAL__.ops_cached.$gwx0_71
__WXML_GLOBAL__.ops_cached.$gwx0_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'topBack'])
Z([3,'topNavigation'])
Z([3,'center'])
Z([3,'#fff'])
Z([3,'#2D3547'])
Z([3,'递名片企业版'])
Z([3,'prePage'])
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'toRight'])
Z([[7],[3,'cacheCompany']])
Z([[7],[3,'companyName']])
Z([[7],[3,'entId']])
Z([[7],[3,'freshPayMoney']])
Z([[7],[3,'miniCompany']])
Z([[7],[3,'payStatus']])
Z([[7],[3,'scrollTop']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_71);return __WXML_GLOBAL__.ops_cached.$gwx0_71
}
function gz$gwx0_72(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_72)return __WXML_GLOBAL__.ops_cached.$gwx0_72
__WXML_GLOBAL__.ops_cached.$gwx0_72=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'permissions']],[[2,'=='],[[7],[3,'msg']],[1,'stub']]])
Z([[2,'=='],[[7],[3,'permissions']],[1,false]])
Z([[2,'=='],[[7],[3,'msg']],[1,'nostub']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_72);return __WXML_GLOBAL__.ops_cached.$gwx0_72
}
function gz$gwx0_73(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_73)return __WXML_GLOBAL__.ops_cached.$gwx0_73
__WXML_GLOBAL__.ops_cached.$gwx0_73=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tolookhomepage'])
Z([3,'touxiangFun'])
Z([[7],[3,'freshNum']])
Z([[7],[3,'singleData']])
Z([[6],[[7],[3,'singleData']],[1,'isDel']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_73);return __WXML_GLOBAL__.ops_cached.$gwx0_73
}
function gz$gwx0_74(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_74)return __WXML_GLOBAL__.ops_cached.$gwx0_74
__WXML_GLOBAL__.ops_cached.$gwx0_74=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'batchContainerF'])
Z([[7],[3,'scSuccesView']])
Z([3,'0'])
Z([[7],[3,'scranimation']])
Z([[2,'&&'],[[6],[[7],[3,'selected']],[3,'noResult']],[[6],[[7],[3,'selected']],[3,'noResultValue']]])
Z([[6],[[7],[3,'selected']],[3,'result']])
Z([[6],[[7],[3,'selected']],[3,'resultData']])
Z([[7],[3,'item']])
Z([[9],[[9],[[9],[[10],[[7],[3,'item']]],[[8],'indexL',[[7],[3,'index']]]],[[8],'bindtap',[1,'radioClick']]],[[8],'checked',[[6],[[6],[[7],[3,'selected']],[1,'checked']],[[6],[[7],[3,'item']],[3,'id']]]]])
Z([3,'cardListItem'])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'selected']],[1,'name']]],[[2,'<='],[[6],[[6],[[7],[3,'selected']],[1,'name']],[3,'length']],[1,0]]])
Z([[7],[3,'receiveDataShare']])
Z(z[7])
Z([3,'indexL'])
Z([3,'itemL'])
Z([[6],[[7],[3,'item']],[3,'items']])
Z([[7],[3,'itemL']])
Z([[9],[[9],[[9],[[10],[[7],[3,'itemL']]],[[8],'indexL',[[7],[3,'indexL']]]],[[8],'bindtap',[1,'radioClick']]],[[8],'checked',[[6],[[6],[[7],[3,'selected']],[1,'checked']],[[6],[[7],[3,'itemL']],[3,'id']]]]])
Z(z[9])
Z([3,'share-bottom'])
Z([[2,'>'],[[6],[[6],[[7],[3,'selected']],[3,'name']],[3,'length']],[1,0]])
Z([[2,'<='],[[6],[[6],[[7],[3,'selected']],[3,'name']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'letterList']],[3,'length']],[1,0]])
Z([[7],[3,'lettershow']])
Z([3,'lettershow'])
Z([[2,'=='],[[7],[3,'lettershow']],[1,'top']])
Z([[2,'!='],[[7],[3,'lettershow']],[1,'top']])
Z(z[9])
Z([[7],[3,'bindtap']])
Z([3,'cardList-label'])
Z([[7],[3,'checked']])
Z([[7],[3,'id']])
Z([[7],[3,'indexL']])
Z([[7],[3,'rid']])
Z([a,[[2,'?:'],[[7],[3,'checked']],[1,'单选取消'],[1,'单选选中']],[3,'id:'],z[31]])
Z([3,'cardList-item'])
Z([3,'activeStyle'])
Z([3,'padding:0 26rpx 0 0;margin-left:-20rpx;'])
Z([[2,'!='],[[7],[3,'hengshu']],[1,'shu']])
Z([[2,'=='],[[7],[3,'hengshu']],[1,'shu']])
Z([[7],[3,'stickSuc']])
Z([3,'closeIcon'])
Z([3,'shareLayer'])
Z([[7],[3,'accumulated']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_74);return __WXML_GLOBAL__.ops_cached.$gwx0_74
}
function gz$gwx0_75(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_75)return __WXML_GLOBAL__.ops_cached.$gwx0_75
__WXML_GLOBAL__.ops_cached.$gwx0_75=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'pageLoading']])
Z([3,'box'])
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'home'])
Z([3,'white'])
Z([3,'topNavigation'])
Z([3,'center'])
Z([3,'false'])
Z([3,'#fff'])
Z([3,'linear-gradient(135deg, #1E2330 0%, #1A1E47 100%);'])
Z([3,'推荐有礼'])
Z(z[3])
Z(z[2])
Z([3,'form'])
Z([3,'build_input'])
Z([[7],[3,'buttonShow']])
Z([[7],[3,'hadAuthentication']])
Z([[7],[3,'getSettingMessage']])
Z([3,'submit'])
Z([[7],[3,'loading']])
Z([3,'submit-button'])
Z([3,'完成注册'])
Z([3,'primary'])
Z([3,'getuserinfosync'])
Z([3,'sensorClick961'])
Z(z[19])
Z(z[20])
Z([3,'getUserInfoSync'])
Z(z[21])
Z(z[22])
})(__WXML_GLOBAL__.ops_cached.$gwx0_75);return __WXML_GLOBAL__.ops_cached.$gwx0_75
}
function gz$gwx0_76(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_76)return __WXML_GLOBAL__.ops_cached.$gwx0_76
__WXML_GLOBAL__.ops_cached.$gwx0_76=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_76);return __WXML_GLOBAL__.ops_cached.$gwx0_76
}
function gz$gwx0_77(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_77)return __WXML_GLOBAL__.ops_cached.$gwx0_77
__WXML_GLOBAL__.ops_cached.$gwx0_77=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'list']])
Z([3,'entId'])
Z([3,'itemClick'])
Z([a,[3,'teamListCon-list-item-con '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'entId']],[[7],[3,'preEntId']]],[1,'selItem'],[1,'']]])
Z([[7],[3,'index']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'entId']],[[7],[3,'preEntId']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'isAdmin']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_77);return __WXML_GLOBAL__.ops_cached.$gwx0_77
}
function gz$gwx0_78(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_78)return __WXML_GLOBAL__.ops_cached.$gwx0_78
__WXML_GLOBAL__.ops_cached.$gwx0_78=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'cardDetail']],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_78);return __WXML_GLOBAL__.ops_cached.$gwx0_78
}
function gz$gwx0_79(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_79)return __WXML_GLOBAL__.ops_cached.$gwx0_79
__WXML_GLOBAL__.ops_cached.$gwx0_79=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'teamSetting'])
Z([[7],[3,'teamEditShow']])
Z([3,'_editCancel'])
Z([3,'_editSave'])
Z([[7],[3,'teamMessage']])
Z([[7],[3,'modalShow']])
Z([3,'_modalButton'])
Z([3,'_modalCancel'])
Z([3,'#FF3B2F'])
Z([3,'退出'])
Z([3,'text'])
Z([1,false])
Z(z[5])
Z([3,'确定退出企业？'])
Z(z[11])
Z([[7],[3,'dismissModalShow']])
Z([3,'_dismissModalButton'])
Z([3,'_dismissModalCancel'])
Z([[7],[3,'cancel']])
Z([[7],[3,'cancelColor']])
Z([[7],[3,'cancelText']])
Z([[7],[3,'confirm']])
Z([3,'#000000'])
Z([3,'取消'])
Z([3,'将清空企业的全部信息，企业版有效期不可转移，请谨慎操作'])
Z([3,'确定解散企业？'])
Z([3,'intro'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_79);return __WXML_GLOBAL__.ops_cached.$gwx0_79
}
function gz$gwx0_80(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_80)return __WXML_GLOBAL__.ops_cached.$gwx0_80
__WXML_GLOBAL__.ops_cached.$gwx0_80=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shareTip'])
Z([3,'poster'])
Z([3,'container'])
Z([[7],[3,'stImgUrl']])
Z([3,'closePoster'])
Z([3,'know'])
Z([3,'我知道了'])
Z([3,'primary'])
Z([[7],[3,'showPosterTip']])
Z([[8],'stImgUrl',[[7],[3,'stImgUrl']]])
Z(z[1])
Z([3,'box'])
Z([3,'topBack'])
Z([3,'/images/toLeft-white.png'])
Z([3,'width:16rpx;height:32rpx;'])
Z([3,'topNavigation'])
Z([3,'center'])
Z([3,'#fff'])
Z([3,'linear-gradient(135deg, #1E2330 0%, #1A1E47 100%);'])
Z([3,'推荐有礼'])
Z([3,'prePage'])
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'records'])
Z([[6],[[7],[3,'invitors']],[3,'length']])
Z([3,'sensorClick958'])
Z([3,'share-button'])
Z([3,'share'])
Z([3,'邀请微信好友'])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx0_80);return __WXML_GLOBAL__.ops_cached.$gwx0_80
}
function gz$gwx0_81(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_81)return __WXML_GLOBAL__.ops_cached.$gwx0_81
__WXML_GLOBAL__.ops_cached.$gwx0_81=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!=='],[[12],[[6],[[7],[3,'pay']],[3,'moneyFilter']],[[5],[[6],[[7],[3,'payManagement']],[1,'yingshou']]]],[[12],[[6],[[7],[3,'pay']],[3,'moneyFilter']],[[5],[[6],[[7],[3,'payManagement']],[1,'shishou']]]]])
Z([3,'xieyi-con'])
Z([[6],[[7],[3,'compatibleManage']],[1,'openContact']])
Z([[2,'!'],[[6],[[7],[3,'compatibleManage']],[1,'openContact']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_81);return __WXML_GLOBAL__.ops_cached.$gwx0_81
}
function gz$gwx0_82(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_82)return __WXML_GLOBAL__.ops_cached.$gwx0_82
__WXML_GLOBAL__.ops_cached.$gwx0_82=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'login']])
Z([3,'bottom'])
Z([[2,'!'],[[7],[3,'empowerStatus']]])
Z([[7],[3,'empowerStatus']])
Z([[2,'!'],[[7],[3,'login']]])
Z([[7],[3,'showText']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_82);return __WXML_GLOBAL__.ops_cached.$gwx0_82
}
function gz$gwx0_83(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_83)return __WXML_GLOBAL__.ops_cached.$gwx0_83
__WXML_GLOBAL__.ops_cached.$gwx0_83=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_83);return __WXML_GLOBAL__.ops_cached.$gwx0_83
}
function gz$gwx0_84(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_84)return __WXML_GLOBAL__.ops_cached.$gwx0_84
__WXML_GLOBAL__.ops_cached.$gwx0_84=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'card'])
Z([[6],[[6],[[7],[3,'previewData']],[3,'modelIndex']],[3,'url']])
Z([[2,'<='],[[6],[[7],[3,'contactData']],[3,'length']],[1,0]])
Z([3,'card-desc'])
Z([[2,'&&'],[[2,'||'],[[2,'<='],[[6],[[6],[[7],[3,'previewData']],[3,'video']],[3,'length']],[1,0]],[[2,'!'],[[6],[[7],[3,'previewData']],[3,'video']]]],[[2,'||'],[[2,'<='],[[6],[[6],[[7],[3,'previewData']],[3,'desc']],[3,'length']],[1,0]],[[2,'!'],[[6],[[7],[3,'previewData']],[3,'desc']]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'previewData']],[3,'video']],[3,'length']],[1,0]])
Z([3,'scanCode'])
Z([3,'preview-button'])
Z([3,'重新扫码'])
Z([3,'primary'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_84);return __WXML_GLOBAL__.ops_cached.$gwx0_84
}
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={"p_./pages/companyManage/_wxs/pay.wxs":np_0,"p_./pages/companyManage/searchPage/tool.wxs":np_1,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/companyManage/Amodule/iosPay/iosPay.wxml']={};
f_['./pages/companyManage/Amodule/iosPay/iosPay.wxml']['pay'] =f_['./pages/companyManage/_wxs/pay.wxs'] || nv_require("p_./pages/companyManage/_wxs/pay.wxs");
f_['./pages/companyManage/Amodule/iosPay/iosPay.wxml']['pay']();

f_['./pages/companyManage/Amodule/wxPay/wxPay.wxml']={};
f_['./pages/companyManage/Amodule/wxPay/wxPay.wxml']['pay'] =f_['./pages/companyManage/_wxs/pay.wxs'] || nv_require("p_./pages/companyManage/_wxs/pay.wxs");
f_['./pages/companyManage/Amodule/wxPay/wxPay.wxml']['pay']();

f_['./pages/companyManage/_wxs/pay.wxs'] = nv_require("p_./pages/companyManage/_wxs/pay.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_moneyFilter = (function (nv_value){if (!nv_value)return(0);;if (nv_value < 100)nv_value = ((nv_value - 0) / 100).nv_toFixed(2);;if (nv_value >= 100)nv_value = Math.nv_floor(((nv_value - 0) / 100)).nv_toFixed(0);;return(nv_value)});var nv_restDateFilter = (function (){var nv_date = nv_getDate();var nv_year = nv_date.nv_getFullYear() * 1 + 1;var nv_month = nv_date.nv_getMonth() > 9 ? nv_date.nv_getMonth() + 1:'0' + (nv_date.nv_getMonth() + 1);var nv_day = nv_date.nv_getDate() > 9 ? nv_date.nv_getDate():'0' + nv_date.nv_getDate();return(nv_year + '-' + nv_month + '-' + nv_day)});var nv_discount = (function (nv_yingshou,nv_shishou){var nv_discount = Math.nv_floor(((nv_yingshou - 0) / 100)).nv_toFixed(2) - Math.nv_floor(((nv_shishou - 0) / 100)).nv_toFixed(2);var nv_hasDiscount = nv_discount ? true:false;if (nv_discount >= 1)return(({nv_discount:nv_discount + ".00",nv_discountNofixed:nv_discount,nv_hasDiscount:nv_hasDiscount,}));;return(({nv_discount:nv_discount,nv_discountNofixed:nv_discount,nv_hasDiscount:nv_hasDiscount,}))});var nv_payTime = (function (nv_time){var nv_year = nv_time.nv_slice(0,4);var nv_month = nv_time.nv_slice(4,6);var nv_day = nv_time.nv_slice(6,8);var nv_hour = nv_time.nv_slice(8,10);var nv_minute = nv_time.nv_slice(10,12);return('' + nv_year + '-' + nv_month + '-' + nv_day + ' ' + nv_hour + ':' + nv_minute)});nv_module.nv_exports = ({nv_moneyFilter:nv_moneyFilter,nv_discount:nv_discount,nv_restDateFilter:nv_restDateFilter,nv_payTime:nv_payTime,});return nv_module.nv_exports;}

f_['./pages/companyManage/buyRecords/buyRecords.wxml']={};
f_['./pages/companyManage/buyRecords/buyRecords.wxml']['pay'] =f_['./pages/companyManage/_wxs/pay.wxs'] || nv_require("p_./pages/companyManage/_wxs/pay.wxs");
f_['./pages/companyManage/buyRecords/buyRecords.wxml']['pay']();

f_['./pages/companyManage/searchPage/searchPage.wxml']={};
f_['./pages/companyManage/searchPage/searchPage.wxml']['tools'] =f_['./pages/companyManage/searchPage/tool.wxs'] || nv_require("p_./pages/companyManage/searchPage/tool.wxs");
f_['./pages/companyManage/searchPage/searchPage.wxml']['tools']();

f_['./pages/companyManage/searchPage/tool.wxs'] = nv_require("p_./pages/companyManage/searchPage/tool.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_defaultMiniWebLogo = (function (nv_name){nv_console.nv_log("fff",nv_name);return(nv_name && nv_name.nv_slice(0,1))});nv_module.nv_exports = ({nv_defaultMiniWebLogo:nv_defaultMiniWebLogo,});return nv_module.nv_exports;}

f_['./pages/companyManage/servicePay/servicePay.wxml']={};
f_['./pages/companyManage/servicePay/servicePay.wxml']['pay'] =f_['./pages/companyManage/_wxs/pay.wxs'] || nv_require("p_./pages/companyManage/_wxs/pay.wxs");
f_['./pages/companyManage/servicePay/servicePay.wxml']['pay']();

f_['./pages/companyManage/waitingPay/waitingPay.wxml']={};
f_['./pages/companyManage/waitingPay/waitingPay.wxml']['pay'] =f_['./pages/companyManage/_wxs/pay.wxs'] || nv_require("p_./pages/companyManage/_wxs/pay.wxs");
f_['./pages/companyManage/waitingPay/waitingPay.wxml']['pay']();

var x=['./pages/companyManage/Amodule/_public/actionsheet/actionsheet.wxml','./pages/companyManage/Amodule/camera/camera.wxml','./pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.wxml','./pages/companyManage/Amodule/cardInformationForm/editTip/editTip.wxml','./pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.wxml','./pages/companyManage/Amodule/cardInformationForm/record/record.wxml','./pages/companyManage/Amodule/cardInformationForm/renewal/renewal.wxml','./pages/companyManage/Amodule/createBusinesscard/createBusinesscard.wxml','./pages/companyManage/Amodule/editTeamMessage/editTeamMessage.wxml','./pages/companyManage/Amodule/intro/intro.wxml','./pages/companyManage/Amodule/iosPay/iosPay.wxml','./pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.wxml','./pages/companyManage/Amodule/miniweb/camera/camera.wxml','./pages/companyManage/Amodule/miniweb/detail/detail.wxml','./pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.wxml','./pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.wxml','./pages/companyManage/Amodule/miniweb/video/video.wxml','./pages/companyManage/Amodule/renewalTip/renewalTip.wxml','./pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.wxml','./pages/companyManage/Amodule/video/video.wxml','./pages/companyManage/Amodule/wxPay/wxPay.wxml','./pages/companyManage/_static/wxml/index.wxml','./pages/companyManage/addrMatch/addrMatch.wxml','./pages/companyManage/batchProduction/batchProduction.wxml','./pages/companyManage/bindingSuccess/bindingSuccess.wxml','./pages/companyManage/bindingWechatStatus/bindingWechatStatus.wxml','./pages/companyManage/buyRecords/buyRecords.wxml','./pages/companyManage/cardEntrySuccess/cardEntrySuccess.wxml','./pages/companyManage/cardInformationEdit/cardInformationEdit.wxml','./pages/companyManage/cardInformationForm/cardInformationForm.wxml','./pages/companyManage/changeAdmin/changeAdmin.wxml','./pages/companyManage/changeAdminScanCode/changeAdminScanCode.wxml','./pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.wxml','./pages/companyManage/companyRights/companyRights.wxml','./pages/companyManage/configurationChangeStyle/configurationChangeStyle.wxml','./pages/companyManage/configurationStyle/configurationStyle.wxml','./pages/companyManage/constructor/constructor.wxml','./pages/companyManage/coreTeam/coreTeam.wxml','./pages/companyManage/coreTeamDetail/coreTeamDetail.wxml','./pages/companyManage/createTeam/createTeam.wxml','./pages/companyManage/createdPcTemplate/createdPcTemplate.wxml','./pages/companyManage/dynamicList/dynamicList.wxml','./pages/companyManage/enterBindingWechat/enterBindingWechat.wxml','./pages/companyManage/entrySuccess/entrySuccess.wxml','./pages/companyManage/expirationReminder/expirationReminder.wxml','./pages/companyManage/fillTikect/fillTikect.wxml','./pages/companyManage/handoverStatus/handoverStatus.wxml','./pages/companyManage/inviteBinding/inviteBinding.wxml','./pages/companyManage/inviteBindingWechat/inviteBindingWechat.wxml','./pages/companyManage/joinenterprise/joinenterprise.wxml','./pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.wxml','./pages/companyManage/loginSuc/loginSuc.wxml','./pages/companyManage/miniWeb/miniWeb.wxml','./pages/companyManage/miniWebCropBackground/miniWebCropBackground.wxml','./pages/companyManage/miniWebDemo/miniWebDemo.wxml','./pages/companyManage/miniWebDetail/miniWebDetail.wxml','./pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.wxml','./pages/companyManage/miniWebEdit/miniWebEdit.wxml','./pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.wxml','./pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.wxml','./pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.wxml','./pages/companyManage/notClaimCardDetail/notClaimCardDetail.wxml','./pages/companyManage/officialBindingSuccess/officialBindingSuccess.wxml','./pages/companyManage/paySuccess/paySuccess.wxml','./pages/companyManage/pcTemplatePreview/pcTemplatePreview.wxml','./pages/companyManage/phonereceiveCard/phonereceiveCard.wxml','./pages/companyManage/previewVideoCard/previewVideoCard.wxml','./pages/companyManage/searchPage/searchPage.wxml','./pages/companyManage/serviceAgreement/serviceAgreement.wxml','./pages/companyManage/serviceIntro/serviceIntro.wxml','./pages/companyManage/servicePay/servicePay.wxml','./pages/companyManage/shareCardlibrary/shareCardlibrary.wxml','./pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.wxml','./pages/companyManage/shareCardstore/shareCardstore.wxml','./pages/companyManage/shareEnter/shareEnter.wxml','./pages/companyManage/shareTmp/shareTmp.wxml','./pages/companyManage/teamList/teamList.wxml','./pages/companyManage/teamNotClaim/teamNotClaim.wxml','./pages/companyManage/teamSetting/teamSetting.wxml','./pages/companyManage/waitGiftshare/waitGiftshare.wxml','./pages/companyManage/waitingPay/waitingPay.wxml','./pages/companyManage/webLogin/webLogin.wxml','./pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.wxml','./pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_1()
var oB=_mz(z,'view',['animation',0,'class',1,'style',1],[],e,s,gg)
var xC=_n('slot')
_rz(z,xC,'name',3,e,s,gg)
_(oB,xC)
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
if(_oz(z,6,hG,cF,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
return oH
}
oD.wxXCkey=2
_2z(z,4,fE,e,s,gg,oD,'item','index','{{item.text}}')
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_2()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_n('view')
_rz(z,tM,'class',1,e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,2,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,3,e,s,gg)){bO.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
_(aL,tM)
var oP=_mz(z,'component-video',['bindvideoFun',4,'pageFlag',1,'videoList',2],[],e,s,gg)
_(aL,oP)
_(r,aL)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx0_3()
var oR=_v()
_(r,oR)
var fS=function(hU,cT,oV,gg){
var oX=_v()
_(oV,oX)
if(_oz(z,1,hU,cT,gg)){oX.wxVkey=1
}
var lY=_v()
_(oV,lY)
if(_oz(z,2,hU,cT,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oV,aZ)
if(_oz(z,3,hU,cT,gg)){aZ.wxVkey=1
}
oX.wxXCkey=1
lY.wxXCkey=1
aZ.wxXCkey=1
return oV
}
oR.wxXCkey=2
_2z(z,0,fS,e,s,gg,oR,'item','index','')
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx0_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx0_5()
var b3=_v()
_(r,b3)
if(_oz(z,0,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(r,o4)
if(_oz(z,1,e,s,gg)){o4.wxVkey=1
}
b3.wxXCkey=1
o4.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx0_6()
var o6=_mz(z,'view',['catchtouchmove',0,'class',1],[],e,s,gg)
var f7=_n('view')
_rz(z,f7,'class',2,e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,3,e,s,gg)){c8.wxVkey=1
var cAB=_mz(z,'mini-icon',['color',4,'icon',1,'miniClass',2],[],e,s,gg)
_(c8,cAB)
}
var h9=_v()
_(f7,h9)
if(_oz(z,7,e,s,gg)){h9.wxVkey=1
}
var o0=_v()
_(f7,o0)
if(_oz(z,8,e,s,gg)){o0.wxVkey=1
var oBB=_v()
_(o0,oBB)
var lCB=function(tEB,aDB,eFB,gg){
var oHB=_v()
_(eFB,oHB)
if(_oz(z,10,tEB,aDB,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
return eFB
}
oBB.wxXCkey=2
_2z(z,9,lCB,e,s,gg,oBB,'item','index','')
}
c8.wxXCkey=1
c8.wxXCkey=3
h9.wxXCkey=1
o0.wxXCkey=1
_(o6,f7)
_(r,o6)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx0_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx0_8()
var fKB=_n('view')
_rz(z,fKB,'class',0,e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,1,e,s,gg)){cLB.wxVkey=1
}
var hMB=_v()
_(fKB,hMB)
if(_oz(z,2,e,s,gg)){hMB.wxVkey=1
var oNB=_mz(z,'view',['animation',3,'class',1],[],e,s,gg)
var cOB=_n('view')
_rz(z,cOB,'class',5,e,s,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,6,e,s,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(cOB,lQB)
if(_oz(z,7,e,s,gg)){lQB.wxVkey=1
}
oPB.wxXCkey=1
lQB.wxXCkey=1
_(oNB,cOB)
var aRB=_n('view')
_rz(z,aRB,'class',8,e,s,gg)
var eTB=_v()
_(aRB,eTB)
var bUB=function(xWB,oVB,oXB,gg){
var cZB=_mz(z,'view',['bindtap',11,'class',1,'data-entId',2,'data-key',3,'style',4],[],xWB,oVB,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,16,xWB,oVB,gg)){h1B.wxVkey=1
}
var o2B=_v()
_(cZB,o2B)
if(_oz(z,17,xWB,oVB,gg)){o2B.wxVkey=1
}
h1B.wxXCkey=1
o2B.wxXCkey=1
_(oXB,cZB)
return oXB
}
eTB.wxXCkey=2
_2z(z,9,bUB,e,s,gg,eTB,'item','index','{{item}}')
var tSB=_v()
_(aRB,tSB)
if(_oz(z,18,e,s,gg)){tSB.wxVkey=1
}
tSB.wxXCkey=1
_(oNB,aRB)
_(hMB,oNB)
}
cLB.wxXCkey=1
hMB.wxXCkey=1
_(r,fKB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx0_9()
var o4B=_mz(z,'view',['bindtouchstart',0,'class',1],[],e,s,gg)
var l5B=_n('view')
_rz(z,l5B,'class',2,e,s,gg)
var a6B=_v()
_(l5B,a6B)
if(_oz(z,3,e,s,gg)){a6B.wxVkey=1
}
var t7B=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,6,e,s,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(t7B,b9B)
if(_oz(z,7,e,s,gg)){b9B.wxVkey=1
}
e8B.wxXCkey=1
b9B.wxXCkey=1
_(l5B,t7B)
a6B.wxXCkey=1
_(o4B,l5B)
_(r,o4B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx0_10()
var xAC=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,2,e,s,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(xAC,fCC)
if(_oz(z,3,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(xAC,cDC)
if(_oz(z,4,e,s,gg)){cDC.wxVkey=1
}
oBC.wxXCkey=1
fCC.wxXCkey=1
cDC.wxXCkey=1
_(r,xAC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx0_11()
var oFC=_n('view')
_rz(z,oFC,'class',0,e,s,gg)
var oHC=_n('view')
_rz(z,oHC,'class',1,e,s,gg)
var lIC=_n('view')
_rz(z,lIC,'class',2,e,s,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,3,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_oz(z,4,e,s,gg)){tKC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
_(oHC,lIC)
var eLC=_n('view')
_rz(z,eLC,'class',5,e,s,gg)
var bMC=_v()
_(eLC,bMC)
if(_oz(z,6,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(eLC,oNC)
if(_oz(z,7,e,s,gg)){oNC.wxVkey=1
}
bMC.wxXCkey=1
oNC.wxXCkey=1
_(oHC,eLC)
_(oFC,oHC)
var xOC=_n('view')
_rz(z,xOC,'class',8,e,s,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,9,e,s,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(xOC,fQC)
if(_oz(z,10,e,s,gg)){fQC.wxVkey=1
}
oPC.wxXCkey=1
fQC.wxXCkey=1
_(oFC,xOC)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,11,e,s,gg)){cGC.wxVkey=1
}
cGC.wxXCkey=1
_(r,oFC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx0_12()
var hSC=_mz(z,'view',['catchtouchmove',0,'class',1],[],e,s,gg)
var oTC=_mz(z,'component-canvasCheck',['canvasCheck',2,'id',1],[],e,s,gg)
_(hSC,oTC)
_(r,hSC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx0_13()
var oVC=_v()
_(r,oVC)
if(_oz(z,0,e,s,gg)){oVC.wxVkey=1
}
var aXC=_v()
_(r,aXC)
var tYC=function(b1C,eZC,o2C,gg){
var o4C=_v()
_(o2C,o4C)
if(_oz(z,3,b1C,eZC,gg)){o4C.wxVkey=1
}
o4C.wxXCkey=1
return o2C
}
aXC.wxXCkey=2
_2z(z,1,tYC,e,s,gg,aXC,'item','index','{{item}}')
var lWC=_v()
_(r,lWC)
if(_oz(z,4,e,s,gg)){lWC.wxVkey=1
}
oVC.wxXCkey=1
lWC.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx0_14()
var h7C=_n('view')
_rz(z,h7C,'class',0,e,s,gg)
var lAD=_mz(z,'view',['catch:tap',1,'class',1],[],e,s,gg)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,3,e,s,gg)){aBD.wxVkey=1
}
var tCD=_v()
_(lAD,tCD)
if(_oz(z,4,e,s,gg)){tCD.wxVkey=1
}
aBD.wxXCkey=1
tCD.wxXCkey=1
_(h7C,lAD)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,5,e,s,gg)){o8C.wxVkey=1
}
var c9C=_v()
_(h7C,c9C)
if(_oz(z,6,e,s,gg)){c9C.wxVkey=1
}
var o0C=_v()
_(h7C,o0C)
if(_oz(z,7,e,s,gg)){o0C.wxVkey=1
}
o8C.wxXCkey=1
c9C.wxXCkey=1
o0C.wxXCkey=1
_(r,h7C)
var c6C=_v()
_(r,c6C)
if(_oz(z,8,e,s,gg)){c6C.wxVkey=1
var eDD=_mz(z,'component-preview',['bindproTap',9,'pageName',1,'swiperCon',2],[],e,s,gg)
_(c6C,eDD)
}
c6C.wxXCkey=1
c6C.wxXCkey=3
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx0_15()
var oFD=_n('view')
_rz(z,oFD,'class',0,e,s,gg)
var xGD=_v()
_(oFD,xGD)
if(_oz(z,1,e,s,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(oFD,oHD)
if(_oz(z,2,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(oFD,fID)
if(_oz(z,3,e,s,gg)){fID.wxVkey=1
}
xGD.wxXCkey=1
oHD.wxXCkey=1
fID.wxXCkey=1
_(r,oFD)
var cJD=_n('view')
_rz(z,cJD,'class',4,e,s,gg)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,5,e,s,gg)){hKD.wxVkey=1
}
var oLD=_v()
_(cJD,oLD)
if(_oz(z,6,e,s,gg)){oLD.wxVkey=1
}
var cMD=_v()
_(cJD,cMD)
if(_oz(z,7,e,s,gg)){cMD.wxVkey=1
}
hKD.wxXCkey=1
oLD.wxXCkey=1
cMD.wxXCkey=1
_(r,cJD)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx0_16()
var lOD=_v()
_(r,lOD)
if(_oz(z,0,e,s,gg)){lOD.wxVkey=1
var aPD=_mz(z,'view',['bindtap',1,'catchtouchmove',1,'class',2,'style',3],[],e,s,gg)
var tQD=_mz(z,'swiper',['bindchange',5,'circular',1,'class',2,'current',3,'nextMargin',4,'previousMargin',5,'style',6],[],e,s,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,12,e,s,gg)){eRD.wxVkey=1
}
var bSD=_v()
_(tQD,bSD)
if(_oz(z,13,e,s,gg)){bSD.wxVkey=1
var xUD=_v()
_(bSD,xUD)
if(_oz(z,14,e,s,gg)){xUD.wxVkey=1
}
xUD.wxXCkey=1
}
var oTD=_v()
_(tQD,oTD)
if(_oz(z,15,e,s,gg)){oTD.wxVkey=1
var oVD=_v()
_(oTD,oVD)
if(_oz(z,16,e,s,gg)){oVD.wxVkey=1
}
oVD.wxXCkey=1
}
eRD.wxXCkey=1
bSD.wxXCkey=1
oTD.wxXCkey=1
_(aPD,tQD)
_(lOD,aPD)
}
lOD.wxXCkey=1
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx0_17()
var cXD=_v()
_(r,cXD)
if(_oz(z,0,e,s,gg)){cXD.wxVkey=1
}
cXD.wxXCkey=1
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx0_18()
var oZD=_mz(z,'mini-icon',['color',0,'icon',1,'miniClass',1],[],e,s,gg)
_(r,oZD)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx0_19()
var o2D=_mz(z,'view',['catchtouchmove',0,'class',1],[],e,s,gg)
var l3D=_v()
_(o2D,l3D)
var a4D=function(e6D,t5D,b7D,gg){
var x9D=_v()
_(b7D,x9D)
if(_oz(z,6,e6D,t5D,gg)){x9D.wxVkey=1
}
x9D.wxXCkey=1
return b7D
}
l3D.wxXCkey=2
_2z(z,4,a4D,e,s,gg,l3D,'newlyCard','idx','idx')
_(r,o2D)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx0_20()
var fAE=_v()
_(r,fAE)
if(_oz(z,0,e,s,gg)){fAE.wxVkey=1
}
fAE.wxXCkey=1
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx0_21()
var hCE=_v()
_(r,hCE)
if(_oz(z,0,e,s,gg)){hCE.wxVkey=1
var oDE=_mz(z,'mini-bulletLayer',['animationHeight',1,'bindbacktap',1,'class',2,'id',3,'showTop',4],[],e,s,gg)
_(hCE,oDE)
}
var cEE=_n('view')
_rz(z,cEE,'class',6,e,s,gg)
var tIE=_n('view')
_rz(z,tIE,'class',7,e,s,gg)
var eJE=_n('view')
_rz(z,eJE,'class',8,e,s,gg)
var bKE=_v()
_(eJE,bKE)
if(_oz(z,9,e,s,gg)){bKE.wxVkey=1
}
var oLE=_n('view')
_rz(z,oLE,'class',10,e,s,gg)
var xME=_v()
_(oLE,xME)
if(_oz(z,11,e,s,gg)){xME.wxVkey=1
}
var oNE=_v()
_(oLE,oNE)
if(_oz(z,12,e,s,gg)){oNE.wxVkey=1
}
xME.wxXCkey=1
oNE.wxXCkey=1
_(eJE,oLE)
bKE.wxXCkey=1
_(tIE,eJE)
var fOE=_mz(z,'view',['catch:tap',13,'class',1],[],e,s,gg)
var cPE=_mz(z,'mini-icon',['color',15,'icon',1,'miniClass',2],[],e,s,gg)
_(fOE,cPE)
_(tIE,fOE)
_(cEE,tIE)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,18,e,s,gg)){oFE.wxVkey=1
var hQE=_v()
_(oFE,hQE)
if(_oz(z,19,e,s,gg)){hQE.wxVkey=1
}
var oRE=_v()
_(oFE,oRE)
if(_oz(z,20,e,s,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(oFE,cSE)
if(_oz(z,21,e,s,gg)){cSE.wxVkey=1
}
hQE.wxXCkey=1
oRE.wxXCkey=1
cSE.wxXCkey=1
}
var lGE=_v()
_(cEE,lGE)
if(_oz(z,22,e,s,gg)){lGE.wxVkey=1
var oTE=_mz(z,'view',['catch:tap',23,'class',1],[],e,s,gg)
var lUE=_mz(z,'mini-icon',['color',25,'icon',1,'miniClass',2],[],e,s,gg)
_(oTE,lUE)
_(lGE,oTE)
}
else{lGE.wxVkey=2
var aVE=_mz(z,'view',['catch:tap',28,'class',1],[],e,s,gg)
var tWE=_mz(z,'mini-icon',['color',30,'icon',1,'miniClass',2],[],e,s,gg)
_(aVE,tWE)
_(lGE,aVE)
}
var eXE=_mz(z,'view',['catch:tap',33,'class',1,'hoverClass',2,'style',3],[],e,s,gg)
var bYE=_mz(z,'mini-icon',['color',37,'icon',1,'miniClass',2],[],e,s,gg)
_(eXE,bYE)
_(cEE,eXE)
var aHE=_v()
_(cEE,aHE)
if(_oz(z,40,e,s,gg)){aHE.wxVkey=1
}
oFE.wxXCkey=1
lGE.wxXCkey=1
lGE.wxXCkey=3
lGE.wxXCkey=3
aHE.wxXCkey=1
_(r,cEE)
hCE.wxXCkey=1
hCE.wxXCkey=3
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx0_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx0_23()
var o2E=_n('view')
_rz(z,o2E,'class',0,e,s,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,1,e,s,gg)){f3E.wxVkey=1
}
var c4E=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,4,e,s,gg)){h5E.wxVkey=1
}
var o6E=_v()
_(c4E,o6E)
if(_oz(z,5,e,s,gg)){o6E.wxVkey=1
}
h5E.wxXCkey=1
o6E.wxXCkey=1
_(o2E,c4E)
f3E.wxXCkey=1
_(r,o2E)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx0_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx0_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx0_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx0_27()
var tAF=_n('view')
var eBF=_v()
_(tAF,eBF)
if(_oz(z,0,e,s,gg)){eBF.wxVkey=1
}
else{eBF.wxVkey=2
var bCF=_v()
_(eBF,bCF)
var oDF=function(oFF,xEF,fGF,gg){
var hIF=_v()
_(fGF,hIF)
if(_oz(z,4,oFF,xEF,gg)){hIF.wxVkey=1
}
hIF.wxXCkey=1
return fGF
}
bCF.wxXCkey=2
_2z(z,2,oDF,e,s,gg,bCF,'item','idx','idx')
}
eBF.wxXCkey=1
_(r,tAF)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx0_28()
var cKF=_n('view')
_rz(z,cKF,'class',0,e,s,gg)
var lMF=_mz(z,'mini-icon',['color',1,'icon',1,'miniClass',2],[],e,s,gg)
_(cKF,lMF)
var oLF=_v()
_(cKF,oLF)
if(_oz(z,4,e,s,gg)){oLF.wxVkey=1
}
else{oLF.wxVkey=2
var aNF=_mz(z,'mini-icon',['color',5,'icon',1,'miniClass',2],[],e,s,gg)
_(oLF,aNF)
}
var tOF=_mz(z,'mini-icon',['color',8,'icon',1,'miniClass',2],[],e,s,gg)
_(cKF,tOF)
var ePF=_n('view')
_rz(z,ePF,'class',11,e,s,gg)
var bQF=_mz(z,'mini-icon',['color',12,'icon',1,'miniClass',2],[],e,s,gg)
_(ePF,bQF)
var oRF=_mz(z,'mini-icon',['color',15,'icon',1,'miniClass',2],[],e,s,gg)
_(ePF,oRF)
var xSF=_mz(z,'mini-icon',['color',18,'icon',1,'miniClass',2],[],e,s,gg)
_(ePF,xSF)
_(cKF,ePF)
oLF.wxXCkey=1
oLF.wxXCkey=3
_(r,cKF)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
d_[x[28]]["edit-style"]=function(e,s,r,gg){
var z=gz$gwx0_29()
var b=x[28]+':edit-style'
r.wxVkey=b
gg.f=$gdc(f_["./pages/companyManage/cardInformationEdit/cardInformationEdit.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catch:tap',1,'class',1],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',3,e,s,gg)
var oD=_mz(z,'view',['catch:tap',4,'class',1],[],e,s,gg)
var fE=_mz(z,'mini-icon',['color',6,'icon',1,'miniClass',2],[],e,s,gg)
_(oD,fE)
_(xC,oD)
var cF=_mz(z,'mini-icon',['color',9,'icon',1,'miniClass',2],[],e,s,gg)
_(xC,cF)
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m28=function(e,s,r,gg){
var z=gz$gwx0_29()
var cVF=_n('view')
_rz(z,cVF,'class',12,e,s,gg)
var hWF=_v()
_(cVF,hWF)
if(_oz(z,13,e,s,gg)){hWF.wxVkey=1
var cYF=_v()
_(hWF,cYF)
var oZF=_oz(z,15,e,s,gg)
var l1F=_gd(x[28],oZF,e_,d_)
if(l1F){
var a2F=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
cYF.wxXCkey=3
l1F(a2F,a2F,cYF,gg)
gg.f=cur_globalf
}
else _w(oZF,x[28],20,15)
}
var t3F=_n('component-tip')
_(cVF,t3F)
var oXF=_v()
_(cVF,oXF)
if(_oz(z,16,e,s,gg)){oXF.wxVkey=1
var e4F=_n('component-renewal')
_(oXF,e4F)
}
var b5F=_mz(z,'component-style',['bindswiperChange',17,'companyState',1,'entId',2,'modalList',3],[],e,s,gg)
_(cVF,b5F)
var o6F=_mz(z,'component-form',['bindshowTip',21,'bindupdateMessage',1,'formData',2,'pathName',3],[],e,s,gg)
_(cVF,o6F)
hWF.wxXCkey=1
oXF.wxXCkey=1
oXF.wxXCkey=3
_(r,cVF)
var fUF=_v()
_(r,fUF)
if(_oz(z,25,e,s,gg)){fUF.wxVkey=1
var x7F=_mz(z,'mini-popover',['bindcancel',26,'bindconfirm',1,'cancelColor',2,'cancelText',3,'confirmColor',4,'confirmText',5,'text',6,'title',7,'type',8],[],e,s,gg)
_(fUF,x7F)
}
fUF.wxXCkey=1
fUF.wxXCkey=3
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx0_30()
var c0F=_n('view')
_rz(z,c0F,'class',0,e,s,gg)
var hAG=_v()
_(c0F,hAG)
if(_oz(z,1,e,s,gg)){hAG.wxVkey=1
var oDG=_n('component-renewal')
_(hAG,oDG)
}
var oBG=_v()
_(c0F,oBG)
if(_oz(z,2,e,s,gg)){oBG.wxVkey=1
}
var lEG=_mz(z,'component-style',['bindswiperChange',3,'companyState',1,'entId',2,'modalList',3],[],e,s,gg)
_(c0F,lEG)
var aFG=_mz(z,'component-form',['bindupdateMessage',7,'formData',1,'pathName',2],[],e,s,gg)
_(c0F,aFG)
var cCG=_v()
_(c0F,cCG)
if(_oz(z,10,e,s,gg)){cCG.wxVkey=1
}
hAG.wxXCkey=1
hAG.wxXCkey=3
oBG.wxXCkey=1
cCG.wxXCkey=1
_(r,c0F)
var f9F=_v()
_(r,f9F)
if(_oz(z,11,e,s,gg)){f9F.wxVkey=1
var tGG=_mz(z,'component-record',['bindclaim',12,'bindclose',1,'bindshare',2,'notClaimData',3,'recordData',4,'recordState',5],[],e,s,gg)
_(f9F,tGG)
}
f9F.wxXCkey=1
f9F.wxXCkey=3
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx0_31()
var bIG=_v()
_(r,bIG)
if(_oz(z,0,e,s,gg)){bIG.wxVkey=1
}
bIG.wxXCkey=1
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx0_32()
var xKG=_v()
_(r,xKG)
if(_oz(z,0,e,s,gg)){xKG.wxVkey=1
var oLG=_n('view')
_rz(z,oLG,'class',1,e,s,gg)
var fMG=_v()
_(oLG,fMG)
if(_oz(z,2,e,s,gg)){fMG.wxVkey=1
}
var cNG=_v()
_(oLG,cNG)
if(_oz(z,3,e,s,gg)){cNG.wxVkey=1
}
fMG.wxXCkey=1
cNG.wxXCkey=1
_(xKG,oLG)
}
xKG.wxXCkey=1
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx0_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx0_34()
var cQG=_n('view')
_rz(z,cQG,'class',0,e,s,gg)
var oRG=_v()
_(cQG,oRG)
if(_oz(z,1,e,s,gg)){oRG.wxVkey=1
var lSG=_mz(z,'mini-bulletLayer',['animationHeight',2,'bindbacktap',1,'class',2,'id',3,'showTop',4],[],e,s,gg)
_(oRG,lSG)
}
var aTG=_n('view')
_rz(z,aTG,'class',7,e,s,gg)
var eVG=_mz(z,'mini-navigation',['bindminitap',8,'id',1,'position',2,'titleColor',3,'topBg',4,'topTitle',5,'topType',6],[],e,s,gg)
_(aTG,eVG)
var tUG=_v()
_(aTG,tUG)
if(_oz(z,15,e,s,gg)){tUG.wxVkey=1
}
tUG.wxXCkey=1
_(cQG,aTG)
oRG.wxXCkey=1
oRG.wxXCkey=3
_(r,cQG)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx0_35()
var oZG=_n('view')
_rz(z,oZG,'class',0,e,s,gg)
var c2G=_n('view')
_rz(z,c2G,'class',1,e,s,gg)
var h3G=_mz(z,'view',['catch:tap',2,'class',1],[],e,s,gg)
var o4G=_mz(z,'mini-icon',['color',4,'icon',1,'miniClass',2],[],e,s,gg)
_(h3G,o4G)
_(c2G,h3G)
var c5G=_mz(z,'component-msgPopover',['arrowLeft',7,'id',1,'msg',2,'top',3],[],e,s,gg)
_(c2G,c5G)
_(oZG,c2G)
var f1G=_v()
_(oZG,f1G)
if(_oz(z,11,e,s,gg)){f1G.wxVkey=1
}
var o6G=_mz(z,'swiper',['bindchange',12,'class',1,'current',2,'nextMargin',3,'previousMargin',4,'style',5],[],e,s,gg)
var l7G=_v()
_(o6G,l7G)
if(_oz(z,18,e,s,gg)){l7G.wxVkey=1
var a8G=_mz(z,'component-smallTmp',['imgUrl',19,'logo',1,'logoStyle',2,'recommendCard',3],[],e,s,gg)
_(l7G,a8G)
}
var t9G=_v()
_(o6G,t9G)
var e0G=function(oBH,bAH,xCH,gg){
var fEH=_mz(z,'component-smallTmp',['imgUrl',26,'logo',1,'logoStyle',2,'recommendCard',3],[],oBH,bAH,gg)
_(xCH,fEH)
return xCH
}
t9G.wxXCkey=4
_2z(z,24,e0G,e,s,gg,t9G,'item','index','index')
l7G.wxXCkey=1
l7G.wxXCkey=3
_(oZG,o6G)
var cFH=_v()
_(oZG,cFH)
if(_oz(z,30,e,s,gg)){cFH.wxVkey=1
}
var hGH=_v()
_(oZG,hGH)
if(_oz(z,31,e,s,gg)){hGH.wxVkey=1
}
var cIH=_n('view')
_rz(z,cIH,'class',32,e,s,gg)
var oJH=_mz(z,'view',['catch:tap',33,'class',1],[],e,s,gg)
var lKH=_mz(z,'mini-icon',['color',35,'icon',1,'miniClass',2],[],e,s,gg)
_(oJH,lKH)
_(cIH,oJH)
var aLH=_mz(z,'component-msgPopover',['arrowLeft',38,'id',1,'msg',2,'top',3],[],e,s,gg)
_(cIH,aLH)
_(oZG,cIH)
var tMH=_mz(z,'component-intro',['bindintroFun',42,'bindtestFailFunc',1,'introTest',2,'introValue',3],[],e,s,gg)
_(oZG,tMH)
var eNH=_mz(z,'component-camera',['bindphotoFun',46,'bindpreviewPhoto',1,'bindvideoFun',2,'editType',3,'photoList',4,'videoList',5],[],e,s,gg)
_(oZG,eNH)
var oHH=_v()
_(oZG,oHH)
if(_oz(z,52,e,s,gg)){oHH.wxVkey=1
}
cFH.wxXCkey=1
hGH.wxXCkey=1
oHH.wxXCkey=1
f1G.wxXCkey=1
_(r,oZG)
var oXG=_v()
_(r,oXG)
if(_oz(z,53,e,s,gg)){oXG.wxVkey=1
var bOH=_n('component-autoStyleLayer')
_rz(z,bOH,'bindknown',54,e,s,gg)
_(oXG,bOH)
}
var xYG=_v()
_(r,xYG)
if(_oz(z,55,e,s,gg)){xYG.wxVkey=1
var oPH=_mz(z,'component-modal',['text',-1,'bindmodalButton',56,'bindmodalCancel',1,'buttonColor',2,'buttonText',3,'buttonType',4,'cancelText',5,'iconShow',6,'modalShow',7,'title',8,'titleShow',9],[],e,s,gg)
_(xYG,oPH)
}
oXG.wxXCkey=1
oXG.wxXCkey=3
xYG.wxXCkey=1
xYG.wxXCkey=3
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx0_36()
var oRH=_v()
_(r,oRH)
if(_oz(z,0,e,s,gg)){oRH.wxVkey=1
var cWH=_mz(z,'component-topNavigation',['bindprePage',1,'iconColor',1,'id',2,'position',3,'showText',4,'titleColor',5,'topBg',6,'topTitle',7,'topType',8],[],e,s,gg)
_(oRH,cWH)
}
var fSH=_v()
_(r,fSH)
if(_oz(z,10,e,s,gg)){fSH.wxVkey=1
}
var cTH=_v()
_(r,cTH)
if(_oz(z,12,e,s,gg)){cTH.wxVkey=1
var oXH=_mz(z,'swiper',['bindanimationfinish',13,'bindchange',1,'class',2,'current',3,'nextMargin',4,'previousMargin',5,'style',6],[],e,s,gg)
var lYH=_v()
_(oXH,lYH)
var aZH=function(e2H,t1H,b3H,gg){
var x5H=_mz(z,'view',['catch:tap',21,'class',1,'data-dept-names',2,'data-ind',3,'data-tag',4,'data-tmpid',5,'style',6],[],e2H,t1H,gg)
var o6H=_mz(z,'component-defaultTmp',['imgUrl',28,'logo',1,'logoStyle',2,'tempData',3,'tplType',4],[],e2H,t1H,gg)
_(x5H,o6H)
_(b3H,x5H)
return b3H
}
lYH.wxXCkey=4
_2z(z,20,aZH,e,s,gg,lYH,'item','index','')
_(cTH,oXH)
}
var hUH=_v()
_(r,hUH)
if(_oz(z,33,e,s,gg)){hUH.wxVkey=1
}
var oVH=_v()
_(r,oVH)
if(_oz(z,34,e,s,gg)){oVH.wxVkey=1
var f7H=_mz(z,'component-shareActionsheet',['bindbackTap',35,'binditemTap',1,'sheetList',2],[],e,s,gg)
_(oVH,f7H)
}
oRH.wxXCkey=1
oRH.wxXCkey=3
fSH.wxXCkey=1
cTH.wxXCkey=1
cTH.wxXCkey=3
hUH.wxXCkey=1
oVH.wxXCkey=1
oVH.wxXCkey=3
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx0_37()
var h9H=_v()
_(r,h9H)
if(_oz(z,0,e,s,gg)){h9H.wxVkey=1
}
var o0H=_v()
_(r,o0H)
if(_oz(z,1,e,s,gg)){o0H.wxVkey=1
}
var cAI=_v()
_(r,cAI)
if(_oz(z,2,e,s,gg)){cAI.wxVkey=1
var oBI=_mz(z,'component-createBusinesscard',['adminName',3,'bindcloseWindow',1,'bindrequiredConditions',2,'cardList',3,'constructorType',4,'entId',5,'entName',6,'formTitle',7,'id',8,'listTtile',9,'openId',10,'pages',11],[],e,s,gg)
_(cAI,oBI)
}
h9H.wxXCkey=1
o0H.wxXCkey=1
cAI.wxXCkey=1
cAI.wxXCkey=3
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx0_38()
var tEI=_n('view')
var eFI=_v()
_(tEI,eFI)
if(_oz(z,0,e,s,gg)){eFI.wxVkey=1
}
var bGI=_n('view')
var oHI=_v()
_(bGI,oHI)
if(_oz(z,1,e,s,gg)){oHI.wxVkey=1
}
var xII=_v()
_(bGI,xII)
var oJI=function(cLI,fKI,hMI,gg){
var cOI=_mz(z,'view',['catch:tap',6,'class',1,'data-card-id',2,'data-formtoken',3,'data-role',4,'data-tpl-id',5,'data-vcard-id',6],[],cLI,fKI,gg)
var oPI=_v()
_(cOI,oPI)
if(_oz(z,13,cLI,fKI,gg)){oPI.wxVkey=1
}
oPI.wxXCkey=1
_(hMI,cOI)
return hMI
}
xII.wxXCkey=2
_2z(z,4,oJI,e,s,gg,xII,'member','idx','idx')
oHI.wxXCkey=1
_(tEI,bGI)
eFI.wxXCkey=1
_(r,tEI)
var aDI=_v()
_(r,aDI)
if(_oz(z,14,e,s,gg)){aDI.wxVkey=1
var lQI=_mz(z,'component-createBusinesscard',['bindcloseWindow',15,'bindteamInfo',1,'cardList',2,'choosePhone',3,'entName',4,'entId',5,'formTitle',6,'id',7,'listTtile',8,'openType',9,'paddingTop',10,'pages',11,'zIndex',12],[],e,s,gg)
_(aDI,lQI)
}
aDI.wxXCkey=1
aDI.wxXCkey=3
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx0_39()
var oVI=_mz(z,'component-newCardDetail',['bindtolookhomepage',0,'bindtouxiangGet',1,'freshNum',1,'userData',2],[],e,s,gg)
_(r,oVI)
var tSI=_v()
_(r,tSI)
if(_oz(z,4,e,s,gg)){tSI.wxVkey=1
var xWI=_mz(z,'view',['bindtap',5,'class',1],[],e,s,gg)
var oXI=_mz(z,'mini-icon',['class',7,'color',1,'icon',2,'miniClass',3],[],e,s,gg)
_(xWI,oXI)
_(tSI,xWI)
}
var eTI=_v()
_(r,eTI)
if(_oz(z,11,e,s,gg)){eTI.wxVkey=1
}
var bUI=_v()
_(r,bUI)
if(_oz(z,12,e,s,gg)){bUI.wxVkey=1
var fYI=_mz(z,'mini-icon',['bindtap',13,'class',1,'color',2,'icon',3,'miniClass',4],[],e,s,gg)
_(bUI,fYI)
}
tSI.wxXCkey=1
tSI.wxXCkey=3
eTI.wxXCkey=1
bUI.wxXCkey=1
bUI.wxXCkey=3
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx0_40()
var h1I=_mz(z,'component-build',['bindconfirmCompany',0,'buildTimes',1],[],e,s,gg)
_(r,h1I)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx0_41()
var c3I=_v()
_(r,c3I)
if(_oz(z,0,e,s,gg)){c3I.wxVkey=1
}
c3I.wxXCkey=1
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx0_42()
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx0_43()
var a6I=_v()
_(r,a6I)
if(_oz(z,0,e,s,gg)){a6I.wxVkey=1
var e8I=_mz(z,'component-topNavigation',['bindhome',1,'id',1,'topTitle',2,'topType',3],[],e,s,gg)
_(a6I,e8I)
}
var t7I=_v()
_(r,t7I)
if(_oz(z,5,e,s,gg)){t7I.wxVkey=1
}
a6I.wxXCkey=1
a6I.wxXCkey=3
t7I.wxXCkey=1
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx0_44()
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx0_45()
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx0_46()
var fCJ=_n('view')
_rz(z,fCJ,'class',0,e,s,gg)
var cDJ=_v()
_(fCJ,cDJ)
if(_oz(z,1,e,s,gg)){cDJ.wxVkey=1
}
var hEJ=_n('view')
_rz(z,hEJ,'class',2,e,s,gg)
var oFJ=_v()
_(hEJ,oFJ)
if(_oz(z,3,e,s,gg)){oFJ.wxVkey=1
}
else{oFJ.wxVkey=2
var cGJ=_v()
_(oFJ,cGJ)
if(_oz(z,4,e,s,gg)){cGJ.wxVkey=1
}
var oHJ=_v()
_(oFJ,oHJ)
if(_oz(z,5,e,s,gg)){oHJ.wxVkey=1
}
var lIJ=_v()
_(oFJ,lIJ)
if(_oz(z,6,e,s,gg)){lIJ.wxVkey=1
}
cGJ.wxXCkey=1
oHJ.wxXCkey=1
lIJ.wxXCkey=1
}
oFJ.wxXCkey=1
_(fCJ,hEJ)
cDJ.wxXCkey=1
_(r,fCJ)
var oBJ=_v()
_(r,oBJ)
if(_oz(z,7,e,s,gg)){oBJ.wxVkey=1
var aJJ=_mz(z,'mini-popover',['bindcancel',8,'bindconfirm',1,'cancel',2,'cancelText',3,'confirm',4,'confirmText',5,'text',6,'title',7,'type',8],[],e,s,gg)
_(oBJ,aJJ)
}
oBJ.wxXCkey=1
oBJ.wxXCkey=3
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx0_47()
var eLJ=_n('view')
_rz(z,eLJ,'class',0,e,s,gg)
var bMJ=_v()
_(eLJ,bMJ)
if(_oz(z,1,e,s,gg)){bMJ.wxVkey=1
}
var oNJ=_v()
_(eLJ,oNJ)
if(_oz(z,2,e,s,gg)){oNJ.wxVkey=1
}
var xOJ=_v()
_(eLJ,xOJ)
if(_oz(z,3,e,s,gg)){xOJ.wxVkey=1
}
var oPJ=_v()
_(eLJ,oPJ)
if(_oz(z,4,e,s,gg)){oPJ.wxVkey=1
}
var fQJ=_v()
_(eLJ,fQJ)
if(_oz(z,5,e,s,gg)){fQJ.wxVkey=1
}
var cRJ=_v()
_(eLJ,cRJ)
if(_oz(z,6,e,s,gg)){cRJ.wxVkey=1
}
var hSJ=_v()
_(eLJ,hSJ)
if(_oz(z,7,e,s,gg)){hSJ.wxVkey=1
}
bMJ.wxXCkey=1
oNJ.wxXCkey=1
xOJ.wxXCkey=1
oPJ.wxXCkey=1
fQJ.wxXCkey=1
cRJ.wxXCkey=1
hSJ.wxXCkey=1
_(r,eLJ)
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx0_48()
var cUJ=_v()
_(r,cUJ)
if(_oz(z,0,e,s,gg)){cUJ.wxVkey=1
}
var oVJ=_v()
_(r,oVJ)
if(_oz(z,1,e,s,gg)){oVJ.wxVkey=1
var lWJ=_mz(z,'component-createBusinesscard',['bindcloseWindow',2,'bindteamInfo',1,'cardList',2,'choosePhone',3,'deptId',4,'entId',5,'entName',6,'formTitle',7,'id',8,'listTtile',9,'openType',10,'paddingTop',11,'pages',12],[],e,s,gg)
_(oVJ,lWJ)
}
cUJ.wxXCkey=1
oVJ.wxXCkey=1
oVJ.wxXCkey=3
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx0_49()
var tYJ=_v()
_(r,tYJ)
if(_oz(z,0,e,s,gg)){tYJ.wxVkey=1
var eZJ=_mz(z,'component-createBusinesscard',['bindcloseWindow',1,'bindteamInfo',1,'cardList',2,'choosePhone',3,'deptId',4,'entId',5,'entName',6,'formTitle',7,'id',8,'listTtile',9,'openType',10,'paddingTop',11,'pages',12],[],e,s,gg)
_(tYJ,eZJ)
}
tYJ.wxXCkey=1
tYJ.wxXCkey=3
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx0_50()
var o2J=_v()
_(r,o2J)
if(_oz(z,0,e,s,gg)){o2J.wxVkey=1
var c6J=_v()
_(o2J,c6J)
if(_oz(z,1,e,s,gg)){c6J.wxVkey=1
}
c6J.wxXCkey=1
}
var x3J=_v()
_(r,x3J)
if(_oz(z,2,e,s,gg)){x3J.wxVkey=1
}
var o4J=_v()
_(r,o4J)
if(_oz(z,3,e,s,gg)){o4J.wxVkey=1
}
var f5J=_v()
_(r,f5J)
if(_oz(z,4,e,s,gg)){f5J.wxVkey=1
var h7J=_mz(z,'component-createBusinesscard',['bindcloseWindow',5,'bindteamInfo',1,'cardList',2,'choosePhone',3,'deptId',4,'entId',5,'entName',6,'formTitle',7,'id',8,'listTtile',9,'openType',10,'paddingTop',11,'pages',12],[],e,s,gg)
_(f5J,h7J)
}
o2J.wxXCkey=1
x3J.wxXCkey=1
o4J.wxXCkey=1
f5J.wxXCkey=1
f5J.wxXCkey=3
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx0_51()
var o0J=_n('view')
_rz(z,o0J,'class',0,e,s,gg)
var aBK=_v()
_(o0J,aBK)
var tCK=function(bEK,eDK,oFK,gg){
var oHK=_mz(z,'image',['bindtap',3,'class',1,'data-cardid',2,'src',3,'style',4],[],bEK,eDK,gg)
var fIK=_v()
_(oHK,fIK)
if(_oz(z,8,bEK,eDK,gg)){fIK.wxVkey=1
}
fIK.wxXCkey=1
_(oFK,oHK)
return oFK
}
aBK.wxXCkey=2
_2z(z,1,tCK,e,s,gg,aBK,'item','index','item')
var lAK=_v()
_(o0J,lAK)
if(_oz(z,9,e,s,gg)){lAK.wxVkey=1
var cJK=_n('view')
_rz(z,cJK,'class',10,e,s,gg)
var hKK=_v()
_(cJK,hKK)
if(_oz(z,11,e,s,gg)){hKK.wxVkey=1
}
var oLK=_v()
_(cJK,oLK)
if(_oz(z,12,e,s,gg)){oLK.wxVkey=1
}
hKK.wxXCkey=1
oLK.wxXCkey=1
_(lAK,cJK)
}
lAK.wxXCkey=1
_(r,o0J)
var c9J=_v()
_(r,c9J)
if(_oz(z,13,e,s,gg)){c9J.wxVkey=1
var cMK=_mz(z,'component-modal',['bindmodalButton',14,'buttonText',1,'buttonType',2,'cancel',3,'iconType',4,'modalShow',5,'text',6,'title',7],[],e,s,gg)
_(c9J,cMK)
}
c9J.wxXCkey=1
c9J.wxXCkey=3
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx0_52()
var lOK=_v()
_(r,lOK)
if(_oz(z,0,e,s,gg)){lOK.wxVkey=1
var tQK=_mz(z,'component-topNavigation',['bindprePage',1,'id',1,'topTitle',2,'topType',3],[],e,s,gg)
_(lOK,tQK)
}
var aPK=_v()
_(r,aPK)
if(_oz(z,5,e,s,gg)){aPK.wxVkey=1
}
lOK.wxXCkey=1
lOK.wxXCkey=3
aPK.wxXCkey=1
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx0_53()
var bSK=_v()
_(r,bSK)
if(_oz(z,0,e,s,gg)){bSK.wxVkey=1
var fWK=_mz(z,'component-topNavigation',['topTitle',1,'topType',1],[],e,s,gg)
_(bSK,fWK)
}
var oTK=_v()
_(r,oTK)
if(_oz(z,3,e,s,gg)){oTK.wxVkey=1
}
var cXK=_n('view')
_rz(z,cXK,'class',4,e,s,gg)
var c1K=_mz(z,'component-detail',['autherizedData',5,'pageName',1,'webData',2],[],e,s,gg)
_(cXK,c1K)
var hYK=_v()
_(cXK,hYK)
if(_oz(z,8,e,s,gg)){hYK.wxVkey=1
}
var oZK=_v()
_(cXK,oZK)
if(_oz(z,9,e,s,gg)){oZK.wxVkey=1
}
hYK.wxXCkey=1
oZK.wxXCkey=1
_(r,cXK)
var xUK=_v()
_(r,xUK)
if(_oz(z,10,e,s,gg)){xUK.wxVkey=1
var o2K=_mz(z,'component-modal',['bindmodalButton',11,'bindmodalCancel',1,'buttonColor',2,'buttonText',3,'buttonType',4,'cancelText',5,'iconShow',6,'modalShow',7,'text',8,'title',9],[],e,s,gg)
_(xUK,o2K)
}
var oVK=_v()
_(r,oVK)
if(_oz(z,21,e,s,gg)){oVK.wxVkey=1
var l3K=_mz(z,'mini-popover',['bindcancel',22,'bindconfirm',1,'cancelColor',2,'cancelText',3,'confirmColor',4,'confirmText',5,'text',6,'type',7],[],e,s,gg)
_(oVK,l3K)
}
bSK.wxXCkey=1
bSK.wxXCkey=3
oTK.wxXCkey=1
xUK.wxXCkey=1
xUK.wxXCkey=3
oVK.wxXCkey=1
oVK.wxXCkey=3
return r
}
e_[x[52]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx0_54()
return r
}
e_[x[53]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx0_55()
var e6K=_mz(z,'component-detail',['autherizedData',0,'pageName',1,'webData',1],[],e,s,gg)
_(r,e6K)
return r
}
e_[x[54]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx0_56()
var o8K=_mz(z,'component-detail',['autherizedData',0,'pageName',1,'webData',1],[],e,s,gg)
_(r,o8K)
return r
}
e_[x[55]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx0_57()
var o0K=_v()
_(r,o0K)
if(_oz(z,0,e,s,gg)){o0K.wxVkey=1
var oDL=_mz(z,'component-topNavigation',['topTitle',1,'topType',1],[],e,s,gg)
_(o0K,oDL)
}
var fAL=_v()
_(r,fAL)
if(_oz(z,3,e,s,gg)){fAL.wxVkey=1
}
var cBL=_v()
_(r,cBL)
if(_oz(z,4,e,s,gg)){cBL.wxVkey=1
var cEL=_mz(z,'component-detail',['autherizedData',5,'pageName',1,'webData',2],[],e,s,gg)
_(cBL,cEL)
}
var hCL=_v()
_(r,hCL)
if(_oz(z,8,e,s,gg)){hCL.wxVkey=1
}
o0K.wxXCkey=1
o0K.wxXCkey=3
fAL.wxXCkey=1
cBL.wxXCkey=1
cBL.wxXCkey=3
hCL.wxXCkey=1
return r
}
e_[x[56]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx0_58()
var lGL=_v()
_(r,lGL)
if(_oz(z,0,e,s,gg)){lGL.wxVkey=1
var bKL=_mz(z,'component-topNavigation',['bindprePageQA',1,'topTitle',1,'topType',2],[],e,s,gg)
_(lGL,bKL)
}
var aHL=_v()
_(r,aHL)
if(_oz(z,4,e,s,gg)){aHL.wxVkey=1
}
var oLL=_n('view')
_rz(z,oLL,'class',5,e,s,gg)
var xML=_v()
_(oLL,xML)
if(_oz(z,6,e,s,gg)){xML.wxVkey=1
var fOL=_v()
_(xML,fOL)
if(_oz(z,7,e,s,gg)){fOL.wxVkey=1
var cPL=_mz(z,'image',['bindtap',8,'class',1,'id',2,'src',3],[],e,s,gg)
var hQL=_v()
_(cPL,hQL)
if(_oz(z,12,e,s,gg)){hQL.wxVkey=1
}
hQL.wxXCkey=1
_(fOL,cPL)
}
fOL.wxXCkey=1
}
var oNL=_v()
_(oLL,oNL)
if(_oz(z,13,e,s,gg)){oNL.wxVkey=1
}
var oRL=_n('view')
_rz(z,oRL,'class',14,e,s,gg)
var cSL=_v()
_(oRL,cSL)
if(_oz(z,15,e,s,gg)){cSL.wxVkey=1
}
var oTL=_v()
_(oRL,oTL)
if(_oz(z,16,e,s,gg)){oTL.wxVkey=1
}
var lUL=_v()
_(oRL,lUL)
if(_oz(z,17,e,s,gg)){lUL.wxVkey=1
}
cSL.wxXCkey=1
oTL.wxXCkey=1
lUL.wxXCkey=1
_(oLL,oRL)
var aVL=_n('view')
_rz(z,aVL,'class',18,e,s,gg)
var tWL=_v()
_(aVL,tWL)
if(_oz(z,19,e,s,gg)){tWL.wxVkey=1
}
var eXL=_v()
_(aVL,eXL)
if(_oz(z,20,e,s,gg)){eXL.wxVkey=1
}
var bYL=_v()
_(aVL,bYL)
if(_oz(z,21,e,s,gg)){bYL.wxVkey=1
}
tWL.wxXCkey=1
eXL.wxXCkey=1
bYL.wxXCkey=1
_(oLL,aVL)
var oZL=_n('view')
_rz(z,oZL,'class',22,e,s,gg)
var x1L=_v()
_(oZL,x1L)
if(_oz(z,23,e,s,gg)){x1L.wxVkey=1
}
var o2L=_v()
_(oZL,o2L)
if(_oz(z,24,e,s,gg)){o2L.wxVkey=1
var f3L=_v()
_(o2L,f3L)
if(_oz(z,25,e,s,gg)){f3L.wxVkey=1
}
f3L.wxXCkey=1
}
x1L.wxXCkey=1
o2L.wxXCkey=1
_(oLL,oZL)
var c4L=_n('view')
_rz(z,c4L,'class',26,e,s,gg)
var h5L=_mz(z,'component-camera',['bindphotoComplete',27,'bindphotoDelete',1,'bindphotoPreview',2,'photoList',3],[],e,s,gg)
_(c4L,h5L)
var o6L=_mz(z,'component-video',['bindvideoComplete',31,'bindvideoDelete',1,'videoList',2],[],e,s,gg)
_(c4L,o6L)
_(oLL,c4L)
xML.wxXCkey=1
oNL.wxXCkey=1
_(r,oLL)
var tIL=_v()
_(r,tIL)
if(_oz(z,34,e,s,gg)){tIL.wxVkey=1
var c7L=_mz(z,'mini-popover',['bindcancel',35,'bindconfirm',1,'cancelText',2,'confirmText',3,'text',4,'type',5],[],e,s,gg)
_(tIL,c7L)
}
var eJL=_v()
_(r,eJL)
if(_oz(z,41,e,s,gg)){eJL.wxVkey=1
var o8L=_mz(z,'mini-popover',['bindcancel',42,'bindconfirm',1,'cancelColor',2,'cancelText',3,'confirmColor',4,'confirmText',5,'text',6,'type',7],[],e,s,gg)
_(eJL,o8L)
}
lGL.wxXCkey=1
lGL.wxXCkey=3
aHL.wxXCkey=1
tIL.wxXCkey=1
tIL.wxXCkey=3
eJL.wxXCkey=1
eJL.wxXCkey=3
return r
}
e_[x[57]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx0_59()
var a0L=_n('view')
_rz(z,a0L,'class',0,e,s,gg)
var tAM=_v()
_(a0L,tAM)
if(_oz(z,1,e,s,gg)){tAM.wxVkey=1
var eBM=_v()
_(tAM,eBM)
var bCM=function(xEM,oDM,oFM,gg){
var cHM=_mz(z,'view',['bindtap',4,'class',1,'data-i',2,'style',3],[],xEM,oDM,gg)
var hIM=_v()
_(cHM,hIM)
if(_oz(z,8,xEM,oDM,gg)){hIM.wxVkey=1
}
hIM.wxXCkey=1
_(oFM,cHM)
return oFM
}
eBM.wxXCkey=2
_2z(z,2,bCM,e,s,gg,eBM,'item','index','{{item}}')
}
var oJM=_n('view')
_rz(z,oJM,'class',9,e,s,gg)
var cKM=_v()
_(oJM,cKM)
if(_oz(z,10,e,s,gg)){cKM.wxVkey=1
}
var oLM=_v()
_(oJM,oLM)
if(_oz(z,11,e,s,gg)){oLM.wxVkey=1
}
cKM.wxXCkey=1
oLM.wxXCkey=1
_(a0L,oJM)
tAM.wxXCkey=1
_(r,a0L)
return r
}
e_[x[58]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx0_60()
return r
}
e_[x[59]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx0_61()
var tOM=_mz(z,'component-edit',['bindpreviewImage',0,'bindsavePro',1,'bindupldComplete',1,'proIntro',2,'proPhoto',3,'proTitle',4],[],e,s,gg)
_(r,tOM)
return r
}
e_[x[60]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx0_62()
var bQM=_mz(z,'component-newCardDetail',['freshNum',0,'userData',1],[],e,s,gg)
_(r,bQM)
return r
}
e_[x[61]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx0_63()
var xSM=_v()
_(r,xSM)
if(_oz(z,0,e,s,gg)){xSM.wxVkey=1
}
var oTM=_v()
_(r,oTM)
if(_oz(z,1,e,s,gg)){oTM.wxVkey=1
}
xSM.wxXCkey=1
oTM.wxXCkey=1
return r
}
e_[x[62]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx0_64()
return r
}
e_[x[63]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[64]]={}
var m64=function(e,s,r,gg){
var z=gz$gwx0_65()
var hWM=_v()
_(r,hWM)
if(_oz(z,0,e,s,gg)){hWM.wxVkey=1
}
hWM.wxXCkey=1
return r
}
e_[x[64]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m65=function(e,s,r,gg){
var z=gz$gwx0_66()
var cYM=_v()
_(r,cYM)
if(_oz(z,0,e,s,gg)){cYM.wxVkey=1
var oZM=_mz(z,'component-createBusinesscard',['bindcloseWindow',1,'bindteamInfo',1,'cardList',2,'choosePhone',3,'deptId',4,'entId',5,'entName',6,'formTitle',7,'id',8,'listTtile',9,'openType',10,'paddingTop',11,'pages',12],[],e,s,gg)
_(cYM,oZM)
}
cYM.wxXCkey=1
cYM.wxXCkey=3
return r
}
e_[x[65]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
var m66=function(e,s,r,gg){
var z=gz$gwx0_67()
var a2M=_mz(z,'component-dynamiccardvideo',['bindpackup',0,'cardData',1,'ifShow',1,'saveHave',2],[],e,s,gg)
_(r,a2M)
return r
}
e_[x[66]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
var m67=function(e,s,r,gg){
var z=gz$gwx0_68()
var e4M=_n('view')
_rz(z,e4M,'class',0,e,s,gg)
var b5M=_v()
_(e4M,b5M)
if(_oz(z,1,e,s,gg)){b5M.wxVkey=1
}
var o6M=_v()
_(e4M,o6M)
if(_oz(z,2,e,s,gg)){o6M.wxVkey=1
var o8M=_v()
_(o6M,o8M)
var f9M=function(hAN,c0M,oBN,gg){
var oDN=_mz(z,'view',['bindtap',5,'class',1,'data-formtoken',2,'data-id',3,'data-openid',4],[],hAN,c0M,gg)
var lEN=_v()
_(oDN,lEN)
if(_oz(z,10,hAN,c0M,gg)){lEN.wxVkey=1
}
var aFN=_v()
_(oDN,aFN)
if(_oz(z,11,hAN,c0M,gg)){aFN.wxVkey=1
}
lEN.wxXCkey=1
aFN.wxXCkey=1
_(oBN,oDN)
return oBN
}
o8M.wxXCkey=2
_2z(z,3,f9M,e,s,gg,o8M,'item','index','{{item}}')
}
var x7M=_v()
_(e4M,x7M)
if(_oz(z,12,e,s,gg)){x7M.wxVkey=1
var tGN=_v()
_(x7M,tGN)
var eHN=function(oJN,bIN,xKN,gg){
var fMN=_mz(z,'view',['bindtap',15,'class',1,'data-card-id',2,'data-formtoken',3,'data-role',4,'data-tpl-id',5,'data-vcard-id',6],[],oJN,bIN,gg)
var cNN=_v()
_(fMN,cNN)
if(_oz(z,22,oJN,bIN,gg)){cNN.wxVkey=1
}
var hON=_v()
_(fMN,hON)
if(_oz(z,23,oJN,bIN,gg)){hON.wxVkey=1
}
cNN.wxXCkey=1
hON.wxXCkey=1
_(xKN,fMN)
return xKN
}
tGN.wxXCkey=2
_2z(z,13,eHN,e,s,gg,tGN,'item','index','{{item}}')
}
b5M.wxXCkey=1
o6M.wxXCkey=1
x7M.wxXCkey=1
_(r,e4M)
return r
}
e_[x[67]]={f:m67,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m68=function(e,s,r,gg){
var z=gz$gwx0_69()
return r
}
e_[x[68]]={f:m68,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m69=function(e,s,r,gg){
var z=gz$gwx0_70()
var oRN=_v()
_(r,oRN)
if(_oz(z,0,e,s,gg)){oRN.wxVkey=1
}
oRN.wxXCkey=1
return r
}
e_[x[69]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m70=function(e,s,r,gg){
var z=gz$gwx0_71()
var tUN=_mz(z,'mini-navigation',['bindminitap',0,'id',1,'position',1,'titleColor',2,'topBg',3,'topTitle',4,'topType',5],[],e,s,gg)
_(r,tUN)
var aTN=_v()
_(r,aTN)
if(_oz(z,7,e,s,gg)){aTN.wxVkey=1
}
var eVN=_mz(z,'component-wxPay',['bindtoRight',8,'cacheCompany',1,'companyName',2,'entId',3,'freshPayMoney',4,'miniCompany',5,'payStatus',6,'scrollTop',7],[],e,s,gg)
_(r,eVN)
aTN.wxXCkey=1
return r
}
e_[x[70]]={f:m70,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m71=function(e,s,r,gg){
var z=gz$gwx0_72()
var oXN=_v()
_(r,oXN)
if(_oz(z,0,e,s,gg)){oXN.wxVkey=1
}
var xYN=_v()
_(r,xYN)
if(_oz(z,1,e,s,gg)){xYN.wxVkey=1
}
var oZN=_v()
_(r,oZN)
if(_oz(z,2,e,s,gg)){oZN.wxVkey=1
}
oXN.wxXCkey=1
xYN.wxXCkey=1
oZN.wxXCkey=1
return r
}
e_[x[71]]={f:m71,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m72=function(e,s,r,gg){
var z=gz$gwx0_73()
var c2N=_mz(z,'component-newCardDetail',['bindtolookhomepage',0,'bindtouxiangGet',1,'freshNum',1,'userData',2],[],e,s,gg)
var h3N=_v()
_(c2N,h3N)
if(_oz(z,4,e,s,gg)){h3N.wxVkey=1
}
h3N.wxXCkey=1
_(r,c2N)
return r
}
e_[x[72]]={f:m72,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
d_[x[73]]["cardListItem"]=function(e,s,r,gg){
var z=gz$gwx0_74()
var b=x[73]+':cardListItem'
r.wxVkey=b
gg.f=$gdc(f_["./pages/companyManage/shareCardstore/shareCardstore.wxml"],"",1)
if(p_[b]){_wl(b,x[73]);return}
p_[b]=true
try{
var oB=_mz(z,'label',['bindtap',28,'class',1,'data-checked',2,'data-id',3,'data-ind',4,'data-rid',5,'data-title',6],[],e,s,gg)
var xC=_mz(z,'view',['class',35,'hoverClass',1,'style',2],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,38,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,39,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m73=function(e,s,r,gg){
var z=gz$gwx0_74()
var a8N=_mz(z,'scroll-view',['scrollY',-1,'class',0,'scrollIntoView',1,'scrollTop',1,'scrollWithAnimation',2],[],e,s,gg)
var t9N=_v()
_(a8N,t9N)
if(_oz(z,4,e,s,gg)){t9N.wxVkey=1
}
var e0N=_v()
_(a8N,e0N)
if(_oz(z,5,e,s,gg)){e0N.wxVkey=1
var oBO=_v()
_(e0N,oBO)
var xCO=function(fEO,oDO,cFO,gg){
var oHO=_v()
_(cFO,oHO)
var cIO=_oz(z,9,fEO,oDO,gg)
var oJO=_gd(x[73],cIO,e_,d_)
if(oJO){
var lKO=_1z(z,8,fEO,oDO,gg) || {}
var cur_globalf=gg.f
oHO.wxXCkey=3
oJO(lKO,lKO,oHO,gg)
gg.f=cur_globalf
}
else _w(cIO,x[73],21,22)
return cFO
}
oBO.wxXCkey=2
_2z(z,6,xCO,e,s,gg,oBO,'item','index','{{item}}')
}
var bAO=_v()
_(a8N,bAO)
if(_oz(z,10,e,s,gg)){bAO.wxVkey=1
}
var aLO=_v()
_(a8N,aLO)
var tMO=function(bOO,eNO,oPO,gg){
var oRO=_v()
_(oPO,oRO)
var fSO=function(hUO,cTO,oVO,gg){
var oXO=_v()
_(oVO,oXO)
var lYO=_oz(z,18,hUO,cTO,gg)
var aZO=_gd(x[73],lYO,e_,d_)
if(aZO){
var t1O=_1z(z,17,hUO,cTO,gg) || {}
var cur_globalf=gg.f
oXO.wxXCkey=3
aZO(t1O,t1O,oXO,gg)
gg.f=cur_globalf
}
else _w(lYO,x[73],51,24)
return oVO
}
oRO.wxXCkey=2
_2z(z,15,fSO,bOO,eNO,gg,oRO,'itemL','indexL','{{itemL}}')
return oPO
}
aLO.wxXCkey=2
_2z(z,11,tMO,e,s,gg,aLO,'item','index','{{item}}')
t9N.wxXCkey=1
e0N.wxXCkey=1
bAO.wxXCkey=1
_(r,a8N)
var e2O=_n('view')
_rz(z,e2O,'class',19,e,s,gg)
var b3O=_v()
_(e2O,b3O)
if(_oz(z,20,e,s,gg)){b3O.wxVkey=1
}
var o4O=_v()
_(e2O,o4O)
if(_oz(z,21,e,s,gg)){o4O.wxVkey=1
}
b3O.wxXCkey=1
o4O.wxXCkey=1
_(r,e2O)
var c5N=_v()
_(r,c5N)
if(_oz(z,22,e,s,gg)){c5N.wxVkey=1
}
var o6N=_v()
_(r,o6N)
if(_oz(z,23,e,s,gg)){o6N.wxVkey=1
var x5O=_n('view')
_rz(z,x5O,'class',24,e,s,gg)
var o6O=_v()
_(x5O,o6O)
if(_oz(z,25,e,s,gg)){o6O.wxVkey=1
}
var f7O=_v()
_(x5O,f7O)
if(_oz(z,26,e,s,gg)){f7O.wxVkey=1
}
o6O.wxXCkey=1
f7O.wxXCkey=1
_(o6N,x5O)
}
var l7N=_v()
_(r,l7N)
if(_oz(z,40,e,s,gg)){l7N.wxVkey=1
var c8O=_mz(z,'component-shareSuccessLayer',['bindcloseLayer',41,'bindshareLayer',1,'shareData',2],[],e,s,gg)
_(l7N,c8O)
}
c5N.wxXCkey=1
o6N.wxXCkey=1
l7N.wxXCkey=1
l7N.wxXCkey=3
return r
}
e_[x[73]]={f:m73,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m74=function(e,s,r,gg){
var z=gz$gwx0_75()
var o0O=_v()
_(r,o0O)
if(_oz(z,0,e,s,gg)){o0O.wxVkey=1
var cAP=_n('component-loadingTip')
_(o0O,cAP)
}
else{o0O.wxVkey=2
var oBP=_n('view')
_rz(z,oBP,'class',1,e,s,gg)
var lCP=_v()
_(oBP,lCP)
if(_oz(z,2,e,s,gg)){lCP.wxVkey=1
var tEP=_mz(z,'component-topNavigation',['bindhome',3,'iconColor',1,'id',2,'position',3,'showText',4,'titleColor',5,'topBg',6,'topTitle',7,'topType',8],[],e,s,gg)
_(lCP,tEP)
}
var aDP=_v()
_(oBP,aDP)
if(_oz(z,12,e,s,gg)){aDP.wxVkey=1
}
var eFP=_n('view')
_rz(z,eFP,'class',13,e,s,gg)
var oHP=_n('view')
_rz(z,oHP,'class',14,e,s,gg)
var xIP=_v()
_(oHP,xIP)
if(_oz(z,15,e,s,gg)){xIP.wxVkey=1
}
var oJP=_v()
_(oHP,oJP)
if(_oz(z,16,e,s,gg)){oJP.wxVkey=1
}
xIP.wxXCkey=1
oJP.wxXCkey=1
_(eFP,oHP)
var bGP=_v()
_(eFP,bGP)
if(_oz(z,17,e,s,gg)){bGP.wxVkey=1
var fKP=_mz(z,'mini-button',['bindminitap',18,'loading',1,'miniClass',2,'text',3,'type',4],[],e,s,gg)
_(bGP,fKP)
}
else{bGP.wxVkey=2
var cLP=_mz(z,'mini-button',['bindgetuserinfosync',23,'bindtap',1,'loading',2,'miniClass',3,'openType',4,'text',5,'type',6],[],e,s,gg)
_(bGP,cLP)
}
bGP.wxXCkey=1
bGP.wxXCkey=3
bGP.wxXCkey=3
_(oBP,eFP)
lCP.wxXCkey=1
lCP.wxXCkey=3
aDP.wxXCkey=1
_(o0O,oBP)
}
o0O.wxXCkey=1
o0O.wxXCkey=3
o0O.wxXCkey=3
return r
}
e_[x[74]]={f:m74,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m75=function(e,s,r,gg){
var z=gz$gwx0_76()
return r
}
e_[x[75]]={f:m75,j:[],i:[],ti:[],ic:[]}
d_[x[76]]={}
var m76=function(e,s,r,gg){
var z=gz$gwx0_77()
var cOP=_v()
_(r,cOP)
var oPP=function(aRP,lQP,tSP,gg){
var bUP=_mz(z,'view',['bindtap',2,'class',1,'data-ind',2],[],aRP,lQP,gg)
var oVP=_v()
_(bUP,oVP)
if(_oz(z,5,aRP,lQP,gg)){oVP.wxVkey=1
}
var xWP=_v()
_(bUP,xWP)
if(_oz(z,6,aRP,lQP,gg)){xWP.wxVkey=1
}
oVP.wxXCkey=1
xWP.wxXCkey=1
_(tSP,bUP)
return tSP
}
cOP.wxXCkey=2
_2z(z,0,oPP,e,s,gg,cOP,'item','index','entId')
return r
}
e_[x[76]]={f:m76,j:[],i:[],ti:[],ic:[]}
d_[x[77]]={}
var m77=function(e,s,r,gg){
var z=gz$gwx0_78()
var fYP=_v()
_(r,fYP)
if(_oz(z,0,e,s,gg)){fYP.wxVkey=1
}
fYP.wxXCkey=1
return r
}
e_[x[77]]={f:m77,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m78=function(e,s,r,gg){
var z=gz$gwx0_79()
var h1P=_n('view')
_rz(z,h1P,'class',0,e,s,gg)
var o2P=_v()
_(h1P,o2P)
if(_oz(z,1,e,s,gg)){o2P.wxVkey=1
var l5P=_mz(z,'component-editTeam',['bindcancel',2,'bindsave',1,'teamMessage',2],[],e,s,gg)
_(o2P,l5P)
}
var c3P=_v()
_(h1P,c3P)
if(_oz(z,5,e,s,gg)){c3P.wxVkey=1
var a6P=_mz(z,'component-modal',['bindmodalButton',6,'bindmodalCancel',1,'buttonColor',2,'buttonText',3,'buttonType',4,'iconShow',5,'modalShow',6,'text',7,'titleShow',8],[],e,s,gg)
_(c3P,a6P)
}
var o4P=_v()
_(h1P,o4P)
if(_oz(z,15,e,s,gg)){o4P.wxVkey=1
var t7P=_mz(z,'mini-popover',['bindcancel',16,'bindconfirm',1,'cancel',2,'cancelColor',3,'cancelText',4,'confirm',5,'confirmColor',6,'confirmText',7,'text',8,'title',9,'type',10],[],e,s,gg)
_(o4P,t7P)
}
o2P.wxXCkey=1
o2P.wxXCkey=3
c3P.wxXCkey=1
c3P.wxXCkey=3
o4P.wxXCkey=1
o4P.wxXCkey=3
_(r,h1P)
return r
}
e_[x[78]]={f:m78,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
d_[x[79]]["shareTip"]=function(e,s,r,gg){
var z=gz$gwx0_80()
var b=x[79]+':shareTip'
r.wxVkey=b
gg.f=$gdc(f_["./pages/companyManage/waitGiftshare/waitGiftshare.wxml"],"",1)
if(p_[b]){_wl(b,x[79]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[79]]["poster"]=function(e,s,r,gg){
var z=gz$gwx0_80()
var b=x[79]+':poster'
r.wxVkey=b
gg.f=$gdc(f_["./pages/companyManage/waitGiftshare/waitGiftshare.wxml"],"",1)
if(p_[b]){_wl(b,x[79]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',2,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
}
var oD=_mz(z,'mini-button',['bindminitap',4,'miniClass',1,'text',2,'type',3],[],e,s,gg)
_(oB,oD)
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m79=function(e,s,r,gg){
var z=gz$gwx0_80()
var b9P=_v()
_(r,b9P)
if(_oz(z,8,e,s,gg)){b9P.wxVkey=1
var o0P=_v()
_(b9P,o0P)
var xAQ=_oz(z,10,e,s,gg)
var oBQ=_gd(x[79],xAQ,e_,d_)
if(oBQ){
var fCQ=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
o0P.wxXCkey=3
oBQ(fCQ,fCQ,o0P,gg)
gg.f=cur_globalf
}
else _w(xAQ,x[79],31,14)
}
var cDQ=_n('view')
_rz(z,cDQ,'class',11,e,s,gg)
var oFQ=_mz(z,'mini-navigation',['bindminitap',12,'iconPath',1,'iconStyle',2,'id',3,'position',4,'titleColor',5,'topBg',6,'topTitle',7,'topType',8],[],e,s,gg)
_(cDQ,oFQ)
var hEQ=_v()
_(cDQ,hEQ)
if(_oz(z,21,e,s,gg)){hEQ.wxVkey=1
}
var cGQ=_n('view')
_rz(z,cGQ,'class',22,e,s,gg)
var oHQ=_v()
_(cGQ,oHQ)
if(_oz(z,23,e,s,gg)){oHQ.wxVkey=1
}
else{oHQ.wxVkey=2
var lIQ=_mz(z,'mini-button',['bindminitap',24,'miniClass',1,'openType',2,'text',3,'type',4],[],e,s,gg)
_(oHQ,lIQ)
}
oHQ.wxXCkey=1
oHQ.wxXCkey=3
_(cDQ,cGQ)
hEQ.wxXCkey=1
_(r,cDQ)
b9P.wxXCkey=1
return r
}
e_[x[79]]={f:m79,j:[],i:[],ti:[],ic:[]}
d_[x[80]]={}
var m80=function(e,s,r,gg){
var z=gz$gwx0_81()
var tKQ=_v()
_(r,tKQ)
if(_oz(z,0,e,s,gg)){tKQ.wxVkey=1
}
var eLQ=_n('view')
_rz(z,eLQ,'class',1,e,s,gg)
var bMQ=_v()
_(eLQ,bMQ)
if(_oz(z,2,e,s,gg)){bMQ.wxVkey=1
}
var oNQ=_v()
_(eLQ,oNQ)
if(_oz(z,3,e,s,gg)){oNQ.wxVkey=1
}
bMQ.wxXCkey=1
oNQ.wxXCkey=1
_(r,eLQ)
tKQ.wxXCkey=1
return r
}
e_[x[80]]={f:m80,j:[],i:[],ti:[],ic:[]}
d_[x[81]]={}
var m81=function(e,s,r,gg){
var z=gz$gwx0_82()
var oPQ=_v()
_(r,oPQ)
if(_oz(z,0,e,s,gg)){oPQ.wxVkey=1
var cRQ=_n('view')
_rz(z,cRQ,'class',1,e,s,gg)
var hSQ=_v()
_(cRQ,hSQ)
if(_oz(z,2,e,s,gg)){hSQ.wxVkey=1
}
var oTQ=_v()
_(cRQ,oTQ)
if(_oz(z,3,e,s,gg)){oTQ.wxVkey=1
}
hSQ.wxXCkey=1
oTQ.wxXCkey=1
_(oPQ,cRQ)
}
var fQQ=_v()
_(r,fQQ)
if(_oz(z,4,e,s,gg)){fQQ.wxVkey=1
var cUQ=_v()
_(fQQ,cUQ)
if(_oz(z,5,e,s,gg)){cUQ.wxVkey=1
}
cUQ.wxXCkey=1
}
oPQ.wxXCkey=1
fQQ.wxXCkey=1
return r
}
e_[x[81]]={f:m81,j:[],i:[],ti:[],ic:[]}
d_[x[82]]={}
var m82=function(e,s,r,gg){
var z=gz$gwx0_83()
return r
}
e_[x[82]]={f:m82,j:[],i:[],ti:[],ic:[]}
d_[x[83]]={}
var m83=function(e,s,r,gg){
var z=gz$gwx0_84()
var aXQ=_n('view')
_rz(z,aXQ,'class',0,e,s,gg)
var tYQ=_v()
_(aXQ,tYQ)
if(_oz(z,1,e,s,gg)){tYQ.wxVkey=1
}
var eZQ=_v()
_(aXQ,eZQ)
if(_oz(z,2,e,s,gg)){eZQ.wxVkey=1
}
var b1Q=_n('view')
_rz(z,b1Q,'class',3,e,s,gg)
var o2Q=_v()
_(b1Q,o2Q)
if(_oz(z,4,e,s,gg)){o2Q.wxVkey=1
}
else{o2Q.wxVkey=2
var x3Q=_v()
_(o2Q,x3Q)
if(_oz(z,5,e,s,gg)){x3Q.wxVkey=1
}
x3Q.wxXCkey=1
}
o2Q.wxXCkey=1
_(aXQ,b1Q)
tYQ.wxXCkey=1
eZQ.wxXCkey=1
_(r,aXQ)
var o4Q=_mz(z,'mini-button',['bindminitap',6,'miniClass',1,'text',2,'type',3],[],e,s,gg)
_(r,o4Q)
return r
}
e_[x[83]]={f:m83,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['pages/companyManage/Amodule/_public/actionsheet/actionsheet.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/_public/actionsheet/actionsheet.wxml'] = [$gwx0, './pages/companyManage/Amodule/_public/actionsheet/actionsheet.wxml'];else __wxAppCode__['pages/companyManage/Amodule/_public/actionsheet/actionsheet.wxml'] = $gwx0( './pages/companyManage/Amodule/_public/actionsheet/actionsheet.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/camera/camera.json'] = {"component":true,"usingComponents":{"component-video":"../video/video","mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/camera/camera.wxml'] = [$gwx0, './pages/companyManage/Amodule/camera/camera.wxml'];else __wxAppCode__['pages/companyManage/Amodule/camera/camera.wxml'] = $gwx0( './pages/companyManage/Amodule/camera/camera.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.wxml'] = [$gwx0, './pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.wxml'];else __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.wxml'] = $gwx0( './pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/cardInformationForm/editTip/editTip.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/editTip/editTip.wxml'] = [$gwx0, './pages/companyManage/Amodule/cardInformationForm/editTip/editTip.wxml'];else __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/editTip/editTip.wxml'] = $gwx0( './pages/companyManage/Amodule/cardInformationForm/editTip/editTip.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.wxml'] = [$gwx0, './pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.wxml'];else __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.wxml'] = $gwx0( './pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/cardInformationForm/record/record.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/record/record.wxml'] = [$gwx0, './pages/companyManage/Amodule/cardInformationForm/record/record.wxml'];else __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/record/record.wxml'] = $gwx0( './pages/companyManage/Amodule/cardInformationForm/record/record.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/cardInformationForm/renewal/renewal.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/renewal/renewal.wxml'] = [$gwx0, './pages/companyManage/Amodule/cardInformationForm/renewal/renewal.wxml'];else __wxAppCode__['pages/companyManage/Amodule/cardInformationForm/renewal/renewal.wxml'] = $gwx0( './pages/companyManage/Amodule/cardInformationForm/renewal/renewal.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/createBusinesscard/createBusinesscard.json'] = {"usingComponents":{"mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/createBusinesscard/createBusinesscard.wxml'] = [$gwx0, './pages/companyManage/Amodule/createBusinesscard/createBusinesscard.wxml'];else __wxAppCode__['pages/companyManage/Amodule/createBusinesscard/createBusinesscard.wxml'] = $gwx0( './pages/companyManage/Amodule/createBusinesscard/createBusinesscard.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/editTeamMessage/editTeamMessage.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/editTeamMessage/editTeamMessage.wxml'] = [$gwx0, './pages/companyManage/Amodule/editTeamMessage/editTeamMessage.wxml'];else __wxAppCode__['pages/companyManage/Amodule/editTeamMessage/editTeamMessage.wxml'] = $gwx0( './pages/companyManage/Amodule/editTeamMessage/editTeamMessage.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/intro/intro.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/intro/intro.wxml'] = [$gwx0, './pages/companyManage/Amodule/intro/intro.wxml'];else __wxAppCode__['pages/companyManage/Amodule/intro/intro.wxml'] = $gwx0( './pages/companyManage/Amodule/intro/intro.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/iosPay/iosPay.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/iosPay/iosPay.wxml'] = [$gwx0, './pages/companyManage/Amodule/iosPay/iosPay.wxml'];else __wxAppCode__['pages/companyManage/Amodule/iosPay/iosPay.wxml'] = $gwx0( './pages/companyManage/Amodule/iosPay/iosPay.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.json'] = {"component":true,"usingComponents":{"component-canvasCheck":"../../../module/canvasCheck/canvasCheck","mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.wxml'] = [$gwx0, './pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.wxml'];else __wxAppCode__['pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.wxml'] = $gwx0( './pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/miniweb/camera/camera.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/miniweb/camera/camera.wxml'] = [$gwx0, './pages/companyManage/Amodule/miniweb/camera/camera.wxml'];else __wxAppCode__['pages/companyManage/Amodule/miniweb/camera/camera.wxml'] = $gwx0( './pages/companyManage/Amodule/miniweb/camera/camera.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/miniweb/detail/detail.json'] = {"component":true,"usingComponents":{"component-preview":"../productionPreview/productionPreview","mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/miniweb/detail/detail.wxml'] = [$gwx0, './pages/companyManage/Amodule/miniweb/detail/detail.wxml'];else __wxAppCode__['pages/companyManage/Amodule/miniweb/detail/detail.wxml'] = $gwx0( './pages/companyManage/Amodule/miniweb/detail/detail.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.wxml'] = [$gwx0, './pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.wxml'];else __wxAppCode__['pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.wxml'] = $gwx0( './pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.wxml'] = [$gwx0, './pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.wxml'];else __wxAppCode__['pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.wxml'] = $gwx0( './pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/miniweb/video/video.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/miniweb/video/video.wxml'] = [$gwx0, './pages/companyManage/Amodule/miniweb/video/video.wxml'];else __wxAppCode__['pages/companyManage/Amodule/miniweb/video/video.wxml'] = $gwx0( './pages/companyManage/Amodule/miniweb/video/video.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/renewalTip/renewalTip.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/renewalTip/renewalTip.wxml'] = [$gwx0, './pages/companyManage/Amodule/renewalTip/renewalTip.wxml'];else __wxAppCode__['pages/companyManage/Amodule/renewalTip/renewalTip.wxml'] = $gwx0( './pages/companyManage/Amodule/renewalTip/renewalTip.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.wxml'] = [$gwx0, './pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.wxml'];else __wxAppCode__['pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.wxml'] = $gwx0( './pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/video/video.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/video/video.wxml'] = [$gwx0, './pages/companyManage/Amodule/video/video.wxml'];else __wxAppCode__['pages/companyManage/Amodule/video/video.wxml'] = $gwx0( './pages/companyManage/Amodule/video/video.wxml' );
		__wxAppCode__['pages/companyManage/Amodule/wxPay/wxPay.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/Amodule/wxPay/wxPay.wxml'] = [$gwx0, './pages/companyManage/Amodule/wxPay/wxPay.wxml'];else __wxAppCode__['pages/companyManage/Amodule/wxPay/wxPay.wxml'] = $gwx0( './pages/companyManage/Amodule/wxPay/wxPay.wxml' );
		__wxAppCode__['pages/companyManage/addrMatch/addrMatch.json'] = {"navigationBarTitleText":"填写地址","backgroundColor":"#F9F9FA","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/addrMatch/addrMatch.wxml'] = [$gwx0, './pages/companyManage/addrMatch/addrMatch.wxml'];else __wxAppCode__['pages/companyManage/addrMatch/addrMatch.wxml'] = $gwx0( './pages/companyManage/addrMatch/addrMatch.wxml' );
		__wxAppCode__['pages/companyManage/batchProduction/batchProduction.json'] = {"navigationBarTitleText":"企业版","navigationBarTextStyle":"black","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/batchProduction/batchProduction.wxml'] = [$gwx0, './pages/companyManage/batchProduction/batchProduction.wxml'];else __wxAppCode__['pages/companyManage/batchProduction/batchProduction.wxml'] = $gwx0( './pages/companyManage/batchProduction/batchProduction.wxml' );
		__wxAppCode__['pages/companyManage/bindingSuccess/bindingSuccess.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/bindingSuccess/bindingSuccess.wxml'] = [$gwx0, './pages/companyManage/bindingSuccess/bindingSuccess.wxml'];else __wxAppCode__['pages/companyManage/bindingSuccess/bindingSuccess.wxml'] = $gwx0( './pages/companyManage/bindingSuccess/bindingSuccess.wxml' );
		__wxAppCode__['pages/companyManage/bindingWechatStatus/bindingWechatStatus.json'] = {"navigationBarTitleText":"递名片","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/bindingWechatStatus/bindingWechatStatus.wxml'] = [$gwx0, './pages/companyManage/bindingWechatStatus/bindingWechatStatus.wxml'];else __wxAppCode__['pages/companyManage/bindingWechatStatus/bindingWechatStatus.wxml'] = $gwx0( './pages/companyManage/bindingWechatStatus/bindingWechatStatus.wxml' );
		__wxAppCode__['pages/companyManage/buyRecords/buyRecords.json'] = {"navigationBarTitleText":"我的企业","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/buyRecords/buyRecords.wxml'] = [$gwx0, './pages/companyManage/buyRecords/buyRecords.wxml'];else __wxAppCode__['pages/companyManage/buyRecords/buyRecords.wxml'] = $gwx0( './pages/companyManage/buyRecords/buyRecords.wxml' );
		__wxAppCode__['pages/companyManage/cardEntrySuccess/cardEntrySuccess.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/cardEntrySuccess/cardEntrySuccess.wxml'] = [$gwx0, './pages/companyManage/cardEntrySuccess/cardEntrySuccess.wxml'];else __wxAppCode__['pages/companyManage/cardEntrySuccess/cardEntrySuccess.wxml'] = $gwx0( './pages/companyManage/cardEntrySuccess/cardEntrySuccess.wxml' );
		__wxAppCode__['pages/companyManage/cardInformationEdit/cardInformationEdit.json'] = {"navigationBarTitleText":"编辑名片","usingComponents":{"component-style":"../Amodule/cardInformationForm/modalStyle/modalStyle","component-form":"../Amodule/cardInformationForm/cardInformation/cardInformation","component-tip":"../Amodule/cardInformationForm/editTip/editTip","component-renewal":"../Amodule/cardInformationForm/renewal/renewal","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/cardInformationEdit/cardInformationEdit.wxml'] = [$gwx0, './pages/companyManage/cardInformationEdit/cardInformationEdit.wxml'];else __wxAppCode__['pages/companyManage/cardInformationEdit/cardInformationEdit.wxml'] = $gwx0( './pages/companyManage/cardInformationEdit/cardInformationEdit.wxml' );
		__wxAppCode__['pages/companyManage/cardInformationForm/cardInformationForm.json'] = {"navigationBarTitleText":"录入员工名片","usingComponents":{"component-style":"../Amodule/cardInformationForm/modalStyle/modalStyle","component-form":"../Amodule/cardInformationForm/cardInformation/cardInformation","component-record":"../Amodule/cardInformationForm/record/record","component-renewal":"../Amodule/cardInformationForm/renewal/renewal","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/cardInformationForm/cardInformationForm.wxml'] = [$gwx0, './pages/companyManage/cardInformationForm/cardInformationForm.wxml'];else __wxAppCode__['pages/companyManage/cardInformationForm/cardInformationForm.wxml'] = $gwx0( './pages/companyManage/cardInformationForm/cardInformationForm.wxml' );
		__wxAppCode__['pages/companyManage/changeAdmin/changeAdmin.json'] = {"navigationBarTitleText":"递名片","enablePullDownRefresh":false,"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/changeAdmin/changeAdmin.wxml'] = [$gwx0, './pages/companyManage/changeAdmin/changeAdmin.wxml'];else __wxAppCode__['pages/companyManage/changeAdmin/changeAdmin.wxml'] = $gwx0( './pages/companyManage/changeAdmin/changeAdmin.wxml' );
		__wxAppCode__['pages/companyManage/changeAdminScanCode/changeAdminScanCode.json'] = {"navigationBarTitleText":"递名片","enablePullDownRefresh":false,"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/changeAdminScanCode/changeAdminScanCode.wxml'] = [$gwx0, './pages/companyManage/changeAdminScanCode/changeAdminScanCode.wxml'];else __wxAppCode__['pages/companyManage/changeAdminScanCode/changeAdminScanCode.wxml'] = $gwx0( './pages/companyManage/changeAdminScanCode/changeAdminScanCode.wxml' );
		__wxAppCode__['pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.wxml'] = [$gwx0, './pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.wxml'];else __wxAppCode__['pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.wxml'] = $gwx0( './pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.wxml' );
		__wxAppCode__['pages/companyManage/companyRights/companyRights.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationStyle":"custom","enablePullDownRefresh":true,"backgroundColor":"#1E232F","backgroundTextStyle":"dark"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/companyRights/companyRights.wxml'] = [$gwx0, './pages/companyManage/companyRights/companyRights.wxml'];else __wxAppCode__['pages/companyManage/companyRights/companyRights.wxml'] = $gwx0( './pages/companyManage/companyRights/companyRights.wxml' );
		__wxAppCode__['pages/companyManage/configurationChangeStyle/configurationChangeStyle.json'] = {"navigationBarTitleText":"修改名片样式","usingComponents":{"component-autoStyleLayer":"../../../module/company/autoStyleLayer/autoStyleLayer","component-modal":"../../../module/_modal/modal","component-smallTmp":"../../../module/company/smallTmp/smallTmp","component-intro":"../Amodule/intro/intro","component-camera":"../Amodule/camera/camera","component-msgPopover":"../../../module/msgPopover/index","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/configurationChangeStyle/configurationChangeStyle.wxml'] = [$gwx0, './pages/companyManage/configurationChangeStyle/configurationChangeStyle.wxml'];else __wxAppCode__['pages/companyManage/configurationChangeStyle/configurationChangeStyle.wxml'] = $gwx0( './pages/companyManage/configurationChangeStyle/configurationChangeStyle.wxml' );
		__wxAppCode__['pages/companyManage/configurationStyle/configurationStyle.json'] = {"navigationBarTitleText":"","navigationBarBackgroundColor":"#ECEDEF","navigationBarTextStyle":"black","navigationStyle":"custom","usingComponents":{"component-topNavigation":"../../../module/topNavigation/topNavigation","component-defaultTmp":"../../../module/company/defaultTmp/defaultTmp","component-shareActionsheet":"../../../module/_shareActionsheet/shareActionsheet","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/configurationStyle/configurationStyle.wxml'] = [$gwx0, './pages/companyManage/configurationStyle/configurationStyle.wxml'];else __wxAppCode__['pages/companyManage/configurationStyle/configurationStyle.wxml'] = $gwx0( './pages/companyManage/configurationStyle/configurationStyle.wxml' );
		__wxAppCode__['pages/companyManage/constructor/constructor.json'] = {"usingComponents":{"component-createBusinesscard":"../Amodule/createBusinesscard/createBusinesscard","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/constructor/constructor.wxml'] = [$gwx0, './pages/companyManage/constructor/constructor.wxml'];else __wxAppCode__['pages/companyManage/constructor/constructor.wxml'] = $gwx0( './pages/companyManage/constructor/constructor.wxml' );
		__wxAppCode__['pages/companyManage/coreTeam/coreTeam.json'] = {"navigationBarTitleText":"我的企业","enablePullDownRefresh":true,"usingComponents":{"component-createBusinesscard":"../../../module/pageMain/createBusinesscard/createBusinesscard","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/coreTeam/coreTeam.wxml'] = [$gwx0, './pages/companyManage/coreTeam/coreTeam.wxml'];else __wxAppCode__['pages/companyManage/coreTeam/coreTeam.wxml'] = $gwx0( './pages/companyManage/coreTeam/coreTeam.wxml' );
		__wxAppCode__['pages/companyManage/coreTeamDetail/coreTeamDetail.json'] = {"usingComponents":{"component-newCardDetail":"../../../module/newCardDetail/newCardDetail","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"名片详情","navigationBarBackgroundColor":"#ECEDEF","enablePullDownRefresh":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/coreTeamDetail/coreTeamDetail.wxml'] = [$gwx0, './pages/companyManage/coreTeamDetail/coreTeamDetail.wxml'];else __wxAppCode__['pages/companyManage/coreTeamDetail/coreTeamDetail.wxml'] = $gwx0( './pages/companyManage/coreTeamDetail/coreTeamDetail.wxml' );
		__wxAppCode__['pages/companyManage/createTeam/createTeam.json'] = {"usingComponents":{"component-createBusinesscard":"../../../module/pageMain/createBusinesscard/createBusinesscard","component-build":"../../../module/company/build/build","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"注册新企业","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#1E232F"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/createTeam/createTeam.wxml'] = [$gwx0, './pages/companyManage/createTeam/createTeam.wxml'];else __wxAppCode__['pages/companyManage/createTeam/createTeam.wxml'] = $gwx0( './pages/companyManage/createTeam/createTeam.wxml' );
		__wxAppCode__['pages/companyManage/createdPcTemplate/createdPcTemplate.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/createdPcTemplate/createdPcTemplate.wxml'] = [$gwx0, './pages/companyManage/createdPcTemplate/createdPcTemplate.wxml'];else __wxAppCode__['pages/companyManage/createdPcTemplate/createdPcTemplate.wxml'] = $gwx0( './pages/companyManage/createdPcTemplate/createdPcTemplate.wxml' );
		__wxAppCode__['pages/companyManage/dynamicList/dynamicList.json'] = {"navigationBarTitleText":"我的企业","enablePullDownRefresh":true,"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/dynamicList/dynamicList.wxml'] = [$gwx0, './pages/companyManage/dynamicList/dynamicList.wxml'];else __wxAppCode__['pages/companyManage/dynamicList/dynamicList.wxml'] = $gwx0( './pages/companyManage/dynamicList/dynamicList.wxml' );
		__wxAppCode__['pages/companyManage/enterBindingWechat/enterBindingWechat.json'] = {"navigationBarTitleText":"递名片","enablePullDownRefresh":true,"usingComponents":{"component-topNavigation":"../../../module/topNavigation/topNavigation","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/enterBindingWechat/enterBindingWechat.wxml'] = [$gwx0, './pages/companyManage/enterBindingWechat/enterBindingWechat.wxml'];else __wxAppCode__['pages/companyManage/enterBindingWechat/enterBindingWechat.wxml'] = $gwx0( './pages/companyManage/enterBindingWechat/enterBindingWechat.wxml' );
		__wxAppCode__['pages/companyManage/entrySuccess/entrySuccess.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/entrySuccess/entrySuccess.wxml'] = [$gwx0, './pages/companyManage/entrySuccess/entrySuccess.wxml'];else __wxAppCode__['pages/companyManage/entrySuccess/entrySuccess.wxml'] = $gwx0( './pages/companyManage/entrySuccess/entrySuccess.wxml' );
		__wxAppCode__['pages/companyManage/expirationReminder/expirationReminder.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/expirationReminder/expirationReminder.wxml'] = [$gwx0, './pages/companyManage/expirationReminder/expirationReminder.wxml'];else __wxAppCode__['pages/companyManage/expirationReminder/expirationReminder.wxml'] = $gwx0( './pages/companyManage/expirationReminder/expirationReminder.wxml' );
		__wxAppCode__['pages/companyManage/fillTikect/fillTikect.json'] = {"navigationBarTitleText":"我的企业","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/fillTikect/fillTikect.wxml'] = [$gwx0, './pages/companyManage/fillTikect/fillTikect.wxml'];else __wxAppCode__['pages/companyManage/fillTikect/fillTikect.wxml'] = $gwx0( './pages/companyManage/fillTikect/fillTikect.wxml' );
		__wxAppCode__['pages/companyManage/handoverStatus/handoverStatus.json'] = {"navigationBarTitleText":"认领名片","enablePullDownRefresh":true,"usingComponents":{"component-topNavigation":"../../../module/topNavigation/topNavigation","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/handoverStatus/handoverStatus.wxml'] = [$gwx0, './pages/companyManage/handoverStatus/handoverStatus.wxml'];else __wxAppCode__['pages/companyManage/handoverStatus/handoverStatus.wxml'] = $gwx0( './pages/companyManage/handoverStatus/handoverStatus.wxml' );
		__wxAppCode__['pages/companyManage/inviteBinding/inviteBinding.json'] = {"navigationBarTitleText":"递名片","usingComponents":{"component-createBusinesscard":"../../../module/pageMain/createBusinesscard/createBusinesscard","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/inviteBinding/inviteBinding.wxml'] = [$gwx0, './pages/companyManage/inviteBinding/inviteBinding.wxml'];else __wxAppCode__['pages/companyManage/inviteBinding/inviteBinding.wxml'] = $gwx0( './pages/companyManage/inviteBinding/inviteBinding.wxml' );
		__wxAppCode__['pages/companyManage/inviteBindingWechat/inviteBindingWechat.json'] = {"navigationBarTitleText":"递名片","usingComponents":{"component-createBusinesscard":"../../../module/pageMain/createBusinesscard/createBusinesscard","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/inviteBindingWechat/inviteBindingWechat.wxml'] = [$gwx0, './pages/companyManage/inviteBindingWechat/inviteBindingWechat.wxml'];else __wxAppCode__['pages/companyManage/inviteBindingWechat/inviteBindingWechat.wxml'] = $gwx0( './pages/companyManage/inviteBindingWechat/inviteBindingWechat.wxml' );
		__wxAppCode__['pages/companyManage/joinenterprise/joinenterprise.json'] = {"navigationBarTitleText":"递名片","usingComponents":{"component-createBusinesscard":"../../../module/pageMain/createBusinesscard/createBusinesscard","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/joinenterprise/joinenterprise.wxml'] = [$gwx0, './pages/companyManage/joinenterprise/joinenterprise.wxml'];else __wxAppCode__['pages/companyManage/joinenterprise/joinenterprise.wxml'] = $gwx0( './pages/companyManage/joinenterprise/joinenterprise.wxml' );
		__wxAppCode__['pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.json'] = {"usingComponents":{"component-modal":"../../../module/_modal/modal","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.wxml'] = [$gwx0, './pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.wxml'];else __wxAppCode__['pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.wxml'] = $gwx0( './pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.wxml' );
		__wxAppCode__['pages/companyManage/loginSuc/loginSuc.json'] = {"navigationBarTitleText":"企业","navigationStyle":"custom","usingComponents":{"component-topNavigation":"../../../module/topNavigation/topNavigation","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/loginSuc/loginSuc.wxml'] = [$gwx0, './pages/companyManage/loginSuc/loginSuc.wxml'];else __wxAppCode__['pages/companyManage/loginSuc/loginSuc.wxml'] = $gwx0( './pages/companyManage/loginSuc/loginSuc.wxml' );
		__wxAppCode__['pages/companyManage/miniWeb/miniWeb.json'] = {"navigationBarTitleText":"我的企业","navigationStyle":"custom","usingComponents":{"component-modal":"../../../module/_modal/modal","component-detail":"../Amodule/miniweb/detail/detail","component-topNavigation":"../../../module/topNavigation/topNavigation","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWeb/miniWeb.wxml'] = [$gwx0, './pages/companyManage/miniWeb/miniWeb.wxml'];else __wxAppCode__['pages/companyManage/miniWeb/miniWeb.wxml'] = $gwx0( './pages/companyManage/miniWeb/miniWeb.wxml' );
		__wxAppCode__['pages/companyManage/miniWebCropBackground/miniWebCropBackground.json'] = {"backgroundColor":"#000000","backgroundColorBottom":"#000000","navigationBarTitleText":"我的企业","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWebCropBackground/miniWebCropBackground.wxml'] = [$gwx0, './pages/companyManage/miniWebCropBackground/miniWebCropBackground.wxml'];else __wxAppCode__['pages/companyManage/miniWebCropBackground/miniWebCropBackground.wxml'] = $gwx0( './pages/companyManage/miniWebCropBackground/miniWebCropBackground.wxml' );
		__wxAppCode__['pages/companyManage/miniWebDemo/miniWebDemo.json'] = {"navigationBarBackgroundColor":"#ECEDEF","navigationBarTitleText":"微官网","usingComponents":{"component-detail":"../Amodule/miniweb/detail/detail","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWebDemo/miniWebDemo.wxml'] = [$gwx0, './pages/companyManage/miniWebDemo/miniWebDemo.wxml'];else __wxAppCode__['pages/companyManage/miniWebDemo/miniWebDemo.wxml'] = $gwx0( './pages/companyManage/miniWebDemo/miniWebDemo.wxml' );
		__wxAppCode__['pages/companyManage/miniWebDetail/miniWebDetail.json'] = {"navigationBarBackgroundColor":"#ECEDEF","navigationBarTitleText":"名片详情","usingComponents":{"component-detail":"../Amodule/miniweb/detail/detail","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWebDetail/miniWebDetail.wxml'] = [$gwx0, './pages/companyManage/miniWebDetail/miniWebDetail.wxml'];else __wxAppCode__['pages/companyManage/miniWebDetail/miniWebDetail.wxml'] = $gwx0( './pages/companyManage/miniWebDetail/miniWebDetail.wxml' );
		__wxAppCode__['pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.json'] = {"navigationBarTitleText":"我的企业","navigationStyle":"custom","usingComponents":{"component-detail":"../Amodule/miniweb/detail/detail","component-topNavigation":"../../../module/topNavigation/topNavigation","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.wxml'] = [$gwx0, './pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.wxml'];else __wxAppCode__['pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.wxml'] = $gwx0( './pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.wxml' );
		__wxAppCode__['pages/companyManage/miniWebEdit/miniWebEdit.json'] = {"navigationBarTitleText":"企业微官网","navigationStyle":"custom","usingComponents":{"component-topNavigation":"../../../module/topNavigation/topNavigation","component-camera":"../Amodule/miniweb/camera/camera","component-video":"../Amodule/miniweb/video/video","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWebEdit/miniWebEdit.wxml'] = [$gwx0, './pages/companyManage/miniWebEdit/miniWebEdit.wxml'];else __wxAppCode__['pages/companyManage/miniWebEdit/miniWebEdit.wxml'] = $gwx0( './pages/companyManage/miniWebEdit/miniWebEdit.wxml' );
		__wxAppCode__['pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.json'] = {"disableScroll":true,"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.wxml'] = [$gwx0, './pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.wxml'];else __wxAppCode__['pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.wxml'] = $gwx0( './pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.wxml' );
		__wxAppCode__['pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.json'] = {"navigationBarTitleText":"企业微官网","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.wxml'] = [$gwx0, './pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.wxml'];else __wxAppCode__['pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.wxml'] = $gwx0( './pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.wxml' );
		__wxAppCode__['pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.json'] = {"navigationBarTitleText":"产品/服务","usingComponents":{"component-edit":"../Amodule/miniweb/productionEdit/productionEdit","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.wxml'] = [$gwx0, './pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.wxml'];else __wxAppCode__['pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.wxml'] = $gwx0( './pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.wxml' );
		__wxAppCode__['pages/companyManage/notClaimCardDetail/notClaimCardDetail.json'] = {"usingComponents":{"component-newCardDetail":"../../../module/newCardDetail/newCardDetail","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"名片详情","navigationBarBackgroundColor":"#ECEDEF","enablePullDownRefresh":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/notClaimCardDetail/notClaimCardDetail.wxml'] = [$gwx0, './pages/companyManage/notClaimCardDetail/notClaimCardDetail.wxml'];else __wxAppCode__['pages/companyManage/notClaimCardDetail/notClaimCardDetail.wxml'] = $gwx0( './pages/companyManage/notClaimCardDetail/notClaimCardDetail.wxml' );
		__wxAppCode__['pages/companyManage/officialBindingSuccess/officialBindingSuccess.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/officialBindingSuccess/officialBindingSuccess.wxml'] = [$gwx0, './pages/companyManage/officialBindingSuccess/officialBindingSuccess.wxml'];else __wxAppCode__['pages/companyManage/officialBindingSuccess/officialBindingSuccess.wxml'] = $gwx0( './pages/companyManage/officialBindingSuccess/officialBindingSuccess.wxml' );
		__wxAppCode__['pages/companyManage/paySuccess/paySuccess.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"我的企业"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/paySuccess/paySuccess.wxml'] = [$gwx0, './pages/companyManage/paySuccess/paySuccess.wxml'];else __wxAppCode__['pages/companyManage/paySuccess/paySuccess.wxml'] = $gwx0( './pages/companyManage/paySuccess/paySuccess.wxml' );
		__wxAppCode__['pages/companyManage/pcTemplatePreview/pcTemplatePreview.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/pcTemplatePreview/pcTemplatePreview.wxml'] = [$gwx0, './pages/companyManage/pcTemplatePreview/pcTemplatePreview.wxml'];else __wxAppCode__['pages/companyManage/pcTemplatePreview/pcTemplatePreview.wxml'] = $gwx0( './pages/companyManage/pcTemplatePreview/pcTemplatePreview.wxml' );
		__wxAppCode__['pages/companyManage/phonereceiveCard/phonereceiveCard.json'] = {"usingComponents":{"component-createBusinesscard":"../../../module/pageMain/createBusinesscard/createBusinesscard","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/phonereceiveCard/phonereceiveCard.wxml'] = [$gwx0, './pages/companyManage/phonereceiveCard/phonereceiveCard.wxml'];else __wxAppCode__['pages/companyManage/phonereceiveCard/phonereceiveCard.wxml'] = $gwx0( './pages/companyManage/phonereceiveCard/phonereceiveCard.wxml' );
		__wxAppCode__['pages/companyManage/previewVideoCard/previewVideoCard.json'] = {"usingComponents":{"component-dynamiccardvideo":"../../../module/dynamicCardVideo/dynamicCardVideo","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/previewVideoCard/previewVideoCard.wxml'] = [$gwx0, './pages/companyManage/previewVideoCard/previewVideoCard.wxml'];else __wxAppCode__['pages/companyManage/previewVideoCard/previewVideoCard.wxml'] = $gwx0( './pages/companyManage/previewVideoCard/previewVideoCard.wxml' );
		__wxAppCode__['pages/companyManage/searchPage/searchPage.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"搜索","navigationBarBackgroundColor":"#F7F7F7"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/searchPage/searchPage.wxml'] = [$gwx0, './pages/companyManage/searchPage/searchPage.wxml'];else __wxAppCode__['pages/companyManage/searchPage/searchPage.wxml'] = $gwx0( './pages/companyManage/searchPage/searchPage.wxml' );
		__wxAppCode__['pages/companyManage/serviceAgreement/serviceAgreement.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"服务协议","navigationBarTextStyle":"black","enablePullDownRefresh":false};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/serviceAgreement/serviceAgreement.wxml'] = [$gwx0, './pages/companyManage/serviceAgreement/serviceAgreement.wxml'];else __wxAppCode__['pages/companyManage/serviceAgreement/serviceAgreement.wxml'] = $gwx0( './pages/companyManage/serviceAgreement/serviceAgreement.wxml' );
		__wxAppCode__['pages/companyManage/serviceIntro/serviceIntro.json'] = {"navigationBarTitleText":"我的企业","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ECEDEF","enablePullDownRefresh":false,"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/serviceIntro/serviceIntro.wxml'] = [$gwx0, './pages/companyManage/serviceIntro/serviceIntro.wxml'];else __wxAppCode__['pages/companyManage/serviceIntro/serviceIntro.wxml'] = $gwx0( './pages/companyManage/serviceIntro/serviceIntro.wxml' );
		__wxAppCode__['pages/companyManage/servicePay/servicePay.json'] = {"usingComponents":{"component-wxPay":"../Amodule/wxPay/wxPay","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"续期服务","navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":true,"backgroundColor":"#2D3547","backgroundTextStyle":"dark"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/servicePay/servicePay.wxml'] = [$gwx0, './pages/companyManage/servicePay/servicePay.wxml'];else __wxAppCode__['pages/companyManage/servicePay/servicePay.wxml'] = $gwx0( './pages/companyManage/servicePay/servicePay.wxml' );
		__wxAppCode__['pages/companyManage/shareCardlibrary/shareCardlibrary.json'] = {"navigationBarTitleText":"我的企业","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/shareCardlibrary/shareCardlibrary.wxml'] = [$gwx0, './pages/companyManage/shareCardlibrary/shareCardlibrary.wxml'];else __wxAppCode__['pages/companyManage/shareCardlibrary/shareCardlibrary.wxml'] = $gwx0( './pages/companyManage/shareCardlibrary/shareCardlibrary.wxml' );
		__wxAppCode__['pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.json'] = {"usingComponents":{"component-newCardDetail":"../../../module/newCardDetail/newCardDetail","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"名片详情","navigationBarBackgroundColor":"#ECEDEF","enablePullDownRefresh":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.wxml'] = [$gwx0, './pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.wxml'];else __wxAppCode__['pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.wxml'] = $gwx0( './pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.wxml' );
		__wxAppCode__['pages/companyManage/shareCardstore/shareCardstore.json'] = {"usingComponents":{"component-shareSuccessLayer":"../Amodule/shareCardsLayer/shareCardsLayer","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/shareCardstore/shareCardstore.wxml'] = [$gwx0, './pages/companyManage/shareCardstore/shareCardstore.wxml'];else __wxAppCode__['pages/companyManage/shareCardstore/shareCardstore.wxml'] = $gwx0( './pages/companyManage/shareCardstore/shareCardstore.wxml' );
		__wxAppCode__['pages/companyManage/shareEnter/shareEnter.json'] = {"navigationStyle":"custom","usingComponents":{"component-topNavigation":"../../../module/topNavigation/topNavigation","component-loadingTip":"../../../module/loadingTip/loadingTip","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/shareEnter/shareEnter.wxml'] = [$gwx0, './pages/companyManage/shareEnter/shareEnter.wxml'];else __wxAppCode__['pages/companyManage/shareEnter/shareEnter.wxml'] = $gwx0( './pages/companyManage/shareEnter/shareEnter.wxml' );
		__wxAppCode__['pages/companyManage/shareTmp/shareTmp.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/shareTmp/shareTmp.wxml'] = [$gwx0, './pages/companyManage/shareTmp/shareTmp.wxml'];else __wxAppCode__['pages/companyManage/shareTmp/shareTmp.wxml'] = $gwx0( './pages/companyManage/shareTmp/shareTmp.wxml' );
		__wxAppCode__['pages/companyManage/teamList/teamList.json'] = {"navigationBarTitleText":"我的企业","navigationBarBackgroundColor":"#F7F7F7","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/teamList/teamList.wxml'] = [$gwx0, './pages/companyManage/teamList/teamList.wxml'];else __wxAppCode__['pages/companyManage/teamList/teamList.wxml'] = $gwx0( './pages/companyManage/teamList/teamList.wxml' );
		__wxAppCode__['pages/companyManage/teamNotClaim/teamNotClaim.json'] = {"navigationBarTitleText":"企业员工","navigationBarTextStyle":"black","usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/teamNotClaim/teamNotClaim.wxml'] = [$gwx0, './pages/companyManage/teamNotClaim/teamNotClaim.wxml'];else __wxAppCode__['pages/companyManage/teamNotClaim/teamNotClaim.wxml'] = $gwx0( './pages/companyManage/teamNotClaim/teamNotClaim.wxml' );
		__wxAppCode__['pages/companyManage/teamSetting/teamSetting.json'] = {"usingComponents":{"component-modal":"../../../module/_modal/modal","components-actionsheet":"../../../module/_actionsheet/actionsheet","component-editTeam":"../../../module/company/editTeamMessage/editTeamMessage","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"},"navigationBarTitleText":"账号设置","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/teamSetting/teamSetting.wxml'] = [$gwx0, './pages/companyManage/teamSetting/teamSetting.wxml'];else __wxAppCode__['pages/companyManage/teamSetting/teamSetting.wxml'] = $gwx0( './pages/companyManage/teamSetting/teamSetting.wxml' );
		__wxAppCode__['pages/companyManage/waitGiftshare/waitGiftshare.json'] = {"navigationStyle":"custom","enablePullDownRefresh":true,"usingComponents":{"component-topNavigation":"../../../module/topNavigation/topNavigation","mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/waitGiftshare/waitGiftshare.wxml'] = [$gwx0, './pages/companyManage/waitGiftshare/waitGiftshare.wxml'];else __wxAppCode__['pages/companyManage/waitGiftshare/waitGiftshare.wxml'] = $gwx0( './pages/companyManage/waitGiftshare/waitGiftshare.wxml' );
		__wxAppCode__['pages/companyManage/waitingPay/waitingPay.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/waitingPay/waitingPay.wxml'] = [$gwx0, './pages/companyManage/waitingPay/waitingPay.wxml'];else __wxAppCode__['pages/companyManage/waitingPay/waitingPay.wxml'] = $gwx0( './pages/companyManage/waitingPay/waitingPay.wxml' );
		__wxAppCode__['pages/companyManage/webLogin/webLogin.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/webLogin/webLogin.wxml'] = [$gwx0, './pages/companyManage/webLogin/webLogin.wxml'];else __wxAppCode__['pages/companyManage/webLogin/webLogin.wxml'] = $gwx0( './pages/companyManage/webLogin/webLogin.wxml' );
		__wxAppCode__['pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.wxml'] = [$gwx0, './pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.wxml'];else __wxAppCode__['pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.wxml'] = $gwx0( './pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.wxml' );
		__wxAppCode__['pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.json'] = {"usingComponents":{"mini-icon":"../../../components/icon/icon","mini-button":"../../../components/button/button","mini-message":"../../../components/message/message","mini-popover":"../../../components/popover/popover","mini-actionsheet":"../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.wxml'] = [$gwx0, './pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.wxml'];else __wxAppCode__['pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.wxml'] = $gwx0( './pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.wxml' );
	
	define("pages/companyManage/070F20240691379C6169482324B0E9B3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.matchFun=function(a,t){var e=[],r=10,i=a;if(!i||i.trim().length<=0||(n=i,new RegExp("[&+#]").test(n)))return t.setData({addrMartchData:[]}),0;wx.showNavigationBarLoading&&wx.showNavigationBarLoading();var n;getApp().setRequest({url:"baseSuggestion",data:{keyword:i.substr(0,40)}},(function(a){r=a.length;for(var i=0;i<r;i++)e.push([a[i].address,a[i].title]);t.setData({addrMartchData:e})}),(function(){t.setData({addrMartchData:[]})}),(function(){wx.hideNavigationBarLoading&&wx.hideNavigationBarLoading()}))}; 
 			}); 
		define("pages/companyManage/10BCDDA00691379C76DAB5A76EC0E9B3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.MiniWeb=void 0;var n=e(require("../../@babel/runtime/helpers/classCallCheck.js")),t=e(require("../../@babel/runtime/helpers/createClass.js")),r=function(){function e(){(0,n.default)(this,e)}return(0,t.default)(e,[{key:"initHuancun",value:function(e,n){try{wx.getStorageSync("miniwebEdit_"+e)||wx.setStorageSync("miniwebEdit_"+e,pageData.webData)}catch(e){}}},{key:"updateHuancun",value:function(e,n){var t=n.data;wx.setStorageSync("miniwebEdit_"+e,{logo:t.logo?t.logo:"",fullname:t.fullname?t.fullname:"",slogan:t.slogan?t.slogan:"",intro:t.intro?t.intro:"",products:t.products?t.products:[],website:t.website?t.website:"",industryCode:t.industryCode?t.industryCode:"",industryName:t.industryName?t.industryName:"",companyPhoto:t.companyPhoto?t.companyPhoto:[],companyVideo:t.companyVideo?t.companyVideo:[]})}},{key:"removeHuancun",value:function(e){wx.removeStorageSync("miniwebEdit_"+e)}},{key:"checkChange",value:function(e,n){var t=!1;if(e.logo!=n.logo)return!0;if(e.fullname!=n.fullname)return!0;if(e.industryCode!=n.industryCode)return!0;if(e.slogan!=n.slogan)return!0;if(e.intro!=n.intro)return!0;if(e.website!=n.website)return!0;if(n.productsInit.length!=n.products.length)return!0;if(n.productsInit.length>0){for(var r=n.productsInit,i=n.products,o=0;o<r.length;o++){if(r[o].name!=i[o].name){t=!0;break}if(r[o].intro!=i[o].intro){t=!0;break}if(r[o].image&&r[o].image[0]&&r[o].image[0].url!=i[o].image[0].url){t=!0;break}}if(t)return!0}if(n.companyPhotoInit.length!=n.companyPhoto.length)return!0;if(n.companyPhotoInit.length>0){for(var a=n.companyPhotoInit,u=n.companyPhoto,l=0;l<a.length;l++)if(a[l].url!=u[l].url){t=!0;break}if(t)return!0}if(n.companyVideoInit.length!=n.companyVideo.length)return!0;if(n.companyVideoInit.length>0){for(var c=n.companyVideoInit,s=n.companyVideo,d=0;d<c.length;d++)if(c[d].url!=s[d].url){t=!0;break}if(t)return!0}return!1}}]),e}();exports.MiniWeb=r; 
 			}); 
		define("pages/companyManage/96992B220691379CF0FF43250EB0E9B3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.EditFun=void 0;var a=e(require("../../@babel/runtime/helpers/classCallCheck.js")),l=e(require("../../@babel/runtime/helpers/createClass.js")),t=function(){function e(){(0,a.default)(this,e)}return(0,l.default)(e,[{key:"baseForm",value:function(){return[{name:"name",title:"姓名",pValue:"填写员工姓名",value:"",secure:1,must:1,show:1,placeholder:0,disabled:0,format:0},{name:"job",title:"职位",pValue:"填写员工职位",value:"",secure:1,must:1,show:1,placeholder:0,disabled:0,format:0},{name:"company",title:"公司",pValue:"填写公司名称",value:"",secure:1,must:1,show:1,placeholder:0,disabled:1,format:0},{name:"mophone1",title:"手机",pValue:"填写员工手机号",value:"",secure:1,must:1,show:1,placeholder:0,disabled:0,format:0},{name:"mophone2",title:"手机",pValue:"填写员工手机号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"mophone3",title:"手机",pValue:"填写员工手机号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"wechat",title:"微信",pValue:"填写员工微信号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"wechat2",title:"微信",pValue:"填写员工微信号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"wechat3",title:"微信",pValue:"填写员工微信号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"email1",title:"邮箱",pValue:"填写员工邮箱",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"email2",title:"邮箱",pValue:"填写员工邮箱",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"email3",title:"邮箱",pValue:"填写员工邮箱",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"addr1",title:"地址",pValue:"填写公司地址",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"addr2",title:"地址",pValue:"填写公司地址",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"addr3",title:"地址",pValue:"填写公司地址",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"phone1",title:"座机",pValue:"填写座机号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"phone2",title:"座机",pValue:"填写座机号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"phone3",title:"座机",pValue:"填写座机号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"website",title:"网址",pValue:"填写公司网址",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"fax",title:"传真",pValue:"填写传真号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"title",title:"职称",pValue:"填写职称",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"qq",title:"QQ",pValue:"填写QQ号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"dept",title:"部门",pValue:"填写部门",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"postCode",title:"邮编",pValue:"填写邮编号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"weibo",title:"微博",pValue:"填写微博号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"englishName",title:"英文名",pValue:"填写英文名",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0},{name:"offiaccount",title:"公众号",pValue:"填写公众号",value:"",secure:1,must:0,show:0,placeholder:0,disabled:0,format:0}]}},{key:"initServerDataFun",value:function(){return{entId:"",deptId:"",tplId:"",openId:"",addr1:"",addr2:"",addr3:"",company:"",dept:"",email1:"",email2:"",email3:"",englishName:"",fax:"",job:"",mophone1:"",mophone2:"",mophone3:"",name:"",offiaccount:"",phone1:"",phone2:"",phone3:"",pinyin:"",postCode:"",qq:"",title:"",website:"",wechat:"",wechat2:"",wechat3:"",weibo:""}}},{key:"buildServerDataFun",value:function(e,a){for(var l=this.initServerDataFun(),t=0;t<e.length;t++){var u=e[t].name;"build"==a?1==e[t].show&&e[t].value&&(l[u]=e[t].value):e[t].value&&(l[u]=e[t].value)}return l}},{key:"updateServerDataFun",value:function(e,a){for(var l=e,t=0;t<a.length;t++){var u=a[t].name;a[t].value&&(l[u]=a[t].value)}return l}},{key:"clearFormData",value:function(e){for(var a=0;a<e.length;a++)"company"==e[a].name||"addr1"==e[a].name||"addr2"==e[a].name||"addr3"==e[a].name||e[a].value&&(e[a].value="");return e}},{key:"testFun",value:function(e){for(var a=[],l=0;l<e.length;l++)a.push(e[l].value);return a}},{key:"updateFormConstruction",value:function(e,a,l){for(var t=this.baseForm(),u=e,r={},o=0;o<a.length;o++)a[o].tplConfig&&(a[o].checked?r[a[o].tplConfig]=!0:r[a[o].tplConfig]=!1);for(var s=0;s<t.length;s++){for(var m=0;m<u.length;m++)if(t[s].name==u[m].name){t[s]=u[m];break}r&&r[t[s].name]?(t[s].show=1,t[s].must=1):"name"==t[s].name||"job"==t[s].name||("company"==t[s].name?t[s].value=l.tplentshortName:(t[s].show=0,t[s].must=0))}return t}},{key:"checkFormRequired",value:function(e){for(var a={pass:!0,form:e},l=e,t="",u="",r=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,o=new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"),s=0;s<l.length;s++)t=l[s].name,!((u=l[s].value)&&u.trim().length>0)&&(u=""),1!=l[s].must||u?1==l[s].must&&u&&("mophone1"!=t&&"mophone2"!=t&&"mophone3"!=t||r.test(u)||(l[s].format=1,a.pass=!1),"email1"!=t&&"email2"!=t&&"email3"!=t||o.test(u)||(l[s].format=1,a.pass=!1)):(l[s].value="",l[s].placeholder=1,a.pass=!1);return a.form=l,a}},{key:"sensitiveUpdate",value:function(e,a){for(var l=e,t=a,u=0;u<l.length;u++)t[l[u]]&&(t[l[u]].secure=0);return t}},{key:"updateForm",value:function(e){for(var a=this.baseForm(),l=0;l<a.length;l++)e[a[l].name]&&(a[l].value=e[a[l].name]);return a}}]),e}();exports.EditFun=t; 
 			}); 
		define("pages/companyManage/C4241E930691379CA2427694C1E0E9B3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={msgGroups:function(e){for(var o=[["mophone1","手机"],["mophone2","手机"],["mophone3","手机"],["wechat","微信"],["wechat2","微信"],["wechat3","微信"],["addr1","地址"],["addr2","地址"],["addr3","地址"],["email1","邮箱"],["email2","邮箱"],["email3","邮箱"],["phone1","座机"],["phone2","座机"],["phone3","座机"],["fax","传真"],["website","网址"],["qq","QQ"],["dept","部门"],["postCode","邮编"],["offiaccount","公众号"],["weibo","微博"]],t=[],a=0;a<o.length;a++)if(e[o[a][0]]&&e[o[a][0]].trim().length){var n=o[a][0];t.push({name:n,detail:o[a][1],msg:e[n]})}return t}}; 
 			}); 
		__wxRoute = 'pages/companyManage/Amodule/_public/actionsheet/actionsheet';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/_public/actionsheet/actionsheet.js';	define("pages/companyManage/Amodule/_public/actionsheet/actionsheet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({options:{multipleSlots:!0},properties:{sheetList:{type:Array,value:[],observer:function(t){this._moveWidth(),this._initAnimation(),this._animationUp()}},addSlot:{type:Boolean,value:!1}},lifetimes:{attached:function(){console.log("attached")}},data:{animation:"",platform:t.systemInfo.platform},methods:{_moveWidth:function(){var i=112,a=8;i/=t.systemInfo.shiftX,a/=t.systemInfo.shiftX;var n=this.data.sheetList.length;this.data.addSlot&&(n+=1),this.data.moveWidth=n*i+a},_initAnimation:function(){this.animation=wx.createAnimation({duration:300,timingFunction:"ease"})},_animationUp:function(){var t=this;this.animation.translateY(-this.data.moveWidth).step();setTimeout((function(){t.setData({animationT:t.animation.export()})}),100)},_animationDown:function(){this.animation.translateY(0).step();this.setData({animationT:this.animation.export()})},_itemTap:function(t){var i=this;this._animationDown(),setTimeout((function(){i.triggerEvent("itemTap",t.currentTarget.dataset.i)}),300)}}}); 
 			}); 	require("pages/companyManage/Amodule/_public/actionsheet/actionsheet.js");
 		__wxRoute = 'pages/companyManage/Amodule/camera/camera';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/camera/camera.js';	define("pages/companyManage/Amodule/camera/camera.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{videoList:Array,photoList:Array,editType:String,pageFlag:String},data:{upldImagesComplete:!0},methods:{_videoFun:function(t){this.triggerEvent("videoFun",t.detail)},_addImages:function(){t.burying.setPoint(t,1072);var a=9-this.data.photoList.length,o=this;if(!this.data.upldImagesComplete)return e.showtoast("上传中...","loading",1500),0;function i(t){wx.chooseImage({count:a,sourceType:[t],sizeType:["compressed"],success:function(t){o.data.upldImageNumber=0,o.data.upldImagesComplete=!1,o._upldImges(t.tempFilePaths),t.tempFilePaths.length}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:i("camera");break;case 1:i("album")}}catch(t){}}})},_upldImges:function(a){var o=this;e.showtoast("图片上传中"+(this.data.upldImageNumber+1)+"/"+a.length,"loading",2e4),t.photoIdentyFun(a[this.data.upldImageNumber],(function(i){if(!i)return o.data.upldImagesComplete=!0,e.hidetoast(),o.triggerEvent("photoFun",o.data.photoList),e.testImgShowmodal(),!1;t.setUpldFile({url:"uploadAlbumImg",filePath:a[o.data.upldImageNumber]},(function(t){o.data.photoList.push(t),o.setData({photoList:o.data.photoList})}),(function(){e.showtoast("上传失败","none",1e3)}),(function(t){o.data.upldImageNumber++,o.data.upldImageNumber<a.length?o._upldImges(a):o.data.upldImageNumber==a.length&&(o.data.upldImagesComplete=!0,o.triggerEvent("photoFun",o.data.photoList),e.hidetoast())}))}),(function(){o.data.upldImageNumber++,o.data.upldImageNumber<a.length?o._upldImges(a):o.data.upldImageNumber==a.length&&(o.data.upldImagesComplete=!0,o.triggerEvent("photoComplete",o.data.photoCon),e.hidetoast())}))},_throwImage:function(t){this.data.photoList.splice(t.currentTarget.dataset.throwindex,1),this.setData({photoList:this.data.photoList}),this.triggerEvent("photoFun",this.data.photoList)},_imagePreview:function(t){this.data.upldImagesComplete&&this.triggerEvent("previewPhoto",t.currentTarget.dataset.index)}}}); 
 			}); 	require("pages/companyManage/Amodule/camera/camera.js");
 		__wxRoute = 'pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.js';	define("pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{formData:{type:Array,value:[],observer:function(t){this.setData({form:t})}},pathName:String},data:{form:[],showTip:!1},methods:{_focus:function(t){var a=t.currentTarget.dataset.ind,e={};this.data.form[a].format=0,this.data.form[a].placeholder=0,this.data.form[a].secure=1,e["form["+a+"]"]=this.data.form[a],this.setData(e),this._logFun(t)},_logFun:function(a){var e=a.currentTarget.dataset.ind;switch(this.data.formData[e].name){case"name":t.burying.setPoint(t,1030);break;case"job":t.burying.setPoint(t,1031);break;case"mophone1":t.burying.setPoint(t,1033);break;case"email1":t.burying.setPoint(t,1034);break;case"addr1":t.burying.setPoint(t,1035)}},_tap:function(a){var e=a.currentTarget.dataset.ind;"company"==this.data.form[e].name&&(t.burying.setPoint(t,1032),this.triggerEvent("showTip",!0))},_input:function(t){var a=t.currentTarget.dataset.ind;this.data.form[a].value=t.detail.value,this._updateMessage(this.data.form)},_blur:function(t){var a=t.currentTarget.dataset.ind;t.detail.value&&t.detail.value.trim().length>0?this.data.form[a].value=t.detail.value:(this.data.form[a].value="",this.setData({form:this.data.form})),this._updateMessage(this.data.form)},_updateMessage:function(t){var a=t;this.triggerEvent("updateMessage",a)},_tipConfirm:function(){this.triggerEvent("showTip",!1)}}}); 
 			}); 	require("pages/companyManage/Amodule/cardInformationForm/cardInformation/cardInformation.js");
 		__wxRoute = 'pages/companyManage/Amodule/cardInformationForm/editTip/editTip';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/cardInformationForm/editTip/editTip.js';	define("pages/companyManage/Amodule/cardInformationForm/editTip/editTip.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{},data:{},methods:{}}); 
 			}); 	require("pages/companyManage/Amodule/cardInformationForm/editTip/editTip.js");
 		__wxRoute = 'pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.js';	define("pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{modalList:{type:Array,value:[],observer:function(t){t&&t.length&&this.setData({modalListData:t})}},entId:{type:[String,Number]},companyState:{type:String,value:[],observer:function(t){"到期"==t&&this._gainEntInfoMsg()}}},data:{current:0,modalListData:[],entInfoMsg:{}},methods:{_gainEntInfoMsg:function(){var e=this;console.log("this.data.entId",this.data.entId),t.setRequest({url:"tEntInfoGainEntInfoMsg",data:{entId:this.data.entId}},(function(t){e.setData({entInfoMsg:t})}))},_swiperChange:function(t){this.setData({current:t.detail.current}),this.triggerEvent("swiperChange",t.detail.current)}}}); 
 			}); 	require("pages/companyManage/Amodule/cardInformationForm/modalStyle/modalStyle.js");
 		__wxRoute = 'pages/companyManage/Amodule/cardInformationForm/record/record';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/cardInformationForm/record/record.js';	define("pages/companyManage/Amodule/cardInformationForm/record/record.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{recordState:{type:String,value:"",observer:function(){this.setData({animationPosition:"up"})}},recordData:{type:Array,value:[],observer:function(t){this.setData({listData:t})}},notClaimData:{type:Array,value:[]}},data:{animationPosition:"",listData:[]},pageLifetimes:{show:function(){}},methods:{_ss:function(){},_back:function(){var t=this;this.setData({animationPosition:"down"}),setTimeout((function(){t.triggerEvent("close")}),200)},_share:function(){this.triggerEvent("share")},_claim:function(){this.triggerEvent("claim")}}}); 
 			}); 	require("pages/companyManage/Amodule/cardInformationForm/record/record.js");
 		__wxRoute = 'pages/companyManage/Amodule/cardInformationForm/renewal/renewal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/cardInformationForm/renewal/renewal.js';	define("pages/companyManage/Amodule/cardInformationForm/renewal/renewal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{},data:{},methods:{_renewal:function(){for(var e=getCurrentPages(),a={},t=0;t<e.length;t++)if("pages/company/company"===e[t].route){a=e[t].data.companyData;break}wx.navigateTo({url:"/pages/companyManage/servicePay/servicePay?company=".concat(a.entName,"&comStatus=").concat(a.companyPayStatus,"&restDate=").concat(a.serviceRestDate,"&newDate=").concat(a.serviceNewDate,"&entId=").concat(a.entId,"&restDay=").concat(a.serviceRestDay)})}}}); 
 			}); 	require("pages/companyManage/Amodule/cardInformationForm/renewal/renewal.js");
 		__wxRoute = 'pages/companyManage/Amodule/createBusinesscard/createBusinesscard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/createBusinesscard/createBusinesscard.js';	define("pages/companyManage/Amodule/createBusinesscard/createBusinesscard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty")),e=getApp(),n=require("../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{cardList:{type:Array,value:null,observer:function(t,a){console.log("ddd",t),this.setData({num:t.length>0?1:0})}},entName:{type:String,value:"",observer:function(t,a){this.setData({"createCard[1].value":t})}},pages:{type:String,value:""},entId:{type:String,value:""},openId:{type:String,value:""},formTitle:{type:String,value:""},listTtile:{type:String,value:""},adminName:{type:String,value:""},deptId:{type:String,value:""},constructorType:{type:String,value:""},teamData:{type:Object,value:"",observer:function(t,a){for(var e=JSON.parse(t.tplConfig),n=0;n<e.length;n++)console.log(e[n]),"addr1"===e[n].tplConfig&&""!==e[n].value&&this.setData({"createCard[5].value":e[n].value})}}},data:{num:1,animationData:{},caraAnimationData:{},choiceIndex:null,cardData:null,creatAdd:"",createCard:[{type:"name",value:"",status:!1},{type:"company",value:"",status:!1},{type:"job",value:"",status:!1},{type:"mophone1",value:"",status:!1},{type:"wechat",value:"",status:!1},{type:"addr1",value:"",status:!1}]},pageLifetimes:{show:function(){var a=(t=getCurrentPages())[t.length-1].data;this.setData({"createCard[5].value":a.creatAdd})}},methods:{addMackNew:function(){e.burying.setPoint(e,600);var t=this.data.createCard[5].value?this.data.createCard[5].value:"";this.data.createCard[5].notpass&&this.setData({"createCard[5].notpass":!1}),console.log(t),wx.navigateTo({url:"../addrMatch/addrMatch?creatAdd="+t})},selectCards:function(t){e.burying.setPoint(e,592);var a=t.currentTarget.dataset;null==a.entid&&this.setData({choiceIndex:a.key,cardData:this.data.cardList[a.key]})},businessCards:function(){e.burying.setPoint(e,593),this.setData({num:0}),this.showModal()},closeW:function(){this.triggerEvent("closeWindow")},createTeam:function(t){var a=this;"createTeam"==this.data.pages?(wx.showToast({title:"提交中",icon:"loading",mask:!0,duration:8e3}),e.setRequest({url:"createTeam",method:"post",data:{avatarUrl:e.touxiang.avatarUrl,entName:this.data.entName,nickName:e.touxiang.nickName,openId:e.client.openid,vcardId:this.data.cardData.cardId}},(function(t){wx.setStorageSync("entId",t.entId),a.triggerEvent("teamInfo"),wx.hideToast()}))):(this.data.pages,this.joinTeam(t))},joinTeam:function(t){var a=this;console.log("lllllllllllll",{entId:this.data.entId,entName:this.data.entName,vcardId:this.data.cardData.cardId,deptId:this.data.deptId}),"hideToast"!==t&&wx.showToast({title:"提交中.",icon:"loading",mask:!0,duration:8e3}),e.setRequest({url:"joinTeam",method:"post",data:{entId:this.data.entId,entName:this.data.entName,vcardId:this.data.cardData.cardId,deptId:this.data.deptId}},(function(t){console.log("joinTeam.res",t),wx.hideToast(),wx.setStorageSync("entId",a.data.entId),"constructor"==a.data.pages?a.replaceTeamAdministrator():"joinenterprise"==a.data.pages&&(e.inviteTeamGuidePage=!0,wx.switchTab({url:"../../cardMain/cardMain"}))}))},replaceTeamAdministrator:function(){var t=this;e.setRequest({url:"replaceTeamAdministrator",method:"post",data:{oldOpenId:this.data.openId,newOpenId:e.client.openid,entId:this.data.entId,newHeadUrl:e.touxiang.avatarUrl,newPetName:e.touxiang.nickName,vcardId:this.data.cardData.cardId,source:"scancode"==this.data.constructorType?1:2}},(function(a){var e=a.adminOpenId?"200":a.status,n=a.data?a.data:"";a.adminOpenId?wx.redirectTo({url:"../handoverStatus/handoverStatus?status="+e+"&data="+n+"&adminOpenId="+a.adminOpenId+"&entId="+t.data.entId+"&adminName="+t.data.adminName+"&entName="+t.data.entName+"&isAdmin=1&userOpenId="+a.adminOpenId}):wx.redirectTo({url:"../handoverStatus/handoverStatus?status="+e+"&data="+n})}))},send:function(t){console.log(t)},creatCard:function(){var t=this,a=this.data.createCard;if(!this.data.createLoading){this.data.createLoading=!0;for(var e=0;e<a.length;e++)"name"!=a[e].type&&"company"!=a[e].type&&"job"!=a[e].type||""==a[e].value&&(a[e].status=!0,this.setData({createCard:a}));if(""!==a[0].value&&""!==a[1].value&&""!==a[2].value){wx.showToast({title:"提交中",icon:"loading",mask:!0,duration:8e3});var i=this.testArrFun(a);this.contentTestFun(i,(function(){t.createCardTeam(a,(function(a){t.setData({"cardData.cardId":a.data.id}),t.createTeam("hideToast")}),(function(){t.failFun()}))}),(function(a){for(var e=a.errorArr,i=t.data.createCard,r=0;r<e.length;r++)i[e[r]].notpass=!0;t.setData({createCard:i}),t.failFun(),n.testShowmodal()}),(function(){t.failFun()}))}else this.failFun()}},testArrFun:function(t){for(var a=t,e=[],n=0;n<a.length;n++)e.push(a[n].value);return e},contentTestFun:function(t,a,n,i){e.contentTestFun(t,(function(t){t.allwords<=0?a&&a():n&&n(t)}),(function(){i&&i()}))},failFun:function(){this.data.createLoading=!1,n.hidetoast()},createCardTeam:function(t,n,i){var r,s=t;e.setRequest({url:"createCardTeam",method:"post",data:(r={openid:e.client.openid,phone1:"",email1:"",website:"",wechat:"",fax:"",pinyin:"",bpUrl:"",customAvatar:e.touxiang.avatarUrl,showconfig:{custom:[],configShow:{mophone1:!0,wechat:!0,addr1:!0}},tempId:"TKWhite-NewEmpty",folder:"TEMPLATES_V9",name:s[0].value,company:s[1].value,job:s[2].value,mophone1:s[3].value},(0,a.default)(r,"wechat",s[4].value),(0,a.default)(r,"addr1",s[5].value),r)},(function(t){console.log("jjjj",t),n&&n(t)}),(function(){i&&i()}))},input:function(t){var e=Number(t.currentTarget.dataset.index),n=this.data.createCard,i="createCard["+e+"].value";if(this.setData((0,a.default)({},i,t.detail.value)),n[e].notpass||n[e].status){var r,s="createCard["+e+"].notpass",d="createCard["+e+"].status";this.setData((r={},(0,a.default)(r,s,!1),(0,a.default)(r,d,!1),r))}},getUserMessa:function(t){var a=this,n=t.currentTarget.dataset;t.detail.iv&&e.setUnion(t.detail,(function(){"joinTeam"==n.button?(console.log("表单"),e.burying.setPoint(e,601),a.creatCard()):(e.burying.setPoint(e,594),a.createTeam())}))},focus:function(t){switch(Number(t.currentTarget.dataset.index)){case 0:e.burying.setPoint(e,595);break;case 1:e.burying.setPoint(e,597);break;case 2:e.burying.setPoint(e,596);break;case 3:e.burying.setPoint(e,598);break;default:e.burying.setPoint(e,599)}},showModal:function(){var t=this,a=wx.createAnimation({duration:400,timingFunction:"ease"});this.animation=a;var e=setTimeout((function(){t.slideIn(),clearTimeout(e),e=null}),100)},slideIn:function(){this.animation.translateY(0).step(),1==this.data.num?(this.selectDefaultFun(),this.setData({animationData:this.animation.export()})):this.setData({caraAnimationData:this.animation.export()})},selectDefaultFun:function(){for(var t,a=!1,e=this.data.cardList,n=0;n<e.length;n++)if(null==e[n].entId){t=n,a=!0;break}a&&this.setData({choiceIndex:t,cardData:e[t]})},slideDown:function(){this.animation.translateY(850).step(),1==this.data.num?this.setData({animationData:this.animation.export()}):this.setData({caraAnimationData:this.animation.export()}),this.setData({num:null})}}}); 
 			}); 	require("pages/companyManage/Amodule/createBusinesscard/createBusinesscard.js");
 		__wxRoute = 'pages/companyManage/Amodule/editTeamMessage/editTeamMessage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/editTeamMessage/editTeamMessage.js';	define("pages/companyManage/Amodule/editTeamMessage/editTeamMessage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{teamMessage:{type:Object,value:{},observer:function(t){console.log("observer",t),this._baseFun(t)}}},data:{loading:!1,canSave:!1,contentTestFail:!1,attestation:!1},methods:{_baseFun:function(t){t.entName&&t.entName.trim().length>0?this.setData({canSave:!0}):this.setData({canSave:!1})},_focus:function(){t.burying.setPoint(t,738)},_input:function(t){var e=t.currentTarget.dataset.n,a=t.detail.value;this.data.teamMessage[e]=a,a&&a.trim().length>0?!this.data.canSave&&this.setData({canSave:!0}):this.data.canSave&&this.setData({canSave:!1}),this.data.contentTestFail&&this.setData({contentTestFail:!1}),this.data.attestation&&this.setData({attestation:!1})},_save:function(){var a=this;if(!this.data.loading){this.setData({loading:!0}),t.burying.setPoint(t,737);var n=this.data.teamMessage.entName,s=this.data.teamMessage.entId,i=[];i.push(n),t.contentTestFun(i,(function(t){t.allwords<=0?a._teamAttestation(n,(function(t){console.log("rrr",t),t.checkResult?(a.setData({attestation:!0}),a.closeLoading()):a._teamMessageSave({entName:n,entId:s},(function(t){a.triggerEvent("save",n)}),(function(){a.closeLoading()}))}),(function(){a.closeLoading()})):(e.testShowmodal(),a.setData({contentTestFail:!0}),a.closeLoading())}),(function(){a.closeLoading()}))}},closeLoading:function(){this.setData({loading:!1})},_teamAttestation:function(e,a,n){t.setRequest({url:"wxEntExpandCheckEntName",method:"POST",data:{entName:e}},(function(t){a&&a(t)}),(function(){n&&n()}))},_teamMessageSave:function(e,a,n){t.setRequest({url:"wxEntExpandEditorTeam",method:"POST",data:{entName:e.entName,entId:e.entId}},(function(t){a&&a(t)}),(function(){n&&n()}))},_cancel:function(){t.burying.setPoint(t,736),this.triggerEvent("cancel")}}}); 
 			}); 	require("pages/companyManage/Amodule/editTeamMessage/editTeamMessage.js");
 		__wxRoute = 'pages/companyManage/Amodule/intro/intro';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/intro/intro.js';	define("pages/companyManage/Amodule/intro/intro.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{pageOrigin:String,introValue:String,introTest:{value:!1,type:Boolean,observer:function(t){console.log("introTest",t),this.setData({testFail:t})}},pageFlag:String},data:{areaShow:!1,areaFocus:!1,testFail:!1,adjustPosition:!1},methods:{_textAreaForce:function(){var t=this;this.setData({areaShow:!0}),setTimeout((function(){t.setData({areaFocus:!0})}),200)},_input:function(t){this.data.introValue=t.detail.value,this.triggerEvent("introFun",this.data.introValue)},_focus:function(){t.burying.setPoint(t,1071),this.triggerEvent("testFailFunc",{index:3})},_blur:function(t){this.setData({areaShow:!1,introValue:this.data.introValue}),this.triggerEvent("introFun",this.data.introValue)}}}); 
 			}); 	require("pages/companyManage/Amodule/intro/intro.js");
 		__wxRoute = 'pages/companyManage/Amodule/iosPay/iosPay';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/iosPay/iosPay.js';	define("pages/companyManage/Amodule/iosPay/iosPay.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{payStatus:String,restDay:String,restDate:String,newDate:String,miniCompany:Object,companyName:String,entId:{type:String,value:"",observer:function(t){t&&(console.log("_entId",t),this._getPayFunc(t))}}},data:{compatibleManage:t.compatibleManage,payManagement:{},rightsList:[{imgUrl:"/images/companyWeb/icon-service-1.png",topic:"统一名片样式",infor:"提供可上传logo的企业专享样式，也支持自定义样式，彰显企业文化"},{imgUrl:"/images/companyWeb/icon-service-2.png",topic:"批量制作名片",infor:"支持手动录入、excel导入、邀请填写等多种方式制作名片，1分钟满足上百人名片需求"},{imgUrl:"/images/companyWeb/icon-service-3.png",topic:"部门管理",infor:"支持将员工按部门分配不同样式，部门数量不限"},{imgUrl:"/images/companyWeb/icon-service-4.png",topic:"企业微官网",infor:"制作企业自己的手机端官网，自动在每个员工名片上展示，让客户更高效地了解业务"},{imgUrl:"/images/companyWeb/icon-service-5.png",topic:"认证标识",infor:"认证后的企业，员工的名片均有认证标识，让假名片无所遁形"},{imgUrl:"/images/companyWeb/icon-service-6.png",topic:"共享客户资源",infor:"员工可将个人收到的名片共享到企业客户名片库，提高协作效率"},{imgUrl:"/images/companyWeb/icon-service-7.png",topic:"电脑管理后台",infor:"电脑端+小程序双平台让名片管理事半功倍"}],bgServiceNomal:t.source.bgServiceNomal,bgServiceTry:t.source.bgServiceTry},methods:{contact:function(){t.burying.setPoint(t,963)},_toUserAgreement:function(){t.burying.setPoint(t,964),wx.navigateTo({url:"/pages/companyManage/serviceAgreement/serviceAgreement"})},_getPayFunc:function(a){var e=this;t.setRequest({url:"getPay",data:{entId:a}},(function(t){e.setData({payManagement:t}),console.log(e.data.payManagement)}),(function(){}))},_payMoney:function(){var a=this.data.payManagement;"android"==this.data.platForm?(wx.navigateTo({url:"/pages/companyManage/waitingPay/waitingPay?shishou=".concat(a.shishou,"&yingshou=").concat(a.yingshou,"&company=").concat(this.data.company,"&comStatus=").concat(this.data.payStatus,"&restDate=").concat(this.data.restDate,"&newDate=").concat(this.data.serviceNewDate,"&entId=").concat(this.data.entId)}),"到期"==this.data.payStatus?t.burying.setPoint(t,913):t.burying.setPoint(t,912)):(wx.navigateTo({url:"/pages/companyManage/serviceIntro/serviceIntro?shishou=".concat(a.shishou,"&yingshou=").concat(a.yingshou,"&company=").concat(this.data.company,"&comStatus=").concat(this.data.payStatus,"&restDate=").concat(this.data.restDate,"&newDate=").concat(this.data.serviceNewDate,"&entId=").concat(this.data.entId,"&restDay=").concat(this.data.restDay,"&restDate=").concat(this.data.restDate,"&newDate=").concat(this.data.newDate)}),"到期"==this.data.payStatus?t.burying.setPoint(t,913):t.burying.setPoint(t,912))}}}); 
 			}); 	require("pages/companyManage/Amodule/iosPay/iosPay.js");
 		__wxRoute = 'pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.js';	define("pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{},data:{canvasCheck:!0},methods:{}}); 
 			}); 	require("pages/companyManage/Amodule/joinenterpriseClaim/claimFailLayer/claimFailLayer.js");
 		__wxRoute = 'pages/companyManage/Amodule/miniweb/camera/camera';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/miniweb/camera/camera.js';	define("pages/companyManage/Amodule/miniweb/camera/camera.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{photoList:{type:Array,value:[],observer:function(t){this.setData({photoCon:t})}}},data:{photoCon:[],upldImagesComplete:!0},methods:{_addImages:function(a){var o=9-this.data.photoCon.length,n=this;if(!this.data.upldImagesComplete)return e.showtoast("上传中...","loading",1500),0;function s(t){wx.chooseImage({count:o,sourceType:[t],sizeType:["compressed"],success:function(t){n.data.upldImageNumber=0,n.data.upldImagesComplete=!1,n._upldImges(t.tempFilePaths),t.tempFilePaths.length}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:s("camera");break;case 1:s("album")}}catch(t){}}}),"intro"==a.currentTarget.dataset.detail?t.burying.setPoint(t,849):t.burying.setPoint(t,850)},_upldImges:function(a){var o=this;e.showtoast("图片上传中"+(this.data.upldImageNumber+1)+"/"+a.length,"loading",2e4),t.photoIdentyFun(a[this.data.upldImageNumber],(function(n){if(!n)return o.data.upldImagesComplete=!0,e.hidetoast(),o.triggerEvent("photoComplete",o.data.photoCon),e.testImgShowmodal(),!1;t.setUpldFile({url:"uploadAlbumImg",filePath:a[o.data.upldImageNumber]},(function(t){o.data.photoCon.push(t),o.setData({photoCon:o.data.photoCon})}),(function(){e.showtoast("上传失败","none",1e3)}),(function(t){o.data.upldImageNumber++,o.data.upldImageNumber<a.length?o._upldImges(a):o.data.upldImageNumber==a.length&&(o.data.upldImagesComplete=!0,o.triggerEvent("photoComplete",o.data.photoCon),e.hidetoast())}))}),(function(){o.data.upldImageNumber++,o.data.upldImageNumber<a.length?o._upldImges(a):o.data.upldImageNumber==a.length&&(o.data.upldImagesComplete=!0,o.triggerEvent("photoComplete",o.data.photoCon),e.hidetoast())}))},_throwImage:function(e){this.data.photoCon.splice(e.currentTarget.dataset.throwindex,1),this.setData({photoCon:this.data.photoCon}),this.triggerEvent("photoDelete",this.data.photoCon),t.burying.setPoint(t,852)},_imagePreview:function(t){this.data.upldImagesComplete&&this.triggerEvent("photoPreview",t.currentTarget.dataset.index)}}}); 
 			}); 	require("pages/companyManage/Amodule/miniweb/camera/camera.js");
 		__wxRoute = 'pages/companyManage/Amodule/miniweb/detail/detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/miniweb/detail/detail.js';	define("pages/companyManage/Amodule/miniweb/detail/detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Component({properties:{pageName:{type:String,value:"",observer:function(e){}},webData:{type:Object,value:{},observer:function(e){console.log("detail.webData",e),this._renderData(e)}},autherizedData:{type:Object,value:{},observer:function(e){console.log("detail.autherizedData",e)}}},data:{defaultName:"",minibac:e.source.prefix+"img/companyManage/miniweb_bac20200713.png",logo:"",fullname:"",entName:"",slogan:"",intro:"",products:[],website:"",industryValue:"",companyPhoto:[],companyVideo:[],bg:"",autherizedDetailShow:!1,scrollX:!0,swiperShow:!1},methods:{_renderData:function(e){if(this.setData({logo:e.logo?e.logo:"",fullname:e.fullname?e.fullname:"",slogan:e.slogan?e.slogan:"",intro:e.intro?e.intro:"",products:e.products?e.products:[],website:e.website?e.website:"",companyPhoto:e.companyPhoto?e.companyPhoto:[],companyVideo:e.companyVideo?e.companyVideo:[],bg:e.bg?e.bg:"",defaultName:e.fullname?e.fullname.slice(0,1):""}),e.industryCode&&e.industryName){var t=e.industryName.split(",");this.setData({industryValue:t[1]})}},_autherizedLook:function(){var e=this;if(this.data.autherizedDetailShow)this.setData({autherizedDetailShow:!1});else try{wx.createSelectorQuery().in(e).select("#autherized-id").boundingClientRect((function(t){t&&t.left&&t.left>34&&e.setData({markLeft:t.left-34}),e.setData({autherizedDetailShow:!0})})).exec()}catch(t){e.setData({autherizedDetailShow:!0})}},_preview:function(e){for(var t=this.data.companyPhoto,a=[],o=0;o<t.length;o++)a.push(t[o].url);wx.previewImage({current:a[e.currentTarget.dataset.i],urls:a})},_videoPlay:function(e){console.log("hhhhh");var t=null;this.setData({videoPath:e.currentTarget.dataset.videosrc}),clearTimeout(t),t=null,this.videoContent=wx.createVideoContext("myVideo",this);var a=this.videoContent;t=setTimeout((function(){a.requestFullScreen(),a.play()}),100)},_sceenchange:function(e){e.detail&&!e.detail.fullScreen&&this.videoContent.stop()},_proClick:function(e){this.setData({swiperCon:{data:this.data.products,ind:e.currentTarget.dataset.i},swiperShow:!0})},_proTap:function(){this.setData({swiperShow:!1})}}}); 
 			}); 	require("pages/companyManage/Amodule/miniweb/detail/detail.js");
 		__wxRoute = 'pages/companyManage/Amodule/miniweb/productionEdit/productionEdit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.js';	define("pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{proTitle:{type:String,value:"",observer:function(t){var e="";e=t&&t.trim().length>0?t:"",this.setData({title:e,titleNumber:e.length})}},proIntro:{type:String,value:"",observer:function(t){var e="";e=t&&t.trim().length>0?t:"",this.setData({intro:e})}},proPhoto:{type:Array,value:[],observer:function(t){this.setData({photo:t})}}},data:{systemInfo:t.systemInfo,title:"",intro:"",photo:[],titleNumber:0,introInput:!1,introValue:"",testRed:{}},methods:{_titlefocus:function(e){t.burying.setPoint(t,855),this.setData({"testRed.title":!1})},_titleinput:function(t){this.setData({titleNumber:t.detail.value.length})},_titleblur:function(t){this.setData({title:t.detail.value&&t.detail.value.trim().length>0?t.detail.value:"",titleNumber:t.detail.value&&t.detail.value.trim().length>0?t.detail.value.length:0})},_introTap:function(){t.burying.setPoint(t,856),this.setData({"testRed.intro":!1,introInput:!0,introValue:this.data.intro})},_introInput:function(t){this.setData({intro:t.detail.value})},_introBlur:function(t){this.setData({intro:t.detail.value&&t.detail.value.trim().length>0?t.detail.value:"",introInput:!1})},_photoTap:function(){if(t.burying.setPoint(t,857),!(this.data.loading||this.data.photo.length>=3)){var e=this;wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:a("camera");break;case 1:a("album")}}catch(t){}}})}function a(t){var a=3-e.data.photo.length;wx.chooseImage({count:a,sourceType:[t],sizeType:["compressed"],success:function(t){e.data.loading=!0,e.data.upldImageNumber=0,e._upldImage(t.tempFilePaths)}})}},_upldImage:function(a){var i=this,n=this;e.showtoast("图片上传中"+(this.data.upldImageNumber+1)+"/"+a.length,"loading",2e4),t.photoIdentyFun(a[n.data.upldImageNumber],(function(o){o?t.setUpldFile({url:"uploadAlbumImg",filePath:a[n.data.upldImageNumber]},(function(t){n.data.photo.push(t),n.setData({photo:n.data.photo})}),"",(function(){n.data.upldImageNumber++,n.data.upldImageNumber<a.length?n._upldImage(a):n.data.upldImageNumber==a.length&&(n.data.loading=!1,i._upldComplete(),e.hidetoast())})):(n.data.loading=!1,e.hidetoast(),i._upldComplete(),e.testImgShowmodal())}),(function(){n.data.upldImageNumber++,n.data.upldImageNumber<a.length?n._upldImage(a):n.data.upldImageNumber==a.length&&(n.data.loading=!1,i._upldComplete(),e.hidetoast())}))},_upldComplete:function(){this.triggerEvent("upldComplete",this.data.photo)},_preview:function(t){this.data.loading||this.triggerEvent("previewImage",t.currentTarget.dataset.i)},_del:function(t){this.data.photo.splice(t.currentTarget.dataset.i,1),this.setData({photo:this.data.photo})},_saveDisabled:function(){t.burying.setPoint(t,858),wx.showToast({title:"请检查产品信息是否填写完整",icon:"none"})},_save:function(){var e=this;t.burying.setPoint(t,858),this.data.loading||(this.data.loading=!0,this._contentTest((function(){e.triggerEvent("savePro",{title:e.data.title,intro:e.data.intro,photo:e.data.photo})}),(function(t){e._testFail(t),e.data.loading=!1})))},_contentTest:function(e,a){var i=[this.data.title,this.data.intro];t.contentTestFun(i,(function(t){t.allwords<=0?e&&e():a&&a(t.errorArr)}),(function(){a&&a([])}))},_testFail:function(t){for(var a={},i=0;i<t.length;i++)0==t[i]?a.title=!0:1==t[i]&&(a.intro=!0);this.setData({testRed:a}),t.length>0&&e.testShowmodal()}}}); 
 			}); 	require("pages/companyManage/Amodule/miniweb/productionEdit/productionEdit.js");
 		__wxRoute = 'pages/companyManage/Amodule/miniweb/productionPreview/productionPreview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.js';	define("pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{pageName:{type:String,value:"",observer:function(t){this._productViewHeight(t)}},swiperCon:{type:Object,value:{ind:"",data:[]},observer:function(t){this._initFun(t)}}},data:{systemInfo:t.systemInfo,current:0,swiper0:1,swiper1:!1,swiper2:!1,startIndex:0,swiperShow:!0,circular:!1,customIf:!1,swiper0ImageCurrent:0,swiper1ImageCurrent:0,swiper2ImageCurrent:0,productViewHeight:300},methods:{_ss:function(){},_productViewHeight:function(t){var e,i=.86,r=this.data.systemInfo;r.screenHeight;"miniWeb"==t&&(i=.86,this.setData({customIf:!0})),e=r.screenHeight*r.shiftX*i,console.log("ssss",this.data.systemInfo,e),this.setData({productViewHeight:e})},_itemTap:function(){this.triggerEvent("proTap")},_initFun:function(t){for(var e=this,i=0;i<t.data.length;i++)t.data[i].smark=i;var r=t.data,s=t.ind,a=!0,n=!0,u=!0,c=!1,o=0,p=s;1==r.length?(a=r[p],n=!1,u=!1):2==r.length?(a=r[0],n=r[1],u=!1,o=0==p?0:1,setTimeout((function(){e.setData({current:o})}),500)):(a=r[p],n=p+1>r.length-1?r[0]:r[p+1],u=p-1<0?r[r.length-1]:r[p-1],c=!0),1==r.length?(a=r[p],n=!1,u=!1):2==r.length?(a=r[0],n=r[1],u=!1,o=0==p?0:1,setTimeout((function(){e.setData({current:o})}),500)):(a=r[p],n=p+1>r.length-1?r[0]:r[p+1],u=p-1<0?r[r.length-1]:r[p-1],c=!0),this.setData({swiper0:a,swiper1:n,swiper2:u,startIndex:p,circular:c})},circularFun:function(t,e){var i=!0;(0==t||t==e)&&(i=!1),this.data.swiperCircular!=i&&this.setData({swiperCircular:i})},swiperchange:function(t){var e=this;if("touch"!=t.detail.source)return!1;setTimeout((function(){e.setData({scrollTop:0})}),500)},swiperchangeNew:function(t){var e=this;if("touch"!=t.detail.source)return!1;var i=t.detail.current,r=this.data.current,s=this.data.swiperCon.data,a=s.length,n=this.data.startIndex,u={};switch(i){case 0:!function(){2==r&&(n+1==a-1?(n++,u.swiper1=s[0]):n+1>a-1?(n=0,u.swiper1=s[1]):(n++,u.swiper1=s[n+1]));1==r&&(n-1==0?(n--,u.swiper2=s[a-1]):n-1<0?(n=a-1,u.swiper2=s[n-1]):(n--,u.swiper2=s[n-1]))}();break;case 1:!function(){0==r&&(n+1==a-1?(n++,u.swiper2=s[0]):n+1>a-1?(n=0,u.swiper2=s[1]):(n++,u.swiper2=s[n+1]));2==r&&(n-1==0?(n--,u.swiper0=s[a-1]):n-1<0?(n=a-1,u.swiper0=s[n-1]):(n--,u.swiper0=s[n-1]))}();break;case 2:!function(){1==r&&(n+1==a-1?(n++,u.swiper0=s[0]):n+1>a-1?(n=0,u.swiper0=s[1]):(n++,u.swiper0=s[n+1]));0==r&&(n-1==0?(n--,u.swiper1=s[a-1]):n-1<0?(n=a-1,u.swiper1=s[n-1]):(n--,u.swiper1=s[n-1]))}()}this.data.current=i,this.data.startIndex=n,setTimeout((function(){e.setData(u)}),200),setTimeout((function(){e.setData({scrollTop:0})}),500)},_swiperChangeImage0:function(t){t.detail&&this.setData({swiper0ImageCurrent:t.detail.current<0?0:t.detail.current})},_swiperChangeImage1:function(t){t.detail&&this.setData({swiper1ImageCurrent:t.detail.current<0?0:t.detail.current})},_swiperChangeImage2:function(t){t.detail&&this.setData({swiper2ImageCurrent:t.detail.current<0?0:t.detail.current})}}}); 
 			}); 	require("pages/companyManage/Amodule/miniweb/productionPreview/productionPreview.js");
 		__wxRoute = 'pages/companyManage/Amodule/miniweb/video/video';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/miniweb/video/video.js';	define("pages/companyManage/Amodule/miniweb/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../@babel/runtime/helpers/toConsumableArray")),t=getApp();Component({properties:{videoList:{type:Array,value:[],observer:function(e){this.setData({videoCon:e})}}},data:{videoCon:[]},methods:{_uploadVideo:function(){var i=this;t.burying.setPoint(t,851),this.data.upladding||wx.chooseVideo({maxDuration:15,compressed:!0,success:function(o){return console.log("文件",o,"大小",o.size/1048576),i.data.upladding=!1,o.tempFilePath.toLowerCase().endsWith(".mp4")?o.duration>15||o.size/1048576>25?(wx.showToast({title:"上传视频需要小于15秒且小于25MB",icon:"none",mask:!0,duration:2e3}),void(i.data.upladding=!1)):(wx.showLoading({title:"视频上传中"}),void t.setUpldFile({url:"video",method:"POST",filePath:o.tempFilePath},(function(t){wx.showToast({title:"视频上传成功"}),i.data.upladding=!1,i.setData({videoCon:[{upVideoPoster:t.imgUrl,videoPath:t.videoUrl}].concat((0,e.default)(i.data.videoCon))}),i.triggerEvent("videoComplete",i.data.videoCon)}),"",(function(){setTimeout((function(){i.data.upladding=!1}),100)}))):(wx.showToast({title:"请上传MP4格式的视频",icon:"none",mask:!0,duration:2e3}),void(i.data.upladding=!1))},fail:function(e){}})},_deleteVideo:function(e){var i=e.currentTarget.dataset.videoIdx,o=this.data.videoCon.slice(0,i).concat(this.data.videoCon.slice(i+1));this.setData({videoCon:o}),this.triggerEvent("videoDelete",this.data.videoCon),t.burying.setPoint(t,853)},_playVideo:function(e){var t=null;this.setData({videoPath:e.currentTarget.dataset.videoSrc}),clearTimeout(t),t=null,this.videoContent=wx.createVideoContext("myVideo",this);var i=this.videoContent;t=setTimeout((function(){i.requestFullScreen(),i.play()}),100)},_sceenchange:function(e){e.detail&&!e.detail.fullScreen&&this.videoContent.stop()}}}); 
 			}); 	require("pages/companyManage/Amodule/miniweb/video/video.js");
 		__wxRoute = 'pages/companyManage/Amodule/renewalTip/renewalTip';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/renewalTip/renewalTip.js';	define("pages/companyManage/Amodule/renewalTip/renewalTip.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{comStatus:String},data:{},methods:{_renewal:function(){"到期"!==this.data.comStatus?t.burying.setPoint(t,936):t.burying.setPoint(t,937),this.triggerEvent("renewal")}}}); 
 			}); 	require("pages/companyManage/Amodule/renewalTip/renewalTip.js");
 		__wxRoute = 'pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.js';	define("pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{shareData:{type:Object,value:{},observer:function(e){console.log("e",e)}}},data:{pre:"https://avatar-1255379270.cosbj.myqcloud.com/s_"},methods:{_ss:function(){},_close:function(){this.triggerEvent("closeLayer")},_share:function(){this.triggerEvent("shareLayer")}}}); 
 			}); 	require("pages/companyManage/Amodule/shareCardsLayer/shareCardsLayer.js");
 		__wxRoute = 'pages/companyManage/Amodule/video/video';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/video/video.js';	define("pages/companyManage/Amodule/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/toConsumableArray")),t=getApp();Component({properties:{videoList:Array,pageFlag:String},data:{hideVideo:!0},methods:{_uploadVideo:function(){t.burying.setPoint(t,1073);var i=this;console.log(),this.data.upladding||wx.chooseVideo({maxDuration:15,compressed:!0,success:function(o){console.log("文件",o,"大小",o.size/1048576),i.data.upladding=!1,o.tempFilePath.toLowerCase().endsWith(".mp4")?o.duration>15||o.size/1048576>25?wx.showToast({title:"上传视频需要小于15秒且小于25MB",icon:"none",mask:!0,duration:2e3}):(wx.showLoading({title:"视频上传中"}),t.setUpldFile({url:"video",method:"POST",filePath:o.tempFilePath},(function(t){wx.showToast({title:"视频上传成功"}),i.data.upladding=!1,i.setData({videoList:[{upVideoPoster:t.imgUrl,videoPath:t.videoUrl}].concat((0,e.default)(i.data.videoList))}),i.triggerEvent("videoFun",i.data.videoList)}),"",(function(){setTimeout((function(){i.data.upladding=!1}),100)}))):wx.showToast({title:"请上传MP4格式的视频",icon:"none",mask:!0,duration:2e3})},fail:function(e){}})},_deleteVideo:function(e){var t=e.currentTarget.dataset.videoIdx,i=this.data.videoList.slice(0,t).concat(this.data.videoList.slice(t+1));this.setData({videoList:i}),this.triggerEvent("videoFun",this.data.videoList)},_playVideo:function(e){var t=this,i=null;this.setData({videoPath:e.currentTarget.dataset.videoSrc}),clearTimeout(i),i=null,this.videoContent=wx.createVideoContext("myVideo",this);var o=this.videoContent;i=setTimeout((function(){t.setData({video:o}),o.requestFullScreen(),o.play(),t.setData({hideVideo:!1}),t.triggerEvent("trigger",{event:"hideArea",val:!1})}),100)},_sceenchange:function(e){e.detail&&!e.detail.fullScreen&&this.videoContent.stop()}}}); 
 			}); 	require("pages/companyManage/Amodule/video/video.js");
 		__wxRoute = 'pages/companyManage/Amodule/wxPay/wxPay';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/Amodule/wxPay/wxPay.js';	define("pages/companyManage/Amodule/wxPay/wxPay.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty"));function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var n=getApp(),a=require("../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{entId:{type:String,value:"",observer:function(t){t&&this._getPayFunc(t)}},cacheCompany:Object,payStatus:String,miniCompany:Object,companyName:String,scrollTop:{type:Number,value:0,observer:function(t){if(t){var e=!1;e=this.data.canSeePayMaxScrollTop<t,this.setData({isScroll:e})}}},freshPayMoney:{type:String,value:0,observer:function(t){0!=t&&this._getPayFunc(this.data.entId)}}},data:{rightsList:[{imgUrl:"/images/companyWeb/tequan-icon-1.png",topic:"为员工制作名片"},{imgUrl:"/images/companyWeb/tequan-icon-2.png",topic:"企业标识"},{imgUrl:"/images/companyWeb/tequan-icon-3.png",topic:"专属样式"},{imgUrl:"/images/companyWeb/tequan-icon-4.png",topic:"部门分配"},{imgUrl:"/images/companyWeb/tequan-icon-5.png",topic:"企业微官网"},{imgUrl:"/images/companyWeb/tequan-icon-6.png",topic:"共享客户"},{imgUrl:"/images/companyWeb/tequan-icon-7.png",topic:"认证保护"},{imgUrl:"/images/companyWeb/tequan-icon-8.png",topic:"多平台管理"}],orderType:1,platForm:n.systemInfo.platform&&n.systemInfo.platform.toLowerCase(),showBulletLayer:!1,bgIospc:n.source.bgIospc,canSeePayMaxScrollTop:0,isScroll:!1},lifetimes:{attached:function(){this._getPayPositionFunc()}},methods:{_getPayFunc:function(t){var e=this;n.setRequest({url:"getPay",data:{entId:t}},(function(t){e.setData({payManagement:t})}),(function(){}))},_toUserAgreement:function(){n.burying.setPoint(n,964),wx.navigateTo({url:"/pages/companyManage/serviceAgreement/serviceAgreement"})},_choosePayFunc:function(t){var e=t.currentTarget.dataset.orderType,a=t.currentTarget.dataset.type;"1"==e?"试用"==a?n.burying.setPoint(n,1049):"到期"==a?n.burying.setPoint(n,1051):"付费"==a&&n.burying.setPoint(n,1062):"2"==e&&("试用"==a?n.burying.setPoint(n,1050):"到期"==a?n.burying.setPoint(n,1052):"付费"==a&&n.burying.setPoint(n,1063)),this.setData({orderType:e})},_payMoney:function(){"付费"==this.data.payStatus?n.burying.setPoint(n,933):"到期"==this.data.payStatus?n.burying.setPoint(n,913):"试用"==this.data.payStatus&&n.burying.setPoint(n,912),"ios"==this.data.platForm||"devtools"==this.data.platForm?this.setData({showBulletLayer:!0}):this._androidPayMoney()},_backgroundTap:function(){var t=this;this.selectComponent("#bulletLayer")._animationDown();var e=null;clearTimeout(e),e=setTimeout((function(){t.setData({showBulletLayer:!1})}),300)},_androidPayMoney:function(){var t=this;if(!this.data.paying){this.data.paying=!0;var e={};n.setRequest({method:"POST",url:"andriodWxPay",data:{entId:this.data.entId,orderType:this.data.orderType,openId:n.client.openid}},(function(n){e.package="prepay_id="+n.prepay_id,e.nonceStr=n.nonceStr,e.timeStamp=n.timeStamp,e.paySign=n.paySign,e.signType=n.signType,console.log("支付结果",e),e.success=function(t){wx.redirectTo({url:"/pages/companyManage/paySuccess/paySuccess"})},e.fail=function(t){console.log("res.fail",t)},wx.requestPayment(e),t.data.paying=!1}),(function(){t.data.paying=!1,a.showtoast("支付失败")}))}},_editTikect:function(){var t=this.data.entId;wx.navigateTo({url:"/pages/companyManage/fillTikect/fillTikect?entId=".concat(t,"&type=edit&pageFrom=waitingPay")})},contact:function(){n.burying.setPoint(n,963)},_toFillTikect:function(){n.burying.setPoint(n,953);var t=this.data.entId;wx.navigateTo({url:"/pages/companyManage/fillTikect/fillTikect?entId=".concat(t,"&type=build&pageFrom=waitingPay")})},_renewalRecord:function(){n.burying.setPoint(n,962);var t=this.data.entId;wx.navigateTo({url:"/pages/companyManage/buyRecords/buyRecords?entId=".concat(t)})},_toRight:function(a){var i=this.data.entId,o=this.data.orderType,r=function(n){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?e(Object(i),!0).forEach((function(e){(0,t.default)(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))}))}return n}({},a.currentTarget.dataset).index;try{n.burying.setPoint(n,1053+r)}catch(t){}this.triggerEvent("toRight",{index:r,entId:i,orderType:o})},_getPayPositionFunc:function(){var t=this.createSelectorQuery(),e=this;t.select("#payBtn").boundingClientRect(),t.selectViewport().scrollOffset(),t.exec((function(t){e.setData({canSeePayMaxScrollTop:t[0].top+t[0].height})}))}}}); 
 			}); 	require("pages/companyManage/Amodule/wxPay/wxPay.js");
 		__wxRoute = 'pages/companyManage/bindingSuccess/bindingSuccess';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/bindingSuccess/bindingSuccess.js';	define("pages/companyManage/bindingSuccess/bindingSuccess.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/bindingSuccess/bindingSuccess.js");
 		__wxRoute = 'pages/companyManage/handoverStatus/handoverStatus';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/handoverStatus/handoverStatus.js';	define("pages/companyManage/handoverStatus/handoverStatus.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{status:"",company:"",business:[]},onLoad:function(t){t.adminOpenId&&this.data.business.push({adminOpenId:t.adminOpenId,entId:t.entId,adminName:t.adminName,entName:t.entName,isAdmin:Number(t.isAdmin),userOpenId:t.userOpenId}),this.setData({status:t.status}),"1040"===t.status&&this.setData({company:t.data})},copy:function(){wx.setClipboardData({data:"www.microvcard.com",success:function(t){wx.getClipboardData({success:function(t){wx.showToast({title:"复制成功"})}})}})},enterprise:function(){t.burying.setPoint(t,605),wx.setStorageSync("entId",this.data.business[0].entId),wx.switchTab({url:"/pages/company/company"})}}); 
 			}); 	require("pages/companyManage/handoverStatus/handoverStatus.js");
 		__wxRoute = 'pages/companyManage/webLogin/webLogin';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/webLogin/webLogin.js';	define("pages/companyManage/webLogin/webLogin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t,n=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")),o=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),i=getApp();Page((0,n.default)({data:{login:!0,empowerStatus:!1,systemInfo:i.systemInfo,showText:!1,showGzh:!1},onLoad:function(n){if(console.log("webLogin.onload",n),e=n,console.log("serviceIntro"==e.origin,"错"),"serviceIntro"==e.origin&&this.setData({showText:!0}),e.scene)t=decodeURIComponent(e.scene);else{var o=decodeURIComponent(e.q);t=o.split("?scene=")[1]}console.log("sceneNew:",t),this.onlineLogin(0),this.empower()},onShow:function(e){},errFun:function(e){console.log(e,"errFun方法"),e.detail&&0===e.detail.status?this.setData({showGzh:!0}):this.setData({showGzh:!1})},loadFun:function(e){console.log(e,"loadFun方法"),e.detail&&0===e.detail.status?this.setData({showGzh:!0}):this.setData({showGzh:!1})},userinfo:function(e){var t=this;e.detail.iv&&(this.setData({empowerStatus:!0}),i.setUnion(e.detail,(function(){t.login()})))},login:function(){this.setData({loading:!0}),this.onlineLogin(1)},onlineLogin:function(e){var n=this;1===e&&i.burying.setPoint(i,864),i.setRequest({url:"wxLogin",method:"POST",data:{openId:i.client.openid,headPhotoUrl:i.touxiang.avatarUrl,petName:i.touxiang.nickName,key:t,scanState:e}},(function(t){t.flag?o.showtoast("登录已过期，请在官网重新扫码登录","none",2e3):1===e&&n.setData({login:!1})}),"",(function(){n.setData({loading:!1})}))},onUnload:function(){this.onlineLogin(2)},empower:function(){var e=this;i.getSettingMessage((function(t){e.setData({empowerStatus:t.u})}))}},"onUnload",(function(){i.burying.setPoint(i,863)}))); 
 			}); 	require("pages/companyManage/webLogin/webLogin.js");
 		__wxRoute = 'pages/companyManage/inviteBinding/inviteBinding';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/inviteBinding/inviteBinding.js';	define("pages/companyManage/inviteBinding/inviteBinding.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n,t=getApp(),a=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{systemInfo:t.systemInfo,entId:null,deptId:null,entName:"",cardList:null,teamData:"",noBleed:!1,dissolution:!0,fillInformation:!1},onLoad:function(a){var e=this;(n=a).scene?(n.scene=encodeURIComponent(n.scene),this.roleManage()):(this.setData({deptId:n.deptId?n.deptId:""}),t.setRequest({url:"teamPopulation",data:{entId:n.entId}},(function(n){e.setData({entId:n.entId,entName:n.entName}),e.companyCardNum()}))),this.getCardsList(),t.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading()},onShow:function(){},roleManage:function(){var a=this;t.setToken((function(){t.setRequest({url:"wxEntExpandYaoqingDetail",data:{scen:n.scene}},(function(n){n.entId?(a.setData({entId:n.entId,deptId:n.deptId,entName:n.entName}),a.companyCardNum()):a.setData({dissolution:!1})}),(function(){}),(function(){t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))}))},judgeTeamContainOpenIdFunc:function(n){var a=this;t.setRequest({url:"judgeTeamContainOpenId",data:{entId:this.data.entId,openId:t.client.openid}},(function(n){n.isTeamMembers?(wx.switchTab({url:"/pages/company/company"}),wx.setStorageSync("entId",a.data.entId)):a.joinFlowFun()}),(function(){}),(function(){t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},companyCardNum:function(){var n=this;t.setRequest({url:"teamPopulation",data:{entId:this.data.entId}},(function(a){"506"!=a.flag?(n.setData({teamData:a}),t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()):t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},gotoCase:function(){this.setData({noBleed:!1,fillInformation:!0,cardList:this.data.cardList}),t.burying.setPoint(t,985),this.selectComponent("#cardInfor").showModal()},getCardsList:function(){var n=this;t.setRequest({url:"cardsList",data:{openId:t.client.openid}},(function(t){n.setData({cardList:t})}))},getPhoneNumber:function(n){var e=this;n.detail.iv?t.setRequest({url:"getWxPhone",data:{iv:n.detail.iv,encryptedData:n.detail.encryptedData}},(function(n){t.burying.setPoint(t,980),e.setData({userPhoneNumber:n.phoneNumber}),e.judgeTeamContainOpenIdFunc()}),(function(){a.showtoast("手机号授权失败","none",1e3)})):(t.burying.setPoint(t,981),a.showtoast("授权手机号失败","none",1e3))},joinFlowFun:function(){var n=this;t.burying.setPoint(t,977),this.getClaimCards((function(t){console.log("getClaimCards",t),"true"==t?wx.navigateTo({url:"../phonereceiveCard/phonereceiveCard"}):"false"==t&&n.setData({noBleed:!0,cardList:n.data.cardList})}))},getClaimCards:function(n){var a=this;t.setRequest({url:"wxEntExpandCardMsgByIphone",data:{iphone:this.data.userPhoneNumber,entId:this.data.entId,deptId:this.data.deptId}},(function(t){console.log("getcards",t),a.setData({claimCardsData:t}),t.length<=0?n&&n("false"):n&&n("true")}))},closeWindow:function(){this.setData({fillInformation:!1})},teamInfo:function(){console.log("teamInfo cardAddSuccessShow"),t.cardReceiveMask=!0,wx.switchTab({url:"/pages/cardMain/cardMain"})},adminNameFun:function(n){var t="";return n.adminName&&(t=n.adminName),t},trans:function(){t.burying.setPoint(t,911)},goHome:function(){wx.switchTab({url:"../../cardMain/cardMain"})},sharePoint:function(){t.burying.setPoint(t,978)},onUnload:function(){t.burying.setPoint(t,979)},onShareAppMessage:function(){var e,i;return i=n.scene?"?scene="+n.scene:"?entId="+this.data.entId,e=t.source.shareClaimfilling+encodeURIComponent(this.data.entName),a.shareAppMessa({title:"你的电子名片已制作完成，请尽快认领",path:"pages/companyManage/inviteBinding/inviteBinding"+i,imageUrl:e})}}); 
 			}); 	require("pages/companyManage/inviteBinding/inviteBinding.js");
 		__wxRoute = 'pages/companyManage/inviteBindingWechat/inviteBindingWechat';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/inviteBindingWechat/inviteBindingWechat.js';	define("pages/companyManage/inviteBindingWechat/inviteBindingWechat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=getApp(),n=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{systemInfo:a.systemInfo,entId:null,deptId:null,entName:"",cardList:null,teamData:"",manageData:"",dissolution:!0,fillInformation:!1},onLoad:function(n){var e=this;(t=n).scene?(t.scene=encodeURIComponent(t.scene),this.roleManage()):(this.setData({deptId:t.deptId?t.deptId:""}),a.setRequest({url:"teamPopulation",data:{entId:t.entId}},(function(t){e.setData({entId:t.entId,entName:t.entName}),e.companyCardNum()}))),this.getCardsList(),a.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading()},onShow:function(){},roleManage:function(){var n=this;a.setToken((function(){a.setRequest({url:"wxEntExpandYaoqingDetail",data:{scen:t.scene}},(function(t){t.entId?n.setData({entId:t.entId,deptId:t.deptId,entName:t.entName}):n.setData({dissolution:!1})}),(function(){}),(function(){a.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))}))},judgeTeamContainOpenIdFunc:function(t){var n=this;a.setRequest({url:"judgeTeamContainOpenId",data:{entId:this.data.entId,openId:a.client.openid}},(function(t){t.isTeamMembers?(wx.switchTab({url:"/pages/company/company"}),wx.setStorageSync("entId",n.data.entId)):n.joinFlowFun()}),(function(){}),(function(){a.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},companyCardNum:function(){var t=this;a.setRequest({url:"teamPopulation",data:{entId:this.data.entId}},(function(n){"506"!=n.flag?(t.setData({teamData:n}),a.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()):a.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},gotoCase:function(){this.setData({fillInformation:!0,cardList:this.data.cardList}),this.selectComponent("#cardInfor").showModal()},getCardsList:function(){var t=this;a.setRequest({url:"cardsList",data:{openId:a.client.openid}},(function(a){t.setData({cardList:a})}))},getPhoneNumber:function(t){var e=this;t.detail.iv?a.setRequest({url:"getWxPhone",data:{iv:t.detail.iv,encryptedData:t.detail.encryptedData}},(function(t){e.setData({userPhoneNumber:t.phoneNumber}),a.burying.setPoint(a,999),e.judgeTeamContainOpenIdFunc()}),(function(){n.showtoast("手机号授权失败","none",1e3)})):(a.burying.setPoint(a,1e3),n.showtoast("授权手机号失败","none",1e3))},sharePoint:function(){a.burying.setPoint(a,997)},onUnload:function(){a.burying.setPoint(a,998)},joinFlowFun:function(){var t=this;a.burying.setPoint(a,996),this.getClaimCards((function(a){"true"==a?(t.setData({fillInformation:!0,cardList:t.data.claimCardsData}),t.selectComponent("#cardInfor").showModal()):"false"==a&&(t.setData({fillInformation:!0,cardList:t.data.cardList}),t.selectComponent("#cardInfor").showModal())}))},getClaimCards:function(t){var n=this;a.setRequest({url:"wxEntExpandCardMsgByIphone",data:{iphone:this.data.userPhoneNumber,entId:this.data.entId,deptId:this.data.deptId}},(function(a){n.setData({claimCardsData:a}),a.length<=0?t&&t("false"):t&&t("true")}))},closeWindow:function(){this.setData({fillInformation:!1})},teamInfo:function(){console.log("teamInfo cardAddSuccessShow"),a.cardReceiveMask=!0,wx.switchTab({url:"/pages/cardMain/cardMain"})},adminNameFun:function(t){var a="";return t.adminName&&(a=t.adminName),a},trans:function(){a.burying.setPoint(a,911)},goHome:function(){wx.switchTab({url:"../../cardMain/cardMain"})},onShareAppMessage:function(){var e,i;return i=t.scene?"?scene="+t.scene:"?entId="+this.data.entId,e=a.source.shareClaimfilling+encodeURIComponent(this.data.entName),n.shareAppMessa({title:"邀请你加入企业，一起使用电子名片",path:"pages/companyManage/inviteBindingWechat/inviteBindingWechat"+i,imageUrl:e})}}); 
 			}); 	require("pages/companyManage/inviteBindingWechat/inviteBindingWechat.js");
 		__wxRoute = 'pages/companyManage/phonereceiveCard/phonereceiveCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/phonereceiveCard/phonereceiveCard.js';	define("pages/companyManage/phonereceiveCard/phonereceiveCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{cardList:null,entName:null,entId:null,deptId:null,claimCardsData:null,userPhoneNumber:null,fillInformation:!1},onLoad:function(){var a=getCurrentPages();this.setData({cardList:a[a.length-2].data.cardList,claimCardsData:a[a.length-2].data.claimCardsData,entName:a[a.length-2].data.entName,entId:a[a.length-2].data.entId,deptId:a[a.length-2].data.deptId,userPhoneNumber:a[a.length-2].data.userPhoneNumber})},getUserMessa:function(t){a.burying.setPoint(a,982),t.detail.iv&&this.claimCardFun((function(t){console.log("cres",t),1==t.claimState?(a.cardReceiveMask=!0,wx.switchTab({url:"../../cardMain/cardMain"})):(wxPublic.showtoast("已被他人认领","loading",2e3),setTimeout((function(){wx.navigateBack({delta:1})}),1500))}))},claimCardFun:function(t,n){var e={replaceId:!1,claimCardId:this.data.claimCardsData[0].cardId,isReplace:!1,entName:this.data.entName};a.setRequest({url:"claimCard",method:"POST",data:e},(function(a){t&&t(a)}),(function(){n&&n()}))},otherCard:function(){this.setData({fillInformation:!0}),a.burying.setPoint(a,983),this.selectComponent("#cardInfor").showModal()},closeWindow:function(){this.setData({fillInformation:!1})},teamInfo:function(){console.log("teamInfo cardAddSuccessShow"),wx.setStorageSync("cardAddSuccessShow",!0),wx.switchTab({url:"/pages/cardMain/cardMain"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){a.burying.setPoint(a,984)},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/phonereceiveCard/phonereceiveCard.js");
 		__wxRoute = 'pages/companyManage/enterBindingWechat/enterBindingWechat';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/enterBindingWechat/enterBindingWechat.js';	define("pages/companyManage/enterBindingWechat/enterBindingWechat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{systemInfo:e.systemInfo,topType:"home",topTitle:"递名片",status:"",params:{openId:"",key:""}},onLoad:function(e){console.log("enterBingdingWechat.onload",e);var t=wx.getStorageSync("client").openid;this.setData({"params.openId":t,"params.key":e.scene}),console.log("openid",t)},getUserInfo:function(n){n.detail.iv&&(e.setUnion(n.detail),e.burying.setPoint(e,325),e.setRequest({url:"bindingOpenid",data:this.data.params},(function(e){if(4001===e.code||500===e.code)return t.showtoast("当前二维码失效，请在官网刷新页面，重新扫码二维码。","none",3e3),!1;wx.redirectTo({url:"../bindingWechatStatus/bindingWechatStatus?status="+e.code})})))},home:function(){e.burying.setPoint(e,324)}}); 
 			}); 	require("pages/companyManage/enterBindingWechat/enterBindingWechat.js");
 		__wxRoute = 'pages/companyManage/officialBindingSuccess/officialBindingSuccess';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/officialBindingSuccess/officialBindingSuccess.js';	define("pages/companyManage/officialBindingSuccess/officialBindingSuccess.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{status:""},onLoad:function(a){var s=this;t.setToken((function(){t.setRequest({url:"wxEntExpandBingdingWechat",data:{scen:encodeURIComponent(a.scene),openId:t.client.openid}},(function(t){"604"==t.status||"601"==t.status?s.setData({status:"loseEfficacy"}):"602"==t.status?wx.switchTab({url:"/pages/cardMain/cardMain"}):"200"==t.status?s.setData({status:"success"}):wx.switchTab({url:"/pages/cardMain/cardMain"})}),(function(){}))}))}}); 
 			}); 	require("pages/companyManage/officialBindingSuccess/officialBindingSuccess.js");
 		__wxRoute = 'pages/companyManage/bindingWechatStatus/bindingWechatStatus';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/bindingWechatStatus/bindingWechatStatus.js';	define("pages/companyManage/bindingWechatStatus/bindingWechatStatus.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(){}}); 
 			}); 	require("pages/companyManage/bindingWechatStatus/bindingWechatStatus.js");
 		__wxRoute = 'pages/companyManage/previewVideoCard/previewVideoCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/previewVideoCard/previewVideoCard.js';	define("pages/companyManage/previewVideoCard/previewVideoCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(a){"self"==a.self?this.setData({dynamicCardVideoPlay:!0,saveHave:"true",singleData:getCurrentPages()[getCurrentPages().length-2].data.mycard.defCard}):"newCardDetail"==a.self&&this.setData({dynamicCardVideoPlay:!0,saveHave:"true",singleData:getCurrentPages()[getCurrentPages().length-2].data.singleData})},onShow:function(){},packup:function(){wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/companyManage/previewVideoCard/previewVideoCard.js");
 		__wxRoute = 'pages/companyManage/constructor/constructor';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/constructor/constructor.js';	define("pages/companyManage/constructor/constructor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t="minicard";Page({data:{administrators:"",disabled:!0,cardList:null,fillInformation:!1,enterpriseData:[],conditions:""},onLoad:function(n){var i=this;if(t=n.id?"minicard":"scancode",this.setData({sourceType:t}),"minicard"==t)this.setData({"administrators.id":n.id,"administrators.entId":n.entId,"administrators.openId":n.openId,"administrators.entName":n.entName,"administrators.petName":n.petName,"administrators.adminName":n.adminName,"administrators.updateTime":n.updateTime,disabled:!1}),this.joinCondition(n.entId);else{var e=decodeURIComponent(n.scene);a.setRequest({url:"getAdministrators",data:{sence:e}},(function(a){a?(i.setData({administrators:a,disabled:!1}),i.joinCondition(a.entId)):wx.redirectTo({url:"../handoverStatus/handoverStatus?status=1041"})}),(function(){a.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))}a.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading()},joinCondition:function(t){var n=this;a.setRequest({url:"cardsList",data:{openId:a.client.openid}},(function(a){var i=0,e=a,d=!1;n.setData({cardList:a});for(var o=0;o<e.length;o++)e[o].entId&&(e[o].entId==t&&(d=e[o].cardId),i++);i>=100?d?n.setData({conditions:"0"}):n.setData({conditions:"1"}):n.setData({conditions:"0"})}),(function(){}),(function(){a.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},closeWindow:function(){this.setData({fillInformation:!1})},goHome:function(){wx.switchTab({url:"../../cardMain/cardMain"})},overAdministrator:function(){var n=this;a.setRequest({url:"judgeTeamContainOpenId",data:{entId:this.data.administrators.entId,openId:a.client.openid}},(function(i){i.isTeamMembers?a.setRequest({url:"replaceTeamAdministrator",method:"post",data:{oldOpenId:n.data.administrators.openId,newOpenId:a.client.openid,entId:n.data.administrators.entId,newHeadUrl:a.touxiang.avatarUrl,newPetName:a.touxiang.nickName,vcardId:i.vcardIds[0],source:"scancode"==t?1:2}},(function(a){console.log("111",a);var t=a.adminOpenId?"200":a.status,i=a.data?a.data:"";a.adminOpenId?wx.redirectTo({url:"../handoverStatus/handoverStatus?status="+t+"&data="+i+"&adminOpenId="+a.adminOpenId+"&entId="+n.data.administrators.entId+"&adminName="+n.data.administrators.adminName+"&entName="+a.entName+"&isAdmin=1&userOpenId="+a.adminOpenId}):wx.redirectTo({url:"../handoverStatus/handoverStatus?status="+t+"&data="+i})})):(n.setData({fillInformation:!0}),n.selectComponent("#cardInfor").showModal())}))},requiredConditions:function(a){this.data.enterpriseData.push(a.detail)},getUserMessa:function(t){var n=this;a.burying.setPoint(a,604),t.detail.iv&&a.setUnion(t.detail,(function(){n.overAdministrator()}))}}); 
 			}); 	require("pages/companyManage/constructor/constructor.js");
 		__wxRoute = 'pages/companyManage/teamList/teamList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/teamList/teamList.js';	define("pages/companyManage/teamList/teamList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e=getApp();require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{list:[],sheetList:[],sheetShow:!1,modalShow:!1,teamEditShow:!1,teamMessage:{}},onLoad:function(e){t=getCurrentPages(),this.setData({list:t[t.length-3].data.teamList}),this.setData({preEntId:t[t.length-3].data.enterprisesData.entId})},onShow:function(){var t=this;this.data.switchAdmin&&this.businessGet((function(e){t.setData({list:e})}))},businessGet:function(t){e.setRequest({url:"checkPerson",data:{openId:e.client.openid}},(function(e){t&&t(e)}))},itemClick:function(t){var a=t.currentTarget.dataset.ind;e.burying.setPoint(e,892),wx.setStorageSync("entId",this.data.list[a].entId),wx.switchTab({url:"/pages/company/company"})},addTeam:function(){e.burying.setPoint(e,728),wx.navigateTo({url:"../createTeam/createTeam?pagefrom=teamList"})}}); 
 			}); 	require("pages/companyManage/teamList/teamList.js");
 		__wxRoute = 'pages/companyManage/teamNotClaim/teamNotClaim';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/teamNotClaim/teamNotClaim.js';	define("pages/companyManage/teamNotClaim/teamNotClaim.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),e=getApp();Page({data:{systemInfo:e.systemInfo,source:e.source,cardDetail:{show:!1,data:{}},mark:(new Date).getTime(),parmes:null},onLoad:function(a){console.log("options",a),this.claimFun(a.redirect)},onShow:function(){},claimFun:function(a){console.log("p",a);var e=getCurrentPages();if("true"==a){var t=[];try{t=wx.getStorageSync("team_notClaimedData")}catch(a){}this.setData({parmes:e[e.length-2].data.notClaimedMembers,notClaimedData:t})}else this.setData({parmes:e[e.length-2].data.parmes,notClaimedData:e[e.length-2].data.notClaimedMembers}),console.log("notClaimedData",this.data.parmes,this.data.notClaimedData)},listItemTap:function(a){var t=a.currentTarget.dataset.i;this.setData({"cardDetail.show":!0,"cardDetail.data":this.data.notClaimedData[t]}),e.burying.setPoint(e,428)},closeDetail:function(){this.setData({"cardDetail.down":!0});var a=this;setTimeout((function(){a.setData({"cardDetail.show":!1,"cardDetail.down":!1,"cardDetail.data":{}})}),100)},adminNameFun:function(a){var e="";return 1==a.isAdmin&&(e=a.adminName?a.adminName:a.petName),e||(e=""),e},onShareAppMessage:function(t){var n,i=t.target?t.target.dataset.t:"",s=this.data.parmes,r=this.adminNameFun(s);switch(i){case"shareName":e.burying.setPoint(e,726);break;case"shareModer":e.burying.setPoint(e,429)}return"你的电子名片已制作完成，请尽快加入企业并领取名片",n=e.source.sharePrecompany+encodeURIComponent(s.entName)+"&tempId=messagecard_lingqu&folder=TEMPLATES_V8&mark="+this.data.mark,console.log("pages/companyManage/joinenterprise/joinenterprise?adminName="+r+"&entname="+s.entName+"&entId="+s.entId+"&openId="+s.adminOpenId),a.shareAppMessa({title:"你的电子名片已制作完成，请尽快加入企业并领取名片",path:"pages/companyManage/joinenterprise/joinenterprise?adminName="+r+"&entname="+s.entName+"&entId="+s.entId+"&openId="+s.adminOpenId,imageUrl:n})}}); 
 			}); 	require("pages/companyManage/teamNotClaim/teamNotClaim.js");
 		__wxRoute = 'pages/companyManage/batchProduction/batchProduction';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/batchProduction/batchProduction.js';	define("pages/companyManage/batchProduction/batchProduction.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),s=getApp();Page({data:{backSrc:s.source.my_introBack,image1:s.source.prefix+"img/cardMain/step1.png",image2:s.source.prefix+"img/cardMain/step2.png",image3:s.source.prefix+"img/cardMain/step3.png",systemInfo:s.systemInfo},onShow:function(){console.log("sss",this.data.systemInfo)},onShareAppMessage:function(){return e.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=help&shareType=05",imageUrl:s.source.shareImage})}}); 
 			}); 	require("pages/companyManage/batchProduction/batchProduction.js");
 		__wxRoute = 'pages/companyManage/coreTeam/coreTeam';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/coreTeam/coreTeam.js';	define("pages/companyManage/coreTeam/coreTeam.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t,a,n,r,i,s=require("../../../@babel/runtime/helpers/interopRequireDefault"),o=s(require("../../../@babel/runtime/helpers/toConsumableArray")),u=s(require("../../../@babel/runtime/regenerator")),d=s(require("../../../@babel/runtime/helpers/asyncToGenerator")),c=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),l=getApp();Page({data:{systemInfo:l.systemInfo,cardList:{show:!1},freshNum:(new Date).getTime(),msg:"",parmes:null,listMembers:[],notClaimedMembers:[],touxiang:l.touxiang,showTip:!0,image1:l.source.prefix+"img/cardMain/emptycList.png",notClaimShow:!1,enterprisesData:"",showAddmyCard:!1,fillInformation:!1,singleData:"",currentDevicePhoneNumer:l.currentDevicePhoneNumer,tmpList:[],entId:"",defaultAra:l.source.morenTouxiang},onPullDownRefresh:function(){this.initPage(),wx.stopPullDownRefresh()},onLoad:function(t){console.log("coreTeam.onload",t);var a=(e=getCurrentPages())[e.length-2].data;this.setData({options:t,parmes:a.enterprisesData,enterprisesData:a.enterprisesData,teamData:a.teamData,entId:t.entId}),l.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading()},onShow:function(){this.initPage()},initPage:(i=(0,d.default)(u.default.mark((function e(){var t,a,n,r,i,s,o;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.teamMembersListFun();case 2:if(t=e.sent,console.log("成员列表数组",t),!t){e.next=15;break}if(this.setData({listMembers:t}),!((a=t.find((function(e){return 1==e.role})))&&(null==a?void 0:a.vcardId)&&(null==a?void 0:a.formtoken))){e.next=14;break}return e.next=10,this.getMycardDetail(a.vcardId,a.formtoken);case 10:n=e.sent,this.setData({singleData:n,showAddmyCard:!1}),e.next=15;break;case 14:this.setData({showAddmyCard:!0});case 15:return e.next=17,this.teamMembersFun();case 17:return r=e.sent,i=this.notClaimed(r),s=[],s=this.sortAllList(Object.assign([],r)),console.log("成员名片排序后数组",s),e.next=24,this.tplFun();case 24:o=e.sent,this.setData({allMembers:s,notClaimedMembers:i,tmpList:o});case 26:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)}),getMycardDetail:(r=(0,d.default)(u.default.mark((function e(t,a){var n;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.setPromiseRequest({url:"selectById",data:{id:t,formtoken:a}});case 2:if(!(null==(n=e.sent)?void 0:n.formtoken)){e.next=5;break}return e.abrupt("return",n);case 5:return e.abrupt("return",{});case 6:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}),sortAllList:function(e){var t=l.client.openId,a=[],n=[],r=[];return e.forEach((function(e){1==e.role?a.push(e):(1!=e.roleId&&2!=e.roleId||e.openId===t||n.push(e),1!=e.roleId&&2!=e.roleId&&e.openId!==t&&r.push(e))})),[].concat(a,n,r)},notClaimed:function(e){var t=[];if(!e.length)return t;e.forEach((function(e){0==e.getType&&t.push(e)}));try{wx.setStorageSync("team_notClaimedData",t)}catch(e){}return t},teamMembersListFun:(n=(0,d.default)(u.default.mark((function e(){var t;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.setPromiseRequest({url:"getEntMembers",data:{openId:l.client.openid,entId:this.data.entId}});case 2:return t=e.sent,l.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),teamMembersFun:(a=(0,d.default)(u.default.mark((function e(){var t;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.setPromiseRequest({url:"cardManagement",data:{openId:l.client.openid,entId:this.data.entId}});case 2:return t=e.sent,l.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)}),managingTeamMembers:function(){l.burying.setPoint(l,725),wx.navigateTo({url:"../teamNotClaim/teamNotClaim?entId="+this.data.entId+"&redirect=false"})},search:function(){wx.navigateTo({url:"../searchPage/searchPage?entId="+this.data.entId+"&main=coreTeam"}),l.burying.setPoint(l,432)},teamDetail:function(e){console.log("teamDetail",e);var t=e.currentTarget.dataset.formtoken,a=e.currentTarget.dataset.cardId,n=e.currentTarget.dataset.tplId,r=e.currentTarget.dataset.role,i=e.currentTarget.dataset.vcardId,s=this.data.entId;if(1==r){if(!t)return;this._toEdit(a,t,n)}else i&&wx.navigateTo({url:"/pages/companyManage/coreTeamDetail/coreTeamDetail?vcardId=".concat(i,"&entId=").concat(s,"&main=coreTeam")});l.burying.setPoint(l,431)},adminNameFun:function(e){return""},_getPhoneNumber:function(e){var t=this;l.burying.setPoint(l,973);var a={};a={entId:this.data.parmes.entId,entName:this.data.parmes.entName,phoneNumber:""},e.detail.iv&&l.setRequest({url:"getWxPhone",data:{iv:e.detail.iv,encryptedData:e.detail.encryptedData}},(function(e){t.setData({currentDevicePhoneNumer:e.phoneNumber||""}),a.phoneNumber=e.phoneNumber,e.phoneNumber&&t._joinCardFun(a)})),l.burying.setPoint(l,866)},_joinCard:function(){l.burying.setPoint(l,973);var e;e={entId:this.data.enterprisesData.entId,entName:this.data.enterprisesData.entName,phoneNumber:this.data.currentDevicePhoneNumer},this._joinCardFun(e),l.burying.setPoint(l,866)},_joinCardFun:function(e){var t=this;l.setRequest({url:"wxEntExpandCardMsgByIphone",data:{iphone:e.phoneNumber,entId:e.entId}},(function(a){a.length?(t.setData({fillInformation:!0,createOpenType:"fromTeam",chooseTeamData:e,matchCardList:a}),t.selectComponent("#cardInfor").showModal()):t._cardListFun((function(a){t.setData({fillInformation:!0,createOpenType:"fromMicro",chooseTeamData:e,matchCardList:a||[]}),t.selectComponent("#cardInfor").showModal()}))}))},_cardListFun:function(e){l.setRequest({url:"cardsList",data:{openId:l.client.openid}},(function(t){e&&e(t)}))},_closeWindow:function(){this.setData({fillInformation:!1})},_teamInfo:function(){this.setData({fillInformation:!1}),c.showtoast("名片已添加","success",2e3),this.initPage()},tplFun:(t=(0,d.default)(u.default.mark((function e(){var t;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.data.parmes.entId,e.next=3,l.setPromiseRequest({url:"tplGetTplList",data:{entId:t}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)}),_toEdit:function(e,t,a){l.burying.setPoint(l,920);var n,r,i=this.data.enterprisesData,s=this.data.tmpList;console.log("tmpList",s);var u=(0,o.default)(s.filter((function(e){if(e.tplId==a)return e}))),d=u[0];u.slice(1);n=d.deptId?d.deptId:"",r=d.useNumb?d.useNumb:0,wx.navigateTo({url:"/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(e,"&formtoken=").concat(t,"&main=company&deptId=").concat(n,"&useNumb=").concat(r,"&entName=").concat(i.entName,"&entId=").concat(i.entId,"&adminOpenId=").concat(i.adminOpenId,"&entState=").concat(i.entState)})},sensor435:function(){l.burying.setPoint(l,435)},sensor970:function(){l.burying.setPoint(l,970)},sensor971:function(){l.burying.setPoint(l,971)},sensor972:function(){l.burying.setPoint(l,972)},onShareAppMessage:function(e){var t,a,n,r,i;if(console.log(e,this.data.singleData),"ownShare"==(null==e||null===(t=e.target)||void 0===t||null===(a=t.dataset)||void 0===a?void 0:a.shareType)&&(null===(n=this.data.singleData)||void 0===n?void 0:n.formtoken)){var s,o;return o=l.getShareCardImgUrl(this.data.singleData),s=l.getShareTitle(this.data.singleData),c.shareAppMessa({title:s,path:"pages/cardAll/howEnter/howEnter?id="+this.data.singleData.id+"&shareOthers=1&shareType=01&formtoken="+this.data.singleData.formtoken,imageUrl:o})}if("invite"==(null==e||null===(r=e.target)||void 0===r||null===(i=r.dataset)||void 0===i?void 0:i.shareType)){var u,d=this.data.parmes;return"你的电子名片已制作完成，请尽快认领",u=l.source.shareClaimfilling+encodeURIComponent(d.entName),c.shareAppMessa({title:"你的电子名片已制作完成，请尽快认领",path:"pages/companyManage/inviteBinding/inviteBinding?entId="+d.entId,imageUrl:u})}if(this.data.parmes){var m,p=this.data.parmes;return l.burying.setPoint(l,435),m=l.source.shareClaimfilling+encodeURIComponent(p.entName),c.shareAppMessa({title:"邀请你加入企业，一起使用电子名片",path:"pages/companyManage/inviteBindingWechat/inviteBindingWechat?entId="+p.entId,imageUrl:m})}return c.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=coreTeam&shareType=05",imageUrl:l.source.shareImage})}}); 
 			}); 	require("pages/companyManage/coreTeam/coreTeam.js");
 		__wxRoute = 'pages/companyManage/changeAdmin/changeAdmin';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/changeAdmin/changeAdmin.js';	define("pages/companyManage/changeAdmin/changeAdmin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),n=getApp();Page({data:{image1:n.source.prefix+"img/cardMain/intcopy_attributes.png"},onLoad:function(a){console.log("changeAdmin",a),e=a},onShow:function(){var a=this;n.setRequest({url:"selectEntInfoById",data:{entId:e.entId,openId:n.client.openid}},(function(e){a.setData({admin:e})}))},share:function(){n.burying.setPoint(n,430)},onShareAppMessage:function(){var e;console.log(n.source.sharePrecompany+encodeURIComponent(this.data.admin.entName)+"&tempId=messagecard_chakan&folder=TEMPLATES_V8"),e=n.source.sharePrecompany+this.data.admin.entName+"&tempId=messagecard_chakan&folder=TEMPLATES_V8";var t=this.data.admin;return t.petName||(t.petName=""),t.adminName||(t.adminName=""),a.shareAppMessa({title:t.petName+"正在将公司名片管理员权限转移给你",path:"pages/companyManage/constructor/constructor?id="+t.id+"&entId="+t.entId+"&openId="+t.openId+"&entName="+t.entName+"&adminName="+t.adminName+"&updateTime="+t.updateTime+"&petName="+t.petName,imageUrl:e})}}); 
 			}); 	require("pages/companyManage/changeAdmin/changeAdmin.js");
 		__wxRoute = 'pages/companyManage/changeAdminScanCode/changeAdminScanCode';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/changeAdminScanCode/changeAdminScanCode.js';	define("pages/companyManage/changeAdminScanCode/changeAdminScanCode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),n=getApp();Page({data:{image1:n.source.prefix+"img/cardMain/intcopy_attributes.png",canshare:!1},onLoad:function(a){console.log("changeAdmin",a),e=a,n.compatibleManage.shareMenu&&wx.hideShareMenu()},onShow:function(){this.adminFun()},adminFun:function(a){var t=this,i=decodeURIComponent(e.scene);n.setRequest({url:"selectEntInfoById",data:{entId:i,openId:n.client.openid}},(function(e){console.log("res",e),e[601]?t.setData({admin:e,canshare:!1}):e[602]?wx.redirectTo({url:"../changeAdminScanCodeFail/changeAdminScanCodeFail"}):t.setData({admin:e,canshare:!0})}))},userinfo:function(e){var a=this;e.detail.iv&&n.setUnion(e.detail,(function(){a.adminFun()}))},share:function(){n.burying.setPoint(n,430)},onShareAppMessage:function(){var e;e=n.source.sharePrecompany+encodeURIComponent(this.data.admin.entName)+"&tempId=messagecard_chakan&folder=TEMPLATES_V8";var t=this.data.admin;return t.petName||(t.petName=""),t.adminName||(t.adminName=""),a.shareAppMessa({title:t.petName+"正在将公司名片管理员权限转移给你",path:"pages/companyManage/constructor/constructor?id="+t.id+"&entId="+t.entId+"&openId="+t.openId+"&entName="+t.entName+"&adminName="+t.adminName+"&updateTime="+t.updateTime+"&petName="+t.petName,imageUrl:e})}}); 
 			}); 	require("pages/companyManage/changeAdminScanCode/changeAdminScanCode.js");
 		__wxRoute = 'pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.js';	define("pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/changeAdminScanCodeFail/changeAdminScanCodeFail.js");
 		__wxRoute = 'pages/companyManage/shareCardlibrary/shareCardlibrary';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/shareCardlibrary/shareCardlibrary.js';	define("pages/companyManage/shareCardlibrary/shareCardlibrary.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=getApp(),e=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{systemInfo:a.systemInfo,permissions:null,cardStoreList:[],admin:null,msg:null,enterprisesData:""},onLoad:function(e){console.log("options",e),t=e,a.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading(),this.setData({enterprisesData:a.enterprisesData})},onShow:function(){this.entSharePool()},entSharePool:function(e){var n,i,o=this,r=t.entId;a.setRequest({url:"entSharePool",data:{entId:r,openId:a.client.openid}},(function(t){1==t.hasRole?(n=t.data.length>0?"stub":"nostub",i=!0):(i=!1,o.setData({admin:t.data})),o.setData({entId:r,cardStoreList:t,msg:n,permissions:i})}),"",(function(){a.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},copy:function(){wx.setClipboardData({data:"www.microvcard.com",success:function(){wx.showToast({title:"复制成功",icon:"none",duration:1e3})}})},teamDetail:function(t){var e=t.currentTarget.dataset.index;wx.navigateTo({url:"../shareCardlibraryDetail/shareCardlibraryDetail?openid="+a.client.openid+"&id="+e+"&formtoken="+t.currentTarget.dataset.formtoken}),a.burying.setPoint(a,441)},search:function(){wx.navigateTo({url:"../searchPage/searchPage?entId="+t.entId+"&main=shareCardlibrary"}),a.burying.setPoint(a,442)},shareConnections:function(){var t=this;a.setRequest({url:"cardHolder",data:{openId:a.client.openid}},(function(a){t.cardListRender(a.data)})),a.burying.setPoint(a,440)},cardListRender:function(t){var a,n=[],i=[];a=Object.keys(t).sort();for(var o=0;o<a.length;o++)n.push({flag:a[o],items:t[a[o]]}),i.push(t[a[o]]);this.setData({batchShareData:n,letterList:a}),i&&i.length>0?wx.navigateTo({url:"../shareCardstore/shareCardstore?entId="+this.data.entId}):e.showtoast("暂无可共享的人脉","none",2e3)}}); 
 			}); 	require("pages/companyManage/shareCardlibrary/shareCardlibrary.js");
 		__wxRoute = 'pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.js';	define("pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t=getApp();Page({data:{systemInfo:t.systemInfo,singleData:"",freshNum:0,claimTouxiangMessage:{},showDetail:!1,detailAnimation:""},onPullDownRefresh:function(){this.singleDataFunc()},onLoad:function(t){console.log("entershow.onload",t),a=t},onShow:function(){this.singleDataFunc(),t.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading()},singleDataFunc:function(){var e=this,n=this;t.setRequest({url:"selectById",data:{id:a.id,formtoken:a.formtoken}},(function(a){n.setData({singleData:a,loaded:!0,freshNum:(new Date).getTime()}),t.setRequest({url:"cardsList",data:{openId:t.client.openid}},(function(t){for(var n=e,i=0;i<t.length;i++)t[i].cardId==a.id&&null!==t[i].entId&&(n.data.singleData.entId=t[i].entId);e.setData({singleData:n.data.singleData})}))}),(function(){}),(function(){wx.stopPullDownRefresh(),t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},touxiangFun:function(a){var e=this.data.singleData,n={avatarurl:a.detail.avatarurl?a.detail.avatarurl:t.source.anonymous,nickname:a.detail.nickname?a.detail.nickname:"",time:e.addtimeS};this.setData({claimTouxiangMessage:n})},tolookhomepage:function(){wx.navigateTo({url:"/pages/cardMain/homePage/homePage?id="+a.id+"&detail=shareCardlibraryDetail&st=lookOther"})}}); 
 			}); 	require("pages/companyManage/shareCardlibraryDetail/shareCardlibraryDetail.js");
 		__wxRoute = 'pages/companyManage/shareCardstore/shareCardstore';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/shareCardstore/shareCardstore.js';	define("pages/companyManage/shareCardstore/shareCardstore.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t,a=new(require("../../../418BE4810691379C27ED8C86F260E9B3.js").CardAllPro),s=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),i=getApp();Page({data:{selected:{name:[],checked:{}},accumulated:null,stickSuc:!1,systemInfo:i.systemInfo,platform:i.systemInfo.platform,ifshareMenu:i.compatibleManage.shareMenu,searchInputShow:!1,searchFocus:!1},onLoad:function(a){e=this;var s=(t=getCurrentPages())[t.length-2].data.batchShareData,r=t[t.length-2].data.letterList;this.setData({entId:"undefined"!==a.entId?a.entId:t[t.length-3].data.enterprisesData.entId,receiveDataShare:s,letterList:r}),i.compatibleManage.shareMenu&&wx.hideShareMenu()},onShow:function(){},searchTap:function(){this.setData({searchInputShow:!0}),this.setData({searchFocus:!0})},selectAll:function(e){var t={},a=[],s=!0,r="x0";if(i.burying.setPoint(i,445),e.currentTarget.dataset.all)s=!1;else{for(var c=0;c<this.data.receiveDataShare.length;c++)for(var n=0;n<this.data.receiveDataShare[c].items.length;n++)t[this.data.receiveDataShare[c].items[n].id]=!0,a.push({name:this.data.receiveDataShare[c].items[n].name,id:this.data.receiveDataShare[c].items[n].id});r="x"+(a.length-1)}this.setData({"selected.checked":t,"selected.name":a,"selected.all":s,"selected.toView":r})},radioClick:function(e){var t=this.data.selected.checked,a=this.data.selected.name,s=!0,r=!1;if(t[e.currentTarget.dataset.id]=!e.currentTarget.dataset.checked,e.currentTarget.dataset.checked){i.burying.setPoint(i,444),s=!1;for(var c=0;c<a.length;c++)a[c].id==e.currentTarget.dataset.id&&a.splice(c,1)}else{i.burying.setPoint(i,443);for(var n=0;n<this.data.receiveDataShare.length;n++)for(var d=0;d<this.data.receiveDataShare[n].items.length;d++)this.data.receiveDataShare[n].items[d].id==e.currentTarget.dataset.id&&a.push({name:this.data.receiveDataShare[n].items[d].name,id:this.data.receiveDataShare[n].items[d].id}),t[this.data.receiveDataShare[n].items[d].id]||(s=!1);r="x"+(a.length-1)}this.setData({"selected.checked":t,"selected.name":a,"selected.all":s,"selected.toView":r})},nameClick:function(e){for(var t=Object.keys(this.data.selected.checked),a=this.data.selected.name,s=0;s<t.length;s++)t[s]==e.currentTarget.dataset.id&&(this.data.selected.checked[t[s]]=!1);a.splice(e.currentTarget.dataset.ind,1),this.setData({"selected.checked":this.data.selected.checked,"selected.name":a,"selected.all":!1})},focus:function(e){this.data.selected.noResult&&this.setData({"selected.noResult":!1})},search:function(e){for(var t=this,a=[],i=!1,r=0;r<this.data.receiveDataShare.length;r++)for(var c=0;c<this.data.receiveDataShare[r].items.length;c++)a.push(this.data.receiveDataShare[r].items[c]);e.detail.value||!this.data.selected.noResult&&!this.data.selected.result?s.regMatch(e.detail.value,a,(function(a){a.length<=0?(i=e.detail.value,t.setData({"selected.noResult":!0,"selected.result":!1,"selected.noResultValue":i})):t.setData({"selected.noResult":!1,"selected.result":!0,"selected.resultData":a})})):this.setData({"selected.noResult":!1,"selected.result":!1})},touchStart:function(e){"android"==this.data.platform||this.setData({scranimation:!1})},touchMove:function(t){var r=this,c=160/i.systemInfo.shiftX;a.touchMove(t,e.data.letterList,c,(function(t){t!=r.data.datas&&s.throttle((e.data.datas=t,void("top"==t?(e.setData({lettershow:t,toView:t}),e.setData({scSuccesView:t})):e.setData({lettershow:t,toView:t}))),200)}))},clickLetter:function(t){var s=160/i.systemInfo.shiftX;a.clickLetter(t,e.data.letterList,s,(function(t){if(!t)return 0;"top"==t?(e.setData({lettershow:t,toView:t}),e.setData({scSuccesView:t})):e.setData({lettershow:t,toView:t}),e.data.datas=t,setTimeout((function(){e.setData({lettershow:!1})}),300)}))},touchEnd:function(){this.setData({lettershow:!1})},ss:function(){},shareCardClick:function(){var e=this;if(!this.data.shareding){this.data.shareding=!0;var t=this.data.selected.checked,a=[];for(var s in t)t[s]&&a.push(s);i.burying.setPoint(i,446),i.setRequest({url:"cardHolderShare",method:"post",data:{entId:this.data.entId,openId:i.client.openid,cardIds:a}},(function(t){e.setData({accumulated:t,stickSuc:!0}),e.data.shareding=!1}),(function(){e.data.shareding=!1}))}},closeIcon:function(){i.burying.setPoint(i,739),this.setData({stickSuc:!1}),wx.navigateBack({delta:1})},shareLayer:function(){this.setData({stickSuc:!1}),i.burying.setPoint(i,447),setTimeout((function(){wx.navigateBack({delta:1})}),100)},onShareAppMessage:function(){var e=this.data.accumulated,t="我已累计为企业贡献"+e.shareCount+"张名片",a=i.source.prefix+"img/cardMain/shareConnections.png";return e.name&&(t="我是"+e.name+"，已累计为企业贡献"+e.shareCount+"张名片"),s.shareAppMessa({title:t,path:"pages/companyManage/shareCardlibrary/shareCardlibrary?entId="+this.data.entId,imageUrl:a})}}); 
 			}); 	require("pages/companyManage/shareCardstore/shareCardstore.js");
 		__wxRoute = 'pages/companyManage/coreTeamDetail/coreTeamDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/coreTeamDetail/coreTeamDetail.js';	define("pages/companyManage/coreTeamDetail/coreTeamDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),n=getApp();Page({data:{systemInfo:n.systemInfo,singleData:{},freshNum:0,claimTouxiangMessage:{},showDetail:!1,detailAnimation:"",entInfoMsg:{},claimState:"未认领",editSuccess:!1},onPullDownRefresh:function(){this.getCardData("","",(function(){wx.stopPullDownRefresh()}))},onLoad:function(t){console.log("coreTeamDetail.onload",t),a=t,this.gainEntInfoMsg(),wx.hideShareMenu()},onShow:function(){this.getCardData()},getCardData:function(t,e,i){var o=this;n.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading(),n.setRequest({url:"wxCardSelectByWebId",data:{vcardId:a.vcardId}},(function(a){o.setData({singleData:a,freshNum:(new Date).getTime(),claimState:a.cardId?"已认领":"未认领"}),t&&t()}),(function(){e&&e()}),(function(){i&&i(),n.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},gainEntInfoMsg:function(){var t=this;n.setRequest({url:"tEntInfoGainEntInfoMsg",data:{entId:a.entId}},(function(a){t.setData({entInfoMsg:a})}))},touxiangFun:function(a){var t=this.data.singleData,e={avatarurl:a.detail.avatarurl?a.detail.avatarurl:n.source.anonymous,nickname:a.detail.nickname?a.detail.nickname:"",time:t.addtimeS};this.setData({claimTouxiangMessage:e})},lookClaimDetail:function(){this.setData({showDetail:!0,detailAnimation:"detail-animation-up"})},closeDetail:function(){var a=this;this.setData({detailAnimation:"detail-animation-down"}),setTimeout((function(){a.setData({showDetail:!1})}),100)},editCard:function(){var e=this.data.singleData,i=this.data.entInfoMsg;n.burying.setPoint(n,1044),e&&i&&(e.modelIndex&&"WebTemp"!==e.modelIndex.type?t.showtoast("无操作权限","none",2e3):i.openId==n.client.openid?wx.navigateTo({url:"/pages/companyManage/cardInformationEdit/cardInformationEdit?entId="+a.entId+"&vcardId="+a.vcardId+"&cardId="+e.cardId+"&main="+a.main}):t.showtoast("无操作权限","none",2e3))},tolookhomepage:function(){wx.navigateTo({url:"/pages/cardMain/homePage/homePage?id="+a.id+"&detail=shareCardlibraryDetail&st=lookOther"})},shareClaim:function(){n.burying.setPoint(n,1043)},onShareAppMessage:function(e){var i;return"你的电子名片已制作完成，请尽快认领",i=n.source.shareClaimfilling+encodeURIComponent(this.data.entInfoMsg.entName),t.shareAppMessa({title:"你的电子名片已制作完成，请尽快认领",path:"pages/companyManage/inviteBinding/inviteBinding?entId="+a.entId,imageUrl:i})}}); 
 			}); 	require("pages/companyManage/coreTeamDetail/coreTeamDetail.js");
 		__wxRoute = 'pages/companyManage/notClaimCardDetail/notClaimCardDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/notClaimCardDetail/notClaimCardDetail.js';	define("pages/companyManage/notClaimCardDetail/notClaimCardDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n,a=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),t=getApp();Page({data:{systemInfo:t.systemInfo,singleData:{},freshNum:"",entInfoMsg:{}},onPullDownRefresh:function(){var n=this;this.getCardData((function(a){n.setData({singleData:a,freshNum:(new Date).getTime()}),wx.stopPullDownRefresh()}))},onLoad:function(a){console.log("notClaimCardDetail.onload",a),n=a,this.gainEntInfoMsg()},onShow:function(){var n=this;t.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading(),this.getCardData((function(a){n.setData({singleData:a,freshNum:(new Date).getTime()})}))},getCardData:function(a,e){t.setRequest({url:"wxCardSelectByWebId",data:{vcardId:n.vcardId}},(function(n){a&&a(n)}),(function(){e&&e()}),(function(){t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},gainEntInfoMsg:function(){var a=this;t.setRequest({url:"tEntInfoGainEntInfoMsg",data:{entId:n.entId}},(function(n){a.setData({entInfoMsg:n})}))},editCard:function(){var e=this.data.singleData,i=this.data.entInfoMsg;e&&i&&(e.modelIndex&&"WebTemp"!==e.modelIndex.type?a.showtoast("无操作权限","none",2e3):i.openId==t.client.openid?wx.navigateTo({url:"/pages/companyManage/cardInformationEdit/cardInformationEdit?entId="+n.entId}):a.showtoast("无操作权限","none",2e3))},onShareAppMessage:function(e){var i;return"你的电子名片已制作完成，请尽快认领",i=t.source.shareClaimfilling+encodeURIComponent(n.entName),a.shareAppMessa({title:"你的电子名片已制作完成，请尽快认领",path:"pages/companyManage/inviteBinding/inviteBinding?entId="+n.entId,imageUrl:i})}}); 
 			}); 	require("pages/companyManage/notClaimCardDetail/notClaimCardDetail.js");
 		__wxRoute = 'pages/companyManage/searchPage/searchPage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/searchPage/searchPage.js';	define("pages/companyManage/searchPage/searchPage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e,a=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/toConsumableArray")),r=getApp(),n=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{tip:{show:!1},anonymous:r.source.anonymous,quickBuild:{show:!1},myMessage:{},confirmCon:{show:!1},myConnections:[],cardStoreList:[],listMembers:[],delSeaCard:"",options:{},entId:"",pageType:"",tmpList:[],enterprisesData:{}},onLoad:function(a){console.log("searchPage.onload",a),e=a;var r=[],n=[],i=[],s={},o=(t=getCurrentPages())[t.length-2].data;if("shareCardlibrary"==e.main)for(var c=0;c<o.cardStoreList.data.length;c++)for(var d=o.cardStoreList.data[c],u=0;u<d.cards.length;u++)r.push(d.cards[u]);"coreTeam"==e.main&&(n=o.allMembers,i=o.tmpList,s=o.enterprisesData),this.setData({cardStoreList:r,listMembers:n,tmpList:i,enterprisesData:s,focus:!0,entId:e.entId,pageType:e.main}),this.getUserSetting()},getUserSetting:function(){var t=this;r.getSettingMessage((function(e){t.setData({getSettingMessage:e.u})}))},off:function(){wx.navigateBack({delta:1})},input:function(t){this.setData({"tip.con":t.detail.value}),this.searchMyCon(t)},searchMyCon:function(t){var a=this,r=[];"shareCardlibrary"==e.main?r=this.data.cardStoreList:"coreTeam"==e.main&&(r=this.data.listMembers),n.regMatchNew(t.detail.value,r,(function(e){e.length>0||!t.detail.value?a.setData({"tip.show":!1,myConnections:e}):e.length<=0&&a.setData({"tip.show":!0,myConnections:[]})}))},toShareDetail:function(t){var e=t.currentTarget.dataset.id;wx.navigateTo({url:"../shareCardlibraryDetail/shareCardlibraryDetail?openid="+r.client.openid+"&id="+e+"&formtoken="+t.currentTarget.dataset.formtoken})},toDetail:function(t){var e=t.currentTarget.dataset.formtoken,a=t.currentTarget.dataset.cardId,r=t.currentTarget.dataset.tplId,n=t.currentTarget.dataset.role,i=t.currentTarget.dataset.vcardId,s=this.data.entId;if(1==n){if(!e)return;this._toEdit(a,e,r)}else i&&wx.navigateTo({url:"/pages/companyManage/coreTeamDetail/coreTeamDetail?vcardId=".concat(i,"&entId=").concat(s,"&main=searchPage")})},_toEdit:function(t,e,n){r.burying.setPoint(r,920);var i,s,o=this.data.enterprisesData,c=this.data.tmpList;console.log("tmpList",c);var d=(0,a.default)(c.filter((function(t){if(t.tplId==n)return t}))),u=d[0];d.slice(1);i=u.deptId?u.deptId:"",s=u.useNumb?u.useNumb:0,wx.navigateTo({url:"/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(t,"&formtoken=").concat(e,"&main=company&deptId=").concat(i,"&useNumb=").concat(s,"&entName=").concat(o.entName,"&entId=").concat(o.entId,"&adminOpenId=").concat(o.adminOpenId,"&entState=").concat(o.entState)})}}); 
 			}); 	require("pages/companyManage/searchPage/searchPage.js");
 		__wxRoute = 'pages/companyManage/createTeam/createTeam';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/createTeam/createTeam.js';	define("pages/companyManage/createTeam/createTeam.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../66AA26C40691379C00CC4EC37CA2E9B3.js"),a=getApp(),e=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");new t.Match("page");Page({data:{cardList:null,fillInformation:!1,qiyeData:{},matchData:{show:!1,detail:{index:"",id:"",name:""},top:0,data:[]},creatAdd:"",status:!1,buttonShow:!1,contentTestFail:!1,hadAuthentication:!1,loading:!1,sevenTip:!0,limitDays:7},onLoad:function(t){var e=this;t,this.cardListFun((function(t){e.setData({cardList:t}),a.burying.setSensorEvent(a,{CardType:"空企业页"},"CompanyViewScreen");var n=e.checkUsefulCard(e.data.cardList);if(n.length>0){var i=n[0].entName;i&&i.trim().length>0&&e.setData({"qiyeData.fullname":i,buttonShow:!0})}}))},onShow:function(){this.data.shareClick&&wx.switchTab({url:"/pages/company/company"})},cardListFun:function(t){a.setRequest({url:"cardsList",data:{openId:a.client.openid}},(function(a){t&&t(a)}))},checkUsefulCard:function(t){for(var a=t,e=[],n=0;n<a.length;n++)a[n].entId||e.push(a[n]);return e},teamInfoCurrent:function(t){this.data.enterprisesData=t,this.immediateExperience()},immediateExperience:function(){a.createTeam=!0,wx.switchTab({url:"/pages/company/company"})},editCardPageMatchSelect:function(t){a.burying.setPoint(a,591);var e=this;setTimeout((function(){e.setData({status:!0,"matchData.show":!1,"qiyeData.fullname":t.currentTarget.dataset.matchitem,buttonShow:!0})}),500)},closeWindow:function(){this.setData({fillInformation:!1})},confirmCompany:function(t){console.log(t.detail),this.teamInfoCurrent(t.detail)},onShareAppMessage:function(){return e.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=company&shareType=05",imageUrl:a.source.shareImage})}}); 
 			}); 	require("pages/companyManage/createTeam/createTeam.js");
 		__wxRoute = 'pages/companyManage/dynamicList/dynamicList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/dynamicList/dynamicList.js';	define("pages/companyManage/dynamicList/dynamicList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=getApp();Page({data:{andTeam:{records:[]},current:1,systemInfo:a.systemInfo},renew:function(){console.log("object")},onPullDownRefresh:function(){var t=this;this.data.current=1,this.teamLog((function(a){t.setData({andTeam:a})}))},onLoad:function(a){var e=this;t=getCurrentPages(),this.teamLog((function(t){e.setData({andTeam:t})}))},onReachBottom:function(){var t=this;this.data.current<this.data.andTeam.pages&&(this.data.current+=1,this.teamLog((function(a){var e=t.data.andTeam.records;e.length>0&&(a.records=e.concat(a.records)),t.setData({andTeam:a})})))},teamLog:function(e){var n=t[t.length-2].data.enterprisesData.entId,o=this.data.current;a.setRequest({url:"teamLog",data:{entId:n,current:o,size:50}},(function(t){e&&e(t)}),"",(function(){wx.stopPullDownRefresh()}))}}); 
 			}); 	require("pages/companyManage/dynamicList/dynamicList.js");
 		__wxRoute = 'pages/companyManage/joinenterprise/joinenterprise';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/joinenterprise/joinenterprise.js';	define("pages/companyManage/joinenterprise/joinenterprise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t=getApp(),n=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{fillInformation:!1,nickname:null,entname:null,cardList:null,teamData:"",entId:null,business:[],conditions:""},onLoad:function(n){var e=this;console.log("joinenterprise.onload",n),a=n,this.setData({entname:n.entname,entId:n.entId,deptId:a.deptId?a.deptId:"",openId:n.openId,adminName:n.adminName}),t.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading(),t.setRequest({url:"teamPopulation",data:{entId:n.entId}},(function(a){console.log("fff",a),"506"==a.flag?(e.setData({conditions:"2"}),t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()):(e.setData({teamData:a}),e.judgeTeamContainOpenIdFunc())}))},judgeTeamContainOpenIdFunc:function(){var a=this;t.setRequest({url:"judgeTeamContainOpenId",data:{entId:this.data.entId,openId:t.client.openid}},(function(n){n.isTeamMembers?(wx.switchTab({url:"/pages/company/company"}),wx.setStorageSync("entId",a.data.entId)):t.setRequest({url:"cardsList",data:{openId:t.client.openid}},(function(t){a.setData({cardList:t});for(var n=0,e=t,o=0;o<e.length;o++)e[o].entId&&n++;n>=100?a.setData({conditions:"1"}):a.setData({conditions:"0"})}))}),(function(){}),(function(){t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},getPhoneNumber:function(a){var e=this;a.detail.iv?t.setRequest({url:"getWxPhone",data:{iv:a.detail.iv,encryptedData:a.detail.encryptedData}},(function(a){e.setData({userPhoneNumber:a.phoneNumber}),e.joinFlowFun()}),(function(){n.showtoast("手机号授权失败","none",1e3)})):n.showtoast("授权手机号失败","none",1e3)},closeWindow:function(){this.setData({fillInformation:!1})},teamInfo:function(){console.log("teamInfo cardAddSuccessShow"),wx.setStorageSync("cardAddSuccessShow",!0),wx.switchTab({url:"/pages/company/company"})},joinFlowFun:function(){var a=this;t.burying.setPoint(t,607),this.getClaimCards((function(t){console.log("getClaimCards",t),"true"==t?(a.setData({fillInformation:!0,cardList:a.data.claimCardsData}),a.selectComponent("#cardInfor").showModal()):"false"==t&&(a.setData({fillInformation:!0,cardList:a.data.cardList}),a.selectComponent("#cardInfor").showModal())}))},getClaimCards:function(n){var e=this;t.setRequest({url:"wxEntExpandCardMsgByIphone",data:{iphone:this.data.userPhoneNumber,entId:this.data.entId,deptId:a.deptId}},(function(a){console.log("getcards",a),e.setData({claimCardsData:a}),a.length<=0?n&&n("false"):n&&n("true")}))},goHome:function(){wx.switchTab({url:"../../cardMain/cardMain"})},onUnload:function(){t.burying.setPoint(t,606)}}); 
 			}); 	require("pages/companyManage/joinenterprise/joinenterprise.js");
 		__wxRoute = 'pages/companyManage/joinenterpriseClaim/joinenterpriseClaim';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.js';	define("pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),e=getApp();Page({data:{systemInfo:e.systemInfo,getCardsData:[],claimLoading:!1,cardTipShow:!1},onLoad:function(t){console.log("joinenterpriseClaim.onload",t),a=t;var e=getCurrentPages(),i=e[e.length-2].data.claimCardsData;this.setData({entName:a.entname,getCardsData:i,checkedCards:i[0].cardId}),this.cardsList()},onShow:function(){},cardsList:function(){var a=this;e.setRequest({url:"cardsList",data:{openId:e.client.openid}},(function(t){a.setData({mycard:t})}))},cardTap:function(a){if(!this.data.claimLoading){var t=a.currentTarget.dataset.cardid;this.data.checkedCards==t?this.setData({checkedCards:!1}):this.setData({checkedCards:t})}},getUserMessa:function(a){var i=this,n=this.data.mycard.length;if(a.detail.iv){if(n<5){if(this.data.claimLoading)return;this.setData({claimLoading:!0}),this.claimCardFun((function(a){console.log("cres",a),1==a.claimState?(wx.switchTab({url:"../../cardMain/cardMain"}),e.showVideo=!0):(t.showtoast("已被他人认领","loading",2e3),setTimeout((function(){wx.navigateBack({delta:1})}),1500))}),(function(){i.setData({claimLoading:!1})}))}else this.setData({cardTipShow:!0}),e.burying.setSensorEvent(e,{PopupPromptTrigger:"名片数量达上限，领取失败",PopupPromptMainButton:"管理我的名片"},"PopupPromptShow");e.setUnion(a.detail)}else e.burying.setPoint(e,110)},modalButton:function(){e.burying.setPoint(e,740),wx.switchTab({url:"../../cardMain/cardMain"})},claimCardFun:function(a,t){var i={replaceId:!1,claimCardId:!1,isReplace:!1,entName:this.data.entName};i.claimCardId=this.data.checkedCards,e.setRequest({url:"claimCard",method:"POST",data:i},(function(t){a&&a(t)}),(function(){t&&t()}))}}); 
 			}); 	require("pages/companyManage/joinenterpriseClaim/joinenterpriseClaim.js");
 		__wxRoute = 'pages/companyManage/addrMatch/addrMatch';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/addrMatch/addrMatch.js';	define("pages/companyManage/addrMatch/addrMatch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../070F20240691379C6169482324B0E9B3.js"),a=getApp(),e=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{addrMartchData:[],valueStatus:!1,setting:!1,ifDelete:{show:!1}},onLoad:function(a){""!==a.creatAdd&&(this.setData({valueStatus:!0,value:a.creatAdd}),(0,t.matchFun)(a.creatAdd,this))},onShow:function(){this.settingMessage(),console.log("haha",getCurrentPages())},settingMessage:function(){var t=this;try{wx.getSetting&&wx.getSetting({success:function(a){a.authSetting["scope.userLocation"]||null==a.authSetting["scope.userLocation"]?t.setData({setting:!0}):t.setData({setting:!1})}})}catch(t){}},clear:function(){this.setData({addrMartchData:[],value:"",valueStatus:!1,focus:!0})},focus:function(a){(0,t.matchFun)(a.detail.value,this)},input:function(a){(0,t.matchFun)(a.detail.value,this)},confirm:function(t){var a=getCurrentPages();a[a.length-2].setData({creatAdd:t.detail.value}),wx.navigateBack({delta:1})},getPosition:function(){var t=this;this.data.loading||(this.setData({loading:!0}),wx.getLocation({success:function(a){wx.chooseLocation({latitude:a.latitude,longitude:a.longitude,success:function(t){var a=getCurrentPages();a[a.length-2].setData({creatAdd:t.address+t.name}),wx.navigateBack({delta:1})},fail:function(){e.showtoast("获取位置失败","loading",1500),t.setData({loading:!1})}})},fail:function(a){e.showtoast("获取位置失败","loading",1500),t.setData({loading:!1}),t.settingMessage()}}))},blur:function(t){},selectAddr:function(t){var a=t.currentTarget.dataset.detail,e=getCurrentPages();e[e.length-2].setData({creatAdd:a}),wx.navigateBack({delta:1})},onShareAppMessage:function(){return e.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=addrMatch&shareType=05",imageUrl:a.source.shareImage})}}); 
 			}); 	require("pages/companyManage/addrMatch/addrMatch.js");
 		__wxRoute = 'pages/companyManage/configurationStyle/configurationStyle';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/configurationStyle/configurationStyle.js';	define("pages/companyManage/configurationStyle/configurationStyle.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,n)}(t))){var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}require("../../../@babel/runtime/helpers/Arrayincludes");var n,a=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),r=getApp();Page({data:{systemInfo:r.systemInfo,styleCon:[],company:"",anonymous:r.source.anonymous,mark:"",startUse:!1,tipPos:{isShow:!1},chooseDeptList:[],sheetShow:!1,current:0,deptId:"",startAnimation:!1,freshTemp:!1},onLoad:function(t){var e=this;console.log("style.onload",t),t.roleId=Number(t.roleId),n=t,this.setData({roleId:t.roleId,mark:(new Date).getTime()});var a=getCurrentPages();this.setData({company:a[a.length-2].data.enterprisesData.entName,enterprisesData:a[a.length-2].data.enterprisesData}),this.initCompanyTip(),this.tplFun(n.entId,(function(t){e.dataFun(t),e.getDeptList(e.data.current)}))},onShow:function(){var t=this;this.data.freshTemp&&(this.data.freshTemp=!1,this.tplFun(n.entId,(function(e){t.dataFun(e),t.getDeptList(t.data.current)})))},tplFun:function(t,e){r.setRequest({url:"tplGetTplList",data:{entId:t}},(function(t){e&&e(t)}))},dataFun:function(t){for(var e=t,n=[],a=[],r={},i=!1,o=0;o<e.length;o++)-1,r=e[o],(a=e[o].deptNames)&&(a=a.split(","),r.pDept=a,n.push(r)),1!=e[o].tplType&&(i=!0);this.setData({styleCon:n,mark:(new Date).getTime(),startUse:i});for(var s=[],l=0,u=n;l<u.length;l++){var p=u[l];3==p.tplType?s.push(p.tplBaseNum):p.defaultTplUrl=p.tplUrl}this.getDefaultTmp(s.toString(),n)},getDefaultTmp:function(e,n){var a=this;this.curModelFun(e,(function(e){if(e&&"模板库中不存在该模板"==e.msg)n.defaultTplUrl=n[0].tplUrl,n.logoStyle="";else{var r,i=t(e);try{var o=function(){var t=r.value;n.map((function(e){e.tplBaseNum==t.libraryId&&(e.defaultTplUrl=e.tplUrl,e.logoStyle=JSON.parse(t.logoStyle))}))};for(i.s();!(r=i.n()).done;)o()}catch(t){i.e(t)}finally{i.f()}}a.setData({styleCon:n}),console.log("styleCon",a.data.styleCon)}))},swiperChange:function(t){this.data.current!=t.detail.current&&this.setData({current:t.detail.current,startAnimation:!0}),this.getDeptList(this.data.current),r.burying.setPoint(r,904)},getDeptList:function(t){var e=this;this.data.styleCon&&this.data.styleCon.filter((function(n,a){if(a==t&&n.deptId){var r=new Array,i=new Array;r=n.deptId.split(","),(i=(i=n.deptNames.split(",")).map((function(t,e){return{text:t,id:r[e]}}))).push({text:"取消",color:"#F33632"}),console.log("list",i),e.setData({chooseDeptList:i})}}))},curModelFun:function(t,e){r.setRequest({url:"tplGetlibraryByLid",data:{lid:t}},(function(t){e&&e(t)}),(function(){}))},openSheet:function(){this.setData({sheetShow:!0})},sheetItemTap:function(t){this.setData({sheetShow:!1}),t.detail&&(console.log(t.detail,this.data.chooseDeptList[t.detail]),this.setData({deptId:this.data.chooseDeptList[t.detail].id}))},needRoot:function(){a.showtoast("修改样式需要管理员权限","none",2e3)},initCompanyTip:function(){try{var t=[],e=!1;wx.getStorageSync("CompanyTip")?(t=wx.getStorageSync("CompanyTip")).includes(n.entId)?e=!1:(e=!0,t.push(n.entId),wx.setStorageSync("CompanyTip",t)):(t.push(n.entId),wx.setStorageSync("CompanyTip",t),e=!0),this.setData({"tipPos.isShow":e})}catch(t){}},setCompanyTip:function(){this.setData({"tipPos.isShow":!0})},closeTip:function(){this.setData({"tipPos.isShow":!1})},changeStyle:function(t){var e=t.currentTarget.dataset.tag,a=t.currentTarget.dataset.ind,i=t.currentTarget.dataset.tmpid,o=t.currentTarget.dataset.deptNames;console.log("deptNames",o);var s="false";this.data.startUse&&(s="true"),!e&&(e="no");try{r.burying.setPoint(r,903),r.burying.setSensorEvent(r,{Number:i,Location:"编辑选择"},"ChooseTemplate")}catch(t){}wx.navigateTo({url:"../configurationChangeStyle/configurationChangeStyle?tplBaseNum="+e+"&ind="+a+"&entId="+n.entId+"&sUse="+s+"&tplDefine="+encodeURIComponent(o)})},inviteSensor:function(){r.burying.setPoint(r,925)},finishSwiper:function(t){},onShareAppMessage:function(t){console.log(t);var e,n,i;return i=t.target&&t.target.dataset&&t.target.dataset.id||"",n=this.data.enterprisesData,e=r.source.shareClaimfilling+encodeURIComponent(n.entName),a.shareAppMessa({title:"邀请你加入企业，一起使用电子名片",path:"pages/companyManage/inviteBindingWechat/inviteBindingWechat?scene="+i,imageUrl:e})}}); 
 			}); 	require("pages/companyManage/configurationStyle/configurationStyle.js");
 		__wxRoute = 'pages/companyManage/configurationChangeStyle/configurationChangeStyle';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/configurationChangeStyle/configurationChangeStyle.js';	define("pages/companyManage/configurationChangeStyle/configurationChangeStyle.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")),a=getApp(),n=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{cardsData:[],checkedIndex:0,autoStyleLayerShow:!1,cardsWidth:2260,logo:"",initLogo:"",initTag:0,initTplName:"",tplDefine:"",modalShow:!1,defaultData:{},defaultCard:"",defaultStatus:"",entId:"",startUse:"false",customShow:!0,preChangeType:"公有",current:0,deptId:"",startAnimation:!1,freshTemp:!1,contentTestFail:[!1,!1,!1,!1],mark:"",showSetting:!1,showTip:!1},onLoad:function(e){var a=this;t=e;var n=getCurrentPages(),i=n[n.length-2].data.styleCon[t.ind];console.log("configurationChangeStyle.onload",e,n[n.length-2].data.styleCon);var o="公有";i.tplType&&(o=1==i.tplType?"公有":2==i.tplType?"自主设计":3==i.tplType?"推荐":"定制"),this.setData({defaultData:i,initTag:i.tplBaseNum,initLogo:i.tplLogo,initTplName:i.deptNames,tplDefine:"未命名"==i.deptNames||"未命名样式"==i.deptNames?"":i.deptNames,deptId:i.deptId,entId:e.entId,logo:i.tplLogo?i.tplLogo:"",startUse:e.sUse,preChangeType:o,mark:(new Date).getTime(),entName:i.entName,intro:i.intro,entAddr:i.entAddr,videoList:i.video||[],photoList:i.desc||[]}),i.tplLogo&&i.tplLogo.indexOf("wx.qlogo.cn")>=0&&this.setData({initLogo:"",logo:""}),this.modelFun((function(t){a.curModelFun((function(){console.log("当前模板是非推荐样式",t),a.setData({cardsData:t,defaultCard:a.data.defaultData.tplUrl,checkedIndex:-1,defaultStatus:"非推荐样式"}),a.getDeptList(a.data.current),a.cardsWidthFun("no")}),(function(e){console.log("当前模板是推荐样式",t,e);for(var n=t,i=e,o=-1,s={},d=0;d<n.length;d++)if(n[d].libraryId==i.libraryId){s=n[d],o=d;break}-1!==o?(n.splice(o,1),n.unshift(s)):n.unshift(i),a.setData({cardsData:n,checkedIndex:0,defaultStatus:"推荐样式",defaultCard:""}),a.getDeptList(a.data.current),a.cardsWidthFun("yes")}))}))},onShow:function(){this.setData({logo:this.data.logo,entAddr:this.data.entAddr})},modelFun:function(t){a.setRequest({url:"tplTplLibrary"},(function(e){for(var a=0;a<e.length;a++)e[a].logoStyle=JSON.parse(e[a].logoStyle);t&&t(e)}),(function(){wx.navigateBack({delta:1})}))},curModelFun:function(e,n){"no"==t.tplBaseNum?e&&e():a.setRequest({url:"tplGetlibraryByLid",data:{lid:t.tplBaseNum}},(function(t){"模板库中不存在该模板"==t.msg?e&&e():(t[0].logoStyle=JSON.parse(t[0].logoStyle),t=t[0],n&&n(t))}),(function(){wx.navigateBack({delta:1})}))},cardsWidthFun:function(t){var e=!0;"no"==t&&"自主设计"==this.data.preChangeType&&(e=!1),this.setData({customShow:e})},defaultCardTap:function(){this.setData({checkedIndex:-1,defaultStatus:"非推荐样式"})},autoCardTap:function(){a.burying.setPoint(a,899),this.setData({autoStyleLayerShow:!0})},known:function(){this.setData({autoStyleLayerShow:!1})},complete:function(){var t=this,e=this.data.nTag,i=this.data.logo,o=this.data.tplDefine,s=this.data.entName,d=this.data.intro,r=this.data.entAddr,l=this.data.photoList,u=this.data.videoList;if(a.burying.setPoint(a,906),!this.data.loading)if("去官网自定义样式"!=this.data.defaultStatus)if(this.data.entName&&this.data.entName.trim().length){this.setData({loading:!0});var c=[o,s,r,d];"非推荐样式"==this.data.defaultStatus?a.contentTestFun(c,(function(a){if(a.allwords<=0)t.updateTpl(e,"",{tplName:o,entName:s,intro:d,entAddr:r,photoList:l,videoList:u});else{var i=a.errorArr,c=[!1,!1,!1,!1];i.forEach((function(t){c[t]=!0})),console.log(c),n.testShowmodal(),t.setData({loading:!1,contentTestFail:c})}})):e===this.data.initTag&&i===this.data.initLogo&&o===this.data.initTplName?wx.navigateBack({delta:1}):"false"==this.data.startUse?a.setRequest({url:"tplAddTuiJianTplFromWx",method:"POST",data:{entId:this.data.entId,tag:e,logoUrl:i,userOpenId:a.client.openid}},(function(){var t=getCurrentPages();t[t.length-2].data.freshTemp=!0}),(function(){t.setData({loading:!1})}),(function(){})):a.contentTestFun(c,(function(a){if(a.allwords<=0)t.updateTpl(e,i,{tplName:o,entName:s,intro:d,entAddr:r,photoList:l,videoList:u});else{n.testShowmodal();var c=a.errorArr,h=[!1,!1,!1,!1];c.forEach((function(t){h[t]=!0})),n.testShowmodal(),t.setData({loading:!1,contentTestFail:h})}}))}else n.showmodal({data:"请填写公司名称",text:"我知道了",color:"#2979ff",cancel:!1});else this.autoCardTap()},updateTpl:function(t,e,i){var o=this;a.setRequest({url:"tplUpdateTpl",method:"POST",data:{lid:t,logo:e,logoUpState:1,tplId:this.data.defaultData.tplId,tplDefine:i.tplName,entName:i.entName,intro:i.intro,entAddr:i.entAddr,desc:i.photoList.length?i.photoList:null,video:i.videoList.length?i.videoList:null,deptId:this.data.deptId}},(function(){a.refreshCardStatus=!0,o.sensorSave(i);var t=getCurrentPages();t[t.length-2].data.freshTemp=!0,n.showtoast("名片样式已更新","none",2e3);var e=null;clearTimeout(e),e=setTimeout((function(){wx.navigateBack({delta:1})}),2e3)}),"",(function(){o.setData({loading:!1})}))},uploadLogo:function(){a.burying.setPoint(a,905),this.upldFun()},updateLogo:function(){this.upldFun()},introFun:function(t){this.data.introTest&&this.setData({introTest:!1}),this.setData({intro:t.detail})},upldFun:function(){var t=this;function e(e){wx.chooseImage({count:1,sourceType:[e],sizeType:["compressed"],success:function(e){wx.navigateTo({url:"/pages/cardMain/upldTbcardLogo/upldTbcardLogo?imgurl="+e.tempFilePaths[0]+"&backcolor=white&main=configurationChangeStyle",complete:function(){t.data.logoIn=!0}})}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:e("camera");break;case 1:e("album")}}catch(t){}}})},deleteLogo:function(){this.setData({modalShow:!0})},deleteConfirm:function(){this.setData({logo:""})},deleteCancel:function(){},swiperChange:function(t){this.data.current!=t.detail.current&&this.setData({current:t.detail.current,startAnimation:!0}),this.data.cardsData&&this.data.cardsData.length&&this.getDeptList(this.data.current)},getDeptList:function(t){this.data.defaultCard?0===t?this.setData({nTag:0,checkedIndex:-1,defaultStatus:"非推荐样式"}):(t-=1,this.setData({nTag:this.data.cardsData[t].libraryId,checkedIndex:t,defaultStatus:"推荐样式"})):t==this.data.cardsData.length?this.setData({nTag:0,checkedIndex:-1,defaultStatus:"去官网自定义样式"}):this.setData({nTag:this.data.cardsData[t].libraryId,checkedIndex:t,defaultStatus:"推荐样式"})},addAddr:function(t){var e=t.currentTarget.dataset.index;this.data.contentTestFail[e]=!1,this.setData({contentTestFail:this.data.contentTestFail}),a.burying.setPoint(a,1070),wx.navigateTo({url:"/pages/cardMain/formMinimalistAddr/formMinimalistAddr?current=entAddr"})},input:function(t){var a=t.currentTarget.dataset.name,n=t.detail.value;return n=n&&n.trim().length>40?n.slice(0,40):n.trim(),this.setData((0,e.default)({},a,String(n)||"")),n},focus:function(t){var e=t.currentTarget.dataset.index;switch(t.currentTarget.dataset.name){case"tplDefine":break;case"entName":a.burying.setPoint(a,1069)}this.data.contentTestFail[e]=!1,this.setData({contentTestFail:this.data.contentTestFail})},testFailFunc:function(t){var e=t.detail.index;this.data.contentTestFail[e]=!1,this.setData({contentTestFail:this.data.contentTestFail})},videoFun:function(t){this.setData({videoList:t.detail})},photoFun:function(t){this.setData({photoList:t.detail})},previewPhoto:function(t){wx.navigateTo({url:"/pages/cardMain//pages/cardMain/customePages/imagesShowMinimalist/imagesShowMinimalist?currentindex="+t.detail+"&main=formEditMinimalist"})},showCompanyTipFunc:function(){this.selectComponent("#companyTip").showTip()},showSettingTipFunc:function(){this.selectComponent("#setting").showTip()},sensorSave:function(t){var e=this.data.defaultData,n=[];[{type:"entAddr",apiType:"entAddr",name:"地址",its:"String"},{type:"intro",apiType:"intro",name:"业务简介",its:"String"},{type:"photoList",apiType:"desc",name:"图片",its:"Array"},{type:"videoList",apiType:"video",name:"视频",its:"Array"}].forEach((function(a){"String"==a.its?e[a.apiType]!=t[a.type]&&n.push(a.name):"Array"==a.its&&e[a.apiType]&&e[a.apiType].toString()!=t[a.type]&&t[a.type].toString()&&n.push(a.name)})),a.burying.setSensorEvent(a,{SaveSharedInformation:n.join(",")},"SaveSharedInformation")}}); 
 			}); 	require("pages/companyManage/configurationChangeStyle/configurationChangeStyle.js");
 		__wxRoute = 'pages/companyManage/pcTemplatePreview/pcTemplatePreview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/pcTemplatePreview/pcTemplatePreview.js';	define("pages/companyManage/pcTemplatePreview/pcTemplatePreview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")),t=getApp();Page({data:{previewPic:"",from:{},templateObjects:"",openid:t.client.openid},onLoad:function(o){var f=this;console.log(o),e=o,t.setRequest({url:"wxPreClaimedVcard",data:{key:e.scene}},(function(e){var t;f.setData((t={templateObjects:e},(0,a.default)(t,"from.addr1",e.addr1),(0,a.default)(t,"from.addr2",e.addr2),(0,a.default)(t,"from.addr3",e.addr3),(0,a.default)(t,"from.bpUrl",""),(0,a.default)(t,"from.company",e.company),(0,a.default)(t,"from.createCardFlag",!1),(0,a.default)(t,"from.createCardType","adminClaimsCard"),(0,a.default)(t,"from.customAvatar",""),(0,a.default)(t,"from.desc",[]),(0,a.default)(t,"from.email1",e.email1),(0,a.default)(t,"from.email2",e.email2),(0,a.default)(t,"from.email3",e.email3),(0,a.default)(t,"from.fax",e.fax),(0,a.default)(t,"from.folder","TEMPLATES_V9"),(0,a.default)(t,"from.formid",""),(0,a.default)(t,"from.id",""),(0,a.default)(t,"from.industry",""),(0,a.default)(t,"from.industry_data",""),(0,a.default)(t,"from.intro",""),(0,a.default)(t,"from.job",e.job),(0,a.default)(t,"from.logo",""),(0,a.default)(t,"from.mophone1",e.mophone1),(0,a.default)(t,"from.mophone2",e.mophone2),(0,a.default)(t,"from.mophone3",e.mophone3),(0,a.default)(t,"from.name",e.name),(0,a.default)(t,"from.phone1",e.phone1),(0,a.default)(t,"from.phone2",e.phone2),(0,a.default)(t,"from.phone3",e.phone3),(0,a.default)(t,"from.remark",""),(0,a.default)(t,"from.showconfig",{custom:[],configShow:e.vcardConfig.configShow}),(0,a.default)(t,"from.tempId","TKWhite-NewEmpty"),(0,a.default)(t,"from.tempName",""),(0,a.default)(t,"from.userpic",e.vcardImg),(0,a.default)(t,"from.video",[]),(0,a.default)(t,"from.website",e.website),(0,a.default)(t,"from.wechat",e.wechat),(0,a.default)(t,"from.wechat2",e.wechat2),(0,a.default)(t,"from.wechat3",e.wechat3),t))}))},getUserInfo:function(e){var o=this;"getUserInfo:ok"==e.detail.errMsg&&(t.setUnion(e.detail),t.burying.setPoint(t,813),t.setRequest({url:"createCard",method:"POST",data:this.data.from},(function(e){o.setData((0,a.default)({},"templateObjects.vcardId",e.id)),t.setRequest({url:"wxClaimedVcard",method:"POST",data:o.data.templateObjects},(function(e){t.previewPcprompt=!0,wx.switchTab({url:"/pages/cardMain/cardMain"})}))})))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/pcTemplatePreview/pcTemplatePreview.js");
 		__wxRoute = 'pages/companyManage/serviceIntro/serviceIntro';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/serviceIntro/serviceIntro.js';	define("pages/companyManage/serviceIntro/serviceIntro.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{systemInfo:t.systemInfo,isTop:!0,introBac:t.source.prefix+"/img/company-scan20200804.png",bgServiceIntro:t.source.bgServiceIntro,bgIospc:t.source.bgIospc,comStatus:"",restDate:"",leftTime:"",shishou:"",yingshou:"",youhui:"",expiryDate:""},onLoad:function(t){console.log("serviceIntro.onload",t),this.setData({newDate:t.newDate,comStatus:t.comStatus,restDate:t.restDate,restDay:t.restDay,shishou:Number(t.shishou),yingshou:Number(t.yingshou)}),this.getLeftTime(),this.getYouhui()},copyClickBoard:function(){"到期"==this.data.comStatus?t.burying.setPoint(t,935):t.burying.setPoint(t,934),wx.setClipboardData({data:"www.microvcard.com",success:function(){e.hidetoast(0),e.showtoast("网址已复制","none",2e3)}})},getLeftTime:function(){var t=this.data.restDate,e=new Date(this.data.restDate),o=e.getTime(e);console.log(o);t.split("-")[1];var n=t.split("-")[2];this.setData({leftTime:n-(new Date).getDate(),expiryDate:"".concat(t," 23:59")})},getYouhui:function(){var t=this.data.shishou,e=this.data.yingshou;this.setData({youhui:e-t>0?(e-t)/100:0})},scanCode:function(){var o=this;t.burying.setPoint(t,874),wx.scanCode({success:function(t){var n="";t.scanType&&"WX_CODE"==t.scanType?(n=decodeURIComponent(t.path),o.loginFun(n)):t.scanType&&"QR_CODE"==t.scanType?(n=decodeURIComponent(t.result),o.loginFun(n)):e.showtoast("二维码错误","none",1500)},fail:function(t){console.log("scanfail",t)}})},loginFun:function(o){var n,a=t.touxiang;n=o.split("?scene="),a.avatarUrl?n.length>1?this.loginReq(n[1],(function(){wx.navigateTo({url:"../loginSuc/loginSuc"})})):e.showtoast("二维码错误","none",1500):n.length>1?wx.navigateTo({url:"/pages/companyManage/webLogin/webLogin?scene="+n[1]+"&path=webscan&origin=serviceIntro"}):e.showtoast("二维码错误","none",1500)},loginReq:function(o,n,a){t.setRequest({url:"wxLogin",method:"POST",data:{openId:t.client.openid,headPhotoUrl:t.touxiang.avatarUrl,petName:t.touxiang.nickName,key:o,scanState:1}},(function(t){t.flag?e.showtoast("登录已过期，请在官网重新扫码登录","none",2e3):n&&n()}),(function(){e.showtoast("登录已过期，请在官网重新扫码登录","none",2e3)}))}}); 
 			}); 	require("pages/companyManage/serviceIntro/serviceIntro.js");
 		__wxRoute = 'pages/companyManage/miniWeb/miniWeb';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWeb/miniWeb.js';	define("pages/companyManage/miniWeb/miniWeb.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e,a=getApp();Page({data:{systemInfo:a.systemInfo,topType:"",webData:{},editType:"",entName:"",leadModalShow:!1,autherizedData:{autherized:!1},upldImageSuccess:!1,upldImageData:{},deleteImageTipShow:!1,comStatus:""},onLoad:function(a){console.log("miniweb.onload",a),!a.entId&&a.scene&&(a.entId=decodeURIComponent(a.scene)),t=getCurrentPages(),e=a,this.setData({restDay:a.restDay,comStatus:a.comStatus,options:a}),this.navConfig(),this.webDataFun(),this.autherizedFun(),"company"==a.main&&a.restDay>0&&this.leadMessage()},onShow:function(){var t=this;this.data.editTap&&(this.data.editTap=!1,this.webReq(e.entId,(function(e){t.setData({webData:e||t.data.webData})}))),this.data.upldImageSuccess&&(this.data.upldImageSuccess=!1,this.setData({upldImageData:this.data.upldImageData}),this.updateImage((function(e){t.setData({webData:e||t.data.webData})})))},navConfig:function(){1==getCurrentPages().length?this.setData({topType:"home"}):this.setData({topType:"prePage"})},webDataFun:function(){var a=this;if("company"==e.main){var n=t[t.length-2].data.enterprisesData;this.setData({entName:n.entName}),this.webReq(e.entId,(function(t){var e=t,i="look";i=1==n.isAdmin&&e&&e.id?"edit":1==n.isAdmin?"add":"look",a.setData({webData:e,editType:i})}))}else this.webReq(e.entId,(function(t){a.setData({webData:t||{entId:e.entId},editType:"look"})}))},webReq:function(t,e,n){var i=this;a.setRequest({url:"webEntWebsiteFind",data:{entId:t}},(function(a){!a&&(a={entId:t,fullname:i.data.entName}),a&&a.id&&"add"==i.data.editType&&i.setData({editType:"edit"}),e&&e(a)}))},updateImage:function(t){var a=this,n=this.data.editType;"add"==n?this.addWebsite((function(n){a.setData({webData:n||{entId:e.entId},editType:"edit"}),a.updateImageData(a.data.upldImageData.url,(function(e){t&&t(e)}))})):"edit"==n&&this.updateImageData(this.data.upldImageData.url,(function(e){t&&t(e)}))},addWebsite:function(t,n,i){a.setRequest({url:"webEntWebsiteAdd",method:"POST",data:{id:"",openId:a.client.openid,entId:e.entId,fullname:this.data.webData.fullname,logo:"",slogan:"",website:"",intro:"",products:[],industryCode:"",industryName:"",companyPhoto:[],companyVideo:[]}},(function(e){t&&t(e)}),(function(){n&&n()}),(function(){i&&i()}))},updateImageData:function(t,n,i,d){a.setRequest({url:"companywebsiteEntHomePageBg",method:"POST",data:{entId:e.entId,bg:t}},(function(t){n&&n(t)}),(function(){i&&i()}),(function(){d&&d()}))},autherizedFun:function(){var t=this;a.setRequest({url:"webCheckEntAuth",data:{entId:e.entId}},(function(e){t.setData({autherizedData:{autherized:e.auth,name:e.authEntName}})}))},leadMessage:function(){var n=this;try{var i=e.entId;if(!wx.getStorageSync(i+"_judgeAdminHaveEntPage"))"add"==t[t.length-2].data.webDataCon.type&&a.setRequest({url:"wxEntExpandJudgeAdminHaveEntPage",data:{entId:i,openId:a.client.openid}},(function(t){wx.setStorageSync(i+"_judgeAdminHaveEntPage",!0),t.haveEntPage&&n.setData({leadModalShow:!0,companyData:t.company})}))}catch(t){}},leadIn:function(){var t=this;this.data.companyIn||(a.burying.setPoint(a,823),this.data.companyIn=!0,this.companyHomePageAdd((function(e){t.companyEditFun((function(e){t.data.companyIn=!1,t.setData({leadModalShow:!1,webData:e,editType:"edit"})}),(function(){t.data.companyIn=!1,t.setData({leadModalShow:!1})}))}),(function(){t.data.companyIn=!1,t.setData({leadModalShow:!1})})))},leadCancel:function(){a.burying.setPoint(a,824),this.setData({leadModalShow:!1})},companyHomePageAdd:function(e,n){for(var i=this.data.companyData,d=t[t.length-2].data.enterprisesData.entId,o=[],s=JSON.parse(i.products),u=0;u<s.length;u++)s[u].name.length>30&&(s[u].name=s[u].name.slice(0,30)),o.push(s[u]);a.setRequest({url:"webEntWebsiteAdd",method:"POST",data:{id:"",entId:d,openId:a.client.openid,fullname:i.fullname,logo:i.logo,slogan:i.slogan,visible:!0,website:i.website,intro:i.intro,products:o,industryCode:"",industryName:"",companyPhoto:[],companyVideo:[]}},(function(t){e&&e(t)}),(function(){n&&n(res)}))},companyEditFun:function(t,n){var i=e.entId;a.setRequest({url:"webEntWebsiteFind",data:{entId:i}},(function(e){t&&t(e)}),(function(t){n&&n(t)}))},preview:function(t){wx.previewImage({urls:[t.currentTarget.dataset.detail]})},toChanpinShow:function(t){wx.navigateTo({url:"../miniWebProductionEdit/miniWebProductionEdit?detail=show&id="+this.data.webData.id+"&ind="+t.currentTarget.dataset.ind})},addWeb:function(){this.data.editTap=!0,a.burying.setPoint(a,822),wx.navigateTo({url:"../miniWebEdit/miniWebEdit?id=-1&detail=add&main="+e.main+"&entId="+e.entId})},editWeb:function(){this.data.editTap=!0;var t=this.data.webData;a.burying.setPoint(a,822),wx.navigateTo({url:"../miniWebEdit/miniWebEdit?id="+t.id+"&detail=edit&main="+e.main+"&entId="+e.entId})},editDisabled:function(){a.burying.setPoint(a,822)},upldBackgroundImage:function(){var t=["拍照","从手机相册选择"],e=this;function n(t){wx.chooseImage({count:1,sourceType:[t],sizeType:["compressed"],success:function(t){wx.navigateTo({url:"../miniWebCropBackground/miniWebCropBackground?imgurl="+t.tempFilePaths[0]})}})}this.data.webData&&this.data.webData.bg&&(t=["拍照","从手机相册选择","删除背景"]),this.data.upldImageSuccess=!1,a.burying.setPoint(a,1023),wx.showActionSheet({itemList:t,success:function(t){try{switch(t.tapIndex){case 0:a.burying.setPoint(a,1024),n("camera");break;case 1:a.burying.setPoint(a,1025),n("album");break;case 2:a.burying.setPoint(a,1026),e.setData({deleteImageTipShow:!0})}}catch(t){}},fail:function(t){a.burying.setPoint(a,1027)}})},deleteImageCancel:function(){this.setData({deleteImageTipShow:!1})},deleteImageConfirm:function(){var t=this;a.burying.setPoint(a,1028),this.updateImageData("",(function(e){t.setData({deleteImageTipShow:!1,upldImageData:{},webData:e||t.data.webData})}))}}); 
 			}); 	require("pages/companyManage/miniWeb/miniWeb.js");
 		__wxRoute = 'pages/companyManage/miniWebDemo/miniWebDemo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWebDemo/miniWebDemo.js';	define("pages/companyManage/miniWebDemo/miniWebDemo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n="https://desc-1255379270.image.myqcloud.com/s_",a="https://img-1255379270.file.myqcloud.com/";Page({data:{autherizedData:{autherized:!0,name:"北京微名天下科技有限公司"},webData:{id:"demo",entId:"demo",fullname:"北京微名天下科技有限公司",slogan:"递名片，助力每一次商务社交",products:[{name:"“递名片”小程序",image:[{url:n+"opencv20200714101450216PiuY6fdD.png",thumb_url:n+"opencv20200714101450216PiuY6fdD.png?imageView2/0/w/200/h/200"}],intro:"产品描述：一款为商务人士提供免费的电子名片制作，名片收发，和名片信息管理的微信小程序"},{name:"“递名片”企业版",image:[{url:n+"opencv20200714101450216PiuY6fdD.png",thumb_url:n+"opencv20200714101450216PiuY6fdD.png?imageView2/0/w/200/h/200"}],intro:"产品描述：专为企业打造的电子名片制作工具"}],companyPhoto:[{url:a+"img/companyManage/intro0_20200709.png",thumb_url:n+"img/companyManage/intro0_20200709.png?imageView2/0/w/200/h/200"},{url:a+"img/companyManage/intro1_20200709.png",thumb_url:n+"img/companyManage/intro1_20200709.png?imageView2/0/w/200/h/200"},{url:a+"img/companyManage/intro2_20200709.png",thumb_url:n+"img/companyManage/intro2_20200709.png?imageView2/0/w/200/h/200"},{url:a+"img/companyManage/intro3_20200709.png",thumb_url:n+"img/companyManage/intro3_20200709.png?imageView2/0/w/200/h/200"},{url:a+"img/companyManage/intro4_20200709.png",thumb_url:n+"img/companyManage/intro4_20200709.png?imageView2/0/w/200/h/200"},{url:a+"img/companyManage/intro5_20200709.png",thumb_url:n+"img/companyManage/intro5_20200709.png?imageView2/0/w/200/h/200"},{url:a+"img/companyManage/intro6_20200709.png",thumb_url:n+"img/companyManage/intro6_20200709.png?imageView2/0/w/200/h/200"},{url:a+"img/companyManage/intro7_20200709.png",thumb_url:n+"img/companyManage/intro7_20200709.png?imageView2/0/w/200/h/200"},{url:a+"img/companyManage/intro8_20200709.png",thumb_url:n+"img/companyManage/intro8_20200709.png?imageView2/0/w/200/h/200"}],companyVideo:[],visible:"true",website:"https://www.microvcard.com",logo:"https://minicard-1255379270.cosbj.myqcloud.com/s_opencv20200708150807507RJrbgBhf.png",intro:"北京微名天下科技有限公司以微信小程序“递名片”和“递名片企业版”两款产品为载体，为个人和企业解决电子名片制作、名片便捷收发等问题。\n“递名片”小程序主要基于微信生态，提供电子名片制作，各场景中的名片收发，以及名片信息管理功能。\n“递名片企业版”提供按部门配置名片样式，名片设计，批量为企业员工制作电子名片，企业微官网制作等功能，企业员工领取名片后可在微信中随意收发。",industryCode:"1113,1119",industryName:"IT/互联网,工具软件"}},onLoad:function(n){}}); 
 			}); 	require("pages/companyManage/miniWebDemo/miniWebDemo.js");
 		__wxRoute = 'pages/companyManage/miniWebDetail/miniWebDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWebDetail/miniWebDetail.js';	define("pages/companyManage/miniWebDetail/miniWebDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{autherizedData:{},webData:{}},onLoad:function(t){this.webDataFun(t.entId),this.autherizedFun(t.entId)},onShow:function(){},webDataFun:function(a){var e=this;t.setRequest({url:"webEntWebsiteFind",data:{entId:a}},(function(t){e.setData({webData:t||{}})}))},autherizedFun:function(a){var e=this;t.setRequest({url:"webCheckEntAuth",data:{entId:a}},(function(t){e.setData({autherizedData:{autherized:t.auth,name:t.authEntName}})}))}}); 
 			}); 	require("pages/companyManage/miniWebDetail/miniWebDetail.js");
 		__wxRoute = 'pages/companyManage/miniWebDetailPreview/miniWebDetailPreview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.js';	define("pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{topType:"home",systemInfo:e.systemInfo,webData:{},entName:"",autherizedData:{autherized:!1},entId:"",overDate:""},onLoad:function(e){console.log("miniwebDetailPreview.onload",e),this.data.entId=decodeURIComponent(e.scene),this.webDataFun(),this.autherizedFun(this.data.entId)},onShow:function(){},webDataFun:function(){var e=this;this.webReq(this.data.entId,(function(t){7001==t.flag?e.setData({overDate:"true"}):e.setData({overDate:"false",webData:t||{entId:e.data.entId}})}))},webReq:function(t,a,n){e.setRequest({url:"webEntWebsitePreviewLook",data:{entId:t}},(function(e){a&&a(e)}))},autherizedFun:function(t){var a=this;e.setRequest({url:"webCheckEntAuth",data:{entId:t}},(function(e){a.setData({autherizedData:{autherized:e.auth,name:e.authEntName}})}))}}); 
 			}); 	require("pages/companyManage/miniWebDetailPreview/miniWebDetailPreview.js");
 		__wxRoute = 'pages/companyManage/miniWebEdit/miniWebEdit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWebEdit/miniWebEdit.js';	define("pages/companyManage/miniWebEdit/miniWebEdit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e,a=require("../10BCDDA00691379C76DAB5A76EC0E9B3.js"),n=getApp(),i=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),o=new a.MiniWeb;Page({data:{systemInfo:n.systemInfo,topType:"prePageQA",defaultLogo:n.source.prefix+"img/defaultlogo.jpg",fullnameValue:"",fullnameInput:!1,sloganValue:"",sloganInput:!1,inputValue:"",introInput:!1,id:-1,entId:"",logo:"",fullname:"",entName:"",slogan:"",intro:"",products:[],website:"",industryCode:"",industryName:"",industryValue:"",companyPhoto:[],companyVideo:[],autherizedData:{},autherizedDetailShow:!1,testRed:{},productsInit:[],companyPhotoInit:[],companyVideoInit:[],saveModalShow:!1,deleteProductTipShow:!1},onLoad:function(e){console.log("miniwebedit.onload",e),t=e,this.huancunData(),this.renderData()},onShow:function(){this.data.logoIn&&(this.data.logoIn=!1,this.setData({logo:this.data.logo})),this.data.industryIn&&(this.data.industryIn=!1,this.setData({industryValue:this.data.industryValue,industryCode:this.data.industryCode,industryName:this.data.industryName})),this.data.previewPhotoIn&&(this.data.previewPhotoIn=!1,this.setData({companyPhoto:this.data.companyPhoto})),this.data.productsIn&&(this.data.productsIn=!1,this.setData({products:this.data.products}))},huancunData:function(){if("add"==t.detail){var e=getCurrentPages()[getCurrentPages().length-2].data;o.initHuancun(t.entId,e.webData)}},renderData:function(){var e=this,a=getCurrentPages()[getCurrentPages().length-2].data,n=a.webData;if("add"==t.detail)try{var i=wx.getStorageSync("miniwebEdit_"+t.entId);i?(n=i,o()):o()}catch(t){o()}else o();function o(){if(e.setData({logo:n.logo?n.logo:"",fullname:n.fullname?n.fullname:"",slogan:n.slogan?n.slogan:"",intro:n.intro?n.intro:"",products:n.products?n.products:[],website:n.website?n.website:"",industryCode:n.industryCode?n.industryCode:"",industryName:n.industryName?n.industryName:"",companyPhoto:n.companyPhoto?n.companyPhoto:[],companyVideo:n.companyVideo?n.companyVideo:[]}),n.products&&n.products.length>0){for(var t=[],a=0;a<n.products.length;a++)t.push(n.products[a]);e.setData({productsInit:t})}if(n.companyPhoto&&n.companyPhoto.length>0){for(var i=[],o=0;o<n.companyPhoto.length;o++)i.push(n.companyPhoto[o]);e.setData({companyPhotoInit:i})}if(n.companyVideo&&n.companyVideo.length>0){for(var s=[],d=0;d<n.companyVideo.length;d++)s.push(n.companyVideo[d]);e.setData({companyVideoInit:s})}if(e.data.industryCode&&e.data.industryName){var u=e.data.industryName.split(",");e.setData({industryValue:u[1]})}}this.setData({autherizedData:a.autherizedData})},fullnameEdit:function(){this.setData({fullnameValue:this.data.fullname,fullnameInput:!0,"testRed.fullname":!1}),n.burying.setPoint(n,842)},fullnameInput:function(){},fullnameBlur:function(t){this.setData({fullname:t.detail.value&&t.detail.value.trim().length>0?t.detail.value:this.data.fullname,fullnameInput:!1})},industryTap:function(){this.data.industryIn=!0,wx.navigateTo({url:"../miniWebIndustryEdit/miniWebIndustryEdit"}),n.burying.setPoint(n,843)},sloganTap:function(){this.setData({sloganValue:this.data.slogan,sloganInput:!0,"testRed.slogan":!1}),n.burying.setPoint(n,844)},sloganInput:function(t){this.setData({slogan:t.detail.value})},sloganBlur:function(t){this.setData({slogan:t.detail.value&&t.detail.value.trim().length>0?t.detail.value:"",sloganInput:!1})},introTap:function(){this.setData({introValue:this.data.intro,introInput:!0,"testRed.intro":!1}),n.burying.setPoint(n,845)},introInput:function(t){this.setData({intro:t.detail.value})},introBlur:function(t){this.setData({intro:t.detail.value&&t.detail.value.trim().length>0?t.detail.value:"",introInput:!1})},websiteFocus:function(){this.setData({"testRed.website":!1}),n.burying.setPoint(n,846)},websiteInput:function(){},websiteBlur:function(t){this.setData({website:t.detail.value&&t.detail.value.trim().length>0?t.detail.value:""})},productsTap:function(e){this.data.productsIn=!0,"intro"==e.currentTarget.dataset.detail?n.burying.setPoint(n,847):n.burying.setPoint(n,848),wx.navigateTo({url:"../miniWebProductionEdit/miniWebProductionEdit?type=add&ind=0&id="+t.id+"&entId="+t.entId+"&detail="+t.detail})},productsItemTap:function(e){this.data.productsIn=!0,wx.navigateTo({url:"../miniWebProductionEdit/miniWebProductionEdit?type=edit&ind="+e.currentTarget.dataset.i+"&id="+t.id+"&entId="+t.entId+"&detail="+t.detail})},upldLogo:function(){var t=this;function e(e){wx.chooseImage({count:1,sourceType:[e],sizeType:["compressed"],success:function(e){wx.navigateTo({url:"../../cardMain/upldTbcardLogo/upldTbcardLogo?imgurl="+e.tempFilePaths[0]+"&backcolor=white&main=miniweb",complete:function(){t.data.logoIn=!0}})}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:e("camera");break;case 1:e("album")}}catch(t){}}}),n.burying.setPoint(n,841)},autherizedLook:function(){var t=this;if(this.data.autherizedDetailShow)this.setData({autherizedDetailShow:!1});else try{wx.createSelectorQuery().select("#autherized-id").boundingClientRect((function(e){e.left&&e.left>25&&t.setData({markLeft:e.left-25}),t.setData({autherizedDetailShow:!0})})).exec()}catch(e){t.setData({autherizedDetailShow:!0})}},productDelete:function(t){var a=t.currentTarget.dataset.ind;e=a,this.setData({deleteProductTipShow:!0})},deleteProductCancel:function(){this.setData({deleteProductTipShow:!1})},deleteProductConfirm:function(){var t=e,a=this.data.products;a.splice(t,1),this.setData({products:a}),this.setData({deleteProductTipShow:!1})},photoComplete:function(t){this.setData({companyPhoto:t.detail})},photoDelete:function(t){this.setData({companyPhoto:t.detail})},photoPreview:function(t){this.data.previewPhotoIn=!0,wx.navigateTo({url:"../miniWebPhotoPreview/miniWebPhotoPreview?currentindex="+t.detail+"&main=miniWebEdit&paraname=companyPhoto"})},videoComplete:function(t){this.setData({companyVideo:t.detail})},videoDelete:function(t){this.setData({companyVideo:t.detail})},saveWebContent:function(){n.burying.setPoint(n,854),this.saveWeb()},saveWeb:function(){var t=this;this.data.saveLoading||(this.setData({saveLoading:!0}),this.testContent((function(){t.webReq((function(){i.showtoast("操作成功，员工名片已同步更新","none",1e3),setTimeout((function(){wx.navigateBack({delta:1})}),800)}),(function(){wx.navigateBack({delta:1})}))}),(function(e){t.testFail(e)})))},testContent:function(t,e){var a=[this.data.fullname,this.data.slogan,this.data.intro,this.data.website];n.contentTestFun(a,(function(a){a.allwords<=0?t&&t():e&&e(a.errorArr)}),(function(){e&&e([])}))},testFail:function(t){for(var e={},a=0;a<t.length;a++)0==t[a]?e.fullname=!0:1==t[a]?e.slogan=!0:2==t[a]?e.intro=!0:3==t[a]&&(e.website=!0);this.setData({testRed:e,saveLoading:!1}),t.length>0&&i.testShowmodal()},webReq:function(e,a,i){var s={id:"add"==t.detail?"":t.id,openId:n.client.openid,entId:t.entId,fullname:this.data.fullname,logo:this.data.logo,slogan:this.data.slogan,website:this.data.website,intro:this.data.intro,products:this.data.products,industryCode:this.data.industryCode,industryName:this.data.industryName,companyPhoto:this.data.companyPhoto,companyVideo:this.data.companyVideo};n.setRequest({url:"add"==t.detail?"webEntWebsiteAdd":"webEntWebsiteUpdate",method:"POST",data:s},(function(a){o.removeHuancun(t.entId),e&&e(a)}),(function(){a&&a()}),(function(){i&&i()}))},prePageQA:function(){var t=getCurrentPages()[getCurrentPages().length-2].data.webData;o.checkChange(t,this.data)?this.setData({sloganInput:!1,introInput:!1,saveModalShow:!0}):wx.navigateBack({delta:1})},saveIn:function(){n.burying.setPoint(n,862),this.saveWeb()},saveCancel:function(){n.burying.setPoint(n,861),wx.navigateBack({delta:1})},onHide:function(){"add"==t.detail&&o.updateHuancun(t.entId,this)},onUnload:function(){"add"==t.detail&&o.updateHuancun(t.entId,this)}}); 
 			}); 	require("pages/companyManage/miniWebEdit/miniWebEdit.js");
 		__wxRoute = 'pages/companyManage/miniWebProductionEdit/miniWebProductionEdit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.js';	define("pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e=getApp();Page({data:{title:"",intro:"",photo:[],proType:""},onLoad:function(e){console.log("product.onload",e),t=e,this.proTypeFun(),this.productDataFun()},onShow:function(){this.data.previewEditIn&&(this.data.previewEditIn=!1,this.setData({photo:this.data.photo}))},proTypeFun:function(){var e="";e="add"==t.type?"add":"edit",this.setData({proType:e})},productDataFun:function(){if("edit"==this.data.proType){var e=getCurrentPages()[getCurrentPages().length-2].data.products[t.ind];this.setData({title:e.name,intro:e.intro,photo:e.image})}},savePro:function(t){console.log("savePro",t),"add"==this.data.proType&&this.addSave(t.detail),"edit"==this.data.proType&&this.editSave(t.detail)},addSave:function(a){var i=getCurrentPages()[getCurrentPages().length-2].data,o=i.products,n=i.productsInit;if(o.push({name:a.title,intro:a.intro,image:a.photo}),n.push({name:a.title,intro:a.intro,image:a.photo}),"edit"==t.detail){var d={id:t.id,entId:t.entId,products:n};e.setRequest({url:"webEntWebsiteUpdate",method:"POST",data:d})}wx.navigateBack({delta:1})},upldComplete:function(t){this.setData({photo:t.detail})},previewEditImage:function(t){this.data.previewEditIn=!0,wx.navigateTo({url:"../miniWebPhotoPreview/miniWebPhotoPreview?currentindex="+t.detail+"&main=miniWebProductionEdit&paraname=photo"})},editSave:function(e){getCurrentPages()[getCurrentPages().length-2].data.products[t.ind]={name:e.title,intro:e.intro,image:e.photo},wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/companyManage/miniWebProductionEdit/miniWebProductionEdit.js");
 		__wxRoute = 'pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.js';	define("pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{selectLeft:"",selectRight:"",showRight:!1,save:!1,leftCon:[],leftValue:"",rightCon:[],rightValue:""},onLoad:function(a){var e=this;t.compatibleManage.navigationBarLoading&&wx.showNavigationBarLoading(),this.defaultData((function(t){e.setData({leftCon:t})}))},onShow:function(){},defaultData:function(a){t.setRequest({url:"webIndustry",data:{}},(function(t){a&&a(t)}),"",(function(){t.compatibleManage.navigationBarLoading&&wx.hideNavigationBarLoading()}))},industryGet:function(a,e,i){t.setRequest({url:"webIndustry",data:{parentCodeId:a}},(function(t){e&&e(t)}),(function(){i&&i()}))},leftTap:function(a){var e=this;if(!this.data.req){this.data.req=!0;var i=this.data.leftCon[a.currentTarget.dataset.i].industryCode,n=this.data.leftCon[a.currentTarget.dataset.i].industryName;this.industryGet(i,(function(t){e.setData({toView:"top",selectLeft:i,selectRight:"",save:!1,rightCon:t,showRight:!0,leftValue:n}),e.data.req=!1}),(function(){e.data.req=!1})),t.burying.setPoint(t,572)}},rightTap:function(a){this.setData({selectRight:this.data.rightCon[a.currentTarget.dataset.i].industryCode,rightValue:this.data.rightCon[a.currentTarget.dataset.i].industryName,save:!0}),t.burying.setPoint(t,573)},saveind:function(){getCurrentPages()[getCurrentPages().length-2].data.industryCode=this.data.selectLeft+","+this.data.selectRight,getCurrentPages()[getCurrentPages().length-2].data.industryName=this.data.leftValue+","+this.data.rightValue,getCurrentPages()[getCurrentPages().length-2].data.industryValue=this.data.rightValue,wx.navigateBack({delta:1}),t.burying.setPoint(t,574)},saveindDisabled:function(){t.burying.setPoint(t,574)}}); 
 			}); 	require("pages/companyManage/miniWebIndustryEdit/miniWebIndustryEdit.js");
 		__wxRoute = 'pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.js';	define("pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),t=(getApp(),"");Page({data:{imagesShowData:[],current:0},onLoad:function(a){console.log("miniwebphotoPreview.onload",a),t=a.paraname;var e=getCurrentPages()[getCurrentPages().length-2].data[t];this.setData({imagesShowData:e,current:a.currentindex}),console.log("imagesShowData",this.data.imagesShowData)},deleteImage:function(e){var i=this,n=this,r=getCurrentPages()[getCurrentPages().length-2];a.deletemodal("要删除这张照片吗？",(function(){n.data.imagesShowData.splice(n.data.current,1),n.data.current>n.data.imagesShowData.length-1?n.setData({current:n.data.imagesShowData.length-1,imagesShowData:n.data.imagesShowData}):n.setData({imagesShowData:n.data.imagesShowData}),r[t]=i.data.imagesShowData,n.data.imagesShowData.length<=0&&wx.navigateBack({delta:1})}))},swiper:function(a){this.data.current=a.detail.current}}); 
 			}); 	require("pages/companyManage/miniWebPhotoPreview/miniWebPhotoPreview.js");
 		__wxRoute = 'pages/companyManage/miniWebCropBackground/miniWebCropBackground';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/miniWebCropBackground/miniWebCropBackground.js';	define("pages/companyManage/miniWebCropBackground/miniWebCropBackground.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../E7FA08110691379C819C60164523E9B3.js")),e=new(require("../../../AFC697330691379CC9A0FF345133E9B3.js").wxRequest),o=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),a=wx.getSystemInfoSync(),s=a.windowWidth,n=a.screenHeight-110;console.log("device",a);var i=!1,r=getApp();Page({data:{cropperOpt:{id:"cropper",width:s,height:n,scale:2.5,zoom:8,cut:{}},cut:{x:(s-354)/2,y:(n-177)/2,width:354,height:177},cbData:null,systemInfo:r.systemInfo},onLoad:function(e){console.log("crop.onload",e),this.options=e;var o=this.data.cropperOpt;this.data.systemInfo.modelX&&this.setData({"cropperOpt.height":n-25}),this.setData({"cropperOpt.cut":this.data.cut}),new t.default(o),this.wecropper.pushOrign(e.imgurl,e.backcolor)},onShow:function(){},touchStart:function(t){this.wecropper.touchStart(t)},touchMove:function(t){this.wecropper.touchMove(t)},touchEnd:function(t){this.wecropper.touchEnd(t)},getCropperImage:function(){var t=this,e=getCurrentPages();o.showtoast("正在提交中...","loading",8e3),r.burying.setPoint(r,1029),i||(i=!0,t.wecropper.getCropperImage((function(o){o&&t.upldBusinessCard(o,(function(t){e[e.length-2].data.upldImageSuccess=!0,e[e.length-2].data.upldImageData=t,wx.navigateBack({delta:1}),i=!1}))})))},upldBusinessCard:function(t,a){o.showtoast("提交中...","loading",8e3),r.photoIdentyFun(t,(function(s){s?e.upldUrl({url:"miniWebsiteBackgroundImg",data:{},filePath:t},(function(t){a&&a(t)}),(function(){o.showtoast("背景图上传失败，请重新尝试","none",2e3),i=!1})):(i=!1,o.hidetoast(),o.testImgShowmodal((function(){wx.navigateBack({delta:1})})))}))},again:function(){var t=this;function e(e){wx.chooseImage({count:1,sourceType:[e],sizeType:["compressed"],success:function(e){t.options.imgurl=e.tempFilePaths[0],t.onLoad(t.options)}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:e("camera");break;case 1:e("album")}}catch(t){}},fail:function(){}})},onShareAppMessage:function(){return o.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=upldTbcardLogo&shareType=05",imageUrl:"../../../images/shareImage.jpg"})}}); 
 			}); 	require("pages/companyManage/miniWebCropBackground/miniWebCropBackground.js");
 		__wxRoute = 'pages/companyManage/expirationReminder/expirationReminder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/expirationReminder/expirationReminder.js';	define("pages/companyManage/expirationReminder/expirationReminder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),n=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{reminderBg:t.source.reminderBg,explainList:[{tit:"名片样式",textContent:"只能使用系统默认样式，不支持自主配置名片样式"},{tit:"部门设置",textContent:"部门分组将失效，续费后自动恢复"},{tit:"企业认证",textContent:"已认证企业名片中的“V”将失效，认证信息保留；在此期间，其他同名企业可以进行认证，若被其他企业抢先认证，续费后需要重新提交认证信息"},{tit:"权限管理",textContent:"普通管理员权限将收回，续费后自动开始多管理员权限，无需重新设置"}]},onLoad:function(t){this.setData({optionsL:t})},copy:function(){wx.setClipboardData({data:"www.microvcard.com",success:function(t){n.showtoast("复制成功：www.microvcard.com","none",2e3)}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/expirationReminder/expirationReminder.js");
 		__wxRoute = 'pages/companyManage/createdPcTemplate/createdPcTemplate';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/createdPcTemplate/createdPcTemplate.js';	define("pages/companyManage/createdPcTemplate/createdPcTemplate.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")),t=getApp();Page({data:{previewPic:"",from:{},templateObjects:"",openid:t.client.openid},onLoad:function(a){var o=this,f=decodeURIComponent(a.scene);console.log(f),t.setRequest({url:"cacheTplAndCardRenLing",data:{tplId:f}},(function(a){var f;(console.log(a),a.flag||801===a.flag)?wx.showToast({title:"认领码失效",icon:"none",duration:1e3,success:function(){setTimeout((function(){wx.switchTab({url:"/pages/cardMain/cardMain"})}),1e3)}}):o.setData((f={templateObjects:a,openid:t.client.openid},(0,e.default)(f,"from.addr1",a.addr1),(0,e.default)(f,"from.addr2",a.addr2),(0,e.default)(f,"from.addr3",a.addr3),(0,e.default)(f,"from.bpUrl",""),(0,e.default)(f,"from.company",a.company),(0,e.default)(f,"from.createCardFlag",!1),(0,e.default)(f,"from.createCardType","webAdminReceive"),(0,e.default)(f,"from.customAvatar",""),(0,e.default)(f,"from.desc",[]),(0,e.default)(f,"from.email1",a.email1),(0,e.default)(f,"from.email2",a.email2),(0,e.default)(f,"from.email3",a.email3),(0,e.default)(f,"from.fax",a.fax),(0,e.default)(f,"from.folder","TEMPLATES_V6"),(0,e.default)(f,"from.formid",""),(0,e.default)(f,"from.id",""),(0,e.default)(f,"from.industry",""),(0,e.default)(f,"from.industry_data",""),(0,e.default)(f,"from.intro",""),(0,e.default)(f,"from.job",a.job),(0,e.default)(f,"from.logo",""),(0,e.default)(f,"from.mophone1",a.mophone1),(0,e.default)(f,"from.mophone2",a.mophone2),(0,e.default)(f,"from.mophone3",a.mophone3),(0,e.default)(f,"from.name",a.name),(0,e.default)(f,"from.phone1",a.phone1),(0,e.default)(f,"from.phone2",a.phone2),(0,e.default)(f,"from.phone3",a.phone3),(0,e.default)(f,"from.remark",""),(0,e.default)(f,"from.showconfig",{custom:[],configShow:a.vcardConfig.configShow}),(0,e.default)(f,"from.tempId","TSimpleStone"),(0,e.default)(f,"from.tempName",""),(0,e.default)(f,"from.userpic",a.userpic),(0,e.default)(f,"from.video",[]),(0,e.default)(f,"from.website",a.website),(0,e.default)(f,"from.wechat",a.wechat),(0,e.default)(f,"from.wechat2",a.wechat2),(0,e.default)(f,"from.wechat3",a.wechat3),(0,e.default)(f,"from.title",a.title),(0,e.default)(f,"from.englishName",a.englishName),(0,e.default)(f,"from.qq",a.qq),(0,e.default)(f,"from.dept",a.dept),(0,e.default)(f,"from.postCode",a.postCode),(0,e.default)(f,"from.offiaccount",a.offiaccount),(0,e.default)(f,"from.weibo",a.weibo),f))}))},getUserInfo:function(a){var o=this;"getUserInfo:ok"==a.detail.errMsg&&(t.setUnion(a.detail),t.burying.setPoint(t,813),t.setRequest({url:"createCard",method:"POST",data:this.data.from},(function(a){o.setData((0,e.default)({},"templateObjects.vcardId",a.id)),t.setRequest({url:"cacheClaimedVcard",method:"POST",data:{tplId:o.data.templateObjects.tplId,vcardId:String(a.id)}},(function(e){t.burying.setPoint(t,893),e.flag||e.flag,wx.switchTab({url:"/pages/cardMain/cardMain"})}))})))}}); 
 			}); 	require("pages/companyManage/createdPcTemplate/createdPcTemplate.js");
 		__wxRoute = 'pages/companyManage/webModelPageScanClaim/webModelPageScanClaim';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.js';	define("pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{scene:"",url:"",loading:!1},onLoad:function(n){var t=this;console.log("webModelPageScanClaim.onload",n),this.data.scene=decodeURIComponent(n.scene),a.setToken((function(){t.renlingFun(0)}))},onShow:function(){},renlingFun:function(n){var t=this;a.setRequest({url:"wxCardRenLingConfirm",data:{vcardId:this.data.scene,tag:n}},(function(n){n&&t.setData({url:a.source.card_img+n})}))},getUserInfo:function(n){var t=this;if(a.burying.setPoint(a,893),n.detail.iv){if(this.data.loading)return;this.setData({loading:!0}),a.setUnion(n.detail),this.claimFun((function(a){try{wx.setStorageSync("webTemaplateClaimStorage",!0)}catch(a){}wx.switchTab({url:"/pages/cardMain/cardMain"}),t.renlingFun(1)}))}},claimFun:function(n,t){var e={replaceId:!1,claimCardId:!1,isReplace:!1};e.claimCardId=this.data.scene,a.setRequest({url:"claimCard",method:"POST",data:e},(function(a){n&&n(a)}),(function(){t&&t()}))}}); 
 			}); 	require("pages/companyManage/webModelPageScanClaim/webModelPageScanClaim.js");
 		__wxRoute = 'pages/companyManage/webModelPageScanPreview/webModelPageScanPreview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.js';	define("pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../C4241E930691379CA2427694C1E0E9B3.js"),t=getApp();Page({data:{systemInfo:t.systemInfo,previewData:{},contactData:[],getWebData:{}},onLoad:function(e){var a=this;console.log("onload",e);var n=decodeURIComponent(e.scene);t.tokenGet((function(){a.getDetail(n)}))},onShow:function(){},getDetail:function(a){var n=this;t.setRequest({url:"WxCardVcardPreview",data:{tempName:a}},(function(t){601==t.flag?wx.showToast({title:"二维码信息已经过期，请刷新二维码后重新扫码",icon:"none",duration:3e3}):(n.setData({previewData:t,contactData:(0,e.msgGroups)(t),mark:(new Date).getTime()}),console.log("fff",n.data.previewData)),t.entId&&(n.data.entId=t.entId,n.getWebData(t.entId))}))},previewPhoto:function(e){for(var t=[],a=this.data.previewData.desc,n=0;n<a.length;n++)t.push(a[n].url);wx.previewImage({current:e.currentTarget.dataset.url,urls:t})},playVideo:function(e){this.setData({videoPath:e.currentTarget.dataset.videopath}),this.videoContent=wx.createVideoContext("myVideo",this);var t=this.videoContent;setTimeout((function(){t.requestFullScreen(),t.play()}),100)},sceenchange:function(e){e.detail&&!e.detail.fullScreen&&this.videoContent.stop()},getWebData:function(e){var a=this;t.setRequest({url:"webEntWebsiteFind",data:{entId:e}},(function(e){e&&e.fullname&&(e.firstname=e.fullname.slice(0,1)),a.setData({webData:e})}))},webTap:function(){wx.navigateTo({url:"/pages/companyManage/miniWebDetail/miniWebDetail?entId="+this.data.entId})},scanCode:function(){var e=this;t.burying.setPoint(t,954),wx.scanCode({success:function(t){console.log("scansuccess",t);var a=[];t.scanType&&"WX_CODE"==t.scanType?(a=decodeURIComponent(t.path).split("?scene="),e.getDetail(a[1])):t.scanType&&"QR_CODE"==t.scanType?(a=decodeURIComponent(t.result).split("?scene="),e.getDetail(a[1])):wxPublic.showtoast("二维码错误","none",1500)},fail:function(e){console.log("scanfail",e)}})}}); 
 			}); 	require("pages/companyManage/webModelPageScanPreview/webModelPageScanPreview.js");
 		__wxRoute = 'pages/companyManage/servicePay/servicePay';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/servicePay/servicePay.js';	define("pages/companyManage/servicePay/servicePay.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty"));function a(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}var e=getApp(),n=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),o=null;Page({data:{systemInfo:e.systemInfo,restDate:"",showTypes:!1,payStatus:"",entId:"",companyName:"",serviceNewDate:"",payManagement:{},loading:!1,miniCompany:{firstName:"",companyLogo:""},cacheCompany:{},platForm:e.systemInfo.platform&&e.systemInfo.platform.toLowerCase(),scrollTop:0,freshPayMoney:0},onLoad:function(t){var a=this;console.log("servicePay.onload",t),wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#ffffff"}),this.setData({restDate:t.restDate,payStatus:t.comStatus,restDay:t.restDay,serviceNewDate:t.newDate,entId:t.entId,companyName:decodeURIComponent(t.company)}),"到期"==this.data.payStatus?e.burying.setSensorEvent(e,{CardType:"已过期付款页"},"CompanyViewScreen"):"付费"==this.data.payStatus?e.burying.setSensorEvent(e,{CardType:"生效中付款页"},"CompanyViewScreen"):e.burying.setSensorEvent(e,{CardType:"未过期付款页"},"CompanyViewScreen"),this.companyEditFun((function(t){console.log("backData",t),t&&t.logo?a.setData({"miniCompany.companyLogo":t.logo}):a.setData({"miniCompany.firstName":a.data.companyName&&a.data.companyName.trim().slice(0,1)})}),(function(){}))},onShow:function(){this.setData({cacheCompany:this.data.cacheCompany})},openTypes:function(){this.setData({showTypes:!this.data.showTypes}),this.data.showTypes&&("到期"==this.data.payStatus?e.burying.setPoint(e,915):e.burying.setPoint(e,914))},payMoney:function(){var t=this.data.payManagement;"android"==this.data.platForm||"devtools"==this.data.platForm?(wx.navigateTo({url:"/pages/companyManage/waitingPay/waitingPay?shishou=".concat(t.shishou,"&yingshou=").concat(t.yingshou,"&company=").concat(this.data.company,"&comStatus=").concat(this.data.payStatus,"&restDate=").concat(this.data.restDate,"&newDate=").concat(this.data.serviceNewDate,"&entId=").concat(this.data.entId)}),"到期"==this.data.payStatus?e.burying.setPoint(e,913):e.burying.setPoint(e,912)):(wx.navigateTo({url:"/pages/companyManage/serviceIntro/serviceIntro?shishou=".concat(t.shishou,"&yingshou=").concat(t.yingshou,"&company=").concat(this.data.company,"&comStatus=").concat(this.data.payStatus,"&restDate=").concat(this.data.restDate,"&newDate=").concat(this.data.serviceNewDate,"&entId=").concat(this.data.entId,"&restDay=").concat(this.data.restDay)}),"到期"==this.data.payStatus?e.burying.setPoint(e,913):e.burying.setPoint(e,912))},androidPayMoney:function(){var t=this;if(!this.data.paying){"付费"==this.data.payStatus?e.burying.setPoint(e,933):"到期"==this.data.payStatus?e.burying.setPoint(e,932):"试用"==this.data.payStatus&&e.burying.setPoint(e,931),this.data.paying=!0;var a={};e.setRequest({method:"POST",url:"andriodWxPay",data:{entId:this.data.entId,openId:e.client.openid}},(function(e){a.package="prepay_id="+e.prepay_id,a.nonceStr=e.nonceStr,a.timeStamp=e.timeStamp,a.paySign=e.paySign,a.signType=e.signType,console.log("支付结果",a),a.success=function(t){wx.redirectTo({url:"/pages/companyManage/paySuccess/paySuccess"})},a.fail=function(t){console.log("res.fail",t)},wx.requestPayment(a),t.data.paying=!1}),(function(){t.data.paying=!1,n.showtoast("支付失败")}))}},companyEditFun:function(t,a){var n=this.data.entId;e.setRequest({url:"webEntWebsiteFind",data:{entId:n}},(function(a){t&&t(a)}),(function(t){a&&a(t)}))},toRight:function(e){var n=function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(a){(0,t.default)(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e.detail),o=n.index,s=n.entId,i=n.orderType;wx.navigateTo({url:"/pages/companyManage/companyRights/companyRights?index=".concat(o,"&entId=").concat(s,"&orderType=").concat(i)})},onPageScroll:function(t){var a=this;clearTimeout(o),o=setTimeout((function(){a.setData({scrollTop:t.scrollTop})}),17.5)},topBack:function(){wx.navigateBack({delta:1})},onPullDownRefresh:function(){var t=this.data.freshPayMoney;t++,this.setData({freshPayMoney:t}),wx.stopPullDownRefresh()},onShareAppMessage:function(){return n.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=cardMain&shareType=05",imageUrl:e.source.shareImage})}}); 
 			}); 	require("pages/companyManage/servicePay/servicePay.js");
 		__wxRoute = 'pages/companyManage/paySuccess/paySuccess';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/paySuccess/paySuccess.js';	define("pages/companyManage/paySuccess/paySuccess.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var s=getApp(),t="",i=!1;Page({data:{},onLoad:function(s){t=s},onShow:function(){},closeMsgTip:function(){i||s.serviceEpirationList!=t.msgId||s.setRequest({url:"messageProcess",data:{msgId:t.msgId}},(function(t){i=!1,s.serviceEpirationList={}}))},backTeam:function(){s.burying.setPoint(s,916),wx.switchTab({url:"/pages/company/company"})}}); 
 			}); 	require("pages/companyManage/paySuccess/paySuccess.js");
 		__wxRoute = 'pages/companyManage/serviceAgreement/serviceAgreement';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/serviceAgreement/serviceAgreement.js';	define("pages/companyManage/serviceAgreement/serviceAgreement.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/serviceAgreement/serviceAgreement.js");
 		__wxRoute = 'pages/companyManage/loginSuc/loginSuc';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/loginSuc/loginSuc.js';	define("pages/companyManage/loginSuc/loginSuc.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../7931C4950691379C1F57AC929AD2E9B3.js");var n=getApp();Page({data:{systemInfo:n.systemInfo,showGzh:!1},onLoad:function(n){},onReady:function(){},onShow:function(){},prePage:function(){wx.navigateBack({delta:1})},errFun:function(n){console.log(n,"errFun方法"),n.detail&&0===n.detail.status?this.setData({showGzh:!0}):this.setData({showGzh:!1})},loadFun:function(n){console.log(n,"loadFun方法"),n.detail&&0===n.detail.status?this.setData({showGzh:!0}):this.setData({showGzh:!1})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/loginSuc/loginSuc.js");
 		__wxRoute = 'pages/companyManage/teamSetting/teamSetting';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/teamSetting/teamSetting.js';	define("pages/companyManage/teamSetting/teamSetting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e=getApp(),a=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{enterprisesData:{},dismissModalShow:!1,modalShow:!1,teamEditShow:!1,exitting:!1,cancelText:"解散（3）",cancelColor:"RGB(255,59,47, 0.5)",dissolveDisable:!1},onLoad:function(t){this.initOptions(t)},onShow:function(){this._setting()},initOptions:function(t){var e=[t.isAdmin,t.entState,t.entId,decodeURIComponent(t.entName)],a=e[0],i=e[1],n=e[2],s=e[3];this.setData({enterprisesData:{isAdmin:a,entState:i,entId:n,entName:s}})},_setting:function(){var t=[],e="";1==this.data.enterprisesData.isAdmin?(e="_adminSetting",t=(this.data.enterprisesData.entState,[{text:"修改企业名"},{text:"移交管理员"},{text:"解散企业",type:"exit"}])):(e="_commonSetting",t=[{text:"退出企业",type:"exit"}]),this.setData({sheetShow:!0,sheetList:t,sheetSlotNumber:0,settingTap:e})},_adminSetting:function(a){this.setData({sheetShow:!1});var i=a.currentTarget.dataset.i,n=this,s=this.data.enterprisesData;switch(this.data.sheetList[i].text){case"修改企业名":e.burying.setPoint(e,732),n.setData({teamEditShow:!0,teamMessage:{entName:s.entName,entId:s.entId}});break;case"移交管理员":e.burying.setPoint(e,831),n.data.exchangeAdmin=!0,wx.navigateTo({url:"/pages/companyManage/changeAdmin/changeAdmin?entId="+s.entId});break;case"解散企业":e.burying.setPoint(e,825),function(){n.setData({dismissModalShow:!0});var e=3;t=setInterval((function(){e<=1?(clearInterval(t),n.setData({cancelText:"解散",cancelColor:"RGB(255,59,47, 1)",dissolveDisable:!0})):(e--,n.setData({cancelText:"解散（"+e+"）",cancelColor:"RGB(255,59,47, 0.5)",dissolveDisable:!1}))}),1e3)}();break;case"取消":e.burying.setPoint(e,829)}},_commonSetting:function(t){this.setData({modalShow:!0}),0==t.detail?e.burying.setPoint(e,830):1==t.detail&&e.burying.setPoint(e,829)},_modalButton:function(){var t=this,i=this.data.enterprisesData;this.data.exitting||(e.burying.setPoint(e,832),this.data.exitting=!0,e.setRequest({url:"quitTeam",method:"post",data:{entId:i.entId,openId:e.client.openid,entName:i.entName}},(function(e){a.showtoast("已退出企业","none",1500),wx.removeStorageSync("entId"),setTimeout((function(){wx.switchTab({url:"/pages/company/company"})}),1500),t.data.exitting=!1}),(function(){t.data.exitting=!1})))},_modalCancel:function(){e.burying.setPoint(e,833)},_sheetBackTap:function(){this.setData({sheetShow:!1})},_editCancel:function(){this.setData({teamEditShow:!1})},_editSave:function(t){this.setData({teamEditShow:!1,"enterprisesData.entName":t.detail}),wx.switchTab({url:"/pages/company/company"})},_switchTeam:function(){e.burying.setPoint(e,724),this.data.switchTeamClick=!0,this.setData({fillInformation:!1}),wx.navigateTo({url:"/pages/companyManage/teamList/teamList"})},_dismissModalButton:function(){var t=this;if(this.data.dissolveDisable){var i=this.data.enterprisesData;if(this.data.dismiss)return;e.burying.setPoint(e,827),this.data.dismiss=!0,e.setRequest({url:"wxEntExpandDissolved",data:{entId:i.entId,openId:e.client.openid}},(function(i){a.showtoast("企业已解散","none",1500),e.inviteTeamGuidePage=!1,wx.removeStorageSync("entId"),wx.pageScrollTo({scrollTop:0}),setTimeout((function(){wx.switchTab({url:"/pages/company/company"})}),1500),t.data.dismiss=!1}),(function(){t.data.dismiss=!1}))}},_dismissModalCancel:function(){clearInterval(t),e.burying.setPoint(e,826),this.setData({cancelText:"解散（3）",cancelColor:"RGB(255,59,47, 0.5)",dissolveDisable:!1,dismissModalShow:!1})}}); 
 			}); 	require("pages/companyManage/teamSetting/teamSetting.js");
 		__wxRoute = 'pages/companyManage/shareTmp/shareTmp';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/shareTmp/shareTmp.js';	define("pages/companyManage/shareTmp/shareTmp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/shareTmp/shareTmp.js");
 		__wxRoute = 'pages/companyManage/buyRecords/buyRecords';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/buyRecords/buyRecords.js';	define("pages/companyManage/buyRecords/buyRecords.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{entId:"",payRecords:[]},onLoad:function(t){this.setData({entId:t.entId})},onShow:function(){var a=this,e=this.data.entId;t.setRequest({url:"buyOrderList",data:{entId:e}},(function(t){t&&t.length?a.setData({payRecords:t.reverse()}):a.setData({payRecords:[]})}))},toReceipt:function(a){t.burying.setPoint(t,945);var e=this.data.entId,r=a.currentTarget.dataset.transactionId,n=a.currentTarget.dataset.orderstate,s=a.currentTarget.dataset.flag;wx.navigateTo({url:"/pages/companyManage/fillTikect/fillTikect?entId=".concat(e,"&orderstate=").concat(n,"&type=build&transactionId=").concat(r,"&flag=").concat(s,"&pageFrom=buyRecords")})},onShareAppMessage:function(){return wxPublic.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=cardMain&shareType=05",imageUrl:t.source.shareImage})}}); 
 			}); 	require("pages/companyManage/buyRecords/buyRecords.js");
 		__wxRoute = 'pages/companyManage/waitingPay/waitingPay';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/waitingPay/waitingPay.js';	define("pages/companyManage/waitingPay/waitingPay.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{payManagement:{shishou:"",yingshou:""},compatibleManage:a.compatibleManage,cacheCompany:""},onLoad:function(e){console.log("options",e),this.setData({restDate:e.restDate,payStatus:e.comStatus,serviceNewDate:e.newDate,entId:e.entId,company:decodeURIComponent(e.company),payManagement:{shishou:e.shishou,yingshou:e.yingshou}}),"到期"==this.data.payStatus?a.burying.setSensorEvent(a,{CardType:"已过期付款页"},"CompanyViewScreen"):"付费"==this.data.payStatus?a.burying.setSensorEvent(a,{CardType:"生效中付款页"},"CompanyViewScreen"):a.burying.setSensorEvent(a,{CardType:"未过期付款页"},"CompanyViewScreen")},onShow:function(){console.log("cacheCompany",this.data.cacheCompany),this.setData({cacheCompany:this.data.cacheCompany})},getPayFunc:function(){var e=this;a.setRequest({url:"getPay",data:{entId:this.data.entId}},(function(a){e.setData({payManagement:a}),console.log(e.data.payManagement)}),(function(){}))},toUserAgreement:function(){wx.navigateTo({url:"/pages/companyManage/serviceAgreement/serviceAgreement"})},androidPayMoney:function(){var t=this;if(!this.data.paying){"付费"==this.data.payStatus?a.burying.setPoint(a,933):"到期"==this.data.payStatus?a.burying.setPoint(a,932):"试用"==this.data.payStatus&&a.burying.setPoint(a,931),this.data.paying=!0;var n={};a.setRequest({method:"POST",url:"andriodWxPay",data:{entId:this.data.entId,openId:a.client.openid}},(function(a){n.package="prepay_id="+a.prepay_id,n.nonceStr=a.nonceStr,n.timeStamp=a.timeStamp,n.paySign=a.paySign,n.signType=a.signType,console.log("支付结果",n),n.success=function(a){wx.redirectTo({url:"/pages/companyManage/paySuccess/paySuccess"})},n.fail=function(a){console.log("res.fail",a)},wx.requestPayment(n),t.data.paying=!1}),(function(){t.data.paying=!1,e.showtoast("支付失败")}))}},editTikect:function(){var a=this.data.entId;wx.navigateTo({url:"/pages/companyManage/fillTikect/fillTikect?entId=".concat(a,"&type=edit&pageFrom=waitingPay")})},toFillTikect:function(){a.burying.setPoint(a,953);var e=this.data.entId;wx.navigateTo({url:"/pages/companyManage/fillTikect/fillTikect?entId=".concat(e,"&type=build&pageFrom=waitingPay")})},onShareAppMessage:function(){return e.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=cardMain&shareType=05",imageUrl:a.source.shareImage})}}); 
 			}); 	require("pages/companyManage/waitingPay/waitingPay.js");
 		__wxRoute = 'pages/companyManage/fillTikect/fillTikect';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/fillTikect/fillTikect.js';	define("pages/companyManage/fillTikect/fillTikect.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault");require("../../../@babel/runtime/helpers/Arrayincludes");var e=t(require("../../../@babel/runtime/helpers/defineProperty"));function a(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(a){(0,e.default)(t,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var r=getApp(),i=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),s="",c={receiptTop:"",identifier:"",email:"",entAdd:"",entMobile:"",entBank:"",entBankNo:"",entId:"",transactionId:""};Page({data:{disabled:!1,tikectdata:null,showMore:!1,loading:!1,showSubmitDlg:!1,checkedErrStatus:{},receiptTop:"",identifier:"",email:"",entAdd:"",entMobile:"",entBank:"",entBankNo:"",entId:"",transactionId:"",type:"write"},onLoad:function(t){var e=this;if(s=t,this.setData({entId:t.entId,type:t.type,orderstate:t.orderstate}),"waitingPay"==t.pageFrom)if("build"==t.type)this.initFillData();else{var a=getCurrentPages()[getCurrentPages().length-2].data.cacheCompany;this.setData(a)}else if("buyRecords"==t.pageFrom){var n=t.transactionId;this.setData({transactionId:n}),this.getReceiptFunc().then((function(t){var a="";Boolean(t)?(a="read",e.setData(t)):(a="write",e.initFillData()),e.setData({type:a,disabled:"read"==a}),console.log("res",a,e.data)}))}},onShow:function(){},getReceiptFunc:function(){var t=this;return new Promise((function(e,a){var n=t.data.entId,i=t.data.transactionId;r.setRequest({url:"getReceipt",data:{entId:n,transactionId:i}},(function(t){e(t)}),a)}))},initFillData:function(){Object.keys(c).forEach((function(t){c[t]=""}))},fillMore:function(){this.setData({showMore:!Boolean(this.data.showMore)})},input:function(t){var a=t.detail.value,n=t.currentTarget.dataset.name;c[n]=a&&a.trim(),c[n]&&c[n].trim().length&&this.setData((0,e.default)({},"checkedErrStatus."+n,!1))},focus:function(t){switch(t.currentTarget.dataset.name){case"receiptTop":r.burying.setPoint(r,947);break;case"identifier":r.burying.setPoint(r,948);break;case"email":r.burying.setPoint(r,949)}},submit:function(){r.burying.setPoint(r,946),this.checkForm()&&this.contentTestFun()},checkForm:function(t){var e=n({},this.getcheckKeys())._checkKeys,a=[];return e.forEach((function(e,n){if((t?[t]:["receiptTop","identifier","email"]).includes(e))if(c[e]&&c[e].trim().length){if("email"==e){new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$").test(c[e])||(a.push(n),i.showtoast("请输入正确的邮箱","none",1500))}}else a.push(n)})),console.log("errList",a),this.setData({checkedErrStatus:this.setErrStatus("check",e,a)}),!a.length},contentTestFun:function(){var t=this,e=n({},this.getcheckKeys()),a=e._checkKeys,s=e._checkList;r.contentTestFun(s,(function(e){e.allwords<=0?(t.setData({checkedErrStatus:t.setErrStatus("init",a,null)}),t.setData({showSubmitDlg:!0})):(t.setData({checkedErrStatus:t.setErrStatus("check",a,e.errorArr)}),i.testShowmodal(),console.log(t.data.checkedErrStatus))}))},getcheckKeys:function(){var t=Object.keys(c).filter((function(t){return"transactionId"!==t&&"entId"!==t})),e=[];return t.forEach((function(t){c[t]?e.push(c[t]):e.push("")})),{_checkKeys:t,_checkList:e}},setErrStatus:function(t,e,a){var n={};return"init"==t?e.forEach((function(t){n[t]=!1})):"check"==t&&e.forEach((function(t,e){a.includes(Number(e))?(console.log("check",t),n[t]=!0):n[t]=!1})),n},cancelSubmit:function(){this.setData({showSubmitDlg:!1})},confirmSubmit:function(){r.burying.setPoint(r,950);var t=this.data.transactionId,e=this.data.entId;"buyRecords"==s.pageFrom?(c.transactionId=t,c.entId=e,r.setRequest({url:"receipt",method:"post",data:c},(function(t){wx.navigateBack({delta:1})}))):(c.entId=e,r.setRequest({url:"receiptCache",method:"post",data:c},(function(t){getCurrentPages()[getCurrentPages().length-2].data.cacheCompany=c,wx.navigateBack({delta:1})})))},onShareAppMessage:function(){return i.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=cardMain&shareType=05",imageUrl:r.source.shareImage})}}); 
 			}); 	require("pages/companyManage/fillTikect/fillTikect.js");
 		__wxRoute = 'pages/companyManage/shareEnter/shareEnter';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/shareEnter/shareEnter.js';	define("pages/companyManage/shareEnter/shareEnter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../@babel/runtime/helpers/interopRequireDefault"),n=t(require("../../../@babel/runtime/regenerator")),a=t(require("../../../@babel/runtime/helpers/asyncToGenerator")),i=getApp(),r=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),o="",s="",c="";Page({data:{systemInfo:i.systemInfo,bgEnterGift:i.source.bgEnterGift,shareTitle:i.source.shareTitle20201112,pageLoading:!0,loading:!1,getSettingMessage:!1,rightsList:[{imgUrl:"/images/companyWeb/icon-c-1.png",topic:"统一名片样式",infor:"提供可上传logo的企业专享样式，也支持自定义样式，彰显企业文化"},{imgUrl:"/images/companyWeb/icon-c-2.png",topic:"批量制作名片",infor:"支持手动录入、excel导入、邀请填写等多种方式制作名片，1分钟满足上百人名片需求"},{imgUrl:"/images/companyWeb/icon-c-3.png",topic:"部门管理",infor:"支持将员工按部门分配不同样式，部门数量不限"},{imgUrl:"/images/companyWeb/icon-c-4.png",topic:"企业微官网",infor:"支持生成企业自己的移动官网，自动同步展示在每个员工的名片上，让收到名片的客户更高效地了解业务"},{imgUrl:"/images/companyWeb/icon-c-5.png",topic:"认证标识",infor:"认证后的企业，员工的名片均有认证标识，让假名片无所遁形"},{imgUrl:"/images/companyWeb/icon-c-6.png",topic:"共享客户资源",infor:"员工可将个人收到的名片共享到企业客户名片库，提高协作效率"},{imgUrl:"/images/companyWeb/icon-c-7.png",topic:"电脑管理后台",infor:"为提供优质的使用体验，电脑端+小程序双平台让你事半功倍"}],fullnameValue:""},onLoad:function(e){var t=this;wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#ffffff"});try{e.scene&&(e.combineCode=decodeURIComponent(e.scene))}catch(e){}o=e.combineCode,e.entId&&this.getShareOpenid()==i.client.openid?(s=e.entId,c=o.slice(0,6),wx.redirectTo({url:"/pages/companyManage/waitGiftshare/waitGiftshare?entId=".concat(s,"&serialCode=").concat(c,"&pageFrom=shareEnter")})):(this.setData({pageLoading:!1}),this.getUserSetting(),this.cardListFun((function(e){t.setData({cardListFun:e})})))},onShow:function(){},getShareOpenid:function(){return"ocBH60"+o.slice(6)},getUserSetting:function(){var e=this;i.getSettingMessage((function(t){e.setData({getSettingMessage:t.u})}))},getuserinfosync:function(e){console.log(e),e.detail.miniUserInfo&&(i.touxiang=e.detail.miniUserInfo,this.setData({getSettingMessage:!0}),this.submit())},input:function(e){var t=e.detail.value;this.setData({contentTestFail:!1,fullnameValue:t&&t.trim()})},submit:(e=(0,a.default)(n.default.mark((function e(){var t,a,o,s,c,u;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.burying.setPoint(i,961),this.setData({loading:!0}),t=this.data.fullnameValue,Boolean(t&&t.length)){e.next=7;break}return r.showtoast("请输入企业名","none",2e3),this.setData({loading:!1}),e.abrupt("return");case 7:return e.next=9,this.contentTestFun(t);case 9:if(!(e.sent.allwords<=0)){e.next=14;break}this.setData({contentTestFail:!1}),e.next=17;break;case 14:return r.showtoast("企业名不合法","none",2e3),this.setData({contentTestFail:!0,loading:!1}),e.abrupt("return");case 17:return e.next=19,this.teamAttestation(t);case 19:if(!e.sent.checkResult){e.next=24;break}return r.showtoast("企业名已被占用","none",2e3),this.setData({loading:!1}),e.abrupt("return");case 24:return a=this.data.cardList,o="",a&&a.length?(s=this.checkUsefulCard(a),o=s&&1==s.length?s[0].cardId:""):o="",c={fName:t,cid:o},e.next=30,this.createTeam(c);case 30:if(u=e.sent,i.createTeam=!0,u.entId){e.next=35;break}return this.setData({loading:!1}),e.abrupt("return");case 35:return e.next=37,this.selectTemp(u.entId,4);case 37:if(e.sent){e.next=41;break}return this.setData({loading:!1}),e.abrupt("return");case 41:try{i.burying.setSensorEvent(i,{CompanyName:this.data.fullnameValue,ChooseBackground:"",CreateSource:"推荐创建"},"TeamCreate")}catch(e){}wx.switchTab({url:"/pages/company/company"});case 43:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)}),focus:function(){i.burying.setPoint(i,960),this.setData({contentTestFail:!1})},createTeam:function(e){return new Promise((function(t,n){i.setRequest({url:"createTeam",method:"post",data:{avatarUrl:i.touxiang.avatarUrl||"",entName:e.fName,nickName:i.touxiang.nickName||"",openId:i.client.openid,vcardId:e.cid||"",serialCode:o}},(function(e){wx.setStorageSync("entId",e.entId),t(e)}),(function(){t()}),(function(){}))}))},selectTemp:function(e,t){return new Promise((function(n,a){i.setRequest({url:"tplAddTuiJianTplFromWx",method:"POST",data:{entId:e,logoUrl:"",tag:t,userOpenId:i.client.openid}},n,n)}))},contentTestFun:function(e){return new Promise((function(t,n){i.contentTestFun([e],(function(e){e.allwords,t(e)}))}))},teamAttestation:function(e){return new Promise((function(t,n){i.setRequest({url:"wxEntExpandCheckEntName",method:"POST",data:{entName:e}},t,t)}))},cardListFun:function(e){i.setRequest({url:"cardsList",data:{openId:i.client.openid}},(function(t){e&&e(t)}))},checkUsefulCard:function(e){for(var t=e,n=[],a=0;a<t.length;a++)t[a].entId||n.push(t[a]);return n},sensorClick961:function(){i.burying.setPoint(i,961)}}); 
 			}); 	require("pages/companyManage/shareEnter/shareEnter.js");
 		__wxRoute = 'pages/companyManage/waitGiftshare/waitGiftshare';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/waitGiftshare/waitGiftshare.js';	define("pages/companyManage/waitGiftshare/waitGiftshare.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../F672DA860691379C9014B281A112E9B3.js"),e=getApp(),o=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),n="";Page({data:{systemInfo:e.systemInfo,iconPath:{src:"/images/toLeft-white.png",style:"width:16rpx;height:32rpx;"},inviteBg:e.source.inviteBg,waitSharebg:e.source.waitSharebg,showShareTip:!1,showPosterTip:!1,getSettingMessage:!1,stImgUrl:"",wechatMessage:{name:"",avatarurl:""},entId:"",serialCode:"",totolAddday:""},onLoad:function(t){var o=this;t.serialCode?this.setData({serialCode:t.serialCode,entId:t.entId,pageFrom:t.pageFrom}):console.log("当前页面缺少必要参数"),this.getUserSetting(),console.log("options",t),e.touxiang.nickName&&this.downloadImg(this.getPosterUrL()).then((function(t){o.setData({stImgUrl:t}),n=t})),this.getrewardhistory(),this.topIconPath()},onShow:function(){wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#ffffff"})},topIconPath:function(){var t=this.data.pageFrom,e=this.data.iconPath;"shareEnter"==t&&(e.src="/images/toHome.png",e.style="width:48rpx;height:48rpx;"),this.setData({iconPath:e})},getrewardhistory:function(){var t=this,o=this.data.entId;e.setRequest({url:"getrewardhistory",data:{serialEntId:o}},(function(e){if(console.log(e),e&&e.length){var o=0;e.filter((function(t){o+=t.rewardDays})),t.setData({invitors:e,totolAddday:o})}}))},getPosterUrL:function(){var o=encodeURIComponent(e.touxiang.avatarUrl),n=encodeURIComponent(e.touxiang.nickName),a=this.data.serialCode,s=t.Config.specialUrl;return"".concat(s,"img/circleoFriendsPoster?avatarUrl=").concat(o,"&name=").concat(n,"&id=").concat(a)},getUserSetting:function(){var t=this;e.getSettingMessage((function(e){t.setData({getSettingMessage:e.u})}))},getUserShareCard:function(t){t.detail.iv&&(this.setData({getSettingMessage:!0}),e.setUnion(t.detail))},getUserSharePoster:function(t){var o=this;console.log("授权中"),t.detail.iv&&(this.setData({getSettingMessage:!0}),e.touxiang=t.detail.userInfo,e.setUnion(t.detail,(function(){o.downStImg()})))},downStImg:function(){var t=this;console.log("保存中"),wx.showLoading({title:"保存中..."}),n?this.saveImgFun(n):this.downloadImg(this.getPosterUrL()).then((function(e){t.setData({stImgUrl:e}),t.saveImgFun(e)}))},downloadImg:function(t){if(t)return new Promise((function(e,o){wx.downloadFile({url:t,success:function(t){console.log("下载的文件，",t),200===t.statusCode&&e(t.tempFilePath)},fail:o,complete:function(){}})}))},saveImgFun:function(t){var e=this;wx.saveImageToPhotosAlbum({filePath:t,success:function(){wx.hideLoading(),e.setData({showPosterTip:!0})},fail:function(t){t&&t.errMsg&&t.errMsg.indexOf("saveImageToPhotosAlbum:fail")>-1&&e.getscopeAlbum()},complete:function(t){e.setData({maskHidden:!0}),wx.hideLoading()}})},getscopeAlbum:function(){wx.showModal({title:"提示",content:"需要您授权保存相册",showCancel:!1,success:function(){wx.openSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?wx.showModal({title:"提示",content:"获取权限成功,再次点击图片即可保存",showCancel:!1}):wx.showModal({title:"提示",content:"获取权限失败，将无法保存到相册哦~",showCancel:!1})},fail:function(t){},complete:function(t){}})}})},copyCode:function(){var t=this.data.shareCode;wx.setClipboardData({data:t,success:function(){o.hidetoast(0),o.showtoast("推荐码已复制","none",2e3)}})},showPoster:function(){this.downStImg(),this.sensorClick957(),console.log("查看海报")},closePoster:function(){e.burying.setPoint(e,959),this.setData({showPosterTip:!1})},showShare:function(){var t=this.data.showShareTip;this.setData({showShareTip:!t})},getCombineCode:function(){var t=this.data.serialCode,o=e.client.openid.slice(6);return console.log("".concat(t).concat(o)),"".concat(t).concat(o)},closePanel:function(){this.setData({showShareTip:!1})},topBack:function(){"shareEnter"==this.data.pageFrom?wx.switchTab({url:"/pages/company/company"}):this.prePage()},prePage:function(){wx.navigateBack({delta:1})},sensorClick956:function(){e.burying.setPoint(e,956)},sensorClick957:function(){e.burying.setPoint(e,957)},sensorClick958:function(){e.burying.setPoint(e,958)},onPullDownRefresh:function(){this.getrewardhistory(),wx.stopPullDownRefresh()},onShareAppMessage:function(){var t=this.getCombineCode(),n=this.data.entId;return console.log("pages/companyManage/shareEnter/shareEnter?combineCode=".concat(t,"&entId=").concat(n)),o.shareAppMessa({title:"邀请你使用递名片企业版",path:"pages/companyManage/shareEnter/shareEnter?combineCode=".concat(t,"&entId=").concat(n),imageUrl:e.source.shareInvite20201113})}}); 
 			}); 	require("pages/companyManage/waitGiftshare/waitGiftshare.js");
 		__wxRoute = 'pages/companyManage/cardInformationForm/cardInformationForm';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/cardInformationForm/cardInformationForm.js';	define("pages/companyManage/cardInformationForm/cardInformationForm.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=new(require("../96992B220691379CF0FF43250EB0E9B3.js").EditFun),e=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),n=getApp();Page({data:{entId:"",modalList:[],currentModal:{},currentModalConfig:[],formMessage:{},formData:a.baseForm(),confirmLoading:!1,confirmDisabled:!0,recordShow:!1,recordState:"loading",recordData:[],notClaimData:[],companyState:"",systemInfo:n.systemInfo},onLoad:function(a){var e=this;console.log("information.onload",a),t=a,this.setData({entId:a.entId,companyState:a.comStatus}),this.getStorage(),this.getAddrStorage(),this.tplFun((function(t){e.setData({modalList:t,currentModal:t[0],confirmDisabled:!1}),e.tplDataFun(t[0].tplId,(function(t){e.setData({currentModalConfig:JSON.parse(t.tplConfig)}),e.updateFormConstruction()}),(function(){wx.navigateBack({delta:1})}))})),this.closeRightTopShare()},onShow:function(){this.recordDataFun()},setStorage:function(){try{wx.setStorageSync("cardInformation_storage",this.data.formData)}catch(t){}},getStorage:function(){try{var t=wx.getStorageSync("cardInformation_storage");t&&this.setData({formData:t})}catch(t){}},distoryStorage:function(){wx.removeStorage({key:"cardInformation_storage"})},setAddrStorage:function(t){try{wx.setStorageSync("cardInformation_addr_storage",t)}catch(t){}},getAddrStorage:function(){try{var t=wx.getStorageSync("cardInformation_addr_storage"),a=this.data.formData;if(t){for(var e=0;e<a.length;e++)"addr1"==a[e].name&&t.addr1&&(a[e].value=t.addr1),"addr2"==a[e].name&&t.addr2&&(a[e].value=t.addr2),"addr3"==a[e].name&&t.addr3&&(a[e].value=t.addr3);this.setData({formData:a})}}catch(t){}},recordDataFun:function(){var t=this;n.setRequest({url:"wxCardSelectList",data:{entId:this.data.entId}},(function(a){if(a&&a.length>0){var e=[];a.map((function(t){0==t.getState&&e.push(t)})),t.setData({recordState:"list",recordData:a,notClaimData:e})}else t.setData({recordState:"null",recordData:[],notClaimData:[]})}),(function(){}))},tplFun:function(a){n.setRequest({url:"tplGetTplList",data:{entId:t.entId}},(function(t){a&&a(t)}))},tplDataFun:function(a,e,r){n.setRequest({url:"tplWxtplConfig",data:{entId:t.entId,tplId:a}},(function(t){e&&e(t)}),(function(){r&&r()}))},closeRightTopShare:function(){n.compatibleManage.shareMenu&&wx.hideShareMenu()},setTopTitle:function(){wx.setNavigationBarTitle({title:"当前页面"})},updateMessage:function(t){this.data.formData=t.detail,this.setStorage()},swiperChange:function(t){var a=this,e=t.detail;this.setData({currentModal:this.data.modalList[e]}),this.tplDataFun(this.data.currentModal.tplId,(function(t){a.setData({currentModalConfig:JSON.parse(t.tplConfig)}),a.updateFormConstruction()}))},updateFormConstruction:function(){var t=this.data.currentModalConfig,e=this.data.currentModal;this.setData({confirmDisabled:!1,formData:a.updateFormConstruction(this.data.formData,t,e)}),this.setStorage()},entryRecord:function(){n.burying.setPoint(n,1037),this.setData({recordShow:!0})},closeRecord:function(){this.setData({recordShow:!1})},confirmEntry:function(){var r=this,o=this;if(n.burying.setPoint(n,1036),!this.data.confirmLoading){var i=a.checkFormRequired(this.data.formData);if(i.pass){this.setData({confirmLoading:!0});var d=a.testFun(this.data.formData),s={},c=this.data.currentModal;this.contentTestFun(d,(function(){(s=a.buildServerDataFun(r.data.formData,"build")).entId=t.entId,s.deptId=c.deptId,s.tplId=c.tplId,s.openId=n.client.openid,r.wxCardInsertUsersFun(s,(function(e){r.setData({confirmLoading:!1}),r.setAddrStorage({addr1:s.addr1,addr2:s.addr2,addr3:s.addr3}),wx.navigateTo({url:"/pages/companyManage/cardEntrySuccess/cardEntrySuccess?entId="+t.entId+"&entName="+t.entName+"&id="+e.id,success:function(){o.distoryStorage(),o.setData({formData:a.clearFormData(o.data.formData)})}})}),(function(){r.setData({confirmLoading:!1})}))}),(function(t){t&&(r.setData({formData:a.sensitiveUpdate(t.errorArr,r.data.formData)}),e.testShowmodal()),r.setData({confirmLoading:!1})}))}else this.setData({formData:i.form})}},contentTestFun:function(t,a,e){n.contentTestFun(t,(function(t){t.allwords<=0?a&&a():e&&e(t)}),(function(){e&&e()}))},wxCardInsertUsersFun:function(t,a,e){n.setRequest({url:"wxCardInsertUsers",method:"POST",data:t},(function(t){a&&a(t)}),(function(){e&&e()}))},shareCard:function(){n.burying.setPoint(n,1041)},shareClaim:function(){n.burying.setPoint(n,1042)},onShareAppMessage:function(a){var r,o,i,d,s;if("share"==(null==a||null===(r=a.target)||void 0===r||null===(o=r.dataset)||void 0===o?void 0:o.t))return s=n.source.shareClaimfilling+encodeURIComponent(t.entName),e.shareAppMessa({title:"邀请你加入企业，一起使用电子名片",path:"pages/companyManage/inviteBindingWechat/inviteBindingWechat?entId="+t.entId,imageUrl:s});if("claim"==(null==a||null===(i=a.target)||void 0===i||null===(d=i.dataset)||void 0===d?void 0:d.t)){var c;return c=n.source.shareClaimfilling+encodeURIComponent(t.entName),e.shareAppMessa({title:"你的电子名片已制作完成，请尽快认领",path:"pages/companyManage/inviteBinding/inviteBinding?entId="+t.entId,imageUrl:c})}}}); 
 			}); 	require("pages/companyManage/cardInformationForm/cardInformationForm.js");
 		__wxRoute = 'pages/companyManage/cardInformationEdit/cardInformationEdit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/cardInformationEdit/cardInformationEdit.js';	define("pages/companyManage/cardInformationEdit/cardInformationEdit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=new(require("../96992B220691379CF0FF43250EB0E9B3.js").EditFun),e=require("../../../7931C4950691379C1F57AC929AD2E9B3.js"),n=getApp();Page({data:{entId:"",vcardId:"",modalList:[],currentModal:{},currentModalConfig:[],formMessage:{},formData:a.baseForm(),confirmLoading:!1,confirmDisabled:!0,deleteShow:!1,companyState:"",systemInfo:n.systemInfo,showMember:!1},onLoad:function(e){var n=this;console.log("information.onload",e),t=e,this.setData({entId:e.entId,vcardId:t.vcardId});var o=getCurrentPages()[getCurrentPages().length-2].data.singleData;this.setData({formData:a.updateForm(o)}),this.companyStateFun(),console.log("formData",this.data.formData),this.tplFun((function(t){var a={},e=[];t.map((function(t){o.tplId==t.tplId?(a=t,e.unshift(t)):e.push(t)})),n.setData({modalList:e,currentModal:a,confirmDisabled:!1}),n.tplDataFun(a.tplId,(function(t){n.setData({currentModalConfig:JSON.parse(t.tplConfig)}),n.updateFormConstruction()}),(function(){wx.navigateBack({delta:1})}))})),this.closeRightTopShare()},onShow:function(){},companyStateFun:function(){for(var t=getCurrentPages(),a={},e=0;e<t.length;e++)if("pages/company/company"===t[e].route){a=t[e].data.companyData;break}this.setData({companyState:a.companyPayStatus}),console.log("fff",a)},tplFun:function(a){n.setRequest({url:"tplGetTplList",data:{entId:t.entId}},(function(t){a&&a(t)}))},tplDataFun:function(a,e,o){n.setRequest({url:"tplWxtplConfig",data:{entId:t.entId,tplId:a}},(function(t){e&&e(t)}),(function(){o&&o()}))},closeRightTopShare:function(){n.compatibleManage.shareMenu&&wx.hideShareMenu()},setTopTitle:function(){wx.setNavigationBarTitle({title:"当前页面"})},updateMessage:function(t){this.data.formData=t.detail},swiperChange:function(t){var a=this,e=t.detail;this.setData({currentModal:this.data.modalList[e]}),this.tplDataFun(this.data.currentModal.tplId,(function(t){a.setData({currentModalConfig:JSON.parse(t.tplConfig)}),a.updateFormConstruction()}))},updateFormConstruction:function(){var t=this.data.currentModalConfig,e=this.data.currentModal;this.setData({confirmDisabled:!1,formData:a.updateFormConstruction(this.data.formData,t,e)})},saveEdit:function(){var o=this;if(n.burying.setPoint(n,1045),!this.data.confirmLoading){var i=a.checkFormRequired(this.data.formData);if(i.pass){this.setData({confirmLoading:!0});var s=a.testFun(this.data.formData),r={},d=this.data.currentModal;this.contentTestFun(s,(function(){(r=a.buildServerDataFun(o.data.formData,"edit")).entId=t.entId,r.deptId=d.deptId,r.tplId=d.tplId,r.openId=n.client.openid,r.id=t.vcardId,r.vcardId=t.cardId,o.wxCardUpdateUsersFun(r,(function(t){e.showtoast("修改成功","none",1500),getCurrentPages()[getCurrentPages().length-2].data.editSuccess=!0,setTimeout((function(){wx.navigateBack({delta:1})}),1500)}),(function(){o.setData({confirmLoading:!1})}))}),(function(t){t&&(o.setData({formData:a.sensitiveUpdate(t.errorArr,o.data.formData)}),e.testShowmodal()),o.setData({confirmLoading:!1})}))}else this.setData({formData:i.form})}},contentTestFun:function(t,a,e){n.contentTestFun(t,(function(t){t.allwords<=0?a&&a():e&&e(t)}),(function(){e&&e()}))},wxCardUpdateUsersFun:function(t,a,e){n.setRequest({url:"wxCardUpdateUsers",method:"POST",data:t},(function(t){a&&a(t)}),(function(){e&&e()}))},deleteCard:function(){n.burying.setPoint(n,1046),this.setData({deleteShow:!0})},deleteCancel:function(){n.burying.setPoint(n,1048),this.setData({deleteShow:!1})},delelteConfirm:function(){n.burying.setPoint(n,1047),e.showtoast("删除中","loading",8e3),n.setRequest({url:"wxCardDelDeptUser",data:{openId:n.client.openid,vcardId:t.vcardId}},"","",(function(){e.showtoast("名片已删除","none",1500),setTimeout((function(){"searchPage"==t.main?wx.navigateBack({delta:3}):wx.navigateBack({delta:2})}),1500)}))},showTip:function(t){this.setData({showMember:t.detail})},closeMemberFunc:function(){this.setData({showMember:!1})}}); 
 			}); 	require("pages/companyManage/cardInformationEdit/cardInformationEdit.js");
 		__wxRoute = 'pages/companyManage/cardEntrySuccess/cardEntrySuccess';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/cardEntrySuccess/cardEntrySuccess.js';	define("pages/companyManage/cardEntrySuccess/cardEntrySuccess.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp(),n=require("../../../7931C4950691379C1F57AC929AD2E9B3.js");Page({data:{imgUrl:"",mark:""},onLoad:function(t){var n=this;console.log("cardEntrySuccess.onload",t),e=t,this.setData({mark:(new Date).getTime()}),setTimeout((function(){n.getMessage()}),500)},onShow:function(){},getMessage:function(){var n=this;t.setRequest({url:"wxCardSelectByWebId",data:{vcardId:e.id}},(function(e){600==e.flag?setTimeout((function(){n.getMessage()}),300):n.setData({imgUrl:e.userpic?e.userpic.url:""})}))},againRetry:function(){t.burying.setPoint(t,1039),wx.navigateBack({delta:1})},invite:function(){t.burying.setPoint(t,1038)},onShareAppMessage:function(){var i;return i=t.source.shareClaimfilling+encodeURIComponent(e.entName),n.shareAppMessa({title:"你的电子名片已制作完成，请尽快认领",path:"pages/companyManage/inviteBinding/inviteBinding?entId="+e.entId,imageUrl:i})}}); 
 			}); 	require("pages/companyManage/cardEntrySuccess/cardEntrySuccess.js");
 		__wxRoute = 'pages/companyManage/entrySuccess/entrySuccess';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/entrySuccess/entrySuccess.js';	define("pages/companyManage/entrySuccess/entrySuccess.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/entrySuccess/entrySuccess.js");
 		__wxRoute = 'pages/companyManage/companyRights/companyRights';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/companyManage/companyRights/companyRights.js';	define("pages/companyManage/companyRights/companyRights.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{current:0,systemInfo:t.systemInfo,startAnimation:!1,prefix:t.source.prefix,rightsList:[{imgUrl:"/images/companyWeb/tequan-icon-1.png",imgDetailUrl:t.source.prefix+"img/companyManage/tequan-detail-1.jpg",topic:"为员工制作名片",detail:"支持手动录入、批量导入信息（电脑端）、邀请员工自行填写的方式，为企业添加员工名片",class:"icon-1",bottomDetail:""},{imgUrl:"/images/companyWeb/tequan-icon-2.png",imgDetailUrl:t.source.prefix+"img/companyManage/tequan-detail-2.jpg",topic:"企业标识",detail:"所有加入企业的员工名片右上增加企业认证标识，提高客户对员工的信任感",class:"icon-2",bottomDetail:"*需在电脑端完成企业认证"},{imgUrl:"/images/companyWeb/tequan-icon-3.png",imgDetailUrl:t.source.prefix+"img/companyManage/tequan-detail-3.jpg",topic:"专属样式",detail:"企业版用户不仅可使用普通用户无法使用的样式，还可以设计企业专属样式（电脑端）",class:"icon-3",bottomDetail:""},{imgUrl:"/images/companyWeb/tequan-icon-4.png",imgDetailUrl:t.source.prefix+"img/companyManage/tequan-detail-4.jpg",topic:"部门分配",detail:"支持同时使用多个名片样式，通过为样式命名即可实现为各部门或子公司员工分配不同样式",class:"icon-4",bottomDetail:""},{imgUrl:"/images/companyWeb/tequan-icon-5.png",imgDetailUrl:t.source.prefix+"img/companyManage/tequan-detail-5.jpg",topic:"企业微官网",detail:"微官网是一个自带流量的移动官网，设置后自动展示在所有成员的电子名片内，有利于客户快速了解您的企业。",class:"icon-5",bottomDetail:""},{imgUrl:"/images/companyWeb/tequan-icon-6.png",imgDetailUrl:t.source.prefix+"img/companyManage/tequan-detail-6.jpg",topic:"共享客户",detail:"员工可以分享自己收到的客户名片，提高员工间的协作效率",class:"icon-6",bottomDetail:""},{imgUrl:"/images/companyWeb/tequan-icon-7.png",imgDetailUrl:t.source.prefix+"img/companyManage/tequan-detail-7.jpg",topic:"认证保护",detail:"企业认证（电脑端）后，企业名无法被其他公司注册和认证，让假名片无所遁形",class:"icon-7",bottomDetail:""},{imgUrl:"/images/companyWeb/tequan-icon-8.png",imgDetailUrl:t.source.prefix+"img/companyManage/tequan-detail-8.jpg",topic:"多平台管理",detail:"企业版用户可以在微信、企业微信、递名片官网随时访问递名片企业版服务",class:"icon-8",bottomDetail:"*企业微信使用服务需登录递名片官网后扫码安装应用"}],swiperList:[],preChooseIndex:0,moveRpx:0,showBulletLayer:!1,bgIospc:t.source.bgIospc,orderType:1,platForm:t.systemInfo.platform&&t.systemInfo.platform.toLowerCase(),useAnimate:!1},onLoad:function(t){this.setData({preChooseIndex:t.index,current:t.index,orderType:t.orderType,entId:t.entId,swiperList:this.data.rightsList,useAnimate:!1}),wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#ffffff"}),this.setMoveRpx(t.index)},onShow:function(){},swiperChange:function(t){this.setData({useAnimate:!0}),this.setMoveRpx(t.detail.current)},setMoveRpx:function(t){var a=0;a=t==this.data.swiperList.length-1?250*(t-1-1):250*(t-1),this.setData({current:t,moveRpx:a,startAnimation:!0})},_androidPayMoney:function(){var a=this;if(!this.data.paying){"付费"==this.data.payStatus?t.burying.setPoint(t,933):"到期"==this.data.payStatus?t.burying.setPoint(t,913):"试用"==this.data.payStatus&&t.burying.setPoint(t,912),this.data.paying=!0;var e={};t.setRequest({method:"POST",url:"andriodWxPay",data:{entId:this.data.entId,orderType:this.data.orderType,openId:t.client.openid}},(function(t){e.package="prepay_id="+t.prepay_id,e.nonceStr=t.nonceStr,e.timeStamp=t.timeStamp,e.paySign=t.paySign,e.signType=t.signType,e.success=function(t){wx.redirectTo({url:"/pages/companyManage/companyRights/companyRights"})},e.fail=function(t){console.log("res.fail",t)},wx.requestPayment(e),a.data.paying=!1}),(function(){a.data.paying=!1,wxPublic.showtoast("支付失败")}))}},_payMoney:function(){t.burying.setPoint(t,1061),"ios"==this.data.platForm?this.setData({showBulletLayer:!0}):this._androidPayMoney()},_backgroundTap:function(){var t=this;this.selectComponent("#bulletLayer")._animationDown();var a=null;clearTimeout(a),a=setTimeout((function(){t.setData({showBulletLayer:!1})}),300)},topBack:function(){wx.navigateBack({delta:1})},onShareAppMessage:function(){}}); 
 			}); 	require("pages/companyManage/companyRights/companyRights.js");
 	