/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx6=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx6:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx6 || [];
function gz$gwx6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_1)return __WXML_GLOBAL__.ops_cached.$gwx6_1
__WXML_GLOBAL__.ops_cached.$gwx6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx6_1);return __WXML_GLOBAL__.ops_cached.$gwx6_1
}
function gz$gwx6_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_2)return __WXML_GLOBAL__.ops_cached.$gwx6_2
__WXML_GLOBAL__.ops_cached.$gwx6_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'business'])
Z([[7],[3,'cancelBusinessBind']])
Z([[2,'!'],[[7],[3,'cancelBusinessBind']]])
})(__WXML_GLOBAL__.ops_cached.$gwx6_2);return __WXML_GLOBAL__.ops_cached.$gwx6_2
}
function gz$gwx6_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_3)return __WXML_GLOBAL__.ops_cached.$gwx6_3
__WXML_GLOBAL__.ops_cached.$gwx6_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'edit'])
Z([3,'photo'])
Z([[2,'=='],[[6],[[7],[3,'photoList']],[3,'length']],[1,0]])
Z([[2,'&&'],[[2,'>='],[[6],[[7],[3,'photoList']],[3,'length']],[1,1]],[[2,'<'],[[6],[[7],[3,'photoList']],[3,'length']],[1,9]]])
Z([3,'_videoFun'])
Z([[7],[3,'pageFlag']])
Z([[7],[3,'videoList']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_3);return __WXML_GLOBAL__.ops_cached.$gwx6_3
}
function gz$gwx6_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_4)return __WXML_GLOBAL__.ops_cached.$gwx6_4
__WXML_GLOBAL__.ops_cached.$gwx6_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'?:'],[[6],[[7],[3,'switchModel']],[1,'show']],[1,'ss'],[1,'']])
Z([3,'card-con'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'tempType']],[1,'minimalist']],[[2,'!'],[[7],[3,'tempLoading']]]])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'currentModel',[[7],[3,'currentModel']]],[[8],'avaCon',[[7],[3,'avaCon']]]],[[8],'anonymous',[[7],[3,'anonymous']]]],[[8],'formData',[[7],[3,'formData']]]],[[8],'nameFocus',[[7],[3,'nameFocus']]]],[[8],'editType',[[7],[3,'editType']]]],[[8],'condition',[[7],[3,'condition']]]],[[8],'updateTimer',[[7],[3,'updateTimer']]]])
Z([3,'miniTemp'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'tempType']],[1,'common']],[[2,'!'],[[7],[3,'tempLoading']]]])
Z([[9],[[9],[[9],[[8],'switchModel',[[7],[3,'switchModel']]],[[8],'currentModel',[[7],[3,'currentModel']]]],[[8],'logoTip',[[7],[3,'logoTip']]]],[[8],'updateTimer',[[7],[3,'updateTimer']]]])
Z([3,'commonTemp'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'tempType']],[1,'paper']],[[2,'!'],[[7],[3,'tempLoading']]]])
Z([[9],[[8],'currentModel',[[7],[3,'currentModel']]],[[8],'updateTimer',[[7],[3,'updateTimer']]]])
Z([3,'paperTemp'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'tempType']],[1,'web']],[[2,'!'],[[7],[3,'tempLoading']]]])
Z(z[9])
Z([3,'webTemp'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'tempType']],[1,'webBussinessPhoto']],[[2,'!'],[[7],[3,'tempLoading']]]])
Z([[9],[[9],[[9],[[8],'currentModel',[[7],[3,'currentModel']]],[[8],'updateTimer',[[7],[3,'updateTimer']]]],[[8],'webBusinessPhtotoName',[[7],[3,'webBusinessPhtotoName']]]],[[8],'oldBusinessPhoto',[[7],[3,'oldBusinessPhoto']]]])
Z([3,'webBussinessPhotoTemp'])
Z([[7],[3,'tempLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_4);return __WXML_GLOBAL__.ops_cached.$gwx6_4
}
function gz$gwx6_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_5)return __WXML_GLOBAL__.ops_cached.$gwx6_5
__WXML_GLOBAL__.ops_cached.$gwx6_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'commonTemp'])
Z([3,'_switchModel'])
Z([3,'card heng'])
Z([3,'common'])
Z([[6],[[7],[3,'currentModel']],[3,'url']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[6],[[7],[3,'currentModel']],[3,'photo']],[1,'l']],[[6],[[7],[3,'switchModel']],[3,'show']]],[[7],[3,'logoTip']]],[[2,'!='],[[6],[[7],[3,'currentModel']],[3,'name']],[1,'10']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[6],[[7],[3,'currentModel']],[3,'photo']],[1,'l']],[[6],[[7],[3,'switchModel']],[3,'show']]],[[7],[3,'logoTip']]],[[2,'=='],[[6],[[7],[3,'currentModel']],[3,'name']],[1,'10']]])
})(__WXML_GLOBAL__.ops_cached.$gwx6_5);return __WXML_GLOBAL__.ops_cached.$gwx6_5
}
function gz$gwx6_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_6)return __WXML_GLOBAL__.ops_cached.$gwx6_6
__WXML_GLOBAL__.ops_cached.$gwx6_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'miniTemp'])
Z([3,'_switchModel'])
Z([3,'card heng'])
Z(z[0])
Z([[6],[[7],[3,'currentModel']],[3,'url']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_6);return __WXML_GLOBAL__.ops_cached.$gwx6_6
}
function gz$gwx6_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_7)return __WXML_GLOBAL__.ops_cached.$gwx6_7
__WXML_GLOBAL__.ops_cached.$gwx6_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'paperTemp'])
Z([3,'_switchModel'])
Z([a,[3,'card '],[[2,'?:'],[[2,'=='],[[6],[[6],[[7],[3,'currentModel']],[3,'data']],[3,'hengshu']],[1,'heng']],[1,'heng'],[1,'shu']]])
Z([3,'paper'])
Z([[6],[[6],[[7],[3,'currentModel']],[3,'data']],[3,'url']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_7);return __WXML_GLOBAL__.ops_cached.$gwx6_7
}
function gz$gwx6_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_8)return __WXML_GLOBAL__.ops_cached.$gwx6_8
__WXML_GLOBAL__.ops_cached.$gwx6_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'webTemp'])
Z([[6],[[7],[3,'currentModel']],[3,'url']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_8);return __WXML_GLOBAL__.ops_cached.$gwx6_8
}
function gz$gwx6_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_9)return __WXML_GLOBAL__.ops_cached.$gwx6_9
__WXML_GLOBAL__.ops_cached.$gwx6_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'webBussinessPhotoTemp'])
Z([3,'card heng relative'])
Z([3,'webBussinessPhoto'])
Z([[2,'||'],[[2,'||'],[[2,'!'],[[6],[[6],[[7],[3,'currentModel']],[3,'bpUrl']],[1,'name']]],[[2,'=='],[[6],[[6],[[7],[3,'currentModel']],[3,'bpUrl']],[1,'name']],[[7],[3,'webBusinessPhtotoName']]]],[[2,'=='],[[6],[[6],[[7],[3,'currentModel']],[3,'bpUrl']],[1,'name']],[[7],[3,'oldBusinessPhoto']]]])
Z([[6],[[7],[3,'currentModel']],[3,'url']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_9);return __WXML_GLOBAL__.ops_cached.$gwx6_9
}
function gz$gwx6_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_10)return __WXML_GLOBAL__.ops_cached.$gwx6_10
__WXML_GLOBAL__.ops_cached.$gwx6_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'show-con '])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'random',[[7],[3,'random']]],[[8],'modelList',[[7],[3,'modelList']]]],[[8],'offLineModel',[[7],[3,'offLineModel']]]],[[8],'mini',[[7],[3,'minimalistModel']]]],[[8],'common',[[7],[3,'commonModel']]]],[[8],'customPaper',[[7],[3,'customPaper']]]],[[8],'selectedName',[[7],[3,'selectedName']]]],[[8],'mark',[[7],[3,'mark']]]],[[8],'anonymous',[[7],[3,'anonymous']]]],[[8],'avaCon',[[7],[3,'avaCon']]]])
Z([3,'allMix'])
Z([3,'commit'])
Z([[6],[[7],[3,'pageShade']],[1,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_10);return __WXML_GLOBAL__.ops_cached.$gwx6_10
}
function gz$gwx6_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_11)return __WXML_GLOBAL__.ops_cached.$gwx6_11
__WXML_GLOBAL__.ops_cached.$gwx6_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'allMix'])
Z(z[0])
Z([[6],[[7],[3,'offLineModel']],[1,'name']])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'offLineModel']],[1,'type']],[1,'minimalist']],[1,'_miniClick'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'offLineModel']],[1,'type']],[1,'common']],[1,'_commonClick'],[1,'_paperClick']]])
Z([a,[3,'card-item  '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'offLineModel']],[1,'name']],[[7],[3,'selectedName']]],[1,'card-selected'],[1,'']]])
Z([[7],[3,'offLineModel']])
Z([[6],[[7],[3,'offLineModel']],[3,'name']])
Z([[2,'=='],[[6],[[7],[3,'offLineModel']],[1,'name']],[[7],[3,'selectedName']]])
Z([[6],[[6],[[7],[3,'customPaper']],[3,'data']],[3,'url']])
Z([3,'_paperClick'])
Z([a,z[4][1],[[2,'?:'],[[2,'=='],[[7],[3,'selectedName']],[1,'customPaper']],[1,'card-selected'],[1,'']]])
Z([[2,'=='],[[7],[3,'selectedName']],[1,'customPaper']])
Z([3,'model'])
Z([[7],[3,'modelList']])
Z([3,'type'])
Z([3,'idx'])
Z(z[12])
Z([[6],[[7],[3,'model']],[3,'nameList']])
Z(z[15])
Z([[2,'?:'],[[12],[[6],[[7],[3,'tools']],[3,'hasFindInCommon']],[[5],[[5],[[6],[[7],[3,'common']],[3,'data']]],[[7],[3,'model']]]],[1,'_commonClick'],[1,'_miniClick']])
Z([a,[3,'card-item '],[[2,'?:'],[[2,'=='],[[7],[3,'model']],[[7],[3,'selectedName']]],[1,'card-selected'],[1,'']]])
Z([[7],[3,'model']])
Z([[2,'?:'],[[12],[[6],[[7],[3,'tools']],[3,'hasFindInCommon']],[[5],[[5],[[6],[[7],[3,'common']],[3,'data']]],[[7],[3,'model']]]],[[6],[[12],[[6],[[7],[3,'tools']],[3,'selectModel']],[[5],[[5],[[6],[[7],[3,'common']],[3,'data']]],[[7],[3,'model']]]],[3,'name']],[[6],[[12],[[6],[[7],[3,'tools']],[3,'selectModel']],[[5],[[5],[[6],[[7],[3,'mini']],[3,'data']]],[[7],[3,'model']]]],[3,'name']]])
Z([[2,'=='],[[7],[3,'model']],[[7],[3,'selectedName']]])
})(__WXML_GLOBAL__.ops_cached.$gwx6_11);return __WXML_GLOBAL__.ops_cached.$gwx6_11
}
function gz$gwx6_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_12)return __WXML_GLOBAL__.ops_cached.$gwx6_12
__WXML_GLOBAL__.ops_cached.$gwx6_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[6],[[7],[3,'currentModel']],[3,'photo']],[3,'l']])
Z([[2,'=='],[[7],[3,'upldStatus']],[1,'add']])
Z([[2,'=='],[[7],[3,'upldStatus']],[1,'edit']])
Z([[6],[[6],[[7],[3,'currentModel']],[3,'photo']],[3,'b']])
Z(z[1])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx6_12);return __WXML_GLOBAL__.ops_cached.$gwx6_12
}
function gz$gwx6_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_13)return __WXML_GLOBAL__.ops_cached.$gwx6_13
__WXML_GLOBAL__.ops_cached.$gwx6_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[7],[3,'editType']],[1,'add']])
Z([[6],[[7],[3,'dropList']],[1,'necess']])
Z([3,'necess-con'])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'avaCon']],[3,'url']]],[[2,'=='],[[7],[3,'editType']],[1,'add']]])
Z([[2,'||'],[[6],[[7],[3,'avaCon']],[3,'url']],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'avaCon']],[3,'url']]],[[2,'=='],[[7],[3,'editType']],[1,'edit']]]])
Z([3,'_upldAra'])
Z([3,'messa-ava'])
Z([[6],[[7],[3,'avaCon']],[3,'name']])
Z([[2,'!'],[[6],[[7],[3,'avaCon']],[3,'name']]])
Z([[7],[3,'formData']])
Z([[7],[3,'item']])
Z([[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'name']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'nameFocus']]],[[2,'!'],[[6],[[7],[3,'item']],[1,2]]]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'company']],[[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'job']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'industry']])
Z([[6],[[7],[3,'matchData']],[3,'show']])
Z([3,'_selectCompany'])
Z([[7],[3,'matchData']])
Z([3,'intro'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'editType']],[1,'add']],[1,''],[1,'_dropFunc']])
Z([3,'drop-con'])
Z([3,'unnecess'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'tempType']],[1,'common']],[[2,'!='],[[7],[3,'editType']],[1,'add']]])
Z(z[0])
Z([[6],[[7],[3,'dropList']],[1,'unnecess']])
Z([3,'form-con'])
Z(z[9])
Z(z[10])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'name']],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'company']]],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'job']]],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'industry']]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[1,4]],[1,'show']],[1,1]]])
Z([3,'form-con-item'])
Z([[2,'&&'],[[7],[3,'configShow']],[[2,'!='],[[7],[3,'editType']],[1,'add']]])
Z([3,'input-radio'])
Z([[2,'||'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'custom']],[[6],[[7],[3,'itemConfig']],[[6],[[7],[3,'item']],[1,0]]]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'custom']],[[6],[[7],[3,'customConfig']],[[2,'+'],[[6],[[7],[3,'item']],[1,0]],[[7],[3,'index']]]]]])
Z([[2,'||'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'custom']],[[2,'!'],[[6],[[7],[3,'itemConfig']],[[6],[[7],[3,'item']],[1,0]]]]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'custom']],[[2,'!'],[[6],[[7],[3,'customConfig']],[[2,'+'],[[6],[[7],[3,'item']],[1,0]],[[7],[3,'index']]]]]]])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'addr1']],[[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'addr2']]],[[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'addr3']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[1,4]],[1,'icon']],[1,'add']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[1,4]],[1,'icon']],[1,'del']])
Z([[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'mophone1']])
Z([[7],[3,'phoneFast']])
Z(z[35])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'addr1']],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'addr2']]],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'addr3']]],[[2,'!='],[[6],[[7],[3,'item']],[1,0]],[1,'mophone1']]])
Z(z[35])
Z(z[36])
Z([[2,'>'],[[6],[[7],[3,'alterCon']],[3,'length']],[1,0]])
Z([[7],[3,'customShow']])
Z([3,'_customCancel'])
Z([3,'_customConfirm'])
})(__WXML_GLOBAL__.ops_cached.$gwx6_13);return __WXML_GLOBAL__.ops_cached.$gwx6_13
}
function gz$gwx6_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_14)return __WXML_GLOBAL__.ops_cached.$gwx6_14
__WXML_GLOBAL__.ops_cached.$gwx6_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'formData']])
Z([[7],[3,'item']])
Z([[2,'=='],[[6],[[7],[3,'item']],[1,0]],[1,'industry']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_14);return __WXML_GLOBAL__.ops_cached.$gwx6_14
}
function gz$gwx6_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_15)return __WXML_GLOBAL__.ops_cached.$gwx6_15
__WXML_GLOBAL__.ops_cached.$gwx6_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'textarea-con'])
Z([[7],[3,'areaShow']])
Z([[2,'&&'],[[7],[3,'introValue']],[[2,'!'],[[7],[3,'areaShow']]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'introValue']]],[[2,'!'],[[7],[3,'areaShow']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx6_15);return __WXML_GLOBAL__.ops_cached.$gwx6_15
}
function gz$gwx6_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_16)return __WXML_GLOBAL__.ops_cached.$gwx6_16
__WXML_GLOBAL__.ops_cached.$gwx6_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx6_16);return __WXML_GLOBAL__.ops_cached.$gwx6_16
}
function gz$gwx6_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_17)return __WXML_GLOBAL__.ops_cached.$gwx6_17
__WXML_GLOBAL__.ops_cached.$gwx6_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx6_17);return __WXML_GLOBAL__.ops_cached.$gwx6_17
}
function gz$gwx6_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_18)return __WXML_GLOBAL__.ops_cached.$gwx6_18
__WXML_GLOBAL__.ops_cached.$gwx6_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ss'])
Z([3,'new-guideCon'])
Z([3,'con'])
Z([3,'share'])
Z([3,'noshare'])
})(__WXML_GLOBAL__.ops_cached.$gwx6_18);return __WXML_GLOBAL__.ops_cached.$gwx6_18
}
function gz$gwx6_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_19)return __WXML_GLOBAL__.ops_cached.$gwx6_19
__WXML_GLOBAL__.ops_cached.$gwx6_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'videoList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx6_19);return __WXML_GLOBAL__.ops_cached.$gwx6_19
}
function gz$gwx6_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_20)return __WXML_GLOBAL__.ops_cached.$gwx6_20
__WXML_GLOBAL__.ops_cached.$gwx6_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'prePage'])
Z([[7],[3,'buildFinish']])
Z([[2,'?:'],[[7],[3,'isTop']],[1,'white'],[1,'black']])
Z([3,'topNavigation'])
Z([3,'center'])
Z([3,'false'])
Z([[2,'?:'],[[7],[3,'isTop']],[1,'#000'],[1,'#000']])
Z([a,[3,'rgba('],[[2,'?:'],[[7],[3,'isTop']],[1,'0,0,0,0'],[[2,'?:'],[[2,'=='],[[7],[3,'topTitle']],[1,'']],[1,'0,0,0,0'],[1,'236,237,239,1']]],[3,')']])
Z([[7],[3,'topTitle']])
Z([[7],[3,'topType']])
Z(z[0])
Z([3,'minimalismContainer'])
Z([[2,'?:'],[[6],[[7],[3,'switchModel']],[3,'show']],[1,'position:fixed;'],[1,';']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'pageFrom']],[1,'howEnter']],[[2,'!'],[[7],[3,'openGid']]]])
Z([[9],[[9],[[8],'systemInfo',[[7],[3,'systemInfo']]],[[8],'senderAvator',[[7],[3,'senderAvator']]]],[[8],'nickName',[[7],[3,'nickName']]]])
Z([3,'firstReturn'])
Z([[2,'?:'],[[7],[3,'getSettingMessage']],[1,'submit'],[1,'submitInfo']])
Z([3,'true'])
Z([[7],[3,'showSendGuide']])
Z([3,'toHome'])
Z([[7],[3,'nickName']])
Z([[7],[3,'senderAvator']])
Z([[2,'!'],[[7],[3,'isSaoma']]])
Z([[7],[3,'isSaoma']])
Z([1,false])
Z([3,'deleteImage'])
Z([3,'upldImage'])
Z([[7],[3,'bussinessCon']])
Z([[7],[3,'currentModel']])
Z([3,'add'])
Z([[7],[3,'logoCon']])
Z([[7],[3,'avaCon']])
Z([3,'addIndustry'])
Z([3,'avaUpld'])
Z([3,'svgCommonBlur'])
Z([3,'svgCommonDel'])
Z([3,'configClick'])
Z([3,'dropFunc'])
Z([3,'formRender'])
Z([3,'nameFocusFun'])
Z([3,'svgShuntFun'])
Z([3,'toAddr'])
Z([[7],[3,'condition']])
Z([[7],[3,'configShowNum']])
Z(z[29])
Z([[7],[3,'customShowConfig']])
Z([[7],[3,'dropList']])
Z(z[30])
Z([[7],[3,'formData']])
Z([[7],[3,'itemShowConfig']])
Z([[7],[3,'nameFocus']])
Z([[7],[3,'tempType']])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'pageOrigin']],[1,'ishowenter']],[[7],[3,'openGid']]],[[2,'=='],[[7],[3,'pageFrom']],[1,'stickCard']]])
Z([3,'intro'])
Z([[6],[[7],[3,'dropList']],[1,'intro']])
Z([3,'introFun'])
Z([[7],[3,'introTest']])
Z([[7],[3,'introValue']])
Z([[2,'!'],[[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'pageOrigin']],[1,'ishowenter']],[[7],[3,'openGid']]],[[2,'=='],[[7],[3,'pageFrom']],[1,'stickCard']]]])
Z(z[55])
Z(z[56])
Z(z[57])
Z(z[58])
Z([[6],[[7],[3,'dropList']],[1,'video']])
Z([3,'photoFun'])
Z([3,'previewPhoto'])
Z([3,'videoFun'])
Z(z[30])
Z([[7],[3,'photoList']])
Z([[7],[3,'videoList']])
Z([[7],[3,'getSettingMessage']])
Z([[2,'!'],[[7],[3,'getSettingMessage']]])
Z([[6],[[7],[3,'pageShade']],[1,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_20);return __WXML_GLOBAL__.ops_cached.$gwx6_20
}
function gz$gwx6_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_21)return __WXML_GLOBAL__.ops_cached.$gwx6_21
__WXML_GLOBAL__.ops_cached.$gwx6_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'fill-tip'])
Z([3,'minimalismContainer'])
Z([[2,'?:'],[[6],[[7],[3,'switchModel']],[3,'show']],[1,'position:fixed;'],[1,';']])
Z([[8],'systemInfo',[[7],[3,'systemInfo']]])
Z(z[0])
Z([[2,'?:'],[[7],[3,'getSettingMessage']],[1,'submit'],[1,'submitInfo']])
Z([3,'true'])
Z([[7],[3,'avaCon']])
Z([3,'addIndustry'])
Z([3,'avaUpld'])
Z([3,'svgCommonBlur'])
Z([3,'svgCommonDel'])
Z([3,'configClick'])
Z([3,'dropFunc'])
Z([3,'formRender'])
Z([3,'svgShuntFun'])
Z([3,'toAddr'])
Z([[7],[3,'condition']])
Z([[7],[3,'configShowNum']])
Z([[7],[3,'currentModel']])
Z([[7],[3,'customShowConfig']])
Z([[7],[3,'dropList']])
Z([3,'edit'])
Z([[7],[3,'formData']])
Z([[7],[3,'itemShowConfig']])
Z([[7],[3,'nameFocus']])
Z([3,'cardFormEdit'])
Z([[7],[3,'tempType']])
Z([[6],[[7],[3,'dropList']],[1,'intro']])
Z([3,'introFun'])
Z([[7],[3,'introTest']])
Z([[7],[3,'introValue']])
Z(z[26])
Z([[6],[[7],[3,'dropList']],[1,'video']])
Z([3,'photoFun'])
Z([3,'previewPhoto'])
Z([3,'videoFun'])
Z(z[22])
Z(z[26])
Z([[7],[3,'photoList']])
Z([[7],[3,'videoList']])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'temporaryDataFormData']],[3,'cardType']],[1,3]],[[7],[3,'companyData']]])
Z([[6],[[7],[3,'dropList']],[1,'bussiness']])
Z([3,'buildHomepage'])
Z([3,'cancelBusiness'])
Z([3,'editHomepage'])
Z([[7],[3,'companyData']])
Z([[6],[[7],[3,'switchModel']],[3,'show']])
Z(z[7])
Z([3,'modelChange'])
Z([3,'switchClose'])
Z([3,'upldPaper'])
Z([[7],[3,'commonModel']])
Z(z[22])
Z([[7],[3,'minimalistModel']])
Z([[7],[3,'paperData']])
Z([[7],[3,'selectModel']])
Z([[6],[[7],[3,'pageShade']],[1,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_21);return __WXML_GLOBAL__.ops_cached.$gwx6_21
}
function gz$gwx6_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_22)return __WXML_GLOBAL__.ops_cached.$gwx6_22
__WXML_GLOBAL__.ops_cached.$gwx6_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'systemInfo']],[1,'v7.0.0']])
Z([3,'backCompany'])
Z([3,'backRenmai'])
Z([3,'home'])
Z([3,'prePage'])
Z([3,'white'])
Z([3,'topNavigation'])
Z([3,'center'])
Z([3,'false'])
Z([3,'#000'])
Z([3,'#ECEDEF'])
Z([3,'名片详情'])
Z([[7],[3,'backFunc']])
Z([[7],[3,'showActionsheet']])
Z([3,'backgroundTap'])
Z([3,'cancel'])
Z([3,'itemTap'])
Z([[7],[3,'sheetList']])
Z(z[0])
Z([[6],[[7],[3,'oldTipShow']],[3,'show']])
Z([3,'changeCardTem'])
Z([[2,'?:'],[[7],[3,'getSettingMessage']],[1,'submit'],[1,'submitInfo']])
Z([3,'true'])
Z([[7],[3,'enterprisesData']])
Z([[7],[3,'optionsL']])
Z([[7],[3,'useNumb']])
Z([[7],[3,'showCardStyleDialog']])
Z([3,'openCardStyleTip'])
Z([[7],[3,'mainshowTopTip']])
Z([[8],'systemInfo',[[7],[3,'systemInfo']]])
Z([3,'fill-tip'])
Z([[6],[[7],[3,'cardUpld']],[3,'show']])
Z([3,'deleteImage'])
Z([3,'upldImage'])
Z([[7],[3,'bussinessCon']])
Z([[7],[3,'currentModel']])
Z([3,'edit'])
Z([3,'cardUpld'])
Z([[7],[3,'logoCon']])
Z([[2,'=='],[[6],[[7],[3,'singleData']],[3,'cardType']],[1,3]])
Z([[2,'?:'],[[6],[[7],[3,'switchModel']],[1,'show']],[1,'ss'],[1,'']])
Z([a,[3,'content '],[[2,'?:'],[[2,'=='],[1,3],[[6],[[7],[3,'singleData']],[3,'cardType']]],[1,'content-web'],[1,'']]])
Z([3,'toLookHomePage'])
Z([3,'tolookhomepages'])
Z([3,'touxiangGetFun'])
Z([[7],[3,'cardDetail']])
Z([[7],[3,'cardMark']])
Z([[7],[3,'freshNum']])
Z([[7],[3,'iconUrl']])
Z([[7],[3,'listCon']])
Z([[7],[3,'singleData']])
Z([3,'cardTemp'])
Z([[7],[3,'avaCon']])
Z([3,'avaUpld'])
Z([3,'formRender'])
Z([3,'switchModelFun'])
Z([[7],[3,'condition']])
Z(z[35])
Z(z[36])
Z([[7],[3,'formData']])
Z(z[38])
Z([[7],[3,'nameFocus']])
Z([[7],[3,'oldBusinessPhoto']])
Z([[7],[3,'oldTipShow']])
Z([[7],[3,'switchModel']])
Z([[7],[3,'tempLoading']])
Z([[7],[3,'tempType']])
Z([[7],[3,'webBusinessPhtotoName']])
Z([3,'formid'])
Z(z[22])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'singleData']],[[2,'=='],[1,'WebTemp'],[[6],[[6],[[7],[3,'singleData']],[3,'modelIndex']],[1,'type']]]],[[2,'!'],[[6],[[7],[3,'oldTipShow']],[3,'show']]]])
Z([3,'btn-list'])
Z([[6],[[6],[[7],[3,'singleData']],[3,'modelIndex']],[1,'isBussinessPhoto']])
Z([[6],[[7],[3,'singleData']],[3,'self']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'singleData']],[[2,'!='],[1,'WebTemp'],[[6],[[6],[[7],[3,'singleData']],[3,'modelIndex']],[1,'type']]]],[[2,'!'],[[6],[[7],[3,'oldTipShow']],[3,'show']]]])
Z(z[73])
Z([[6],[[7],[3,'switchModel']],[3,'show']])
Z(z[52])
Z([3,'modelChange'])
Z([3,'switchClose'])
Z([3,'upldPaper'])
Z([[7],[3,'commonModel']])
Z([[7],[3,'discardModel']])
Z(z[36])
Z([[7],[3,'minimalistModel']])
Z([[7],[3,'paperData']])
Z([[7],[3,'selectModel']])
Z(z[64])
Z(z[65])
Z(z[76])
Z([[6],[[7],[3,'pageShade']],[1,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_22);return __WXML_GLOBAL__.ops_cached.$gwx6_22
}
__WXML_GLOBAL__.ops_set.$gwx6=z;
__WXML_GLOBAL__.ops_init.$gwx6=true;
var nv_require=function(){var nnm={"p_./pages/mainPage/cardMain/_module/cardTempCon/mixCard.wxs":np_0,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/mainPage/cardMain/_module/cardTempCon/mixCard.wxs'] = nv_require("p_./pages/mainPage/cardMain/_module/cardTempCon/mixCard.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_selectModel = (function (nv_model,nv_name){var nv_selcetData = '';if (nv_model && nv_model.nv_length){for(var nv_i = 0;nv_i < nv_model.nv_length;nv_i++){if (nv_model[((nt_0=(nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_name == nv_name){nv_selcetData = nv_model[((nt_1=(nv_i),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))]}};return(nv_selcetData)}});var nv_hasFindInCommon = (function (nv_model,nv_name){if (nv_model && nv_model.nv_length){for(var nv_i = 0;nv_i < nv_model.nv_length;nv_i++){if (nv_model[((nt_2=(nv_i),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))].nv_name == nv_name){return(true)}};return(false)}});nv_module.nv_exports = ({nv_selectModel:nv_selectModel,nv_hasFindInCommon:nv_hasFindInCommon,});return nv_module.nv_exports;}

f_['./pages/mainPage/cardMain/_module/cardTempCon/wxmlTemplate/allMix.wxml']={};
f_['./pages/mainPage/cardMain/_module/cardTempCon/wxmlTemplate/allMix.wxml']['tools'] =f_['./pages/mainPage/cardMain/_module/cardTempCon/mixCard.wxs'] || nv_require("p_./pages/mainPage/cardMain/_module/cardTempCon/mixCard.wxs");
f_['./pages/mainPage/cardMain/_module/cardTempCon/wxmlTemplate/allMix.wxml']['tools']();

var x=['./pages/mainPage/cardMain/_module/addCustom/addCustom.wxml','./pages/mainPage/cardMain/_module/business/business.wxml','./pages/mainPage/cardMain/_module/camera/camera.wxml','./pages/mainPage/cardMain/_module/cardTemp/cardTemp.wxml','./wxmlTemplate/common.wxml','./wxmlTemplate/minimalist.wxml','./wxmlTemplate/paper.wxml','./wxmlTemplate/web.wxml','./wxmlTemplate/webBussinessPhotoTemp.wxml','./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/common.wxml','./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/minimalist.wxml','./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/paper.wxml','./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/web.wxml','./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/webBussinessPhotoTemp.wxml','./pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.wxml','./wxmlTemplate/allMix.wxml','./pages/mainPage/cardMain/_module/cardTempCon/wxmlTemplate/allMix.wxml','./pages/mainPage/cardMain/_module/cardUpld/cardUpld.wxml','./pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.wxml','./pages/mainPage/cardMain/_module/industry/industry.wxml','./pages/mainPage/cardMain/_module/intro/intro.wxml','./pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.wxml','./pages/mainPage/cardMain/_module/selectCompany/selectCompany.wxml','./pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.wxml','./pages/mainPage/cardMain/_module/video/video.wxml','./pages/mainPage/cardMain/cardFormBuild/cardFormBuild.wxml','../../../../temp/buildReturnView.wxml','./pages/mainPage/cardMain/cardFormEdit/cardFormEdit.wxml','./pages/mainPage/cardMain/cardTempEdit/cardTempEdit.wxml','../../../../temp/fillTip.wxml','../../../../temp/teamTip.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx6_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx6_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,1,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,2,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx6_3()
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var oH=_n('view')
_rz(z,oH,'class',1,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,2,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,3,e,s,gg)){oJ.wxVkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
_(hG,oH)
var lK=_mz(z,'component-video',['bindvideoFun',4,'pageFlag',1,'videoList',2],[],e,s,gg)
_(hG,lK)
_(r,hG)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx6_4()
var tM=e_[x[3]].i
_ai(tM,x[4],e_,x[3],3,2)
_ai(tM,x[5],e_,x[3],4,2)
_ai(tM,x[6],e_,x[3],5,2)
_ai(tM,x[7],e_,x[3],6,2)
_ai(tM,x[8],e_,x[3],7,2)
var eN=_mz(z,'view',['catch:touchmove',0,'class',1],[],e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,2,e,s,gg)){bO.wxVkey=1
var hU=_v()
_(bO,hU)
var oV=_oz(z,4,e,s,gg)
var cW=_gd(x[3],oV,e_,d_)
if(cW){
var oX=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[3],10,65)
}
var oP=_v()
_(eN,oP)
if(_oz(z,5,e,s,gg)){oP.wxVkey=1
var lY=_v()
_(oP,lY)
var aZ=_oz(z,7,e,s,gg)
var t1=_gd(x[3],aZ,e_,d_)
if(t1){
var e2=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[3],12,62)
}
var xQ=_v()
_(eN,xQ)
if(_oz(z,8,e,s,gg)){xQ.wxVkey=1
var b3=_v()
_(xQ,b3)
var o4=_oz(z,10,e,s,gg)
var x5=_gd(x[3],o4,e_,d_)
if(x5){
var o6=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[3],14,61)
}
var oR=_v()
_(eN,oR)
if(_oz(z,11,e,s,gg)){oR.wxVkey=1
var f7=_v()
_(oR,f7)
var c8=_oz(z,13,e,s,gg)
var h9=_gd(x[3],c8,e_,d_)
if(h9){
var o0=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[3],16,59)
}
var fS=_v()
_(eN,fS)
if(_oz(z,14,e,s,gg)){fS.wxVkey=1
var cAB=_v()
_(fS,cAB)
var oBB=_oz(z,16,e,s,gg)
var lCB=_gd(x[3],oBB,e_,d_)
if(lCB){
var aDB=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
cAB.wxXCkey=3
lCB(aDB,aDB,cAB,gg)
gg.f=cur_globalf
}
else _w(oBB,x[3],18,73)
}
var cT=_v()
_(eN,cT)
if(_oz(z,17,e,s,gg)){cT.wxVkey=1
var tEB=_n('component-loadingtip')
_(cT,tEB)
}
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
cT.wxXCkey=3
_(r,eN)
tM.pop()
tM.pop()
tM.pop()
tM.pop()
tM.pop()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[x[4],x[5],x[6],x[7],x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["commonTemp"]=function(e,s,r,gg){
var z=gz$gwx6_5()
var b=x[9]+':commonTemp'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/common.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catch:tap',1,'class',1,'data-c',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,6,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx6_5()
return r
}
e_[x[9]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
d_[x[10]]["miniTemp"]=function(e,s,r,gg){
var z=gz$gwx6_6()
var b=x[10]+':miniTemp'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/minimalist.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catch:tap',1,'class',1,'data-c',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx6_6()
return r
}
e_[x[10]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
d_[x[11]]["paperTemp"]=function(e,s,r,gg){
var z=gz$gwx6_7()
var b=x[11]+':paperTemp'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/paper.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['catch:tap',1,'class',1,'data-c',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx6_7()
return r
}
e_[x[11]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
d_[x[12]]["webTemp"]=function(e,s,r,gg){
var z=gz$gwx6_8()
var b=x[12]+':webTemp'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/web.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx6_8()
return r
}
e_[x[12]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
d_[x[13]]["webBussinessPhotoTemp"]=function(e,s,r,gg){
var z=gz$gwx6_9()
var b=x[13]+':webBussinessPhotoTemp'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mainPage/cardMain/_module/cardTemp/wxmlTemplate/webBussinessPhotoTemp.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['class',1,'data-c',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx6_9()
return r
}
e_[x[13]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx6_10()
var cLB=e_[x[14]].i
_ai(cLB,x[15],e_,x[14],3,2)
var oNB=_n('view')
_rz(z,oNB,'class',0,e,s,gg)
var cOB=_v()
_(oNB,cOB)
var oPB=_oz(z,2,e,s,gg)
var lQB=_gd(x[14],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[14],17,20)
var tSB=_n('slot')
_rz(z,tSB,'name',3,e,s,gg)
_(oNB,tSB)
_(r,oNB)
var hMB=_v()
_(r,hMB)
if(_oz(z,4,e,s,gg)){hMB.wxVkey=1
}
hMB.wxXCkey=1
cLB.pop()
return r
}
e_[x[14]]={f:m9,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["allMix"]=function(e,s,r,gg){
var z=gz$gwx6_11()
var b=x[16]+':allMix'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mainPage/cardMain/_module/cardTempCon/wxmlTemplate/allMix.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var fE=_mz(z,'view',['catch:tap',3,'class',1,'data-model',2,'data-name',3],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,7,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
_(xC,fE)
}
var oD=_v()
_(oB,oD)
if(_oz(z,8,e,s,gg)){oD.wxVkey=1
var hG=_mz(z,'view',['catch:tap',9,'class',1],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,11,e,s,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
_(oD,hG)
}
var cI=_v()
_(oB,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
var oP=function(oR,xQ,fS,gg){
var hU=_mz(z,'view',['catch:tap',19,'class',1,'data-model',2,'data-name',3],[],oR,xQ,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,23,oR,xQ,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
_(fS,hU)
return fS
}
bO.wxXCkey=2
_2z(z,17,oP,aL,lK,gg,bO,'model','idx','idx')
return tM
}
cI.wxXCkey=2
_2z(z,13,oJ,e,s,gg,cI,'model','index','type')
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx6_11()
return r
}
e_[x[16]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx6_12()
var oVB=_v()
_(r,oVB)
if(_oz(z,0,e,s,gg)){oVB.wxVkey=1
var oXB=_n('view')
var fYB=_v()
_(oXB,fYB)
if(_oz(z,1,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(oXB,cZB)
if(_oz(z,2,e,s,gg)){cZB.wxVkey=1
}
fYB.wxXCkey=1
cZB.wxXCkey=1
_(oVB,oXB)
}
var xWB=_v()
_(r,xWB)
if(_oz(z,3,e,s,gg)){xWB.wxVkey=1
var h1B=_n('view')
var o2B=_v()
_(h1B,o2B)
if(_oz(z,4,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,5,e,s,gg)){c3B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
_(xWB,h1B)
}
oVB.wxXCkey=1
xWB.wxXCkey=1
return r
}
e_[x[17]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx6_13()
var l5B=_v()
_(r,l5B)
if(_oz(z,0,e,s,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(r,a6B)
if(_oz(z,1,e,s,gg)){a6B.wxVkey=1
var b9B=_n('view')
_rz(z,b9B,'class',2,e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,3,e,s,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,4,e,s,gg)){xAC.wxVkey=1
var fCC=_mz(z,'view',['bindtap',5,'class',1],[],e,s,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,7,e,s,gg)){cDC.wxVkey=1
}
var hEC=_v()
_(fCC,hEC)
if(_oz(z,8,e,s,gg)){hEC.wxVkey=1
}
cDC.wxXCkey=1
hEC.wxXCkey=1
_(xAC,fCC)
}
var oFC=_v()
_(b9B,oFC)
var cGC=function(lIC,oHC,aJC,gg){
var eLC=_v()
_(aJC,eLC)
if(_oz(z,11,lIC,oHC,gg)){eLC.wxVkey=1
var xOC=_v()
_(eLC,xOC)
if(_oz(z,12,lIC,oHC,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
}
var bMC=_v()
_(aJC,bMC)
if(_oz(z,13,lIC,oHC,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(aJC,oNC)
if(_oz(z,14,lIC,oHC,gg)){oNC.wxVkey=1
}
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
return aJC
}
oFC.wxXCkey=2
_2z(z,9,cGC,e,s,gg,oFC,'item','index','{{item}}')
var oBC=_v()
_(b9B,oBC)
if(_oz(z,15,e,s,gg)){oBC.wxVkey=1
var oPC=_mz(z,'component-selectcompany',['bindselectCompany',16,'matchData',1],[],e,s,gg)
_(oBC,oPC)
}
o0B.wxXCkey=1
xAC.wxXCkey=1
oBC.wxXCkey=1
oBC.wxXCkey=3
_(a6B,b9B)
}
var fQC=_n('slot')
_rz(z,fQC,'name',18,e,s,gg)
_(r,fQC)
var cRC=_mz(z,'view',['catch:tap',19,'class',1,'data-type',2],[],e,s,gg)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,22,e,s,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(cRC,oTC)
if(_oz(z,23,e,s,gg)){oTC.wxVkey=1
}
hSC.wxXCkey=1
oTC.wxXCkey=1
_(r,cRC)
var t7B=_v()
_(r,t7B)
if(_oz(z,24,e,s,gg)){t7B.wxVkey=1
var cUC=_n('view')
_rz(z,cUC,'class',25,e,s,gg)
var lWC=_v()
_(cUC,lWC)
var aXC=function(eZC,tYC,b1C,gg){
var x3C=_v()
_(b1C,x3C)
if(_oz(z,28,eZC,tYC,gg)){x3C.wxVkey=1
var o4C=_n('view')
_rz(z,o4C,'class',29,eZC,tYC,gg)
var f5C=_v()
_(o4C,f5C)
if(_oz(z,30,eZC,tYC,gg)){f5C.wxVkey=1
var c9C=_n('view')
_rz(z,c9C,'class',31,eZC,tYC,gg)
var o0C=_v()
_(c9C,o0C)
if(_oz(z,32,eZC,tYC,gg)){o0C.wxVkey=1
}
var lAD=_v()
_(c9C,lAD)
if(_oz(z,33,eZC,tYC,gg)){lAD.wxVkey=1
}
o0C.wxXCkey=1
lAD.wxXCkey=1
_(f5C,c9C)
}
var c6C=_v()
_(o4C,c6C)
if(_oz(z,34,eZC,tYC,gg)){c6C.wxVkey=1
var aBD=_v()
_(c6C,aBD)
if(_oz(z,35,eZC,tYC,gg)){aBD.wxVkey=1
}
var tCD=_v()
_(c6C,tCD)
if(_oz(z,36,eZC,tYC,gg)){tCD.wxVkey=1
}
aBD.wxXCkey=1
tCD.wxXCkey=1
}
var h7C=_v()
_(o4C,h7C)
if(_oz(z,37,eZC,tYC,gg)){h7C.wxVkey=1
var eDD=_v()
_(h7C,eDD)
if(_oz(z,38,eZC,tYC,gg)){eDD.wxVkey=1
}
var bED=_v()
_(h7C,bED)
if(_oz(z,39,eZC,tYC,gg)){bED.wxVkey=1
}
eDD.wxXCkey=1
bED.wxXCkey=1
}
var o8C=_v()
_(o4C,o8C)
if(_oz(z,40,eZC,tYC,gg)){o8C.wxVkey=1
var oFD=_v()
_(o8C,oFD)
if(_oz(z,41,eZC,tYC,gg)){oFD.wxVkey=1
}
var xGD=_v()
_(o8C,xGD)
if(_oz(z,42,eZC,tYC,gg)){xGD.wxVkey=1
}
oFD.wxXCkey=1
xGD.wxXCkey=1
}
f5C.wxXCkey=1
c6C.wxXCkey=1
h7C.wxXCkey=1
o8C.wxXCkey=1
_(x3C,o4C)
}
x3C.wxXCkey=1
return b1C
}
lWC.wxXCkey=2
_2z(z,26,aXC,e,s,gg,lWC,'item','index','{{item}}')
var oVC=_v()
_(cUC,oVC)
if(_oz(z,43,e,s,gg)){oVC.wxVkey=1
}
oVC.wxXCkey=1
_(t7B,cUC)
}
var e8B=_v()
_(r,e8B)
if(_oz(z,44,e,s,gg)){e8B.wxVkey=1
var oHD=_mz(z,'component-addCustom',['bindcustomCancel',45,'bindcustomConfirm',1],[],e,s,gg)
_(e8B,oHD)
}
l5B.wxXCkey=1
a6B.wxXCkey=1
a6B.wxXCkey=3
t7B.wxXCkey=1
e8B.wxXCkey=1
e8B.wxXCkey=3
return r
}
e_[x[18]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx6_14()
var cJD=_v()
_(r,cJD)
var hKD=function(cMD,oLD,oND,gg){
var aPD=_v()
_(oND,aPD)
if(_oz(z,2,cMD,oLD,gg)){aPD.wxVkey=1
}
aPD.wxXCkey=1
return oND
}
cJD.wxXCkey=2
_2z(z,0,hKD,e,s,gg,cJD,'item','index','{{item}}')
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx6_15()
var eRD=_n('view')
_rz(z,eRD,'class',0,e,s,gg)
var bSD=_v()
_(eRD,bSD)
if(_oz(z,1,e,s,gg)){bSD.wxVkey=1
}
var oTD=_v()
_(eRD,oTD)
if(_oz(z,2,e,s,gg)){oTD.wxVkey=1
}
var xUD=_v()
_(eRD,xUD)
if(_oz(z,3,e,s,gg)){xUD.wxVkey=1
}
bSD.wxXCkey=1
oTD.wxXCkey=1
xUD.wxXCkey=1
_(r,eRD)
return r
}
e_[x[20]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx6_16()
return r
}
e_[x[21]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx6_17()
return r
}
e_[x[22]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx6_18()
var hYD=_mz(z,'view',['catchtouchmove',0,'class',1],[],e,s,gg)
var oZD=_n('view')
_rz(z,oZD,'class',2,e,s,gg)
var c1D=_n('slot')
_rz(z,c1D,'name',3,e,s,gg)
_(oZD,c1D)
var o2D=_n('slot')
_rz(z,o2D,'name',4,e,s,gg)
_(oZD,o2D)
_(hYD,oZD)
_(r,hYD)
return r
}
e_[x[23]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx6_19()
var a4D=_v()
_(r,a4D)
if(_oz(z,0,e,s,gg)){a4D.wxVkey=1
}
a4D.wxXCkey=1
return r
}
e_[x[24]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx6_20()
var e6D=e_[x[25]].i
var b7D=_v()
_(r,b7D)
if(_oz(z,0,e,s,gg)){b7D.wxVkey=1
var o0D=_mz(z,'component-topNavigation',['bindprePage',1,'buildFinish',1,'iconColor',2,'id',3,'position',4,'showText',5,'titleColor',6,'topBg',7,'topTitle',8,'topType',9],[],e,s,gg)
_(b7D,o0D)
}
var o8D=_v()
_(r,o8D)
if(_oz(z,11,e,s,gg)){o8D.wxVkey=1
}
_ai(e6D,x[26],e_,x[25],18,2)
var fAE=_mz(z,'view',['class',12,'style',1],[],e,s,gg)
var cBE=_v()
_(fAE,cBE)
if(_oz(z,14,e,s,gg)){cBE.wxVkey=1
var hCE=_v()
_(cBE,hCE)
var oDE=_oz(z,16,e,s,gg)
var cEE=_gd(x[25],oDE,e_,d_)
if(cEE){
var oFE=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
hCE.wxXCkey=3
cEE(oFE,oFE,hCE,gg)
gg.f=cur_globalf
}
else _w(oDE,x[25],20,15)
}
else{cBE.wxVkey=2
}
var lGE=_mz(z,'form',['bindsubmit',17,'reportSubmit',1],[],e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,19,e,s,gg)){aHE.wxVkey=1
var oNE=_mz(z,'component-succBuildModel',['bindtoHome',20,'nickName',1,'senderAvator',2],[],e,s,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,23,e,s,gg)){fOE.wxVkey=1
}
var cPE=_v()
_(oNE,cPE)
if(_oz(z,24,e,s,gg)){cPE.wxVkey=1
}
fOE.wxXCkey=1
cPE.wxXCkey=1
_(aHE,oNE)
}
var tIE=_v()
_(lGE,tIE)
if(_oz(z,25,e,s,gg)){tIE.wxVkey=1
var hQE=_mz(z,'component-cardUpld',['binddeleteImage',26,'bindupldImage',1,'bussinessCon',2,'currentModel',3,'editType',4,'logoCon',5],[],e,s,gg)
_(tIE,hQE)
}
var oRE=_mz(z,'component-homeToEditForm',['avaCon',32,'bindaddIndustry',1,'bindavaUpld',2,'bindcommonBlur',3,'bindcommonDel',4,'bindconfigClick',5,'binddropFunc',6,'bindformRender',7,'bindnameFocusFun',8,'bindsvgShunt',9,'bindtoAddr',10,'condition',11,'configShowNum',12,'currentModel',13,'customConfig',14,'dropList',15,'editType',16,'formData',17,'itemConfig',18,'nameFocus',19,'tempType',20],[],e,s,gg)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,53,e,s,gg)){cSE.wxVkey=1
var oTE=_n('view')
_rz(z,oTE,'slot',54,e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,55,e,s,gg)){lUE.wxVkey=1
var aVE=_mz(z,'component-intro',['bindintroFun',56,'introTest',1,'introValue',2],[],e,s,gg)
_(lUE,aVE)
}
lUE.wxXCkey=1
lUE.wxXCkey=3
_(cSE,oTE)
}
cSE.wxXCkey=1
cSE.wxXCkey=3
_(lGE,oRE)
var eJE=_v()
_(lGE,eJE)
if(_oz(z,59,e,s,gg)){eJE.wxVkey=1
var tWE=_v()
_(eJE,tWE)
if(_oz(z,60,e,s,gg)){tWE.wxVkey=1
var eXE=_mz(z,'component-intro',['bindintroFun',61,'introTest',1,'introValue',2],[],e,s,gg)
_(tWE,eXE)
}
tWE.wxXCkey=1
tWE.wxXCkey=3
}
var bKE=_v()
_(lGE,bKE)
if(_oz(z,64,e,s,gg)){bKE.wxVkey=1
var bYE=_mz(z,'component-camera',['bindphotoFun',65,'bindpreviewPhoto',1,'bindvideoFun',2,'editType',3,'photoList',4,'videoList',5],[],e,s,gg)
_(bKE,bYE)
}
var oLE=_v()
_(lGE,oLE)
if(_oz(z,71,e,s,gg)){oLE.wxVkey=1
}
var xME=_v()
_(lGE,xME)
if(_oz(z,72,e,s,gg)){xME.wxVkey=1
}
aHE.wxXCkey=1
aHE.wxXCkey=3
tIE.wxXCkey=1
tIE.wxXCkey=3
eJE.wxXCkey=1
eJE.wxXCkey=3
bKE.wxXCkey=1
bKE.wxXCkey=3
oLE.wxXCkey=1
xME.wxXCkey=1
_(fAE,lGE)
cBE.wxXCkey=1
_(r,fAE)
var x9D=_v()
_(r,x9D)
if(_oz(z,73,e,s,gg)){x9D.wxVkey=1
}
b7D.wxXCkey=1
b7D.wxXCkey=3
o8D.wxXCkey=1
x9D.wxXCkey=1
e6D.pop()
return r
}
e_[x[25]]={f:m19,j:[],i:[],ti:[x[26]],ic:[]}
d_[x[27]]={}
d_[x[27]]["fill-tip"]=function(e,s,r,gg){
var z=gz$gwx6_21()
var b=x[27]+':fill-tip'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mainPage/cardMain/cardFormEdit/cardFormEdit.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx6_21()
var f3E=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var c4E=_v()
_(f3E,c4E)
var h5E=_oz(z,4,e,s,gg)
var o6E=_gd(x[27],h5E,e_,d_)
if(o6E){
var c7E=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
c4E.wxXCkey=3
o6E(c7E,c7E,c4E,gg)
gg.f=cur_globalf
}
else _w(h5E,x[27],9,16)
var o8E=_mz(z,'form',['bindsubmit',5,'reportSubmit',1],[],e,s,gg)
var eBF=_mz(z,'component-homeToEditForm',['avaCon',7,'bindaddIndustry',1,'bindavaUpld',2,'bindcommonBlur',3,'bindcommonDel',4,'bindconfigClick',5,'binddropFunc',6,'bindformRender',7,'bindsvgShunt',8,'bindtoAddr',9,'condition',10,'configShowNum',11,'currentModel',12,'customConfig',13,'dropList',14,'editType',15,'formData',16,'itemConfig',17,'nameFocus',18,'pageFlag',19,'tempType',20],[],e,s,gg)
_(o8E,eBF)
var l9E=_v()
_(o8E,l9E)
if(_oz(z,28,e,s,gg)){l9E.wxVkey=1
var bCF=_mz(z,'component-intro',['bindintroFun',29,'introTest',1,'introValue',2,'pageFlag',3],[],e,s,gg)
_(l9E,bCF)
}
var a0E=_v()
_(o8E,a0E)
if(_oz(z,33,e,s,gg)){a0E.wxVkey=1
var oDF=_mz(z,'component-camera',['bindphotoFun',34,'bindpreviewPhoto',1,'bindvideoFun',2,'editType',3,'pageFlag',4,'photoList',5,'videoList',6],[],e,s,gg)
_(a0E,oDF)
}
var tAF=_v()
_(o8E,tAF)
if(_oz(z,41,e,s,gg)){tAF.wxVkey=1
var xEF=_v()
_(tAF,xEF)
if(_oz(z,42,e,s,gg)){xEF.wxVkey=1
var oFF=_mz(z,'component-business',['bindbuildHomepage',43,'bindcancelBusiness',1,'bindeditHomepage',2,'companyData',3],[],e,s,gg)
_(xEF,oFF)
}
xEF.wxXCkey=1
xEF.wxXCkey=3
}
l9E.wxXCkey=1
l9E.wxXCkey=3
a0E.wxXCkey=1
a0E.wxXCkey=3
tAF.wxXCkey=1
tAF.wxXCkey=3
_(f3E,o8E)
_(r,f3E)
var x1E=_v()
_(r,x1E)
if(_oz(z,47,e,s,gg)){x1E.wxVkey=1
var fGF=_mz(z,'component-cardTempCon',['avaCon',48,'bindmodelChange',1,'bindswitchClose',2,'bindupldPaper',3,'commonModel',4,'editType',5,'minimalistModel',6,'paperData',7,'selectModel',8],[],e,s,gg)
_(x1E,fGF)
}
var o2E=_v()
_(r,o2E)
if(_oz(z,57,e,s,gg)){o2E.wxVkey=1
}
x1E.wxXCkey=1
x1E.wxXCkey=3
o2E.wxXCkey=1
return r
}
e_[x[27]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx6_22()
var hIF=e_[x[28]].i
_ai(hIF,x[29],e_,x[28],3,2)
_ai(hIF,x[30],e_,x[28],4,2)
var oJF=_v()
_(r,oJF)
if(_oz(z,0,e,s,gg)){oJF.wxVkey=1
var tOF=_mz(z,'component-topNavigation',['bindbackCompany',1,'bindbackRenmai',1,'bindhome',2,'bindprePage',3,'iconColor',4,'id',5,'position',6,'showText',7,'titleColor',8,'topBg',9,'topTitle',10,'topType',11],[],e,s,gg)
_(oJF,tOF)
}
var cKF=_v()
_(r,cKF)
if(_oz(z,13,e,s,gg)){cKF.wxVkey=1
var ePF=_mz(z,'mini-actionsheet',['bindbacktap',14,'bindcancel',1,'bindlistitem',2,'sheetList',3],[],e,s,gg)
_(cKF,ePF)
}
var oLF=_v()
_(r,oLF)
if(_oz(z,18,e,s,gg)){oLF.wxVkey=1
}
var lMF=_v()
_(r,lMF)
if(_oz(z,19,e,s,gg)){lMF.wxVkey=1
var bQF=_n('component-oldModelTip')
_rz(z,bQF,'bindchangeCardTem',20,e,s,gg)
_(lMF,bQF)
}
var oRF=_mz(z,'form',['bindsubmit',21,'reportSubmit',1],[],e,s,gg)
var cVF=_mz(z,'component-companyTip',['enterprisesData',23,'optionsL',1,'useNumb',2],[],e,s,gg)
_(oRF,cVF)
var xSF=_v()
_(oRF,xSF)
if(_oz(z,26,e,s,gg)){xSF.wxVkey=1
var hWF=_v()
_(xSF,hWF)
var oXF=_oz(z,27,e,s,gg)
var cYF=_gd(x[28],oXF,e_,d_)
if(cYF){
var oZF={}
var cur_globalf=gg.f
hWF.wxXCkey=3
cYF(oZF,oZF,hWF,gg)
gg.f=cur_globalf
}
else _w(oXF,x[28],35,15)
}
var l1F=_n('view')
var a2F=_v()
_(l1F,a2F)
if(_oz(z,28,e,s,gg)){a2F.wxVkey=1
var e4F=_v()
_(a2F,e4F)
var b5F=_oz(z,30,e,s,gg)
var o6F=_gd(x[28],b5F,e_,d_)
if(o6F){
var x7F=_1z(z,29,e,s,gg) || {}
var cur_globalf=gg.f
e4F.wxXCkey=3
o6F(x7F,x7F,e4F,gg)
gg.f=cur_globalf
}
else _w(b5F,x[28],39,43)
}
var t3F=_v()
_(l1F,t3F)
if(_oz(z,31,e,s,gg)){t3F.wxVkey=1
var o8F=_mz(z,'component-cardUpld',['binddeleteImage',32,'bindupldImage',1,'bussinessCon',2,'currentModel',3,'editType',4,'id',5,'logoCon',6],[],e,s,gg)
_(t3F,o8F)
}
a2F.wxXCkey=1
t3F.wxXCkey=1
t3F.wxXCkey=3
_(oRF,l1F)
var oTF=_v()
_(oRF,oTF)
if(_oz(z,39,e,s,gg)){oTF.wxVkey=1
}
var f9F=_mz(z,'view',['catch:touchmove',40,'class',1],[],e,s,gg)
var c0F=_mz(z,'component-newCardDetail',['bindtolookhomepage',42,'bindtolookhomepages',1,'bindtouxiangGet',2,'cardDetail',3,'cardMark',4,'freshNum',5,'iconUrl',6,'listCon',7,'userData',8],[],e,s,gg)
var hAG=_n('view')
_rz(z,hAG,'slot',51,e,s,gg)
var oBG=_mz(z,'component-cardTemp',['avaCon',52,'bindavaUpld',1,'bindformRender',2,'bindswitchModel',3,'condition',4,'currentModel',5,'editType',6,'formData',7,'logoCon',8,'nameFocus',9,'oldBusinessPhoto',10,'oldTipShow',11,'switchModel',12,'tempLoading',13,'tempType',14,'webBusinessPhtotoName',15],[],e,s,gg)
_(hAG,oBG)
_(c0F,hAG)
_(f9F,c0F)
_(oRF,f9F)
var cCG=_mz(z,'form',['bindsubmit',68,'reportSubmit',1],[],e,s,gg)
var oDG=_v()
_(cCG,oDG)
if(_oz(z,70,e,s,gg)){oDG.wxVkey=1
var aFG=_n('view')
_rz(z,aFG,'class',71,e,s,gg)
var tGG=_v()
_(aFG,tGG)
if(_oz(z,72,e,s,gg)){tGG.wxVkey=1
}
var eHG=_v()
_(aFG,eHG)
if(_oz(z,73,e,s,gg)){eHG.wxVkey=1
}
tGG.wxXCkey=1
eHG.wxXCkey=1
_(oDG,aFG)
}
var lEG=_v()
_(cCG,lEG)
if(_oz(z,74,e,s,gg)){lEG.wxVkey=1
var bIG=_v()
_(lEG,bIG)
if(_oz(z,75,e,s,gg)){bIG.wxVkey=1
}
bIG.wxXCkey=1
}
oDG.wxXCkey=1
lEG.wxXCkey=1
_(oRF,cCG)
var fUF=_v()
_(oRF,fUF)
if(_oz(z,76,e,s,gg)){fUF.wxVkey=1
var oJG=_mz(z,'component-cardTempCon',['avaCon',77,'bindmodelChange',1,'bindswitchClose',2,'bindupldPaper',3,'commonModel',4,'discardModel',5,'editType',6,'minimalistModel',7,'paperData',8,'selectModel',9,'switchModel',10,'tempLoading',11],[],e,s,gg)
var xKG=_v()
_(oJG,xKG)
if(_oz(z,89,e,s,gg)){xKG.wxVkey=1
}
xKG.wxXCkey=1
_(fUF,oJG)
}
xSF.wxXCkey=1
oTF.wxXCkey=1
fUF.wxXCkey=1
fUF.wxXCkey=3
_(r,oRF)
var aNF=_v()
_(r,aNF)
if(_oz(z,90,e,s,gg)){aNF.wxVkey=1
}
oJF.wxXCkey=1
oJF.wxXCkey=3
cKF.wxXCkey=1
cKF.wxXCkey=3
oLF.wxXCkey=1
lMF.wxXCkey=1
lMF.wxXCkey=3
aNF.wxXCkey=1
hIF.pop()
hIF.pop()
return r
}
e_[x[28]]={f:m21,j:[],i:[],ti:[x[29],x[30]],ic:[]}
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
	__wxAppCode__['pages/mainPage/cardMain/_module/addCustom/addCustom.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/addCustom/addCustom.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/addCustom/addCustom.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/addCustom/addCustom.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/addCustom/addCustom.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/business/business.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/business/business.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/business/business.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/business/business.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/business/business.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/camera/camera.json'] = {"component":true,"usingComponents":{"component-video":"../video/video","mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/camera/camera.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/camera/camera.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/camera/camera.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/camera/camera.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/cardTemp/cardTemp.json'] = {"component":true,"usingComponents":{"component-loadingtip":"../../../../../module/loadingTip/loadingTip","mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/cardTemp/cardTemp.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/cardTemp/cardTemp.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/cardTemp/cardTemp.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/cardTemp/cardTemp.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/cardUpld/cardUpld.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/cardUpld/cardUpld.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/cardUpld/cardUpld.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/cardUpld/cardUpld.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/cardUpld/cardUpld.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.json'] = {"component":true,"usingComponents":{"component-addCustom":"../addCustom/addCustom","component-selectcompany":"../selectCompany/selectCompany","mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/industry/industry.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/industry/industry.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/industry/industry.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/industry/industry.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/industry/industry.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/intro/intro.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/intro/intro.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/intro/intro.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/intro/intro.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/intro/intro.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/selectCompany/selectCompany.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/selectCompany/selectCompany.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/selectCompany/selectCompany.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/selectCompany/selectCompany.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/selectCompany/selectCompany.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/_module/video/video.json'] = {"component":true,"usingComponents":{"mini-icon":"../../../../../components/icon/icon","mini-button":"../../../../../components/button/button","mini-message":"../../../../../components/message/message","mini-popover":"../../../../../components/popover/popover","mini-actionsheet":"../../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../../components/navigation/navigation"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/_module/video/video.wxml'] = [$gwx6, './pages/mainPage/cardMain/_module/video/video.wxml'];else __wxAppCode__['pages/mainPage/cardMain/_module/video/video.wxml'] = $gwx6( './pages/mainPage/cardMain/_module/video/video.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/cardFormBuild/cardFormBuild.json'] = {"usingComponents":{"component-homeToEditForm":"../_module/homeToEditForm/homeToEditForm","component-cardUpld":"../_module/cardUpld/cardUpld","component-intro":"../_module/intro/intro","component-camera":"../_module/camera/camera","component-succBuildModel":"../_module/succBuildModel/succBuildModel","component-topNavigation":"../../../../module/topNavigation/topNavigation","mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"},"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"","navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/cardFormBuild/cardFormBuild.wxml'] = [$gwx6, './pages/mainPage/cardMain/cardFormBuild/cardFormBuild.wxml'];else __wxAppCode__['pages/mainPage/cardMain/cardFormBuild/cardFormBuild.wxml'] = $gwx6( './pages/mainPage/cardMain/cardFormBuild/cardFormBuild.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/cardFormEdit/cardFormEdit.json'] = {"usingComponents":{"component-cardTemp":"../_module/cardTemp/cardTemp","component-cardTempCon":"../_module/cardTempCon/cardTempCon","component-homeToEditForm":"../_module/homeToEditForm/homeToEditForm","component-cardUpld":"../_module/cardUpld/cardUpld","component-intro":"../_module/intro/intro","component-camera":"../_module/camera/camera","component-business":"../_module/business/business","mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"},"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"编辑名片信息"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/cardFormEdit/cardFormEdit.wxml'] = [$gwx6, './pages/mainPage/cardMain/cardFormEdit/cardFormEdit.wxml'];else __wxAppCode__['pages/mainPage/cardMain/cardFormEdit/cardFormEdit.wxml'] = $gwx6( './pages/mainPage/cardMain/cardFormEdit/cardFormEdit.wxml' );
		__wxAppCode__['pages/mainPage/cardMain/cardTempEdit/cardTempEdit.json'] = {"usingComponents":{"component-cardTemp":"../_module/cardTemp/cardTemp","component-cardTempCon":"../_module/cardTempCon/cardTempCon","component-homeToEditForm":"../_module/homeToEditForm/homeToEditForm","component-cardUpld":"../_module/cardUpld/cardUpld","component-intro":"../_module/intro/intro","component-camera":"../_module/camera/camera","component-topNavigation":"../../../../module/topNavigation/topNavigation","component-newCardDetail":"../../../../module/newCardDetail/newCardDetail","component-oldModelTip":"../_module/oldModelTip/oldModelTip","component-companyTip":"../../../../module/company/companyTip/companyTip","mini-icon":"../../../../components/icon/icon","mini-button":"../../../../components/button/button","mini-message":"../../../../components/message/message","mini-popover":"../../../../components/popover/popover","mini-actionsheet":"../../../../components/actionsheet/actionsheet","mini-bulletLayer":"../../../../components/bulletLayer/bulletLayer","mini-navigation":"../../../../components/navigation/navigation"},"navigationBarTitleText":"","navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"backgroundColor":"#ECEDEF"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mainPage/cardMain/cardTempEdit/cardTempEdit.wxml'] = [$gwx6, './pages/mainPage/cardMain/cardTempEdit/cardTempEdit.wxml'];else __wxAppCode__['pages/mainPage/cardMain/cardTempEdit/cardTempEdit.wxml'] = $gwx6( './pages/mainPage/cardMain/cardTempEdit/cardTempEdit.wxml' );
	
	define("pages/mainPage/cardMain/1B3301E60691379C7D5569E19301E9B3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;for(var t=e(require("710CB4770691379C176ADC7051F0E9B3.js")),n=[{name:"TKWhite-NewEmpty",uName:"n-white-2-new.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}},{name:"TYellow-NewAngle",uName:"n-ohter-2.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}},{name:"TKWhite-Empty",uName:"n-white-2.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}},{name:"TGold",uName:"n-other-1.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}},{name:"TKRed-Chaos",uName:"n-other-3.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}},{name:"TSblack-Circle",uName:"n-black-2.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}},{name:"TKBlue-Empty",uName:"n-blue-2.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}},{name:"TKGreen-Empty",uName:"n-green-2.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}},{name:"TKPurple-Empty",uName:"n-purple-2.jpg",sType:"charactor",stu:"onLine",photo:{l:!0}}].concat([{name:"TPWhite-rectangle",uName:"n-white-3.jpg",sType:"business",bpUrl:"defaultBusiness_20191217.png",stu:"onLine",photo:{b:!0}},{name:"TPBlack-rectangle",uName:"n-black-3.jpg",sType:"business",bpUrl:"defaultBusiness_20191217.png",stu:"onLine",photo:{b:!0}}]),a=0;a<n.length;a++)n[a].bcUrl="https://img-1255379270.file.myqcloud.com/model/default/"+n[a].uName,n[a].type=t.default.common;var o={data:n,getchooseTempData:function(e){return n.filter((function(t){return t.name==e}))[0]}};exports.default=o; 
 			}); 
		define("pages/mainPage/cardMain/2E36F5A70691379C48509DA03F11E9B3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;for(var a=e(require("710CB4770691379C176ADC7051F0E9B3.js")),i=[{name:"TSimpleWhite",detail:"极简白",color:["rgba(51,51,51,1)","rgba(51,51,51,0.35)"],uName:"minimalist1.jpg",stu:"offLine",icon:1},{name:"TSimpleStone",detail:"金钻白",color:["rgba(197,151,56,1)","rgba(197,151,56,0.35)"],uName:"n-white-1.jpg",stu:"onLine",icon:1},{name:"TSimplePurple",detail:"儒雅紫",color:["rgba(255,255,255,1)","rgba(255,255,255,0.35)"],uName:"n-purple-1.jpg",stu:"onLine",icon:0},{name:"TSimpleBlack",detail:"深邃黑",color:["rgba(225,193,123,1)","rgba(225,193,123,0.35)"],uName:"n-black-1.jpg",stu:"onLine",icon:0},{name:"TSimpleGreen",detail:"沉稳绿",color:["rgba(255,255,255,1)","rgba(255,255,255,0.35)"],uName:"n-green-1.jpg",stu:"onLine",icon:0},{name:"TSimpleBlue",detail:"商务蓝",color:["rgba(255,255,255,1)","rgba(255,255,255,0.35)"],uName:"n-blue-1.jpg",stu:"onLine",icon:0}],l=0;l<i.length;l++)i[l].bcUrl="https://img-1255379270.cosbj.myqcloud.com/model/minimalist/"+i[l].uName,i[l].sType=a.default.minimalist,i[l].type=a.default.minimalist;var r={data:i};exports.default=r; 
 			}); 
		define("pages/mainPage/cardMain/710CB4770691379C176ADC7051F0E9B3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={common:"common",minimalist:"minimalist",paper:"paper",web:"web",webBussinessPhoto:"webBussinessPhoto"}; 
 			}); 
		define("pages/mainPage/cardMain/C8EA10110691379CAE8C78163011E9B3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=e(require("710CB4770691379C176ADC7051F0E9B3.js")),o=[],t=[];o=[{name:"TYellow-Paper",uName:"beige190314-1.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TYellow-Stripe",uName:"beige190314-2.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TYellow-Flower",uName:"beige190314-4.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TYellow-Angle",uName:"beige190314-3.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TWhite-Paper",uName:"white190314-1.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TWhite-Stripe",uName:"white190314-2.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TWhite-Angle",uName:"white190314-3.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TWhite-Flower",uName:"white190314-4.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TBlack-Paper",uName:"blue190314-1.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TBlack-Stripe",uName:"blue190314-2.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TBlack-Angle",uName:"blue190314-3.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TBlack-Flower",uName:"blue190314-4.jpg",sType:"charactor",stu:"offLine",photo:{l:!0}},{name:"TPYellow-Paper",uName:"beige-b1-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPYellow-Stripe",uName:"beige-b4-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPYellow-Flower",uName:"beige-b2-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPYellow-Angle",uName:"beige-b3-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPWhite-Paper",uName:"white-b3-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPWhite-Stripe",uName:"white-b1-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPWhite-Flower",uName:"white-b2-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPWhite-Angle",uName:"white-b4-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPBlack-Paper",uName:"blue-b3-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPBlack-Stripe",uName:"blue-b2-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPBlack-Flower",uName:"blue-b1-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}},{name:"TPBlack-Angle",uName:"blue-b4-191218.jpg",sType:"old-business",bpUrl:"default.jpg",stu:"offLine",photo:{b:!0}}],t=[{name:"Pj",uName:"dz/default_1537238364_wGrvJg3jHs.jpg",sType:"old-charactor",stu:"offLine"},{name:"09",uName:"main/10_bc.jpg",sType:"old-charactor",stu:"offLine",photo:{l:!0}},{name:"10",uName:"main/11_bc.jpg",sType:"old-charactor",stu:"offLine",photo:{l:!0}},{name:"20",uName:"main/20_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"03",uName:"main/2_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"05",uName:"main/6_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"06",uName:"main/7_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"07",uName:"main/8_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"11",uName:"main/12_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"01",uName:"main/4_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"02",uName:"main/3_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"04",uName:"main/5_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"00",uName:"main/1_bc.jpg",sType:"old-charactor",stu:"offLine"},{name:"08",uName:"main/9_bc.jpg",sType:"old-charactor",stu:"offLine"}];for(var p=0;p<o.length;p++)o[p].bcUrl="https://img-1255379270.file.myqcloud.com/model/default/"+o[p].uName,o[p].type=a.default.common;for(var l=0;l<t.length;l++)t[l].bcUrl="https://img-1255379270.file.myqcloud.com/model/"+t[l].uName,t[l].type=a.default.common;var u={dataCommon:o,dataCommonImg:t};exports.default=u; 
 			}); 
		__wxRoute = 'pages/mainPage/cardMain/_module/addCustom/addCustom';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/addCustom/addCustom.js';	define("pages/mainPage/cardMain/_module/addCustom/addCustom.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),i=require("../../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{},data:{custom:{},confirmClick:!1},methods:{_input:function(t){var i=t.detail.value.trim().length;this.data.custom.value=t.detail.value.trim(),i>0?!this.data.custom.confirm&&this.setData({"custom.confirm":!0}):this.data.custom.confirm&&this.setData({"custom.confirm":!1}),this.data.custom.fail&&this.setData({"custom.fail":!1})},_cancel:function(){this.triggerEvent("customCancel")},_confirm:function(){var a=this;if(!this.data.confirmClick){this.setData({confirmClick:!0});var s=[];s.push(this.data.custom.value),t.contentTestFun([s],(function(t){t.allwords<=0?a.triggerEvent("customConfirm",a.data.custom.value):(a.setData({"custom.fail":!0,"custom.confirm":!1}),i.hidetoast(),i.testShowmodal())}),"",(function(){setTimeout((function(){a.setData({confirmClick:!1})}),100)}))}}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/addCustom/addCustom.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/business/business';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/business/business.js';	define("pages/mainPage/cardMain/_module/business/business.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{companyData:{type:[Object,Boolean],value:!1,observer:function(e){e&&this.setData({cancelBusinessBind:!1})}}},data:{cancelBusinessBind:!0},methods:{_toBuildHomePage:function(e){this.triggerEvent("buildHomepage")},_toLookHomePageEdit:function(){this.triggerEvent("editHomepage")},_cancelBusiness:function(e){this.setData({cancelBusinessBind:!0}),this.triggerEvent("cancelBusiness")}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/business/business.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/camera/camera';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/camera/camera.js';	define("pages/mainPage/cardMain/_module/camera/camera.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{videoList:Array,photoList:Array,editType:String,pageFlag:String},data:{upldImagesComplete:!0},methods:{_videoFun:function(t){this.triggerEvent("videoFun",t.detail)},_addImages:function(){t.burying.setPoint(t,778);var a=9-this.data.photoList.length,o=this;if(!this.data.upldImagesComplete)return e.showtoast("上传中...","loading",1500),0;function i(t){wx.chooseImage({count:a,sourceType:[t],sizeType:["compressed"],success:function(t){o.data.upldImageNumber=0,o.data.upldImagesComplete=!1,o._upldImges(t.tempFilePaths),t.tempFilePaths.length}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:i("camera");break;case 1:i("album")}}catch(t){}}})},_upldImges:function(a){var o=this;e.showtoast("图片上传中"+(this.data.upldImageNumber+1)+"/"+a.length,"loading",2e4),t.photoIdentyFun(a[this.data.upldImageNumber],(function(i){if(!i)return o.data.upldImagesComplete=!0,e.hidetoast(),o.triggerEvent("photoFun",o.data.photoList),e.testImgShowmodal(),!1;t.setUpldFile({url:"uploadAlbumImg",filePath:a[o.data.upldImageNumber]},(function(t){o.data.photoList.push(t),o.setData({photoList:o.data.photoList})}),(function(){e.showtoast("上传失败","none",1e3)}),(function(t){o.data.upldImageNumber++,o.data.upldImageNumber<a.length?o._upldImges(a):o.data.upldImageNumber==a.length&&(o.data.upldImagesComplete=!0,o.triggerEvent("photoFun",o.data.photoList),e.hidetoast())}))}),(function(){o.data.upldImageNumber++,o.data.upldImageNumber<a.length?o._upldImges(a):o.data.upldImageNumber==a.length&&(o.data.upldImagesComplete=!0,o.triggerEvent("photoComplete",o.data.photoCon),e.hidetoast())}))},_throwImage:function(e){t.burying.setPoint(t,780),this.data.photoList.splice(e.currentTarget.dataset.throwindex,1),this.setData({photoList:this.data.photoList}),this.triggerEvent("photoFun",this.data.photoList)},_imagePreview:function(t){this.data.upldImagesComplete&&this.triggerEvent("previewPhoto",t.currentTarget.dataset.index)}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/camera/camera.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/cardTemp/cardTemp';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/cardTemp/cardTemp.js';	define("pages/mainPage/cardMain/_module/cardTemp/cardTemp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../66AA26C40691379C00CC4EC37CA2E9B3.js"),a=getApp(),e=new t.Match("component");Component({properties:{formData:{type:"Array"},tempLoading:{type:Boolean,value:!1},currentModel:{type:Object,value:{},observer:function(t){this.setData({formData:this.data.formData})}},webBusinessPhtotoName:String,oldBusinessPhoto:String,switchModel:Object,avaCon:Object,tempType:String,nameFocus:Boolean,condition:Boolean,editType:String,logoCon:{type:Object,value:{},observer:function(t){t.name?this.setData({logoTip:!1}):this.setData({logoTip:!0})}}},data:{anonymous:a.source.anonymous,logoTip:!0,matchData:{show:!1,detail:{index:"",id:"",name:""},top:0,data:[]},loading:!1,adjustPosition:!1,updateTimer:Math.floor(1e3*Math.random())},methods:{_focus:function(t){this.data.blur=!1;var e=t.currentTarget.dataset.i;if("name"==this.data.formData[e][0]&&this.triggerEvent("nameFocusFun"),this.data.formData[e][0].includes("company")){this.setData({adjustPosition:!1});var o=this.data.formData[e][2];(o=o&&o.trim()).length>=4&&(this._companyMove(),this._companyRulerMatch(t))}else this.setData({adjustPosition:!0});var i="add"==this.data.editType;switch(this.data.formData[e][0]){case"name":i?a.burying.setPoint(a,64):a.burying.setPoint(a,515);break;case"company":i?a.burying.setPoint(a,65):a.burying.setPoint(a,516);break;case"job":i?a.burying.setPoint(a,66):a.burying.setPoint(a,517)}},_companyRulerMatch:function(t){console.log("调用查询接口"),e.input({eContent:t,pageSize:4,top:0,bindthat:this})},_selectCompany:function(t){var a=t.detail,e=this.data.formData.findIndex((function(t){return"company"==t[0]}));this.setData({"formData[2][2]":a,"matchData.show":!1}),this.triggerEvent("formRender",{data:this.data.formData,indexCon:[e],type:"input"})},_companyMove:function(){var t=this;a.systemInfo.shiftX;e.position("company",this,(function(a){e.position("buildguide",t,(function(t){console.log("guideRes",t)})),console.log("company",a)}))},_input:function(t){this.data.blur=!1;var a=t.currentTarget.dataset.i;if(this.data.formData[a][2]=t.detail.value,this.data.formData[a][0].includes("company")){var e=this.data.formData[a][2];(e=e&&e.trim()).length>=4?(this._companyMove(),this._companyRulerMatch(t)):this.setData({"matchData.show":!1})}if(0==this.data.formData[a][4].secure||1==this.data.formData[a][4].placeholder){var o={};this.data.formData[a][4].secure=1,this.data.formData[a][4].placeholder=0,o["formData["+a+"][4].secure"]=1,o["formData["+a+"][4].placeholder"]=0,this.setData(o)}this.triggerEvent("formRender",{data:this.data.formData,indexCon:[a],type:"input"})},_blur:function(t){var a=this;this.data.blur=!0;clearTimeout(null),setTimeout((function(){a.setData({"matchData.show":!1})}),300)},_switchModel:function(){a.burying.setPoint(a,222),this.triggerEvent("switchModel")},_upldAra:function(){a.burying.setPoint(a,577);var t=this;function e(a){wx.chooseImage({count:1,sourceType:[a],sizeType:["compressed"],success:function(a){t.triggerEvent("avaUpld",a.tempFilePaths[0])}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:e("camera");break;case 1:e("album")}}catch(t){}}}),"add"==this.data.editType&&a.burying.setPoint(a,273)}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/cardTemp/cardTemp.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/cardTempCon/cardTempCon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.js';	define("pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../710CB4770691379C176ADC7051F0E9B3.js")),t=getApp(),a=require("../../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({options:{multipleSlots:!0},properties:{minimalistModel:{type:Object,value:{},observer:function(e){console.log("minimalistModel",e)}},commonModel:{type:Object,value:{},observer:function(e){console.log("commonModel",e)}},paperData:{type:Object,value:{name:"customPaper",type:e.default.paper,data:""},observer:function(e){e.data&&(this.setData({"customPaper.data":e.data}),console.log("customPaper",this.data.customPaper)),e.data&&e.data.name?"add"==this.data.paperTempStatus&&this.setData({paperTempStatus:"edit"}):"add"!=this.data.paperTempStatus&&this.setData({paperTempStatus:"add"})}},switchModel:{type:Object,value:{show:!1},observer:function(e){var t=this;if(0==e.show){this.setData({animation:"conDown"});var a=null;clearTimeout(a),a=setTimeout((function(){t.setData({showModel:!1})}),2e3)}else this.setData({animation:"conUp",showModel:!0})}},selectModel:{type:Object,value:{},observer:function(e){e&&Object.keys(e)&&(console.log("selectModel",e),this._modelDealFun())}},discardModel:Object,oldTipShow:Object,avaCon:Object,nameFocus:Boolean,editType:String,tempLoading:Boolean},data:{mark:(new Date).getTime(),customMini:{name:"TSimpleStone",type:e.default.minimalist},customCommon:{name:"TYellow-NewAngle",type:e.default.common},customPaper:{name:"customPaper",type:e.default.paper},scrollY:!0,selectedName:"TSimpleWhite",selectedType:"minimalist",pageShade:{show:!1},avaCon:Object,anonymous:t.source.anonymous,paperTempStatus:"add",systemInfo:t.systemInfo,offLineModel:{},animation:"conUp",showModel:!1,modelList:[{type:"金钻白",nameList:["TSimpleStone","TKWhite-NewEmpty","TPWhite-rectangle"]},{type:"深邃黑",nameList:["TSimpleBlack","TSblack-Circle","TPBlack-rectangle"]},{type:"商务蓝",nameList:["TSimpleBlue","TKBlue-Empty"]},{type:"沉稳绿",nameList:["TSimpleGreen","TKGreen-Empty"]},{type:"儒雅紫",nameList:["TSimplePurple","TKPurple-Empty"]},{type:"其他颜色",nameList:["TGold","TYellow-NewAngle","TKRed-Chaos","TKWhite-Empty"]}],random:Math.floor(100*Math.random())},methods:{_modelDealFun:function(){var e=this.data.selectModel;"offLine"==e.stu&&(this.setData({offLineModel:e}),console.log("offLineModel",this.data.offLineModel)),this.setData({selectedName:e.name,selectedType:e.type})},_showItemClick:function(e){var t={},a=!1;switch(e.currentTarget.dataset.t){case"minimalist":t=this.data.customMini,a=!0;break;case"common":t=this.data.customCommon,a=!0;break;case"paper":t=this.data.customPaper,"edit"==this.data.paperTempStatus&&(a=!0)}this.setData({selectedName:t.name,selectedType:t.type}),a&&this._modelChangeFun()},_miniClick:function(e){if(t.burying.setPoint(t,745),!this.data.tempLoading){var a=e.currentTarget.dataset.name;this.data.minimalistModel.data;this.setData({"customMini.name":a,selectedName:a,selectedType:"minimalist"}),this._modelChangeFun()}},_commonClick:function(e){if(t.burying.setPoint(t,745),!this.data.tempLoading){var a=e.currentTarget.dataset.name;e.currentTarget.dataset.model,this.data.commonModel.data;this.setData({"customCommon.name":a,selectedName:a,selectedType:"common"}),this._modelChangeFun()}},_paperClick:function(){t.burying.setPoint(t,745),this.data.tempLoading||(this.setData({selectedName:this.data.customPaper.name,selectedType:"paper"}),this._modelChangeFun())},_deletePaper:function(){this.setData({selectModel:this.data.minimalistModel[5],selectedName:this.data.minimalistModel[5].name,"customPaper.url":"","customPaper.name":""}),"add"==this.data.editType&&t.burying.setPoint(t,278)},_upld:function(e){try{var a=e.currentTarget.dataset.type;"up"==a?t.burying.setPoint(t,747):"change"==a&&t.burying.setPoint(t,748)}catch(e){}var s=this;e.currentTarget.dataset.m;function o(e){wx.chooseImage({count:1,sourceType:[e],sizeType:["compressed"],success:function(e){s._selfImageUpld(e.tempFilePaths[0])}})}this.setData({"selectData.show":!1}),wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(e){try{switch(e.tapIndex){case 0:o("camera");break;case 1:o("album")}}catch(e){}}})},_selfImageUpld:function(e){var s=this;this.upldProgress={status:"loading"},t.setUpldFile({url:"ecard",filePath:e},(function(t){console.log("上传自定义图片",t),s.upldProgress.status="success",s.triggerEvent("upldPaper",{tempFilePath:e,upldUrl:t})}),(function(){s.upldProgress.status="fail",a.showmodal({data:"图片加载失败，请重新选择。",cancel:!1,text:"我知道了"})})),a.upldProgress(this.upldProgress,this)},_modelChangeFun:function(){var e={},t={},a=this.data.selectedType,s=this.data.selectedName,o=this;switch(a){case"minimalist":e=this.data.customMini,function(){for(var e=o.data.minimalistModel.data,a=0;a<e.length;a++)if(e[a].name==s){t=e[a];break}}();break;case"common":e=this.data.customCommon,function(){for(var e=o.data.commonModel.data,a=o.data.discardModel.dataCommon,i=e.concat(a),n=0;n<i.length;n++)if(i[n].name==s){t=i[n];break}}();break;case"paper":e=this.data.customPaper,t=e}this.triggerEvent("modelChange",t)},_complete:function(){var e=this;this.setData({animation:"animation-down"}),setTimeout((function(){e.triggerEvent("switchClose")}),100)}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/cardTempCon/cardTempCon.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/cardUpld/cardUpld';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/cardUpld/cardUpld.js';	define("pages/mainPage/cardMain/_module/cardUpld/cardUpld.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../../../../../7931C4950691379C1F57AC929AD2E9B3.js");Component({properties:{currentModel:{type:Object,value:{},observer:function(t){this._showFun(t)}},logoCon:{type:Object,value:{},observer:function(t){this.data.currentModel.photo&&this.data.currentModel.photo.l&&this._upldStuFun("logo",t)}},bussinessCon:{type:Object,value:{},observer:function(t){this.data.currentModel.photo&&this.data.currentModel.photo.b&&this._upldStuFun("business",t)}},editType:String},data:{upldShow:!1,upldTip:"",upldStatus:"add"},methods:{_showFun:function(t){var e=!1,s="上传商务照",n="";t.photo&&Object.keys(t.photo).length>0&&(e=!0,t.photo.l&&(s="上传logo",n="图上logo",this._upldStuFun("logo",this.data.logoCon)),t.photo.b&&(s="上传商务照",n="图上照片",this._upldStuFun("business",this.data.bussinessCon))),this.setData({upldShow:e,upldTip:s,newUpldTip:n})},_upldStuFun:function(t,e){var s="add";"logo"==t&&(s=e.name?"edit":"add"),"business"==t&&(s=e.name?"defaultBusiness_20191217.png"==e.name||"newmodel_default.jpg"==e.name||"default.jpg"==e.name?"add":"edit":"add"),this.setData({upldStatus:s})},_upldImage:function(e){this.data.currentModel.photo.l?(this._logoUpld(),"add"==e.currentTarget.dataset.c&&t.burying.setPoint(t,749),"change"==e.currentTarget.dataset.c&&t.burying.setPoint(t,753)):(this._bussinessUpld(),"add"==e.currentTarget.dataset.c&&t.burying.setPoint(t,750),"change"==e.currentTarget.dataset.c&&t.burying.setPoint(t,754))},_deleteUpldImage:function(){var s=this;this.data.currentModel.photo.l?(e.newDeletemodal("确认删除该图片?",(function(){s.triggerEvent("deleteImage","logo")}),"","确认删除"),"edit"==this.data.editType&&t.burying.setPoint(t,751)):(e.newDeletemodal("确认删除该图片?",(function(){s.triggerEvent("deleteImage","business")}),"","确认删除"),"edit"==this.data.editType&&t.burying.setPoint(t,752))},_logoUpld:function(){var t=this;function e(e){wx.chooseImage({count:1,sourceType:[e],sizeType:["compressed"],success:function(e){t.triggerEvent("upldImage",{type:"logo",url:e.tempFilePaths[0]})}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:e("camera");break;case 1:e("album")}}catch(t){}}})},_bussinessUpld:function(){var t=this;function e(e){wx.chooseImage({count:1,sourceType:[e],sizeType:["compressed"],success:function(e){t.triggerEvent("upldImage",{type:"business",url:e.tempFilePaths[0]})}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:e("camera");break;case 1:e("album")}}catch(t){}}})}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/cardUpld/cardUpld.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.js';	define("pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../@babel/runtime/helpers/defineProperty")),a=require("../../../../../66AA26C40691379C00CC4EC37CA2E9B3.js"),e=getApp(),o=require("../../../../../7931C4950691379C1F57AC929AD2E9B3.js"),i=new a.Match("component");Component({options:{multipleSlots:!0},properties:{formData:{type:"Array",observer:function(t){this._addMore(),this._addIconShow()}},tempType:{type:String,value:"",observer:function(t){console.log("tempType",t),this._configFun(t),this._formShowFun(t)}},currentModel:{type:Object,value:{},observer:function(t){this._configFun(this.data.tempType)}},condition:Boolean,avaCon:Object,nameFocus:Boolean,editType:String,itemConfig:Object,customConfig:Object,pageOrigin:{type:String},dropList:Object,configShowNum:Number,pageFlag:String},data:{customNumber:0,alterCon:[],focusName:"",customShow:!1,anonymous:e.source.anonymous,phoneFast:!1,configShow:!1,mustFormShow:!0,matchData:{show:!1,detail:{index:"",id:"",name:""},top:0,data:[]},adjustPosition:!1},methods:{_addMore:function(){var t=[],a=this.data.formData;this.data.customNumber=5;for(var e=0;e<a.length;e++)0==a[e][4].show&&"custom"!=a[e][0]&&"mophone2"!=a[e][0]&&"mophone3"!=a[e][0]&&"phone2"!=a[e][0]&&"phone3"!=a[e][0]&&"email2"!=a[e][0]&&"email3"!=a[e][0]&&"addr2"!=a[e][0]&&"addr3"!=a[e][0]&&"wechat2"!=a[e][0]&&"wechat3"!=a[e][0]?t.push(a[e]):"custom"==a[e][0]&&this.data.customNumber--;this.data.customNumber>0&&t.push(["custom","自定义","","如传真、网址",{secure:1,must:0,show:1,icon:"del",placeholder:0}]),this.setData({alterCon:t})},_configFun:function(t){"common"==t?this.data.currentModel&&"old-charactor"==this.data.currentModel.sType?this.data.currentModel&&"old-charactor"==this.data.currentModel.sType&&this.data.configShow&&this.setData({configShow:!1}):!this.data.configShow&&this.setData({configShow:!0}):this.data.configShow&&this.setData({configShow:!1})},_formShowFun:function(t){"minimalist"==t?this.data.mustFormShow&&this.setData({mustFormShow:!0}):!this.data.mustFormShow&&this.setData({mustFormShow:!0})},_addIconShow:function(){for(var t=this.data.formData,a={},e=0,o=0,i=0,n=0,s=0,r=[],h=[],d=0;d<t.length;d++)1==t[d][4].show&&(a[t[d][0]]=!0),"mophone1"==t[d][0]&&(e=d),"phone1"==t[d][0]&&(o=d),"wechat"==t[d][0]&&(i=d),"addr1"==t[d][0]&&(n=d),"email1"==t[d][0]&&(s=d);"add"==t[e][4].icon&&a.mophone2&&a.mophone3&&(r["formData["+e+"][4].icon"]="",h.push(e)),"add"==t[i][4].icon&&a.wechat2&&a.wechat3&&(r["formData["+i+"][4].icon"]="",h.push(i)),"add"==t[n][4].icon&&a.addr2&&a.addr3&&(r["formData["+n+"][4].icon"]="",h.push(n)),"add"==t[s][4].icon&&a.email2&&a.email3&&(r["formData["+s+"][4].icon"]="",h.push(s)),"add"==t[o][4].icon&&a.phone2&&a.phone3&&(r["formData["+o+"][4].icon"]="",h.push(o)),h.length>0&&(this.setData(r),this._triggerForm({index:[h],type:"addIconStatus"}))},_addMoreFun:function(){for(var t=this,a=this.data.alterCon,o=this.data.formData,i=[],n=this,s=0,r="",h={},d="",c=0;c<a.length;c++)i.push(a[c][1]);1==i.length&&"自定义"==i[0]?this.setData({customShow:!0}):wx.showActionSheet({itemList:i,success:function(e){s=e.tapIndex;var i=0;if("custom"!=(r=a[s][0])){for(var c=0;c<o.length;c++)if(o[c][0]==r){o[c][4].icon="email1"==r||"phone1"==r?"add":"del",o[c][4].show=1,d=o[c][0],h["formData["+c+"][4]"]=o[c][4],i=c;break}n.setData(h),n._addMore(),setTimeout((function(){n.setData({focusName:d})}),200),t._triggerForm({index:[i],type:"addNotCustom"})}else t.setData({customShow:!0})}}),"add"==this.data.editType?e.burying.setPoint(e,162):e.burying.setPoint(e,772)},_add:function(t){var a,o=t.currentTarget.dataset.i,i=this.data.formData[o][0],n=this.data.formData,s={},r=[];switch(i){case"mophone1":r=h("mophone2","mophone3");break;case"phone1":r=h("phone2","phone3");break;case"wechat":r=h("wechat2","wechat3");break;case"addr1":r=h("addr2","addr3");break;case"email1":r=h("email2","email3")}function h(t,a){for(var e=0,o=0;o<n.length;o++)if(n[o][0]==t){if(0==n[o][4].show){s["formData["+o+"][4].show"]=1,e=o;break}}else if(n[o][0]==a&&0==n[o][4].show){s["formData["+o+"][4].show"]=1,e=o;break}return[s,e]}s=r[0],a=r[1],this.setData(s),this._triggerForm({index:[a],type:"addIcon"}),this._addIconShow(),"add"==this.data.editType?e.burying.setPoint(e,280):e.burying.setPoint(e,770)},_del:function(t){var a=t.currentTarget.dataset.i,o=this.data.formData,i={},n=o[a],s="";"custom"!=o[a][0]?(o[a][4].show=0,o[a][2]="",i["formData["+a+"]"]=o[a],s="delNotCustom",this.setData(i),this._editDelFun()):(s="delCustom",n[4].formIndex=a,o.splice(a,1),this.setData({formData:o})),this._triggerForm({index:[a],type:s}),this._addMore(),this._svgTriggerFun(n,"del"),"add"==this.data.editType?e.burying.setPoint(e,165):e.burying.setPoint(e,771)},_editDelFun:function(t){for(var a=this.data.formData,e={},o=0,i=0,n=0,s=0,r=0,h=[],d=[],c=0;c<a.length;c++)1==a[c][4].show&&(e[a[c][0]]=!0),"mophone1"==a[c][0]&&(o=c),"phone1"==a[c][0]&&(i=c),"wechat"==a[c][0]&&(n=c),"addr1"==a[c][0]&&(s=c),"email1"==a[c][0]&&(r=c);""!=a[o][4].icon||e.mophone2&&e.mophone3||(h["formData["+o+"][4].icon"]="add",d.push(o)),""!=a[n][4].icon||e.wechat2&&e.wechat3||(h["formData["+n+"][4].icon"]="add",d.push(n)),""!=a[s][4].icon||e.addr2&&e.addr3||(h["formData["+s+"][4].icon"]="add",d.push(s)),""!=a[r][4].icon||e.email2&&e.email3||(h["formData["+r+"][4].icon"]="add",d.push(r)),""!=a[i][4].icon||e.phone2&&e.phone3||(h["formData["+i+"][4].icon"]="add",d.push(i)),d.length>0&&(this.setData(h),this._triggerForm({index:[d],type:"addIconStatus"}))},_selRadio:function(t){o.showtoast("名片图上不显示该信息","none",2e3),this.triggerEvent("configClick",{n:t.currentTarget.dataset.n,i:t.currentTarget.dataset.i})},_notselRadio:function(t){this.data.configShowNum<4?o.showtoast("名片图上已显示该信息","none",2e3):o.showtoast("名片图上最多展示4项","none",2e3),this.triggerEvent("configClick",{n:t.currentTarget.dataset.n,i:t.currentTarget.dataset.i})},_focus:function(t){var a=t.currentTarget.dataset.i;if(this.data.blur=!1,this.data.inputPre=t.detail.value,"name"==this.data.formData[a][0]&&this.triggerEvent("nameFocusFun"),"mophone1"!=this.data.formData[a][0]||this.data.phoneFast||this.setData({phoneFast:!0}),this.data.formData[a][0].includes("company")){this.setData({adjustPosition:!0});var o=this.data.formData[a][2];(o=o&&o.trim()).length>=4&&(this._companyMove(),this._companyRulerMatch(t))}else this.setData({adjustPosition:!0});var i="add"==this.data.editType?0:1;switch(this.data.formData[a][0]){case"name":e.burying.setPoint(e,[64,760][i]);break;case"company":e.burying.setPoint(e,[65,762][i]);break;case"job":e.burying.setPoint(e,[66,761][i]);break;case"mophone1":e.burying.setPoint(e,[122,766][i]);break;case"wechat":e.burying.setPoint(e,[159,768][i]);break;case"email1":i&&e.burying.setPoint(e,160);break;case"phone1":i&&e.burying.setPoint(e,282)}},_companyMove:function(){e.systemInfo.shiftX;i.position("company",this,(function(t){console.log("company",t)}))},_companyRulerMatch:function(t){i.input({eContent:t,pageSize:4,bindthat:this,extra:0})},_selectCompany:function(a){var e,o=a.detail,i=this.data.formData.findIndex((function(t){return"company"==t[0]}));this.setData((e={},(0,t.default)(e,"formData["+i+"][2]",o),(0,t.default)(e,"matchData.show",!1),e)),this._triggerForm({index:[i],type:"input"})},_input:function(t){this.data.blur=!1;var a=t.currentTarget.dataset.i;if(this.data.formData[a][2]=t.detail.value,this.data.formData[a][0].includes("company")){var e=this.data.formData[a][2];(e=e&&e.trim()).length>=4?(this._companyMove(),this._companyRulerMatch(t)):this.setData({"matchData.show":!1})}if(0==this.data.formData[a][4].secure||1==this.data.formData[a][4].placeholder){var o={};this.data.formData[a][4].secure=1,this.data.formData[a][4].placeholder=0,o["formData["+a+"][4].secure"]=1,o["formData["+a+"][4].placeholder"]=0,this.setData(o)}this._triggerForm({index:[a],type:"input"})},_blur:function(t){var a=this;this.data.blur=!0;if(clearTimeout(null),setTimeout((function(){a.setData({"matchData.show":!1})}),300),this.data.inputPre!=t.detail.value){this.data.tempType;var e={n:t.currentTarget.dataset.n,i:t.currentTarget.dataset.i};this._svgTriggerFun(e,"blur")}setTimeout((function(){a.data.phoneFast&&a.setData({phoneFast:!1}),a.data.focusName&&a.setData({focusName:""})}),100)},_svgTriggerFun:function(t,a){switch(this.data.tempType){case"common":"blur"==a?this.triggerEvent("commonBlur",t):"del"==a?this.triggerEvent("commonDel",t):this.triggerEvent("svgShunt")}},_bindtap:function(t){this.triggerEvent("toAddr",t),"add"==this.data.editType?e.burying.setPoint(e,161):e.burying.setPoint(e,521)},_getPhoneNumber:function(t){var a=this;t.detail.iv&&e.setRequest({url:"getWxPhone",data:{iv:t.detail.iv,encryptedData:t.detail.encryptedData}},(function(e){var o="",i={},n=[];i[o="formData["+t.currentTarget.dataset.i+"][2]"]=e.phoneNumber,n.push(t.currentTarget.dataset.i);for(var s=0;s<a.data.formData.length;s++)if("wechat"==a.data.formData[s][0]&&!a.data.formData[s][2]){o="formData["+s+"][2]",n.push(s),i[o]=e.phoneNumber;break}i.phoneFast=!1,a.setData(i),a._triggerForm({index:n,type:"getPhoneNumber"}),a._svgTriggerFun("","getPhoneNumber")}),(function(){wx.showToast({title:"获取失败"})}))},_phoneTap:function(){"add"==this.data.editType?e.burying.setPoint(e,281):e.burying.setPoint(e,767)},_customConfirm:function(t){var a=this,e=t.detail,o=this.data.formData,i={},n=["custom",e,"","请填写"+e,{secure:1,must:0,show:1,icon:"del",placeholder:0}];o.push(n),i["formData["+(o.length-1)+"]"]=n,i.customShow=!1,this.setData(i),this._addMore(),this._triggerForm({index:[o.length-1],type:"addCustom"}),setTimeout((function(){a.setData({focusName:"custom"+(o.length-1)})}),200)},_customCancel:function(){this.setData({customShow:!1})},_triggerForm:function(t){this.triggerEvent("formRender",{data:this.data.formData,indexCon:t.index,type:t.type})},_upldAra:function(){e.burying.setPoint(e,759);var t=this;function a(a){wx.chooseImage({count:1,sourceType:[a],sizeType:["compressed"],success:function(a){t.triggerEvent("avaUpld",a.tempFilePaths[0])}})}wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){try{switch(t.tapIndex){case 0:a("camera");break;case 1:a("album")}}catch(t){}}}),"add"==this.data.editType&&e.burying.setPoint(e,273)},_addIndustry:function(t){getCurrentPages()[getCurrentPages().length-1].route;"add"==this.data.editType?e.burying.setPoint(e,571):e.burying.setPoint(e,763);var a=t.currentTarget.dataset.i;console.log("添加行业信息"),this.triggerEvent("addIndustry",{i:a})},_dropFunc:function(t){t.currentTarget.dataset.type;this.triggerEvent("dropFunc",t)}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/homeToEditForm/homeToEditForm.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/industry/industry';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/industry/industry.js';	define("pages/mainPage/cardMain/_module/industry/industry.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../../../@babel/runtime/helpers/Arrayincludes");var t=getApp();Component({properties:{formData:Object},data:{},methods:{_addIndustry:function(r){var e=getCurrentPages()[getCurrentPages().length-1].route;e.includes("cardFormBuild/cardFormBuild")?t.burying.setPoint(t,571):e.includes("formEditMinimalist/formEditMinimalist")&&t.burying.setPoint(t,578);var i=r.currentTarget.dataset.i;console.log("添加行业信息"),this.triggerEvent("addIndustry",{i:i})}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/industry/industry.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/intro/intro';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/intro/intro.js';	define("pages/mainPage/cardMain/_module/intro/intro.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{pageOrigin:String,introValue:String,introTest:{value:!1,type:Boolean,observer:function(t){this.setData({testFail:t})}},pageFlag:String},data:{areaShow:!1,areaFocus:!1,testFail:!1},methods:{_textAreaForce:function(){var a=this;t.burying.setPoint(t,775),this.setData({areaShow:!0}),setTimeout((function(){a.setData({areaFocus:!0})}),200)},_input:function(t){this.data.introValue=t.detail.value,this.data.testFail&&this.setData({testFail:!1}),this.triggerEvent("introFun",this.data.introValue)},_blur:function(t){this.setData({areaShow:!1,introValue:this.data.introValue}),this.triggerEvent("introFun",this.data.introValue)}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/intro/intro.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/oldModelTip/oldModelTip';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.js';	define("pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Component({properties:{},data:{},methods:{_changeCardTem:function(){e.burying.setPoint(e,744),this.triggerEvent("changeCardTem")}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/oldModelTip/oldModelTip.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/selectCompany/selectCompany';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/selectCompany/selectCompany.js';	define("pages/mainPage/cardMain/_module/selectCompany/selectCompany.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{matchData:{type:Object,value:{},obersver:function(e,t){console.log(e)}}},data:{},methods:{_selectCompany:function(e){getCurrentPages()[getCurrentPages().length-1].route;var t=e.currentTarget.dataset.matchitem;console.log("company",t),this.triggerEvent("selectCompany",t)}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/selectCompany/selectCompany.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/succBuildModel/succBuildModel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.js';	define("pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({options:{multipleSlots:!0},properties:{senderAvator:String,nickName:String},data:{},methods:{_shareButtonClick:function(i){t.burying.setPoint(t,620)},_toHome:function(){t.burying.setPoint(t,792),wx.switchTab({url:"/pages/cardMain/cardMain"})},_closeGuide:function(){t.burying.setPoint(t,793),this.triggerEvent("toHome")}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/succBuildModel/succBuildModel.js");
 		__wxRoute = 'pages/mainPage/cardMain/_module/video/video';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/_module/video/video.js';	define("pages/mainPage/cardMain/_module/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../@babel/runtime/helpers/toConsumableArray")),t=getApp();Component({properties:{videoList:Array,pageFlag:String},data:{hideVideo:!0},methods:{_uploadVideo:function(){t.burying.setPoint(t,779);var i=this;console.log(),this.data.upladding||wx.chooseVideo({maxDuration:15,compressed:!0,success:function(o){console.log("文件",o,"大小",o.size/1048576),i.data.upladding=!1,o.tempFilePath.toLowerCase().endsWith(".mp4")?o.duration>15||o.size/1048576>25?wx.showToast({title:"上传视频需要小于15秒且小于25MB",icon:"none",mask:!0,duration:2e3}):(wx.showLoading({title:"视频上传中"}),t.setUpldFile({url:"video",method:"POST",filePath:o.tempFilePath},(function(t){wx.showToast({title:"视频上传成功"}),i.data.upladding=!1,i.setData({videoList:[{upVideoPoster:t.imgUrl,videoPath:t.videoUrl}].concat((0,e.default)(i.data.videoList))}),i.triggerEvent("videoFun",i.data.videoList)}),"",(function(){setTimeout((function(){i.data.upladding=!1}),100)}))):wx.showToast({title:"请上传MP4格式的视频",icon:"none",mask:!0,duration:2e3})},fail:function(e){}})},_deleteVideo:function(e){t.burying.setPoint(t,781);var i=e.currentTarget.dataset.videoIdx,o=this.data.videoList.slice(0,i).concat(this.data.videoList.slice(i+1));this.setData({videoList:o}),this.triggerEvent("videoFun",this.data.videoList)},_playVideo:function(e){var t=this,i=null;this.setData({videoPath:e.currentTarget.dataset.videoSrc}),clearTimeout(i),i=null,this.videoContent=wx.createVideoContext("myVideo",this);var o=this.videoContent;i=setTimeout((function(){t.setData({video:o}),o.requestFullScreen(),o.play(),t.setData({hideVideo:!1}),t.triggerEvent("trigger",{event:"hideArea",val:!1})}),100)},_sceenchange:function(e){e.detail&&!e.detail.fullScreen&&this.videoContent.stop()}}}); 
 			}); 	require("pages/mainPage/cardMain/_module/video/video.js");
 		__wxRoute = 'pages/mainPage/cardMain/cardFormEdit/cardFormEdit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/cardFormEdit/cardFormEdit.js';	define("pages/mainPage/cardMain/cardFormEdit/cardFormEdit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a,e,i=require("../../../../@babel/runtime/helpers/interopRequireDefault"),o=require("../../../../BD93AC350691379CDBF5C4320700E9B3.js"),n=i(require("../2E36F5A70691379C48509DA03F11E9B3.js")),s=i(require("../1B3301E60691379C7D5569E19301E9B3.js")),r=i(require("../C8EA10110691379CAE8C78163011E9B3.js")),d=i(require("../710CB4770691379C176ADC7051F0E9B3.js")),u=new o.EditMini,h=getApp(),l=require("../../../../7931C4950691379C1F57AC929AD2E9B3.js"),c=!1,m="";Page({properties:{pageFlag:String},data:{formData:u.baseData().formData,tempType:u.baseData().tempType,minimalistModel:n.default,commonModel:s.default,systemInfo:h.systemInfo,switchModel:{show:!1},pageShade:{show:!1},loading:!1,avaCon:{},logoCon:{},bussinessCon:{},currentModel:n.default.data[1],nameFocus:!0,getSettingMessage:!1,saveNum:0,deleteCon:{},anonymous:h.source.anonymous,introValue:"",videoList:[],photoList:[],companyData:null,photoPre:!1,canSave:!1,paperData:{name:"customPaper",type:d.default.paper},itemShowConfig:u.baseData().itemShowConfig,customShowConfig:{},oldTipShow:{show:!1,ifCustom:!1},condition:!0,dropList:{necess:!0,unnecess:!0,intro:!0,video:!0,bussiness:!0},configShowNum:0},onLoad:function(e){m="",console.log("cardFormEdit.onLoad",e),t=e,this.setData({optionsL:e}),c=!1,a=h.temporaryData.edit.data,this.compatibleFun(),this.modelFun(),this.setData({avaCon:a.customAvatar,logoCon:a.logo,bussinessCon:a.bpUrl,introValue:a.intro,photoList:a.album_data,videoList:a.video_data,companyData:a.company_data,temporaryDataFormData:a}),this.formDataFun(),this.customFun(),this.getUserSetting(),this.saveNumGet()},onShow:function(){this.addrRender(),this.avaRender(),this.paperCardRender(),this.logoRender(),this.businessRender(),this.photoPreRender(),this.getMycard(),this.industryRender(),c=!0},modelFun:function(){var t,e,i=this,o=a.modelIndex.type,n=a.modelIndex.value;if("OldTempWithOcr"==o){var s=this.data.paperData;s.data={url:a.userpic.url,name:a.userpic.name,hengshu:a.hengshu},this.setData({currentModel:s,paperData:s,tempType:d.default.paper})}if("OldTempWithNoOcr"==o){t=this.data.commonModel.data,e=r.default.dataCommonImg;for(var u=!1,c=0;c<e.length;c++)if(e[c].name==n){e[c].url=a.userpic.url,this.setData({currentModel:e[c],tempType:d.default.common}),u="adF-index"+c;break}if(u)t.unshift(e[u]),this.setData({"commonModel.data":t});else{var m=this.data.paperData;m.data={url:a.userpic.url,name:a.userpic.name,hengshu:a.hengshu},this.setData({currentModel:m,paperData:m,tempType:d.default.paper,"oldTipShow.show":!0,"oldTipShow.ifCustom":!0})}}if("NewTemp"==o){t=this.data.commonModel.data,e=r.default.dataCommon;for(var f=!1,g=0;g<t.length;g++)if(t[g].name==n){t[g].url=a.userpic.url,this.setData({currentModel:t[g],tempType:d.default.common}),f="adF-index"+g;break}if(!f){for(var p=0;p<e.length;p++)if(e[p].name==n){e[p].url=a.userpic.url,this.setData({currentModel:e[p],tempType:d.default.common}),f="adF-index"+p;break}f&&(t.unshift(e[f]),this.setData({"commonModel.data":t}))}f||l.showtoast("出错啦"+n,"none",2e3)}if("SimpleTemp"==o){t=this.data.minimalistModel.data;for(var D=0;D<t.length;D++)if(t[D].name==n){this.setData({currentModel:t[D],tempType:d.default.minimalist});break}}h.setRequest({url:"cardsList",data:{openId:h.client.openid}},(function(t){for(var a=i,e=0;e<t.length;e++)if(t[e].cardId==i.data.temporaryDataFormData.id&&null!==t[e].entId){a.data.formData;i.setData({condition:!1,canSave:!0})}}))},compatibleFun:function(){a.showconfig=a.showconfig?a.showconfig:{custom:[],configShow:u.baseData().itemShowConfig};for(var t=a.showconfig.custom,e=a.showconfig.configShow,i=Object.keys(e),o=0,n=0;n<i.length;n++)e[i[n]]&&++o>4&&(e[i[n]]=!1);for(var s=0;s<t.length;s++)"true"==t[s][2]&&++o>4&&(t[s][2]="false");a.showconfig.custom=t,a.showconfig.configShow=e},formDataFun:function(){for(var t=u.baseData().formData,e=a,i=e.showconfig.custom,o=e.showconfig.configShow,n=0;n<t.length;n++)(e[t[n][0]]||o[t[n][0]])&&("industry"==t[n][0]?t[n][2]={industry:e.industry,industry_data:e.industry_data}:t[n][2]=e[t[n][0]]?e[t[n][0]]:"",t[n][4].show=1),"mophone1"!=t[n][0]&&"wechat"!=t[n][0]&&"phone1"!=t[n][0]&&"addr1"!=t[n][0]&&"email1"!=t[n][0]||(t[n][4].icon="add");for(var s=0;s<i.length;s++)t.push(["custom",i[s][0],i[s][1],"如传真、网址",{secure:1,must:0,show:1,icon:"del",placeholder:0}]);this.setData({formData:t})},customFun:function(){for(var t=a.showconfig.custom,e=this.data.formData,i={},o=0,n=0;n<e.length;n++)if("custom"==e[n][0]){o=n;break}for(var s=0;s<t.length;s++)"true"==t[s][2]&&(i["custom"+(o+s)]=!0);this.setData({itemShowConfig:a.showconfig.configShow,customShowConfig:i}),this.setShowNum()},getUserSetting:function(){var t=this;h.getSettingMessage((function(a){t.setData({getSettingMessage:a.u})}))},saveNumGet:function(){var a=this;h.setRequest({url:"mycardCount",data:{id:t.id}},(function(t){a.data.saveNum=t}))},switchModelFun:function(){this.setData({"switchModel.show":!this.data.switchModel.show,selectModel:this.data.currentModel,formData:this.data.formData}),this.canSaveFun()},switchClose:function(t){this.setData({"switchModel.show":!1})},modelChange:function(t){var a=!1;switch(t.detail.type){case"common":a=!0}this.setData({tempLoading:a,currentModel:t.detail,tempType:t.detail.type}),this.svgShuntFun(),this.oldTipFun(t.detail.type)},svgShuntFun:function(){"common"==this.data.tempType&&this.svgCommonFun()},oldTipFun:function(t){"paper"==t?this.data.oldTipShow.ifCustom&&!this.data.oldTipShow.show?this.setData({"oldTipShow.show":!0}):!this.data.oldTipShow.ifCustom&&this.data.oldTipShow.show&&this.setData({"oldTipShow.show":!1}):this.data.oldTipShow.show&&this.setData({"oldTipShow.show":!1})},svgCommonFun:function(){var t=this,a=u.serverFun(this.data.formData,this.data.itemShowConfig,this.data.customShowConfig);this.data.logoCon.name&&(a.logo=this.data.logoCon.name),this.data.bussinessCon.name&&"newmodel_default.jpg"!=this.data.bussinessCon.name&&"default.jpg"!=this.data.bussinessCon.name?a.bpUrl=this.data.bussinessCon.name:this.data.currentModel.bpUrl&&(a.bpUrl=this.data.currentModel.bpUrl),this.setData({tempLoading:!0}),"old-charactor"==this.data.currentModel.sType?this.drawImg(a,(function(a){t.setData({"currentModel.url":a.url,tempLoading:!1})}),(function(){t.setData({tempLoading:!1})})):this.svg(a,(function(a){t.setData({"currentModel.url":a.url,tempLoading:!1})}),(function(){t.setData({tempLoading:!1})}))},svgCommonDel:function(t){var a={},e=this.data.customShowConfig,i={};if("custom"==t.detail[0]){var o=t.detail[4].formIndex;if(this.data.formData[o]&&"custom"==this.data.formData[o][0]){for(var n=Object.keys(e),s=this.data.formData.length-o,r=0;r<n.length;r++)i[n[r]]=e[n[r]];i[n[n.length-1]]=!1;for(var d=0;d<=s;d++)i["custom"+(Number(o)+d)]=!1,e["custom"+(Number(o)+d+1)]&&(i["custom"+(Number(o)+d)]=!0);console.log("fff",o),this.setData({customShowConfig:i})}else this.setData({customShowConfig:{}})}else a["itemShowConfig."+t.detail[0]]=!1,this.setData(a);this.svgShuntFun()},svgCommonBlur:function(t){this.svgIfFun(t.detail)&&this.svgShuntFun()},svgIfFun:function(t){return u.svgIfFun(t,this.data.itemShowConfig,this.data.customShowConfig,this.data.currentModel)},addrRender:function(){"addrMatch"==h.temporaryData.edit.enterMark&&(h.temporaryData.edit.enterMark=!1,this.setData({formData:this.data.formData}),this.svgShuntFun(),this.canSaveFun())},avaRender:function(){this.data.avaCon.url&&(this.setData({avaCon:this.data.avaCon}),c&&this.canSaveFun())},logoRender:function(){"logo"==h.temporaryData.edit.enterMark&&(h.temporaryData.edit.enterMark=!1,this.setData({logoCon:this.data.logoCon}),this.svgShuntFun())},businessRender:function(){"business"==h.temporaryData.edit.enterMark&&(h.temporaryData.edit.enterMark=!1,this.setData({bussinessCon:this.data.bussinessCon}),this.svgShuntFun())},paperCardRender:function(){var t={};if("cropCardComplete"==h.temporaryData.edit.enterMark){h.temporaryData.edit.enterMark=!1,t=h.temporaryData.edit.data,this.setData({"paperData.data":{url:t.userpic.url,name:t.userpic.name,hengshu:t.hengshu}});for(var a=u.baseData().formData,e=0;e<a.length;e++)t[a[e][0]]&&(a[e][2]=t[a[e][0]],a[e][4].show=1);this.setData({formData:a}),this.setData({tempType:this.data.paperData.type,currentModel:this.data.paperData,selectModel:this.data.paperData}),this.data.oldTipShow.show&&this.setData({"oldTipShow.show":!1,"oldTipShow.ifCustom":!1}),this.canSaveFun()}},photoPreRender:function(){this.data.photoPre&&(this.data.photoPre=!1,this.setData({photoList:this.data.photoList}))},formRender:function(t){var a=t.detail.data,e=t.detail.type,i=t.detail.indexCon;if("addNotCustom"==e||"delNotCustom"==e||"input"==e||"getPhoneNumber"==e||"addIconStatus"==e||"addIcon"==e)for(var o=0;o<i.length;o++)this.data.formData[i[o]]=a[i[o]];else"addCustom"==e?this.data.formData.push(a[i[0]]):"delCustom"==e?this.data.formData.splice(i[0],1):console.log("没有的类型");this.canSaveFun()},addIndustry:function(t){if(console.log(m,"对象对对对",this.data,a),m.length<=0)for(var i=this.data.formData,o=0;o<i.length;o++)"industry"==i[o][0]&&(console.log(i[o][2].industry,"是什么"),this.data.temporaryDataFormData.industry="string"==typeof i[o][2].industry&&i[o][2].industry.length>0?i[o][2].industry.split(","):i[o][2].industry,this.data.temporaryDataFormData.industry_data="string"==typeof i[o][2].industry_data?i[o][2].industry_data.split(","):i[o][2].industry_data);else this.data.temporaryDataFormData.industry=m.split(","),this.data.temporaryDataFormData.industry_data=e;wx.navigateTo({url:"/pages/cardMain/formMinimalistIndustry/formMinimalistIndustry?current="+t.detail.i})},canSaveFun:function(){!this.data.canSave&&this.setData({canSave:!0})},toAddr:function(t){var a=t.detail.currentTarget.dataset.i,e={};0==this.data.formData[a][4].secure&&(this.data.formData[a][4].secure=1,"formData["+a+"][4]",e=this.data.formData[a][4],this.setData(e)),wx.navigateTo({url:"/pages/cardMain/formMinimalistAddr/formMinimalistAddr?current="+a})},avaUpld:function(t){wx.navigateTo({url:"/pages/cardMain/upldTbcardLogo/upldTbcardLogo?imgurl="+t.detail+"&backcolor=white&main=minimalist"})},buildHomepage:function(){h.burying.setPoint(h,784),this.canSaveFun(),wx.navigateTo({url:"/pages/cardMain/buildHomePage/buildHomePage?id="+a.id+"&detail=add&main=formEditMinimalist"})},editHomepage:function(){this.canSaveFun(),wx.navigateTo({url:"/pages/cardMain/homePage/homePage?id="+a.id+"&detail=cardMain&st=lookSelf&main=formEditMinimalist"})},cancelBusiness:function(){var t=this;h.burying.setPoint(h,785),h.setRequest({url:"isvisible",method:"PUT",data:{id:a.company_data.id,visible:!1}},(function(a){t.getMycard()})),this.canSaveFun()},upldImage:function(t){"logo"==t.detail.type?wx.navigateTo({url:"/pages/cardMain/cropLogo/cropLogo?src="+t.detail.url+"&type=minimalist"}):"business"==t.detail.type&&("old-business"==this.data.currentModel.sType?wx.navigateTo({url:"/pages/cardMain/businessPhotoCrop/businessPhotoCrop?imgurl="+t.detail.url+"&main=minimalist&type=notRectangle"}):wx.navigateTo({url:"/pages/cardMain/businessPhotoCrop/businessPhotoCrop?imgurl="+t.detail.url+"&main=minimalist&type=rectangle"}))},deleteImage:function(t){"logo"==t.detail?this.setData({logoCon:{}}):"business"==t.detail&&this.setData({bussinessCon:{}}),this.svgShuntFun(),this.canSaveFun()},upldPaper:function(a){var e=a.detail.upldUrl,i=a.detail.tempFilePath;wx.navigateTo({url:"/pages/cardMain/cropCard/cropCard?src="+e.url+"&cutImage="+e.userpic+"&butt=notFirstCamera&main="+t.main+"&file="+i})},introFun:function(t){this.setData({introValue:t.detail}),this.canSaveFun(),this.data.introTest&&this.setData({introTest:!1})},videoFun:function(t){this.setData({videoList:t.detail}),this.canSaveFun()},photoFun:function(t){this.setData({photoList:t.detail}),this.canSaveFun()},previewPhoto:function(t){wx.navigateTo({url:"/pages/customePages/imagesShowMinimalist/imagesShowMinimalist?currentindex="+t.detail+"&main=formEditMinimalist"})},deleteCard:function(){var t=this;h.burying.setPoint(h,756);var e="删除名片会清空「该名片所在群通讯录的群友名片」，请谨慎操作。";this.cardTeamList((function(i){"teamSuperManager"==i.cardStatus?l.showmodal({cancel:!1,text:"我知道了",data:"您是企业【"+i.teamData.entName+"】的超级管理员，如需删除名片，请先转让管理员权限或解散企业"}):("joinedTeam"==i.cardStatus?e="该名片已加入企业，删除后将直接退出该企业，是否确定删除？":4==a.cardType?e="删除该名片将移除您在所有班级的信息":t.data.saveNum&&t.data.saveNum>0&&(e=t.data.saveNum+"人已保存，你可以选择修改名片信息，修改的信息会同步更新至对方名片夹"),l.editDeletemodal(e,"仍要删除",(function(){t.setData({deleteCon:{loading:!0,con:"删除中"},pageShade:{show:!0}}),l.showtoast("删除中...","loading",8e3),t.deleteFun(),"joinedTeam"==i.cardStatus&&h.burying.setPoint(h,680)}),(function(){t.setData({deleteCon:{loading:!1,con:"删除名片"},pageShade:{show:!1}}),"joinedTeam"==i.cardStatus&&h.burying.setPoint(h,681)})))}))},cardTeamList:function(a){h.setRequest({url:"cardsList",data:{openId:h.client.openid}},(function(e){for(var i=e,o="noTeam",n={},s=0;s<i.length;s++)if(i[s].entId&&i[s].cardId==t.id){o="joinedTeam",n=i[s],1==i[s].roleId&&(o="teamSuperManager");break}a&&a({cardStatus:o,teamData:n})}))},deleteFun:function(){var a=this;h.setRequest({url:"deleteCard",extra:"/"+t.id,method:"DELETE"},(function(a){console.log("optionsL.main ",t.main),l.showtoast("删除成功","success",1e3),"cardAll"==t.main||"stickCard"==t.main||"howEnter"==t.main?wx.navigateBack({delta:2}):wx.switchTab({url:"/pages/cardMain/cardMain"})}),"",(function(){a.setData({deleteCon:{loading:!1,con:"删除名片"},pageShade:{show:!1}})}))},configClick:function(t){var a=u.configAdjuest(this.data.itemShowConfig,this.data.customShowConfig),e=t.detail.n,i=this.data.itemShowConfig[t.detail.n],o=this.data.customShowConfig[t.detail.n+t.detail.i],n={};"custom"!=e&&(a||i&&!a)&&(n["itemShowConfig."+t.detail.n]=!i,this.setData(n),this.svgShuntFun()),"custom"==e&&(a||o&&!a)&&(n["customShowConfig."+t.detail.n+t.detail.i]=!o,this.setData(n),this.svgShuntFun()),this.setShowNum(),this.canSaveFun()},setShowNum:function(){var t=this.data.itemShowConfig,a=this.data.customShowConfig,e=Object.keys(t).filter((function(a){return t[a]})),i=Object.keys(a).filter((function(t){return a[t]}));this.setData({configShowNum:e.concat(i).length})},submitInfo:function(t){this.data.submitInfo=t},saveSensorClick:function(){h.burying.setPoint(h,755)},getUserMessa:function(t){if(this.saveSensorClick(),t.detail.iv){h.touxiang=t.detail.userInfo;var a=this.data.avaCon.name;(a.indexOf("https://wx.qlogo.cn")>=0||!a||"morenTouxiang.png"==a)&&this.setData({avaCon:{name:h.touxiang.avatarUrl,url:h.touxiang.avatarUrl}}),this.setData({getSettingMessage:!0}),h.setUnion(t.detail);try{wx.setStorageSync("touxiang",{d:t.detail.userInfo})}catch(t){}this.submit(this.data.submitInfo)}},submit:function(t){var e=this;if(this.data.loading)return!1;var i,o=this.data.formData,n={},s=!0;if(this.data.condition)for(var r=0;r<o.length;r++)o[r][4].must&&!o[r][2]&&(s=!1,o[r][4].placeholder=1);else for(var c=0;c<o.length;c++)o[c][4].must&&!o[c][2]&&(s=!1,o[c][4].placeholder=1);if(this.data.formData=o,i=u.testFun(o,this.data.introValue),n=u.serverFun(o,this.data.itemShowConfig,this.data.customShowConfig),console.log("e",t),n.formid="",n.id=a.id,this.data.introValue?n.intro=this.data.introValue.substring(0,200):n.intro="",n.desc=this.data.photoList,n.video=this.data.videoList,!s)return this.setData({formData:o}),!1;this.setData({loading:!0,"pageShade.show":!0}),n.customAvatar=this.data.avaCon.name,this.data.logoCon.name&&(n.logo=this.data.logoCon.name),this.data.bussinessCon.name?n.bpUrl=this.data.bussinessCon.name:this.data.currentModel.bpUrl&&(n.bpUrl=this.data.currentModel.bpUrl),console.log(n,"这个serverD是什么11111111"),h.contentTestFun(i,(function(t){if(t.allwords<=0)e.data.tempType==d.default.minimalist?e.svg(n,(function(t){n.userpic=t.name,e.buildCard(n)}),(function(){e.subFail()})):e.data.tempType==d.default.common?"old-charactor"==e.data.currentModel.sType?e.drawImg(n,(function(t){n.userpic=t.userpic,e.buildCard(n)}),(function(){e.subFail()})):e.svg(n,(function(t){n.userpic=t.name,e.buildCard(n)}),(function(){e.subFail()})):e.data.tempType==d.default.paper&&(n.userpic=e.data.paperData.data.name,e.buildCard(n));else{for(var a=t.errorArr,i=!1,s=0;s<a.length;s++)a[s]<o.length?o[a[s]][4].secure=0:a[s]==o.length&&(i=!0);l.testShowmodal(),e.setData({formData:o,loading:!1,introTest:i,"pageShade.show":!1})}})),h.gioCustome({t:"formEditMinimalist.001"})},drawImg:function(t,a,e){var i=t;i.tempId=this.data.currentModel.name,h.setRequest({url:"drawImg",method:"POST",data:{id:i.tempId,name:i.name,company:i.company,job:i.job,mophone1:i.mophone1,email1:i.email1,phone1:i.phone1,addr1:i.addr1,logo:i.logo}},(function(t){a&&a(t)}),(function(){e&&e()}))},svg:function(t,a,e){var i=t;i.tempId=this.data.currentModel.name,h.setRequest({url:"drawSvg",method:"POST",data:i},(function(t){a&&a(t)}),(function(){e&&e()}))},buildCard:function(t,a){var e=this;h.setRequest({url:"createCard",method:"PUT",data:t},(function(t){e.getMycard((function(){var i=null;clearTimeout(i),i=setTimeout((function(){e.subSuccess()}),2e3),a&&a(t)}))}),(function(t){e.subFail()}))},getMycard:function(e){var i=this;h.setRequest({url:"selectById",data:{id:t.id,formtoken:t.formtoken}},(function(t){if(t){console.log("res",t);var o=t;h.temporaryData.edit.data=o,!o.customAvatar.name&&i.data.touxiang&&i.data.touxiang.avatarurl&&(o.customAvatar.name=i.data.touxiang.avatarurl,o.customAvatar.url=i.data.touxiang.avatarurl,h.temporaryData.edit.data.customAvatar=o.customAvatar),a=h.temporaryData.edit.data,i.setData({temporaryDataFormData:a,companyData:a.company_data})}e&&e()}))},subSuccess:function(){this.setData({loading:!1,"pageShade.show":!1}),h.refreshCardStatus=!0,wx.navigateBack({delta:1})},subFail:function(){l.showtoast("保存失败，请稍后重试","none",2e3),h.refreshCardStatus=!0,this.setData({loading:!1,"pageShade.show":!1,formData:this.data.formData})},industryRender:function(){if("industryMark"==h.temporaryData.edit.enterMark){m=h.temporaryData.edit.industryData.industry,e=h.temporaryData.edit.industryData.industry_data,h.temporaryData.edit.enterMark=!1;var t=this.data.formData.findIndex((function(t){return"industry"==t[0]}));this.data.formData[t][2]={industry:h.temporaryData.edit.industryData.industry,industry_data:h.temporaryData.edit.industryData.industry_data},this.setData({formData:this.data.formData}),this.canSaveFun(),console.log("这个页面渲染的",this.data)}},dropFunc:function(t){var a=t.currentTarget.dataset.type||t.detail&&t.detail.currentTarget.dataset.type;if(this.data.dropList[a])switch(a){case"necess":h.burying.setPoint(h,758);break;case"unnecess":h.burying.setPoint(h,765);break;case"intro":h.burying.setPoint(h,774);break;case"video":h.burying.setPoint(h,777);break;case"bussiness":h.burying.setPoint(h,783)}else switch(a){case"necess":h.burying.setPoint(h,757);break;case"unnecess":h.burying.setPoint(h,764);break;case"intro":h.burying.setPoint(h,773);break;case"video":h.burying.setPoint(h,776);break;case"bussiness":h.burying.setPoint(h,782)}this.data.dropList[a]=!this.data.dropList[a],this.setData({dropList:this.data.dropList}),console.log(this.data.dropList)},ss:function(){}}); 
 			}); 	require("pages/mainPage/cardMain/cardFormEdit/cardFormEdit.js");
 		__wxRoute = 'pages/mainPage/cardMain/cardTempEdit/cardTempEdit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/cardTempEdit/cardTempEdit.js';	define("pages/mainPage/cardMain/cardTempEdit/cardTempEdit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a,e=require("../../../../@babel/runtime/helpers/interopRequireDefault"),i=e(require("../../../../@babel/runtime/helpers/defineProperty")),o=require("../../../../BD93AC350691379CDBF5C4320700E9B3.js"),s=e(require("../2E36F5A70691379C48509DA03F11E9B3.js")),n=e(require("../1B3301E60691379C7D5569E19301E9B3.js")),r=e(require("../C8EA10110691379CAE8C78163011E9B3.js")),d=e(require("../710CB4770691379C176ADC7051F0E9B3.js")),u=new o.EditMini,l=getApp(),h=require("../../../../7931C4950691379C1F57AC929AD2E9B3.js"),c=!1;Page({data:{formData:u.baseData().formData,tempType:u.baseData().tempType,minimalistModel:s.default,discardModel:r.default,commonModel:n.default,systemInfo:l.systemInfo,switchModel:{show:!1},pageShade:{show:!1},loading:!1,avaCon:{},logoCon:{},bussinessCon:{},webBussinessCon:{},currentModel:s.default.data[1],nameFocus:!0,getSettingMessage:!1,saveNum:0,deleteCon:{},anonymous:l.source.anonymous,webBusinessPhtotoName:"template_directory/portraitPlaceholder.png",oldBusinessPhoto:"defaultBusiness_20191217.png",webBusinessPhtotoUrl:l.source.webBusinessPhtotoUrl,photoPre:!1,canSave:!1,paperData:{name:"customPaper",type:d.default.paper},itemShowConfig:u.baseData().itemShowConfig,customShowConfig:{},oldTipShow:{show:!1,ifCustom:!1},condition:!0,singleData:null,cardUpld:{show:!1},mainshowTopTip:!1,freshNum:(new Date).getTime(),backFunc:null,enterprisesData:"",membersCount:0,sheetList:[],showActionsheet:!1},onLoad:function(a){var e=this;console.log("cardTempEdit.onLoad",a),t=a,this.setData({optionsL:a,enterprisesData:l.enterprisesData,useNumb:a.useNumb,deptId:a.deptId}),c=!1,console.log("初始化信息",l.temporaryData.edit.data),this.getMycard((function(){e.initTemp()})),this.initNavigate(a),this.getUserSetting(),this.saveNumGet()},onShow:function(){var t=this;console.log('app.temporaryData["edit"]["enterMark"]',l.temporaryData.edit.enterMark),l.refreshCardStatus&&(l.refreshCardStatus=!1,console.log("gggretws"),this.getMycard((function(){t.initTemp()}))),this.avaRender(),this.paperCardRender(),this.logoRender(),this.businessRender(),this.photoPreRender(),this.industryRender(),this.getcloseTopTip(),this.getcloseTeamTip(),c=!0,l.compatibleManage.shareMenu&&wx.showShareMenu({withShareTicket:!0})},initNavigate:function(a){var e=null;switch(a.main){case"howEnter":e="clickSelf"==t.type?"home":"prePage";break;case"company":e="prePage";break;case"operationLayer":case"stickCard":case"howEnter":default:e="backHome"}this.setData({backFunc:e})},getMycard:function(e){var i=this;l.setRequest({url:"selectById",data:{id:t.id,formtoken:t.formtoken}},(function(t){if(t){var o=t;l.temporaryData.edit.data=o,!o.customAvatar.name&&i.data.touxiang&&i.data.touxiang.avatarurl&&(o.customAvatar.name=i.data.touxiang.avatarurl,o.customAvatar.url=i.data.touxiang.avatarurl,l.temporaryData.edit.data.customAvatar=o.customAvatar),a=l.temporaryData.edit.data}e&&e()}))},initTemp:function(){var t=this;(a=l.temporaryData.edit.data)||wx.navigateTo({url:"/pages/cardMain/cardMain"}),this.compatibleFun(),this.modelFun((function(a){t.setData({selectModel:a}),console.log("当前模板的类型",t.data.tempType),console.log("顶部展示图片数据",t.data.selectModel)})),this.setData({avaCon:a.customAvatar,logoCon:a.logo,bussinessCon:a.bpUrl,introValue:a.intro,photoList:a.album_data,videoList:a.video_data,companyData:a.company_data,singleData:a}),this.formDataFun(),this.customFun()},modelFun:function(t){var e,i,o=this,s=a.modelIndex.type,n=a.modelIndex.value,u=a.modelIndex.isBussinessPhoto;if("OldTempWithOcr"==s){var c=this.data.paperData;c.data={url:a.userpic.url,name:a.userpic.name,hengshu:a.hengshu},this.setData({currentModel:c,paperData:c,tempType:d.default.paper})}if("OldTempWithNoOcr"==s){e=this.data.commonModel.data,i=r.default.dataCommon;for(var m=!1,p=0;p<i.length;p++)if(i[p].name==n){i[p].url=a.userpic.url,this.setData({currentModel:i[p],tempType:d.default.common}),m="adF-index"+p;break}if(m)e.unshift(i[m]),this.setData({"commonModel.data":e,"paperData.data":""});else{var g=this.data.paperData;g.data={url:a.userpic.url,name:a.userpic.name,hengshu:a.hengshu},this.setData({currentModel:g,paperData:g,tempType:d.default.paper}),3!==a.cardType&&this.setData({"oldTipShow.show":!0,"oldTipShow.ifCustom":!0})}}if("NewTemp"==s){e=this.data.commonModel.data,i=r.default.dataCommon;for(var f=!1,v=0;v<e.length;v++)if(e[v].name==n){e[v].url=a.userpic.url,this.setData({currentModel:e[v],tempType:d.default.common}),f="adF-index"+v;break}if(!f){for(var b=0;b<i.length;b++)if(i[b].name==n){i[b].url=a.userpic.url,this.setData({currentModel:i[b],tempType:d.default.common}),f="adF-index"+b;break}f&&this.setData({"commonModel.data":e})}f||h.showtoast("出错啦"+n,"none",2e3)}if("SimpleTemp"==s){e=this.data.minimalistModel.data;for(var w=0;w<e.length;w++)if(e[w].url=a.userpic.url,e[w].name==n){this.setData({currentModel:e[w],tempType:d.default.minimalist});break}}if("WebTemp"==s){var D={url:a.userpic.url,name:a.userpic.name,hengshu:a.hengshu,bpUrl:a.bpUrl};0==u?this.setData({currentModel:D,tempType:d.default.web}):1==u&&this.setData({currentModel:D,tempType:d.default.webBussinessPhoto,tempName:n})}t&&t(this.data.currentModel),l.setRequest({url:"cardsList",data:{openId:l.client.openid}},(function(t){for(var a=o,e=0;e<t.length;e++)if(t[e].cardId==o.data.singleData.id&&null!==t[e].entId){a.data.formData;o.setData({condition:!1,canSave:!0})}}))},compatibleFun:function(){a.showconfig=a.showconfig?a.showconfig:{custom:[],configShow:u.baseData().itemShowConfig};for(var t=a.showconfig.custom,e=a.showconfig.configShow,i=Object.keys(e),o=0,s=0;s<i.length;s++)e[i[s]]&&++o>4&&(e[i[s]]=!1);for(var n=0;n<t.length;n++)"true"==t[n][2]&&++o>4&&(t[n][2]="false");a.showconfig.custom=t,a.showconfig.configShow=e},formDataFun:function(){for(var t=u.baseData().formData,e=a,i=e.showconfig.custom,o=e.showconfig.configShow,s=0;s<t.length;s++)(e[t[s][0]]||o[t[s][0]])&&("industry"==t[s][0]?t[s][2]={industry:e.industry,industry_data:e.industry_data}:t[s][2]=e[t[s][0]]?e[t[s][0]]:"",t[s][4].show=1),"mophone1"!=t[s][0]&&"wechat"!=t[s][0]&&"phone1"!=t[s][0]&&"addr1"!=t[s][0]&&"email1"!=t[s][0]||(t[s][4].icon="add");for(var n=0;n<i.length;n++)t.push(["custom",i[n][0],i[n][1],"如传真、网址",{secure:1,must:0,show:1,icon:"del",placeholder:0}]);this.setData({formData:t})},customFun:function(){for(var t=a.showconfig.custom,e=this.data.formData,i={},o=0,s=0;s<e.length;s++)if("custom"==e[s][0]){o=s;break}for(var n=0;n<t.length;n++)"true"==t[n][2]&&(i["custom"+(o+n)]=!0);this.setData({itemShowConfig:a.showconfig.configShow,customShowConfig:i})},getUserSetting:function(){var t=this;l.getSettingMessage((function(a){t.setData({getSettingMessage:a.u})}))},saveNumGet:function(){var a=this;l.setRequest({url:"mycardCount",data:{id:t.id}},(function(t){a.data.saveNum=t}))},switchModelFun:function(){this.setData({"switchModel.show":!0,"cardUpld.show":!0,selectModel:this.data.currentModel,formData:this.data.formData}),this.canSaveFun()},switchClose:function(t){this.setData({"switchModel.show":!1})},modelChange:function(t){var a=!1;switch(t.detail.type){case"common":a=!0}this.setData({tempLoading:a,currentModel:t.detail,tempType:t.detail.type,"oldTipShow.show":!1}),this.svgShuntFun()},svgShuntFun:function(){"common"==this.data.tempType?(this.setData({loading:!0}),this.svgCommonFun()):"minimalist"==this.data.tempType?(this.setData({loading:!0}),this.svgMinimalist()):"webBussinessPhoto"==this.data.tempType&&(console.log("todo 去修改企业商务照模板"),console.log(this.data.bussinessCon),this.svgWebFun())},svgMinimalist:function(){var t=this,a=u.serverFun(this.data.formData,this.data.itemShowConfig,this.data.customShowConfig);this.data.logoCon.name&&(a.logo=this.data.logoCon.name);var e=this.data.avaCon.name;(e&&e.indexOf("https://wx.qlogo.cn")>=0||!e||"morenTouxiang.png"==e)&&this.setData({avaCon:{name:this.data.touxiang?this.data.touxiang.avatarurl:l.touxiang.avatarUrl,url:this.data.touxiang?this.data.touxiang.avatarurl:l.touxiang.avatarUrl}}),a.customAvatar=this.data.avaCon.name,a.bpUrl=this.data.currentModel.bpUrl,this.setData({tempLoading:!0}),this.svg(a,(function(e){a.userpic=e.name,t.setData({"currentModel.url":e.url,tempLoading:!1,loading:!1})}),(function(){t.setData({tempLoading:!1,loading:!1}),t.subFail()}))},svgCommonFun:function(){var t=this,a=u.serverFun(this.data.formData,this.data.itemShowConfig,this.data.customShowConfig);this.data.logoCon.name&&(a.logo=this.data.logoCon.name),this.data.bussinessCon.name&&"newmodel_default.jpg"!=this.data.bussinessCon.name&&"default.jpg"!=this.data.bussinessCon.name?a.bpUrl=this.data.bussinessCon.name:this.data.currentModel.bpUrl&&(a.bpUrl=this.data.currentModel.bpUrl),this.setData({tempLoading:!0}),"old-charactor"==this.data.currentModel.sType?this.drawImg(a,(function(a){t.setData({"currentModel.url":a.url,tempLoading:!1,loading:!1})}),(function(){t.setData({tempLoading:!1,loading:!1})})):this.svg(a,(function(a){t.setData({"currentModel.url":a.url,tempLoading:!1,loading:!1})}),(function(){t.setData({tempLoading:!1,loading:!1})}))},svgWebFun:function(){var t=this,e=u.serverFun(this.data.formData,this.data.itemShowConfig,this.data.customShowConfig),i=this.data.bussinessCon.name;this.data.logoCon.name&&(e.logo=this.data.logoCon.name),i&&"newmodel_default.jpg"!=i&&"default.jpg"!=i?e.bpUrl=this.data.bussinessCon.url:this.data.currentModel.bpUrl&&(e.bpUrl=this.data.currentModel.bpUrl.url),this.setData({tempLoading:!0}),console.log("drawWebImgFun",e),e.id=a.id,e.showconfig.webcustom=[],e.tempName=this.data.tempName,e.intro=this.data.introValue,e.desc=this.data.photoList,e.video=this.data.videoList,this.drawWebImgFun(e,(function(a){t.setData({"currentModel.url":a.url,"currentModel.bpUrl":a}),e.userpic=a.userpic,i&&"newmodel_default.jpg"!=i&&"default.jpg"!=i?e.bpUrl=i:t.data.currentModel.bpUrl&&(e.bpUrl=t.data.currentModel.bpUrl.url+t.data.currentModel.bpUrl.name),e.bpUrl&&e.bpUrl.includes(t.data.webBusinessPhtotoName)&&(e.bpUrl=""),t.buildWebCard(e)}),(function(){t.setData({tempLoading:!1,loading:!1})}))},drawWebImgFun:function(t,a){l.setRequest({url:"drawWebImg",method:"POST",data:t},(function(t){a&&a(t)}),(function(t){}))},svgCommonDel:function(t){var a={},e=this.data.customShowConfig,i={};if("custom"==t.detail[0]){var o=t.detail[4].formIndex;if(this.data.formData[o]&&"custom"==this.data.formData[o][0]){for(var s=Object.keys(e),n=this.data.formData.length-o,r=0;r<s.length;r++)i[s[r]]=e[s[r]];i[s[s.length-1]]=!1;for(var d=0;d<=n;d++)i["custom"+(Number(o)+d)]=!1,e["custom"+(Number(o)+d+1)]&&(i["custom"+(Number(o)+d)]=!0);this.setData({customShowConfig:i})}else this.setData({customShowConfig:{}})}else a["itemShowConfig."+t.detail[0]]=!1,this.setData(a);this.svgShuntFun()},svgCommonBlur:function(t){this.svgIfFun(t.detail)&&this.svgShuntFun()},svgIfFun:function(t){return u.svgIfFun(t,this.data.itemShowConfig,this.data.customShowConfig,this.data.currentModel)},addrRender:function(){"addrMatch"==l.temporaryData.edit.enterMark&&(l.temporaryData.edit.enterMark=!1,this.setData({formData:this.data.formData}),this.svgShuntFun(),this.canSaveFun())},avaRender:function(){this.data.avaCon.url&&(this.setData({avaCon:this.data.avaCon}),c&&this.canSaveFun())},logoRender:function(){"logo"==l.temporaryData.edit.enterMark&&(l.temporaryData.edit.enterMark=!1,this.setData({logoCon:this.data.logoCon}),this.svgShuntFun())},businessRender:function(){"business"==l.temporaryData.edit.enterMark&&(l.temporaryData.edit.enterMark=!1,this.setData({bussinessCon:this.data.bussinessCon}),this.svgShuntFun())},paperCardRender:function(){var t={},a="";if("cropCardComplete"==l.temporaryData.edit.enterMark){l.temporaryData.edit.enterMark=!1,t=l.temporaryData.edit.data,a=l.temporaryData.edit.bpUrl,this.setData({"paperData.data":{url:a.url,name:a.name,hengshu:a.hengshu}}),console.log("ocrData",this.data.paperData.data);for(var e=u.baseData().formData,i=0;i<e.length;i++)t[e[i][0]]&&("industry"!=e[i][0]?e[i][2]=t[e[i][0]]:e[i][2]={industry:t.industry,industry_data:t.industry_data},e[i][4].show=1);this.setData({tempType:this.data.paperData.type,currentModel:this.data.paperData,selectModel:this.data.paperData}),this.data.oldTipShow.show&&this.setData({"oldTipShow.show":!1,"oldTipShow.ifCustom":!1}),this.canSaveFun()}},photoPreRender:function(){this.data.photoPre&&(this.data.photoPre=!1,this.setData({photoList:this.data.photoList}))},formRender:function(t){var a=t.detail.data,e=t.detail.type,i=t.detail.indexCon;if("addNotCustom"==e||"delNotCustom"==e||"input"==e||"getPhoneNumber"==e||"addIconStatus"==e||"addIcon"==e)for(var o=0;o<i.length;o++)this.data.formData[i[o]]=a[i[o]];else"addCustom"==e?this.data.formData.push(a[i[0]]):"delCustom"==e?this.data.formData.splice(i[0],1):console.log("没有的类型");this.canSaveFun()},addIndustry:function(t){console.log("暂不更改"),wx.navigateTo({url:"/pages/cardMain/formMinimalistIndustry/formMinimalistIndustry?current="+t.detail.i})},canSaveFun:function(){!this.data.canSave&&this.setData({canSave:!0})},toAddr:function(t){var a=t.detail.currentTarget.dataset.i,e={};0==this.data.formData[a][4].secure&&(this.data.formData[a][4].secure=1,"formData["+a+"][4]",e=this.data.formData[a][4],this.setData(e)),wx.navigateTo({url:"/pages/cardMain/formMinimalistAddr/formMinimalistAddr?current="+a})},avaUpld:function(t){wx.navigateTo({url:"/pages/cardMain/upldTbcardLogo/upldTbcardLogo?imgurl="+t.detail+"&backcolor=white&main=minimalist"})},buildHomepage:function(){this.canSaveFun(),wx.navigateTo({url:"/pages/cardMain/buildHomePage/buildHomePage?id="+a.id+"&detail=add&main=formEditMinimalist"})},upldImage:function(t){console.log("currentType",t.detail.type),"logo"==t.detail.type?wx.navigateTo({url:"/pages/cardMain/cropLogo/cropLogo?src="+t.detail.url+"&type=minimalist"}):"business"==t.detail.type?"old-business"==this.data.currentModel.sType?wx.navigateTo({url:"/pages/cardMain/businessPhotoCrop/businessPhotoCrop?imgurl="+t.detail.url+"&main=minimalist&type=notRectangle"}):wx.navigateTo({url:"/pages/cardMain/businessPhotoCrop/businessPhotoCrop?imgurl="+t.detail.url+"&main=minimalist&type=rectangle"}):"webBusiness"==t.detail.type&&wx.navigateTo({url:"/pages/cardMain/businessPhotoCrop/businessPhotoCrop?imgurl="+t.detail.url+"&main=minimalist&type=webBusiness"})},deleteImage:function(t){"logo"==t.detail?this.setData({logoCon:{}}):"business"==t.detail?this.setData({bussinessCon:{}}):"webBusiness"==t.detail&&this.setData({bussinessCon:{name:this.data.webBusinessPhtotoName,url:this.data.webBusinessPhtotoUrl}}),this.svgShuntFun(),this.canSaveFun()},upldPaper:function(t){var a=t.detail.upldUrl,e=t.detail.tempFilePath;wx.navigateTo({url:"/pages/cardMain/cropCard/cropCard?src="+a.url+"&cutImage="+a.userpic+"&butt=notFirstCamera&main=cardTempEdit&file="+e})},submitInfo:function(t){this.data.submitInfo=t},saveSensorClick:function(){l.burying.setPoint(l,746)},getUserMessa:function(t){if(this.saveSensorClick(),t.detail.iv){l.touxiang=t.detail.userInfo;try{var a=this.data.avaCon.name;(a.indexOf("https://wx.qlogo.cn")>=0||!a||"morenTouxiang.png"==a)&&this.setData({avaCon:{name:l.touxiang.avatarUrl,url:l.touxiang.avatarUrl}})}catch(t){}this.setData({getSettingMessage:!0}),l.setUnion(t.detail);try{wx.setStorageSync("touxiang",{d:t.detail.userInfo})}catch(t){}this.submit(this.data.submitInfo)}},submit:function(){var t=this;if(console.log("点击了提交信息"),this.data.loading)return!1;this.setData({loading:!0,"pageShade.show":!0});var e=this.data.formData,i={};this.data.formData=e,(i=u.serverFun(e,this.data.itemShowConfig,this.data.customShowConfig)).formid="",i.id=a.id,this.data.introValue?i.intro=this.data.introValue.substring(0,200):i.intro="",i.desc=this.data.photoList,i.video=this.data.videoList,i.customAvatar=this.data.avaCon.name,this.data.logoCon.name&&(i.logo=this.data.logoCon.name),this.data.bussinessCon.name?i.bpUrl=this.data.bussinessCon.name:this.data.currentModel.bpUrl&&(i.bpUrl=this.data.currentModel.bpUrl),console.log("serverD",i,this.data.tempType),this.data.tempType==d.default.minimalist?this.svg(i,(function(a){i.userpic=a.name,t.buildCard(i)}),(function(){t.subFail()})):this.data.tempType==d.default.common?"old-charactor"==this.data.currentModel.sType?this.drawImg(i,(function(a){i.userpic=a.userpic,t.buildCard(i)}),(function(){t.subFail()})):this.svg(i,(function(a){i.userpic=a.name,t.buildCard(i)}),(function(){t.subFail()})):this.data.tempType==d.default.paper?(i.userpic=this.data.paperData.data.name,i.hengshu="shu",this.buildCard(i)):this.data.tempType==d.default.webBussinessPhoto&&(i.bpUrl.includes(this.data.webBusinessPhtotoName)&&(i.bpUrl=""),this.buildWebCard(i)),l.gioCustome({t:"formEditMinimalist.001"})},drawImg:function(t,a,e){var i=t;i.tempId=this.data.currentModel.name,l.setRequest({url:"drawImg",method:"POST",data:{id:i.tempId,name:i.name,company:i.company,job:i.job,mophone1:i.mophone1,email1:i.email1,phone1:i.phone1,addr1:i.addr1,logo:i.logo}},(function(t){a&&a(t)}),(function(){e&&e()}))},svg:function(t,a,e){var i=t;i.tempId=this.data.currentModel.name,l.setRequest({url:"drawSvg",method:"POST",data:i},(function(t){a&&a(t)}),(function(){e&&e()}))},buildWebCard:function(t,a,e){var i=this;console.log("buildWebCard serverD",t),l.setRequest({method:"PUT",url:"webCardUpdate",data:t},(function(){var t=null;clearTimeout(t),t=setTimeout((function(){i.subSuccess()}),2e3),a&&a(res)}),(function(){i.subFail()}))},buildCard:function(t,a){var e=this;console.log(" buildCard serverD",t);l.setRequest({url:"createCard",method:"PUT",data:t},(function(t){var i=null;clearTimeout(i),i=setTimeout((function(){e.subSuccess()}),2e3),a&&a(t)}),(function(t){e.subFail()}))},subSuccess:function(){var t;this.setData((t={loading:!1,tempLoading:!1},(0,i.default)(t,"loading",!1),(0,i.default)(t,"pageShade.show",!1),(0,i.default)(t,"switchModel.show",!1),(0,i.default)(t,"cardUpld.show",!1),(0,i.default)(t,"bussinessCon",{}),t)),this.getcloseTopTip(),l.refreshCardStatus=!0,this.onShow()},subFail:function(){h.showtoast("保存失败，请稍后重试","none",2e3),this.setData({loading:!1,"pageShade.show":!1,formData:this.data.formData})},industryRender:function(){if("industryMark"==l.temporaryData.edit.enterMark){l.temporaryData.edit.enterMark=!1;var t=this.data.formData.findIndex((function(t){return"industry"==t[0]}));this.data.formData[t][2]={industry:l.temporaryData.edit.industryData.industry,industry_data:l.temporaryData.edit.industryData.industry_data},this.setData({formData:this.data.formData}),this.canSaveFun(),console.log("渲染里的",this.data)}},changeCardTem:function(){"howEnter"==t.main?l.burying.setPoint(l,877):l.burying.setPoint(l,742),console.log("弹出选模板"),this.setData({"switchModel.show":!0,"cardUpld.show":!0,mainshowTopTip:!1}),this.setCloseTopTop()},tolookhomepages:function(){var t=this.data.singleData;wx.navigateTo({url:"/pages/cardMain/homePage/homePage?id="+t.id+"&detail=previewCard&st=lookSelf&ctype=self"})},toLookHomePage:function(){var t=this.data.singleData;wx.navigateTo({url:"/pages/cardMain/homePage/homePage?id="+t.id+"&detail=previewCard&st=lookSelf&ctype=self"})},cardEdit:function(){var t=this.data.singleData;"WebTemp"==t.modelIndex.type||(l.temporaryData.edit.data=t),this.setCloseTopTop(),this.toWebview(t)},toWebview:function(a){console.log(a.modelIndex.type),"WebTemp"==a.modelIndex.type?("howEnter"==t.main?l.burying.setPoint(l,878):l.burying.setPoint(l,743),wx.navigateTo({url:"/pages/cardMain/webcardEdit/webcardEdit?id=".concat(a.id,"&formtoken=").concat(a.formtoken,"&main=").concat(t.main)})):("howEnter"==t.main?l.burying.setPoint(l,878):l.burying.setPoint(l,741),this._customAvatarSolve(a),wx.navigateTo({url:"/pages/mainPage/cardMain/cardFormEdit/cardFormEdit?id=".concat(a.id,"&formtoken=").concat(a.formtoken,"&main=").concat(t.main,"&edit=true")}))},_customAvatarSolve:function(t){!t.customAvatar.name&&this.data.touxiang&&this.data.touxiang.avatarurl&&(t.customAvatar.name=this.data.touxiang.avatarurl,t.customAvatar.url=this.data.touxiang.avatarurl,l.temporaryData.edit.data.customAvatar=t.customAvatar)},touxiangGetFun:function(t){this.setData({touxiang:t.detail}),l.touxiang.avatarUrl&&(l.touxiang.avatarUrl=this.data.touxiang.avatarurl)},closeTopTip:function(){l.burying.setPoint(l,802);try{wx.setStorageSync("mainshowTopTip",!1),this.setData({mainshowTopTip:!1})}catch(t){}},getcloseTopTip:function(){var a=wx.getStorageSync("mainshowTopTip"),e=void 0;!1===a?e=!1:"clickSelf"==t.type&&1==a?(l.burying.setSensorEvent(l,{PromptType:"自己名片落地页浮条提示"},"AddToMyMiniProgramMaskShow"),e=!0):e=!1,this.setData({mainshowTopTip:e})},setCloseTopTop:function(){var a=wx.getStorageSync("mainshowTopTip");"clickSelf"==t.type&&!1!==a&&wx.setStorageSync("mainshowTopTip",!0)},getcloseTeamTip:function(){var t=void 0;t=!wx.getStorageSync("teamshowTopTip"),this.setData({teamshowTopTip:t})},closeTeamTip:function(){try{wx.setStorageSync("teamshowTopTip",!0),this.setData({teamshowTopTip:!1})}catch(t){}},sensorShare:function(){l.burying.setPoint(l,879)},ss:function(){},home:function(){},showUploadActionsheetFunc:function(){l.burying.setPoint(l,1015),this.webBussinessUpld()},deleteUpldImage:function(){var t=this;h.newDeletemodal("删除已上传的商务照?",(function(){l.burying.setPoint(l,1020),t.deleteImage({detail:"webBusiness"})}),"","确认删除")},webBussinessUpld:function(){var t=this.data.selectModel.bpUrl.name,a=this.data.webBusinessPhtotoName,e=this.data.oldBusinessPhoto,i=t&&t!=a&&t!=e?[{text:"拍照",color:"#000"},{text:"从手机相册选择",color:"#000"},{text:"删除照片",color:"#FF3B2F"}]:[{text:"拍照",color:"#000"},{text:"从手机相册选择",color:"#000"}];this.setData({sheetList:i,showActionsheet:!0})},itemTap:function(t){var a=this,e=t.detail.miniDataset.i;switch(this.setData({showActionsheet:!1}),e){case 0:i("camera"),l.burying.setPoint(l,1016);break;case 1:l.burying.setPoint(l,1017),i("album");break;case 2:l.burying.setPoint(l,1018),a.deleteUpldImage()}function i(t){wx.chooseImage({count:1,sourceType:[t],sizeType:["compressed"],success:function(t){var e={type:"webBusiness",url:t.tempFilePaths[0]};a.upldImage({detail:e})}})}},backgroundTap:function(t){console.log(t),this.setData({showActionsheet:!1})},cancel:function(t){this.setData({showActionsheet:!1}),console.log(t)},onShareAppMessage:function(a){var e=a.target&&a.target.dataset.mark;if(console.log("shareType",e),"企业添加新成员"==e){var i,o;return o=this.data.enterprisesData,i=l.source.shareClaimfilling+encodeURIComponent(o.entName),h.shareAppMessa({title:"邀请你加入企业，一起使用电子名片",path:"pages/companyManage/inviteBindingWechat/inviteBindingWechat?scene=".concat(t.deptId),imageUrl:i})}if(this.data.singleData){l.burying.setSensorEvent(l,{CardType:l.getCardType(this.data.singleData).cardType},"BusinessCardLinkSend");var s,n;return n=l.getShareCardImgUrl(this.data.singleData),s=l.getShareTitle(this.data.singleData),h.shareAppMessa({title:s,path:"pages/cardAll/howEnter/howEnter?id="+this.data.singleData.id+"&shareOthers=1&shareType=01&formtoken="+this.data.singleData.formtoken,imageUrl:n})}return h.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=cardMain&shareType=05",imageUrl:l.source.shareImage})}}); 
 			}); 	require("pages/mainPage/cardMain/cardTempEdit/cardTempEdit.js");
 		__wxRoute = 'pages/mainPage/cardMain/cardFormBuild/cardFormBuild';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mainPage/cardMain/cardFormBuild/cardFormBuild.js';	define("pages/mainPage/cardMain/cardFormBuild/cardFormBuild.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a,e=require("../../../../@babel/runtime/helpers/interopRequireDefault"),i=e(require("../../../../@babel/runtime/helpers/typeof")),n=require("../../../../BD93AC350691379CDBF5C4320700E9B3.js"),s=e(require("../2E36F5A70691379C48509DA03F11E9B3.js")),o=e(require("../1B3301E60691379C7D5569E19301E9B3.js")),r=e(require("../710CB4770691379C176ADC7051F0E9B3.js")),d=require("../../../../7931C4950691379C1F57AC929AD2E9B3.js"),u=new n.EditMini,c=getApp(),h=require("../../../../7931C4950691379C1F57AC929AD2E9B3.js"),l="";Page({data:{formData:u.baseData().formData,tempType:u.baseData().tempType,minimalistModel:s.default,commonModel:o.default,systemInfo:c.systemInfo,switchModel:{show:!1},pageShade:{show:!1},loading:!1,avaCon:{},logoCon:{},bussinessCon:{},currentModel:o.default.getchooseTempData("TKWhite-NewEmpty"),nameFocus:!1,getSettingMessage:!1,fisrtEnterShow:!1,anonymous:c.source.anonymous,paperData:{name:"customPaper",type:r.default.paper},itemShowConfig:u.baseData().itemShowConfig,customShowConfig:{},introValue:"",videoList:[],photoList:[],condition:!0,buttonTitle:"",topTitle:"",pageFrom:"",topType:"buildCard",dropList:{necess:!0,unnecess:!0,intro:!1,video:!1,bussiness:!1},showSendGuide:!1,sendBack:!1,buildFinish:!1,isTop:!0,openGid:"",userMaxCardNum:c.userMaxCardNum},onLoad:function(a){console.log("页面加载",a,(0,i.default)(a.isSaoma)),t=a,"true"===a.isSaoma&&this.setData({isSaoma:!0}),"cardMain"===a.main||"search"===a.main||"cardMy"===a.main||"cardWall"===a.main||"howEnter"==a.main&&a.openGid||"cardsFolder"===a.main||"stickCard"===a.main?this.setData({topTitle:"制作电子名片",buttonTitle:"完成制作","dropList.intro":!0,"dropList.video":!0,"dropList.bussiness":!0}):"howEnter"!=a.main||a.openGid?this.setData({buttonTitle:"生成我的名片"}):this.setData({buttonTitle:"确认信息"}),console.log(this.data.isSaoma,"是否是扫码"),this.huancunRender(),this.getUserSetting(),this.mycardFun(),this.settopType(),c.compatibleManage.shareMenu&&wx.hideShareMenu()},onShow:function(){this.setData({pageOrigin:t.origin||"",pageFrom:t.main,sender:t.sender||"",openGid:t.openGid||""}),this.getSenderImgUrl(),this.addrRender(),this.avaRender(),this.paperCardRender(),this.logoRender(),this.businessRender(),this.industryRender(),this.returnHome()},settopType:function(){var t="";t="1053"==c.gloabelOptions.scene||"1035"==c.gloabelOptions.scene?"home":"prePage",this.setData({topType:t})},_showChangeTost:function(){c.burying.setSensorEvent(c,{PopupPromptTrigger:"私聊落地页名片制作完成",PopupPromptMainButton:"立即回发"},"PopupPromptShow"),c.burying.setPoint(c,791),h.showtoast("名片交换成功","success",1e3),setTimeout((function(){wx.switchTab({url:"/pages/cardMain/cardMain"})}),1e3)},returnHome:function(){if(this.data.sendBack){try{wx.setStorageSync("FirstInFromHowenter",!0)}catch(t){}wx.switchTab({url:"/pages/cardMain/cardMain"})}},toHome:function(){this.setData({sendBack:!0}),this.returnHome()},getUserSetting:function(){var t=this;c.getSettingMessage((function(a){t.setData({getSettingMessage:a.u})}))},mycardFun:function(){var t=this;c.ifFresh.mycard?c.setRequest({url:"mycard"},(function(a){a.list.length>=t.data.userMaxCardNum&&wx.switchTab({url:"/pages/cardMain/cardMain"})})):c.mycard.list.length>=this.data.userMaxCardNum&&wx.switchTab({url:"/pages/cardMain/cardMain"})},industryAbtest:function(t){t.findIndex((function(t){return"industry"==t[0]}));return t},huancunRender:function(){try{var t=wx.getStorageSync("minimalFormData");if(t){for(var a=0;a<t.length;a++)0==t[a][4].secure&&(t[a][4].secure=1),1==t[a][4].placeholder&&(t[a][4].placeholder=0);this.setData({formData:this.industryAbtest(t)})}else this.setData({formData:this.industryAbtest(this.data.formData)})}catch(t){}},industryRender:function(){if("industryMark"==c.temporaryData.edit.enterMark){l=c.temporaryData.edit.industryData.industry,a=c.temporaryData.edit.industryData.industry_data,c.temporaryData.edit.enterMark=!1;var t=this.data.formData.findIndex((function(t){return"industry"==t[0]}));this.data.formData[t][2]={industry:c.temporaryData.edit.industryData.industry,industry_data:c.temporaryData.edit.industryData.industry_data},this.setData({formData:this.data.formData})}},setHuancun:function(){try{wx.setStorageSync("minimalFormData",this.data.formData)}catch(t){}},removeHuancun:function(){try{wx.removeStorageSync("minimalFormData")}catch(t){}c.temporaryData.edit.industryData.industry=[],c.temporaryData.edit.industryData.industry_data=[],l=""},switchModelFun:function(){this.setData({"switchModel.show":!0,selectModel:this.data.currentModel,formData:this.data.formData})},switchClose:function(t){this.setData({"switchModel.show":!1})},modelChange:function(t){var a=!1;switch(t.detail.type){case"common":a=!0}this.setData({tempLoading:a,currentModel:t.detail,tempType:t.detail.type}),this.svgShuntFun()},svgShuntFun:function(){"common"==this.data.tempType&&this.svgCommonFun()},svgCommonFun:function(){var t=this,a=u.serverFun(this.data.formData,this.data.itemShowConfig,this.data.customShowConfig);this.data.logoCon.name&&(a.logo=this.data.logoCon.name),this.data.bussinessCon.name?a.bpUrl=this.data.bussinessCon.name:this.data.currentModel.bpUrl&&(a.bpUrl=this.data.currentModel.bpUrl),this.setData({tempLoading:!0}),this.svg(a,(function(a){t.setData({"currentModel.url":a.url,tempLoading:!1})}),(function(){t.setData({tempLoading:!1})}))},svgCommonDel:function(t){var a={},e=this.data.customShowConfig,i={};if("custom"==t.detail[0]){var n=t.detail[4].formIndex;if(this.data.formData[n]&&"custom"==this.data.formData[n][0]){for(var s=Object.keys(e),o=this.data.formData.length-n,r=0;r<s.length;r++)i[s[r]]=e[s[r]];i[s[s.length-1]]=!1;for(var d=0;d<=o;d++)i["custom"+(Number(n)+d)]=!1,e["custom"+(Number(n)+d+1)]&&(i["custom"+(Number(n)+d)]=!0);this.setData({customShowConfig:i})}else this.setData({customShowConfig:{}})}else a["itemShowConfig."+t.detail[0]]=!1,this.setData(a);this.svgShuntFun()},svgCommonBlur:function(t){this.svgIfFun(t.detail)&&this.svgShuntFun()},svgIfFun:function(t){return u.svgIfFun(t,this.data.itemShowConfig,this.data.customShowConfig)},addrRender:function(){"addrMatch"==c.temporaryData.edit.enterMark&&(c.temporaryData.edit.enterMark=!1,this.setData({formData:this.data.formData}),this.svgShuntFun(),this.setHuancun())},avaRender:function(){this.data.avaCon.url&&this.setData({avaCon:this.data.avaCon})},logoRender:function(){"logo"==c.temporaryData.edit.enterMark&&(c.temporaryData.edit.enterMark=!1,this.setData({logoCon:this.data.logoCon}),this.svgShuntFun())},businessRender:function(){"business"==c.temporaryData.edit.enterMark&&(c.temporaryData.edit.enterMark=!1,this.setData({bussinessCon:this.data.bussinessCon}),this.svgShuntFun())},paperCardRender:function(){var t={};if("cropCardComplete"==c.temporaryData.edit.enterMark){c.temporaryData.edit.enterMark=!1,t=c.temporaryData.edit.data,this.setData({"paperData.data":{url:t.userpic.url,name:t.userpic.name,hengshu:t.hengshu}});for(var a=u.baseData().formData,e=0;e<a.length;e++)t[a[e][0]]&&(a[e][2]=t[a[e][0]],a[e][4].show=1);this.setData({formData:a}),this.setData({tempType:this.data.paperData.type,currentModel:this.data.paperData,selectModel:this.data.paperData})}},formRender:function(t){var a=t.detail.data,e=t.detail.type,i=t.detail.indexCon;if("addNotCustom"==e||"delNotCustom"==e||"input"==e||"getPhoneNumber"==e||"addIconStatus"==e||"addIcon"==e)for(var n=0;n<i.length;n++)this.data.formData[i[n]]=a[i[n]];else"addCustom"==e?this.data.formData.push(a[i[0]]):"delCustom"==e?this.data.formData.splice(i[0],1):console.log("没有的类型");this.setHuancun()},addIndustry:function(t){console.log(l,a,this.data.temporaryDataFormData,"落地页添加行业信息"),this.data.temporaryDataFormData={},l.length<=0?(this.data.temporaryDataFormData.industry="",this.data.temporaryDataFormData.industry_data=[]):(this.data.temporaryDataFormData.industry=l.split(","),this.data.temporaryDataFormData.industry_data=a),wx.navigateTo({url:"/pages/cardMain/formMinimalistIndustry/formMinimalistIndustry?current="+t.detail.i})},toAddr:function(t){var a=t.detail.currentTarget.dataset.i,e={};0==this.data.formData[a][4].secure&&(this.data.formData[a][4].secure=1,"formData["+a+"][4]",e=this.data.formData[a][4],this.setData(e)),wx.navigateTo({url:"/pages/cardMain/formMinimalistAddr/formMinimalistAddr?current="+a})},avaUpld:function(t){wx.navigateTo({url:"/pages/cardMain/upldTbcardLogo/upldTbcardLogo?imgurl="+t.detail+"&backcolor=white&main=minimalist"})},configClick:function(t){var a=u.configAdjuest(this.data.itemShowConfig,this.data.customShowConfig),e=t.detail.n,i=this.data.itemShowConfig[t.detail.n],n=this.data.customShowConfig[t.detail.n+t.detail.i],s={};"custom"!=e&&(a||i&&!a)&&(s["itemShowConfig."+t.detail.n]=!i,this.setData(s),this.svgShuntFun()),"custom"==e&&(a||n&&!a)&&(s["customShowConfig."+t.detail.n+t.detail.i]=!n,this.setData(s),this.svgShuntFun())},submitInfo:function(t){this.data.submitInfo=t},getUserMessa:function(t){t.detail.iv&&(this.setData({getSettingMessage:!0}),c.setUnion(t.detail),this.submit(this.data.submitInfo))},submit:function(t){var a=this;if(this.data.loading)return!1;c.burying.setPoint(c,174);var e,i=this.data.formData,n={},s=!0;i[0][2]||(!c.touxiang.nickName||this.data.tempType!=r.default.minimalist&&this.data.tempType!=r.default.common?this.data.nameFocus=!0:i[0][2]=c.touxiang.nickName);for(var o=0;o<i.length;o++)i[o][4].must&&!i[o][2]&&(s=!1,i[o][4].placeholder=1);if(this.data.formData=i,this.setData({nameFocus:this.data.nameFocus}),e=u.testFun(i,this.data.introValue),n=u.serverFun(i,this.data.itemShowConfig,this.data.customShowConfig),this.data.introValue?n.intro=this.data.introValue.substring(0,200):n.intro="",n.desc=this.data.photoList,n.video=this.data.videoList,console.log("serverD",n),!s)return this.setData({formData:i}),!1;this.setData({loading:!0,"pageShade.show":!0}),this.data.avaCon.name?n.customAvatar=this.data.avaCon.name:c.touxiang.avatarUrl?n.customAvatar=c.touxiang.avatarUrl:n.customAvatar=u.baseData().avaDefaultName,this.data.logoCon.name&&(n.logo=this.data.logoCon.name),this.data.bussinessCon.name?n.bpUrl=this.data.bussinessCon.name:this.data.currentModel.bpUrl&&(n.bpUrl=this.data.currentModel.bpUrl),n.createCardType="formCreate",c.contentTestFun(e,(function(t){if(t.allwords<=0)a.data.tempType==r.default.minimalist||a.data.tempType==r.default.common?a.svg(n,(function(t){n.userpic=t.name,a.buildCard(n)}),(function(){a.subFail()})):a.data.tempType==r.default.paper&&(n.userpic=a.data.paperData.data.name,a.buildCard(n));else{for(var e=t.errorArr,s=!1,o=0;o<e.length;o++)e[o]<i.length?i[e[o]][4].secure=0:e[o]==i.length&&(s=!0);console.log("formN",i),h.testShowmodal(),a.setData({formData:i,loading:!1,introTest:s,"pageShade.show":!1})}}))},svg:function(t,a,e){var i=t;i.tempId=this.data.currentModel.name,c.setRequest({url:"drawSvg",method:"POST",data:i},(function(t){a&&a(t)}),(function(){e&&e()}))},buildCard:function(a){var e=this;c.setRequest({url:"createCard",method:"POST",data:a},(function(i){t.openGid?e.defaultAddSendUserGroup(i.id,(function(t){try{wx.setStorageSync("totalCount",t.totalCount)}catch(t){}e.subSuccess(t.userpic,t.id,a)})):e.subSuccess(i.userpic,i.id,a)}),(function(t){e.subFail()}))},defaultAddSendUserGroup:function(a,e){console.log("调用默认加入墙接口"),c.setRequest({url:"activeAddGroup",method:"POST",data:{openGid:t.openGid,cid:a}},(function(t){e&&e(t)}),(function(){e&&e()}))},subSuccess:function(a,e,i){var n=this;if(this.removeHuancun(),console.log("options",t,a,e,i),"howEnter"==t.main)t.openGid?(c.finishBuildFromStickCard=!0,wx.navigateTo({url:"/pages/cardWall/stickCard/stickCard?main=howEnter&cid=".concat(t.cid,"&formtoken=").concat(t.formtoken,"&time=").concat(h.addLogTime(),"&isSelf=").concat(t.isSelf,"&isDel=").concat(t.isDel,"&id=none&openGid=").concat(t.openGid)})):(this.sortFun(e),c.setRequest({url:"mycard"},(function(t){c.compatibleManage.shareMenu&&wx.showShareMenu({withShareTicket:!0}),c.mycard=t,wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"}),n.setData({isTop:!1,showSendGuide:!0,sendBack:!0,buildFinish:!0})})));else if(this.setData({loading:!1,"pageShade.show":!1}),console.log(t,"参数是"),"cardWall"==t.main){h.showtoast("名片制作完成","success",2e3);var s=null;clearTimeout(s),s=setTimeout((function(){wx.navigateBack({delta:1})}),2e3)}else if("cardsFolder"==t.main){h.showtoast("名片制作成功","success",2e3);var o=null;clearTimeout(o),o=setTimeout((function(){wx.switchTab({url:"/pages/cardMain/cardMain"})}),2e3)}else if("stickCard"==t.main)c.finishBuildFromStickCard=!0,wx.navigateBack({delta:1});else{var r,d;try{d=wx.getStorageSync("showCardMainShadHc")}catch(t){}console.log("showCardMainShadHc值是",d),r=d?"":"cardShade",this.setData({topType:"buildCard"});try{wx.setStorageSync("showCardMainShadHc",r)}catch(t){}wx.switchTab({url:"/pages/cardMain/cardMain"}),c.buildCardClick=!0}},subFail:function(){h.showtoast("保存失败，请稍后重试","none",2e3),this.setData({loading:!1,"pageShade.show":!1,formData:this.data.formData,tempLoading:!1})},sortFun:function(a){var e=getCurrentPages();if(e.length>1){var i=e[e.length-2].route;e[e.length-2].data;"pages/cardAll/howEnter/howEnter"==i&&("true"==t.intransitIf||"ishowenter"!=t.pageOrigin&&this.autoExchange(a,t.fromOpenid))}},autoExchange:function(t,a){c.setRequest({url:"returnCard",method:"POST",data:{id:t,othersOpenid:a}}),c.rsListObj.ifFresh=!0},ss:function(){},nameFocusFun:function(){this.setData({nameFocus:!0})},upldImage:function(t){"logo"==t.detail.type?wx.navigateTo({url:"/pages/cardMain/cropLogo/cropLogo?src="+t.detail.url+"&type=minimalist"}):"business"==t.detail.type&&("old-business"==this.data.currentModel.sType?wx.navigateTo({url:"/pages/cardMain/businessPhotoCrop/businessPhotoCrop?imgurl="+t.detail.url+"&main=minimalist&type=notRectangle"}):wx.navigateTo({url:"/pages/cardMain/businessPhotoCrop/businessPhotoCrop?imgurl="+t.detail.url+"&main=minimalist&type=rectangle"}))},deleteImage:function(t){"logo"==t.detail?this.setData({logoCon:{}}):"business"==t.detail&&this.setData({bussinessCon:{}}),this.svgShuntFun()},introFun:function(t){this.data.introTest&&this.setData({introTest:!1}),this.setData({introValue:t.detail}),console.log("introValue",this.data.introValue)},videoFun:function(t){this.setData({videoList:t.detail})},photoFun:function(t){this.setData({photoList:t.detail})},previewPhoto:function(t){wx.navigateTo({url:"/pages/cardMain//pages/cardMain/customePages/imagesShowMinimalist/imagesShowMinimalist?currentindex="+t.detail+"&main=formEditMinimalist"})},confirmEvent:function(){c.burying.setPoint(c,683)},cancelFunc:function(){c.burying.setPoint(c,682),wx.navigateBack({delta:1})},buildBack:function(){if("howEnter"==t.main&&"ishowenter"!=t.origin){c.burying.setSensorEvent(c,{PopupPromptTrigger:"制作我的名片页面点击返回",PopupPromptMainButton:"我想拥有"},"PopupPromptShow");this.selectComponent("#dialog").show({content:{text:"不想拥有自己的电子名片？",style:"color:#000;font-size:36rpx;max-width:322rpx;"},cancel:{text:"不想拥有",style:"color:#666666;"},confirm:{text:"我想拥有",style:"color:#3F51B5;font-weight:bold;"},showCancel:!0,swap:!1,showModal:!0})}else wx.navigateBack({delta:1})},dropFunc:function(t){var a=t.currentTarget.dataset.type||t.detail&&t.detail.currentTarget.dataset.type;if(this.data.dropList[a])switch(a){case"intro":c.burying.setPoint(c,788);break;case"video":c.burying.setPoint(c,789)}else switch(a){case"intro":c.burying.setPoint(c,786);break;case"video":c.burying.setPoint(c,787)}this.data.dropList[a]=!this.data.dropList[a],this.setData({dropList:this.data.dropList}),console.log(this.data.dropList)},getSenderImgUrl:function(){this.setData({senderAvator:wx.getStorageSync("senderAvator").avatarurl?wx.getStorageSync("senderAvator").avatarurl:"",nickName:wx.getStorageSync("senderAvator").nickname})},_shareButtonClick:function(){c.burying.setPoint(c,791),c.burying.setSensorEvent(c,{PopupPromptTrigger:"私聊落地页名片制作完成",PopupPromptMainButton:"立即回发"},"PopupPromptShow")},onPageScroll:function(t){(0,d.changeTabarBg)(this,t);var a=null;clearTimeout(a),a=setTimeout((function(){wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#000000"})}))},onShareAppMessage:function(){if(c.mycard.defCard&&c.mycard.defCard.id){var t,a;(new Date).getTime();return t=c.getShareCardImgUrl(c.mycard.defCard),a=c.getShareTitle(c.mycard.defCard),c.burying.setSensorEvent(c,{CardType:c.getCardType(c.mycard.defCard).cardType},"BusinessCardLinkSend"),h.shareAppMessa({title:a,path:"pages/cardAll/howEnter/howEnter?id="+c.mycard.defCard.id+"&formtoken="+c.mycard.defCard.formtoken+"&shareOthers=1&shareType=01",imageUrl:t})}return h.shareAppMessa({title:"我向您推荐“递名片”",path:"pages/cardMy/about/about?shareOthers=cardMain&shareType=05",imageUrl:c.source.shareImage})}}); 
 			}); 	require("pages/mainPage/cardMain/cardFormBuild/cardFormBuild.js");
 	