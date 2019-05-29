var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
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

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
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
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6f7d61c4'])
Z([3,'_view 6f7d61c4'])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
Z([a,[3,'_view 6f7d61c4 cu-bar fixed '],[[4],[[5],[[5],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]]])
Z([a,[3,' '],[[7],[3,'style']]])
Z([[7],[3,'isBack']])
Z([3,'handleProxy'])
Z([3,'_view 6f7d61c4 action'])
Z([[7],[3,'$k']])
Z([1,'6f7d61c4-0'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotbackText']],[1,'backText']])
Z(z[12])
Z([[2,'||'],[[7],[3,'$slotcontent']],[1,'content']])
Z(z[12])
Z([[2,'||'],[[7],[3,'$slotright']],[1,'right']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'75858236-default-75858236-0'])
Z([3,'75858236-backText-75858236-0'])
Z([3,'75858236-content-75858236-0'])
Z([3,'1b5f138c-default-1b5f138c-0'])
Z([3,'1b5f138c-backText-1b5f138c-0'])
Z([3,'1b5f138c-content-1b5f138c-0'])
Z([3,'72af1f39-default-72af1f39-0'])
Z([3,'72af1f39-backText-72af1f39-0'])
Z([3,'72af1f39-content-72af1f39-0'])
Z([3,'72aa1685-default-72aa1685-0'])
Z([3,'72aa1685-backText-72aa1685-0'])
Z([3,'72aa1685-content-72aa1685-0'])
Z([3,'658cae3e-default-658cae3e-0'])
Z([3,'658cae3e-backText-658cae3e-0'])
Z([3,'658cae3e-content-658cae3e-0'])
Z([3,'681448ca-default-681448ca-0'])
Z([3,'681448ca-backText-681448ca-0'])
Z([3,'681448ca-content-681448ca-0'])
Z([3,'353f740e-default-353f740e-0'])
Z([3,'353f740e-backText-353f740e-0'])
Z([3,'353f740e-content-353f740e-0'])
Z([3,'63dd4865-default-63dd4865-0'])
Z([3,'63dd4865-backText-63dd4865-0'])
Z([3,'63dd4865-content-63dd4865-0'])
Z([3,'3b79b639-default-3b79b639-0'])
Z([3,'3b79b639-backText-3b79b639-0'])
Z([3,'3b79b639-content-3b79b639-0'])
Z([3,'fc61ffa8-default-fc61ffa8-0'])
Z([3,'fc61ffa8-backText-fc61ffa8-0'])
Z([3,'fc61ffa8-content-fc61ffa8-0'])
Z([3,'51b73bb0-default-51b73bb0-0'])
Z([3,'51b73bb0-backText-51b73bb0-0'])
Z([3,'51b73bb0-content-51b73bb0-0'])
Z([3,'51b73bb0-right-51b73bb0-0'])
Z([3,'72a9ceeb-default-72a9ceeb-0'])
Z([3,'72a9ceeb-content-72a9ceeb-0'])
Z([3,'1918e7c3-default-1918e7c3-0'])
Z([3,'1918e7c3-backText-1918e7c3-0'])
Z([3,'1918e7c3-content-1918e7c3-0'])
Z([3,'191914d3-default-191914d3-0'])
Z([3,'191914d3-backText-191914d3-0'])
Z([3,'191914d3-content-191914d3-0'])
Z([3,'0a08baee-default-0a08baee-0'])
Z([3,'0a08baee-backText-0a08baee-0'])
Z([3,'0a08baee-content-0a08baee-0'])
Z([3,'0a048560-default-0a048560-0'])
Z([3,'0a048560-backText-0a048560-0'])
Z([3,'0a048560-content-0a048560-0'])
Z([3,'0a061714-default-0a061714-0'])
Z([3,'0a061714-backText-0a061714-0'])
Z([3,'0a061714-content-0a061714-0'])
Z([3,'44613691-default-44613691-0'])
Z([3,'44613691-backText-44613691-0'])
Z([3,'44613691-content-44613691-0'])
Z([3,'0a049da8-default-0a049da8-0'])
Z([3,'0a049da8-backText-0a049da8-0'])
Z([3,'0a049da8-content-0a049da8-0'])
Z([3,'910f4270-default-910f4270-0'])
Z([3,'910f4270-backText-910f4270-0'])
Z([3,'910f4270-content-910f4270-0'])
Z([3,'371f3a5d-default-371f3a5d-0'])
Z([3,'371f3a5d-backText-371f3a5d-0'])
Z([3,'371f3a5d-content-371f3a5d-0'])
Z([3,'377612d7-default-377612d7-0'])
Z([3,'377612d7-backText-377612d7-0'])
Z([3,'377612d7-content-377612d7-0'])
Z([3,'053952a2-default-053952a2-0'])
Z([3,'053952a2-backText-053952a2-0'])
Z([3,'053952a2-content-053952a2-0'])
Z([3,'0ef444a6-default-0ef444a6-0'])
Z([3,'0ef444a6-backText-0ef444a6-0'])
Z([3,'0ef444a6-content-0ef444a6-0'])
Z([3,'7bfb330f-default-7bfb330f-0'])
Z([3,'7bfb330f-backText-7bfb330f-0'])
Z([3,'7bfb330f-content-7bfb330f-0'])
Z([3,'5a70ee8f-default-5a70ee8f-0'])
Z([3,'5a70ee8f-backText-5a70ee8f-0'])
Z([3,'5a70ee8f-content-5a70ee8f-0'])
Z([3,'b811c306-default-b811c306-0'])
Z([3,'b811c306-content-b811c306-0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'63dd4865'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'63dd4865-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'63dd4865-default-63dd4865-0']]],[[8],'$slotbackText',[1,'63dd4865-backText-63dd4865-0']]],[[8],'$slotcontent',[1,'63dd4865-content-63dd4865-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'63dd4865'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1b5f138c'])
Z([3,'_view 1b5f138c'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1b5f138c-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'1b5f138c-default-1b5f138c-0']]],[[8],'$slotbackText',[1,'1b5f138c-backText-1b5f138c-0']]],[[8],'$slotcontent',[1,'1b5f138c-content-1b5f138c-0']]])
Z([3,'6f7d61c4'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'<'],[[7],[3,'index']],[1,12]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1b5f138c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'658cae3e'])
Z([3,'_view 658cae3e'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'658cae3e-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'658cae3e-default-658cae3e-0']]],[[8],'$slotbackText',[1,'658cae3e-backText-658cae3e-0']]],[[8],'$slotcontent',[1,'658cae3e-content-658cae3e-0']]])
Z([3,'6f7d61c4'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'658cae3e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'681448ca'])
Z([3,'_view 681448ca'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'681448ca-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'681448ca-default-681448ca-0']]],[[8],'$slotbackText',[1,'681448ca-backText-681448ca-0']]],[[8],'$slotcontent',[1,'681448ca-content-681448ca-0']]])
Z([3,'6f7d61c4'])
Z([[7],[3,'color']])
Z([[7],[3,'border']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[7])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'681448ca'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'72a9ceeb'])
Z([3,'_scroll-view 72a9ceeb page'])
Z([3,'https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'])
Z([[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'72a9ceeb-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'72a9ceeb-default-72a9ceeb-0']]],[[8],'$slotcontent',[1,'72a9ceeb-content-72a9ceeb-0']]])
Z([3,'6f7d61c4'])
Z([3,'handleProxy'])
Z(z[5])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'72a9ceeb-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'72a9ceeb-1'])
Z([3,'62e90413'])
Z([3,'mpvuePicker'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'72aa1685'])
Z([3,'_view 72aa1685'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'72aa1685-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'72aa1685-default-72aa1685-0']]],[[8],'$slotbackText',[1,'72aa1685-backText-72aa1685-0']]],[[8],'$slotcontent',[1,'72aa1685-content-72aa1685-0']]])
Z([3,'6f7d61c4'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'icon']])
Z(z[5])
Z([[6],[[7],[3,'item']],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'72aa1685'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'75858236'])
Z([3,'_view 75858236'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'75858236-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'75858236-default-75858236-0']]],[[8],'$slotbackText',[1,'75858236-backText-75858236-0']]],[[8],'$slotcontent',[1,'75858236-content-75858236-0']]])
Z([3,'6f7d61c4'])
Z([[2,'=='],[[7],[3,'TabCur']],[1,0]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,1]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'75858236'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'51b73bb0'])
Z([3,'_view 51b73bb0'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'51b73bb0-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'51b73bb0-default-51b73bb0-0']]],[[8],'$slotbackText',[1,'51b73bb0-backText-51b73bb0-0']]],[[8],'$slotcontent',[1,'51b73bb0-content-51b73bb0-0']]],[[8],'$slotright',[1,'51b73bb0-right-51b73bb0-0']]])
Z([3,'6f7d61c4'])
Z([[7],[3,'loadModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'51b73bb0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3b79b639'])
Z([3,'_view 3b79b639'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3b79b639-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'3b79b639-default-3b79b639-0']]],[[8],'$slotbackText',[1,'3b79b639-backText-3b79b639-0']]],[[8],'$slotcontent',[1,'3b79b639-content-3b79b639-0']]])
Z([3,'6f7d61c4'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3b79b639'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'fc61ffa8'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'fc61ffa8-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'fc61ffa8-default-fc61ffa8-0']]],[[8],'$slotbackText',[1,'fc61ffa8-backText-fc61ffa8-0']]],[[8],'$slotcontent',[1,'fc61ffa8-content-fc61ffa8-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'fc61ffa8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'353f740e'])
Z([3,'_view 353f740e'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'353f740e-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'353f740e-default-353f740e-0']]],[[8],'$slotbackText',[1,'353f740e-backText-353f740e-0']]],[[8],'$slotcontent',[1,'353f740e-content-353f740e-0']]])
Z([3,'6f7d61c4'])
Z([3,'_view 353f740e padding-sm flex flex-wrap'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[6])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[6])
Z([[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'black']]],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']]])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[6])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'353f740e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'72af1f39'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'72af1f39-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'72af1f39-default-72af1f39-0']]],[[8],'$slotbackText',[1,'72af1f39-backText-72af1f39-0']]],[[8],'$slotcontent',[1,'72af1f39-content-72af1f39-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'72af1f39'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1918e7c3'])
Z([3,'_view 1918e7c3'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1918e7c3-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'1918e7c3-default-1918e7c3-0']]],[[8],'$slotbackText',[1,'1918e7c3-backText-1918e7c3-0']]],[[8],'$slotcontent',[1,'1918e7c3-content-1918e7c3-0']]])
Z([3,'6f7d61c4'])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1918e7c3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0a048560'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0a048560-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'0a048560-default-0a048560-0']]],[[8],'$slotbackText',[1,'0a048560-backText-0a048560-0']]],[[8],'$slotcontent',[1,'0a048560-content-0a048560-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0a048560'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0a049da8'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0a049da8-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'0a049da8-default-0a049da8-0']]],[[8],'$slotbackText',[1,'0a049da8-backText-0a049da8-0']]],[[8],'$slotcontent',[1,'0a049da8-content-0a049da8-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0a049da8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0a061714'])
Z([3,'_view 0a061714'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0a061714-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'0a061714-default-0a061714-0']]],[[8],'$slotbackText',[1,'0a061714-backText-0a061714-0']]],[[8],'$slotcontent',[1,'0a061714-content-0a061714-0']]])
Z([3,'6f7d61c4'])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0a061714'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0a06ff2f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0a08baee'])
Z([a,[3,'_scroll-view 0a08baee page '],[[2,'?:'],[[2,'!='],[[7],[3,'modalName']],[1,null]],[1,'show'],[1,'']]])
Z([[2,'=='],[[7],[3,'modalName']],[1,null]])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0a08baee-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'0a08baee-default-0a08baee-0']]],[[8],'$slotbackText',[1,'0a08baee-backText-0a08baee-0']]],[[8],'$slotcontent',[1,'0a08baee-content-0a08baee-0']]])
Z([3,'6f7d61c4'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'iconList']])
Z(z[6])
Z([[2,'<'],[[7],[3,'index']],[[2,'*'],[[7],[3,'gridCol']],[1,2]]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0a08baee'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'371f3a5d'])
Z([3,'_view 371f3a5d'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'371f3a5d-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'371f3a5d-default-371f3a5d-0']]],[[8],'$slotbackText',[1,'371f3a5d-backText-371f3a5d-0']]],[[8],'$slotcontent',[1,'371f3a5d-content-371f3a5d-0']]])
Z([3,'6f7d61c4'])
Z([3,'handleProxy'])
Z([a,[3,'_view 371f3a5d cu-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'ChooseModal']],[1,'show'],[1,'']]])
Z([[7],[3,'$k']])
Z([1,'371f3a5d-25'])
Z(z[5])
Z([3,'_view 371f3a5d cu-dialog'])
Z(z[7])
Z([1,'371f3a5d-24'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'checkbox']])
Z(z[13])
Z(z[5])
Z([a,[3,'_button 371f3a5d cu-btn orange lg block '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'bg-orange'],[1,'line-orange']]])
Z(z[7])
Z([[2,'+'],[1,'371f3a5d-23-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'item']],[3,'hot']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'371f3a5d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'191914d3'])
Z([3,'_view 191914d3'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'191914d3-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'191914d3-default-191914d3-0']]],[[8],'$slotbackText',[1,'191914d3-backText-191914d3-0']]],[[8],'$slotcontent',[1,'191914d3-content-191914d3-0']]])
Z([3,'6f7d61c4'])
Z([3,'index'])
Z([3,'item'])
Z([1,10])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[[7],[3,'TabCur']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'191914d3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'377612d7'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'377612d7-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'377612d7-default-377612d7-0']]],[[8],'$slotbackText',[1,'377612d7-backText-377612d7-0']]],[[8],'$slotcontent',[1,'377612d7-content-377612d7-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'377612d7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'910f4270'])
Z([3,'_view 910f4270'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'910f4270-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'910f4270-default-910f4270-0']]],[[8],'$slotbackText',[1,'910f4270-backText-910f4270-0']]],[[8],'$slotcontent',[1,'910f4270-content-910f4270-0']]])
Z([3,'6f7d61c4'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[5])
Z([3,'_swiper-item 910f4270'])
Z([[7],[3,'index']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z([1,true])
Z([3,'handleProxy'])
Z(z[13])
Z([a,[3,'_swiper 910f4270 card-swiper '],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]])
Z([[7],[3,'$k']])
Z([1,'910f4270-1'])
Z([3,'500'])
Z([3,'#0081ff'])
Z([3,'#8799a3'])
Z(z[13])
Z([3,'5000'])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[5])
Z([3,'_view 910f4270 swiper-item'])
Z(z[11])
Z(z[12])
Z(z[14])
Z(z[14])
Z(z[14])
Z([3,'_view 910f4270 tower-swiper'])
Z(z[17])
Z([1,'910f4270-2'])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[5])
Z(z[28])
Z(z[11])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'910f4270'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'44613691'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'44613691-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'44613691-default-44613691-0']]],[[8],'$slotbackText',[1,'44613691-backText-44613691-0']]],[[8],'$slotcontent',[1,'44613691-content-44613691-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'44613691'])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'f9a91cd2'])
Z([3,'_view f9a91cd2'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'basics']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'f9a91cd2-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'72a9ceeb'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'component']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'f9a91cd2-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0a06ff2f'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'plugin']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'f9a91cd2-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b811c306'])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f9a91cd2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0ef444a6'])
Z([3,'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0ef444a6-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'0ef444a6-default-0ef444a6-0']]],[[8],'$slotbackText',[1,'0ef444a6-backText-0ef444a6-0']]],[[8],'$slotcontent',[1,'0ef444a6-content-0ef444a6-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0ef444a6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7bfb330f'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7bfb330f-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'7bfb330f-default-7bfb330f-0']]],[[8],'$slotbackText',[1,'7bfb330f-backText-7bfb330f-0']]],[[8],'$slotcontent',[1,'7bfb330f-content-7bfb330f-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7bfb330f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'b811c306'])
Z([3,'https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'])
Z([[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'b811c306-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'b811c306-default-b811c306-0']]],[[8],'$slotcontent',[1,'b811c306-content-b811c306-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'053952a2'])
Z([3,'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'053952a2-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'053952a2-default-053952a2-0']]],[[8],'$slotbackText',[1,'053952a2-backText-053952a2-0']]],[[8],'$slotcontent',[1,'053952a2-content-053952a2-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'053952a2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'62e90413'])
Z([a,[3,'_view 62e90413 mpvue-picker-content  '],[[4],[[5],[[2,'?:'],[[7],[3,'showPicker']],[1,'mpvue-picker-view-show'],[1,'']]]]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'selector']],[[2,'>'],[[6],[[7],[3,'pickerValueSingleArray']],[3,'length']],[1,0]]])
Z([[2,'==='],[[7],[3,'mode']],[1,'timeSelector']])
Z([[2,'==='],[[7],[3,'mode']],[1,'multiSelector']])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'multiLinkageSelector']],[[2,'==='],[[7],[3,'deepLength']],[1,2]]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'multiLinkageSelector']],[[2,'==='],[[7],[3,'deepLength']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5a70ee8f'])
Z([3,'bg-shadeTop text-white'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5a70ee8f-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'5a70ee8f-default-5a70ee8f-0']]],[[8],'$slotbackText',[1,'5a70ee8f-backText-5a70ee8f-0']]],[[8],'$slotcontent',[1,'5a70ee8f-content-5a70ee8f-0']]])
Z([3,'6f7d61c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5a70ee8f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.vue.wxml','/common/slots.wxml','./common/slots.wxml','/colorui/components/cu-custom.vue.wxml','/pages/plugin/mpvuePicker.vue.wxml','/pages/basics/home.vue.wxml','/pages/component/home.vue.wxml','/pages/plugin/home.vue.wxml','./pages/basics/avatar.vue.wxml','./pages/basics/avatar.wxml','./avatar.vue.wxml','./pages/basics/background.vue.wxml','./pages/basics/background.wxml','./background.vue.wxml','./pages/basics/button.vue.wxml','./pages/basics/button.wxml','./button.vue.wxml','./pages/basics/design.vue.wxml','./pages/basics/design.wxml','./design.vue.wxml','./pages/basics/home.vue.wxml','./pages/basics/icon.vue.wxml','./pages/basics/icon.wxml','./icon.vue.wxml','./pages/basics/layout.vue.wxml','./pages/basics/layout.wxml','./layout.vue.wxml','./pages/basics/loading.vue.wxml','./pages/basics/loading.wxml','./loading.vue.wxml','./pages/basics/progress.vue.wxml','./pages/basics/progress.wxml','./progress.vue.wxml','./pages/basics/shadow.vue.wxml','./pages/basics/shadow.wxml','./shadow.vue.wxml','./pages/basics/tag.vue.wxml','./pages/basics/tag.wxml','./tag.vue.wxml','./pages/basics/text.vue.wxml','./pages/basics/text.wxml','./text.vue.wxml','./pages/component/bar.vue.wxml','./pages/component/bar.wxml','./bar.vue.wxml','./pages/component/card.vue.wxml','./pages/component/card.wxml','./card.vue.wxml','./pages/component/chat.vue.wxml','./pages/component/chat.wxml','./chat.vue.wxml','./pages/component/form.vue.wxml','./pages/component/form.wxml','./form.vue.wxml','./pages/component/home.vue.wxml','./pages/component/list.vue.wxml','./pages/component/list.wxml','./list.vue.wxml','./pages/component/modal.vue.wxml','./pages/component/modal.wxml','./modal.vue.wxml','./pages/component/nav.vue.wxml','./pages/component/nav.wxml','./nav.vue.wxml','./pages/component/steps.vue.wxml','./pages/component/steps.wxml','./steps.vue.wxml','./pages/component/swiper.vue.wxml','./pages/component/swiper.wxml','./swiper.vue.wxml','./pages/component/timeline.vue.wxml','./pages/component/timeline.wxml','./timeline.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/plugin/animation.vue.wxml','./pages/plugin/animation.wxml','./animation.vue.wxml','./pages/plugin/drawer.vue.wxml','./pages/plugin/drawer.wxml','./drawer.vue.wxml','./pages/plugin/home.vue.wxml','./pages/plugin/indexes.vue.wxml','./pages/plugin/indexes.wxml','./indexes.vue.wxml','./pages/plugin/mpvuePicker.vue.wxml','./pages/plugin/verticalnav.vue.wxml','./pages/plugin/verticalnav.wxml','./verticalnav.vue.wxml'];d_[x[0]]={}
d_[x[0]]["6f7d61c4"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':6f7d61c4'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/cu-custom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./colorui/components/cu-custom.vue.wxml:view:1:62")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./colorui/components/cu-custom.vue.wxml:view:1:289")
var xC=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
cs.push("./colorui/components/cu-custom.vue.wxml:view:1:414")
cs.push("./colorui/components/cu-custom.vue.wxml:view:1:414")
var fE=_mz(z,'view',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cF=_v()
_(fE,cF)
cs.push("./colorui/components/cu-custom.vue.wxml:template:1:592")
var hG=_oz(z,13,e,s,gg)
var oH=_gd(x[0],hG,e_,d_)
if(oH){
var cI=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[0],1,650)
cs.pop()
cs.pop()
_(oD,fE)
cs.pop()
}
var oJ=_v()
_(xC,oJ)
cs.push("./colorui/components/cu-custom.vue.wxml:template:1:789")
var lK=_oz(z,15,e,s,gg)
var aL=_gd(x[0],lK,e_,d_)
if(aL){
var tM=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[0],1,847)
cs.pop()
var eN=_v()
_(xC,eN)
cs.push("./colorui/components/cu-custom.vue.wxml:template:1:898")
var bO=_oz(z,17,e,s,gg)
var oP=_gd(x[0],bO,e_,d_)
if(oP){
var xQ=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[0],1,956)
cs.pop()
oD.wxXCkey=1
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["backText"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':backText'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/cu-custom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["content"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':content'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/cu-custom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["right"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':right'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/cu-custom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["75858236-default-75858236-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':75858236-default-75858236-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["75858236-backText-75858236-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':75858236-backText-75858236-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["75858236-content-75858236-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':75858236-content-75858236-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["1b5f138c-default-1b5f138c-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':1b5f138c-default-1b5f138c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["1b5f138c-backText-1b5f138c-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':1b5f138c-backText-1b5f138c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["1b5f138c-content-1b5f138c-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':1b5f138c-content-1b5f138c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["72af1f39-default-72af1f39-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':72af1f39-default-72af1f39-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["72af1f39-backText-72af1f39-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':72af1f39-backText-72af1f39-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["72af1f39-content-72af1f39-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':72af1f39-content-72af1f39-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["72aa1685-default-72aa1685-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':72aa1685-default-72aa1685-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["72aa1685-backText-72aa1685-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':72aa1685-backText-72aa1685-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["72aa1685-content-72aa1685-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':72aa1685-content-72aa1685-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["658cae3e-default-658cae3e-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':658cae3e-default-658cae3e-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["658cae3e-backText-658cae3e-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':658cae3e-backText-658cae3e-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["658cae3e-content-658cae3e-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':658cae3e-content-658cae3e-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["681448ca-default-681448ca-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':681448ca-default-681448ca-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["681448ca-backText-681448ca-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':681448ca-backText-681448ca-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["681448ca-content-681448ca-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':681448ca-content-681448ca-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["353f740e-default-353f740e-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':353f740e-default-353f740e-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["353f740e-backText-353f740e-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':353f740e-backText-353f740e-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["353f740e-content-353f740e-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':353f740e-content-353f740e-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["63dd4865-default-63dd4865-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':63dd4865-default-63dd4865-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["63dd4865-backText-63dd4865-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':63dd4865-backText-63dd4865-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["63dd4865-content-63dd4865-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':63dd4865-content-63dd4865-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["3b79b639-default-3b79b639-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':3b79b639-default-3b79b639-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["3b79b639-backText-3b79b639-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':3b79b639-backText-3b79b639-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["3b79b639-content-3b79b639-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':3b79b639-content-3b79b639-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["fc61ffa8-default-fc61ffa8-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':fc61ffa8-default-fc61ffa8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["fc61ffa8-backText-fc61ffa8-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':fc61ffa8-backText-fc61ffa8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["fc61ffa8-content-fc61ffa8-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':fc61ffa8-content-fc61ffa8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["51b73bb0-default-51b73bb0-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':51b73bb0-default-51b73bb0-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["51b73bb0-backText-51b73bb0-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':51b73bb0-backText-51b73bb0-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["51b73bb0-content-51b73bb0-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':51b73bb0-content-51b73bb0-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["51b73bb0-right-51b73bb0-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':51b73bb0-right-51b73bb0-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["72a9ceeb-default-72a9ceeb-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':72a9ceeb-default-72a9ceeb-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["72a9ceeb-content-72a9ceeb-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':72a9ceeb-content-72a9ceeb-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["1918e7c3-default-1918e7c3-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':1918e7c3-default-1918e7c3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["1918e7c3-backText-1918e7c3-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':1918e7c3-backText-1918e7c3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["1918e7c3-content-1918e7c3-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':1918e7c3-content-1918e7c3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["191914d3-default-191914d3-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':191914d3-default-191914d3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["191914d3-backText-191914d3-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':191914d3-backText-191914d3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["191914d3-content-191914d3-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':191914d3-content-191914d3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a08baee-default-0a08baee-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a08baee-default-0a08baee-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a08baee-backText-0a08baee-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a08baee-backText-0a08baee-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a08baee-content-0a08baee-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a08baee-content-0a08baee-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a048560-default-0a048560-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a048560-default-0a048560-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a048560-backText-0a048560-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a048560-backText-0a048560-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a048560-content-0a048560-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a048560-content-0a048560-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a061714-default-0a061714-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a061714-default-0a061714-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a061714-backText-0a061714-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a061714-backText-0a061714-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a061714-content-0a061714-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a061714-content-0a061714-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["44613691-default-44613691-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':44613691-default-44613691-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["44613691-backText-44613691-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':44613691-backText-44613691-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["44613691-content-44613691-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':44613691-content-44613691-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a049da8-default-0a049da8-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a049da8-default-0a049da8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a049da8-backText-0a049da8-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a049da8-backText-0a049da8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0a049da8-content-0a049da8-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0a049da8-content-0a049da8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["910f4270-default-910f4270-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':910f4270-default-910f4270-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["910f4270-backText-910f4270-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':910f4270-backText-910f4270-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["910f4270-content-910f4270-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':910f4270-content-910f4270-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["371f3a5d-default-371f3a5d-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':371f3a5d-default-371f3a5d-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["371f3a5d-backText-371f3a5d-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':371f3a5d-backText-371f3a5d-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["371f3a5d-content-371f3a5d-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':371f3a5d-content-371f3a5d-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["377612d7-default-377612d7-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':377612d7-default-377612d7-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["377612d7-backText-377612d7-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':377612d7-backText-377612d7-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["377612d7-content-377612d7-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':377612d7-content-377612d7-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["053952a2-default-053952a2-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':053952a2-default-053952a2-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["053952a2-backText-053952a2-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':053952a2-backText-053952a2-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["053952a2-content-053952a2-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':053952a2-content-053952a2-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0ef444a6-default-0ef444a6-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0ef444a6-default-0ef444a6-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0ef444a6-backText-0ef444a6-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0ef444a6-backText-0ef444a6-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["0ef444a6-content-0ef444a6-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':0ef444a6-content-0ef444a6-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["7bfb330f-default-7bfb330f-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':7bfb330f-default-7bfb330f-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["7bfb330f-backText-7bfb330f-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':7bfb330f-backText-7bfb330f-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["7bfb330f-content-7bfb330f-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':7bfb330f-content-7bfb330f-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["5a70ee8f-default-5a70ee8f-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':5a70ee8f-default-5a70ee8f-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["5a70ee8f-backText-5a70ee8f-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':5a70ee8f-backText-5a70ee8f-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["5a70ee8f-content-5a70ee8f-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':5a70ee8f-content-5a70ee8f-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["b811c306-default-b811c306-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':b811c306-default-b811c306-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[2]]["b811c306-content-b811c306-0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':b811c306-content-b811c306-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
_ai(oD,x[4],e_,x[2],2,2)
_ai(oD,x[5],e_,x[2],3,2)
_ai(oD,x[6],e_,x[2],4,2)
_ai(oD,x[7],e_,x[2],5,2)
_ai(oD,x[1],e_,x[2],6,2)
oD.pop()
oD.pop()
oD.pop()
oD.pop()
oD.pop()
oD.pop()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[x[3],x[4],x[5],x[6],x[7],x[1]],ic:[]}
d_[x[8]]={}
d_[x[8]]["63dd4865"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[8]+':63dd4865'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/avatar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/basics/avatar.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[8],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[8],1,340)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cF=e_[x[8]].i
_ai(cF,x[3],e_,x[8],1,1)
cF.pop()
return r
}
e_[x[8]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[9]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oH=e_[x[9]].i
_ai(oH,x[10],e_,x[9],1,1)
var cI=_v()
_(r,cI)
cs.push("./pages/basics/avatar.wxml:template:2:6")
var oJ=_oz(z,1,e,s,gg)
var lK=_gd(x[9],oJ,e_,d_)
if(lK){
var aL=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[9],2,18)
cs.pop()
oH.pop()
return r
}
e_[x[9]]={f:m3,j:[],i:[],ti:[x[10]],ic:[]}
d_[x[11]]={}
d_[x[11]]["1b5f138c"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[11]+':1b5f138c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/background.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
cs.push("./pages/basics/background.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/basics/background.vue.wxml:template:1:111")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[11],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[11],1,340)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/basics/background.vue.wxml:view:1:1207")
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
cs.push("./pages/basics/background.vue.wxml:view:1:1207")
cs.pop()
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var eN=e_[x[11]].i
_ai(eN,x[3],e_,x[11],1,1)
eN.pop()
return r
}
e_[x[11]]={f:m4,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[12]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oP=e_[x[12]].i
_ai(oP,x[13],e_,x[12],1,1)
var xQ=_v()
_(r,xQ)
cs.push("./pages/basics/background.wxml:template:2:6")
var oR=_oz(z,1,e,s,gg)
var fS=_gd(x[12],oR,e_,d_)
if(fS){
var cT=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xQ.wxXCkey=3
fS(cT,cT,xQ,gg)
gg.f=cur_globalf
}
else _w(oR,x[12],2,18)
cs.pop()
oP.pop()
return r
}
e_[x[12]]={f:m5,j:[],i:[],ti:[x[13]],ic:[]}
d_[x[14]]={}
d_[x[14]]["658cae3e"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[14]+':658cae3e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/button.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
cs.push("./pages/basics/button.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/basics/button.vue.wxml:template:1:111")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[14],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[14],1,340)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/basics/button.vue.wxml:view:1:3089")
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
cs.push("./pages/basics/button.vue.wxml:view:1:3089")
cs.pop()
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oV=e_[x[14]].i
_ai(oV,x[3],e_,x[14],1,1)
oV.pop()
return r
}
e_[x[14]]={f:m6,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[15]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oX=e_[x[15]].i
_ai(oX,x[16],e_,x[15],1,1)
var lY=_v()
_(r,lY)
cs.push("./pages/basics/button.wxml:template:2:6")
var aZ=_oz(z,1,e,s,gg)
var t1=_gd(x[15],aZ,e_,d_)
if(t1){
var e2=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[15],2,18)
cs.pop()
oX.pop()
return r
}
e_[x[15]]={f:m7,j:[],i:[],ti:[x[16]],ic:[]}
d_[x[17]]={}
d_[x[17]]["681448ca"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[17]+':681448ca'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/design.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
cs.push("./pages/basics/design.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var fE=_v()
_(oB,fE)
cs.push("./pages/basics/design.vue.wxml:template:1:111")
var cF=_oz(z,4,e,s,gg)
var hG=_gd(x[17],cF,e_,d_)
if(hG){
var oH=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[17],1,340)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./pages/basics/design.vue.wxml:text:1:738")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
cs.push("./pages/basics/design.vue.wxml:view:1:2716")
cs.pop()
}
var cI=_v()
_(oB,cI)
cs.push("./pages/basics/design.vue.wxml:view:1:3774")
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
if(_oz(z,11,aL,lK,gg)){bO.wxVkey=1
cs.push("./pages/basics/design.vue.wxml:view:1:3774")
cs.pop()
}
bO.wxXCkey=1
return tM
}
cI.wxXCkey=2
_2z(z,9,oJ,e,s,gg,cI,'item','index','index')
cs.pop()
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o4=e_[x[17]].i
_ai(o4,x[3],e_,x[17],1,1)
o4.pop()
return r
}
e_[x[17]]={f:m8,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[18]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o6=e_[x[18]].i
_ai(o6,x[19],e_,x[18],1,1)
var f7=_v()
_(r,f7)
cs.push("./pages/basics/design.wxml:template:2:6")
var c8=_oz(z,1,e,s,gg)
var h9=_gd(x[18],c8,e_,d_)
if(h9){
var o0=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[18],2,18)
cs.pop()
o6.pop()
return r
}
e_[x[18]]={f:m9,j:[],i:[],ti:[x[19]],ic:[]}
d_[x[20]]={}
d_[x[20]]["72a9ceeb"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[20]+':72a9ceeb'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
cs.push("./pages/basics/home.vue.wxml:scroll-view:1:162")
var oB=_mz(z,'scroll-view',['scrollY',-1,'class',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/basics/home.vue.wxml:template:1:219")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[20],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[20],1,443)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/basics/home.vue.wxml:template:1:656")
var oH=_oz(z,10,e,s,gg)
var cI=_gd(x[20],oH,e_,d_)
if(cI){
var oJ=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[20],1,853)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oBB=e_[x[20]].i
_ai(oBB,x[3],e_,x[20],1,1)
_ai(oBB,x[4],e_,x[20],1,56)
oBB.pop()
oBB.pop()
return r
}
e_[x[20]]={f:m10,j:[],i:[],ti:[x[3],x[4]],ic:[]}
d_[x[21]]={}
d_[x[21]]["72aa1685"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[21]+':72aa1685'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
cs.push("./pages/basics/icon.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/basics/icon.vue.wxml:template:1:111")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[21],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[21],1,340)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/basics/icon.vue.wxml:view:1:798")
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
cs.push("./pages/basics/icon.vue.wxml:view:1:798")
cs.pop()
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var aDB=e_[x[21]].i
_ai(aDB,x[3],e_,x[21],1,1)
aDB.pop()
return r
}
e_[x[21]]={f:m11,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[22]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var eFB=e_[x[22]].i
_ai(eFB,x[23],e_,x[22],1,1)
var bGB=_v()
_(r,bGB)
cs.push("./pages/basics/icon.wxml:template:2:6")
var oHB=_oz(z,1,e,s,gg)
var xIB=_gd(x[22],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[22],2,18)
cs.pop()
eFB.pop()
return r
}
e_[x[22]]={f:m12,j:[],i:[],ti:[x[23]],ic:[]}
d_[x[24]]={}
d_[x[24]]["75858236"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[24]+':75858236'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/layout.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
cs.push("./pages/basics/layout.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var cF=_v()
_(oB,cF)
cs.push("./pages/basics/layout.vue.wxml:template:1:111")
var hG=_oz(z,4,e,s,gg)
var oH=_gd(x[24],hG,e_,d_)
if(oH){
var cI=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[24],1,340)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./pages/basics/layout.vue.wxml:block:1:806")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
cs.push("./pages/basics/layout.vue.wxml:block:1:5006")
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,7,e,s,gg)){fE.wxVkey=1
cs.push("./pages/basics/layout.vue.wxml:block:1:6252")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var cLB=e_[x[24]].i
_ai(cLB,x[3],e_,x[24],1,1)
cLB.pop()
return r
}
e_[x[24]]={f:m13,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[25]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oNB=e_[x[25]].i
_ai(oNB,x[26],e_,x[25],1,1)
var cOB=_v()
_(r,cOB)
cs.push("./pages/basics/layout.wxml:template:2:6")
var oPB=_oz(z,1,e,s,gg)
var lQB=_gd(x[25],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[25],2,18)
cs.pop()
oNB.pop()
return r
}
e_[x[25]]={f:m14,j:[],i:[],ti:[x[26]],ic:[]}
d_[x[27]]={}
d_[x[27]]["51b73bb0"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[27]+':51b73bb0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/loading.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
cs.push("./pages/basics/loading.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/basics/loading.vue.wxml:template:1:111")
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[27],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[27],1,379)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./pages/basics/loading.vue.wxml:view:1:1692")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var eTB=e_[x[27]].i
_ai(eTB,x[3],e_,x[27],1,1)
eTB.pop()
return r
}
e_[x[27]]={f:m15,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[28]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oVB=e_[x[28]].i
_ai(oVB,x[29],e_,x[28],1,1)
var xWB=_v()
_(r,xWB)
cs.push("./pages/basics/loading.wxml:template:2:6")
var oXB=_oz(z,1,e,s,gg)
var fYB=_gd(x[28],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[28],2,18)
cs.pop()
oVB.pop()
return r
}
e_[x[28]]={f:m16,j:[],i:[],ti:[x[29]],ic:[]}
d_[x[30]]={}
d_[x[30]]["3b79b639"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[30]+':3b79b639'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/progress.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[30]);return}
p_[b]=true
try{
cs.push("./pages/basics/progress.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/basics/progress.vue.wxml:template:1:111")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[30],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[30],1,340)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/basics/progress.vue.wxml:view:1:5182")
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
cs.push("./pages/basics/progress.vue.wxml:view:1:5182")
cs.pop()
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var o2B=e_[x[30]].i
_ai(o2B,x[3],e_,x[30],1,1)
o2B.pop()
return r
}
e_[x[30]]={f:m17,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[31]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o4B=e_[x[31]].i
_ai(o4B,x[32],e_,x[31],1,1)
var l5B=_v()
_(r,l5B)
cs.push("./pages/basics/progress.wxml:template:2:6")
var a6B=_oz(z,1,e,s,gg)
var t7B=_gd(x[31],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[31],2,18)
cs.pop()
o4B.pop()
return r
}
e_[x[31]]={f:m18,j:[],i:[],ti:[x[32]],ic:[]}
d_[x[33]]={}
d_[x[33]]["fc61ffa8"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[33]+':fc61ffa8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/shadow.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[33]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/basics/shadow.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[33],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[33],1,340)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var o0B=e_[x[33]].i
_ai(o0B,x[3],e_,x[33],1,1)
o0B.pop()
return r
}
e_[x[33]]={f:m19,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[34]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oBC=e_[x[34]].i
_ai(oBC,x[35],e_,x[34],1,1)
var fCC=_v()
_(r,fCC)
cs.push("./pages/basics/shadow.wxml:template:2:6")
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[34],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[34],2,18)
cs.pop()
oBC.pop()
return r
}
e_[x[34]]={f:m20,j:[],i:[],ti:[x[35]],ic:[]}
d_[x[36]]={}
d_[x[36]]["353f740e"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[36]+':353f740e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/tag.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[36]);return}
p_[b]=true
try{
cs.push("./pages/basics/tag.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/basics/tag.vue.wxml:template:1:111")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[36],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[36],1,340)
cs.pop()
cs.push("./pages/basics/tag.vue.wxml:view:1:1299")
var hG=_n('view')
_rz(z,hG,'class',5,e,s,gg)
var oH=_v()
_(hG,oH)
cs.push("./pages/basics/tag.vue.wxml:view:1:1354")
var cI=function(lK,oJ,aL,gg){
var eN=_v()
_(aL,eN)
if(_oz(z,10,lK,oJ,gg)){eN.wxVkey=1
cs.push("./pages/basics/tag.vue.wxml:view:1:1354")
cs.pop()
}
eN.wxXCkey=1
return aL
}
oH.wxXCkey=2
_2z(z,8,cI,e,s,gg,oH,'item','index','index')
cs.pop()
var bO=_v()
_(hG,bO)
cs.push("./pages/basics/tag.vue.wxml:view:1:1604")
var oP=function(oR,xQ,fS,gg){
var hU=_v()
_(fS,hU)
if(_oz(z,15,oR,xQ,gg)){hU.wxVkey=1
cs.push("./pages/basics/tag.vue.wxml:view:1:1604")
cs.pop()
}
hU.wxXCkey=1
return fS
}
bO.wxXCkey=2
_2z(z,13,oP,e,s,gg,bO,'item','index','index')
cs.pop()
cs.pop()
_(oB,hG)
var oV=_v()
_(oB,oV)
cs.push("./pages/basics/tag.vue.wxml:view:1:2143")
var cW=function(lY,oX,aZ,gg){
var e2=_v()
_(aZ,e2)
if(_oz(z,20,lY,oX,gg)){e2.wxVkey=1
cs.push("./pages/basics/tag.vue.wxml:view:1:2143")
cs.pop()
}
e2.wxXCkey=1
return aZ
}
oV.wxXCkey=2
_2z(z,18,cW,e,s,gg,oV,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oHC=e_[x[36]].i
_ai(oHC,x[3],e_,x[36],1,1)
oHC.pop()
return r
}
e_[x[36]]={f:m21,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[37]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var aJC=e_[x[37]].i
_ai(aJC,x[38],e_,x[37],1,1)
var tKC=_v()
_(r,tKC)
cs.push("./pages/basics/tag.wxml:template:2:6")
var eLC=_oz(z,1,e,s,gg)
var bMC=_gd(x[37],eLC,e_,d_)
if(bMC){
var oNC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tKC.wxXCkey=3
bMC(oNC,oNC,tKC,gg)
gg.f=cur_globalf
}
else _w(eLC,x[37],2,18)
cs.pop()
aJC.pop()
return r
}
e_[x[37]]={f:m22,j:[],i:[],ti:[x[38]],ic:[]}
d_[x[39]]={}
d_[x[39]]["72af1f39"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[39]+':72af1f39'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/text.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[39]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/basics/text.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[39],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[39],1,340)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oPC=e_[x[39]].i
_ai(oPC,x[3],e_,x[39],1,1)
oPC.pop()
return r
}
e_[x[39]]={f:m23,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[40]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var cRC=e_[x[40]].i
_ai(cRC,x[41],e_,x[40],1,1)
var hSC=_v()
_(r,hSC)
cs.push("./pages/basics/text.wxml:template:2:6")
var oTC=_oz(z,1,e,s,gg)
var cUC=_gd(x[40],oTC,e_,d_)
if(cUC){
var oVC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hSC.wxXCkey=3
cUC(oVC,oVC,hSC,gg)
gg.f=cur_globalf
}
else _w(oTC,x[40],2,18)
cs.pop()
cRC.pop()
return r
}
e_[x[40]]={f:m24,j:[],i:[],ti:[x[41]],ic:[]}
d_[x[42]]={}
d_[x[42]]["1918e7c3"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[42]+':1918e7c3'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[42]);return}
p_[b]=true
try{
cs.push("./pages/component/bar.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/component/bar.vue.wxml:template:1:111")
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[42],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[42],1,340)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./pages/component/bar.vue.wxml:view:1:6485")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var aXC=e_[x[42]].i
_ai(aXC,x[3],e_,x[42],1,1)
aXC.pop()
return r
}
e_[x[42]]={f:m25,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[43]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var eZC=e_[x[43]].i
_ai(eZC,x[44],e_,x[43],1,1)
var b1C=_v()
_(r,b1C)
cs.push("./pages/component/bar.wxml:template:2:6")
var o2C=_oz(z,1,e,s,gg)
var x3C=_gd(x[43],o2C,e_,d_)
if(x3C){
var o4C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b1C.wxXCkey=3
x3C(o4C,o4C,b1C,gg)
gg.f=cur_globalf
}
else _w(o2C,x[43],2,18)
cs.pop()
eZC.pop()
return r
}
e_[x[43]]={f:m26,j:[],i:[],ti:[x[44]],ic:[]}
d_[x[45]]={}
d_[x[45]]["0a048560"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[45]+':0a048560'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/card.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[45]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/component/card.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[45],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[45],1,340)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var c6C=e_[x[45]].i
_ai(c6C,x[3],e_,x[45],1,1)
c6C.pop()
return r
}
e_[x[45]]={f:m27,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[46]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var o8C=e_[x[46]].i
_ai(o8C,x[47],e_,x[46],1,1)
var c9C=_v()
_(r,c9C)
cs.push("./pages/component/card.wxml:template:2:6")
var o0C=_oz(z,1,e,s,gg)
var lAD=_gd(x[46],o0C,e_,d_)
if(lAD){
var aBD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c9C.wxXCkey=3
lAD(aBD,aBD,c9C,gg)
gg.f=cur_globalf
}
else _w(o0C,x[46],2,18)
cs.pop()
o8C.pop()
return r
}
e_[x[46]]={f:m28,j:[],i:[],ti:[x[47]],ic:[]}
d_[x[48]]={}
d_[x[48]]["0a049da8"]=function(e,s,r,gg){
var z=gz$gwx_30()
var b=x[48]+':0a049da8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/chat.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[48]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/component/chat.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[48],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[48],1,340)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var eDD=e_[x[48]].i
_ai(eDD,x[3],e_,x[48],1,1)
eDD.pop()
return r
}
e_[x[48]]={f:m29,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[49]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oFD=e_[x[49]].i
_ai(oFD,x[50],e_,x[49],1,1)
var xGD=_v()
_(r,xGD)
cs.push("./pages/component/chat.wxml:template:2:6")
var oHD=_oz(z,1,e,s,gg)
var fID=_gd(x[49],oHD,e_,d_)
if(fID){
var cJD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xGD.wxXCkey=3
fID(cJD,cJD,xGD,gg)
gg.f=cur_globalf
}
else _w(oHD,x[49],2,18)
cs.pop()
oFD.pop()
return r
}
e_[x[49]]={f:m30,j:[],i:[],ti:[x[50]],ic:[]}
d_[x[51]]={}
d_[x[51]]["0a061714"]=function(e,s,r,gg){
var z=gz$gwx_32()
var b=x[51]+':0a061714'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/form.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[51]);return}
p_[b]=true
try{
cs.push("./pages/component/form.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/component/form.vue.wxml:template:1:111")
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[51],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[51],1,340)
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./pages/component/form.vue.wxml:view:1:7249")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var oLD=e_[x[51]].i
_ai(oLD,x[3],e_,x[51],1,1)
oLD.pop()
return r
}
e_[x[51]]={f:m31,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[52]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var oND=e_[x[52]].i
_ai(oND,x[53],e_,x[52],1,1)
var lOD=_v()
_(r,lOD)
cs.push("./pages/component/form.wxml:template:2:6")
var aPD=_oz(z,1,e,s,gg)
var tQD=_gd(x[52],aPD,e_,d_)
if(tQD){
var eRD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lOD.wxXCkey=3
tQD(eRD,eRD,lOD,gg)
gg.f=cur_globalf
}
else _w(aPD,x[52],2,18)
cs.pop()
oND.pop()
return r
}
e_[x[52]]={f:m32,j:[],i:[],ti:[x[53]],ic:[]}
d_[x[54]]={}
d_[x[54]]["0a06ff2f"]=function(e,s,r,gg){
var z=gz$gwx_34()
var b=x[54]+':0a06ff2f'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[54]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[54]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
d_[x[55]]["0a08baee"]=function(e,s,r,gg){
var z=gz$gwx_35()
var b=x[55]+':0a08baee'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[55]);return}
p_[b]=true
try{
cs.push("./pages/component/list.vue.wxml:scroll-view:1:111")
var oB=_mz(z,'scroll-view',['class',1,'scrollY',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/component/list.vue.wxml:template:1:226")
var oD=_oz(z,5,e,s,gg)
var fE=_gd(x[55],oD,e_,d_)
if(fE){
var cF=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[55],1,455)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/component/list.vue.wxml:view:1:2312")
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,10,oJ,cI,gg)){tM.wxVkey=1
cs.push("./pages/component/list.vue.wxml:view:1:2312")
var eN=_v()
_(tM,eN)
if(_oz(z,11,oJ,cI,gg)){eN.wxVkey=1
cs.push("./pages/component/list.vue.wxml:view:1:2549")
var bO=_v()
_(eN,bO)
if(_oz(z,12,oJ,cI,gg)){bO.wxVkey=1
cs.push("./pages/component/list.vue.wxml:block:1:2617")
cs.pop()
}
bO.wxXCkey=1
cs.pop()
}
eN.wxXCkey=1
cs.pop()
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,8,oH,e,s,gg,hG,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var xUD=e_[x[55]].i
_ai(xUD,x[3],e_,x[55],1,1)
xUD.pop()
return r
}
e_[x[55]]={f:m34,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[56]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var fWD=e_[x[56]].i
_ai(fWD,x[57],e_,x[56],1,1)
var cXD=_v()
_(r,cXD)
cs.push("./pages/component/list.wxml:template:2:6")
var hYD=_oz(z,1,e,s,gg)
var oZD=_gd(x[56],hYD,e_,d_)
if(oZD){
var c1D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cXD.wxXCkey=3
oZD(c1D,c1D,cXD,gg)
gg.f=cur_globalf
}
else _w(hYD,x[56],2,18)
cs.pop()
fWD.pop()
return r
}
e_[x[56]]={f:m35,j:[],i:[],ti:[x[57]],ic:[]}
d_[x[58]]={}
d_[x[58]]["371f3a5d"]=function(e,s,r,gg){
var z=gz$gwx_37()
var b=x[58]+':371f3a5d'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/modal.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[58]);return}
p_[b]=true
try{
cs.push("./pages/component/modal.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/component/modal.vue.wxml:template:1:111")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[58],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[58],1,340)
cs.pop()
cs.push("./pages/component/modal.vue.wxml:view:1:7489")
var hG=_mz(z,'view',['bindtap',5,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/component/modal.vue.wxml:view:1:7661")
var oH=_mz(z,'view',['catchtap',9,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cI=_v()
_(oH,cI)
cs.push("./pages/component/modal.vue.wxml:view:1:8151")
var oJ=function(aL,lK,tM,gg){
cs.push("./pages/component/modal.vue.wxml:button:1:8284")
var bO=_mz(z,'button',['bindtap',17,'class',1,'data-comkey',2,'data-eventid',3,'data-value',4],[],aL,lK,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,22,aL,lK,gg)){oP.wxVkey=1
cs.push("./pages/component/modal.vue.wxml:view:1:8511")
cs.pop()
}
oP.wxXCkey=1
cs.pop()
_(tM,bO)
return tM
}
cI.wxXCkey=2
_2z(z,15,oJ,e,s,gg,cI,'item','index','index')
cs.pop()
cs.pop()
_(hG,oH)
cs.pop()
_(oB,hG)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var l3D=e_[x[58]].i
_ai(l3D,x[3],e_,x[58],1,1)
l3D.pop()
return r
}
e_[x[58]]={f:m36,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[59]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var t5D=e_[x[59]].i
_ai(t5D,x[60],e_,x[59],1,1)
var e6D=_v()
_(r,e6D)
cs.push("./pages/component/modal.wxml:template:2:6")
var b7D=_oz(z,1,e,s,gg)
var o8D=_gd(x[59],b7D,e_,d_)
if(o8D){
var x9D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
e6D.wxXCkey=3
o8D(x9D,x9D,e6D,gg)
gg.f=cur_globalf
}
else _w(b7D,x[59],2,18)
cs.pop()
t5D.pop()
return r
}
e_[x[59]]={f:m37,j:[],i:[],ti:[x[60]],ic:[]}
d_[x[61]]={}
d_[x[61]]["191914d3"]=function(e,s,r,gg){
var z=gz$gwx_39()
var b=x[61]+':191914d3'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/nav.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[61]);return}
p_[b]=true
try{
cs.push("./pages/component/nav.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/component/nav.vue.wxml:template:1:111")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[61],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[61],1,340)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/component/nav.vue.wxml:view:1:363")
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
cs.push("./pages/component/nav.vue.wxml:view:1:363")
cs.pop()
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var fAE=e_[x[61]].i
_ai(fAE,x[3],e_,x[61],1,1)
fAE.pop()
return r
}
e_[x[61]]={f:m38,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[62]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var hCE=e_[x[62]].i
_ai(hCE,x[63],e_,x[62],1,1)
var oDE=_v()
_(r,oDE)
cs.push("./pages/component/nav.wxml:template:2:6")
var cEE=_oz(z,1,e,s,gg)
var oFE=_gd(x[62],cEE,e_,d_)
if(oFE){
var lGE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oDE.wxXCkey=3
oFE(lGE,lGE,oDE,gg)
gg.f=cur_globalf
}
else _w(cEE,x[62],2,18)
cs.pop()
hCE.pop()
return r
}
e_[x[62]]={f:m39,j:[],i:[],ti:[x[63]],ic:[]}
d_[x[64]]={}
d_[x[64]]["377612d7"]=function(e,s,r,gg){
var z=gz$gwx_41()
var b=x[64]+':377612d7'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/steps.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[64]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/component/steps.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[64],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[64],1,340)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var tIE=e_[x[64]].i
_ai(tIE,x[3],e_,x[64],1,1)
tIE.pop()
return r
}
e_[x[64]]={f:m40,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[65]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var bKE=e_[x[65]].i
_ai(bKE,x[66],e_,x[65],1,1)
var oLE=_v()
_(r,oLE)
cs.push("./pages/component/steps.wxml:template:2:6")
var xME=_oz(z,1,e,s,gg)
var oNE=_gd(x[65],xME,e_,d_)
if(oNE){
var fOE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oLE.wxXCkey=3
oNE(fOE,fOE,oLE,gg)
gg.f=cur_globalf
}
else _w(xME,x[65],2,18)
cs.pop()
bKE.pop()
return r
}
e_[x[65]]={f:m41,j:[],i:[],ti:[x[66]],ic:[]}
d_[x[67]]={}
d_[x[67]]["910f4270"]=function(e,s,r,gg){
var z=gz$gwx_43()
var b=x[67]+':910f4270'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/swiper.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[67]);return}
p_[b]=true
try{
cs.push("./pages/component/swiper.vue.wxml:view:1:82")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/component/swiper.vue.wxml:template:1:111")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[67],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[67],1,340)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/component/swiper.vue.wxml:swiper-item:1:941")
var oH=function(oJ,cI,lK,gg){
cs.push("./pages/component/swiper.vue.wxml:swiper-item:1:941")
var tM=_mz(z,'swiper-item',['class',9,'key',1],[],oJ,cI,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,11,oJ,cI,gg)){eN.wxVkey=1
cs.push("./pages/component/swiper.vue.wxml:image:1:1079")
cs.pop()
}
var bO=_v()
_(tM,bO)
if(_oz(z,12,oJ,cI,gg)){bO.wxVkey=1
cs.push("./pages/component/swiper.vue.wxml:video:1:1186")
cs.pop()
}
eN.wxXCkey=1
bO.wxXCkey=1
cs.pop()
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
cs.pop()
cs.push("./pages/component/swiper.vue.wxml:swiper:1:1563")
var oP=_mz(z,'swiper',['autoplay',13,'bindchange',1,'circular',2,'class',3,'data-comkey',4,'data-eventid',5,'duration',6,'indicatorActiveColor',7,'indicatorColor',8,'indicatorDots',9,'interval',10],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
cs.push("./pages/component/swiper.vue.wxml:swiper-item:1:1884")
var oR=function(cT,fS,hU,gg){
cs.push("./pages/component/swiper.vue.wxml:view:1:2056")
var cW=_n('view')
_rz(z,cW,'class',28,cT,fS,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,29,cT,fS,gg)){oX.wxVkey=1
cs.push("./pages/component/swiper.vue.wxml:image:1:2097")
cs.pop()
}
var lY=_v()
_(cW,lY)
if(_oz(z,30,cT,fS,gg)){lY.wxVkey=1
cs.push("./pages/component/swiper.vue.wxml:video:1:2204")
cs.pop()
}
oX.wxXCkey=1
lY.wxXCkey=1
cs.pop()
_(hU,cW)
return hU
}
xQ.wxXCkey=2
_2z(z,26,oR,e,s,gg,xQ,'item','index','index')
cs.pop()
cs.pop()
_(oB,oP)
cs.push("./pages/component/swiper.vue.wxml:view:1:2588")
var aZ=_mz(z,'view',['bindtouchend',31,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-comkey',4,'data-eventid',5],[],e,s,gg)
var t1=_v()
_(aZ,t1)
cs.push("./pages/component/swiper.vue.wxml:view:1:2767")
var e2=function(o4,b3,x5,gg){
cs.push("./pages/component/swiper.vue.wxml:view:1:3045")
var f7=_n('view')
_rz(z,f7,'class',41,o4,b3,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,42,o4,b3,gg)){c8.wxVkey=1
cs.push("./pages/component/swiper.vue.wxml:image:1:3086")
cs.pop()
}
var h9=_v()
_(f7,h9)
if(_oz(z,43,o4,b3,gg)){h9.wxVkey=1
cs.push("./pages/component/swiper.vue.wxml:video:1:3193")
cs.pop()
}
c8.wxXCkey=1
h9.wxXCkey=1
cs.pop()
_(x5,f7)
return x5
}
t1.wxXCkey=2
_2z(z,39,e2,e,s,gg,t1,'item','index','index')
cs.pop()
cs.pop()
_(oB,aZ)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var hQE=e_[x[67]].i
_ai(hQE,x[3],e_,x[67],1,1)
hQE.pop()
return r
}
e_[x[67]]={f:m42,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[68]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var cSE=e_[x[68]].i
_ai(cSE,x[69],e_,x[68],1,1)
var oTE=_v()
_(r,oTE)
cs.push("./pages/component/swiper.wxml:template:2:6")
var lUE=_oz(z,1,e,s,gg)
var aVE=_gd(x[68],lUE,e_,d_)
if(aVE){
var tWE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oTE.wxXCkey=3
aVE(tWE,tWE,oTE,gg)
gg.f=cur_globalf
}
else _w(lUE,x[68],2,18)
cs.pop()
cSE.pop()
return r
}
e_[x[68]]={f:m43,j:[],i:[],ti:[x[69]],ic:[]}
d_[x[70]]={}
d_[x[70]]["44613691"]=function(e,s,r,gg){
var z=gz$gwx_45()
var b=x[70]+':44613691'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/timeline.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[70]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/component/timeline.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[70],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[70],1,340)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var bYE=e_[x[70]].i
_ai(bYE,x[3],e_,x[70],1,1)
bYE.pop()
return r
}
e_[x[70]]={f:m44,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[71]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var x1E=e_[x[71]].i
_ai(x1E,x[72],e_,x[71],1,1)
var o2E=_v()
_(r,o2E)
cs.push("./pages/component/timeline.wxml:template:2:6")
var f3E=_oz(z,1,e,s,gg)
var c4E=_gd(x[71],f3E,e_,d_)
if(c4E){
var h5E=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o2E.wxXCkey=3
c4E(h5E,h5E,o2E,gg)
gg.f=cur_globalf
}
else _w(f3E,x[71],2,18)
cs.pop()
x1E.pop()
return r
}
e_[x[71]]={f:m45,j:[],i:[],ti:[x[72]],ic:[]}
d_[x[73]]={}
d_[x[73]]["f9a91cd2"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[73]+':f9a91cd2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[73]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:1:162")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/index/index.vue.wxml:template:1:191")
var cF=_v()
_(xC,cF)
cs.push("./pages/index/index.vue.wxml:template:1:191")
var hG=_oz(z,4,e,s,gg)
var oH=_gd(x[73],hG,e_,d_)
if(oH){
var cI=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[73],1,292)
cs.pop()
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
cs.push("./pages/index/index.vue.wxml:template:1:315")
var oJ=_v()
_(oD,oJ)
cs.push("./pages/index/index.vue.wxml:template:1:315")
var lK=_oz(z,7,e,s,gg)
var aL=_gd(x[73],lK,e_,d_)
if(aL){
var tM=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[73],1,419)
cs.pop()
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
cs.push("./pages/index/index.vue.wxml:template:1:442")
var eN=_v()
_(fE,eN)
cs.push("./pages/index/index.vue.wxml:template:1:442")
var bO=_oz(z,10,e,s,gg)
var oP=_gd(x[73],bO,e_,d_)
if(oP){
var xQ=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[73],1,543)
cs.pop()
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var c7E=e_[x[73]].i
_ai(c7E,x[5],e_,x[73],1,1)
_ai(c7E,x[6],e_,x[73],1,45)
_ai(c7E,x[7],e_,x[73],1,92)
c7E.pop()
c7E.pop()
c7E.pop()
return r
}
e_[x[73]]={f:m46,j:[],i:[],ti:[x[5],x[6],x[7]],ic:[]}
d_[x[74]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var l9E=e_[x[74]].i
_ai(l9E,x[75],e_,x[74],1,1)
var a0E=_v()
_(r,a0E)
cs.push("./pages/index/index.wxml:template:2:6")
var tAF=_oz(z,1,e,s,gg)
var eBF=_gd(x[74],tAF,e_,d_)
if(eBF){
var bCF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
a0E.wxXCkey=3
eBF(bCF,bCF,a0E,gg)
gg.f=cur_globalf
}
else _w(tAF,x[74],2,18)
cs.pop()
l9E.pop()
return r
}
e_[x[74]]={f:m47,j:[],i:[],ti:[x[75]],ic:[]}
d_[x[76]]={}
d_[x[76]]["0ef444a6"]=function(e,s,r,gg){
var z=gz$gwx_49()
var b=x[76]+':0ef444a6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/animation.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[76]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/plugin/animation.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[76],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[76],1,379)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var xEF=e_[x[76]].i
_ai(xEF,x[3],e_,x[76],1,1)
xEF.pop()
return r
}
e_[x[76]]={f:m48,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[77]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var fGF=e_[x[77]].i
_ai(fGF,x[78],e_,x[77],1,1)
var cHF=_v()
_(r,cHF)
cs.push("./pages/plugin/animation.wxml:template:2:6")
var hIF=_oz(z,1,e,s,gg)
var oJF=_gd(x[77],hIF,e_,d_)
if(oJF){
var cKF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cHF.wxXCkey=3
oJF(cKF,cKF,cHF,gg)
gg.f=cur_globalf
}
else _w(hIF,x[77],2,18)
cs.pop()
fGF.pop()
return r
}
e_[x[77]]={f:m49,j:[],i:[],ti:[x[78]],ic:[]}
d_[x[79]]={}
d_[x[79]]["7bfb330f"]=function(e,s,r,gg){
var z=gz$gwx_51()
var b=x[79]+':7bfb330f'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/drawer.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[79]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/plugin/drawer.vue.wxml:template:1:233")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[79],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[79],1,462)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var lMF=e_[x[79]].i
_ai(lMF,x[3],e_,x[79],1,1)
lMF.pop()
return r
}
e_[x[79]]={f:m50,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[80]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var tOF=e_[x[80]].i
_ai(tOF,x[81],e_,x[80],1,1)
var ePF=_v()
_(r,ePF)
cs.push("./pages/plugin/drawer.wxml:template:2:6")
var bQF=_oz(z,1,e,s,gg)
var oRF=_gd(x[80],bQF,e_,d_)
if(oRF){
var xSF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
ePF.wxXCkey=3
oRF(xSF,xSF,ePF,gg)
gg.f=cur_globalf
}
else _w(bQF,x[80],2,18)
cs.pop()
tOF.pop()
return r
}
e_[x[80]]={f:m51,j:[],i:[],ti:[x[81]],ic:[]}
d_[x[82]]={}
d_[x[82]]["b811c306"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[82]+':b811c306'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[82]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/plugin/home.vue.wxml:template:1:168")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[82],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[82],1,392)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
var fUF=e_[x[82]].i
_ai(fUF,x[3],e_,x[82],1,1)
fUF.pop()
return r
}
e_[x[82]]={f:m52,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[83]]={}
d_[x[83]]["053952a2"]=function(e,s,r,gg){
var z=gz$gwx_54()
var b=x[83]+':053952a2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/indexes.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[83]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/plugin/indexes.vue.wxml:template:1:111")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[83],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[83],1,380)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
var hWF=e_[x[83]].i
_ai(hWF,x[3],e_,x[83],1,1)
hWF.pop()
return r
}
e_[x[83]]={f:m53,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[84]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var cYF=e_[x[84]].i
_ai(cYF,x[85],e_,x[84],1,1)
var oZF=_v()
_(r,oZF)
cs.push("./pages/plugin/indexes.wxml:template:2:6")
var l1F=_oz(z,1,e,s,gg)
var a2F=_gd(x[84],l1F,e_,d_)
if(a2F){
var t3F=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oZF.wxXCkey=3
a2F(t3F,t3F,oZF,gg)
gg.f=cur_globalf
}
else _w(l1F,x[84],2,18)
cs.pop()
cYF.pop()
return r
}
e_[x[84]]={f:m54,j:[],i:[],ti:[x[85]],ic:[]}
d_[x[86]]={}
d_[x[86]]["62e90413"]=function(e,s,r,gg){
var z=gz$gwx_56()
var b=x[86]+':62e90413'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/mpvuePicker.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[86]);return}
p_[b]=true
try{
cs.push("./pages/plugin/mpvuePicker.vue.wxml:view:1:239")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/plugin/mpvuePicker.vue.wxml:picker-view:1:733")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/plugin/mpvuePicker.vue.wxml:picker-view:1:1271")
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/plugin/mpvuePicker.vue.wxml:picker-view:1:2011")
cs.pop()
}
var cF=_v()
_(oB,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
cs.push("./pages/plugin/mpvuePicker.vue.wxml:picker-view:1:2628")
cs.pop()
}
var hG=_v()
_(oB,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
cs.push("./pages/plugin/mpvuePicker.vue.wxml:picker-view:1:3402")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
return r
}
e_[x[86]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[87]]={}
d_[x[87]]["5a70ee8f"]=function(e,s,r,gg){
var z=gz$gwx_57()
var b=x[87]+':5a70ee8f'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/verticalnav.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[87]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/plugin/verticalnav.vue.wxml:template:1:146")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[87],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[87],1,382)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var o6F=e_[x[87]].i
_ai(o6F,x[3],e_,x[87],1,1)
o6F.pop()
return r
}
e_[x[87]]={f:m56,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[88]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
var o8F=e_[x[88]].i
_ai(o8F,x[89],e_,x[88],1,1)
var f9F=_v()
_(r,f9F)
cs.push("./pages/plugin/verticalnav.wxml:template:2:6")
var c0F=_oz(z,1,e,s,gg)
var hAG=_gd(x[88],c0F,e_,d_)
if(hAG){
var oBG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f9F.wxXCkey=3
hAG(oBG,oBG,f9F,gg)
gg.f=cur_globalf
}
else _w(c0F,x[88],2,18)
cs.pop()
o8F.pop()
return r
}
e_[x[88]]={f:m57,j:[],i:[],ti:[x[89]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/basics/layout","pages/basics/background","pages/basics/text","pages/basics/icon","pages/basics/button","pages/basics/design","pages/basics/tag","pages/basics/avatar","pages/basics/progress","pages/basics/shadow","pages/basics/loading","pages/component/bar","pages/component/nav","pages/component/list","pages/component/card","pages/component/form","pages/component/timeline","pages/component/chat","pages/component/swiper","pages/component/modal","pages/component/steps","pages/plugin/indexes","pages/plugin/animation","pages/plugin/drawer","pages/plugin/verticalnav"],"subPackages":[],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"ColorUi for UniApp","navigationStyle":"custom","navigationBarTextStyle":"white"},"usingComponents":{},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ColorUI-UniApp","compilerVersion":"1.9.2"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/basics/avatar.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/avatar.wxml']=$gwx('./pages/basics/avatar.wxml');

__wxAppCode__['pages/basics/background.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/background.wxml']=$gwx('./pages/basics/background.wxml');

__wxAppCode__['pages/basics/button.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/button.wxml']=$gwx('./pages/basics/button.wxml');

__wxAppCode__['pages/basics/design.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/design.wxml']=$gwx('./pages/basics/design.wxml');

__wxAppCode__['pages/basics/icon.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/icon.wxml']=$gwx('./pages/basics/icon.wxml');

__wxAppCode__['pages/basics/layout.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/layout.wxml']=$gwx('./pages/basics/layout.wxml');

__wxAppCode__['pages/basics/loading.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/loading.wxml']=$gwx('./pages/basics/loading.wxml');

__wxAppCode__['pages/basics/progress.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/progress.wxml']=$gwx('./pages/basics/progress.wxml');

__wxAppCode__['pages/basics/shadow.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/shadow.wxml']=$gwx('./pages/basics/shadow.wxml');

__wxAppCode__['pages/basics/tag.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/tag.wxml']=$gwx('./pages/basics/tag.wxml');

__wxAppCode__['pages/basics/text.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/basics/text.wxml']=$gwx('./pages/basics/text.wxml');

__wxAppCode__['pages/component/bar.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/bar.wxml']=$gwx('./pages/component/bar.wxml');

__wxAppCode__['pages/component/card.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/card.wxml']=$gwx('./pages/component/card.wxml');

__wxAppCode__['pages/component/chat.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/chat.wxml']=$gwx('./pages/component/chat.wxml');

__wxAppCode__['pages/component/form.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/form.wxml']=$gwx('./pages/component/form.wxml');

__wxAppCode__['pages/component/list.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/list.wxml']=$gwx('./pages/component/list.wxml');

__wxAppCode__['pages/component/modal.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/modal.wxml']=$gwx('./pages/component/modal.wxml');

__wxAppCode__['pages/component/nav.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/nav.wxml']=$gwx('./pages/component/nav.wxml');

__wxAppCode__['pages/component/steps.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/steps.wxml']=$gwx('./pages/component/steps.wxml');

__wxAppCode__['pages/component/swiper.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/swiper.wxml']=$gwx('./pages/component/swiper.wxml');

__wxAppCode__['pages/component/timeline.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/component/timeline.wxml']=$gwx('./pages/component/timeline.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/plugin/animation.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/plugin/animation.wxml']=$gwx('./pages/plugin/animation.wxml');

__wxAppCode__['pages/plugin/drawer.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/plugin/drawer.wxml']=$gwx('./pages/plugin/drawer.wxml');

__wxAppCode__['pages/plugin/indexes.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/plugin/indexes.wxml']=$gwx('./pages/plugin/indexes.wxml');

__wxAppCode__['pages/plugin/verticalnav.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/plugin/verticalnav.wxml']=$gwx('./pages/plugin/verticalnav.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"01c5":function(e,t,i){"use strict";var a=i("0579"),l=i.n(a);l.a},"0579":function(e,t,i){},"0986":function(e,t,i){},1240:function(e,t,i){"use strict";i.r(t);var a=i("24aa"),l=i("6a30");for(var r in l)"default"!==r&&function(e){i.d(t,e,function(){return l[e]})}(r);i("67ca");var n=i("2877"),c=Object(n["a"])(l["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"17a5":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var e=this.StatusBar,t=this.CustomBar,i=this.bgImage,a="height:".concat(t,"px;padding-top:").concat(e,"px;");return this.bgImage&&(a="".concat(a,"background-image:url(").concat(i,");")),a}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){e.navigateBack({delta:1})}}};t.default=i}).call(this,i("6e42")["default"])},2036:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",[i("scroll-view",{staticClass:"page",attrs:{"scroll-y":""}},[i("image",{staticClass:"response",attrs:{src:"/static/componentBg.png",mode:"widthFix"}}),i("view",{staticClass:"nav-list"},e._l(e.elements,function(t,a){return i("navigator",{key:a,staticClass:"nav-li",class:"bg-"+t.color,style:[{animation:"show "+(.2*(a+1)+1)+"s 1"}],attrs:{"hover-class":"none",url:"/pages/component/"+t.name,navigateTo:""}},[i("view",{staticClass:"nav-title"},[e._v(e._s(t.title))]),i("view",{staticClass:"nav-name"},[e._v(e._s(t.name))]),i("text",{class:"cuIcon-"+t.icon})])})),i("view",{staticClass:"cu-tabbar-height"})])],1)},l=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return l})},"24aa":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"mpvue-picker"},[i("view",{class:{pickerMask:e.showPicker},attrs:{catchtouchmove:"true",eventid:"62e90413-0"},on:{click:e.maskClick}}),i("view",{staticClass:"mpvue-picker-content ",class:{"mpvue-picker-view-show":e.showPicker}},[i("view",{staticClass:"mpvue-picker__hd",attrs:{catchtouchmove:"true"}},[i("view",{staticClass:"mpvue-picker__action",attrs:{eventid:"62e90413-1"},on:{click:e.pickerCancel}},[e._v("取消")]),i("view",{staticClass:"mpvue-picker__action",style:{color:e.themeColor},attrs:{eventid:"62e90413-2"},on:{click:e.pickerConfirm}},[e._v("确定")])]),"selector"===e.mode&&e.pickerValueSingleArray.length>0?i("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"62e90413-3"},on:{change:e.pickerChange}},[i("block",[i("picker-view-column",{attrs:{mpcomid:"62e90413-0"}},e._l(e.pickerValueSingleArray,function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])}))],1)],1):e._e(),"timeSelector"===e.mode?i("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"62e90413-4"},on:{change:e.pickerChange}},[i("block",[i("picker-view-column",{attrs:{mpcomid:"62e90413-1"}},e._l(e.pickerValueHour,function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),i("picker-view-column",{attrs:{mpcomid:"62e90413-2"}},e._l(e.pickerValueMinute,function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])}))],1)],1):e._e(),"multiSelector"===e.mode?i("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"62e90413-5"},on:{change:e.pickerChange}},e._l(e.pickerValueMulArray.length,function(t,a){return i("block",{key:a},[i("picker-view-column",{attrs:{mpcomid:"62e90413-3-"+a}},e._l(e.pickerValueMulArray[t],function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])}))],1)})):e._e(),"multiLinkageSelector"===e.mode&&2===e.deepLength?i("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"62e90413-6"},on:{change:e.pickerChangeMul}},[i("block",[i("picker-view-column",{attrs:{mpcomid:"62e90413-4"}},e._l(e.pickerValueMulTwoOne,function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),i("picker-view-column",{attrs:{mpcomid:"62e90413-5"}},e._l(e.pickerValueMulTwoTwo,function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])}))],1)],1):e._e(),"multiLinkageSelector"===e.mode&&3===e.deepLength?i("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"62e90413-7"},on:{change:e.pickerChangeMul}},[i("block",[i("picker-view-column",{attrs:{mpcomid:"62e90413-6"}},e._l(e.pickerValueMulThreeOne,function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),i("picker-view-column",{attrs:{mpcomid:"62e90413-7"}},e._l(e.pickerValueMulThreeTwo,function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),i("picker-view-column",{attrs:{mpcomid:"62e90413-8"}},e._l(e.pickerValueMulThreeThree,function(t,a){return i("view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])}))],1)],1):e._e()],1)])},l=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return l})},"328a":function(e,t,i){"use strict";i.r(t);var a=i("17a5"),l=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=l.a},3403:function(e,t,i){"use strict";i.r(t);var a=i("656f"),l=i("328a");for(var r in l)"default"!==r&&function(e){i.d(t,e,function(){return l[e]})}(r);var n=i("2877"),c=Object(n["a"])(l["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"36aa":function(e,t,i){"use strict";var a=i("3bc9"),l=i.n(a);l.a},"3bc9":function(e,t,i){},"43f1":function(e,t,i){"use strict";i.r(t);var a=i("5589"),l=i("d36a");for(var r in l)"default"!==r&&function(e){i.d(t,e,function(){return l[e]})}(r);i("bbeb");var n=i("2877"),c=Object(n["a"])(l["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"4cd3":function(e,t,i){"use strict";i.r(t);var a=i("c07e"),l=i("6bcb");for(var r in l)"default"!==r&&function(e){i.d(t,e,function(){return l[e]})}(r);i("36aa");var n=i("2877"),c=Object(n["a"])(l["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},5589:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",[i("scroll-view",{staticClass:"page",attrs:{"scroll-y":""}},[i("cu-custom",{attrs:{bgImage:"https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg",mpcomid:"b811c306-0"}},[i("block",{slot:"content"},[i("image",{staticStyle:{width:"240rpx",height:"60rpx"},attrs:{src:"/static/cjkz.png",mode:"aspectFill"}})])],1),i("view",{staticClass:"cu-card"},e._l(e.list,function(t,a){return i("view",{key:a,staticClass:"cu-item bg-img shadow-blur",style:[{backgroundImage:"url("+t.img+")"}],attrs:{"data-url":t.url,eventid:"b811c306-0-"+a},on:{tap:e.toChild}},[i("view",{staticClass:"cardTitle"},[e._v(e._s(t.title))])])})),i("view",{staticClass:"cu-tabbar-height"})],1)],1)},l=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return l})},6480:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(i("1240"));function l(e){return e&&e.__esModule?e:{default:e}}var r={name:"basics",components:{mpvuePicker:a.default},data:function(){return{pickerSingleArray:[{label:"中国",value:1},{label:"俄罗斯",value:2},{label:"美国",value:3},{label:"日本",value:4}],pickerValueDefault:[0],deepLength:1,themeColor:"#007AFF",pickerText:"",mode:"",pickerValueArray:[],elements:[{title:"布局",name:"layout",color:"cyan",icon:"newsfill"},{title:"背景",name:"background",color:"blue",icon:"colorlens"},{title:"文本",name:"text",color:"purple",icon:"font"},{title:"图标 ",name:"icon",color:"mauve",icon:"icon"},{title:"按钮",name:"button",color:"pink",icon:"btn"},{title:"标签",name:"tag",color:"brown",icon:"tagfill"},{title:"头像",name:"avatar",color:"red",icon:"myfill"},{title:"进度条",name:"progress",color:"orange",icon:"icloading"},{title:"边框阴影",name:"shadow",color:"olive",icon:"copy"}],swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}]}},methods:{showSinglePicker:function(){this.pickerValueArray=this.pickerSingleArray,this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onCancel:function(e){console.log(e)},onConfirm:function(e){this.pickerText=JSON.stringify(e)}},onBackPress:function(){return this.$refs.mpvuePicker.showPicker?(this.$refs.mpvuePicker.pickerCancel(),!0):this.$refs.mpvueCityPicker.showPicker?(this.$refs.mpvueCityPicker.pickerCancel(),!0):void 0},onUnload:function(){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel(),this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()},onLoad:function(){}};t.default=r},"656f":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",[i("view",{staticClass:"cu-custom",style:[{height:e.CustomBar+"px"}]},[i("view",{staticClass:"cu-bar fixed",class:[""!=e.bgImage?"none-bg text-white bg-img":"",e.bgColor],style:e.style},[e.isBack?i("view",{staticClass:"action",attrs:{eventid:"6f7d61c4-0"},on:{tap:e.BackPage}},[i("text",{staticClass:"cuIcon-back"}),e._t("backText",null,{mpcomid:"6f7d61c4-0"})],2):e._e(),i("view",{staticClass:"content",style:[{top:e.StatusBar+"px"}]},[e._t("content",null,{mpcomid:"6f7d61c4-1"})],2),e._t("right",null,{mpcomid:"6f7d61c4-2"})],2)])])},l=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return l})},"65f6":function(e,t,i){"use strict";i.r(t);var a=i("a68b"),l=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=l.a},"67ca":function(e,t,i){"use strict";var a=i("7956"),l=i.n(a);l.a},"6a30":function(e,t,i){"use strict";i.r(t);var a=i("ea2e"),l=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=l.a},"6bcb":function(e,t,i){"use strict";i.r(t);var a=i("6480"),l=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=l.a},7956:function(e,t,i){},"829d":function(e,t,i){"use strict";i.r(t);var a=i("2036"),l=i("65f6");for(var r in l)"default"!==r&&function(e){i.d(t,e,function(){return l[e]})}(r);i("01c5");var n=i("2877"),c=Object(n["a"])(l["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},a09e:function(e,t,i){},a68b:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{elements:[{title:"操作条",name:"bar",color:"purple",icon:"vipcard"},{title:"导航栏 ",name:"nav",color:"mauve",icon:"formfill"},{title:"列表",name:"list",color:"pink",icon:"list"},{title:"卡片",name:"card",color:"brown",icon:"newsfill"},{title:"表单",name:"form",color:"red",icon:"formfill"},{title:"时间轴",name:"timeline",color:"orange",icon:"timefill"},{title:"聊天",name:"chat",color:"green",icon:"messagefill"},{title:"轮播",name:"swiper",color:"olive",icon:"album"},{title:"模态框",name:"modal",color:"grey",icon:"squarecheckfill"},{title:"步骤条",name:"steps",color:"cyan",icon:"roundcheckfill"}]}}};t.default=a},b648:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"components",data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,list:[{title:"索引列表",img:"https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",url:"../plugin/indexes"},{title:"微动画",img:"https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",url:"../plugin/animation"},{title:"全屏抽屉",img:"https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg",url:"../plugin/drawer"},{title:"垂直导航",img:"https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg",url:"../plugin/verticalnav"}]}},methods:{toChild:function(t){e.navigateTo({url:t.currentTarget.dataset.url})}}};t.default=i}).call(this,i("6e42")["default"])},bbeb:function(e,t,i){"use strict";var a=i("a09e"),l=i.n(a);l.a},c07e:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",[i("scroll-view",{staticClass:"page",attrs:{"scroll-y":""}},[i("cu-custom",{attrs:{bgImage:"https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg",mpcomid:"72a9ceeb-0"}},[i("block",{slot:"content"},[i("view",{staticClass:"cardTitle"},[e._v("成绩中心")])])],1),i("view",{staticClass:"uni-btn-v"},[i("button",{attrs:{type:"default",eventid:"72a9ceeb-0"},on:{click:e.showSinglePicker}},[e._v("选择学年")])],1),i("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:e.themeColor,mode:e.mode,deepLength:e.deepLength,pickerValueDefault:e.pickerValueDefault,pickerValueArray:e.pickerValueArray,eventid:"72a9ceeb-1",mpcomid:"72a9ceeb-1"},on:{onConfirm:e.onConfirm,onCancel:e.onCancel}}),i("view",{staticClass:"nav-list"},e._l(e.elements,function(t,a){return i("navigator",{key:a,staticClass:"nav-li",class:"bg-"+t.color,style:[{animation:"show "+(.2*(a+1)+1)+"s 1"}],attrs:{"hover-class":"none",url:"/pages/basics/"+t.name,navigateTo:""}},[i("view",{staticClass:"nav-title"},[e._v(e._s(t.title))]),i("view",{staticClass:"nav-name"},[e._v(e._s(t.name))]),i("text",{class:"cuIcon-"+t.icon})])})),i("view",{staticClass:"cu-tabbar-height"})],1)],1)},l=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return l})},c35b:function(e,t,i){"use strict";var a=i("0986"),l=i.n(a);l.a},c752:function(e,t,i){"use strict";i("97e8");var a=o(i("f3d3")),l=o(i("ec21")),r=o(i("4cd3")),n=o(i("829d")),c=o(i("43f1")),u=o(i("3403"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){p(e,t,i[t])})}return e}function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}a.default.component("basics",r.default),a.default.component("components",n.default),a.default.component("plugin",c.default),a.default.component("cu-custom",u.default),a.default.config.productionTip=!1,l.default.mpType="app";var h=new a.default(s({},l.default));h.$mount()},d36a:function(e,t,i){"use strict";i.r(t);var a=i("b648"),l=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=l.a},dd9f:function(e,t,i){"use strict";i.r(t);var a=i("e6e0"),l=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=l.a},e6e0:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(i("f3d3"));function l(e){return e&&e.__esModule?e:{default:e}}var r={onLaunch:function(){e.getSystemInfo({success:function(e){a.default.prototype.StatusBar=e.statusBarHeight,"android"==e.platform?a.default.prototype.CustomBar=e.statusBarHeight+50:a.default.prototype.CustomBar=e.statusBarHeight+45}}),a.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=r}).call(this,i("6e42")["default"])},ea2e:function(e,t,i){"use strict";function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={data:function(){return{pickerChangeValue:[],pickerValue:[],pickerValueArrayChange:!0,modeChange:!1,pickerValueSingleArray:[],pickerValueHour:[],pickerValueMinute:[],pickerValueMulArray:[],pickerValueMulTwoOne:[],pickerValueMulTwoTwo:[],pickerValueMulThreeOne:[],pickerValueMulThreeTwo:[],pickerValueMulThreeThree:[],showPicker:!1}},props:{mode:{type:String,default:"selector"},pickerValueArray:{type:Array,default:function(){return[]}},pickerValueDefault:{type:Array,default:function(){return[]}},deepLength:{type:Number,default:2},themeColor:String},watch:a({pickerValueArray:function(e,t){this.pickerValueArrayChange=!0},mode:function(e,t){this.modeChange=!0}},"pickerValueArray",function(e){this.initPicker(e)}),methods:{initPicker:function(e){var t=e;if(this.pickerValue=this.pickerValueDefault,"selector"===this.mode)this.pickerValueSingleArray=e;else if("timeSelector"===this.mode){this.modeChange=!1;for(var i=[],a=[],l=0;l<24;l++)i.push({value:l,label:l>9?"".concat(l," 时"):"0".concat(l," 时")});for(var r=0;r<60;r++)a.push({value:r,label:r>9?"".concat(r," 分"):"0".concat(r," 分")});this.pickerValueHour=i,this.pickerValueMinute=a}else if("multiSelector"===this.mode)this.pickerValueMulArray=e;else if("multiLinkageSelector"===this.mode&&2===this.deepLength){for(var n=[],c=[],u=0,o=t.length;u<o;u++)n.push(t[u]);if(2===this.pickerValueDefault.length)for(var s=this.pickerValueDefault[0],p=0,h=t[s].children.length;p<h;p++)c.push(t[s].children[p]);else for(var f=0,d=t[0].children.length;f<d;f++)c.push(t[0].children[f]);this.pickerValueMulTwoOne=n,this.pickerValueMulTwoTwo=c}else if("multiLinkageSelector"===this.mode&&3===this.deepLength){for(var m=[],k=[],v=[],g=0,b=t.length;g<b;g++)m.push(t[g]);if(this.pickerValueDefault=3===this.pickerValueDefault.length?this.pickerValueDefault:[0,0,0],3===this.pickerValueDefault.length){for(var w=this.pickerValueDefault[0],V=0,y=t[w].children.length;V<y;V++)k.push(t[w].children[V]);for(var C=this.pickerValueDefault[1],_=0,T=t[w].children[C].children.length;_<T;_++)v.push(t[w].children[C].children[_])}this.pickerValueMulThreeOne=m,this.pickerValueMulThreeTwo=k,this.pickerValueMulThreeThree=v}},show:function(){var e=this;setTimeout(function(){e.pickerValueArrayChange||e.modeChange?(e.initPicker(e.pickerValueArray),e.showPicker=!0,e.pickerValueArrayChange=!1,e.modeChange=!1):e.showPicker=!0},0)},maskClick:function(){this.pickerCancel()},pickerCancel:function(){this.showPicker=!1,this._initPickerVale();var e={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onCancel",e)},pickerConfirm:function(e){this.showPicker=!1,this._initPickerVale();var t={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onConfirm",t)},showPickerView:function(){this.showPicker=!0},pickerChange:function(e){this.pickerValue=e.mp.detail.value;var t={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",t)},pickerChangeMul:function(e){if(2===this.deepLength){var t=this.pickerValueArray,i=e.mp.detail.value;if(i[0]!==this.pickerValue[0]){for(var a=[],l=0,r=t[i[0]].children.length;l<r;l++)a.push(t[i[0]].children[l]);this.pickerValueMulTwoTwo=a,i[1]=0}this.pickerValue=i}else if(3===this.deepLength){var n=this.pickerValueArray,c=e.mp.detail.value,u=[],o=[];if(c[0]!==this.pickerValue[0]){this.pickerValueMulThreeTwo=[];for(var s=0,p=n[c[0]].children.length;s<p;s++)u.push(n[c[0]].children[s]);for(var h=0,f=n[c[0]].children[0].children.length;h<f;h++)o.push(n[c[0]].children[0].children[h]);c[1]=0,c[2]=0,this.pickerValueMulThreeTwo=u,this.pickerValueMulThreeThree=o}else if(c[1]!==this.pickerValue[1]){this.pickerValueMulThreeThree=[],u=this.pickerValueMulThreeTwo;for(var d=0,m=n[c[0]].children[c[1]].children.length;d<m;d++)o.push(n[c[0]].children[c[1]].children[d]);c[2]=0,this.pickerValueMulThreeThree=o}this.pickerValue=c}var k={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",k)},_getPickerLabelAndValue:function(e,t){var i,a=[];if("selector"===t)i=this.pickerValueSingleArray[e].label,a.push(this.pickerValueSingleArray[e].value);else if("timeSelector"===t)i="".concat(this.pickerValueHour[e[0]].label,"-").concat(this.pickerValueMinute[e[1]].label),a.push(this.pickerValueHour[e[0]].value),a.push(this.pickerValueHour[e[1]].value);else if("multiSelector"===t)for(var l=0;l<e.length;l++)l>0?i+=this.pickerValueMulArray[l][e[l]].label+(l===e.length-1?"":"-"):i=this.pickerValueMulArray[l][e[l]].label+"-",a.push(this.pickerValueMulArray[l][e[l]].value);else"multiLinkageSelector"===t&&(i=2===this.deepLength?"".concat(this.pickerValueMulTwoOne[e[0]].label,"-").concat(this.pickerValueMulTwoTwo[e[1]].label):"".concat(this.pickerValueMulThreeOne[e[0]].label,"-").concat(this.pickerValueMulThreeTwo[e[1]].label,"-").concat(this.pickerValueMulThreeThree[e[2]].label),2===this.deepLength?(a.push(this.pickerValueMulTwoOne[e[0]].value),a.push(this.pickerValueMulTwoTwo[e[1]].value)):(a.push(this.pickerValueMulThreeOne[e[0]].value),a.push(this.pickerValueMulThreeTwo[e[1]].value),a.push(this.pickerValueMulThreeThree[e[2]].value)));return{label:i,value:a}},_initPickerVale:function(){0===this.pickerValue.length&&("selector"===this.mode?this.pickerValue=[0]:"multiSelector"===this.mode?this.pickerValue=new Int8Array(this.pickerValueArray.length):"multiLinkageSelector"===this.mode&&2===this.deepLength?this.pickerValue=[0,0]:"multiLinkageSelector"===this.mode&&3===this.deepLength&&(this.pickerValue=[0,0,0]))}}};t.default=l},ec21:function(e,t,i){"use strict";i.r(t);var a=i("dd9f");for(var l in a)"default"!==l&&function(e){i.d(t,e,function(){return a[e]})}(l);i("c35b");var r,n,c=i("2877"),u=Object(c["a"])(a["default"],r,n,!1,null,null,null);t["default"]=u.exports}},[["c752","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"6e42":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=dt,e.createPage=$t,e.createComponent=wt,e.default=void 0;var r=o(n("f3d3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=Object.prototype.toString,s=Object.prototype.hasOwnProperty;function c(t){return"function"===typeof t}function u(t){return"string"===typeof t}function f(t){return"[object Object]"===a.call(t)}function p(t,e){return s.call(t,e)}function l(){}function d(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var h=/-(\w)/g,v=d(function(t){return t.replace(h,function(t,e){return e?e.toUpperCase():""})}),_=/requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/,y=/^create|Manager$/,m=/^on/;function g(t){return y.test(t)}function $(t){return _.test(t)}function b(t){return m.test(t)}function w(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function x(t){return!(g(t)||$(t)||b(t))}function A(t,e){return x(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return c(t.success)||c(t.fail)||c(t.complete)?e.apply(void 0,[t].concat(r)):w(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}:e}var O=1e-4,k=750,C=!1,P=0,j=0;function S(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;P=r,j=n,C="ios"===e}function I(t,e){if(0===P&&S(),t=Number(t),0===t)return 0;var n=t/k*(e||P);return n<0&&(n=-n),n=Math.floor(n+O),0===n?1!==j&&C?.5:1:t<0?-n:n}var E={},T=["success","fail","cancel","complete"];function D(t,e,n){return function(r){return e(M(t,r,n))}}function N(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(f(e)){var i=!0===o?e:{};for(var a in c(n)&&(n=n(e,i)||{}),e)if(p(n,a)){var s=n[a];c(s)&&(s=s(e[a],e,i)),s?u(s)?i[s]=e[a]:f(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else T.includes(a)?i[a]=D(t,e[a],r):o||(i[a]=e[a]);return i}return c(e)&&(e=D(t,e,r)),e}function M(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c(E.returnValue)&&(e=E.returnValue(t,e)),N(t,e,n,{},r)}function R(t,e){if(p(E,t)){var n=E[t];return n?function(e,r){var o=n;c(n)&&(o=n(e)),e=N(t,e,o.args,o.returnValue);var i=wx[o.name||t](e,r);return $(t)?M(t,i,o.returnValue,g(t)):i}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var B=Object.create(null),V=["subscribePush","unsubscribePush","onPush","offPush","share"];function U(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};c(n)&&n(o),c(r)&&r(o)}}function L(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}V.forEach(function(t){B[t]=U(t)});var W=Object.freeze({requireNativePlugin:L}),F=Page,H=Component,z=/:/g,q=d(function(t){return v(t.replace(z,"-"))});function J(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[q(n)].concat(o))}}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="onLoad",n=t[e];return t[e]=n?function(){J(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){J(this)},F(t)};var K=Behavior({created:function(){J(this)}});Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t.behaviors||(t.behaviors=[])).unshift(K),H(t)};var G=["__route__","__wxExparserNodeId__","__wxWebviewId__","__webviewId__"];function X(t){var e=t.$mp[t.mpType];G.forEach(function(n){p(e,n)&&(t[n]=e[n])})}function Z(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm.__call_hook(e,t)}})}function Q(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||p(n,t)||(n[t]=r[t])}),n}var Y=[String,Number,Boolean,Object,Array,null];function tt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function et(t){var e={vueSlots:{type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}};return Array.isArray(t)?t.forEach(function(t){e[t]={type:null,observer:tt(t)}}):f(t)&&Object.keys(t).forEach(function(n){var r=t[n];if(f(r)){var o=r["default"];c(o)&&(o=o()),e[n]={type:Y.includes(r.type)?r.type:null,value:o,observer:tt(n)}}else e[n]={type:Y.includes(r)?r:null,observer:tt(n)}}),e}function nt(t){return t.stopPropagation=l,t.preventDefault=l,t.target=t.target||{},p(t,"detail")||(t.detail={}),t.mp=t,f(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function rt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):f(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function ot(t,e){var n={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){n["$"+r]="string"===typeof e?e?t.__get_value(e):t:rt(t,e)}),n}function it(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function at(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=ot(t,r),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(it(t)):"string"===typeof t&&p(s,t)?c.push(s[t]):c.push(t)}),c}var st="~",ct="^";function ut(t){var e=this;t=nt(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===ct;o=a?o.slice(1):o;var s=o.charAt(0)===st;o=s?o.slice(1):o,i&&r===o&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm[r];if(!c(o))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(e.$vm,at(e.$vm,t,n[1],n[2],a,r))}})})}function ft(t){var e=t.$mp[t.mpType];Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}var pt=["onHide","onError","onPageNotFound","onUniNViewMessage"];function lt(t){this.$vm||(this.$vm=t,this.$vm.$mp={app:this})}function dt(t){r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(ft(this),X(this)))},created:function(){this.__init_injections(this),this.__init_provide(this)}});var e={onLaunch:function(e){lt.call(this,t),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onLaunch",e)},onShow:function(e){lt.call(this,t),this.$vm.__call_hook("onShow",e)}};return e.globalData=t.$options.globalData||{},Z(e,pt),App(e),t}function ht(t,e){t.triggerEvent("__l",t.$vm||e,{bubbles:!0,composed:!0})}function vt(t){t.detail.$mp?t.detail.$parent||(t.detail.$parent=this.$vm,t.detail.$parent.$children.push(t.detail),t.detail.$root=this.$vm.$root):t.detail.parent||(t.detail.parent=this.$vm)}function _t(t){yt(t)}function yt(t){t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))}}var mt=["onShow","onHide","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap","onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function gt(t){this.$vm||(this.$vm=new t({mpType:"page",mpInstance:this}),this.$vm.__call_hook("created"),this.$vm.$mount())}function $t(t){var e;t=t.default||t,c(t)?(e=t,t=e.extendOptions):e=r.default.extend(t);var n={options:{multipleSlots:!0,addGlobalClass:!0},data:Q(t,r.default.prototype),lifetimes:{attached:function(){gt.call(this,e)},ready:function(){this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},methods:{onLoad:function(t){gt.call(this,e),this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},onUnload:function(){this.$vm.__call_hook("onUnload")},__e:ut,__l:vt}};return Z(n.methods,mt),_t(n),Component(n)}function bt(t){if(!this.$vm){var e={mpType:"component",mpInstance:this,propsData:this.properties};this.$vm=new t(e);var n=this.properties.vueSlots;if(Array.isArray(n)&&n.length){var r=Object.create(null);n.forEach(function(t){r[t]=!0}),this.$vm.$scopedSlots=this.$vm.$slots=r}this.$vm.$mount()}}function wt(t){t=t.default||t;var e=et(t.props),n=r.default.extend(t),o={options:{multipleSlots:!0,addGlobalClass:!0},data:Q(t,r.default.prototype),properties:e,lifetimes:{attached:function(){bt.call(this,n)},ready:function(){bt.call(this,n),ht(this),this.$vm.__call_hook("created"),this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__e:ut,__l:vt}};return yt(o),Component(o)}var xt={};"undefined"!==typeof Proxy?xt=new Proxy({},{get:function(t,e){return"upx2px"===e?I:W[e]?A(e,W[e]):p(wx,e)||p(E,e)?A(e,R(e,wx[e])):void 0}}):(xt.upx2px=I,Object.keys(W).forEach(function(t){xt[t]=A(t,W[t])}),Object.keys(wx).forEach(function(t){(p(wx,t)||p(E,t))&&(xt[t]=A(t,R(t,wx[t])))}));var At=xt,Ot=At;e.default=Ot},"97e8":function(t,e,n){},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function p(t){return"[object Object]"===f.call(t)}function l(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function $(t,e){return g.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/([^-])([A-Z])/g,k=b(function(t){return t.replace(O,"$1-$2").replace(O,"$1-$2").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function j(t,e){for(var n in e)t[n]=e[n];return t}function S(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function I(t,e,n){}var E=function(t,e,n){return!1},T=function(t){return t};function D(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function N(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:I,parsePlatformTagName:T,mustUseProp:E,_lifecycleHooks:V},L=Object.freeze({});function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function F(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function z(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var q=I;function J(t,e,n){if(U.errorHandler)U.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var K,G="__proto__"in{},X="undefined"!==typeof window,Z=["mpvue-runtime"].join(),Q=(Z&&/msie|trident/.test(Z),Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),Y=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)),tt=(Z&&/chrome\/\d+/.test(Z),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===K&&(K=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),K},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Y&&setTimeout(I)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){J(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){m(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function pt(t){ut.target&&ft.push(ut.target),ut.target=t}function lt(){ut.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];F(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),_t={shouldConvert:!0},yt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,F(t,"__ob__",this),Array.isArray(t)){var e=G?mt:gt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function gt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];F(t,i,e[i])}}function $t(t,e){var n;if(u(t))return $(t,"__ob__")&&t.__ob__ instanceof yt?n=t.__ob__:_t.shouldConvert&&!nt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new yt(t)),e&&n&&n.vmCount++,n}function bt(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&$t(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&At(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&$t(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if($(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(bt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||$(t,e)&&(delete t[e],n&&n.dep.notify())}}function At(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&At(e)}yt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)bt(t,e[n],t[e[n]])},yt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)$t(t[e])};var Ot=U.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],$(t,n)?p(r)&&p(o)&&kt(r,o):wt(t,n,o);return t}function Ct(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function Pt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function jt(t,e){var n=Object.create(t||null);return e?j(n,e):n}Ot.data=function(t,e,n){return n?Ct(t,e,n):e&&"function"!==typeof e?t:Ct.call(this,t,e)},V.forEach(function(t){Ot[t]=Pt}),B.forEach(function(t){Ot[t+"s"]=jt}),Ot.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in j(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},Ot.props=Ot.methods=Ot.inject=Ot.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return j(n,t),j(n,e),n},Ot.provide=Ct;var St=function(t,e){return void 0===e?t:e};function It(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(p(e))for(var a in e)r=e[a],o=x(a),i[o]=p(r)?r:{type:r};t.props=i}}function Et(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Dt(t,e,n){"function"===typeof e&&(e=e.options),It(e),Et(e),Tt(e);var r=e.extends;if(r&&(t=Dt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Dt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)$(t,a)||c(a);function c(r){var o=Ot[r]||St;s[r]=o(t[r],e[r],n,r)}return s}function Nt(t,e,n,r){if("string"===typeof n){var o=t[e];if($(o,n))return o[n];var i=x(n);if($(o,i))return o[i];var a=A(i);if($(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Mt(t,e,n,r){var o=e[t],i=!$(n,t),a=n[t];if(Vt(Boolean,o.type)&&(i&&!$(o,"default")?a=!1:Vt(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Rt(r,o,t);var s=_t.shouldConvert;_t.shouldConvert=!0,$t(a),_t.shouldConvert=s}return a}function Rt(t,e,n){if($(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Vt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Ut=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Lt={child:{}};Lt.child.get=function(){return this.componentInstance},Object.defineProperties(Ut.prototype,Lt);var Wt=function(t){void 0===t&&(t="");var e=new Ut;return e.text=t,e.isComment=!0,e};function Ft(t){return new Ut(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Ut(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function zt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var qt,Jt=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Kt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Gt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Jt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Kt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=Jt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=k(u);Zt(a,c,u,f,!0)||Zt(a,s,u,f,!1)}return a}}function Zt(t,e,n,r,o){if(i(e)){if($(e,n))return t[n]=e[n],o||delete e[n],!0;if($(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return c(t)?[Ft(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Ft(r)):te(r)&&te(s)?u[u.length-1]=Ft(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Wt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=M(function(n){t.resolved=ne(n,e),s||c()}),p=M(function(e){i(t.errorComp)&&(t.error=!0,c())}),l=t(f,p);return u(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(f,p):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(f,p),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&p(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?qt.$once(t,e):qt.$on(t,e)}function ce(t,e){qt.$off(t,e)}function ue(t,e,n){qt=t,Gt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?P(r):r;for(var o=P(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){J(n,e,'event handler for "'+t+'"')}}return e}}function pe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function _e(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ye(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Wt),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Me(t,r,I),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function me(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==L);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){_t.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Mt(u,t.$options.props,e,t)}_t.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=pe(o,r.context),t.$forceUpdate())}function ge(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $e(t,e){if(e){if(t._directInactive=!1,ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"activated")}}function be(t,e){if((!e||(t._directInactive=!0,!ge(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){J(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Ae=[],Oe={},ke=!1,Ce=!1,Pe=0;function je(){Pe=xe.length=Ae.length=0,Oe={},ke=Ce=!1}function Se(){var t,e;for(Ce=!0,xe.sort(function(t,e){return t.id-e.id}),Pe=0;Pe<xe.length;Pe++)t=xe[Pe],e=t.id,Oe[e]=null,t.run();var n=Ae.slice(),r=xe.slice();je(),Te(n),Ie(r),rt&&U.devtools&&rt.emit("flush")}function Ie(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Ee(t){t._inactive=!1,Ae.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$e(t[e],!0)}function De(t){var e=t.id;if(null==Oe[e]){if(Oe[e]=!0,Ce){var n=xe.length-1;while(n>Pe&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(Se))}}var Ne=0,Me=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ne,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Me.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;J(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),lt(),this.cleanupDeps()}return t},Me.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Me.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Me.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():De(this)},Me.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){J(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Me.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Me.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Me.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Re=new it;function Be(t){Re.clear(),Ve(t,Re)}function Ve(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Ve(t[r[n]],e)}}}var Ue={enumerable:!0,configurable:!0,get:I,set:I};function Le(t,e,n){Ue.get=function(){return this[e][n]},Ue.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ue)}function We(t){t._watchers=[];var e=t.$options;e.props&&Fe(t,e.props),e.methods&&Xe(t,e.methods),e.data?He(t):$t(t._data={},!0),e.computed&&Je(t,e.computed),e.watch&&e.watch!==tt&&Ze(t,e.watch)}function Fe(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;_t.shouldConvert=i;var a=function(i){o.push(i);var a=Mt(i,e,n,t);bt(r,i,a),i in t||Le(t,"_props",i)};for(var s in e)a(s);_t.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?ze(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&$(r,i)||W(i)||Le(t,"_data",i)}$t(e,!0)}function ze(t,e){try{return t.call(e)}catch(n){return J(n,e,"data()"),{}}}var qe={lazy:!0};function Je(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Me(t,i,I,qe),r in t||Ke(t,r,o)}}function Ke(t,e,n){"function"===typeof n?(Ue.get=Ge(e),Ue.set=I):(Ue.get=n.get?!1!==n.cache?Ge(e):n.get:I,Ue.set=n.set?n.set:I),Object.defineProperty(t,e,Ue)}function Ge(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?I:C(e[n],t)}function Ze(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Qe(t,n,r[o]);else Qe(t,n,r)}}function Qe(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var o=new Me(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(_t.shouldConvert=!1,Object.keys(e).forEach(function(n){bt(t,n,e[n])}),_t.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Mt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},p=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return pe(o,r)}});return p instanceof Ut&&(p.functionalContext=r,p.functionalOptions=t.options,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ee(n):$e(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?be(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&ln(t.options,e);var p=Xt(e,t,s);if(a(t.options.functional))return rn(t,p,e,n,r);var l=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new Ut("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?pn(o,r):o}}function pn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),_n(t,e,n,r,o)}function _n(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Wt();if(i(n)&&i(n.is)&&(e=n.is),!e)return Wt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Yt(r):o===dn&&(r=Qt(r)),"string"===typeof e)?(s=U.getTagNamespace(e),a=U.isReservedTag(e)?new Ut(U.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Nt(t.$options,"components",e))?cn(c,n,t,r,e):new Ut(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&yn(a,s),a):Wt()}function yn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&yn(a,e)}}function mn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function gn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=j(j({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function $n(t){return Nt(this.$options,"filters",t,!0)||T}function bn(t,e,n){var r=U.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=S(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?zt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),On(n,"__static__"+t,!1),n)}function An(t,e,n){return On(t,"__once__"+e+(n?"_"+n:""),!0),t}function On(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Cn(t,e){if(e)if(p(e)){var n=t.on=t.on?j({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Pn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=pe(t.$options._renderChildren,n),t.$scopedSlots=L,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;bt(t,"$attrs",r&&r.attrs,null,!0),bt(t,"$listeners",r&&r.on,null,!0)}function jn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=zt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||L,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){J(n,e,"render function"),t=e._vnode}return t instanceof Ut||(t=Wt()),t.parent=a,t},t.prototype._o=An,t.prototype._n=v,t.prototype._s=h,t.prototype._l=mn,t.prototype._t=gn,t.prototype._q=D,t.prototype._i=N,t.prototype._m=xn,t.prototype._f=$n,t.prototype._k=bn,t.prototype._b=wn,t.prototype._v=Ft,t.prototype._e=Wt,t.prototype._u=de,t.prototype._g=Cn}var Sn=0;function In(t){t.prototype._init=function(t){var e=this;e._uid=Sn++,e._isVue=!0,t&&t._isComponent?En(e,t):e.$options=Dt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Pn(e),we(e,"beforeCreate"),en(e),We(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function En(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Dn(t);o&&j(t.extendOptions,o),e=t.options=Dt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Dn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Nn(n[i],r[i],o[i]));return e}function Nn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Mn(t){this._init(t)}function Rn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Dt(this.options,t),this}}function Vn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Dt(n.options,t),a["super"]=n,a.options.props&&Un(a),a.options.computed&&Ln(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=j({},a.options),o[r]=a,a}}function Un(t){var e=t.options.props;for(var n in e)Le(t.prototype,"_props",n)}function Ln(t){var e=t.options.computed;for(var n in e)Ke(t.prototype,n,e[n])}function Wn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}In(Mn),Ye(Mn),fe(Mn),_e(Mn),jn(Mn);var Fn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function zn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function qn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&Jn(o),t[r]=null)}}}function Jn(t){t&&t.componentInstance.$destroy()}var Kn={name:"keep-alive",abstract:!0,props:{include:Fn,exclude:Fn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Jn(t.cache[e])},watch:{include:function(t){qn(this.cache,this._vnode,function(e){return zn(t,e)})},exclude:function(t){qn(this.cache,this._vnode,function(e){return!zn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!zn(this.include,n)||this.exclude&&zn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Gn={KeepAlive:Kn};function Xn(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:q,extend:j,mergeOptions:Dt,defineReactive:bt},t.set=wt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,j(t.options.components,Gn),Rn(t),Bn(t),Vn(t),Wn(t)}Xn(Mn),Object.defineProperty(Mn.prototype,"$isServer",{get:nt}),Object.defineProperty(Mn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Mn.version="2.4.1",Mn.mpvueVersion="1.0.12";var Zn=_("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=_("style,class");_("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),_("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function pr(t,e){}function lr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function _r(t,e,n){return or}var yr=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:pr,parentNode:lr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:_r}),mr={create:function(t,e){gr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(gr(t,!0),gr(e))},destroy:function(t){gr(t,!0)}};function gr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?m(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var $r=new Ut("",{},[]),br=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Ar(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Or(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<br.length;++e)for(r[br[e]]=[],n=0;n<s.length;++n)i(s[n][br[e]])&&r[br[e]].push(s[n][br[e]]);function f(t){return new Ut(u.tagName(t).toLowerCase(),{},[],void 0,t)}function p(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),w(t),g(t,c,e),i(s)&&b(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),m(n,t.elm,r)):(t.elm=u.createTextNode(t.text),m(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&y(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,$(t)?(b(t,e),w(t)):(gr(t),e.push(t))}function y(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a]($r,s);e.push(s);break}m(n,t.elm,o)}function m(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function $(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function b(t,n){for(var o=0;o<r.create.length;++o)r.create[o]($r,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create($r,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function A(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function O(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),A(o)):l(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=p(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function C(t,e,n,r,a){var s,c,f,p,l=0,h=0,v=e.length-1,_=e[0],y=e[v],m=n.length-1,g=n[0],$=n[m],b=!a;while(l<=v&&h<=m)o(_)?_=e[++l]:o(y)?y=e[--v]:wr(_,g)?(P(_,g,r),_=e[++l],g=n[++h]):wr(y,$)?(P(y,$,r),y=e[--v],$=n[--m]):wr(_,$)?(P(_,$,r),b&&u.insertBefore(t,_.elm,u.nextSibling(y.elm)),_=e[++l],$=n[--m]):wr(y,g)?(P(y,g,r),b&&u.insertBefore(t,y.elm,_.elm),y=e[--v],g=n[++h]):(o(s)&&(s=Ar(e,l,v)),c=i(g.key)?s[g.key]:null,o(c)?(d(g,r,t,_.elm),g=n[++h]):(f=e[c],wr(f,g)?(P(f,g,r),e[c]=void 0,b&&u.insertBefore(t,f.elm,_.elm),g=n[++h]):(d(g,r,t,_.elm),g=n[++h])));l>v?(p=o(n[m+1])?null:n[m+1].elm,x(t,p,n,h,m,r)):h>m&&O(t,e,l,v)}function P(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?I(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var l=t.children,d=e.children;if(i(p)&&$(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(l)&&i(d)?l!==d&&C(c,l,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(l)?O(c,l,0,l.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function j(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var S=_("attrs,style,class,staticClass,staticStyle,key");function I(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!I(f,c[p],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else g(n,c,r);if(i(s))for(var l in s)if(!S(l)){b(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,p){if(!o(e)){var l=!1,h=[];if(o(t))l=!0,d(e,h,c,p);else{var v=i(t.nodeType);if(!v&&wr(t,e))P(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),a(n)&&I(t,e,h))return j(e,h,!0),t;t=f(t)}var _=t.elm,y=u.parentNode(_);if(d(e,h,_._leaveCb?null:y,u.nextSibling(_)),i(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if($(e))for(var g=0;g<r.create.length;++g)r.create[g]($r,e.parent)}i(y)?O(y,[t],0,0):i(t.tag)&&A(t)}}return j(e,h,l),e.elm}i(t)&&A(t)}}var kr=[mr],Cr=Or({nodeOps:yr,modules:kr});function Pr(){Cr.apply(this,arguments),this.$updateDataToMP()}function jr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){J(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return jr(t,e,r)}),o}function Sr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Ir(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(p(t))for(var a in t)o=t[a],i=x(a),e[i]=p(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Er(t){var e=t.$options.properties,n=t.$options.props,r={};return Ir(e,r,t),Ir(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Le(t,"_mpProps",n),e[n]=void 0)}),$t(e,!0)}function Dr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?jr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,jr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,jr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,jr(r,"onShow",t)},onHide:function(){o.status="hide",jr(r,"onHide")},onError:function(t){jr(r,"onError",t)},onUniNViewMessage:function(t){jr(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Er(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",jr(r,"attached")},ready:function(){o.status="ready",jr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){jr(r,"moved")},detached:function(){o.status="detached",jr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",Sr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),jr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",jr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",jr(r,"onReady"),n()},onHide:function(){o.status="hide",jr(r,"onHide")},onUnload:function(){o.status="unload",jr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){jr(r,"onPullDownRefresh")},onReachBottom:function(){jr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return jr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){jr(r,"onPageScroll",t)},onTabItemTap:function(t){jr(r,"onTabItemTap",t)}})}}function Nr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Mr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Mr(r,e):e):e}function Rr(t){var e=Mr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Nr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Rr(t))}function Vr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}var Ur=Vr(function(t,e){t&&t(e)},50);function Lr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Wr(){var t=Lr(this);if(t){var e=JSON.parse(JSON.stringify(Rr(this)));Ur(t.setData.bind(t),r(e,t.data))}}function Fr(){var t=Lr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function zr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(zr(t,e,n))})}):a.forEach(function(t){r=r.concat(zr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function qr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:I,preventDefault:I};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function Jr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],p=zr(u._vnode,c,f);if(p.length){var l=qr(t);if(1===p.length){var d=p[0](l);return d}p.forEach(function(t){return t(l)})}}}return Mn.config.mustUseProp=Yn,Mn.config.isReservedTag=Zn,Mn.config.isReservedAttr=Qn,Mn.config.getTagNamespace=tr,Mn.config.isUnknownElement=er,Mn.prototype.__patch__=Pr,Mn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return ye(n,void 0,void 0)})}return ye(this,void 0,void 0)},Mn.prototype._initMP=Dr,Mn.prototype.$updateDataToMP=Wr,Mn.prototype._initDataToMP=Fr,Mn.prototype.$handleProxyWithVue=Jr,Mn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"216a":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c={data:function(){return{PageCur:"basics"}},methods:{NavChange:function(t){this.PageCur=t.currentTarget.dataset.cur}}};a.default=c},"65eb":function(t,a,e){"use strict";e.r(a);var c=e("ccdd"),n=e("cce0");for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);var r=e("2877"),s=Object(r["a"])(n["default"],c["a"],c["b"],!1,null,null,null);a["default"]=s.exports},ccdd:function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",["basics"==t.PageCur?e("basics",{attrs:{mpcomid:"f9a91cd2-0"}}):t._e(),"component"==t.PageCur?e("components",{attrs:{mpcomid:"f9a91cd2-1"}}):t._e(),"plugin"==t.PageCur?e("plugin",{attrs:{mpcomid:"f9a91cd2-2"}}):t._e(),e("view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("view",{staticClass:"action",attrs:{"data-cur":"basics",eventid:"f9a91cd2-0"},on:{click:t.NavChange}},[e("view",{staticClass:"cuIcon-cu-image"},[e("image",{attrs:{src:"/static/tabbar/basics"+["basics"==t.PageCur?"_cur":""]+".png"}})]),e("view",{class:"basics"==t.PageCur?"text-green":"text-gray"},[t._v("成绩统计")])]),e("view",{staticClass:"action",attrs:{"data-cur":"component",eventid:"f9a91cd2-1"},on:{click:t.NavChange}},[e("view",{staticClass:"cuIcon-cu-image"},[e("image",{attrs:{src:"/static/tabbar/component"+["component"==t.PageCur?"_cur":""]+".png"}})]),e("view",{class:"component"==t.PageCur?"text-green":"text-gray"},[t._v("快速选课")])]),e("view",{staticClass:"action",attrs:{"data-cur":"plugin",eventid:"f9a91cd2-2"},on:{click:t.NavChange}},[e("view",{staticClass:"cuIcon-cu-image"},[e("image",{attrs:{src:"/static/tabbar/plugin"+["plugin"==t.PageCur?"_cur":""]+".png"}})]),e("view",{class:"plugin"==t.PageCur?"text-green":"text-gray"},[t._v("个人中心")])])])],1)},n=[];e.d(a,"a",function(){return c}),e.d(a,"b",function(){return n})},cce0:function(t,a,e){"use strict";e.r(a);var c=e("216a"),n=e.n(c);for(var i in c)"default"!==i&&function(t){e.d(a,t,function(){return c[t]})}(i);a["default"]=n.a},f748:function(t,a,e){"use strict";e("97e8");var c=i(e("b0ce")),n=i(e("65eb"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,c.default)(n.default))}},[["f748","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/basics/layout';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/layout.js';

define('pages/basics/layout.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/layout"],{"39e1":function(s,i,t){"use strict";var a=t("7208"),e=t.n(a);e.a},7208:function(s,i,t){},"724f":function(s,i,t){"use strict";t.r(i);var a=t("f2e9"),e=t.n(a);for(var l in a)"default"!==l&&function(s){t.d(i,s,function(){return a[s]})}(l);i["default"]=e.a},"897f":function(s,i,t){"use strict";var a=function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("view",[t("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"75858236-0"}},[t("block",{slot:"backText"},[s._v("返回")]),t("block",{slot:"content"},[s._v("布局")])],1),t("scroll-view",{staticClass:"bg-white nav text-center fixed",style:[{top:s.CustomBar+"px"}],attrs:{"scroll-x":""}},s._l(s.tabNav,function(i,a){return t("view",{key:a,staticClass:"cu-item",class:a==s.TabCur?"text-blue cur":"",attrs:{"data-id":a,eventid:"75858236-0-"+a},on:{tap:s.tabSelect}},[s._v(s._s(s.tabNav[a]))])})),0==s.TabCur?t("block",[t("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("固定尺寸")])]),t("view",{staticClass:"padding bg-white"},[t("view",{staticClass:"flex flex-wrap"},[t("view",{staticClass:"basis-xs bg-grey margin-xs padding-sm radius"},[s._v("xs(20%)")]),t("view",{staticClass:"basis-df"}),t("view",{staticClass:"basis-sm bg-grey margin-xs padding-sm radius"},[s._v("sm(40%)")]),t("view",{staticClass:"basis-df"}),t("view",{staticClass:"basis-df bg-grey margin-xs padding-sm radius"},[s._v("sub(50%)")]),t("view",{staticClass:"basis-lg bg-grey margin-xs padding-sm radius"},[s._v("lg(60%)")]),t("view",{staticClass:"basis-xl bg-grey margin-xs padding-sm radius"},[s._v("xl(80%)")])])]),t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("比例布局")])]),t("view",{staticClass:"padding bg-white"},[t("view",{staticClass:"flex"},[t("view",{staticClass:"flex-sub bg-grey padding-sm margin-xs radius"},[s._v("1")]),t("view",{staticClass:"flex-sub bg-grey padding-sm margin-xs radius"},[s._v("1")])]),t("view",{staticClass:"flex  p-xs margin-bottom-sm mb-sm"},[t("view",{staticClass:"flex-sub bg-grey padding-sm margin-xs radius"},[s._v("1")]),t("view",{staticClass:"flex-twice bg-grey padding-sm margin-xs radius"},[s._v("2")])]),t("view",{staticClass:"flex  p-xs margin-bottom-sm mb-sm"},[t("view",{staticClass:"flex-sub bg-grey padding-sm margin-xs radius"},[s._v("1")]),t("view",{staticClass:"flex-twice bg-grey padding-sm margin-xs radius"},[s._v("2")]),t("view",{staticClass:"flex-treble bg-grey padding-sm margin-xs radius"},[s._v("3")])])]),t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("水平对齐(justify)")])]),t("view",{staticClass:"bg-white"},[t("view",{staticClass:"flex solid-bottom padding justify-start"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("start")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("start")])]),t("view",{staticClass:"flex solid-bottom padding justify-end"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("end")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("end")])]),t("view",{staticClass:"flex solid-bottom padding justify-center"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("center")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("center")])]),t("view",{staticClass:"flex solid-bottom padding justify-between"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("between")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("between")])]),t("view",{staticClass:"flex solid-bottom padding justify-around"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("around")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("around")])])]),t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("垂直对齐(align)")])]),t("view",{staticClass:"bg-white"},[t("view",{staticClass:"flex solid-bottom padding align-start"},[t("view",{staticClass:"bg-grey padding-lg margin-xs radius"},[s._v("ColorUi")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("start")])]),t("view",{staticClass:"flex solid-bottom padding align-end"},[t("view",{staticClass:"bg-grey padding-lg margin-xs radius"},[s._v("ColorUi")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("end")])]),t("view",{staticClass:"flex solid-bottom padding align-center"},[t("view",{staticClass:"bg-grey padding-lg margin-xs radius"},[s._v("ColorUi")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("center")])])])]):s._e(),1==s.TabCur?t("block",[t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("等分列")]),t("view",{staticClass:"action"})]),t("view",{staticClass:"bg-white padding"},s._l(5,function(i,a){return t("view",{key:a,staticClass:"grid margin-bottom text-center",class:"col-"+(a+1)},s._l(2*(a+1),function(i,a){return t("view",{key:a,staticClass:"padding",class:a%2==0?"bg-cyan":"bg-blue"},[s._v(s._s(a+1))])}))})),t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("等高")]),t("view",{staticClass:"action"})]),t("view",{staticClass:"bg-white padding"},[t("view",{staticClass:"grid col-4 grid-square"},s._l(s.avatar,function(i,a){return t("view",{key:a,staticClass:"bg-img",style:[{backgroundImage:"url("+s.avatar[a]+")"}]})}))])]):s._e(),2==s.TabCur?t("block",[t("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("浮动")])]),t("view",{staticClass:"bg-white padding"},[t("view",{staticClass:" cf padding-sm"},[t("view",{staticClass:"bg-grey radius fl padding-sm"},[s._v("ColorUi fl")]),t("view",{staticClass:"bg-grey radius fr padding-sm"},[s._v("ColorUi fr")])])]),t("view",{staticClass:"cu-bar bg-white  solid-bottom margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("内外边距")])]),t("view",{staticClass:"bg-white"},[t("view",{staticClass:"padding bg-gray"},[s._v("{size}的尺寸有xs/sm/df/lg/xl")]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("水平方向外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("水平方向内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-lr-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-lr-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("垂直方向外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("垂直方向内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-tb-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-tb-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("上外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("上内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-top-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-top-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("右外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("右内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-right-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-right-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("下外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("下内边距")]),t("view",{staticClass:"basis-df"},[s._v("margin-bottom-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-bottom-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("左外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("左内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-left-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-left-{size}")])])])]):s._e()],1)},e=[];t.d(i,"a",function(){return a}),t.d(i,"b",function(){return e})},d15a:function(s,i,t){"use strict";t.r(i);var a=t("897f"),e=t("724f");for(var l in e)"default"!==l&&function(s){t.d(i,s,function(){return e[s]})}(l);t("39e1");var d=t("2877"),g=Object(d["a"])(e["default"],a["a"],a["b"],!1,null,null,null);i["default"]=g.exports},dcec:function(s,i,t){"use strict";t("97e8");var a=l(t("b0ce")),e=l(t("d15a"));function l(s){return s&&s.__esModule?s:{default:s}}Page((0,a.default)(e.default))},f2e9:function(s,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{CustomBar:this.CustomBar,TabCur:0,avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"],tabNav:["Flex布局","Grid布局","辅助布局"]}},methods:{tabSelect:function(s){this.TabCur=s.currentTarget.dataset.id,this.scrollLeft=60*(s.currentTarget.dataset.id-1)}}};i.default=a}},[["dcec","common/runtime","common/vendor"]]]);
});
require('pages/basics/layout.js');
__wxRoute = 'pages/basics/background';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/background.js';

define('pages/basics/background.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/background"],{"0f51":function(t,s,a){"use strict";a.r(s);var e=a("4a31"),i=a("1d3b");for(var l in i)"default"!==l&&function(t){a.d(s,t,function(){return i[t]})}(l);var c=a("2877"),n=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=n.exports},"1d3b":function(t,s,a){"use strict";a.r(s);var e=a("d2a8"),i=a.n(e);for(var l in e)"default"!==l&&function(t){a.d(s,t,function(){return e[t]})}(l);s["default"]=i.a},"4a31":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"1b5f138c-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("背景")])],1),t._m(0),a("view",{staticClass:"grid col-3 padding-sm"},t._l(t.ColorList,function(s,e){return a("view",{key:e,staticClass:"padding-sm"},[a("view",{staticClass:"padding radius text-center shadow-blur",class:"bg-"+s.name},[a("view",{staticClass:"text-lg"},[t._v(t._s(s.title))]),a("view",{staticClass:"margin-top-sm text-Abc"},[t._v(t._s(s.name))])])])})),t._m(1),a("view",{staticClass:"grid col-3 bg-white padding-sm"},t._l(t.ColorList,function(s,e){return e<12?a("view",{key:e,staticClass:"padding-sm"},[a("view",{staticClass:"padding radius text-center light",class:"bg-"+s.name},[a("view",{staticClass:"text-lg"},[t._v(t._s(s.title))]),a("view",{staticClass:"margin-top-sm text-Abc"},[t._v(t._s(s.name))])])]):t._e()})),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("深色背景")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("淡色背景")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("渐变背景")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"grid col-2 padding-sm"},[a("view",{staticClass:"padding-sm"},[a("view",{staticClass:"bg-gradual-red padding radius text-center shadow-blur"},[a("view",{staticClass:"text-lg"},[t._v("魅红")]),a("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#f43f3b - #ec008c")])])]),a("view",{staticClass:"padding-sm"},[a("view",{staticClass:"bg-gradual-orange padding radius text-center shadow-blur"},[a("view",{staticClass:"text-lg"},[t._v("鎏金")]),a("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#ff9700 - #ed1c24")])])]),a("view",{staticClass:"padding-sm"},[a("view",{staticClass:"bg-gradual-green padding radius text-center shadow-blur"},[a("view",{staticClass:"text-lg"},[t._v("翠柳")]),a("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#39b54a - #8dc63f")])])]),a("view",{staticClass:"padding-sm"},[a("view",{staticClass:"bg-gradual-blue padding radius text-center shadow-blur"},[a("view",{staticClass:"text-lg"},[t._v("靛青")]),a("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#0081ff - #1cbbb4")])])]),a("view",{staticClass:"padding-sm"},[a("view",{staticClass:"bg-gradual-purple padding radius text-center shadow-blur"},[a("view",{staticClass:"text-lg"},[t._v("惑紫")]),a("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#9000ff - #5e00ff")])])]),a("view",{staticClass:"padding-sm"},[a("view",{staticClass:"bg-gradual-pink padding radius text-center shadow-blur"},[a("view",{staticClass:"text-lg"},[t._v("霞彩")]),a("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#ec008c - #6739b6")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("图片背景")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"bg-img bg-mask flex align-center",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg')",height:"414rpx"}},[a("view",{staticClass:"padding-xl text-white"},[a("view",{staticClass:"padding-xs text-xxl text-bold"},[t._v("钢铁之翼")]),a("view",{staticClass:"padding-xs text-lg"},[t._v("Only the guilty need fear me.")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("透明背景(文字层)")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"grid col-2"},[a("view",{staticClass:"bg-img padding-bottom-xl",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg')",height:"207rpx"}},[a("view",{staticClass:"bg-shadeTop padding padding-bottom-xl"},[t._v("上面开始")])]),a("view",{staticClass:"bg-img padding-top-xl flex align-end",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg')",height:"207rpx"}},[a("view",{staticClass:"bg-shadeBottom padding padding-top-xl flex-sub"},[t._v("下面开始")])])])}];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})},d2a8:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{ColorList:this.ColorList}}};s.default=e},ee4b:function(t,s,a){"use strict";a("97e8");var e=l(a("b0ce")),i=l(a("0f51"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))}},[["ee4b","common/runtime","common/vendor"]]]);
});
require('pages/basics/background.js');
__wxRoute = 'pages/basics/text';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/text.js';

define('pages/basics/text.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/text"],{8787:function(t,s,i){"use strict";i("97e8");var e=l(i("b0ce")),a=l(i("9726"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},9726:function(t,s,i){"use strict";i.r(s);var e=i("b3af"),a=i("f5cf");for(var l in a)"default"!==l&&function(t){i.d(s,t,function(){return a[t]})}(l);var c=i("2877"),n=Object(c["a"])(a["default"],e["a"],e["b"],!1,null,null,null);s["default"]=n.exports},b3af:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"72af1f39-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("文本")])],1),t._m(0),t._m(1),t._m(2),i("view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,function(s,e){return i("view",{key:e,staticClass:"padding-sm"},[i("view",{staticClass:"text-center",class:"text-"+s.name},[t._v(t._s(s.title))])])})),t._m(3),i("view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,function(t,s){return i("view",{key:s,staticClass:"padding-sm"},[i("view",{staticClass:"text-center text-shadow",class:"text-"+t.name},[i("view",{staticClass:"cuIcon-ellipse text-xxl"})])])})),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字大小")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"bg-white padding-lr"},[i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("60")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-xsl padding"},[i("text",{staticClass:" cuIcon-roundcheckfill text-green"})]),i("view",{staticClass:"padding"},[t._v("用于图标、数字等特大显示")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("40")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-sl padding"},[i("text",{staticClass:" cuIcon-roundcheckfill text-green"})]),i("view",{staticClass:"padding"},[t._v("用于图标、数字等较大显示")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("22")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-xxl padding"},[i("text",{staticClass:"text-price text-red"},[t._v("80.00")])]),i("view",{staticClass:"padding"},[t._v("用于金额数字等信息")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("18")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-xl padding"},[i("text",{staticClass:"text-black text-bold"},[t._v("您的订单已提交成功！")])]),i("view",{staticClass:"padding"},[t._v("页面大标题，用于结果页等单一信息页")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("16")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-lg padding"},[i("text",{staticClass:"text-black"},[t._v("ColorUI组件库")])]),i("view",{staticClass:"padding"},[t._v("页面小标题，首要层级显示内容")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("14")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-df padding"},[t._v("专注视觉的小程序组件库")]),i("view",{staticClass:"padding"},[t._v("页面默认字号，用于摘要或阅读文本")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("12")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-sm padding"},[i("text",{staticClass:"text-grey"},[t._v("衬衫的价格是9磅15便士")])]),i("view",{staticClass:"padding"},[t._v("页面辅助信息，次级内容等")])])]),i("view",{staticClass:"padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("10")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-xs padding"},[i("text",{staticClass:"text-gray"},[t._v("我于杀戮之中绽放 亦如黎明中的花朵")])]),i("view",{staticClass:"padding"},[t._v("说明文本，标签文字等关注度低的文字")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字颜色")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字阴影")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字截断")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"padding bg-white"},[i("view",{staticClass:"text-cut padding bg-grey radius",staticStyle:{width:"220px"}},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字对齐")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"padding bg-white"},[i("view",{staticClass:"text-left padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")]),i("view",{staticClass:"text-center padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")]),i("view",{staticClass:"text-right padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("特殊文字")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"padding text-center"},[i("view",{staticClass:"padding-lr bg-white"},[i("view",{staticClass:"solid-bottom padding"},[i("text",{staticClass:"text-price"},[t._v("80.00")])]),i("view",{staticClass:"padding"},[t._v('价格文本，利用伪元素添加"¥"符号')])]),i("view",{staticClass:"padding-lr bg-white margin-top"},[i("view",{staticClass:"solid-bottom padding"},[i("text",{staticClass:"text-Abc"},[t._v("color Ui")])]),i("view",{staticClass:"padding"},[t._v("英文单词首字母大写")])]),i("view",{staticClass:"padding-lr bg-white margin-top"},[i("view",{staticClass:"solid-bottom padding"},[i("text",{staticClass:"text-ABC"},[t._v("color Ui")])]),i("view",{staticClass:"padding"},[t._v("全部字母大写")])]),i("view",{staticClass:"padding-lr bg-white margin-top"},[i("view",{staticClass:"solid-bottom padding"},[i("text",{staticClass:"text-abc"},[t._v("color Ui")])]),i("view",{staticClass:"padding"},[t._v("全部字母小写")])])])}];i.d(s,"a",function(){return e}),i.d(s,"b",function(){return a})},da89:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{ColorList:this.ColorList}}};s.default=e},f5cf:function(t,s,i){"use strict";i.r(s);var e=i("da89"),a=i.n(e);for(var l in e)"default"!==l&&function(t){i.d(s,t,function(){return e[t]})}(l);s["default"]=a.a}},[["8787","common/runtime","common/vendor"]]]);
});
require('pages/basics/text.js');
__wxRoute = 'pages/basics/icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/icon.js';

define('pages/basics/icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/icon"],{"016b":function(i,e,o){"use strict";o("97e8");var a=s(o("b0ce")),n=s(o("aad1"));function s(i){return i&&i.__esModule?i:{default:i}}Page((0,a.default)(n.default))},"268a":function(i,e,o){"use strict";var a=function(){var i=this,e=i.$createElement,o=i._self._c||e;return o("view",[o("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"72aa1685-0"}},[o("block",{slot:"backText"},[i._v("返回")]),o("block",{slot:"content"},[i._v("图标")])],1),o("view",{staticClass:"cu-bar bg-white search fixed",style:[{top:i.CustomBar+"px"}]},[o("view",{staticClass:"search-form round"},[o("text",{staticClass:"cuIcon-search"}),o("input",{attrs:{type:"text",placeholder:"搜索icon","confirm-type":"search",eventid:"72aa1685-0"},on:{input:i.searchIcon}})])]),o("view",{staticClass:"cu-list grid col-3"},i._l(i.icon,function(e,a){return e.isShow?o("view",{key:a,staticClass:"cu-item"},[o("text",{staticClass:"lg text-gray",class:"cuIcon-"+e.name}),o("text",[i._v(i._s(e.name))])]):i._e()}))],1)},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},"3ed0":function(i,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{CustomBar:this.CustomBar,icon:[{name:"appreciate",isShow:!0},{name:"check",isShow:!0},{name:"close",isShow:!0},{name:"edit",isShow:!0},{name:"emoji",isShow:!0},{name:"favorfill",isShow:!0},{name:"favor",isShow:!0},{name:"loading",isShow:!0},{name:"locationfill",isShow:!0},{name:"location",isShow:!0},{name:"phone",isShow:!0},{name:"roundcheckfill",isShow:!0},{name:"roundcheck",isShow:!0},{name:"roundclosefill",isShow:!0},{name:"roundclose",isShow:!0},{name:"roundrightfill",isShow:!0},{name:"roundright",isShow:!0},{name:"search",isShow:!0},{name:"taxi",isShow:!0},{name:"timefill",isShow:!0},{name:"time",isShow:!0},{name:"unfold",isShow:!0},{name:"warnfill",isShow:!0},{name:"warn",isShow:!0},{name:"camerafill",isShow:!0},{name:"camera",isShow:!0},{name:"commentfill",isShow:!0},{name:"comment",isShow:!0},{name:"likefill",isShow:!0},{name:"like",isShow:!0},{name:"notificationfill",isShow:!0},{name:"notification",isShow:!0},{name:"order",isShow:!0},{name:"samefill",isShow:!0},{name:"same",isShow:!0},{name:"deliver",isShow:!0},{name:"evaluate",isShow:!0},{name:"pay",isShow:!0},{name:"send",isShow:!0},{name:"shop",isShow:!0},{name:"ticket",isShow:!0},{name:"back",isShow:!0},{name:"cascades",isShow:!0},{name:"discover",isShow:!0},{name:"list",isShow:!0},{name:"more",isShow:!0},{name:"scan",isShow:!0},{name:"settings",isShow:!0},{name:"questionfill",isShow:!0},{name:"question",isShow:!0},{name:"shopfill",isShow:!0},{name:"form",isShow:!0},{name:"pic",isShow:!0},{name:"filter",isShow:!0},{name:"footprint",isShow:!0},{name:"top",isShow:!0},{name:"pulldown",isShow:!0},{name:"pullup",isShow:!0},{name:"right",isShow:!0},{name:"refresh",isShow:!0},{name:"moreandroid",isShow:!0},{name:"deletefill",isShow:!0},{name:"refund",isShow:!0},{name:"cart",isShow:!0},{name:"qrcode",isShow:!0},{name:"remind",isShow:!0},{name:"delete",isShow:!0},{name:"profile",isShow:!0},{name:"home",isShow:!0},{name:"cartfill",isShow:!0},{name:"discoverfill",isShow:!0},{name:"homefill",isShow:!0},{name:"message",isShow:!0},{name:"addressbook",isShow:!0},{name:"link",isShow:!0},{name:"lock",isShow:!0},{name:"unlock",isShow:!0},{name:"vip",isShow:!0},{name:"weibo",isShow:!0},{name:"activity",isShow:!0},{name:"friendaddfill",isShow:!0},{name:"friendadd",isShow:!0},{name:"friendfamous",isShow:!0},{name:"friend",isShow:!0},{name:"goods",isShow:!0},{name:"selection",isShow:!0},{name:"explore",isShow:!0},{name:"present",isShow:!0},{name:"squarecheckfill",isShow:!0},{name:"square",isShow:!0},{name:"squarecheck",isShow:!0},{name:"round",isShow:!0},{name:"roundaddfill",isShow:!0},{name:"roundadd",isShow:!0},{name:"add",isShow:!0},{name:"notificationforbidfill",isShow:!0},{name:"explorefill",isShow:!0},{name:"fold",isShow:!0},{name:"game",isShow:!0},{name:"redpacket",isShow:!0},{name:"selectionfill",isShow:!0},{name:"similar",isShow:!0},{name:"appreciatefill",isShow:!0},{name:"infofill",isShow:!0},{name:"info",isShow:!0},{name:"forwardfill",isShow:!0},{name:"forward",isShow:!0},{name:"rechargefill",isShow:!0},{name:"recharge",isShow:!0},{name:"vipcard",isShow:!0},{name:"voice",isShow:!0},{name:"voicefill",isShow:!0},{name:"friendfavor",isShow:!0},{name:"wifi",isShow:!0},{name:"share",isShow:!0},{name:"wefill",isShow:!0},{name:"we",isShow:!0},{name:"lightauto",isShow:!0},{name:"lightforbid",isShow:!0},{name:"lightfill",isShow:!0},{name:"camerarotate",isShow:!0},{name:"light",isShow:!0},{name:"barcode",isShow:!0},{name:"flashlightclose",isShow:!0},{name:"flashlightopen",isShow:!0},{name:"searchlist",isShow:!0},{name:"service",isShow:!0},{name:"sort",isShow:!0},{name:"down",isShow:!0},{name:"mobile",isShow:!0},{name:"mobilefill",isShow:!0},{name:"copy",isShow:!0},{name:"countdownfill",isShow:!0},{name:"countdown",isShow:!0},{name:"noticefill",isShow:!0},{name:"notice",isShow:!0},{name:"upstagefill",isShow:!0},{name:"upstage",isShow:!0},{name:"babyfill",isShow:!0},{name:"baby",isShow:!0},{name:"brandfill",isShow:!0},{name:"brand",isShow:!0},{name:"choicenessfill",isShow:!0},{name:"choiceness",isShow:!0},{name:"clothesfill",isShow:!0},{name:"clothes",isShow:!0},{name:"creativefill",isShow:!0},{name:"creative",isShow:!0},{name:"female",isShow:!0},{name:"keyboard",isShow:!0},{name:"male",isShow:!0},{name:"newfill",isShow:!0},{name:"new",isShow:!0},{name:"pullleft",isShow:!0},{name:"pullright",isShow:!0},{name:"rankfill",isShow:!0},{name:"rank",isShow:!0},{name:"bad",isShow:!0},{name:"cameraadd",isShow:!0},{name:"focus",isShow:!0},{name:"friendfill",isShow:!0},{name:"cameraaddfill",isShow:!0},{name:"apps",isShow:!0},{name:"paintfill",isShow:!0},{name:"paint",isShow:!0},{name:"picfill",isShow:!0},{name:"refresharrow",isShow:!0},{name:"colorlens",isShow:!0},{name:"markfill",isShow:!0},{name:"mark",isShow:!0},{name:"presentfill",isShow:!0},{name:"repeal",isShow:!0},{name:"album",isShow:!0},{name:"peoplefill",isShow:!0},{name:"people",isShow:!0},{name:"servicefill",isShow:!0},{name:"repair",isShow:!0},{name:"file",isShow:!0},{name:"repairfill",isShow:!0},{name:"taoxiaopu",isShow:!0},{name:"weixin",isShow:!0},{name:"attentionfill",isShow:!0},{name:"attention",isShow:!0},{name:"commandfill",isShow:!0},{name:"command",isShow:!0},{name:"communityfill",isShow:!0},{name:"community",isShow:!0},{name:"read",isShow:!0},{name:"calendar",isShow:!0},{name:"cut",isShow:!0},{name:"magic",isShow:!0},{name:"backwardfill",isShow:!0},{name:"playfill",isShow:!0},{name:"stop",isShow:!0},{name:"tagfill",isShow:!0},{name:"tag",isShow:!0},{name:"group",isShow:!0},{name:"all",isShow:!0},{name:"backdelete",isShow:!0},{name:"hotfill",isShow:!0},{name:"hot",isShow:!0},{name:"post",isShow:!0},{name:"radiobox",isShow:!0},{name:"rounddown",isShow:!0},{name:"upload",isShow:!0},{name:"writefill",isShow:!0},{name:"write",isShow:!0},{name:"radioboxfill",isShow:!0},{name:"punch",isShow:!0},{name:"shake",isShow:!0},{name:"move",isShow:!0},{name:"safe",isShow:!0},{name:"activityfill",isShow:!0},{name:"crownfill",isShow:!0},{name:"crown",isShow:!0},{name:"goodsfill",isShow:!0},{name:"messagefill",isShow:!0},{name:"profilefill",isShow:!0},{name:"sound",isShow:!0},{name:"sponsorfill",isShow:!0},{name:"sponsor",isShow:!0},{name:"upblock",isShow:!0},{name:"weblock",isShow:!0},{name:"weunblock",isShow:!0},{name:"my",isShow:!0},{name:"myfill",isShow:!0},{name:"emojifill",isShow:!0},{name:"emojiflashfill",isShow:!0},{name:"flashbuyfill",isShow:!0},{name:"text",isShow:!0},{name:"goodsfavor",isShow:!0},{name:"musicfill",isShow:!0},{name:"musicforbidfill",isShow:!0},{name:"card",isShow:!0},{name:"triangledownfill",isShow:!0},{name:"triangleupfill",isShow:!0},{name:"roundleftfill-copy",isShow:!0},{name:"font",isShow:!0},{name:"title",isShow:!0},{name:"recordfill",isShow:!0},{name:"record",isShow:!0},{name:"cardboardfill",isShow:!0},{name:"cardboard",isShow:!0},{name:"formfill",isShow:!0},{name:"coin",isShow:!0},{name:"cardboardforbid",isShow:!0},{name:"circlefill",isShow:!0},{name:"circle",isShow:!0},{name:"attentionforbid",isShow:!0},{name:"attentionforbidfill",isShow:!0},{name:"attentionfavorfill",isShow:!0},{name:"attentionfavor",isShow:!0},{name:"titles",isShow:!0},{name:"icloading",isShow:!0},{name:"full",isShow:!0},{name:"mail",isShow:!0},{name:"peoplelist",isShow:!0},{name:"goodsnewfill",isShow:!0},{name:"goodsnew",isShow:!0},{name:"medalfill",isShow:!0},{name:"medal",isShow:!0},{name:"newsfill",isShow:!0},{name:"newshotfill",isShow:!0},{name:"newshot",isShow:!0},{name:"news",isShow:!0},{name:"videofill",isShow:!0},{name:"video",isShow:!0},{name:"exit",isShow:!0},{name:"skinfill",isShow:!0},{name:"skin",isShow:!0},{name:"moneybagfill",isShow:!0},{name:"usefullfill",isShow:!0},{name:"usefull",isShow:!0},{name:"moneybag",isShow:!0},{name:"redpacket_fill",isShow:!0},{name:"subscription",isShow:!0},{name:"loading1",isShow:!0},{name:"github",isShow:!0},{name:"global",isShow:!0},{name:"settingsfill",isShow:!0},{name:"back_android",isShow:!0},{name:"expressman",isShow:!0},{name:"evaluate_fill",isShow:!0},{name:"group_fill",isShow:!0},{name:"play_forward_fill",isShow:!0},{name:"deliver_fill",isShow:!0},{name:"notice_forbid_fill",isShow:!0},{name:"fork",isShow:!0},{name:"pick",isShow:!0},{name:"wenzi",isShow:!0},{name:"ellipse",isShow:!0},{name:"qr_code",isShow:!0},{name:"dianhua",isShow:!0},{name:"icon",isShow:!0},{name:"loading2",isShow:!0},{name:"btn",isShow:!0}]}},methods:{searchIcon:function(i){for(var e=i.detail.value.toLowerCase(),o=this.icon,a=0;a<o.length;a++){var n=e,s=o[a].name.toLowerCase();-1!=s.search(n)?o[a].isShow=!0:o[a].isShow=!1}this.icon=o}}};e.default=a},a63e:function(i,e,o){},a81c:function(i,e,o){"use strict";var a=o("a63e"),n=o.n(a);n.a},aad1:function(i,e,o){"use strict";o.r(e);var a=o("268a"),n=o("c202");for(var s in n)"default"!==s&&function(i){o.d(e,i,function(){return n[i]})}(s);o("a81c");var m=o("2877"),h=Object(m["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=h.exports},c202:function(i,e,o){"use strict";o.r(e);var a=o("3ed0"),n=o.n(a);for(var s in a)"default"!==s&&function(i){o.d(e,i,function(){return a[i]})}(s);e["default"]=n.a}},[["016b","common/runtime","common/vendor"]]]);
});
require('pages/basics/icon.js');
__wxRoute = 'pages/basics/button';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/button.js';

define('pages/basics/button.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/button"],{"14e9":function(t,s,a){"use strict";a("97e8");var e=c(a("b0ce")),i=c(a("2552"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},2552:function(t,s,a){"use strict";a.r(s);var e=a("712b"),i=a("a9ce");for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);var n=a("2877"),l=Object(n["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=l.exports},"558d":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{ColorList:this.ColorList,shadow:!1,bordersize:""}},methods:{SetShadow:function(t){this.shadow=t.detail.value},SetBorderSize:function(t){this.bordersize=t.detail.value}}};s.default=e},"712b":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"658cae3e-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("按钮")])],1),a("view",{staticClass:"cu-bar bg-white solid-bottom"},[t._m(0),a("view",{staticClass:"action"},[a("navigator",{staticClass:"action",attrs:{url:"design","hover-class":"none"}},[a("text",{staticClass:"cuIcon-skinfill"}),a("text",{staticClass:"text-df"},[t._v("设计")])])],1)]),a("view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white"},[a("button",{staticClass:"cu-btn"},[t._v("默认")]),a("button",{staticClass:"cu-btn round"},[t._v("圆角")]),a("button",{staticClass:"cu-btn icon"},[a("text",{staticClass:"cuIcon-emojifill"})])],1),t._m(1),a("view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white"},[a("button",{staticClass:"cu-btn round sm"},[t._v("小尺寸")]),a("button",{staticClass:"cu-btn round"},[t._v("默认")]),a("button",{staticClass:"cu-btn round lg"},[t._v("大尺寸")])],1),a("view",{staticClass:"cu-bar margin-top bg-white"},[t._m(2),a("view",{staticClass:"action"},[a("text",{staticClass:"text-df margin-right-sm"},[t._v("阴影")]),a("switch",{class:t.shadow?"checked":"",attrs:{color:"#39B54A",eventid:"658cae3e-0"},on:{change:t.SetShadow}})])]),a("view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,function(s,e){return a("view",{key:e,staticClass:"margin-tb-sm text-center"},[a("button",{staticClass:"cu-btn round",class:["bg-"+s.name,t.shadow?"shadow":""]},[t._v(t._s(s.title))])],1)})),a("view",{staticClass:"cu-bar margin-top bg-white"},[t._m(3),a("view",{staticClass:"action"},[a("radio-group",{attrs:{eventid:"658cae3e-1",mpcomid:"658cae3e-1"},on:{change:t.SetBorderSize}},[a("label",{staticClass:"margin-left-sm"},[a("radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),a("text",{staticClass:"margin-left-sm"},[t._v("小")])],1),a("label",{staticClass:"margin-left-sm"},[a("radio",{staticClass:"blue radio",attrs:{value:"s"}}),a("text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1)]),a("view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,function(s,e){return"white"!=s.name?a("view",{key:e,staticClass:"margin-tb-sm text-center"},[a("button",{staticClass:"cu-btn round",class:[t.bordersize?"lines-"+s.name:"line-"+s.name,t.shadow?"shadow":""]},[t._v(t._s(s.title))])],1):t._e()})),t._m(4),a("view",{staticClass:"padding flex flex-direction"},[a("button",{staticClass:"cu-btn bg-grey lg"},[t._v("玄灰")]),a("button",{staticClass:"cu-btn bg-red margin-tb-sm lg"},[t._v("嫣红")])],1),t._m(5),a("view",{staticClass:"padding"},[a("button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",attrs:{disabled:"",type:""}},[t._v("无效状态")]),a("button",{staticClass:"cu-btn block line-blue margin-tb-sm lg",attrs:{disabled:""}},[t._v("无效状态")])],1),t._m(6),a("view",{staticClass:"padding-xl"},[a("button",{staticClass:"cu-btn block line-orange lg"},[a("text",{staticClass:"cuIcon-upload"}),t._v("图标")]),a("button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg"},[a("text",{staticClass:"cuIcon-loading2 iconfont-spin"}),t._v("加载")]),a("button",{staticClass:"cu-btn block bg-black margin-tb-sm lg",attrs:{loading:""}},[t._v("原生加载")])],1)],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮形状")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar margin-top bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮尺寸")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮颜色")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("镂空按钮")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar margin-top bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("块状按钮")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar margin-top bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("无效状态")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar margin-top bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮加图标")])])}];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})},a9ce:function(t,s,a){"use strict";a.r(s);var e=a("558d"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);s["default"]=i.a}},[["14e9","common/runtime","common/vendor"]]]);
});
require('pages/basics/button.js');
__wxRoute = 'pages/basics/design';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/design.js';

define('pages/basics/design.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/design"],{6345:function(t,a,s){"use strict";s.r(a);var e=s("79bb"),i=s.n(e);for(var o in e)"default"!==o&&function(t){s.d(a,t,function(){return e[t]})}(o);a["default"]=i.a},"79bb":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{ColorList:this.ColorList,modalName:"",round:!1,size:"",color:"red",shadow:!1,border:!1,bordersize:""}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetRound:function(t){this.round=t.detail.value},SetSize:function(t){this.size=t.detail.value},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetShadow:function(t){this.shadow=t.detail.value},SetBorder:function(t){this.border=t.detail.value,t.detail.value||(this.bordersize=!1)},SetBorderSize:function(t){this.bordersize=t.detail.value}}};a.default=e},8552:function(t,a,s){"use strict";s("97e8");var e=o(s("b0ce")),i=o(s("9a6b"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},"8cf2":function(t,a,s){},"9a6b":function(t,a,s){"use strict";s.r(a);var e=s("a9d6"),i=s("6345");for(var o in i)"default"!==o&&function(t){s.d(a,t,function(){return i[t]})}(o);s("d4e4");var l=s("2877"),r=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=r.exports},a9d6:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"681448ca-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("按钮 / 设计")])],1),s("view",{staticClass:"padding-xl"},[s("view",{staticClass:"box bg-white text-center radius"},[s("button",{staticClass:"cu-btn",class:[t.border?t.bordersize?"lines-"+t.color:"line-"+t.color:"bg-"+t.color,t.round?"round":"",t.size,t.shadow?"shadow":""]},[t._v("我是一个按钮")])],1),s("view",{staticClass:"padding text-center"},[t._v('class="cu-btn'),t.color?s("text",[t._v(t._s(" ")+" "+t._s(t.border?t.bordersize?"lines-"+t.color:"line-"+t.color:"bg-"+t.color)+" "+t._s(t.round?"round":"")+" "+t._s(t.size)+" "+t._s(t.shadow?"shadow":""))]):t._e(),t._v('"')])]),s("view",{staticClass:"cu-form-group margin-top",attrs:{"data-target":"ColorModal",eventid:"681448ca-0"},on:{tap:t.showModal}},[s("view",{staticClass:"title"},[t._v("选择颜色")]),s("view",{staticClass:"padding solid radius shadow-blur",class:"bg-"+t.color})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否圆角")]),s("switch",{staticClass:"blue",class:t.round?"checked":"",attrs:{eventid:"681448ca-1"},on:{change:t.SetRound}})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("选择尺寸")]),s("radio-group",{attrs:{eventid:"681448ca-2",mpcomid:"681448ca-1"},on:{change:t.SetSize}},[s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"sm"}}),s("text",{staticClass:"margin-left-sm"},[t._v("小")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),s("text",{staticClass:"margin-left-sm"},[t._v("中")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"lg"}}),s("text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否添加阴影")]),s("switch",{class:t.shadow?"checked":"",attrs:{eventid:"681448ca-3"},on:{change:t.SetShadow}})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否镂空")]),s("switch",{class:t.border?"checked":"",attrs:{eventid:"681448ca-4"},on:{change:t.SetBorder}})]),t.border?s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("边框大小")]),s("radio-group",{attrs:{eventid:"681448ca-5",mpcomid:"681448ca-2"},on:{change:t.SetBorderSize}},[s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),s("text",{staticClass:"margin-left-sm"},[t._v("小")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"s"}}),s("text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1):t._e(),s("view",{staticClass:"cu-modal",class:"ColorModal"==t.modalName?"show":""},[s("view",{staticClass:"cu-dialog"},[s("view",{staticClass:"cu-bar justify-end solid-bottom"},[s("view",{staticClass:"content"},[t._v("选择颜色")]),s("view",{staticClass:"action",attrs:{eventid:"681448ca-6"},on:{tap:t.hideModal}},[s("text",{staticClass:"cuIcon-close text-red"})])]),s("view",{staticClass:"grid col-5 padding"},t._l(t.ColorList,function(a,e){return"white"!=a.name?s("view",{key:e,staticClass:"padding-xs",attrs:{"data-color":a.name,eventid:"681448ca-7-"+e},on:{tap:t.SetColor}},[s("view",{staticClass:"padding-tb radius",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()}))])])],1)},i=[];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})},d4e4:function(t,a,s){"use strict";var e=s("8cf2"),i=s.n(e);i.a}},[["8552","common/runtime","common/vendor"]]]);
});
require('pages/basics/design.js');
__wxRoute = 'pages/basics/tag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/tag.js';

define('pages/basics/tag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/tag"],{"0e94":function(t,a,s){"use strict";s.r(a);var e=s("db72"),i=s("cbe6");for(var c in i)"default"!==c&&function(t){s.d(a,t,function(){return i[t]})}(c);var l=s("2877"),n=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=n.exports},b62d:function(t,a,s){"use strict";s("97e8");var e=c(s("b0ce")),i=c(s("0e94"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},b874:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{ColorList:this.ColorList}}};a.default=e},cbe6:function(t,a,s){"use strict";s.r(a);var e=s("b874"),i=s.n(e);for(var c in e)"default"!==c&&function(t){s.d(a,t,function(){return e[t]})}(c);a["default"]=i.a},db72:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"353f740e-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("标签")])],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("view",{staticClass:"padding-sm flex flex-wrap"},[t._l(t.ColorList,function(a,e){return"gray"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()}),t._l(t.ColorList,function(a,e){return"gray"!=a.name&&"black"!=a.name&&"white"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag light",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()})],2),t._m(5),s("view",{staticClass:"padding-sm flex flex-wrap"},t._l(t.ColorList,function(a,e){return"white"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag",class:"line-"+a.name},[t._v(t._s(a.title))])]):t._e()})),t._m(6),t._m(7),t._m(8),t._m(9)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white solid-bottom"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签形状")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding bg-white solid-bottom"},[s("view",{staticClass:"cu-tag"},[t._v("默认")]),s("view",{staticClass:"cu-tag round"},[t._v("椭圆")]),s("view",{staticClass:"cu-tag radius"},[t._v("圆角")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签尺寸")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding bg-white"},[s("view",{staticClass:"cu-tag radius sm"},[t._v("小尺寸")]),s("view",{staticClass:"cu-tag radius"},[t._v("普通尺寸")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签颜色")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("镂空标签")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("胶囊样式")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding"},[s("view",{staticClass:"cu-capsule"},[s("view",{staticClass:"cu-tag bg-red"},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-red"},[t._v("12")])]),s("view",{staticClass:"cu-capsule round"},[s("view",{staticClass:"cu-tag bg-blue "},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-blue"},[t._v("23")])]),s("view",{staticClass:"cu-capsule round"},[s("view",{staticClass:"cu-tag bg-blue "},[t._v("说明")]),s("view",{staticClass:"cu-tag line-blue"},[t._v("123")])]),s("view",{staticClass:"cu-capsule radius"},[s("view",{staticClass:"cu-tag bg-grey "},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-grey"},[t._v("23")])]),s("view",{staticClass:"cu-capsule radius"},[s("view",{staticClass:"cu-tag bg-brown sm"},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-brown sm"},[t._v("23")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("数字标签")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding flex justify-between align-center"},[s("view",{staticClass:"cu-avatar xl radius"},[t._v("港"),s("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),s("view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}},[s("view",{staticClass:"cu-tag badge"},[t._v("9")])]),s("view",{staticClass:"cu-avatar xl radius"},[s("view",{staticClass:"cu-tag badge"},[t._v("99")]),s("text",{staticClass:"cuIcon-people"})]),s("view",{staticClass:"cu-avatar xl radius"},[s("view",{staticClass:"cu-tag badge"},[t._v("99+")])])])}];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})}},[["b62d","common/runtime","common/vendor"]]]);
});
require('pages/basics/tag.js');
__wxRoute = 'pages/basics/avatar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/avatar.js';

define('pages/basics/avatar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/avatar"],{"2d05":function(t,a,e){"use strict";e("97e8");var s=c(e("b0ce")),i=c(e("3b4d"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},"3b4d":function(t,a,e){"use strict";e.r(a);var s=e("af00"),i=e("c858");for(var c in i)"default"!==c&&function(t){e.d(a,t,function(){return i[t]})}(c);var r=e("2877"),l=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=l.exports},ad8e:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{ColorList:this.ColorList,avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"]}}};a.default=s},af00:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"63dd4865-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("头像")])],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),e("view",{staticClass:"padding-sm"},t._l(t.ColorList,function(a,s){return e("view",{key:s,staticClass:"cu-avatar round lg margin-xs",class:"bg-"+a.name},[e("text",{staticClass:"avatar-text"},[t._v(t._s(a.name))])])})),t._m(9),e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar-group"},t._l(t.avatar,function(a,s){return e("view",{key:s,staticClass:"cu-avatar round lg",style:[{backgroundImage:"url("+t.avatar[s]+")"}]})}))]),t._m(10),e("view",{staticClass:"padding"},t._l(t.avatar,function(a,s){return e("view",{key:s,staticClass:"cu-avatar round lg margin-left",style:[{backgroundImage:"url("+t.avatar[s]+")"}]},[e("view",{staticClass:"cu-tag badge",class:s%2==0?"cuIcon-female bg-pink":"cuIcon-male bg-blue"})])}))],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像形状")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),e("view",{staticClass:"cu-avatar radius margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像尺寸")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar sm round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),e("view",{staticClass:"cu-avatar round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}}),e("view",{staticClass:"cu-avatar lg round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"}}),e("view",{staticClass:"cu-avatar xl round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg)"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar sm round margin-left bg-red"},[t._v("A")]),e("view",{staticClass:"cu-avatar round margin-left bg-red"},[t._v("B")]),e("view",{staticClass:"cu-avatar lg round margin-left bg-red"},[t._v("C")]),e("view",{staticClass:"cu-avatar xl round margin-left bg-red"},[t._v("D")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar sm round margin-left bg-red"},[t._v("蔚")]),e("view",{staticClass:"cu-avatar round margin-left bg-red"},[t._v("蓝")]),e("view",{staticClass:"cu-avatar lg round margin-left bg-red"},[e("text",[t._v("wl")])]),e("view",{staticClass:"cu-avatar xl round margin-left bg-red"},[e("text",{staticClass:"avatar-text"},[t._v("网络")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("内嵌文字(图标)")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar radius"},[e("text",{staticClass:"cuIcon-people"})]),e("view",{staticClass:"cu-avatar radius margin-left"},[e("text",[t._v("港")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像颜色")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像组")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像标签")])])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},c858:function(t,a,e){"use strict";e.r(a);var s=e("ad8e"),i=e.n(s);for(var c in s)"default"!==c&&function(t){e.d(a,t,function(){return s[t]})}(c);a["default"]=i.a}},[["2d05","common/runtime","common/vendor"]]]);
});
require('pages/basics/avatar.js');
__wxRoute = 'pages/basics/progress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/progress.js';

