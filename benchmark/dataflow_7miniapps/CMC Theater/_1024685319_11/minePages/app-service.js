/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx1=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx1:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx1 || [];
function gz$gwx1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_1)return __WXML_GLOBAL__.ops_cached.$gwx1_1
__WXML_GLOBAL__.ops_cached.$gwx1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_1);return __WXML_GLOBAL__.ops_cached.$gwx1_1
}
function gz$gwx1_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_2)return __WXML_GLOBAL__.ops_cached.$gwx1_2
__WXML_GLOBAL__.ops_cached.$gwx1_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_2);return __WXML_GLOBAL__.ops_cached.$gwx1_2
}
function gz$gwx1_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_3)return __WXML_GLOBAL__.ops_cached.$gwx1_3
__WXML_GLOBAL__.ops_cached.$gwx1_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_3);return __WXML_GLOBAL__.ops_cached.$gwx1_3
}
function gz$gwx1_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_4)return __WXML_GLOBAL__.ops_cached.$gwx1_4
__WXML_GLOBAL__.ops_cached.$gwx1_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'loadMoreCoupons'])
Z([3,'mine-coupons-scroll'])
Z([a,[3,'height: '],[[7],[3,'scrollHeight']],[3,'rpx;']])
Z([[7],[3,'currentShowArr']])
Z([3,'id'])
Z([3,'clickCoupon'])
Z([3,'item-parent'])
Z([[7],[3,'index']])
Z([3,'mine-couponcell-offline'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'channel']],[1,'1']])
Z([[9],[[9],[[9],[[9],[[8],'onlineCoupon',[[7],[3,'item']]],[[8],'isMine',[1,true]]],[[8],'isDetails',[1,false]]],[[8],'isNoUse',[[6],[[7],[3,'item']],[3,'isNoUse']]]],[[8],'offLineCanUseCount',[[2,'-'],[1,1]]]])
Z([3,'online_coupon_item'])
Z([[9],[[9],[[8],'item',[[7],[3,'item']]],[[8],'isShowDialog',[[7],[3,'isShowDialog']]]],[[8],'isShow',[[7],[3,'isShow']]]])
Z([3,'couponDetail'])
})(__WXML_GLOBAL__.ops_cached.$gwx1_4);return __WXML_GLOBAL__.ops_cached.$gwx1_4
}
function gz$gwx1_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_5)return __WXML_GLOBAL__.ops_cached.$gwx1_5
__WXML_GLOBAL__.ops_cached.$gwx1_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([[2,'>'],[[6],[[7],[3,'inputVal']],[3,'length']],[1,0]])
Z([[2,'?:'],[[7],[3,'isSearch']],[[7],[3,'searchResult']],[[7],[3,'orderDatas']]])
Z([3,'order_num'])
Z([3,'itemLongClick'])
Z([3,'itemClick'])
Z([3,'order_list'])
Z([[7],[3,'item']])
Z([a,[3,'display:'],[[2,'?:'],[[2,'=='],[[7],[3,'current']],[1,0]],[1,'none'],[1,'flex']]])
Z([[8],'item',[[7],[3,'item']]])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'show_type']],[1,'1']],[1,'ticket'],[1,'shop']])
Z([[9],[[8],'orderDatas',[[7],[3,'orderDatas']]],[[8],'isFinished',[[7],[3,'isFinished']]]])
Z(z[6])
Z([[7],[3,'payingList']])
Z(z[3])
Z(z[5])
Z(z[6])
Z(z[7])
Z([a,z[8][1],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'payingList']],[3,'length']],[1,0]],[1,'none'],[1,'flex']]])
Z(z[9])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx1_5);return __WXML_GLOBAL__.ops_cached.$gwx1_5
}
function gz$gwx1_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_6)return __WXML_GLOBAL__.ops_cached.$gwx1_6
__WXML_GLOBAL__.ops_cached.$gwx1_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'width:100%;height:100%;'])
Z([[7],[3,'list']])
Z([3,'id'])
Z([[2,'!='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'list']],[3,'length']],[1,1]]])
Z([[2,'=='],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx1_6);return __WXML_GLOBAL__.ops_cached.$gwx1_6
}
function gz$gwx1_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_7)return __WXML_GLOBAL__.ops_cached.$gwx1_7
__WXML_GLOBAL__.ops_cached.$gwx1_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'score_details_coupon'])
Z([[9],[[8],'item',[[7],[3,'coupon']]],[[8],'scoreDetails',[1,true]]])
Z([3,'coupon'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'pwdstr',[[7],[3,'pwdstr']]],[[8],'nums',[[7],[3,'nums']]]],[[8],'animationData',[[7],[3,'animationData']]]],[[8],'isShowDialog',[[7],[3,'isShowDialog']]]],[[8],'isShow',[[7],[3,'isShow']]]],[[8],'title',[1,'请输入会员卡支付密码']]],[[8],'isNeedPwd',[[7],[3,'isNeedPwd']]]],[[8],'animStyle',[[7],[3,'animStyle']]]],[[8],'bodyStyle',[[7],[3,'bodyStyle']]]],[[8],'coupon',[[7],[3,'coupon']]]])
Z([3,'pwd_dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx1_7);return __WXML_GLOBAL__.ops_cached.$gwx1_7
}
function gz$gwx1_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_8)return __WXML_GLOBAL__.ops_cached.$gwx1_8
__WXML_GLOBAL__.ops_cached.$gwx1_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'swiperChange'])
Z([3,'true'])
Z([3,'score_swiper'])
Z([[7],[3,'current']])
Z([3,'45rpx'])
Z(z[4])
Z([[7],[3,'cards']])
Z([3,'item'])
Z([a,[3,'score_swiper_item '],[[2,'?:'],[[2,'=='],[[7],[3,'current']],[[7],[3,'index']]],[1,''],[1,'score_swiper_item_small']]])
Z([[8],'memberCard',[[7],[3,'item']]])
Z([3,'card'])
})(__WXML_GLOBAL__.ops_cached.$gwx1_8);return __WXML_GLOBAL__.ops_cached.$gwx1_8
}
function gz$gwx1_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_9)return __WXML_GLOBAL__.ops_cached.$gwx1_9
__WXML_GLOBAL__.ops_cached.$gwx1_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_9);return __WXML_GLOBAL__.ops_cached.$gwx1_9
}
function gz$gwx1_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_10)return __WXML_GLOBAL__.ops_cached.$gwx1_10
__WXML_GLOBAL__.ops_cached.$gwx1_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'mobile']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx1_10);return __WXML_GLOBAL__.ops_cached.$gwx1_10
}
function gz$gwx1_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_11)return __WXML_GLOBAL__.ops_cached.$gwx1_11
__WXML_GLOBAL__.ops_cached.$gwx1_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_11);return __WXML_GLOBAL__.ops_cached.$gwx1_11
}
function gz$gwx1_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_12)return __WXML_GLOBAL__.ops_cached.$gwx1_12
__WXML_GLOBAL__.ops_cached.$gwx1_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[9],[[9],[[8],'months',[[7],[3,'months']]],[[8],'days',[[7],[3,'days']]]],[[8],'isShowDialog',[[7],[3,'isShowDialog']]]],[[8],'isShow',[[7],[3,'isShow']]]])
Z([3,'birthday'])
})(__WXML_GLOBAL__.ops_cached.$gwx1_12);return __WXML_GLOBAL__.ops_cached.$gwx1_12
}
function gz$gwx1_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_13)return __WXML_GLOBAL__.ops_cached.$gwx1_13
__WXML_GLOBAL__.ops_cached.$gwx1_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_13);return __WXML_GLOBAL__.ops_cached.$gwx1_13
}
function gz$gwx1_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_14)return __WXML_GLOBAL__.ops_cached.$gwx1_14
__WXML_GLOBAL__.ops_cached.$gwx1_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_14);return __WXML_GLOBAL__.ops_cached.$gwx1_14
}
function gz$gwx1_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_15)return __WXML_GLOBAL__.ops_cached.$gwx1_15
__WXML_GLOBAL__.ops_cached.$gwx1_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_15);return __WXML_GLOBAL__.ops_cached.$gwx1_15
}
function gz$gwx1_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_16)return __WXML_GLOBAL__.ops_cached.$gwx1_16
__WXML_GLOBAL__.ops_cached.$gwx1_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'newValue']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx1_16);return __WXML_GLOBAL__.ops_cached.$gwx1_16
}
function gz$gwx1_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_17)return __WXML_GLOBAL__.ops_cached.$gwx1_17
__WXML_GLOBAL__.ops_cached.$gwx1_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'newPhone']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx1_17);return __WXML_GLOBAL__.ops_cached.$gwx1_17
}
function gz$gwx1_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_18)return __WXML_GLOBAL__.ops_cached.$gwx1_18
__WXML_GLOBAL__.ops_cached.$gwx1_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'display: flex;flex-direction: column;background:white;margin-top:30rpx;'])
Z([[2,'>'],[[6],[[7],[3,'oldPwd']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'newPwd']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx1_18);return __WXML_GLOBAL__.ops_cached.$gwx1_18
}
__WXML_GLOBAL__.ops_set.$gwx1=z;
__WXML_GLOBAL__.ops_init.$gwx1=true;
var nv_require=function(){var nnm={"m_./minePages/pages/user/info/userInfo.wxml:util":np_0,"m_./minePages/pages/user/phone/bindPhone.wxml:util":np_1,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./minePages/pages/user/info/userInfo.wxml']={};
f_['./minePages/pages/user/info/userInfo.wxml']['util'] =nv_require("m_./minePages/pages/user/info/userInfo.wxml:util");
function np_0(){var nv_module={nv_exports:{}};var nv_sub = (function (nv_mobile){if (nv_mobile){nv_mobile = nv_mobile + "";var nv_temp = nv_mobile.nv_substring(0,3) + "****" + nv_mobile.nv_substring(nv_mobile.nv_length - 4);return(nv_temp)} else {return("")}});nv_module.nv_exports.nv_sub = nv_sub;return nv_module.nv_exports;}

f_['./minePages/pages/user/phone/bindPhone.wxml']={};
f_['./minePages/pages/user/phone/bindPhone.wxml']['util'] =nv_require("m_./minePages/pages/user/phone/bindPhone.wxml:util");
function np_1(){var nv_module={nv_exports:{}};var nv_sub = (function (nv_val){var nv_temp = nv_val.nv_substring(0,3) + "****" + nv_val.nv_substring(nv_val.nv_length - 4);return(nv_temp)});nv_module.nv_exports.nv_sub = nv_sub;return nv_module.nv_exports;}

var x=['./minePages/pages/BindOffLineCoupon/BindOffLineCoupon.wxml','./minePages/pages/codeOpenCard/openCard.wxml','./minePages/pages/contactLists/contactLists.wxml','./minePages/pages/coupon/coupon.wxml','/templates/confirmOrder/choseCoupon/activeCoupon/onlineCouponItem.wxml','./../../../templates/home/couponDetail/couponDetail.wxml','./minePages/pages/orderLists/orderLists.wxml','../../../templates/orderlist/item.wxml','../../../templates/empty/empty.wxml','./minePages/pages/question/questionList.wxml','./minePages/pages/score/details/scoreDetails.wxml','/templates/mime/mimeCoupon/couponItem.wxml','/templates/dialog/scoreExchange/score_exchange_dialog.wxml','./minePages/pages/score/scoreExchange.wxml','/templates/mime/scoreExchangeCard/item.wxml','./minePages/pages/setting/setting.wxml','./minePages/pages/suggestion/suggestion.wxml','./minePages/pages/user/contact/contact.wxml','./minePages/pages/user/info/userInfo.wxml','/templates/user/birthday/birthday.wxml','./minePages/pages/user/logoutAccount/logoutAccount.wxml','./minePages/pages/user/logoutUserCards/logoutUserCards.wxml','./minePages/pages/user/movieLable/lable.wxml','./minePages/pages/user/nick/nickName.wxml','./minePages/pages/user/phone/bindPhone.wxml','./minePages/pages/user/pwd/modifyPwd.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx1_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx1_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx1_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx1_4()
var fE=e_[x[3]].i
var cF=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',0,'class',1,'style',1],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['bindtap',5,'class',1,'data-index',2],[],oJ,cI,gg)
var eN=_mz(z,'view',['class',8,'hidden',1],[],oJ,cI,gg)
var bO=e_[x[3]].i
_ai(bO,x[4],e_,x[3],22,8)
var oP=_v()
_(eN,oP)
var xQ=_oz(z,11,oJ,cI,gg)
var oR=_gd(x[3],xQ,e_,d_)
if(oR){
var fS=_1z(z,10,oJ,cI,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[3],23,20)
bO.pop()
_(tM,eN)
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,3,oH,e,s,gg,hG,'item','index','id')
_(r,cF)
_ai(fE,x[5],e_,x[3],76,2)
var cT=_v()
_(r,cT)
var hU=_oz(z,13,e,s,gg)
var oV=_gd(x[3],hU,e_,d_)
if(oV){
var cW=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[3],77,14)
fE.pop()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx1_5()
var lY=_n('view')
_rz(z,lY,'class',0,e,s,gg)
var aZ=e_[x[6]].i
var t1=_v()
_(lY,t1)
if(_oz(z,1,e,s,gg)){t1.wxVkey=1
}
_ai(aZ,x[7],e_,x[6],27,4)
var e2=_v()
_(lY,e2)
var b3=function(x5,o4,o6,gg){
var c8=_mz(z,'view',['bindlongpress',4,'catchtap',1,'class',2,'data-bean',3,'style',4],[],x5,o4,gg)
var h9=_v()
_(c8,h9)
var o0=_oz(z,10,x5,o4,gg)
var cAB=_gd(x[6],o0,e_,d_)
if(cAB){
var oBB=_1z(z,9,x5,o4,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[6],32,18)
_(o6,c8)
return o6
}
e2.wxXCkey=2
_2z(z,2,b3,e,s,gg,e2,'item','index','order_num')
_ai(aZ,x[8],e_,x[6],43,4)
var lCB=_v()
_(lY,lCB)
var aDB=_oz(z,12,e,s,gg)
var tEB=_gd(x[6],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[6],44,16)
var bGB=_v()
_(lY,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_mz(z,'view',['catchtap',15,'class',1,'data-bean',2,'style',3],[],oJB,xIB,gg)
var oNB=_v()
_(hMB,oNB)
var cOB=_oz(z,20,oJB,xIB,gg)
var oPB=_gd(x[6],cOB,e_,d_)
if(oPB){
var lQB=_1z(z,19,oJB,xIB,gg) || {}
var cur_globalf=gg.f
oNB.wxXCkey=3
oPB(lQB,lQB,oNB,gg)
gg.f=cur_globalf
}
else _w(cOB,x[6],56,18)
_(fKB,hMB)
return fKB
}
bGB.wxXCkey=2
_2z(z,13,oHB,e,s,gg,bGB,'item','index','order_num')
t1.wxXCkey=1
aZ.pop()
aZ.pop()
_(r,lY)
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx1_6()
var tSB=_n('view')
_rz(z,tSB,'style',0,e,s,gg)
var bUB=_v()
_(tSB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
if(_oz(z,3,oXB,xWB,gg)){h1B.wxVkey=1
}
h1B.wxXCkey=1
return fYB
}
bUB.wxXCkey=2
_2z(z,1,oVB,e,s,gg,bUB,'item','index','id')
var eTB=_v()
_(tSB,eTB)
if(_oz(z,4,e,s,gg)){eTB.wxVkey=1
}
eTB.wxXCkey=1
_(r,tSB)
return r
}
e_[x[9]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx1_7()
var c3B=_n('view')
_rz(z,c3B,'class',0,e,s,gg)
var o4B=e_[x[10]].i
_ai(o4B,x[11],e_,x[10],3,6)
var l5B=_v()
_(c3B,l5B)
var a6B=_oz(z,2,e,s,gg)
var t7B=_gd(x[10],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[10],4,18)
o4B.pop()
_(r,c3B)
var b9B=_n('view')
var o0B=e_[x[10]].i
_ai(o0B,x[12],e_,x[10],30,4)
var xAC=_v()
_(b9B,xAC)
var oBC=_oz(z,4,e,s,gg)
var fCC=_gd(x[10],oBC,e_,d_)
if(fCC){
var cDC=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xAC.wxXCkey=3
fCC(cDC,cDC,xAC,gg)
gg.f=cur_globalf
}
else _w(oBC,x[10],31,16)
o0B.pop()
_(r,b9B)
return r
}
e_[x[10]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx1_8()
var oFC=_mz(z,'swiper',['bindchange',0,'circular',1,'class',1,'current',2,'nextMargin',3,'previousMargin',4],[],e,s,gg)
var cGC=_v()
_(oFC,cGC)
var oHC=function(aJC,lIC,tKC,gg){
var bMC=_n('view')
_rz(z,bMC,'class',8,aJC,lIC,gg)
var oNC=e_[x[13]].i
_ai(oNC,x[14],e_,x[13],25,12)
var xOC=_v()
_(bMC,xOC)
var oPC=_oz(z,10,aJC,lIC,gg)
var fQC=_gd(x[13],oPC,e_,d_)
if(fQC){
var cRC=_1z(z,9,aJC,lIC,gg) || {}
var cur_globalf=gg.f
xOC.wxXCkey=3
fQC(cRC,cRC,xOC,gg)
gg.f=cur_globalf
}
else _w(oPC,x[13],26,24)
oNC.pop()
_(tKC,bMC)
return tKC
}
cGC.wxXCkey=2
_2z(z,6,oHC,e,s,gg,cGC,'item','index','item')
_(r,oFC)
return r
}
e_[x[13]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx1_9()
return r
}
e_[x[15]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx1_10()
var cUC=_v()
_(r,cUC)
if(_oz(z,0,e,s,gg)){cUC.wxVkey=1
}
cUC.wxXCkey=1
return r
}
e_[x[16]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx1_11()
return r
}
e_[x[17]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx1_12()
var aXC=e_[x[18]].i
_ai(aXC,x[19],e_,x[18],118,2)
var tYC=_v()
_(r,tYC)
var eZC=_oz(z,1,e,s,gg)
var b1C=_gd(x[18],eZC,e_,d_)
if(b1C){
var o2C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tYC.wxXCkey=3
b1C(o2C,o2C,tYC,gg)
gg.f=cur_globalf
}
else _w(eZC,x[18],119,14)
aXC.pop()
return r
}
e_[x[18]]={f:m11,j:[],i:[],ti:[x[19]],ic:[]}
d_[x[20]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx1_13()
return r
}
e_[x[20]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx1_14()
return r
}
e_[x[21]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx1_15()
return r
}
e_[x[22]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx1_16()
var h7C=_v()
_(r,h7C)
if(_oz(z,0,e,s,gg)){h7C.wxVkey=1
}
h7C.wxXCkey=1
return r
}
e_[x[23]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx1_17()
var c9C=_v()
_(r,c9C)
if(_oz(z,0,e,s,gg)){c9C.wxVkey=1
}
c9C.wxXCkey=1
return r
}
e_[x[24]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx1_18()
var lAD=_n('view')
_rz(z,lAD,'style',0,e,s,gg)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,1,e,s,gg)){aBD.wxVkey=1
}
var tCD=_v()
_(lAD,tCD)
if(_oz(z,2,e,s,gg)){tCD.wxVkey=1
}
aBD.wxXCkey=1
tCD.wxXCkey=1
_(r,lAD)
return r
}
e_[x[25]]={f:m17,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['minePages/pages/BindOffLineCoupon/BindOffLineCoupon.json'] = {"navigationBarTitleText":"添加优惠券","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/BindOffLineCoupon/BindOffLineCoupon.wxml'] = [$gwx1, './minePages/pages/BindOffLineCoupon/BindOffLineCoupon.wxml'];else __wxAppCode__['minePages/pages/BindOffLineCoupon/BindOffLineCoupon.wxml'] = $gwx1( './minePages/pages/BindOffLineCoupon/BindOffLineCoupon.wxml' );
		__wxAppCode__['minePages/pages/codeOpenCard/openCard.json'] = {"usingComponents":{},"navigationBarTitleText":"兑换码开卡"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/codeOpenCard/openCard.wxml'] = [$gwx1, './minePages/pages/codeOpenCard/openCard.wxml'];else __wxAppCode__['minePages/pages/codeOpenCard/openCard.wxml'] = $gwx1( './minePages/pages/codeOpenCard/openCard.wxml' );
		__wxAppCode__['minePages/pages/contactLists/contactLists.json'] = {"navigationBarTitleText":"常用联系人","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/contactLists/contactLists.wxml'] = [$gwx1, './minePages/pages/contactLists/contactLists.wxml'];else __wxAppCode__['minePages/pages/contactLists/contactLists.wxml'] = $gwx1( './minePages/pages/contactLists/contactLists.wxml' );
		__wxAppCode__['minePages/pages/coupon/coupon.json'] = {"enablePullDownRefresh":false,"navigationBarTitleText":"优惠券","disableScroll":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/coupon/coupon.wxml'] = [$gwx1, './minePages/pages/coupon/coupon.wxml'];else __wxAppCode__['minePages/pages/coupon/coupon.wxml'] = $gwx1( './minePages/pages/coupon/coupon.wxml' );
		__wxAppCode__['minePages/pages/orderLists/orderLists.json'] = {"navigationBarTitleText":"我的订单","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/orderLists/orderLists.wxml'] = [$gwx1, './minePages/pages/orderLists/orderLists.wxml'];else __wxAppCode__['minePages/pages/orderLists/orderLists.wxml'] = $gwx1( './minePages/pages/orderLists/orderLists.wxml' );
		__wxAppCode__['minePages/pages/question/questionList.json'] = {"navigationBarTitleText":"常见问题","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/question/questionList.wxml'] = [$gwx1, './minePages/pages/question/questionList.wxml'];else __wxAppCode__['minePages/pages/question/questionList.wxml'] = $gwx1( './minePages/pages/question/questionList.wxml' );
		__wxAppCode__['minePages/pages/score/details/scoreDetails.json'] = {"usingComponents":{},"navigationBarTitleText":"积分兑换"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/score/details/scoreDetails.wxml'] = [$gwx1, './minePages/pages/score/details/scoreDetails.wxml'];else __wxAppCode__['minePages/pages/score/details/scoreDetails.wxml'] = $gwx1( './minePages/pages/score/details/scoreDetails.wxml' );
		__wxAppCode__['minePages/pages/score/scoreExchange.json'] = {"usingComponents":{},"navigationBarTitleText":"积分兑换"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/score/scoreExchange.wxml'] = [$gwx1, './minePages/pages/score/scoreExchange.wxml'];else __wxAppCode__['minePages/pages/score/scoreExchange.wxml'] = $gwx1( './minePages/pages/score/scoreExchange.wxml' );
		__wxAppCode__['minePages/pages/setting/setting.json'] = {"navigationBarTitleText":"设置","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/setting/setting.wxml'] = [$gwx1, './minePages/pages/setting/setting.wxml'];else __wxAppCode__['minePages/pages/setting/setting.wxml'] = $gwx1( './minePages/pages/setting/setting.wxml' );
		__wxAppCode__['minePages/pages/suggestion/suggestion.json'] = {"navigationBarTitleText":"意见反馈","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/suggestion/suggestion.wxml'] = [$gwx1, './minePages/pages/suggestion/suggestion.wxml'];else __wxAppCode__['minePages/pages/suggestion/suggestion.wxml'] = $gwx1( './minePages/pages/suggestion/suggestion.wxml' );
		__wxAppCode__['minePages/pages/user/contact/contact.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/user/contact/contact.wxml'] = [$gwx1, './minePages/pages/user/contact/contact.wxml'];else __wxAppCode__['minePages/pages/user/contact/contact.wxml'] = $gwx1( './minePages/pages/user/contact/contact.wxml' );
		__wxAppCode__['minePages/pages/user/info/userInfo.json'] = {"navigationBarTitleText":"我的账户","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/user/info/userInfo.wxml'] = [$gwx1, './minePages/pages/user/info/userInfo.wxml'];else __wxAppCode__['minePages/pages/user/info/userInfo.wxml'] = $gwx1( './minePages/pages/user/info/userInfo.wxml' );
		__wxAppCode__['minePages/pages/user/logoutAccount/logoutAccount.json'] = {"navigationBarTitleText":"注销账号须知","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/user/logoutAccount/logoutAccount.wxml'] = [$gwx1, './minePages/pages/user/logoutAccount/logoutAccount.wxml'];else __wxAppCode__['minePages/pages/user/logoutAccount/logoutAccount.wxml'] = $gwx1( './minePages/pages/user/logoutAccount/logoutAccount.wxml' );
		__wxAppCode__['minePages/pages/user/logoutUserCards/logoutUserCards.json'] = {"navigationBarTitleText":"注销账号须知","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/user/logoutUserCards/logoutUserCards.wxml'] = [$gwx1, './minePages/pages/user/logoutUserCards/logoutUserCards.wxml'];else __wxAppCode__['minePages/pages/user/logoutUserCards/logoutUserCards.wxml'] = $gwx1( './minePages/pages/user/logoutUserCards/logoutUserCards.wxml' );
		__wxAppCode__['minePages/pages/user/movieLable/lable.json'] = {"navigationBarTitleText":"观影标签","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/user/movieLable/lable.wxml'] = [$gwx1, './minePages/pages/user/movieLable/lable.wxml'];else __wxAppCode__['minePages/pages/user/movieLable/lable.wxml'] = $gwx1( './minePages/pages/user/movieLable/lable.wxml' );
		__wxAppCode__['minePages/pages/user/nick/nickName.json'] = {"navigationBarTitleText":"修改昵称","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/user/nick/nickName.wxml'] = [$gwx1, './minePages/pages/user/nick/nickName.wxml'];else __wxAppCode__['minePages/pages/user/nick/nickName.wxml'] = $gwx1( './minePages/pages/user/nick/nickName.wxml' );
		__wxAppCode__['minePages/pages/user/phone/bindPhone.json'] = {"navigationBarTitleText":"修改手机号","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/user/phone/bindPhone.wxml'] = [$gwx1, './minePages/pages/user/phone/bindPhone.wxml'];else __wxAppCode__['minePages/pages/user/phone/bindPhone.wxml'] = $gwx1( './minePages/pages/user/phone/bindPhone.wxml' );
		__wxAppCode__['minePages/pages/user/pwd/modifyPwd.json'] = {"navigationBarTitleText":"修改密码","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['minePages/pages/user/pwd/modifyPwd.wxml'] = [$gwx1, './minePages/pages/user/pwd/modifyPwd.wxml'];else __wxAppCode__['minePages/pages/user/pwd/modifyPwd.wxml'] = $gwx1( './minePages/pages/user/pwd/modifyPwd.wxml' );
	
	__wxRoute = 'minePages/pages/suggestion/suggestion';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/suggestion/suggestion.js';	define("minePages/pages/suggestion/suggestion.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("./../../../config/httpHtlper.js");require("./../../../config/appStorage.js");Page({data:{mobile:"",suggestion:""},onLoad:function(o){var t=this,e=getApp().getUserInfo();e&&e.mobile&&t.setData({mobile:e.mobile})},input:function(o){var t=o.detail.value;this.setData({mobile:t})},input_suggestion:function(o){var t=o.detail.value;this.setData({suggestion:t})},clearInput:function(){this.setData({mobile:""})},add_suggestion:function(t){if(this.data.suggestion)if(this.data.mobile)if(this.data.mobile.length<11)wx.showToast({icon:"none",title:"手机号有误"});else{var e=wx.getSystemInfoSync();console.log(e.model),console.log(e.pixelRatio),console.log(e.windowWidth),console.log(e.windowHeight),console.log(e.language),console.log(e.version),console.log(e.platform);var i=this;o.add_suggestion(this.data.mobile,this.data.suggestion,e.model,"","").then(function(o){console.log(o),1==o.data.status&&(wx.showToast({icon:"none",title:"谢谢您的反馈"}),i.setData({suggestion:""}))})}else wx.showToast({icon:"none",title:"请输入手机号"});else wx.showToast({icon:"none",title:"请输入您的建议"})}}); 
 			}); 	require("minePages/pages/suggestion/suggestion.js");
 		__wxRoute = 'minePages/pages/question/questionList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/question/questionList.js';	define("minePages/pages/question/questionList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./../../../config/httpHtlper.js");Page({data:{list:[]},onLoad:function(a){var i=this;t.qa_list().then(function(t){console.log(t),i.setData({list:t.data.data})})}}); 
 			}); 	require("minePages/pages/question/questionList.js");
 		__wxRoute = 'minePages/pages/codeOpenCard/openCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/codeOpenCard/openCard.js';	define("minePages/pages/codeOpenCard/openCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../config/httpHtlper.js");Page({data:{inputVal:"",isCodeOpenFinished:!1},onLoad:function(a){},onShow:function(){this.data.isCodeOpenFinished&&wx.navigateBack({})},openClick:function(){if(this.data.inputVal){var e=this;a.codeExchangeCheck(this.data.inputVal).then(function(a){if(console.log(a),1==a.data.status){var t=a.data.data.cardLevelId;if("1"==a.data.data.isInCurrentCinema){var i={};i.id=t,i.bind_cinema_id=getApp().getCinema().id,i.exchange_code=e.data.inputVal;var n=getApp().encodeDataAndJsonStringify(i);wx.navigateTo({url:"/pages/card/onlinecard/ecardDetails?fromType=exchangeCode&bean="+n})}else{var o=a.data.data.cinemas;if(o&&o.length>0){var d=getApp().getCity(),s=-1;for(var l in o)if(o[l].id==d.id){s=l;break}s>0&&o.unshift(o.splice(s,1)[0]),console.log(o),getApp().globalData.openCardCinemas=o,wx.navigateTo({url:"/pages/home/cinemaList/cinemaList?type=openCard&cardLevelId="+t+"&exchange_code="+e.data.inputVal})}}}else console.log(a.data.msg)})}else wx.showToast({icon:"none",title:"请输入兑换码"})},input:function(a){var e=a.detail.value;e?(console.log("value = "+e.trim()),this.setData({inputVal:e.trim()})):this.setData({inputVal:""})},clearInput:function(){console.log("===================="),this.setData({inputVal:""})}}); 
 			}); 	require("minePages/pages/codeOpenCard/openCard.js");
 		__wxRoute = 'minePages/pages/setting/setting';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/setting/setting.js';	define("minePages/pages/setting/setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../pages/find/findHome/findAllSelectGoodsCart.js").allSelectGoodsCart,i=require("../../../config/httpHtlper.js");Page({data:{isLogin:!1,items:[{title:"意见反馈",image:"/images/mime/yijianfankui.png"},{title:"常见问题",image:"/images/mime/qa.png"},{title:"联系我们",image:"/images/mime/guanyuwomen.png"},{title:"用户协议",image:"/images/mime/yonghuxieyi.png"},{title:"隐私政策",image:"/images/mime/yinsizhengce.png"}]},onLoad:function(e){},onShow:function(){getApp().userIsLogin()&&this.setData({isLogin:!0})},logout:function(){i.logout().then(function(i){if(console.log(i),1==i.data.status)getApp().clearUserInfo(),e.clearCart(),wx.navigateBack();else if("205"==i.data.errcode)return getApp().clearUserInfo(),void wx.navigateBack()})},logoutAccount:function(){getApp().userIsLogin()?wx.navigateTo({url:"/minePages/pages/user/logoutAccount/logoutAccount"}):wx.navigateTo({url:"/pages/login/wxLogin/wxLogin"})},itemClick:function(e){switch(e.currentTarget.dataset.index){case 0:this.suggestion();break;case 1:this.questionList();break;case 2:this.callPhone();break;case 3:this.showUserProtocol();break;case 4:this.showPolicy()}},suggestion:function(){wx.navigateTo({url:"/minePages/pages/suggestion/suggestion"})},questionList:function(){wx.navigateTo({url:"/minePages/pages/question/questionList"})},callPhone:function(){var e=getApp().globalData.init;if(e.service_phone&&e.service_phone.length>0){var i=[];i.push(e.service_phone),wx.showActionSheet({itemList:i,success:function(e){wx.makePhoneCall({phoneNumber:i[e.tapIndex]})}})}},showUserProtocol:function(){wx.navigateTo({url:"/pages/login/agreement/agreement"})},showPolicy:function(){var e="/pages/find/promotionDetial/promotionDetial?promotion_url="+encodeURIComponent("http://group.leying.com/app-privacy-policy/index")+"&flag=yinsizhengce";wx.navigateTo({url:e})}}); 
 			}); 	require("minePages/pages/setting/setting.js");
 		__wxRoute = 'minePages/pages/score/scoreExchange';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/score/scoreExchange.js';	define("minePages/pages/score/scoreExchange.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("./../../../util/strUtil.js"),t=require("./../../../config/httpHtlper.js"),e=require("../../../util/util.js");Page({data:{current:0,coupons:[],cards:[],topHeight:0,isShowTop:!1,exchangeBack:!1,page:1,isMoreEmpty:!1},onLoad:function(a){var t=this;this.data.page=1,wx.getSystemInfo({success:function(a){console.log(a.pixelRatio),console.log(a.windowWidth),console.log(a.windowHeight),console.log(a.screenWidth),console.log(a.screenHeight),console.log(a.statusBarHeight);var e=a.windowWidth/750;t.data.scale=e,t.data.topHeight=332*e,console.log("1rpx = "+e+"px"),console.log("332rpx = "+332*e+"px")}}),this.getCardList()},onShow:function(){this.data.exchangeBack&&(this.data.page=1,this.data.coupons=[],this.getCardList(),this.data.exchangeBack=!1)},getCardList:function(){var a=this;t.card_list("").then(function(t){if(console.log(t),1==t.data.status){var o=t.data.data.card_data.length,c=[],r={};if(o&&o>0){for(var n=0;n<o;n++){var i=t.data.data.card_data[n];"1"==i.default_card&&(r=i),i.valid_time&&(i.valid_time=e.formatDate2(i.valid_time,"yyyy.MM.dd")),"1"==i.card_recharge?i.temp_recharge=!0:i.temp_recharge=!1,i.no_color="";var s={golden:"#A38D6D",red:"#A27774",purple:"#85819B",green:"#719598",blue:"#738AA1",black:"#79787D"},d={golden:"ecz_bg1",red:"ecz_bg2",purple:"ecz_bg3",green:"ecz_bg4",blue:"ecz_bg5",black:"ecz_bg6"};i.card_color?(i.card_bg=d[i.card_color],i.wx_text_color="white",i.body_bg=s[i.card_color]):"0"==i.can_buy_with_online_pay?(i.card_bg="card_chongzhi_bg",i.wx_text_color="chongzhi",i.no_color="card_recharge_no_color",i.body_bg="#B0A99D"):(i.body_bg="#A1A5AB",i.card_bg="card_quanyi_bg",i.wx_text_color="quanyi"),i.badText="",i.isShowBadCard=!1,"1"!=i.card_status&&(i.price&&""!=i.price&&(i.price=parseFloat(i.price)+""),i.body_bg="#979797",i.wx_text_color="white",i.card_bg="card_guoqi_bg",i.badText=a.getbadText(i.card_status)),c.push(i)}var l=-1;r&&(l=c.indexOf(r)),console.log(" default index = "+l),l>-1&&(c.splice(l,1),c.unshift(r)),a.data.cards=c,a.data.curCard=c[a.data.current],a.setBackgroundColor(),a.getCoupons()}else getApp().showModalApp("请您去绑卡或者去开卡")}})},getCoupons:function(){var a=this,e=this.data.page,o=this;t.getScoreExchangeCoupons(e).then(function(t){if(1==t.data.status){var e=t.data.data;e&&e.length>0?o.calculateScore(e,1):a.data.page>1?a.data.isMoreEmpty=!0:1==a.data.page&&(o.setData({cards:a.data.cards}),getApp().showModalBaseCallBack("积分兑换尚未上架商品，敬请期待","我知道了",!1,function(a){a.confirm&&wx.navigateBack({})}))}})},calculateScore:function(t,e){for(var o=[],c=0;c<t.length;c++){var r=t[c];r.constant_price=a.priceFormat(r.constant_price),r.replace_price=a.priceFormat(r.replace_price),r.condition_price=a.priceFormat(r.condition_price);var n=parseFloat(r.point),i=parseFloat(this.data.curCard.integral);r.canExchange=!1,r.exchangeText="不足抵扣",console.log("point="+n+"cardScore="+i+" "+(i>n)),n&&i&&i>=n&&(r.canExchange=!0,r.exchangeText="去兑换"),"1"!=this.data.curCard.card_status&&(r.canExchange=!1,r.exchangeText="卡异常"),r.coupon_bg="/images/newcoupon/jifenduihuan_daijin.png",r.coupon_price_margin="home_coupon_daijin","1"==r.coupon_type?(r.price=r.constant_price,r.coupon_bg="/images/newcoupon/jifenduihuan_duihuan.png"):r.price=r.replace_price,o.push(r)}this.data.page>1&&1==e?this.data.coupons=this.data.coupons.concat(o):this.data.coupons=o,this.setData({coupons:this.data.coupons,cards:this.data.cards})},getbadText:function(a){switch(a){case"2":return"已挂失";case"3":return"已退还";case"4":return"已注销";case"5":return"已过期";case"6":return"已作废";case"8":return"未启用";case"9":return"已休眠";case"10":return"已冻结";default:return"无信息"}},exchangeItemClick:function(a){var t=a.currentTarget.dataset.index,e=this.data.coupons[t];console.log(a),console.log(e),console.log(this.data.curCard),e.card_num=this.data.curCard.card_num,e.card_pay_verify=this.data.curCard.card_pay_verify,e.level=this.data.curCard.level;var o=getApp().encodeDataAndJsonStringify(e);wx.navigateTo({url:"/minePages/pages/score/details/scoreDetails?coupon="+o})},exchangeClick:function(a){var t=a.target.dataset.index,e=this.data.coupons[t];if(console.log("index ="+t),e.canExchange){e.card_num=this.data.curCard.card_num,e.card_pay_verify=this.data.curCard.card_pay_verify,e.level=this.data.curCard.level;var o=getApp().encodeDataAndJsonStringify(e);wx.navigateTo({url:"/minePages/pages/score/details/scoreDetails?coupon="+o})}},swiperChange:function(a){console.log(a);var t=a.detail.current,e=a.detail.source;if(console.log("current ="+t+" source ="+e),e&&"touch"==e){this.data.curCard=this.data.cards[t];this.data.curCard.body_bg;this.calculateScore(this.data.coupons,0),this.setData({current:t}),this.setBackgroundColor()}},setBackgroundColor:function(){var a=this.data.curCard.body_bg;wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:a})},onReachBottom:function(){console.log("-----------bottom-----------------"),this.data.isMoreEmpty||(this.data.page+=1,this.getCoupons())},onPageScroll:function(a){console.log("============="),console.log(a.scrollTop),a.scrollTop>this.data.topHeight&&!this.data.isShowTop?(this.setData({isShowTop:!0}),console.log("-------显示-----setdata只设置一次")):a.scrollTop<this.data.topHeight&&this.data.isShowTop&&(this.setData({isShowTop:!1}),console.log("-------不显示-----setdata只设置一次"))}}); 
 			}); 	require("minePages/pages/score/scoreExchange.js");
 		__wxRoute = 'minePages/pages/score/details/scoreDetails';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/score/details/scoreDetails.js';	define("minePages/pages/score/details/scoreDetails.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("./../../../../config/httpHtlper.js"),t=require("./../../../../util/aes.js"),e=t.enc.Utf8.parse("1de&^*-#gsol&^*-"),n=t.enc.Utf8.parse("1rue%#ls;1&8^*-#");Page({data:{pwds:[],pwdstr:"",nums:[1,2,3,4,5,6,7,8,9,10,0,12],isShowDialog:!1,isShow:!1,isNeedPwd:!0,animStyle:"pwd_body_anim",bodyStyle:"pwd_body",coupon:{}},onLoad:function(a){var t=getApp().decodeDataAndJsonParse(a.coupon);console.log(t),t.is_new=0,t.coupon_bg="/images/newcoupon/daijin_bg.png",t.coupon_info=t.coupon_name,t.endImage=t.category&&"1"!=t.category?"/images/newcoupon/duihuanquan_maipin_icon.png":"/images/newcoupon/duihuanquan_dianying_icon.png","卡异常"==t.exchangeText&&(t.exchangeText="无法兑换"),t.validate_type&&"1"==t.validate_type?t.local_time=t.validate_date_start+" - "+t.validate_date_end:t.local_time="自领取日"+t.validate_date_of_day+"天过期","1"==t.coupon_type&&(t.coupon_bg="/images/newcoupon/duihuan_bg.png"),this.setData({coupon:t})},exchangeClick:function(a){if(this.data.coupon.canExchange){console.log("-----------");var t="pwd_body_anim",e="pwd_body";this.data.isNeedPwd||(t="pwd_body_anim_nopwd",e="pwd_body_nopwd");var n=this;n.setData({isShow:!0,animStyle:t,bodyStyle:e}),setTimeout(function(){n.setData({isShowDialog:!0})}.bind(n),200)}},dismissDialog:function(){this.setData({isShowDialog:!1}),setTimeout(function(){this.setData({isShow:!1})}.bind(this),350)},num_click:function(a){var t=a.currentTarget.dataset.index;console.log("index == "+t);var e=this.data.pwdstr;if(11==t){if(0==e.length)return;return e=e.slice(0,e.length-1),console.log("pwdstr",e),void this.setData({pwdstr:e})}9!=t&&(e+=this.data.nums[t],console.log("pwdstr",e),this.setData({pwdstr:e}))},confirmPwd:function(){this.data.pwd_param=this.data.pwdstr,this.setData({pwdstr:"",isShowDialog:!1});var a=this;setTimeout(function(){this.setData({isShow:!1}),a.scoreExchange()}.bind(this),350)},scoreExchange:function(){var o=this.data.coupon.card_num.trim(),i=this.data.coupon.point,s=t.encrypt(this.data.pwd_param,e,n),d=this.data.coupon.id,c=this;a.scoreExchange(o,s,d,i).then(function(a){if(console.log(a),a.cancelShowError=!0,1==a.data.status){var t=a.data.data.msg;getApp().showModalCallBackTitle(t,"去购票","返回","兑换成功",!0,function(a){if(a.confirm){if(getApp().globalData.onlyGoods)return void wx.reLaunch({url:"/pages/find/findFoodHome/findFoodHome"});wx.switchTab({url:"/pages/home/cinema/cinema"})}else c.backAndRefresh()})}else if(a.data.msg){var e=a.data.errcode;wx.showModal({showCancel:!1,content:a.data.msg,confirmText:"我知道了",success:function(a){a.confirm&&"391"==e&&c.backAndRefresh()}})}})},backAndRefresh:function(){var a=getCurrentPages(),t=a[a.length-1-1];t&&(t.setData({exchangeBack:!0}),wx.navigateBack())}}); 
 			}); 	require("minePages/pages/score/details/scoreDetails.js");
 		__wxRoute = 'minePages/pages/orderLists/orderLists';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/orderLists/orderLists.js';	define("minePages/pages/orderLists/orderLists.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("./../../../config/httpHtlper.js"),e=require("./../../../util/util.js");Page({data:{inputVal:"",orderDatas:[],payingList:[],unFinishedOrder:{},isSearch:!1,searchResult:[],hasUnFinishingOrder:!1,isUnFinished:!0,isFinished:!0,loadMore:getApp().globalData.load_more,isHideLoadMore:!0,pageCount:10,onlyGoods:"0",current:0,isClicked:!1},onLoad:function(a){var e=a.onlyGoods;console.log("onlyGoods = "+e),e&&"1"==e&&(this.data.onlyGoods=e,this.setData({onlyGoods:e}))},onShow:function(){getApp().userIsLogin()?(this.data.isClicked=!1,console.log("-----orderlist---------"),this.getOrderListData()):getApp().alignLogin()},getOrderListData:function(){var t=this,o=[];a.orderList("0").then(function(a){if(console.log(a),1==a.data.status){for(var i,n=a.data.data.order_data.length,s=!1,r=[],d=0;d<n;d++){var l=a.data.data.order_data[d];if("1"==l.show_type){l.tempTime=e.formatDatelong(l.start_date+" "+l.start_time,"yyyy/MM/dd HH:mm");var g=l.seat_info.split(",").length;if(l.ticket_size=g,l.total_money_temp=parseFloat(l.total_money),"0"==l.total_goods_num)l.noGoods=!0;else if(l.noGoods=!1,l.goods_data){for(var _="",u=0;u<l.goods_data.length;u++){_=_+(f=l.goods_data[u]).goods_alias+"x"+f.good_num+"、";var h=t.getAdditionalGoodsInfo(f);h&&(_=_+h+"、")}_.length>0&&(_=_.substring(0,_.length-1)),l.goodInfos=_}}else{var c=new Array,m=[];for(var p in l.goods_detail){var f=l.goods_detail[p];c.hasOwnProperty(f.name)||(c[f.name]=f,m.push(f))}c.length=0,l.goods_detail=m,l.total_money_temp=parseFloat(l.total_amount),l.tempTime=e.formatDatelong(l.create_time,"yyyy/MM/dd HH:mm")}"3"==l.order_status&&(console.log("====存在待支付订单====="),s=!0,i=l,d,r.push(l)),o.push(l)}console.log("paying list",r);var v=o.length;s=r.length>0,console.log("paying list",r),console.log("hasUnFinished = "+s),s&&v>1?(v-=1,o=o.filter(function(a){return"3"!=a.order_status})):s&&1==v&&(o=[]),console.log("datas = ",o),t.data.orders=o;var y=Math.ceil(v/t.data.pageCount);t.data.page=y,t.data.index=1;var D=t.data.orders.slice(0,t.data.pageCount);console.log("length = "+v+" page = "+y+" pageCount ="+t.data.pageCount),t.data.onlyGoods&&"1"==t.data.onlyGoods&&(s=!1,r=[]),s?t.setData({hasUnFinishingOrder:!0,isUnFinished:!1,isFinished:!0,orderDatas:D,current:t.data.current,payingList:r,isSearch:!1,unFinishedOrder:i}):t.setData({isUnFinished:!0,isFinished:!1,hasUnFinishingOrder:!1,isSearch:!1,current:1,orderDatas:D})}})},getAdditionalGoodsInfo:function(a){var e="";if(a.additional_goods&&a.additional_goods.length>0)for(var t in a.additional_goods){var o=a.additional_goods[t];e+=o.goods_alias+"x"+o.goods_num}return e},tabClick:function(a){var e=a.target.dataset.type;console.log("------------type = "+e),"1"==e?(console.log("------------"),this.setData({isUnFinished:!0,isFinished:!1,current:1})):"0"==e&&(console.log("============"),this.setData({isUnFinished:!1,isFinished:!0,current:0}))},itemLongClick:function(a){console.log(a),console.log("==========");var e=this;getApp().showModalCallBackTitle("订单删除后无法恢复,\n是否确定执行删除操作?","确定","取消","温馨提示",!0,function(t){console.log(t),t.confirm&&e.deleteOrder(a)})},deleteOrder:function(e){var t=e.currentTarget.dataset.bean,o=this;a.deleteOrder(t.order_num,t.order_type).then(function(a){1==a.data.status&&(wx.showToast({icon:"none",title:"订单已删除"}),o.data.isSearch?(o.removeAaary(o.data.searchResult,t),o.setData({searchResult:o.data.searchResult})):(o.removeAaary(o.data.orderDatas,t),o.setData({orderDatas:o.data.orderDatas})))})},removeAaary:function(a,e){var t=a.length;console.log("remove array");for(var o=0;o<t;o++)if(a[o].order_num==e.order_num)return console.log("找到对象了------------ i = "+o),0==o?(a.shift(),a):o==t-1?(a.pop(),a):(a.splice(o,1),a)},itemClick:function(e){if(!this.data.isClicked){this.data.isClicked=!0,console.log(e);var t=e.currentTarget.dataset.bean,o={};o.order_num=t.order_num,o.movie_name=t.movie_name,o.movie_format=t.movie_format,o.cinema_name=t.cinema_name,o.hall_name=t.hall_name,o.mobile=t.mobile,o.start_time=t.start_date+" "+t.start_time,o.seat_info=t.seat_info,o.seat_ids=t.seat_ids,o.show_id=t.play_id,o.order_type=t.order_type,o.companion_info=t.companion_info;var i={};if(i.goods_amount=t.goods_amount,i.cinema_goods_name=t.cinema_goods_name,i.goods_data=t.goods_data,i.total_goods_num=t.total_goods_num,"1"==t.show_type&&(-1!=t.movie_img_url.indexOf("?")?o.movie_img_url=t.movie_img_url.substring(0,t.movie_img_url.indexOf("?")):o.movie_img_url=t.movie_img_url),console.log("-----------------------"),"3"==t.order_status)return(n={}).seat_ids=t.seat_ids,n.order_type="2",n.order_info=o,n.goods=i,n.show_id=t.play_id,"3"==t.show_type?void wx.navigateTo({url:"/pages/find/findCouponPackageOrderDetail/orderCouponPackageDetail?order_num="+t.order_num+"&fromFlag=order_unfinished_coupon_package"}):void a.unfinished_order(t.order_num).then(function(a){if(1==a.data.status){var e=a.data.data;n.server_time=e.server_time,n.lock_ttl=e.lock_ttl,wx.navigateTo({url:"/pages/home/confirmOrder/confirmOrder?orderComfimEntity="+getApp().encodeDataAndJsonStringify(n)})}});var n={};n.seat_ids=t.seat_ids,n.order_type="3",n.order_info=o,n.show_id=t.play_id,n.goods=i,"3"==t.show_type?wx.navigateTo({url:"/pages/find/findCouponPackageOrderDetail/orderCouponPackageDetail?order_num="+t.order_num+"&fromFlag=order_list"}):"1"==t.show_type?wx.navigateTo({url:"/pages/home/orderDetial/orderDetial?orderComfimEntity="+getApp().encodeDataAndJsonStringify(n)}):wx.navigateTo({url:"/pages/find/findOrderDetail/findOrderDetail?order_num="+o.order_num+"&flag=3"})}},progressClick:function(a){var e=a.target.dataset.bean,t=getApp().encodeDataAndJsonStringify(e);wx.navigateTo({url:"/pages/mime/orderProgress/progress?bean="+t})},infoClick:function(a){a.target.dataset.bean},showInput:function(){this.setData({inputShowed:!0})},hideInput:function(){this.setData({inputVal:"",inputShowed:!1})},clearInput:function(){this.setData({inputVal:"",searchResult:[],isSearch:!1})},inputTyping:function(a){this.setData({inputVal:a.detail.value});for(var e=this.data.orderDatas.length,t=[],o=!1,i=0;i<e;i++){var n=this.data.orderDatas[i];if(n.show_type&&"1"==n.show_type)n.movie_name&&n.movie_name.indexOf(this.data.inputVal)>=0&&(t.push(n),o=!0);else if(n.goods_detail)for(var s=0;s<n.goods_detail.length;s++){var r=n.goods_detail[s];r.name&&r.name.indexOf(this.data.inputVal)>=0&&(t.push(n),o=!0)}}o?this.setData({searchResult:t,isSearch:!0}):getApp().showModalApp("对不起，没有搜到相关信息")},onHide:function(){this.data.isClicked=!1},onUnload:function(){this.data.isClicked=!1},onReachBottom:function(a){if(!this.data.isSearch&&!this.data.isFinished){console.log("-------------底部加载更多---------------------");var e=this.data.page,t=this.data.index,o=this.data.orderDatas,i=this.data.orders,n=o.length,s=i.length;if(console.log("   index ="+t+" page = "+e),console.log("showSize = "+n+" all size = "+s),t<e){t+=1;var r=i.slice(n,n+this.data.pageCount);o=o.concat(r),this.setData({orderDatas:o}),this.data.index=t}}}}); 
 			}); 	require("minePages/pages/orderLists/orderLists.js");
 		__wxRoute = 'minePages/pages/BindOffLineCoupon/BindOffLineCoupon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/BindOffLineCoupon/BindOffLineCoupon.js';	define("minePages/pages/BindOffLineCoupon/BindOffLineCoupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../config/httpHtlper.js");Page({data:{cinemaName:"",inputVal:"",cinemaInfo:{}},onLoad:function(a){this.data.cinemaInfo=getApp().getCinema(),this.setData({cinemaInfo:this.data.cinemaInfo})},onShow:function(){},goChooseCinema:function(){getApp().globalData.mainNeedRefush=!1,wx.navigateTo({url:"/pages/home/cinemaList/cinemaList?type=bindOfflineCoupon"})},openClick:function(){var t=this;if(this.data.inputVal){var n=this.data.inputVal.trim();n=n.replace(/[\r\n\t]/g,""),a.bindOfflineCoupon(n,this.data.cinemaInfo.id,"2").then(function(a){console.log(a);var n=t;if(1==a.data.status){var e=a.data.data,i=e.failedList;if("0"==e.success)return void wx.showModal({title:"",content:e.message,confirmText:"知道了",confirmColor:"#ff9500",showCancel:!1,success:function(a){n.setData({inputVal:i})}});getApp().globalData.couponNeedRefush=!0;var o="";"2"===e.channel&&(o="添加成功"),wx.showModal({title:o,content:e.message,confirmText:"继续添加",confirmColor:"#ff9500",cancelText:"返回",success:function(a){a.cancel?wx.navigateBack():n.setData({inputVal:i})}})}else console.log(a.data.msg)})}else wx.showToast({icon:"none",title:"请输入优惠券码"})},input:function(a){var t=a.detail.value;t?(console.log("value = "+t.trim()),this.setData({inputVal:t.trim()})):this.setData({inputVal:""})},clearInput:function(){this.setData({inputVal:""})},scanQRcode:function(){var a=this;wx.scanCode({onlyFromCamera:!0,success:function(t){var n=t.result;a.data.inputVal=n,a.setData({inputVal:n}),a.openClick()},fail:function(a){console.log("fail",a)}})}}); 
 			}); 	require("minePages/pages/BindOffLineCoupon/BindOffLineCoupon.js");
 		__wxRoute = 'minePages/pages/coupon/coupon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/coupon/coupon.js';	define("minePages/pages/coupon/coupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./../../../util/strUtil.js"),e=require("../../../config/httpHtlper.js"),a=getApp().urlService,o=require("./../../../templates/home/couponDetail/couponDetail.js");Page({data:{choseType:"nouse",sliderLeft:"0%",nouseDic:{nouseArr:[],page:1,totalNum:0},diduseDic:{diduseArr:[],page:1,totalNum:0},updateDic:{updateArr:[],page:1,totalNum:0},currentShowArr:[]},onLoad:function(){wx.hideShareMenu(),o.setDelegate(this),this.setScrollHeight(),this.startDownLoad("4","1")},onShow:function(){1==getApp().globalData.couponNeedRefush&&(getApp().globalData.couponNeedRefush=!1,this.startDownLoad("4","1"),this.data.nouseDic={nouseArr:[],page:1,totalNum:0},this.data.diduseDic={diduseArr:[],page:1,totalNum:0},this.data.updateDic={updateArr:[],page:1,totalNum:0},this.data.currentShowArr=[],this.setData({currentShowArr:this.data.nouseDic.nouseArr,nouseDic:this.data.nouseDic,updateDic:this.data.updateDic,diduseDic:this.data.diduseDic,choseType:"nouse",sliderLeft:"0%"}))},onPullDownRefresh:function(){},startDownLoad:function(t,e){var o=this,i=a.urls.couponListMine,s=a.urlParameter({page:e,status:t});a.wxRequest.getRequest(i,s).then(function(e){console.log(e),o.decodeRes(e.data,t)}).finally(function(t){wx.stopPullDownRefresh()})},loadMoreCoupons:function(){switch(this.data.choseType){case"nouse":this.loadMore("1",this.data.nouseDic);break;case"diduse":this.loadMore("3",this.data.diduseDic);break;case"update":this.loadMore("2",this.data.updateDic)}},loadMore:function(t,e){if(e.page+=1,console.log(e.page,e.totalPage),e.page>e.totalPage)return e.page-=1,void wx.showToast({icon:"none",title:"没有更多了"});this.startDownLoad(t,e.page)},clickNouse:function(){console.log("点击了未使用"),console.log(this.data.diduseDic.diduseArr),this.setData({choseType:"nouse",sliderLeft:"0%",currentShowArr:this.data.nouseDic.nouseArr})},gotoBindCoupon:function(){console.log("123"),wx.navigateTo({url:"/minePages/pages/BindOffLineCoupon/BindOffLineCoupon"})},clickDiduse:function(){console.log("点击了已使用"),console.log(this.data.diduseDic.diduseArr),this.setData({choseType:"diduse",sliderLeft:"33.33%",currentShowArr:this.data.diduseDic.diduseArr})},clickUpdate:function(){console.log("点击了已过期"),console.log(this.data.updateDic.updateArr),this.setData({choseType:"update",sliderLeft:"66.66%",currentShowArr:this.data.updateDic.updateArr})},setScrollHeight:function(){var t=this;wx.getSystemInfo({success:function(e){var a=750*e.windowHeight/e.windowWidth-206;t.setData({scrollHeight:a})}})},decodeRes:function(t,e){if("0"!==t.errcode)return!1;var a=t.data;switch(e){case"1":this.data.nouseDic.nouseArr=this.data.nouseDic.nouseArr.concat(this.decryCouponList(a.unused.lists,"nouse")),this.data.nouseDic.totalPage=a.unused.total_page,this.data.nouseDic.totalNum=a.unused.total_num,this.setData({currentShowArr:this.data.nouseDic.nouseArr});break;case"2":this.data.updateDic.updateArr=this.data.updateDic.updateArr.concat(this.decryCouponList(a.expired.lists,"update")),this.data.updateDic.totalPage=a.expired.total_page,this.data.updateDic.totalNum=a.expired.total_num,this.setData({currentShowArr:this.data.updateDic.updateArr});break;case"3":this.data.diduseDic.diduseArr=this.data.diduseDic.diduseArr.concat(this.decryCouponList(a.used.lists,"diduse")),this.data.diduseDic.totalPage=a.used.total_page,this.data.diduseDic.totalNum=a.used.total_num,this.setData({currentShowArr:this.data.diduseDic.diduseArr});break;case"4":console.log(t),this.data.nouseDic.nouseArr=this.data.nouseDic.nouseArr.concat(this.decryCouponList(a.unused.lists,"nouse")),this.data.diduseDic.diduseArr=this.data.diduseDic.diduseArr.concat(this.decryCouponList(a.used.lists,"diduse")),this.data.updateDic.updateArr=this.data.updateDic.updateArr.concat(this.decryCouponList(a.expired.lists,"update")),this.data.nouseDic.totalPage=a.unused.total_page,this.data.updateDic.totalPage=a.expired.total_page,this.data.diduseDic.totalPage=a.used.total_page,this.data.nouseDic.totalNum=a.unused.total_num,this.data.updateDic.totalNum=a.expired.total_num,this.data.diduseDic.totalNum=a.used.total_num,this.setData({currentShowArr:this.data.nouseDic.nouseArr,nouseDic:this.data.nouseDic,updateDic:this.data.updateDic,diduseDic:this.data.diduseDic})}},decryCouponList:function(e,a){for(var o=0;o<e.length;o++){var i=e[o];i.isOpen=!1,i.coupon_status="1",i.showTime=i.validate_date_start+"-"+i.validate_date_end,i.endImage=i.category&&"1"!=i.category?"/images/newcoupon/duihuanquan_maipin_icon.png":"/images/newcoupon/duihuanquan_dianying_icon.png",i.nousecolor="",i.constant_price=t.priceFormat(i.constant_price),i.replace_price=t.priceFormat(i.replace_price),i.condition_price=t.priceFormat(i.condition_price),i.isNoUse=!0,i.tempCouponNum=t.addSpaceEveryFour(i.coupon_num),i.tempCategoryName="电影券","2"==i.category?i.tempCategoryName="卖品券":"3"==i.category&&(i.tempCategoryName="通用券"),"1"==i.coupon_type?(i.showPrice=i.constant_price,i.tip="兑换券",i.image="/images/newcoupon/duihuan_bg.png"):"2"==i.coupon_type&&(i.showPrice=i.replace_price,i.image="/images/newcoupon/daijin_bg.png",i.condition_price>0?i.tip="满"+i.condition_price+"可用":i.tip="立减"),"2"==i.channel||"3"==i.channel?(i.image="/images/newcoupon/quan_xianxia_bg.png","3"==i.channel?i.tempCouponNum=i.coupon_num:i.tempCouponNum=t.addSpaceEveryFour(i.coupon_num)):"4"==i.channel&&(i.image="/images/newcoupon/business_coupon_bg.png",i.showPrice=t.priceFormat(i.coupon_show_price),i.tempCouponNum=i.coupon_num),i.status&&"ok"!=i.status&&(i.is_new="0",i.will_be_expire_coupon_notice=i.status_desc,i.isNoUse=!1,i.image="2"==i.coupon_type?"/images/newcoupon/daijin_shixiao_bg.png":"/images/newcoupon/duihuan_shixiao_bg.png",i.nousecolor="middelView-nousecolor","4"==i.channel&&(i.image="/images/newcoupon/business_coupon_shixiao_bg.png"),i.coupon_status="0"),"diduse"!=a&&"update"!=a||(i.isNoUse=!1,i.image="2"==i.coupon_type?"/images/newcoupon/daijin_shixiao_bg.png":"/images/newcoupon/duihuan_shixiao_bg.png","4"==i.channel&&(i.image="/images/newcoupon/business_coupon_shixiao_bg.png"),i.iconImage="diduse"==a?"/images/coupon/coupon_diduse.png":"/images/coupon/coupon_outtime.png",i.nousecolor="middelView-nousecolor",i.coupon_status="0")}return e},clickCoupon:function(t){var e=t.currentTarget.dataset.index,a=this.data.currentShowArr[e];if(a&&"ok"!=a.status)getApp().showModalAppWithTitle("请等待工作人员与您联系","当前券已禁用");else{var i=a.share_activity_id;this.data.item=a,"0"==a.share_time&&(a.share_time="1"),"1"==a.is_share&&"1"==a.coupon_status?this.getShareObje(i):(this.setData({item:a}),o.showDialog()),this.setData({currentShowArr:this.data.currentShowArr})}},clickCouponDetail:function(t){console.log("event = ",t);var e=t.currentTarget.dataset.index,a=this.data.currentShowArr[e];this.setData({item:a}),o.showDialog()},dismissDialog:function(){o.hiddenDialog()},move:function(){},onShareAppMessage:function(t){return console.log("==========="),console.log(this.data.shareObj),this.data.shareObj},getShareObje:function(t){var a=this;e.couponShare(t,"").then(function(t){console.log(t),console.log("url ="+t.data.data.url);var e=encodeURIComponent(t.data.data.url),i=t.data.data.title,s=(t.data.data.contents,t.data.data.image_url);"1"==t.data.status&&(a.data.shareObj={title:i,imageUrl:s,path:"/pages/find/promotionDetial/promotionDetial?promotion_url="+e+"&share="+getApp().encodeDataAndJsonStringify(t.data.data),desc:""},a.setData({item:a.data.item}),o.showDialog())})}}); 
 			}); 	require("minePages/pages/coupon/coupon.js");
 		__wxRoute = 'minePages/pages/user/info/userInfo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/user/info/userInfo.js';	define("minePages/pages/user/info/userInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./../../../../config/httpHtlper.js"),t=(require("./../../../../config/appStorage.js"),require("./../../../../pages/find/findHome/findAllSelectGoodsCart.js").allSelectGoodsCart,require("./../../../../templates/user/birthday/birthday.js"));Page({data:{userInfo:{},choseCity:null,isLeap:!1,months:[],days:[],value:[0,0],month:0,isHobby:!0,tempUserInfo:{},age:"",sex:"3",birthday:"",city_name:"",city_id:""},onLoad:function(e){t.setDelegate(this),this.getUserInfo()},onShow:function(){if(console.log("---onshow--isUserInfo-"+getApp().globalData.isUserInfo),this.data.choseCity){console.log("---onshow 选择了城市---");var e=this.data.userInfo;this.data.choseCity.name&&(e.city_name=this.data.choseCity.name,e.city_id=this.data.choseCity.id),this.updateUserInfo()}getApp().globalData.isUserInfo?this.getUserInfo():(console.log("isHobby ="+this.data.isHobby),this.data.isHobby||this.updateUserInfo())},headClick:function(){console.log("headClick");var e=this;wx.showActionSheet({itemList:["拍照","从相册选择"],success:function(t){console.log(t),0==t.tapIndex?(console.log("拍照"),wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["camera"],success:function(t){console.log(t);var a=t.tempFilePaths[0];t.tempFiles[0];console.log("tempFilePaths = "+a),e.uploadFileMethod(a)}})):1==t.tapIndex&&(console.log("从相册选择"),wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log(t);var a=t.tempFilePaths;console.log("tempFilePaths = "+a);var o=a[0];e.uploadFileMethod(o)}}))},fail:function(e){console.log(e.errMsg)}})},uploadFileMethod:function(t){var a=this,o=e.getHeadUrl();console.log("url = "+o[0]),console.log(o[1]),wx.uploadFile({url:o[0],filePath:t,name:"file",formData:o[1],success:function(e){console.log("成功");var t=getApp().decodeDataAndJsonParse(e.data);1==t.status?(wx.showToast({title:"头像上传成功",icon:"none"}),a.getUserInfo()):1e4==t.errcode?wx.reLaunch({url:"/pages/login/tending/tending?tend_message="+t.data.date_time}):t.msg&&getApp().showModalApp(t.msg)},fail:function(e){}})},nickClick:function(){console.log("nickClick");var e=this;wx.navigateTo({url:"/minePages/pages/user/nick/nickName?nick="+e.data.userInfo.nickname})},pwdClick:function(){console.log("pwdClick");wx.navigateTo({url:"/minePages/pages/user/pwd/modifyPwd"})},mobileClick:function(){wx.navigateTo({url:"/minePages/pages/user/phone/bindPhone"})},sexClick:function(){var e=this;wx.showActionSheet({itemList:["男","女"],success:function(t){console.log(t),0==t.tapIndex?(console.log("男"),e.setValue(0,"男")):1==t.tapIndex&&(console.log("女"),e.setValue(0,"女"))},fail:function(e){console.log(e.errMsg)}})},ageClick:function(){var e=this,t=["18岁以下","18-25岁","25-35岁","35-50岁","50岁以上"],a=this.data.userInfo.age_range;a&&a.length>0&&(t=a),wx.showActionSheet({itemList:t,success:function(a){console.log(a);var o=t[a.tapIndex];console.log("value = "+o),e.setValue(2,o)},fail:function(e){console.log(e.errMsg)}})},cityClick:function(){wx.navigateTo({url:"/pages/home/cityList/cityList?needback="+!0})},lableClick:function(){var e=getApp().encodeDataAndJsonStringify(this.data.userInfo);wx.navigateTo({url:"/minePages/pages/user/movieLable/lable?bean="+e})},dateClick:function(){""==this.data.userInfo.birthday?t.showDialog():wx.showToast({icon:"none",title:"生日编辑后不可修改~"})},dismissDialog:function(){t.hiddenDialog()},dialogCancelClick:function(){this.dismissDialog()},dialogOkClick:function(){this.dismissDialog();var e=this;getApp().showModalBaseCallBack("生日填写之后不可修改哦～","确定",!0,function(t){t.confirm&&e.setBirthday()})},setBirthday:function(){var e=this.data.value[0],t=this.data.value[1],a=this.data.months[e]+"月"+this.data.days[t]+"日";this.setValue(1,a)},bindChange:function(e){console.log(e),this.data.value=e.detail.value;var t=this.data.value[0];console.log("cur month = "+this.data.month+" selected month = "+t),t!=this.data.month&&(console.log("更新days====="),this.setDays(t+1))},setValue:function(e,t){var a=this.data.userInfo;0==e?a.sex="男"==t?"1":"2":1==e?a.birthday=t:2==e?a.age=t:3==e&&(a.city=t),this.updateUserInfo()},isLeapYear:function(){var e=(new Date).getFullYear(),t=e%4==0&&(e%100!=0||e%400==0);return console.log("year = "+e+" isLeap = "+t),t},setDays:function(e){var t=30;1==e||3==e||5==e||7==e||8==e||10==e||12==e?t=31:2==e&&(t=this.data.isLeap?29:28);for(var a=[],o=1;o<=t;o++)a.push(o);console.log(a),this.setData({days:a,month:e-1})},getUserInfo:function(){var t=this,a=this;e.userInfo().then(function(e){if(console.log(e),1==e.data.status){e.data.data.user_data.session_id=getApp().globalData.session_id;var o=e.data.data.user_data,s=getApp().globalData.city;o.city_name||(o.city_name=s.name,o.city_id=s.id);var i=[];for(var n in o.movie_hobby)"1"==o.movie_hobby[n].selected&&i.push(o.movie_hobby[n].name);a.data.isHobby=!0,a.data.choseCity=null,o.lableStrs=i,getApp().setUserInfo(o);for(var l=t.isLeapYear(),c=[],r=[],d=1;d<=12;d++)c.push(d);for(var u=1;u<=31;u++)r.push(u);a.setData({isLeap:l,months:c,isHobby:!0,days:r,userInfo:o})}else"205"==e.data.errcode&&(getApp().clearUserInfo(),a.setData({userInfo:{}}))})},updateUserInfo:function(){var t=this,a=this.data.userInfo,o="";if(a.movie_hobby)for(var s in a.movie_hobby){var i=a.movie_hobby[s];"1"==i.selected&&(o+=i.id+",")}o.length>0&&(o=o.substring(0,o.length-1));var n="3";"1"!=a.sex&&"2"!=a.sex||(n=a.sex),e.update_user_info("2",a.nickname,a.birthday,a.city_name,a.city_id,o,a.age,n).then(function(e){1==e.data.status&&(getApp().setUserInfo(a),t.data.isHobby=!0,t.data.choseCity=null,t.setData({userInfo:a,isHobby:!0}))})}}); 
 			}); 	require("minePages/pages/user/info/userInfo.js");
 		__wxRoute = 'minePages/pages/user/nick/nickName';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/user/nick/nickName.js';	define("minePages/pages/user/nick/nickName.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./../../../../config/httpHtlper");require("./../../../../config/appStorage.js");Page({data:{newValue:""},onLoad:function(e){console.log(e.nick),this.setData({newValue:e.nick})},onUnload:function(){},onClick:function(){var t=this,a=getApp().getUserInfo();if(this.data.newValue){var n="";if(a.movie_hobby)for(var i in a.movie_hobby){var o=a.movie_hobby[i];"1"==o.selected&&(n+=o.id+",")}n.length>0&&(n=n.substring(0,n.length-1));var s="3";"1"!=a.sex&&"2"!=a.sex||(s=a.sex),e.update_user_info("2",this.data.newValue,a.birthday,a.city_name,a.city_id,n,a.age,s).then(function(e){if(1==e.data.status){wx.showToast({icon:"none",title:"修改成功"}),a.nickname=t.data.newValue,getApp().setUserInfo(a);var n=getCurrentPages();n[n.length-1-1].setData({userInfo:a}),getApp().globalData.isUserInfo=!0,wx.navigateBack()}})}else wx.showToast({icon:"none",title:"请输入您的昵称"})},input:function(e){var t=e.detail.value;this.setData({newValue:t})},clearInput:function(){this.setData({newValue:""})}}); 
 			}); 	require("minePages/pages/user/nick/nickName.js");
 		__wxRoute = 'minePages/pages/user/pwd/modifyPwd';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/user/pwd/modifyPwd.js';	define("minePages/pages/user/pwd/modifyPwd.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./../../../../config/httpHtlper.js"),e=require("./../../../../util/md5.js");require("./../../../../config/appStorage.js");Page({data:{oldPwd:"",newPwd:""},onLoad:function(t){},inputOldPwd:function(t){var e=t.detail.value;console.log("value = "+e),this.setData({oldPwd:e})},clearOldPwd:function(){this.setData({oldPwd:""})},inputNewPwd:function(t){var e=t.detail.value;console.log("value = "+e),this.setData({newPwd:e})},clearNewPwd:function(){this.setData({newPwd:""})},next:function(){if(this.data.oldPwd)if(this.data.newPwd)if(this.data.newPwd.length<6)wx.showToast({icon:"none",title:"密码少于6位"});else if(this.data.newPwd.length>20)wx.showToast({icon:"none",title:"密码大于20位"});else{var a=e.hex_md5(this.data.oldPwd),n=e.hex_md5(this.data.newPwd);t.change_pwd(a,n).then(function(t){if(1==t.data.status){var e=t.data.data.session_id;if(e){var a=getApp().getUserInfo();a&&(a.session_id=e,getApp().setUserInfo(a),wx.navigateBack())}else wx.showModal({confirmColor:"#ff9500",title:"",content:"密码修改成功，请重新登录",showCancel:!1,success:function(t){t.confirm&&wx.navigateTo({url:"/pages/login/wxLogin/wxLogin?formFlag=pwd"})}})}})}else wx.showToast({icon:"none",title:"请输入新密码"});else wx.showToast({icon:"none",title:"请输入旧密码"})}}); 
 			}); 	require("minePages/pages/user/pwd/modifyPwd.js");
 		__wxRoute = 'minePages/pages/user/phone/bindPhone';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/user/phone/bindPhone.js';	define("minePages/pages/user/phone/bindPhone.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=null,e=require("./../../../../config/httpHtlper.js");require("./../../../../config/appStorage.js");Page({data:{mobile:"",newPhone:"",code:"",time:"获取验证码",currentTime:60,disabled:!1,isShow:!1,newMobile:""},onLoad:function(t){var e=getApp().globalData.userInfo.mobile;console.log("phone = "+e),e?this.setData({isShow:!1,mobile:e}):this.setData({isShow:!0,mobile:""})},input:function(t){var e=t.detail.value;console.log("value = "+e),this.setData({newPhone:e})},clearInput:function(){this.setData({newPhone:""})},inputCode:function(t){var e=t.detail.value;console.log("value = "+e),e&&this.setData({code:e})},next:function(){var o=this,a="2",n=this.data.mobile;if(this.data.isShow){if(console.log("newPhone = "+this.data.newPhone),!this.data.newPhone)return void wx.showToast({icon:"none",title:"请输入手机号"});if(11!=this.data.newPhone.length)return void wx.showToast({icon:"none",title:"手机号有误"});if(!this.data.code)return void wx.showToast({icon:"none",title:"请输入验证码"});a="3",n=this.data.newPhone}this.data.code?e.set_phone(a,n,this.data.code).then(function(e){if(console.log(e),1==e.data.status)if(o.data.isShow){wx.showToast({icon:"none",title:"再次登录时请使用新绑定的手机号"});var a=getApp().getUserInfo();a.mobile=o.data.newPhone,getApp().setUserInfo(a),getApp().globalData.isUserInfo=!0,setTimeout(function(){wx.navigateBack()},1e3)}else clearInterval(t),o.setData({isShow:!0,code:"",time:"获取验证码",currentTime:60,disabled:!1})}):wx.showToast({icon:"none",title:"请输入验证码"})},getCode:function(t){if(!this.data.disabled){var o="",a="";if(this.data.isShow){if(!this.data.newPhone)return void wx.showToast({icon:"none",title:"请输入手机号"});o="5",a=this.data.newPhone}else o="4",a=this.data.mobile;var n=this;e.getSmsMessage(o,a,"").then(function(t){console.log(t),0==t.data.status||(wx.showToast({icon:"none",title:"验证码已发送"}),n.timeRun())}).then(function(t){})}},timeRun:function(){var e=this,o=e.data.currentTime;e.setData({time:o+"秒后重新发送",disabled:!0}),t=setInterval(function(){o--,e.setData({time:o+"秒后重新发送"}),o<=0&&(clearInterval(t),e.setData({time:"重新获取",currentTime:60,disabled:!1}))},1e3)}}); 
 			}); 	require("minePages/pages/user/phone/bindPhone.js");
 		__wxRoute = 'minePages/pages/user/logoutAccount/logoutAccount';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/user/logoutAccount/logoutAccount.js';	define("minePages/pages/user/logoutAccount/logoutAccount.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./../../../../config/httpHtlper.js"),e=require("./../../../../pages/find/findHome/findAllSelectGoodsCart.js").allSelectGoodsCart;Page({data:{requestData:{},getCodeBtnTitle:"获取验证码",tiemDownText:"",mobile:"",screatMobile:"",showPop:!1,validate_code:""},onLoad:function(t){var e=getApp().getUserInfo();this.data.mobile=e.mobile},onShow:function(){var e=this;t.unRegisterInfo().then(function(t){console.log(t),1==t.data.status&&(e.data.requestData=t.data.data,e.setData({requestData:e.data.requestData}))})},logoutAccountRegister:function(){if(this.data.requestData.cards.length>0)wx.navigateTo({url:"/minePages/pages/user/logoutUserCards/logoutUserCards"});else if(this.data.mobile&&this.data.mobile.length>0){var t=this.sub(this.data.mobile);this.setData({screatMobile:t,showPop:!0})}else{var e=getApp().globalData.appServicePhone;getApp().showModalCallBackTitle("请使用登录手机号拨打客服电话："+e+"告知客服人员即完成注销","拨打电话","知道了","注销账号",!0,function(t){t.confirm&&wx.makePhoneCall({phoneNumber:e})})}},sub:function(t){return t?(t+="").substring(0,3)+"****"+t.substring(t.length-4):""},codeLogOutSendBtnClick:function(t){this.data.tiemDownText&&this.data.tiemDownText.length>0||this.sendMessage()},sendMessage:function(){var e=this;t.unRegisterInfoMobileCode().then(function(t){"0"==t.data.errcode&&e.beginTimeDown()})},beginTimeDown:function(){var t=this,e=60;t.setData({tiemDownText:e+"s后重新获取"});var a=setInterval(function(){e-=1,t.setData({tiemDownText:e+"s后重新获取"}),0==e&&(clearInterval(a),t.data.getCodeBtnTitle="重新获取验证码",t.setData({tiemDownText:"",getCodeBtnTitle:t.data.getCodeBtnTitle}))},1e3)},inputCode:function(t){this.data.validate_code=t.detail.value},cancle:function(){this.setData({showPop:!1})},confirm:function(){var a=this;this.data.validate_code&&this.data.validate_code.length>0?t.unRegisterInfoLogOff(a.data.validate_code).then(function(t){"0"==t.data.errcode&&(getApp().clearUserInfo(),e.clearCart(),getApp().showModalBaseCallBack("您的账号已成功注销！","知道了",!1,function(){wx.switchTab({url:"/pages/home/cinema/cinema?fromFlag=logoutAccount"})}))}):wx.showToast({icon:"none",title:"请输入验证码"})},noLogoutAccount:function(){wx.navigateBack({})}}); 
 			}); 	require("minePages/pages/user/logoutAccount/logoutAccount.js");
 		__wxRoute = 'minePages/pages/user/movieLable/lable';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/user/movieLable/lable.js';	define("minePages/pages/user/movieLable/lable.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{userInfo:{},lables:[]},onLoad:function(e){var o=getApp().decodeDataAndJsonParse(e.bean);if(console.log("------------------"),console.log(o.movie_hobby),o.movie_hobby&&o.movie_hobby.length>0)for(var t in o.movie_hobby){var s=o.movie_hobby[t];this.setHobbyStyle(s)}this.setData({userInfo:o})},lableClick:function(e){console.log(e);var o=e.target.dataset.index;console.log("index = "+o);var t,s=this.data.userInfo.movie_hobby,a=s[o],l=0;if(s&&s.length>0)for(var n in s)"1"==s[n].selected&&(t=s[n],l+=1);t&&a&&1==l&&t.name==a.name?wx.showToast({icon:"none",title:"请至少选择一项喜好类型"}):(a.selected="0"==a.selected?"1":"0",this.setHobbyStyle(a),this.setData({userInfo:this.data.userInfo}))},setHobbyStyle:function(e){e.style="1"==e.selected?"is_selected":"","剧情"!=e.name&&"古装"!=e.name||(e.style="1"==e.selected?"color1_selected":"color1"),"喜剧"!=e.name&&"爱情"!=e.name&&"动画"!=e.name||(e.style="1"==e.selected?"color2_selected":"color2"),"悬疑"!=e.name&&"犯罪"!=e.name&&"惊悚"!=e.name||(e.style="1"==e.selected?"color3_selected":"color3"),"科幻"!=e.name&&"奇幻"!=e.name||(e.style="1"==e.selected?"color4_selected":"color4"),"动作"!=e.name&&"战争"!=e.name||(e.style="1"==e.selected?"color5_selected":"color5")},onUnload:function(){var e=getCurrentPages(),o=e[e.length-1-1];console.log(o);var t=this.data.userInfo.movie_hobby,s=[];for(var a in t)"1"==t[a].selected&&s.push(t[a].name);o.data.userInfo.movie_hobby=this.data.userInfo.movie_hobby;var l=!1;o.data.userInfo.lableStrs.toString()===s.toString()&&(console.log("数组是否相等================="),l=!0),o.data.userInfo.lableStrs=s,o.setData({isHobby:l,userInfo:o.data.userInfo})}}); 
 			}); 	require("minePages/pages/user/movieLable/lable.js");
 		__wxRoute = 'minePages/pages/user/logoutUserCards/logoutUserCards';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/user/logoutUserCards/logoutUserCards.js';	define("minePages/pages/user/logoutUserCards/logoutUserCards.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("./../../../../config/httpHtlper.js");Page({data:{cards:[],card_remind1:"需解绑名下所有会员卡再次申请注销",card_remind2:"请牢记上述会员卡卡号及密码"},onLoad:function(a){this.loadData()},onShow:function(){getApp().globalData.isUnRegisterDeleteCard&&(this.loadData(),getApp().globalData.isUnRegisterDeleteCard=!1)},loadData:function(){var t=this;a.unRegisterInfo().then(function(a){if(console.log(a),1==a.data.status){var d=a.data.data.cards,e=a.data.data.card_remind1,r=a.data.data.card_remind2;d&&d.length>0?t.setData({cards:d,card_remind1:e,card_remind2:r}):wx.navigateBack({})}})},onHide:function(){},gotoCardsClick:function(){wx.navigateTo({url:"/pages/card/cardlist/cardList"})}}); 
 			}); 	require("minePages/pages/user/logoutUserCards/logoutUserCards.js");
 		__wxRoute = 'minePages/pages/contactLists/contactLists';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/contactLists/contactLists.js';	define("minePages/pages/contactLists/contactLists.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../config/httpHtlper.js");Page({data:{isConfirm:!0,isContactChange:!1,selectedCount:0,seatCount:2,contacts:[],identityTypes:[]},onLoad:function(t){var e=this;console.log(t),this.data.isConfirm=!!t.isConfirm&&t.isConfirm,this.data.seatCount=t.seatCount?t.seatCount:0,this.data.selectedContacts=t.selectedContacts?getApp().decodeDataAndJsonParse(t.selectedContacts):[],console.log("selected contacts ",this.data.selectedContacts),this.data.selectedMap=new Map,this.data.selectedContacts&&this.data.selectedContacts.length>0&&(this.data.selectedContacts.forEach(function(t){e.data.selectedMap.set(t.companion_id,t.companion_id)}),console.log("map ",this.data.selectedMap)),this.getContactList()},onShow:function(){var t=this.data.isConfirm?"观影人信息":"常用观影人";wx.setNavigationBarTitle({title:t}),this.data.isContactChange&&this.getContactList()},getContactList:function(){var e=this;t.getContactList().then(function(t){if(console.log(t),e.data.isContactChange=!1,1==t.data.status){var a=t.data.data.companion_data;e.data.identityTypes=t.data.data.identity_list,a&&a.length>0&&a.forEach(function(t){t.src=e.data.isConfirm?"/images/common/wodehuiyuanka_icon_danxuan_weixuan.png":"/images/mime/icon_contact_edit.png",t.isSelected=!1;var a=t.mobile;t.tempMobile=a.substring(0,3)+"****"+a.substring(a.length-4);var n=t.identity,s=n&&n.length>0?n.length:0;s<=5?t.tempIdentity=n:s<=9&&s>5?t.tempIdentity=n.substring(0,2)+e.getPlaceHolder(s-4)+n.substring(n.length-2):s<15&&s>=10?t.tempIdentity=n.substring(0,3)+e.getPlaceHolder(s-7)+n.substring(n.length-4):s>15&&(t.tempIdentity=n.substring(0,4)+e.getPlaceHolder(s-7)+n.substring(n.length-3)),e.data.isConfirm&&e.data.selectedMap&&e.data.selectedMap.size>0&&(e.data.selectedCount=e.data.seatCount,e.data.selectedMap.has(t.companion_id)&&(t.isSelected=!0,t.src="/images/common/wodehuiyuanka_icon_danxuan_xuanzhong.png"))}),e.setData({contacts:a,isConfirm:e.data.isConfirm,selectedCount:e.data.selectedCount})}})},getPlaceHolder:function(t){for(var e="",a=0;a<t;a++)e+="*";return e},addContactClick:function(){console.log("--------");var t=getApp().encodeDataAndJsonStringify(this.data.identityTypes);wx.navigateTo({url:"/minePages/pages/user/contact/contact?identityTypes="+t})},editClick:function(t){console.log("editClick--------",t.target.dataset.index);var e=t.target.dataset.index,a=this.data.contacts[e],n=getApp().encodeDataAndJsonStringify(a),s=getApp().encodeDataAndJsonStringify(this.data.identityTypes);wx.navigateTo({url:"/minePages/pages/user/contact/contact?contact="+n+"&identityTypes="+s})},selectedClick:function(t){console.log("selectedClick--------",t.target.dataset.index);var e=t.currentTarget.dataset.index;console.log("index = ",e);var a=this.data.contacts[e],n=this.getSelectedCount();(n!=this.data.seatCount||a.isSelected)&&(a.isSelected?this.data.selectedMap.delete(a.companion_id):this.data.selectedMap.set(a.companion_id,a.companion_id),a.isSelected=!a.isSelected,a.src=a.isSelected?"/images/common/wodehuiyuanka_icon_danxuan_xuanzhong.png":"/images/common/wodehuiyuanka_icon_danxuan_weixuan.png",n=this.getSelectedCount(),this.setData({contacts:this.data.contacts,selectedCount:n,selectedContacts:this.data.selectedContacts}))},itemLongClick:function(t){console.log("--------itemLongClick------",t);var e=t.currentTarget.dataset.index;console.log("index = ",e);var a=this.data.contacts[e];if(!this.data.isConfirm){var n=this;getApp().showModalBaseCallBack("确定删除该观影人的实名信息？","确定",!0,function(t){t.confirm&&n.deleteContact(a.companion_id,e)})}},deleteContact:function(e,a){var n=this;t.deleteContact(e).then(function(t){console.log(t),1==t.data.status&&(n.data.contacts.splice(a,1),n.setData({contacts:n.data.contacts}))})},okClick:function(){if(console.log("------okClick-------"),this.data.selectedCount>0&&this.data.selectedCount<=this.data.seatCount){var t=[];this.data.contacts.forEach(function(e){e.isSelected&&t.push(e)});var e=getCurrentPages(),a=e[e.length-2];a.data.selectedContacts=t,a.setCertificationStatus(),a.setData({selectedContacts:t}),wx.navigateBack({})}},getSelectedCount:function(){var t=0,e=[];return this.data.contacts.forEach(function(a){a.isSelected&&(t+=1,e.push[a])}),this.data.selectedContacts=e,t}}); 
 			}); 	require("minePages/pages/contactLists/contactLists.js");
 		__wxRoute = 'minePages/pages/user/contact/contact';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'minePages/pages/user/contact/contact.js';	define("minePages/pages/user/contact/contact.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./../../../../config/httpHtlper.js");Page({data:{contact:{name:"",identity:"",identity_type:"1",mobile:"",id:"",identity_value:"身份证"},identityTypes:[],canSaveCount:0,canSave:!1},onLoad:function(t){if(t.contact){var a=getApp().decodeDataAndJsonParse(t.contact);wx.setNavigationBarTitle({title:"编辑观影人信息"}),a&&a.name.length>0&&(this.data.canSaveCount+=1),a&&a.mobile.length>0&&(this.data.canSaveCount+=1),a&&a.identity.length>0&&(this.data.canSaveCount+=1),this.data.contact=a}else wx.setNavigationBarTitle({title:"添加观影人信息"});var e=getApp().decodeDataAndJsonParse(t.identityTypes);this.data.identityTypes=e,this.setData({contact:this.data.contact,canSave:3==this.data.canSaveCount})},choseIdentityType:function(){for(var t=[],a=0;a<this.data.identityTypes.length;a++){var e=this.data.identityTypes[a];t.push(e.identity_value)}var n=this;wx.showActionSheet({itemList:t,success:function(a){var e=a.tapIndex;n.data.contact.identity_value=t[e],n.setData({contact:n.data.contact});var i=n.data.identityTypes[e];n.data.contact.identity_type=i.identity_type}})},saveData:function(){3==this.data.canSaveCount?this.verificatData()&&t.saveCompanion(this.data.contact.id,this.data.contact.name,this.data.contact.identity,this.data.contact.mobile,this.data.contact.identity_type).then(function(t){if(1==t.data.status){var a=getCurrentPages();a.length>=2&&(a[a.length-2].setData({isContactChange:!0}),wx.navigateBack({}))}}):getApp().showModalApp("请填写观影人信息！")},verificatData:function(){var t=this.data.contact;return!t.name||t.name.length<=0||!t.identity||t.identity.length<=0||!t.mobile||t.mobile.length<=0?(getApp().showModalApp("您填写的内容有误，请您重新填写！"),!1):!!/^1\d{10}$/.test(t.mobile)||(getApp().showModalApp("您填写的手机号有误，请您重新填写！"),!1)},realNameInput:function(t){var a=this.data.contact,e=t.detail.value;a.name.length<=0&&e.length>0?this.data.canSaveCount+=1:a.name.length>0&&e.length<=0&&(this.data.canSaveCount-=1),a.name=e,this.setData({canSave:3==this.data.canSaveCount})},idCardInput:function(t){var a=this.data.contact,e=t.detail.value;a.identity.length<=0&&e.length>0?this.data.canSaveCount+=1:a.identity.length>0&&e.length<=0&&(this.data.canSaveCount-=1),a.identity=e,a.tempIdentity=e,this.setData({canSave:3==this.data.canSaveCount})},mobileNumInput:function(t){var a=this.data.contact,e=t.detail.value;a.mobile.length<=0&&e.length>0?this.data.canSaveCount+=1:a.mobile.length>0&&e.length<=0&&(this.data.canSaveCount-=1),a.mobile=e,a.tempMobile=e,this.setData({canSave:3==this.data.canSaveCount})},focusInputMobile:function(t){console.log("focusInputMobile",t),this.data.contact.tempMobile="",this.setData({contact:this.data.contact})},focusInputIDCard:function(t){console.log(t),this.data.contact.tempIdentity="",this.setData({contact:this.data.contact})}}); 
 			}); 	require("minePages/pages/user/contact/contact.js");
 	