define('pages/basics/progress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/progress"],{1275:function(t,s,a){"use strict";a("97e8");var i=l(a("b0ce")),e=l(a("a7c3"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))},"2da7":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={data:function(){return{ColorList:this.ColorList,color:"red",loading:!1,modalName:"",active:!1}},onLoad:function(){var t=this;setTimeout(function(){t.loading=!0},500)},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetActive:function(t){this.active=t.detail.value}}};s.default=i},"3f9f":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"3b79b639-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("进度条")])],1),t._m(0),a("view",{staticClass:"padding bg-white"},[a("view",{staticClass:"cu-progress"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])]),a("view",{staticClass:"cu-progress radius margin-top"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])]),a("view",{staticClass:"cu-progress round margin-top"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])])]),t._m(1),a("view",{staticClass:"padding bg-white"},[a("view",{staticClass:"cu-progress round"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})]),a("view",{staticClass:"cu-progress round margin-top sm"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})]),a("view",{staticClass:"cu-progress round margin-top xs"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top",attrs:{"data-target":"ColorModal",eventid:"3b79b639-0"},on:{tap:t.showModal}},[t._m(2),a("view",{staticClass:"action"},[a("view",{staticClass:"padding solid radius shadow-blur",class:"bg-"+t.color})])]),a("view",{staticClass:"padding",class:"white"==t.color?"bg-grey":"bg-white"},[a("view",{staticClass:"cu-progress round"},[a("view",{class:"bg-"+t.color,style:[{width:t.loading?"61.8%":""}]})])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t._m(3),a("switch",{staticClass:"margin-right-sm",class:t.active?"checked":"",attrs:{eventid:"3b79b639-1"},on:{change:t.SetActive}})]),a("view",{staticClass:"padding bg-white"},[a("view",{staticClass:"cu-progress round sm striped",class:t.active?"active":""},[a("view",{staticClass:"bg-green",style:[{width:t.loading?"60%":""}]})]),a("view",{staticClass:"cu-progress round sm margin-top-sm striped",class:t.active?"active":""},[a("view",{staticClass:"bg-black",style:[{width:t.loading?"40%":""}]})])]),t._m(4),a("view",{staticClass:"padding bg-white"},[a("view",{staticClass:"cu-progress radius striped active"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"30%":""}]},[t._v("30%")]),a("view",{staticClass:"bg-olive",style:[{width:t.loading?"45%":""}]},[t._v("45%")]),a("view",{staticClass:"bg-cyan",style:[{width:t.loading?"25%":""}]},[t._v("25%")])])]),t._m(5),a("view",{staticClass:"padding bg-white "},[a("view",{staticClass:"flex"},[a("view",{staticClass:"cu-progress round"},[a("view",{staticClass:"bg-green",style:[{width:t.loading?"100%":""}]})]),a("text",{staticClass:"cuIcon-roundcheckfill text-green margin-left-sm"})]),a("view",{staticClass:"flex margin-top"},[a("view",{staticClass:"cu-progress round"},[a("view",{staticClass:"bg-green",style:[{width:t.loading?"80%":""}]})]),a("text",{staticClass:"margin-left"},[t._v("80%")])])]),a("view",{staticClass:"cu-modal",class:"ColorModal"==t.modalName?"show":""},[a("view",{staticClass:"cu-dialog"},[a("view",{staticClass:"cu-bar justify-end solid-bottom"},[a("view",{staticClass:"content"},[t._v("选择颜色")]),a("view",{staticClass:"action",attrs:{eventid:"3b79b639-2"},on:{tap:t.hideModal}},[a("text",{staticClass:"cuIcon-close text-red"})])]),a("view",{staticClass:"grid col-5 padding"},t._l(t.ColorList,function(s,i){return"gray"!=s.name&&"white"!=s.name?a("view",{key:i,staticClass:"padding-xs",attrs:{"data-color":s.name,eventid:"3b79b639-3-"+i},on:{tap:t.SetColor}},[a("view",{staticClass:"padding-tb radius",class:"bg-"+s.name},[t._v(t._s(s.title))])]):t._e()}))])])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条形状")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条尺寸")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条颜色")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条条纹")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条比例")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条布局")])])}];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})},"845a":function(t,s,a){"use strict";a.r(s);var i=a("2da7"),e=a.n(i);for(var l in i)"default"!==l&&function(t){a.d(s,t,function(){return i[t]})}(l);s["default"]=e.a},a7c3:function(t,s,a){"use strict";a.r(s);var i=a("3f9f"),e=a("845a");for(var l in e)"default"!==l&&function(t){a.d(s,t,function(){return e[t]})}(l);var c=a("2877"),o=Object(c["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=o.exports}},[["1275","common/runtime","common/vendor"]]]);
});
require('pages/basics/progress.js');
__wxRoute = 'pages/basics/shadow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/shadow.js';

define('pages/basics/shadow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/shadow"],{"464a":function(t,s,i){"use strict";i.r(s);var a=i("e241"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(s,t,function(){return a[t]})}(n);s["default"]=e.a},4904:function(t,s,i){"use strict";i.r(s);var a=i("f1b5"),e=i("464a");for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);var l=i("2877"),c=Object(l["a"])(e["default"],a["a"],a["b"],!1,null,null,null);s["default"]=c.exports},e241:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{size:!1}},methods:{SetSize:function(t){this.size=t.detail.value}}};s.default=a},f037:function(t,s,i){"use strict";i("97e8");var a=n(i("b0ce")),e=n(i("4904"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(e.default))},f1b5:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"fc61ffa8-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("边框阴影")])],1),i("view",{staticClass:"cu-bar bg-white solid-bottom"},[t._m(0),i("view",{staticClass:"action"},[i("switch",{staticClass:"sm",class:t.size?"checked":"",attrs:{eventid:"fc61ffa8-0"},on:{change:t.SetSize}})])]),i("view",{staticClass:"padding bg-white text-center"},[i("view",{staticClass:"padding",class:t.size?"solids":"solid"},[t._v("四周")]),i("view",{staticClass:"padding margin-top",class:t.size?"solids-top":"solid-top"},[t._v("上")]),i("view",{staticClass:"padding margin-top",class:t.size?"solids-right":"solid-right"},[t._v("右")]),i("view",{staticClass:"padding margin-top",class:t.size?"solids-bottom":"solid-bottom"},[t._v("下")]),i("view",{staticClass:"padding margin-top",class:t.size?"solids-left":"solid-left"},[t._v("左")])]),t._m(1),t._m(2)],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("边框")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("阴影")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"padding text-center"},[i("view",{staticClass:"padding-xl radius shadow bg-white"},[t._v("默认阴影")]),i("view",{staticClass:"padding-xl radius shadow bg-blue margin-top"},[t._v("根据背景颜色而改变的阴影")]),i("view",{staticClass:"padding-xl radius shadow shadow-lg bg-white margin-top"},[t._v("长阴影")]),i("view",{staticClass:"padding-xl radius shadow shadow-lg bg-blue margin-top"},[t._v("长阴影")]),i("view",{staticClass:"padding-xl radius shadow-warp bg-white margin-top"},[t._v("翘边阴影")]),i("view",{staticClass:"padding-xl radius shadow-blur bg-red margin-top bg-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg)"}},[i("view",[t._v("根据背景图而改变的阴影")])])])}];i.d(s,"a",function(){return a}),i.d(s,"b",function(){return e})}},[["f037","common/runtime","common/vendor"]]]);
});
require('pages/basics/shadow.js');
__wxRoute = 'pages/basics/loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/loading.js';

define('pages/basics/loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/loading"],{"3f64":function(t,s,a){"use strict";a.r(s);var e=a("92c6"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(s,t,function(){return e[t]})}(o);s["default"]=i.a},5211:function(t,s,a){"use strict";a("97e8");var e=o(a("b0ce")),i=o(a("f760"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},"92c6":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{CustomBar:this.CustomBar,isLoad:!1,loadModal:!1,loadProgress:0}},methods:{isLoading:function(t){this.isLoad=t.detail.value},LoadModal:function(t){var s=this;this.loadModal=!0,setTimeout(function(){s.loadModal=!1},2e3)},LoadProgress:function(t){var s=this;this.loadProgress=this.loadProgress+3,this.loadProgress<100?setTimeout(function(){s.LoadProgress()},100):this.loadProgress=0}}};s.default=e},d37b:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"51b73bb0-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("加载")]),a("block",{slot:"right"},[a("view",{staticClass:"action"},[a("view",{staticClass:"cu-load load-icon",class:t.isLoad?"over":"loading"})])])],1),t._m(0),a("view",{staticClass:"cu-load bg-blue",class:t.isLoad?"over":"loading"}),a("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(1),a("view",{staticClass:"action"},[a("switch",{class:t.isLoad?"checked":"",attrs:{eventid:"51b73bb0-0"},on:{change:t.isLoading}})])]),a("view",{staticClass:"cu-load bg-grey",class:t.isLoad?"over":"loading"}),t._m(2),a("view",{staticClass:"cu-load bg-red erro"}),a("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(3),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"51b73bb0-1"},on:{tap:t.LoadModal}},[t._v("点我")])],1)]),t.loadModal?a("view",{staticClass:"cu-load load-modal"},[a("image",{attrs:{src:"/static/logo.png",mode:"aspectFit"}}),a("view",{staticClass:"gray-text"},[t._v("加载中...")])]):t._e(),a("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(4),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"51b73bb0-2"},on:{tap:t.LoadProgress}},[t._v("点我")])],1)]),a("view",{staticClass:"load-progress",class:0!=t.loadProgress?"show":"hide",style:[{top:t.CustomBar+"px"}]},[a("view",{staticClass:"load-progress-bar bg-green",style:[{transform:"translate3d(-"+(100-t.loadProgress)+"%, 0px, 0px)"}]}),a("view",{staticClass:"load-progress-spinner text-green"})])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("背景")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("加载状态")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("加载错误")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("弹框加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条加载")])}];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})},f760:function(t,s,a){"use strict";a.r(s);var e=a("d37b"),i=a("3f64");for(var o in i)"default"!==o&&function(t){a.d(s,t,function(){return i[t]})}(o);var c=a("2877"),l=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=l.exports}},[["5211","common/runtime","common/vendor"]]]);
});
require('pages/basics/loading.js');
__wxRoute = 'pages/component/bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/bar.js';

define('pages/component/bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/bar"],{"313d":function(t,s,a){"use strict";var e=a("cf65"),c=a.n(e);c.a},4383:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{InputBottom:0}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}};s.default=e},5111:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"1918e7c3-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("操作条")])],1),t._m(0),a("view",{staticClass:"box"},[t._m(1),t._m(2),a("view",{staticClass:"cu-bar tabbar margin-bottom-xl bg-white"},[t._m(3),t._m(4),a("view",{staticClass:"action text-gray add-action"},[a("button",{staticClass:"cu-btn cuIcon-add bg-green shadow"}),t._v("发布")],1),t._m(5),t._m(6)]),a("view",{staticClass:"cu-bar tabbar bg-black"},[t._m(7),t._m(8),a("view",{staticClass:"action text-gray add-action"},[a("button",{staticClass:"cu-btn cuIcon-add bg-green shadow"}),t._v("发布")],1),t._m(9),t._m(10)]),a("view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("button",{staticClass:"action",attrs:{"open-type":"contact"}},[a("view",{staticClass:"cuIcon-service text-green"},[a("view",{staticClass:"cu-tag badge"})]),t._v("客服")]),t._m(11),t._m(12),a("view",{staticClass:"bg-red submit"},[t._v("立即订购")])],1),a("view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("button",{staticClass:"action",attrs:{"open-type":"contact"}},[a("view",{staticClass:"cuIcon-service text-green"},[a("view",{staticClass:"cu-tag badge"})]),t._v("客服")]),t._m(13),a("view",{staticClass:"bg-orange submit"},[t._v("加入购物车")]),a("view",{staticClass:"bg-red submit"},[t._v("立即订购")])],1),a("view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("button",{staticClass:"action",attrs:{"open-type":"contact"}},[a("view",{staticClass:"cuIcon-service text-green"},[a("view",{staticClass:"cu-tag badge"})]),t._v("客服")]),t._m(14),t._m(15),a("view",{staticClass:"btn-group"},[a("button",{staticClass:"cu-btn bg-red round shadow-blur"},[t._v("立即订购")])],1)],1),a("view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("button",{staticClass:"action",attrs:{"open-type":"contact"}},[a("view",{staticClass:"cuIcon-service text-green"},[a("view",{staticClass:"cu-tag badge"})]),t._v("客服")]),t._m(16),a("view",{staticClass:"btn-group"},[a("button",{staticClass:"cu-btn bg-orange round shadow-blur"},[t._v("加入购物车")]),a("button",{staticClass:"cu-btn bg-red round shadow-blur"},[t._v("立即订购")])],1)],1)]),t._m(17),t._e(),t._m(22),t._m(23),t._m(24),t._m(25),a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar search bg-white"},[a("view",{staticClass:"search-form round"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search",eventid:"1918e7c3-0"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn bg-green shadow-blur round"},[t._v("搜索")])],1)]),a("view",{staticClass:"cu-bar search bg-white"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg"}}),a("view",{staticClass:"search-form round"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search",eventid:"1918e7c3-1"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),t._m(26)]),a("view",{staticClass:"cu-bar bg-red search"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big114004.jpg)"}}),a("view",{staticClass:"search-form radius"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search",eventid:"1918e7c3-2"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),t._m(27)]),a("view",{staticClass:"cu-bar bg-cyan search"},[a("view",{staticClass:"search-form radius"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search",eventid:"1918e7c3-3"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),t._m(28)])]),t._m(29),a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar btn-group"},[a("button",{staticClass:"cu-btn bg-green shadow-blur round lg"},[t._v("保存")])],1),a("view",{staticClass:"cu-bar btn-group"},[a("button",{staticClass:"cu-btn bg-green shadow-blur"},[t._v("保存")]),a("button",{staticClass:"cu-btn text-green line-green shadow"},[t._v("上传")])],1),a("view",{staticClass:"cu-bar btn-group"},[a("button",{staticClass:"cu-btn bg-green shadow-blur round"},[t._v("保存")]),a("button",{staticClass:"cu-btn bg-blue shadow-blur round"},[t._v("提交")])],1)]),t._m(30),a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar input"},[t._m(31),a("input",{staticClass:"solid-bottom",attrs:{"adjust-position":!1,focus:!1,maxlength:"300","cursor-spacing":"10",eventid:"1918e7c3-4"},on:{focus:t.InputFocus,blur:t.InputBlur}}),t._m(32),a("button",{staticClass:"cu-btn bg-green shadow-blur"},[t._v("发送")])],1),a("view",{staticClass:"cu-bar input"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"}}),t._m(33),a("input",{staticClass:"solid-bottom",attrs:{"adjust-position":!1,maxlength:"300","cursor-spacing":"10",eventid:"1918e7c3-5"},on:{focus:t.InputFocus,blur:t.InputBlur}}),t._m(34),a("button",{staticClass:"cu-btn bg-green shadow-blur"},[t._v("发送")])],1)])],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("底部操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar tabbar bg-white"},[a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cu-image"},[a("image",{attrs:{src:"/static/tabbar/basics_cur.png"}})]),a("view",{staticClass:"text-green"},[t._v("元素")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cu-image"},[a("image",{attrs:{src:"/static/tabbar/component.png"}})]),a("view",{staticClass:"text-gray"},[t._v("组件")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cu-image"},[a("image",{attrs:{src:"/static/tabbar/plugin.png"}}),a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),a("view",{staticClass:"text-gray"},[t._v("扩展")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cu-image"},[a("image",{attrs:{src:"/static/tabbar/about.png"}}),a("view",{staticClass:"cu-tag badge"})]),a("view",{staticClass:"text-gray"},[t._v("关于")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar tabbar margin-bottom-xl bg-black"},[a("view",{staticClass:"action text-orange"},[a("view",{staticClass:"cuIcon-homefill"}),t._v("首页")]),a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-similar"}),t._v("分类")]),a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-recharge"}),t._v("积分")]),a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")]),a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-my"},[a("view",{staticClass:"cu-tag badge"})]),t._v("我的")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-green"},[a("view",{staticClass:"cuIcon-homefill"}),t._v("首页")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-similar"}),t._v("分类")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-my"},[a("view",{staticClass:"cu-tag badge"})]),t._v("我的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-green"},[a("view",{staticClass:"cuIcon-homefill"}),t._v("首页")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-similar"}),t._v("分类")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-my"},[a("view",{staticClass:"cu-tag badge"})]),t._v("我的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-orange"},[a("view",{staticClass:"cuIcon-favorfill"}),t._v("已收藏")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:" cuIcon-shop"}),t._v("店铺")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("标题操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar justify-center bg-white"},[a("view",{staticClass:"action border-title"},[a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")]),a("text",{staticClass:"bg-grey",staticStyle:{width:"2rem"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar justify-center bg-white"},[a("view",{staticClass:"action border-title"},[a("text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),a("text",{staticClass:"bg-gradual-blue",staticStyle:{width:"3rem"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar justify-center bg-white"},[a("view",{staticClass:"action sub-title"},[a("text",{staticClass:"text-xl text-bold text-green"},[t._v("关于我们")]),a("text",{staticClass:"bg-green",staticStyle:{width:"2rem"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar justify-center bg-white"},[a("view",{staticClass:"action sub-title"},[a("text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),a("text",{staticClass:"text-ABC text-blue"},[t._v("about")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action border-title"},[a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")]),a("text",{staticClass:"bg-grey",staticStyle:{width:"2rem"}})])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action border-title"},[a("text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),a("text",{staticClass:"bg-gradual-blue",staticStyle:{width:"3rem"}})])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action sub-title"},[a("text",{staticClass:"text-xl text-bold text-green"},[t._v("关于我们")]),a("text",{staticClass:"bg-green"})])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action sub-title"},[a("text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),a("text",{staticClass:"text-ABC text-blue"},[t._v("about")])])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action title-style-3"},[a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")]),a("text",{staticClass:"text-Abc text-gray self-end margin-left-sm"},[t._v("about")])])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")])])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-titles text-green"}),a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("顶部操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-back text-gray"}),t._v("返回")]),a("view",{staticClass:"content text-bold"},[t._v("操作条")])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-homefill text-gray"}),t._v("首页")]),a("view",{staticClass:"content text-bold"},[t._v("鲜亮的高饱和色彩，专注视觉的小程序组件库")]),a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-cardboardfill text-grey"}),a("text",{staticClass:"cuIcon-recordfill text-red"})])]),a("view",{staticClass:"cu-bar bg-blue"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-close"}),t._v("关闭")]),a("view",{staticClass:"content text-bold"},[t._v("海蓝")])]),a("view",{staticClass:"cu-bar bg-black search"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"}}),a("view",{staticClass:"content"},[t._v("ColorUI")]),a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-more"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("搜索操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",[t._v("广州")]),a("text",{staticClass:"cuIcon-triangledownfill"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",[t._v("广州")]),a("text",{staticClass:"cuIcon-triangledownfill"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-close"}),a("text",[t._v("取消")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("操作条按钮组")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("输入操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-sound text-grey"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-emojifill text-grey"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-roundaddfill text-grey"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-emojifill text-grey"})])}];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return c})},"618a":function(t,s,a){"use strict";a("97e8");var e=i(a("b0ce")),c=i(a("905f"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(c.default))},"905f":function(t,s,a){"use strict";a.r(s);var e=a("5111"),c=a("d708");for(var i in c)"default"!==i&&function(t){a.d(s,t,function(){return c[t]})}(i);a("313d");var n=a("2877"),l=Object(n["a"])(c["default"],e["a"],e["b"],!1,null,null,null);s["default"]=l.exports},cf65:function(t,s,a){},d708:function(t,s,a){"use strict";a.r(s);var e=a("4383"),c=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(s,t,function(){return e[t]})}(i);s["default"]=c.a}},[["618a","common/runtime","common/vendor"]]]);
});
require('pages/component/bar.js');
__wxRoute = 'pages/component/nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/nav.js';

define('pages/component/nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/nav"],{"32d9":function(t,e,a){"use strict";a.r(e);var s=a("8172"),c=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=c.a},7991:function(t,e,a){"use strict";a("97e8");var s=i(a("b0ce")),c=i(a("cadb"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(c.default))},"7d29":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"191914d3-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("导航栏")])],1),t._l(10,function(e,s){return s==t.TabCur?a("view",{key:s,staticClass:"bg-grey padding margin text-center"},[t._v("Tab"+t._s(s))]):t._e()}),t._m(0),a("scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},t._l(10,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-green cur":"",attrs:{"data-id":s,eventid:"191914d3-0-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(1),a("scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":""}},t._l(3,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-blue cur":"",attrs:{"data-id":s,eventid:"191914d3-1-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(2),a("scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":""}},[a("view",{staticClass:"flex text-center"},t._l(4,function(e,s){return a("view",{key:s,staticClass:"cu-item flex-sub",class:s==t.TabCur?"text-orange cur":"",attrs:{"data-id":s,eventid:"191914d3-2-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])}))]),t._m(3),a("scroll-view",{staticClass:"bg-red nav text-center",attrs:{"scroll-x":""}},t._l(3,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-white cur":"",attrs:{"data-id":s,eventid:"191914d3-3-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(4),a("scroll-view",{staticClass:"bg-green nav text-center",attrs:{"scroll-x":""}},[a("view",{staticClass:"cu-item",class:0==t.TabCur?"text-white cur":"",attrs:{"data-id":"0",eventid:"191914d3-4"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-camerafill"}),t._v("数码")]),a("view",{staticClass:"cu-item",class:1==t.TabCur?"text-white cur":"",attrs:{"data-id":"1",eventid:"191914d3-5"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-upstagefill"}),t._v("排行榜")]),a("view",{staticClass:"cu-item",class:2==t.TabCur?"text-white cur":"",attrs:{"data-id":"2",eventid:"191914d3-6"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-clothesfill"}),t._v("皮肤")])])],2)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("默认")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("居中")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("平分")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("背景")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("图标")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return c})},8172:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{TabCur:0,scrollLeft:0}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};e.default=s},cadb:function(t,e,a){"use strict";a.r(e);var s=a("7d29"),c=a("32d9");for(var i in c)"default"!==i&&function(t){a.d(e,t,function(){return c[t]})}(i);var n=a("2877"),r=Object(n["a"])(c["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports}},[["7991","common/runtime","common/vendor"]]]);
});
require('pages/component/nav.js');
__wxRoute = 'pages/component/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/list.js';

define('pages/component/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/list"],{"0cf2":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{iconList:[{icon:"cardboardfill",color:"red",badge:120,name:"VR"},{icon:"recordfill",color:"orange",badge:1,name:"录像"},{icon:"picfill",color:"yellow",badge:0,name:"图像"},{icon:"noticefill",color:"olive",badge:22,name:"通知"},{icon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{icon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{icon:"discoverfill",color:"purple",badge:0,name:"发现"},{icon:"questionfill",color:"mauve",badge:0,name:"帮助"},{icon:"commandfill",color:"purple",badge:0,name:"问答"},{icon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:3,gridBorder:!1,menuBorder:!1,menuArrow:!1,menuCard:!1,skin:!1,listTouchStart:0,listTouchDirection:null}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},Gridchange:function(t){this.gridCol=t.detail.value},Gridswitch:function(t){this.gridBorder=t.detail.value},MenuBorder:function(t){this.menuBorder=t.detail.value},MenuArrow:function(t){this.menuArrow=t.detail.value},MenuCard:function(t){this.menuCard=t.detail.value},SwitchSex:function(t){this.skin=t.detail.value},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null}}};s.default=e},1648:function(t,s,a){},"28ac":function(t,s,a){"use strict";var e=a("1648"),i=a.n(e);i.a},"2f4b":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("scroll-view",{staticClass:"page",class:null!=t.modalName?"show":"",attrs:{"scroll-y":null==t.modalName}},[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"0a08baee-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("列表")])],1),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange "}),t._v("宫格列表")]),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"gridModal",eventid:"0a08baee-0"},on:{tap:t.showModal}},[t._v("设置")])],1)]),a("view",{staticClass:"cu-modal",class:"gridModal"==t.modalName?"show":"",attrs:{eventid:"0a08baee-4"},on:{tap:t.hideModal}},[a("view",{staticClass:"cu-dialog",attrs:{eventid:"0a08baee-3"},on:{tap:function(t){t.stopPropagation()}}},[a("radio-group",{staticClass:"block",attrs:{eventid:"0a08baee-1",mpcomid:"0a08baee-1"},on:{change:t.Gridchange}},[a("view",{staticClass:"cu-list menu text-left"},t._l(3,function(s,e){return a("view",{key:e,staticClass:"cu-item"},[a("label",{staticClass:"flex justify-between align-center flex-sub"},[a("view",{staticClass:"flex-sub"},[t._v(t._s(e+3)+" 列")]),a("radio",{staticClass:"round",class:t.gridCol==e+3?"checked":"",attrs:{value:e+3+"",checked:t.gridCol==e+3}})],1)],1)}))]),a("view",{staticClass:"cu-list menu text-left solid-top"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey"},[t._v("边框")])]),a("view",{staticClass:"action"},[a("switch",{class:t.gridBorder?"checked":"",attrs:{checked:!!t.gridBorder,eventid:"0a08baee-2"},on:{change:t.Gridswitch}})])])])],1)]),a("view",{staticClass:"cu-list grid",class:["col-"+t.gridCol,t.gridBorder?"":"no-border"]},t._l(t.iconList,function(s,e){return e<2*t.gridCol?a("view",{key:e,staticClass:"cu-item"},[a("view",{class:["cuIcon-"+s.icon,"text-"+s.color]},[0!=s.badge?a("view",{staticClass:"cu-tag badge"},[1!=s.badge?a("block",[t._v(t._s(s.badge>99?"99+":s.badge))]):t._e()],1):t._e()]),a("text",[t._v(t._s(s.name))])]):t._e()})),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("菜单列表")]),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"menuModal",eventid:"0a08baee-5"},on:{tap:t.showModal}},[t._v("设置")])],1)]),a("view",{staticClass:"cu-modal",class:"menuModal"==t.modalName?"show":"",attrs:{eventid:"0a08baee-10"},on:{tap:t.hideModal}},[a("view",{staticClass:"cu-dialog",attrs:{eventid:"0a08baee-9"},on:{tap:function(t){t.stopPropagation()}}},[a("view",{staticClass:"cu-list menu text-left solid-top"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey"},[t._v("短边框")])]),a("view",{staticClass:"action"},[a("switch",{class:t.menuBorder?"checked":"",attrs:{checked:!!t.menuBorder,eventid:"0a08baee-6"},on:{change:t.MenuBorder}})])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey"},[t._v("箭头")])]),a("view",{staticClass:"action"},[a("switch",{class:t.menuArrow?"checked":"",attrs:{checked:!!t.menuArrow,eventid:"0a08baee-7"},on:{change:t.MenuArrow}})])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey"},[t._v("卡片")])]),a("view",{staticClass:"action"},[a("switch",{class:t.menuCard?"checked":"",attrs:{checked:!!t.menuCard,eventid:"0a08baee-8"},on:{change:t.MenuCard}})])])])])]),a("view",{staticClass:"cu-list menu",class:[t.menuBorder?"sm-border":"",t.menuCard?"card-menu margin-top":""]},[a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-circlefill text-grey"}),a("text",{staticClass:"text-grey"},[t._v("图标 + 标题")])])]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("image",{staticClass:"png",attrs:{src:"/static/logo.png",mode:"aspectFit"}}),a("text",{staticClass:"text-grey"},[t._v("图片 + 标题")])])]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("button",{staticClass:"cu-btn content",attrs:{"open-type":"contact"}},[a("text",{staticClass:"cuIcon-btn text-olive"}),a("text",{staticClass:"text-grey"},[t._v("Open-type 按钮")])])],1),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("navigator",{staticClass:"content",attrs:{"hover-class":"none",url:"../list/list","open-type":"redirect"}},[a("text",{staticClass:"cuIcon-discoverfill text-orange"}),a("text",{staticClass:"text-grey"},[t._v("Navigator 跳转")])])],1),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-emojiflashfill text-pink"}),a("text",{staticClass:"text-grey"},[t._v("头像组")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cu-avatar-group"},[a("view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}}),a("view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"}}),a("view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"}})]),a("text",{staticClass:"text-grey text-sm"},[t._v("4 人")])])]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-btn text-green"}),a("text",{staticClass:"text-grey"},[t._v("按钮")])]),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn round bg-green shadow"},[a("text",{staticClass:"cuIcon-upload"}),t._v("上传")])],1)]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-tagfill text-red  margin-right-xs"}),a("text",{staticClass:"text-grey"},[t._v("标签")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cu-tag round bg-orange light"},[t._v("音乐")]),a("view",{staticClass:"cu-tag round bg-olive light"},[t._v("电影")]),a("view",{staticClass:"cu-tag round bg-blue light"},[t._v("旅行")])])]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-warn text-green"}),a("text",{staticClass:"text-grey"},[t._v("文本")])]),a("view",{staticClass:"action"},[a("text",{staticClass:"text-grey text-sm"},[t._v("小目标还没有实现！")])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content padding-tb-sm"},[a("view",[a("text",{staticClass:"cuIcon-clothesfill text-blue margin-right-xs"}),t._v("多行Item")]),a("view",{staticClass:"text-gray text-sm"},[a("text",{staticClass:"cuIcon-infofill margin-right-xs"}),t._v("小目标还没有实现！")])]),a("view",{staticClass:"action"},[a("switch",{staticClass:"switch-sex",class:t.skin?"checked":"",attrs:{checked:!!t.skin,eventid:"0a08baee-11"},on:{change:t.SwitchSex}})])])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange "}),t._v("消息列表")])]),a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("凯尔")]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[a("text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"}},[a("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[a("text",{staticClass:"text-cut"},[t._v("瓦洛兰之盾-塔里克")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("战士")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])]),a("view",{staticClass:"cu-item "},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-pink"},[a("text",{staticClass:"text-cut"},[t._v("莫甘娜")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item grayscale"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"}}),a("view",{staticClass:"content"},[a("view",[a("text",{staticClass:"text-cut"},[t._v("伊泽瑞尔")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("断开连接...")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("等我回来一个打十个")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item cur"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"}},[a("view",{staticClass:"cu-tag badge"})]),a("view",{staticClass:"content"},[a("view",[a("text",{staticClass:"text-cut"},[t._v("瓦罗兰大陆-睡衣守护者-新手保护营")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("6人")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("伊泽瑞尔："),a("text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("传送中...")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange "}),t._v("列表左滑")])]),a("view",{staticClass:"cu-list menu-avatar"},t._l(4,function(s,e){return a("view",{key:e,staticClass:"cu-item",class:t.modalName=="move-box-"+e?"move-cur":"",attrs:{"data-target":"move-box-"+e,eventid:"0a08baee-12-"+e},on:{touchstart:t.ListTouchStart,touchmove:t.ListTouchMove,touchend:t.ListTouchEnd}},[a("view",{staticClass:"cu-avatar round lg",style:[{backgroundImage:"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100"+(e+2)+".jpg)"}]}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("文晓港")]),a("view",{staticClass:"text-gray text-sm"},[a("text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("消息未送达")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])]),a("view",{staticClass:"move"},[a("view",{staticClass:"bg-grey"},[t._v("置顶")]),a("view",{staticClass:"bg-red"},[t._v("删除")])])])}))],1)],1)},i=[];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})},"5c3a":function(t,s,a){"use strict";a.r(s);var e=a("2f4b"),i=a("fb63");for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);a("28ac");var l=a("2877"),o=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=o.exports},"7f52":function(t,s,a){"use strict";a("97e8");var e=c(a("b0ce")),i=c(a("5c3a"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},fb63:function(t,s,a){"use strict";a.r(s);var e=a("0cf2"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);s["default"]=i.a}},[["7f52","common/runtime","common/vendor"]]]);
});
require('pages/component/list.js');
__wxRoute = 'pages/component/card';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/card.js';

define('pages/component/card.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/card"],{"44a8":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{isCard:!1}},methods:{IsCard:function(t){this.isCard=t.detail.value}}};s.default=e},"56b3":function(t,s,a){"use strict";a.r(s);var e=a("eb60"),i=a("8bc9");for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);var l=a("2877"),n=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=n.exports},"8bc9":function(t,s,a){"use strict";a.r(s);var e=a("44a8"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);s["default"]=i.a},afe8:function(t,s,a){"use strict";a("97e8");var e=c(a("b0ce")),i=c(a("56b3"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},eb60:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"0a048560-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("卡片")])],1),a("view",{staticClass:"cu-bar bg-white solid-bottom"},[t._m(0),a("view",{staticClass:"action"},[a("switch",{class:t.isCard?"checked":"",attrs:{checked:!!t.isCard,eventid:"0a048560-0"},on:{change:t.IsCard}})])]),a("view",{staticClass:"cu-card case",class:t.isCard?"no-card":""},[t._m(1)]),a("view",{staticClass:"cu-bar bg-white solid-bottom",class:t.isCard?"margin-top":""},[t._m(2),a("view",{staticClass:"action"},[a("switch",{class:t.isCard?"checked":"",attrs:{checked:!!t.isCard,eventid:"0a048560-1"},on:{change:t.IsCard}})])]),a("view",{staticClass:"cu-card dynamic",class:t.isCard?"no-card":""},[a("view",{staticClass:"cu-item shadow"},[t._m(3),a("view",{staticClass:"text-content"},[t._v("折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！")]),a("view",{staticClass:"grid flex-sub padding-lr",class:t.isCard?"col-3 grid-square":"col-1"},t._l(t.isCard?9:1,function(s,e){return a("view",{key:e,staticClass:"bg-img",class:t.isCard?"":"only-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}})})),t._m(4),t._m(5)])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t._m(6),a("view",{staticClass:"action"},[a("switch",{class:t.isCard?"checked":"",attrs:{checked:!!t.isCard,eventid:"0a048560-2"},on:{change:t.IsCard}})])]),a("view",{staticClass:"cu-card article",class:t.isCard?"no-card":""},[t._m(7)])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-titles text-orange"}),t._v("案例类卡片")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-item shadow"},[a("view",{staticClass:"image"},[a("image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",mode:"widthFix"}}),a("view",{staticClass:"cu-tag bg-blue"},[t._v("史诗")]),a("view",{staticClass:"cu-bar bg-shadeBottom"},[a("text",{staticClass:"text-cut"},[t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")])])]),a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),a("view",{staticClass:"content flex-sub"},[a("view",{staticClass:"text-grey"},[t._v("正义天使 凯尔")]),a("view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("十天前"),a("view",{staticClass:"text-gray text-sm"},[a("text",{staticClass:"cuIcon-attentionfill margin-lr-xs"}),t._v("10"),a("text",{staticClass:"cuIcon-appreciatefill margin-lr-xs"}),t._v("20"),a("text",{staticClass:"cuIcon-messagefill margin-lr-xs"}),t._v("30")])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-titles text-orange "}),t._v("动态类卡片")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),a("view",{staticClass:"content flex-sub"},[a("view",[t._v("凯尔")]),a("view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("2019年12月3日")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"text-gray text-sm text-right padding"},[a("text",{staticClass:"cuIcon-attentionfill margin-lr-xs"}),t._v("10"),a("text",{staticClass:"cuIcon-appreciatefill margin-lr-xs"}),t._v("20"),a("text",{staticClass:"cuIcon-messagefill margin-lr-xs"}),t._v("30")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-list menu-avatar comment solids-top"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("莫甘娜")]),a("view",{staticClass:"text-gray text-content text-df"},[t._v("凯尔，你被自己的光芒变的盲目。")]),a("view",{staticClass:"bg-grey padding-sm radius margin-top-sm  text-sm"},[a("view",{staticClass:"flex"},[a("view",[t._v("凯尔：")]),a("view",{staticClass:"flex-sub"},[t._v("妹妹，你在帮他们给黑暗找借口吗?")])])]),a("view",{staticClass:"margin-top-sm flex justify-between"},[a("view",{staticClass:"text-gray text-df"},[t._v("2018年12月4日")]),a("view",[a("text",{staticClass:"cuIcon-appreciatefill text-red"}),a("text",{staticClass:"cuIcon-messagefill text-gray margin-left-sm"})])])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("凯尔")]),a("view",{staticClass:"text-gray text-content text-df"},[t._v("妹妹，如果不是为了飞翔，我们要这翅膀有什么用?")]),a("view",{staticClass:"bg-grey padding-sm radius margin-top-sm  text-sm"},[a("view",{staticClass:"flex"},[a("view",[t._v("莫甘娜：")]),a("view",{staticClass:"flex-sub"},[t._v("如果不能立足于大地，要这双脚又有何用?")])])]),a("view",{staticClass:"margin-top-sm flex justify-between"},[a("view",{staticClass:"text-gray text-df"},[t._v("2018年12月4日")]),a("view",[a("text",{staticClass:"cuIcon-appreciate text-gray"}),a("text",{staticClass:"cuIcon-messagefill text-gray margin-left-sm"})])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-titles text-orange "}),t._v("文章类卡片")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-item shadow"},[a("view",{staticClass:"title"},[a("view",{staticClass:"text-cut"},[t._v("无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。")])]),a("view",{staticClass:"content"},[a("image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",mode:"aspectFill"}}),a("view",{staticClass:"desc"},[a("view",{staticClass:"text-content"},[t._v("折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！")]),a("view",[a("view",{staticClass:"cu-tag bg-red light sm round"},[t._v("正义天使")]),a("view",{staticClass:"cu-tag bg-green light sm round"},[t._v("史诗")])])])])])}];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})}},[["afe8","common/runtime","common/vendor"]]]);
});
require('pages/component/card.js');
__wxRoute = 'pages/component/form';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/form.js';

define('pages/component/form.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/form"],{"14ce":function(t,e,a){"use strict";a.r(e);var i=a("85e6"),s=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=s.a},"4ec0":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"0a061714-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("表单")])],1),a("form",[a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("邮件")]),a("input",{attrs:{placeholder:"两字短标题",name:"input"}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("输入框")]),a("input",{attrs:{placeholder:"三字标题",name:"input"}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("收货地址")]),a("input",{attrs:{placeholder:"统一标题的宽度",name:"input"}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("收货地址")]),a("input",{attrs:{placeholder:"输入框带个图标",name:"input"}}),a("text",{staticClass:"cuIcon-locationfill text-orange"})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("验证码")]),a("input",{attrs:{placeholder:"输入框带个按钮",name:"input"}}),a("button",{staticClass:"cu-btn bg-green shadow"},[t._v("验证码")])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("手机号码")]),a("input",{attrs:{placeholder:"输入框带标签",name:"input"}}),a("view",{staticClass:"cu-capsule radius"},[a("view",{staticClass:"cu-tag bg-blue "},[t._v("+86")]),a("view",{staticClass:"cu-tag line-blue"},[t._v("中国大陆")])])]),a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("普通选择")]),a("picker",{attrs:{value:t.index,range:t.picker,eventid:"0a061714-0"},on:{change:t.PickerChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.index>-1?t.picker[t.index]:"禁止换行，超出容器部分会以 ... 方式截断"))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("多列选择")]),a("picker",{attrs:{mode:"multiSelector",value:t.multiIndex,range:t.multiArray,eventid:"0a061714-1"},on:{change:t.MultiChange,columnchange:t.MultiColumnChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.multiArray[0][t.multiIndex[0]])+"，"+t._s(t.multiArray[1][t.multiIndex[1]])+"，"+t._s(t.multiArray[2][t.multiIndex[2]]))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("时间选择")]),a("picker",{attrs:{mode:"time",value:t.time,start:"09:01",end:"21:01",eventid:"0a061714-2"},on:{change:t.TimeChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.time))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("日期选择")]),a("picker",{attrs:{mode:"date",value:t.date,start:"2015-09-01",end:"2020-09-01",eventid:"0a061714-3"},on:{change:t.DateChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.date))])])],1),a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("开关选择")]),a("switch",{class:t.switchA?"checked":"",attrs:{checked:!!t.switchA,eventid:"0a061714-4"},on:{change:t.SwitchA}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义颜色")]),a("switch",{staticClass:"red",class:t.switchB?"checked":"",attrs:{checked:!!t.switchB,eventid:"0a061714-5"},on:{change:t.SwitchB}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义图标")]),a("switch",{staticClass:"switch-sex",class:t.switchC?"checked":"",attrs:{checked:!!t.switchC,eventid:"0a061714-6"},on:{change:t.SwitchC}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("方形开关")]),a("switch",{staticClass:"orange radius",class:t.switchD?"checked":"",attrs:{checked:!!t.switchD,eventid:"0a061714-7"},on:{change:t.SwitchD}})]),a("radio-group",{staticClass:"block",attrs:{eventid:"0a061714-8",mpcomid:"0a061714-1"},on:{change:t.RadioChange}},[a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("单选操作(radio)")]),a("radio",{class:"A"==t.radio?"checked":"",attrs:{checked:"A"==t.radio,value:"A"}})],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义样式")]),a("radio",{staticClass:"radio",class:"B"==t.radio?"checked":"",attrs:{checked:"B"==t.radio,value:"B"}})],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义颜色")]),a("view",[a("radio",{staticClass:"blue radio",class:"C"==t.radio?"checked":"",attrs:{checked:"C"==t.radio,value:"C"}}),a("radio",{staticClass:"red margin-left-sm",class:"D"==t.radio?"checked":"",attrs:{checked:"D"==t.radio,value:"D"}})],1)])]),a("checkbox-group",{staticClass:"block",attrs:{eventid:"0a061714-9",mpcomid:"0a061714-2"},on:{change:t.CheckboxChange}},[a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("复选选操作(checkbox)")]),a("checkbox",{class:t.checkbox[0].checked?"checked":"",attrs:{checked:!!t.checkbox[0].checked,value:"A"}})],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义形状")]),a("checkbox",{staticClass:"round",class:t.checkbox[1].checked?"checked":"",attrs:{checked:!!t.checkbox[1].checked,value:"B"}})],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义颜色")]),a("checkbox",{staticClass:"round blue",class:t.checkbox[2].checked?"checked":"",attrs:{checked:!!t.checkbox[2].checked,value:"C"}})],1)]),a("view",{staticClass:"cu-bar bg-white margin-top"},[a("view",{staticClass:"action"},[t._v("图片上传")]),a("view",{staticClass:"action"},[t._v(t._s(t.imgList.length)+"/4")])]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,function(e,i){return a("view",{key:i,staticClass:"bg-img",attrs:{"data-url":t.imgList[i],eventid:"0a061714-11-"+i},on:{tap:t.ViewImage}},[a("image",{attrs:{src:t.imgList[i],mode:"aspectFill"}}),a("view",{staticClass:"cu-tag bg-red",attrs:{"data-index":i,eventid:"0a061714-10-"+i},on:{tap:function(e){e.stopPropagation(),t.DelImg(e)}}},[a("text",{staticClass:"cuIcon-close"})])])}),t.imgList.length<4?a("view",{staticClass:"solids",attrs:{eventid:"0a061714-12"},on:{tap:t.ChooseImage}},[a("text",{staticClass:"cuIcon-cameraadd"})]):t._e()],2)]),a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("头像")]),a("view",{staticClass:"cu-avatar radius bg-gray"})]),a("view",{staticClass:"cu-form-group margin-top"},[a("textarea",{attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"多行文本输入框",eventid:"0a061714-13"},on:{input:t.textareaAInput}})]),a("view",{staticClass:"cu-form-group align-start"},[a("view",{staticClass:"title"},[t._v("文本框")]),a("textarea",{attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"多行文本输入框",eventid:"0a061714-14"},on:{input:t.textareaBInput}})])],1)],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"65a4":function(t,e,a){"use strict";a.r(e);var i=a("4ec0"),s=a("14ce");for(var c in s)"default"!==c&&function(t){a.d(e,t,function(){return s[t]})}(c);a("8545");var l=a("2877"),r=Object(l["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},8545:function(t,e,a){"use strict";var i=a("b6a9"),s=a.n(i);s.a},"85e6":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{index:-1,picker:["喵喵喵","汪汪汪","哼唧哼唧"],multiArray:[["无脊柱动物","脊柱动物"],["扁性动物","线形动物","环节动物","软体动物","节肢动物"],["猪肉绦虫","吸血虫"]],objectMultiArray:[[{id:0,name:"无脊柱动物"},{id:1,name:"脊柱动物"}],[{id:0,name:"扁性动物"},{id:1,name:"线形动物"},{id:2,name:"环节动物"},{id:3,name:"软体动物"},{id:3,name:"节肢动物"}],[{id:0,name:"猪肉绦虫"},{id:1,name:"吸血虫"}]],multiIndex:[0,0,0],time:"12:01",date:"2018-12-25",region:["广东省","广州市","海珠区"],switchA:!1,switchB:!0,switchC:!1,switchD:!1,radio:"A",checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}],imgList:[],modalName:null,textareaAValue:"",textareaBValue:""}},methods:{PickerChange:function(t){this.index=t.detail.value},MultiChange:function(t){this.multiIndex=t.detail.value},MultiColumnChange:function(t){var e={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(e.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:switch(e.multiIndex[0]){case 0:e.multiArray[1]=["扁性动物","线形动物","环节动物","软体动物","节肢动物"],e.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:e.multiArray[1]=["鱼","两栖动物","爬行动物"],e.multiArray[2]=["鲫鱼","带鱼"];break}e.multiIndex[1]=0,e.multiIndex[2]=0;break;case 1:switch(e.multiIndex[0]){case 0:switch(e.multiIndex[1]){case 0:e.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:e.multiArray[2]=["蛔虫"];break;case 2:e.multiArray[2]=["蚂蚁","蚂蟥"];break;case 3:e.multiArray[2]=["河蚌","蜗牛","蛞蝓"];break;case 4:e.multiArray[2]=["昆虫","甲壳动物","蛛形动物","多足动物"];break}break;case 1:switch(e.multiIndex[1]){case 0:e.multiArray[2]=["鲫鱼","带鱼"];break;case 1:e.multiArray[2]=["青蛙","娃娃鱼"];break;case 2:e.multiArray[2]=["蜥蜴","龟","壁虎"];break}break}e.multiIndex[2]=0;break}this.multiArray=e.multiArray,this.multiIndex=e.multiIndex},TimeChange:function(t){this.time=t.detail.value},DateChange:function(t){this.date=t.detail.value},RegionChange:function(t){this.region=t.detail.value},SwitchA:function(t){this.switchA=t.detail.value},SwitchB:function(t){this.switchB=t.detail.value},SwitchC:function(t){this.switchC=t.detail.value},SwitchD:function(t){this.switchD=t.detail.value},RadioChange:function(t){this.radio=t.detail.value},CheckboxChange:function(t){for(var e=this.checkbox,a=t.detail.value,i=0,s=e.length;i<s;++i){e[i].checked=!1;for(var c=0,l=a.length;c<l;++c)if(e[i].value==a[c]){e[i].checked=!0;break}}},ChooseImage:function(){var e=this;t.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=e.imgList.length?e.imgList=e.imgList.concat(t.tempFilePaths):e.imgList=t.tempFilePaths}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var a=this;t.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(t){t.confirm&&a.imgList.splice(e.currentTarget.dataset.index,1)}})},textareaAInput:function(t){this.textareaAValue=t.detail.value},textareaBInput:function(t){this.textareaBValue=t.detail.value}}};e.default=a}).call(this,a("6e42")["default"])},b6a9:function(t,e,a){},f935:function(t,e,a){"use strict";a("97e8");var i=c(a("b0ce")),s=c(a("65a4"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))}},[["f935","common/runtime","common/vendor"]]]);
});
require('pages/component/form.js');
__wxRoute = 'pages/component/timeline';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/timeline.js';

define('pages/component/timeline.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/timeline"],{3330:function(t,e,s){"use strict";s.r(e);var a=s("3aa8"),i=s("9a00");for(var c in i)"default"!==c&&function(t){s.d(e,t,function(){return i[t]})}(c);var l=s("2877"),n=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=n.exports},"3aa8":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"44613691-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("时间轴")])],1),t._m(0),t._m(1),t._m(2)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"cu-timeline"},[s("view",{staticClass:"cu-time"},[t._v("昨天")]),s("view",{staticClass:"cu-item cur cuIcon-noticefill"},[s("view",{staticClass:"content bg-green shadow-blur"},[s("text",[t._v("22:22")]),t._v("【广州市】快件已到达地球")])]),s("view",{staticClass:"cu-item text-red cuIcon-attentionforbidfill"},[s("view",{staticClass:"content bg-red shadow-blur"},[t._v("这是第一次，我家的铲屎官走了这么久。久到足足有三天！！")])]),s("view",{staticClass:"cu-item text-grey cuIcon-evaluate_fill"},[s("view",{staticClass:"content bg-grey shadow-blur"},[t._v("这是第一次，我家的铲屎官走了这么久。")])]),s("view",{staticClass:"cu-item text-blue"},[s("view",{staticClass:"bg-blue content"},[s("text",[t._v("20:00")]),t._v("【月球】快件已到达月球，准备发往地球")]),s("view",{staticClass:"bg-cyan content"},[s("text",[t._v("10:00")]),t._v("【银河系】快件已到达银河系，准备发往月球")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"cu-timeline"},[s("view",{staticClass:"cu-time"},[t._v("06-17")]),s("view",{staticClass:"cu-item"},[s("view",{staticClass:"content"},[s("text",[t._v("01:30")]),t._v("【喵星】 MX-12138 已揽收，准备发往银河系")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"cu-timeline"},[s("view",{staticClass:"cu-time"},[t._v("06-17")]),s("view",{staticClass:"cu-item"},[s("view",{staticClass:"content"},[s("view",{staticClass:"cu-capsule radius"},[s("view",{staticClass:"cu-tag bg-cyan"},[t._v("上午")]),s("view",{staticClass:"cu-tag line-cyan"},[t._v("10:00")])]),s("view",{staticClass:"margin-top"},[t._v("这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。")])])]),s("view",{staticClass:"cu-item text-blue"},[s("view",{staticClass:"bg-blue shadow-blur content"},[s("view",{staticClass:"cu-list menu-avatar radius"},[s("view",{staticClass:"cu-item"},[s("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),s("view",{staticClass:"content"},[s("view",{staticClass:"text-grey"},[t._v("文晓港")]),s("view",{staticClass:"text-gray text-sm"},[s("text",{staticClass:"cuIcon-infofill text-red"}),t._v("消息未送达")])]),s("view",{staticClass:"action"},[s("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])])]),s("view",{staticClass:"cu-item"},[s("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}},[s("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),s("view",{staticClass:"content"},[s("view",{staticClass:"text-grey"},[t._v("文晓港"),s("view",{staticClass:"cu-tag round orange sm"},[t._v("SVIP")])]),s("view",{staticClass:"text-gray text-sm"},[s("text",{staticClass:"cuIcon-redpacket_fill text-red"}),t._v("收到红包")])]),s("view",{staticClass:"action"},[s("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("text",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])])])])])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},"617a":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}}};e.default=a},"9a00":function(t,e,s){"use strict";s.r(e);var a=s("617a"),i=s.n(a);for(var c in a)"default"!==c&&function(t){s.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},ad8f:function(t,e,s){"use strict";s("97e8");var a=c(s("b0ce")),i=c(s("3330"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))}},[["ad8f","common/runtime","common/vendor"]]]);
});
require('pages/component/timeline.js');
__wxRoute = 'pages/component/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/chat.js';

define('pages/component/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/chat"],{"0d5e":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"0a049da8-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("聊天")])],1),t._m(0),a("view",{staticClass:"cu-bar foot input",style:[{bottom:t.InputBottom+"px"}]},[t._m(1),a("input",{staticClass:"solid-bottom",attrs:{"adjust-position":!1,focus:!1,maxlength:"300","cursor-spacing":"10",eventid:"0a049da8-0"},on:{focus:t.InputFocus,blur:t.InputBlur}}),t._m(2),a("button",{staticClass:"cu-btn bg-green shadow"},[t._v("发送")])],1)],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-chat"},[a("view",{staticClass:"cu-item self"},[a("view",{staticClass:"main"},[a("view",{staticClass:"content bg-green shadow"},[a("text",[t._v("喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！")])])]),a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("view",{staticClass:"date"},[t._v("2018年3月23日 13:23")])]),a("view",{staticClass:"cu-info round"},[t._v("对方撤回一条消息!")]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg)"}}),a("view",{staticClass:"main"},[a("view",{staticClass:"content shadow"},[a("text",[t._v("喵喵喵！喵喵喵！")])])]),a("view",{staticClass:"date "},[t._v("13:23")])]),a("view",{staticClass:"cu-info"},[a("text",{staticClass:"cuIcon-roundclosefill text-red "}),t._v("对方拒绝了你的消息")]),a("view",{staticClass:"cu-info"},[t._v("对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。"),a("text",{staticClass:"text-blue"},[t._v("发送好友验证")])]),a("view",{staticClass:"cu-item self"},[a("view",{staticClass:"main"},[a("image",{staticClass:"radius",attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",mode:"widthFix"}})]),a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("view",{staticClass:"date"},[t._v("13:23")])]),a("view",{staticClass:"cu-item self"},[a("view",{staticClass:"main"},[a("view",{staticClass:"action text-bold text-grey"},[t._v('3"')]),a("view",{staticClass:"content shadow"},[a("text",{staticClass:"cuIcon-sound text-xxl padding-right-xl"})])]),a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("view",{staticClass:"date"},[t._v("13:23")])]),a("view",{staticClass:"cu-item self"},[a("view",{staticClass:"main"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-locationfill text-orange text-xxl"})]),a("view",{staticClass:"content shadow"},[t._v("喵星球，喵喵市")])]),a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("view",{staticClass:"date"},[t._v("13:23")])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg)"}}),a("view",{staticClass:"main"},[a("view",{staticClass:"content shadow"},[t._v("@#$^&**")]),a("view",{staticClass:"action text-grey"},[a("text",{staticClass:"cuIcon-warnfill text-red text-xxl"}),a("text",{staticClass:"text-sm margin-left-sm"},[t._v("翻译错误")])])]),a("view",{staticClass:"date"},[t._v("13:23")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-sound text-grey"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-emojifill text-grey"})])}];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})},"3f59":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={data:function(){return{InputBottom:0}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}};s.default=i},"4fcf":function(t,s,a){},"5ca9":function(t,s,a){"use strict";a.r(s);var i=a("0d5e"),e=a("a9bd");for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);a("6ade");var n=a("2877"),l=Object(n["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=l.exports},"6ade":function(t,s,a){"use strict";var i=a("4fcf"),e=a.n(i);e.a},a9bd:function(t,s,a){"use strict";a.r(s);var i=a("3f59"),e=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);s["default"]=e.a},da87:function(t,s,a){"use strict";a("97e8");var i=c(a("b0ce")),e=c(a("5ca9"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))}},[["da87","common/runtime","common/vendor"]]]);
});
require('pages/component/chat.js');
__wxRoute = 'pages/component/swiper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/swiper.js';

define('pages/component/swiper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/swiper"],{"0d8f":function(t,e,i){"use strict";i("97e8");var s=a(i("b0ce")),r=a(i("2148"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(r.default))},2148:function(t,e,i){"use strict";i.r(e);var s=i("a81b"),r=i("77de");for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);i("7f34");var o=i("2877"),n=Object(o["a"])(r["default"],s["a"],s["b"],!1,null,null,null);e["default"]=n.exports},"66eb":function(t,e,i){},"77de":function(t,e,i){"use strict";i.r(e);var s=i("bdd2"),r=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);e["default"]=r.a},"7f34":function(t,e,i){"use strict";var s=i("66eb"),r=i.n(s);r.a},a81b:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"910f4270-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("轮播图")])],1),i("view",{staticClass:"cu-bar bg-white"},[t._m(0),i("view",{staticClass:"action"},[i("switch",{class:t.dotStyle?"checked":"",attrs:{checked:!!t.dotStyle,eventid:"910f4270-0"},on:{change:t.DotStyle}})])]),i("swiper",{staticClass:"screen-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,function(e,s){return i("swiper-item",{key:s,attrs:{mpcomid:"910f4270-1-"+s}},["image"==e.type?i("image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("video",{attrs:{src:e.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()])})),t._m(1),i("swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff",eventid:"910f4270-1"},on:{change:t.cardSwiper}},t._l(t.swiperList,function(e,s){return i("swiper-item",{key:s,class:t.cardCur==s?"cur":"",attrs:{mpcomid:"910f4270-2-"+s}},[i("view",{staticClass:"swiper-item"},["image"==e.type?i("image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("video",{attrs:{src:e.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()])])})),t._m(2),i("view",{staticClass:"tower-swiper",attrs:{eventid:"910f4270-2"},on:{touchmove:t.TowerMove,touchstart:t.TowerStart,touchend:t.TowerEnd}},t._l(t.swiperList,function(e,s){return i("view",{key:s,staticClass:"tower-item",class:1==e.zIndex?"none":"",style:[{"--index":e.zIndex,"--left":e.mLeft}],attrs:{"data-direction":t.direction}},[i("view",{staticClass:"swiper-item"},["image"==e.type?i("image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("video",{attrs:{src:e.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()])])}))],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-pink"}),t._v("全屏限高轮播")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cu-bar bg-white margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-pink"}),t._v("卡片式轮播")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cu-bar bg-white margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-pink"}),t._v("堆叠式轮播")])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return r})},bdd2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{cardCur:0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],dotStyle:!1,towerStart:0,direction:""}},onLoad:function(){this.TowerSwiper("swiperList")},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},TowerSwiper:function(t){for(var e=this[t],i=0;i<e.length;i++)e[i].zIndex=parseInt(e.length/2)+1-Math.abs(i-parseInt(e.length/2)),e[i].mLeft=i-parseInt(e.length/2);this.swiperList=e},TowerStart:function(t){this.towerStart=t.touches[0].pageX},TowerMove:function(t){this.direction=t.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(t){var e=this.direction,i=this.swiperList;if("right"==e){for(var s=i[0].mLeft,r=i[0].zIndex,a=1;a<this.swiperList.length;a++)this.swiperList[a-1].mLeft=this.swiperList[a].mLeft,this.swiperList[a-1].zIndex=this.swiperList[a].zIndex;this.swiperList[i.length-1].mLeft=s,this.swiperList[i.length-1].zIndex=r}else{for(var o=i[i.length-1].mLeft,n=i[i.length-1].zIndex,c=this.swiperList.length-1;c>0;c--)this.swiperList[c].mLeft=this.swiperList[c-1].mLeft,this.swiperList[c].zIndex=this.swiperList[c-1].zIndex;this.swiperList[0].mLeft=o,this.swiperList[0].zIndex=n}this.direction="",this.swiperList=this.swiperList}}};e.default=s}},[["0d8f","common/runtime","common/vendor"]]]);
});
require('pages/component/swiper.js');
__wxRoute = 'pages/component/modal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/modal.js';

define('pages/component/modal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/modal"],{"24a6":function(t,a,e){"use strict";e.r(a);var s=e("ed97"),i=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(a,t,function(){return s[t]})}(o);a["default"]=i.a},"4acc":function(t,a,e){"use strict";e.r(a);var s=e("d50d"),i=e("24a6");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("6106");var c=e("2877"),l=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=l.exports},6106:function(t,a,e){"use strict";var s=e("d30b"),i=e.n(s);i.a},d30b:function(t,a,e){},d50d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"371f3a5d-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("模态窗口")])],1),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(0),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"Modal",eventid:"371f3a5d-0"},on:{tap:t.showModal}},[t._v("Modal")])],1)]),e("view",{staticClass:"cu-modal",class:"Modal"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"cu-bar bg-white justify-end"},[e("view",{staticClass:"content"},[t._v("Modal标题")]),e("view",{staticClass:"action",attrs:{eventid:"371f3a5d-1"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-close text-red"})])]),e("view",{staticClass:"padding-xl"},[t._v("Modal 内容。")])])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(1),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"bottomModal",eventid:"371f3a5d-2"},on:{tap:t.showModal}},[t._v("Bottom")])],1)]),e("view",{staticClass:"cu-modal bottom-modal",class:"bottomModal"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action text-green"},[t._v("确定")]),e("view",{staticClass:"action text-blue",attrs:{eventid:"371f3a5d-3"},on:{tap:t.hideModal}},[t._v("取消")])]),e("view",{staticClass:"padding-xl"},[t._v("Modal 内容。")])])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(2),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"DialogModal1",eventid:"371f3a5d-4"},on:{tap:t.showModal}},[t._v("Dialog")]),e("button",{staticClass:"cu-btn bg-blue shadow margin-left",attrs:{"data-target":"DialogModal2",eventid:"371f3a5d-5"},on:{tap:t.showModal}},[t._v("Dialog")])],1)]),e("view",{staticClass:"cu-modal",class:"DialogModal1"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"cu-bar bg-white justify-end"},[e("view",{staticClass:"content"},[t._v("Modal标题")]),e("view",{staticClass:"action",attrs:{eventid:"371f3a5d-6"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-close text-red"})])]),e("view",{staticClass:"padding-xl"},[t._v("Modal 内容。")]),e("view",{staticClass:"cu-bar bg-white justify-end"},[e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn line-green text-green",attrs:{eventid:"371f3a5d-7"},on:{tap:t.hideModal}},[t._v("取消")]),e("button",{staticClass:"cu-btn bg-green margin-left",attrs:{eventid:"371f3a5d-8"},on:{tap:t.hideModal}},[t._v("确定")])],1)])])]),e("view",{staticClass:"cu-modal",class:"DialogModal2"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"cu-bar bg-white justify-end"},[e("view",{staticClass:"content"},[t._v("Modal标题")]),e("view",{staticClass:"action",attrs:{eventid:"371f3a5d-9"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-close text-red"})])]),e("view",{staticClass:"padding-xl"},[t._v("Modal 内容。")]),e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action margin-0 flex-sub text-green ",attrs:{eventid:"371f3a5d-10"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-moneybag"}),t._v("微信支付")]),e("view",{staticClass:"action margin-0 flex-sub text-green solid-left",attrs:{eventid:"371f3a5d-11"},on:{tap:t.hideModal}},[t._v("取消")]),e("view",{staticClass:"action margin-0 flex-sub  solid-left",attrs:{eventid:"371f3a5d-12"},on:{tap:t.hideModal}},[t._v("确定")])])])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(3),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"Image",eventid:"371f3a5d-13"},on:{tap:t.showModal}},[t._v("Image")])],1)]),e("view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"bg-img",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg')",height:"200px"}},[e("view",{staticClass:"cu-bar justify-end text-white"},[e("view",{staticClass:"action",attrs:{eventid:"371f3a5d-14"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-close "})])])]),e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action margin-0 flex-sub  solid-left",attrs:{eventid:"371f3a5d-15"},on:{tap:t.hideModal}},[t._v("我知道了")])])])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(4),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"RadioModal",eventid:"371f3a5d-16"},on:{tap:t.showModal}},[t._v("Radio")])],1)]),e("view",{staticClass:"cu-modal",class:"RadioModal"==t.modalName?"show":"",attrs:{eventid:"371f3a5d-19"},on:{tap:t.hideModal}},[e("view",{staticClass:"cu-dialog",attrs:{eventid:"371f3a5d-18"},on:{tap:function(t){t.stopPropagation()}}},[e("radio-group",{staticClass:"block",attrs:{eventid:"371f3a5d-17",mpcomid:"371f3a5d-1"},on:{change:t.RadioChange}},[e("view",{staticClass:"cu-list menu text-left"},t._l(5,function(a,s){return e("view",{key:s,staticClass:"cu-item"},[e("label",{staticClass:"flex justify-between align-center flex-sub"},[e("view",{staticClass:"flex-sub"},[t._v("Item "+t._s(s+1))]),e("radio",{staticClass:"round",class:t.radio=="radio"+s?"checked":"",attrs:{checked:t.radio=="radio"+s,value:"radio"+s}})],1)],1)}))])],1)]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(5),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"ChooseModal",eventid:"371f3a5d-20"},on:{tap:t.showModal}},[t._v("Choose")])],1)]),e("view",{staticClass:"cu-modal bottom-modal",class:"ChooseModal"==t.modalName?"show":"",attrs:{eventid:"371f3a5d-25"},on:{tap:t.hideModal}},[e("view",{staticClass:"cu-dialog",attrs:{eventid:"371f3a5d-24"},on:{tap:function(t){t.stopPropagation()}}},[e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action text-blue",attrs:{eventid:"371f3a5d-21"},on:{tap:t.hideModal}},[t._v("取消")]),e("view",{staticClass:"action text-green",attrs:{eventid:"371f3a5d-22"},on:{tap:t.hideModal}},[t._v("确定")])]),e("view",{staticClass:"grid col-3 padding-sm"},t._l(t.checkbox,function(a,s){return e("view",{key:s,staticClass:"padding-xs"},[e("button",{staticClass:"cu-btn orange lg block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.value,eventid:"371f3a5d-23-"+s},on:{tap:t.ChooseCheckbox}},[t._v(t._s(a.name)),a.hot?e("view",{staticClass:"cu-tag sm round",class:a.checked?"bg-white text-orange":"bg-orange"},[t._v("HOT")]):t._e()])],1)}))])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(6),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"DrawerModalL",eventid:"371f3a5d-26"},on:{tap:t.showModal}},[t._v("Left")]),e("button",{staticClass:"cu-btn bg-blue shadow margin-left",attrs:{"data-target":"DrawerModalR",eventid:"371f3a5d-27"},on:{tap:t.showModal}},[t._v("Right")])],1)]),e("view",{staticClass:"cu-modal drawer-modal justify-start",class:"DrawerModalL"==t.modalName?"show":"",attrs:{eventid:"371f3a5d-29"},on:{tap:t.hideModal}},[e("view",{staticClass:"cu-dialog basis-lg",style:[{top:t.CustomBar+"px",height:"calc(100vh - "+t.CustomBar+"px)"}],attrs:{eventid:"371f3a5d-28"},on:{tap:function(t){t.stopPropagation()}}},[e("view",{staticClass:"cu-list menu text-left"},t._l(5,function(a,s){return e("view",{key:s,staticClass:"cu-item arrow"},[e("view",{staticClass:"content"},[e("view",[t._v("Item "+t._s(s+1))])])])}))])]),e("view",{staticClass:"cu-modal drawer-modal justify-end",class:"DrawerModalR"==t.modalName?"show":"",attrs:{eventid:"371f3a5d-31"},on:{tap:t.hideModal}},[e("view",{staticClass:"cu-dialog basis-lg",style:[{top:t.CustomBar+"px",height:"calc(100vh - "+t.CustomBar+"px)"}],attrs:{eventid:"371f3a5d-30"},on:{tap:function(t){t.stopPropagation()}}},[e("view",{staticClass:"cu-list menu text-left"},t._l(5,function(a,s){return e("view",{key:s,staticClass:"cu-item arrow"},[e("view",{staticClass:"content"},[e("view",[t._v("Item "+t._s(s+1))])])])}))])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("普通窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("底部窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("对话窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("图片窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("单选窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("多选窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("侧边抽屉")])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},ed97:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{CustomBar:this.CustomBar,modalName:null,radio:"radio1",checkbox:[{value:0,name:"10元",checked:!1,hot:!1},{value:1,name:"20元",checked:!0,hot:!1},{value:2,name:"30元",checked:!0,hot:!0},{value:3,name:"60元",checked:!1,hot:!0},{value:4,name:"80元",checked:!1,hot:!1},{value:5,name:"100元",checked:!1,hot:!1}]}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){this.radio=t.detail.value},ChooseCheckbox:function(t){for(var a=this.checkbox,e=t.currentTarget.dataset.value,s=0,i=a.length;s<i;++s)if(a[s].value==e){a[s].checked=!a[s].checked;break}}}};a.default=s},fcd8:function(t,a,e){"use strict";e("97e8");var s=o(e("b0ce")),i=o(e("4acc"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))}},[["fcd8","common/runtime","common/vendor"]]]);
});
require('pages/component/modal.js');
__wxRoute = 'pages/component/steps';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/steps.js';

define('pages/component/steps.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/steps"],{"1f77":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"377612d7-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("步骤条")])],1),e("view",{staticClass:"cu-bar bg-white solid-bottom"},[t._m(0),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"377612d7-0"},on:{tap:t.BasicsSteps}},[t._v("下一步")])],1)]),e("view",{staticClass:"bg-white padding"},[e("view",{staticClass:"cu-steps"},t._l(t.basicsList,function(s,i){return e("view",{key:i,staticClass:"cu-item",class:i>t.basics?"":"text-red"},[e("text",{class:"cuIcon-"+s.icon}),t._v(t._s(s.name))])}))]),e("view",{staticClass:"bg-white padding margin-top-xs"},[e("view",{staticClass:"cu-steps"},t._l(t.basicsList,function(s,i){return e("view",{key:i,staticClass:"cu-item",class:i>t.basics?"":"text-orange"},[e("text",{class:i>t.basics?"cuIcon-title":"cuIcon-"+s.icon}),t._v(t._s(s.name))])}))]),e("view",{staticClass:"bg-white padding  margin-top-xs"},[e("view",{staticClass:"cu-steps steps-arrow"},t._l(t.basicsList,function(s,i){return e("view",{key:i,staticClass:"cu-item",class:i>t.basics?"":"text-blue"},[e("text",{class:"cuIcon-"+s.icon}),t._v(t._s(s.name))])}))]),e("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t._m(1),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"377612d7-1"},on:{tap:t.NumSteps}},[t._v("下一步")])],1)]),e("view",{staticClass:"bg-white padding"},[e("view",{staticClass:"cu-steps"},t._l(t.numList,function(s,i){return e("view",{key:i,staticClass:"cu-item",class:i>t.num?"":"text-blue"},[e("text",{staticClass:"num",class:2==i?"err":"",attrs:{"data-index":i+1}}),t._v(t._s(s.name))])}))]),e("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t._m(2),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"377612d7-2"},on:{tap:t.ScrollSteps}},[t._v("下一步")])],1)]),e("scroll-view",{staticClass:"bg-white padding response cu-steps steps-bottom",attrs:{"scroll-x":"","scroll-into-view":"scroll-"+t.scroll,"scroll-with-animation":""}},t._l(10,function(s,i){return e("view",{key:i,staticClass:"cu-item padding-lr-xl",class:i>t.scroll?"":"text-blue",attrs:{id:"scroll-"+i}},[t._v("Level "+t._s(i+1)),e("text",{staticClass:"num",attrs:{"data-index":i+1}})])}))],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("基本用法")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("数字完成")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("多级显示")])}];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return a})},"405f":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={data:function(){return{basicsList:[{icon:"usefullfill",name:"开始"},{icon:"radioboxfill",name:"等待"},{icon:"roundclosefill",name:"错误"},{icon:"roundcheckfill",name:"完成"}],basics:0,numList:[{name:"开始"},{name:"等待"},{name:"错误"},{name:"完成"}],num:0,scroll:0}},methods:{BasicsSteps:function(){this.basics=this.basics==this.basicsList.length-1?0:this.basics+1},NumSteps:function(){this.num=this.num==this.numList.length-1?0:this.num+1},ScrollSteps:function(){this.scroll=9==this.scroll?0:this.scroll+1}}};s.default=i},"476c":function(t,s,e){"use strict";e.r(s);var i=e("1f77"),a=e("5c6c");for(var c in a)"default"!==c&&function(t){e.d(s,t,function(){return a[t]})}(c);var n=e("2877"),l=Object(n["a"])(a["default"],i["a"],i["b"],!1,null,null,null);s["default"]=l.exports},"5c6c":function(t,s,e){"use strict";e.r(s);var i=e("405f"),a=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(s,t,function(){return i[t]})}(c);s["default"]=a.a},"8ef7":function(t,s,e){"use strict";e("97e8");var i=c(e("b0ce")),a=c(e("476c"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))}},[["8ef7","common/runtime","common/vendor"]]]);
});
require('pages/component/steps.js');
__wxRoute = 'pages/plugin/indexes';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/indexes.js';

define('pages/plugin/indexes.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/indexes"],{"34b7":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("cu-custom",{attrs:{bgImage:"https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",isBack:!0,mpcomid:"053952a2-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("索引")])],1),i("view",{staticClass:"cu-bar bg-white search fixed",style:[{top:t.CustomBar+"px"}]},[t._m(0),i("view",{staticClass:"action"},[i("button",{staticClass:"cu-btn bg-gradual-green shadow-blur round"},[t._v("搜索")])],1)]),i("scroll-view",{staticClass:"indexes",style:[{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}],attrs:{"scroll-y":"","scroll-into-view":"indexes-"+t.listCurID,"scroll-with-animation":!0,"enable-back-to-top":!0}},t._l(t.list,function(e,s){return i("block",{key:s},[i("view",{class:"indexItem-"+e.name,attrs:{id:"indexes-"+e.name,"data-index":e.name}},[i("view",{staticClass:"padding"},[t._v(t._s(e.name))]),i("view",{staticClass:"cu-list menu-avatar no-padding"},t._l(2,function(s,a){return i("view",{key:a,staticClass:"cu-item"},[i("view",{staticClass:"cu-avatar round lg"},[t._v(t._s(e.name))]),i("view",{staticClass:"content"},[i("view",{staticClass:"text-grey"},[t._v(t._s(e.name)),i("text",{staticClass:"text-abc"},[t._v(t._s(t.list[a].name))]),t._v("君")]),i("view",{staticClass:"text-gray text-sm"},[t._v("有"+t._s(a+2)+"个主子需要伺候")])])])}))])])})),i("view",{staticClass:"indexBar",style:[{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}]},[i("view",{staticClass:"indexBar-box",attrs:{eventid:"053952a2-1"},on:{touchstart:t.tStart,touchend:t.tEnd,touchmove:function(e){e.stopPropagation(),t.tMove(e)}}},t._l(t.list,function(e,s){return i("view",{key:s,staticClass:"indexBar-item",attrs:{id:s,eventid:"053952a2-0-"+s},on:{touchstart:t.getCur,touchend:t.setCur}},[t._v(t._s(e.name))])}))]),i("view",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],staticClass:"indexToast"},[t._v(t._s(t.listCur))])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"search-form round"},[i("text",{staticClass:"cuIcon-search"}),i("input",{attrs:{type:"text",placeholder:"输入搜索的关键词","confirm-type":"search"}})])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},4669:function(t,e,i){"use strict";i.r(e);var s=i("da80"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"6ce6":function(t,e,i){},8509:function(t,e,i){"use strict";i("97e8");var s=n(i("b0ce")),a=n(i("94f8"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},"94f8":function(t,e,i){"use strict";i.r(e);var s=i("34b7"),a=i("4669");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("a9c2");var r=i("2877"),c=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},a9c2:function(t,e,i){"use strict";var s=i("6ce6"),a=i.n(s);a.a},da80:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,hidden:!0,listCurID:"",list:[],listCur:""}},onLoad:function(){for(var t=[{}],e=0;e<26;e++)t[e]={},t[e].name=String.fromCharCode(65+e);this.list=t,this.listCur=t[0]},onReady:function(){var e=this;t.createSelectorQuery().select(".indexBar-box").boundingClientRect(function(t){e.boxTop=t.top}).exec(),t.createSelectorQuery().select(".indexes").boundingClientRect(function(t){e.barTop=t.top}).exec()},methods:{getCur:function(t){this.hidden=!1,this.listCur=this.list[t.target.id].name},setCur:function(t){this.hidden=!0,this.listCur=this.listCur},tMove:function(t){var e=t.touches[0].clientY,i=this.boxTop,s=this;if(e>i){var a=parseInt((e-i)/20);this.listCur=s.list[a].name}},tStart:function(){this.hidden=!1},tEnd:function(){this.hidden=!0,this.listCurID=this.listCur},indexSelect:function(t){for(var e=this,i=this.barHeight,s=this.list,a=Math.ceil(s.length*t.detail.y/i),n=0;n<s.length;n++)if(a<n+1)return e.listCur=s[n].name,e.movableY=20*n,!1}}};e.default=i}).call(this,i("6e42")["default"])}},[["8509","common/runtime","common/vendor"]]]);
});
require('pages/plugin/indexes.js');
__wxRoute = 'pages/plugin/animation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/animation.js';

define('pages/plugin/animation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/animation"],{"18f2":function(t,a,e){"use strict";e("97e8");var s=n(e("b0ce")),i=n(e("322f"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},1959:function(t,a,e){"use strict";var s=e("a3a8"),i=e.n(s);i.a},"322f":function(t,a,e){"use strict";e.r(a);var s=e("964e"),i=e("c239");for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);e("1959");var l=e("2877"),c=Object(l["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=c.exports},"964e":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",[e("cu-custom",{attrs:{bgImage:"https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",isBack:!0,mpcomid:"0ef444a6-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("微动画")])],1),t._m(0),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"flex flex-wrap justify-around"},t._l(t.list,function(a,s){return e("button",{key:s,staticClass:"cu-btn margin-sm basis-sm shadow",class:["bg-"+a.color,t.animation==a.name?"animation-"+a.name:""],attrs:{"data-class":a.name,eventid:"0ef444a6-0-"+s},on:{tap:t.Toggle}},[t._v(t._s(a.name))])}))]),t._m(1),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"flex flex-wrap justify-around"},t._l(t.list,function(a,s){return e("button",{key:s,staticClass:"cu-btn animation-reverse margin-sm basis-sm shadow",class:["bg-"+a.color,t.animation==a.name+"s"?"animation-"+a.name:""],attrs:{"data-class":a.name+"s",eventid:"0ef444a6-1-"+s},on:{tap:t.Toggle}},[t._v(t._s(a.name))])}))]),e("view",{staticClass:"cu-bar bg-white"},[t._m(2),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-cyan shadow",attrs:{eventid:"0ef444a6-2"},on:{tap:t.ToggleDelay}},[t._v("开始执行")])],1)]),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"flex flex-wrap justify-around"},t._l(t.list,function(a,s){return e("button",{key:s,staticClass:"margin-sm basis-sm shadow cu-btn",class:["bg-"+a.color,t.toggleDelay?"animation-slide-bottom":""],style:[{animationDelay:.1*(s+1)+"s"}]},[t._v("0."+t._s(s+1)+"s")])}))]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("默认效果")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("反向动画")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("延迟执行")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("Gif动画")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"margin radius bg-gradual-green shadow-blur"},[e("image",{staticClass:"gif-black response",staticStyle:{height:"100rpx"},attrs:{src:"https://image.weilanwl.com/gif/wave.gif",mode:"scaleToFill"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"margin flex"},[e("view",{staticClass:"bg-black flex-sub margin-right radius shadow-lg"},[e("image",{staticClass:"gif-black response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/loading-black.gif",mode:"aspectFit"}})]),e("view",{staticClass:"bg-white flex-sub radius shadow-lg"},[e("image",{staticClass:"gif-white response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/loading-white.gif",mode:"aspectFit"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"margin flex"},[e("view",{staticClass:"bg-gradual-blue flex-sub margin-right radius shadow-lg"},[e("image",{staticClass:"gif-black response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/rhomb-black.gif",mode:"aspectFit"}})]),e("view",{staticClass:"bg-white flex-sub radius shadow-lg"},[e("image",{staticClass:"gif-white response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/rhomb-white.gif",mode:"aspectFit"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"margin flex"},[e("view",{staticClass:"bg-white flex-sub margin-right radius shadow-lg"},[e("image",{staticClass:"gif-white response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/loading-1.gif",mode:"aspectFit"}})]),e("view",{staticClass:"bg-black flex-sub radius shadow-lg"},[e("image",{staticClass:"gif-black response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/loading-2.gif",mode:"aspectFit"}})])])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},a3a8:function(t,a,e){},be43:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(t){var a=this,e=t.currentTarget.dataset.class;this.animation=e,setTimeout(function(){a.animation=""},1e3)},ToggleDelay:function(){var t=this;this.toggleDelay=!0,setTimeout(function(){t.toggleDelay=!1},1e3)}}};a.default=s},c239:function(t,a,e){"use strict";e.r(a);var s=e("be43"),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);a["default"]=i.a}},[["18f2","common/runtime","common/vendor"]]]);
});
require('pages/plugin/animation.js');
__wxRoute = 'pages/plugin/drawer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/drawer.js';

define('pages/plugin/drawer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/drawer"],{"4f8b":function(t,a,e){"use strict";e.r(a);var s=e("95ac"),n=e.n(s);for(var l in s)"default"!==l&&function(t){e.d(a,t,function(){return s[t]})}(l);a["default"]=n.a},"79c8":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"bg-gradual-blue"},[e("scroll-view",{staticClass:"DrawerPage",class:"viewModal"==t.modalName?"show":"",attrs:{"scroll-y":""}},[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"7bfb330f-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("全屏抽屉")])],1),e("view",{staticClass:"padding margin text-center"},[e("view",{staticClass:"cu-btn bg-green lg block shadow radius margin-xl",attrs:{"data-target":"viewModal",eventid:"7bfb330f-0"},on:{tap:t.showModal}},[t._v("打开抽屉")])]),e("view",{staticClass:"cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg"},t._l(20,function(a,s){return e("view",{key:s,staticClass:"cu-item arrow"},[e("view",{staticClass:"content"},[e("text",{staticClass:"cuIcon-github text-grey"}),e("text",{staticClass:"text-grey"},[t._v(t._s(s+1))])])])})),e("view",{staticClass:"padding margin text-center"},[e("view",{staticClass:"cu-btn bg-green lg block shadow radius margin-xl",attrs:{"data-target":"viewModal",eventid:"7bfb330f-1"},on:{tap:t.showModal}},[t._v("打开抽屉")])])],1),e("view",{staticClass:"DrawerClose",class:"viewModal"==t.modalName?"show":"",attrs:{eventid:"7bfb330f-2"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-pullright"})]),e("scroll-view",{staticClass:"DrawerWindow",class:"viewModal"==t.modalName?"show":"",attrs:{"scroll-y":""}},[e("view",{staticClass:"cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg"},t._l(20,function(a,s){return e("view",{key:s,staticClass:"cu-item arrow"},[e("view",{staticClass:"content"},[e("text",{staticClass:"cuIcon-github text-grey"}),e("text",{staticClass:"text-grey"},[t._v(t._s(s+1))])])])}))])],1)},n=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return n})},"8c14":function(t,a,e){"use strict";e("97e8");var s=l(e("b0ce")),n=l(e("a589"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},"95ac":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{modalName:null}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=s},"9dd8":function(t,a,e){},a589:function(t,a,e){"use strict";e.r(a);var s=e("79c8"),n=e("4f8b");for(var l in n)"default"!==l&&function(t){e.d(a,t,function(){return n[t]})}(l);e("ff3b");var i=e("2877"),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,null,null);a["default"]=r.exports},ff3b:function(t,a,e){"use strict";var s=e("9dd8"),n=e.n(s);n.a}},[["8c14","common/runtime","common/vendor"]]]);
});
require('pages/plugin/drawer.js');
__wxRoute = 'pages/plugin/verticalnav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/verticalnav.js';

define('pages/plugin/verticalnav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/verticalnav"],{"127f":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!0,bgColor:"bg-shadeTop text-white",mpcomid:"5a70ee8f-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("垂直导航")])],1)],1),a("swiper",{staticClass:"screen-swiper round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(4,function(t,s){return a("swiper-item",{key:s,attrs:{mpcomid:"5a70ee8f-1-"+s}},[a("image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big3900"+s+".jpg",mode:"aspectFill"}})])})),a("view",{staticClass:"VerticalBox"},[a("scroll-view",{staticClass:"VerticalNav nav",staticStyle:{height:"calc(100vh - 375rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-top":t.verticalNavTop}},t._l(t.list,function(s,i){return a("view",{key:i,staticClass:"cu-item",class:i==t.tabCur?"text-green cur":"",attrs:{"data-id":i,eventid:"5a70ee8f-0-"+i},on:{tap:t.TabSelect}},[t._v("Tab-"+t._s(s.name))])})),a("scroll-view",{staticClass:"VerticalMain",staticStyle:{height:"calc(100vh - 375rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-into-view":"main-"+t.mainCur,eventid:"5a70ee8f-1"},on:{scroll:t.VerticalMain}},t._l(t.list,function(s,i){return a("view",{key:i,staticClass:"padding-top padding-lr",attrs:{id:"main-"+i}},[a("view",{staticClass:"cu-bar solid-bottom bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),t._v("Tab-"+t._s(s.name))])]),a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("凯尔")]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[a("text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"}},[a("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[a("text",{staticClass:"text-cut"},[t._v("瓦洛兰之盾-塔里克")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("战士")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])]),a("view",{staticClass:"cu-item "},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-pink"},[a("text",{staticClass:"text-cut"},[t._v("莫甘娜")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item grayscale"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"}}),a("view",{staticClass:"content"},[a("view",[a("text",{staticClass:"text-cut"},[t._v("伊泽瑞尔")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("断开连接...")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("等我回来一个打十个")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item cur"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"}},[a("view",{staticClass:"cu-tag badge"})]),a("view",{staticClass:"content"},[a("view",[a("text",{staticClass:"text-cut"},[t._v("瓦罗兰大陆-睡衣守护者-新手保护营")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("6人")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("伊泽瑞尔："),a("text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("传送中...")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])])])])}))],1)],1)},e=[];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})},"1b55":function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){t.showLoading({title:"加载中...",mask:!0});for(var s=[{}],a=0;a<26;a++)s[a]={},s[a].name=String.fromCharCode(65+a),s[a].id=a;this.list=s,this.listCur=s[0]},onReady:function(){t.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(s){var a=this,i=0;if(this.load){for(var e=function(s){var e=t.createSelectorQuery().select("#main-"+a.list[s].id);e.fields({size:!0},function(t){a.list[s].top=i,i+=t.height,a.list[s].bottom=i}).exec()},c=0;c<this.list.length;c++)e(c);this.load=!1}var l=s.detail.scrollTop+10;for(c=0;c<this.list.length;c++)if(l>this.list[c].top&&l<this.list[c].bottom)return this.verticalNavTop=50*(this.list[c].id-1),this.tabCur=this.list[c].id,console.log(l),!1}}};s.default=a}).call(this,a("6e42")["default"])},"5ee0":function(t,s,a){"use strict";a.r(s);var i=a("127f"),e=a("c51f");for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);a("cd3a");var l=a("2877"),r=Object(l["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=r.exports},c51f:function(t,s,a){"use strict";a.r(s);var i=a("1b55"),e=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);s["default"]=e.a},cd3a:function(t,s,a){"use strict";var i=a("deb8"),e=a.n(i);e.a},d68c:function(t,s,a){"use strict";a("97e8");var i=c(a("b0ce")),e=c(a("5ee0"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))},deb8:function(t,s,a){}},[["d68c","common/runtime","common/vendor"]]]);
});
require('pages/plugin/verticalnav.js');


