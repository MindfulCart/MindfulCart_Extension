// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4tq9d":[function(require,module,exports) {
var m = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var A = new Set(m), _ = (e)=>A.has(e), W = m.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, s])=>(e[t] = s, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || y().VERBOSE === "true", I = g();
var f = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var v = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), b = (...e)=>f("\uD83D\uDD35 INFO", ...e), h = (...e)=>f("\uD83D\uDFE0 WARN", ...e), M = 0, c = (...e)=>g() && f(`\u{1F7E1} ${M++}`, ...e);
var o = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/home/revan/code/git-projects/MindfulCart_Extension/node_modules/.pnpm/@plasmohq+parcel-transformer-manifest@0.14.3/node_modules/@plasmohq/parcel-transformer-manifest/runtime/plasmo-default-background.ts",
    "bundleId": "e5731e6b8345c193",
    "envHash": "210281caf8d4160d",
    "verbose": "false",
    "secure": false,
    "serverPort": 43589
};
module.bundle.HMR_BUNDLE_ID = o.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: o.verbose
    }
};
var T = module.bundle.Module;
function D(e) {
    T.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = D;
module.bundle.hotData = {};
var l = globalThis.chrome || globalThis.browser || null;
function u() {
    return !o.host || o.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : o.host;
}
function p() {
    return o.port || location.port;
}
var B = `${o.secure ? "https" : "http"}://${u()}:${p()}/`;
async function x(e = 1470) {
    for(;;)try {
        await fetch(B);
        break;
    } catch  {
        await new Promise((s)=>setTimeout(s, e));
    }
}
if (l.runtime.getManifest().manifest_version === 3) {
    let e = l.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let s = t.request.url;
        if (s.startsWith(e)) {
            let n = new URL(decodeURIComponent(s.slice(e.length)));
            n.hostname === o.host && n.port === `${o.port}` ? (n.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(n).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function R(e, t) {
    let { modules: s  } = e;
    return s ? !!s[t] : !1;
}
function k(e = p()) {
    let t = u();
    return `${o.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function S(e) {
    typeof e.message == "string" && v("[plasmo/parcel-runtime]: " + e.message);
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(k(Number(p()) + 1));
    return t.addEventListener("message", async function(s) {
        if (JSON.parse(s.data).type === "build_ready") {
            await e();
            return;
        }
    }), t.addEventListener("error", S), t;
}
function E(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(k());
    return t.addEventListener("message", async function(s) {
        let n = JSON.parse(s.data);
        if (n.type === "update" && await e(n.assets), n.type === "error") for (let r of n.diagnostics.ansi){
            let i = r.codeframe || r.stack;
            h("[plasmo/parcel-runtime]: " + r.message + `
` + i + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", S), t.addEventListener("open", ()=>{
        b(`[plasmo/parcel-runtime]: Connected to HMR server for ${o.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        h(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${o.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    hmrUpdated: !1,
    csCodeChanged: !1,
    ports: new Set
};
async function d(e = !1) {
    if (e || a.buildReady && (a.hmrUpdated || a.csCodeChanged)) {
        c("BGSW Runtime - reloading");
        let t = await chrome.tabs.query({
            active: !0
        });
        for (let s of a.ports){
            let n = t.some((r)=>r.id === s.sender.tab.id);
            s.postMessage({
                __plasmo_cs_active_tab__: n
            });
        }
        l.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    let e = E(async (t)=>{
        c("BGSW Runtime - On HMR Update"), a.hmrUpdated ||= t.filter((n)=>n.envHash === o.envHash).some((n)=>R(module.bundle, n.id));
        let s = t.find((n)=>n.type === "json");
        if (s) {
            let n = new Set(t.map((i)=>i.id)), r = Object.values(s.depsByBundle).map((i)=>Object.values(i)).flat();
            a.hmrUpdated ||= r.every((i)=>n.has(i));
        }
        d();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await x(), d(!0);
    });
}
L(async ()=>{
    c("BGSW Runtime - On Build Repackaged"), a.buildReady ||= !0, d();
});
l.runtime.onConnect.addListener(function(e) {
    e.name.startsWith("__plasmo_runtime_script_") && (a.ports.add(e), e.onDisconnect.addListener(()=>{
        a.ports.delete(e);
    }), e.onMessage.addListener(function(t) {
        t.__plasmo_cs_changed__ && (c("BGSW Runtime - On CS code changed"), a.csCodeChanged ||= !0, d());
    }));
});
l.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (c("BGSW Runtime - On top-level code changed"), d()), !0;
});

},{}],"15Yos":[function(require,module,exports) {

},{}]},["4tq9d","15Yos"], "15Yos", "parcelRequire3b8c")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksSUFBRSxPQUFPLFdBQVcsT0FBTyxHQUFDLE1BQUksV0FBVyxPQUFPLENBQUMsSUFBSSxHQUFDLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxPQUFPLFdBQVcsT0FBTyxHQUFDLE1BQUksV0FBVyxPQUFPLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQztBQUFDLElBQUksSUFBRSxJQUFJLElBQUksSUFBRyxJQUFFLENBQUEsSUFBRyxFQUFFLEdBQUcsQ0FBQyxJQUFHLElBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQSxJQUFHLEVBQUUsVUFBVSxDQUFDLFNBQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxJQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sTUFBTSxDQUFDLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUMsQUFBRCxHQUFHLENBQUM7QUFBRyxJQUFJLElBQUUsRUFBRSxjQUFhLElBQUUsSUFBSSxFQUFFLGdCQUFjLElBQUksT0FBTyxLQUFHLFFBQU8sSUFBRTtBQUFJLElBQUksSUFBRSxDQUFDLElBQUUsRUFBRSxFQUFDLEdBQUcsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFHLFFBQU87QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFHLElBQUksUUFBUSxLQUFLLENBQUMscUJBQWtCLE1BQU0sQ0FBQyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQixLQUFLO0lBQUMsZ0JBQWUsSUFBSTtJQUFDLFdBQVUsS0FBSztJQUFDLFlBQVc7UUFBQztLQUE2QjtJQUFDLFFBQU87SUFBWSxRQUFPO0lBQUssaUJBQWdCO0lBQThNLFlBQVc7SUFBbUIsV0FBVTtJQUFtQixXQUFVO0lBQVEsVUFBUyxLQUFLO0lBQUMsY0FBYTtBQUFLO0FBQUUsT0FBTyxNQUFNLENBQUMsYUFBYSxHQUFDLEVBQUUsUUFBUTtBQUFDLFdBQVcsT0FBTyxHQUFDO0lBQUMsTUFBSyxFQUFFO0lBQUMsS0FBSTtRQUFDLFNBQVEsRUFBRSxPQUFPO0lBQUE7QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxHQUFHLEdBQUM7UUFBQyxNQUFLLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDLEVBQUM7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBVSxDQUFDO1FBQUU7UUFBRSxTQUFRLFNBQVMsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUFFO0lBQUMsR0FBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztBQUFBO0FBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFDO0FBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUM7QUFBRSxJQUFJLElBQUUsV0FBVyxNQUFNLElBQUUsV0FBVyxPQUFPLElBQUUsSUFBSTtBQUFDLFNBQVMsSUFBRztJQUFDLE9BQU0sQ0FBQyxFQUFFLElBQUksSUFBRSxFQUFFLElBQUksS0FBRyxZQUFVLFNBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFVLElBQUUsU0FBUyxRQUFRLEdBQUMsV0FBVyxHQUFDLEVBQUUsSUFBSTtBQUFBO0FBQUMsU0FBUyxJQUFHO0lBQUMsT0FBTyxFQUFFLElBQUksSUFBRSxTQUFTLElBQUk7QUFBQTtBQUFDLElBQUksSUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEdBQUMsVUFBUSxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQUMsZUFBZSxFQUFFLElBQUUsSUFBSSxFQUFDO0lBQUMsT0FBTyxJQUFHO1FBQUMsTUFBTSxNQUFNO1FBQUcsS0FBSztJQUFBLEVBQUMsT0FBSztRQUFDLE1BQU0sSUFBSSxRQUFRLENBQUEsSUFBRyxXQUFXLEdBQUU7SUFBRztBQUFDO0FBQUMsSUFBRyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLEtBQUcsR0FBRTtJQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFBOEIsV0FBVyxnQkFBZ0IsQ0FBQyxTQUFRLFNBQVMsQ0FBQyxFQUFDO1FBQUMsSUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUc7UUFBQyxJQUFHLEVBQUUsVUFBVSxDQUFDLElBQUc7WUFBQyxJQUFJLElBQUUsSUFBSSxJQUFJLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU07WUFBSSxFQUFFLFFBQVEsS0FBRyxFQUFFLElBQUksSUFBRSxFQUFFLElBQUksS0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUEsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUksS0FBSyxHQUFHLEdBQUcsUUFBUSxLQUFJLEVBQUUsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQSxJQUFHLElBQUksU0FBUyxFQUFFLElBQUksRUFBQztvQkFBQyxTQUFRO3dCQUFDLGdCQUFlLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUI7b0JBQWlCO2dCQUFDLElBQUksQUFBRCxJQUFHLEVBQUUsV0FBVyxDQUFDLElBQUksU0FBUyxjQUFhO2dCQUFDLFFBQU87Z0JBQUksWUFBVztZQUFTLEdBQUc7UUFBQSxDQUFDO0lBQUE7QUFBRSxDQUFDO0FBQUEsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFHLEVBQUMsU0FBUSxFQUFDLEVBQUMsR0FBQztJQUFFLE9BQU8sSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUM7QUFBQTtBQUFDLFNBQVMsRUFBRSxJQUFFLEdBQUcsRUFBQztJQUFDLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxJQUFFLFNBQVMsUUFBUSxLQUFHLFlBQVUsQ0FBQyw4QkFBOEIsSUFBSSxDQUFDLEtBQUcsUUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQUMsT0FBTyxFQUFFLE9BQU8sSUFBRSxZQUFVLEVBQUUsOEJBQTRCLEVBQUUsT0FBTztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLElBQUcsT0FBTyxXQUFXLFNBQVMsR0FBQyxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVSxFQUFFLE9BQU8sT0FBSztJQUFJLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxXQUFVLGVBQWUsQ0FBQyxFQUFDO1FBQUMsSUFBRyxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEtBQUcsZUFBYztZQUFDLE1BQU07WUFBSTtRQUFNLENBQUM7SUFBQSxJQUFHLEVBQUUsZ0JBQWdCLENBQUMsU0FBUSxJQUFHLENBQUM7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxJQUFHLE9BQU8sV0FBVyxTQUFTLEdBQUMsS0FBSTtJQUFPLElBQUksSUFBRSxJQUFJLFVBQVU7SUFBSyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsV0FBVSxlQUFlLENBQUMsRUFBQztRQUFDLElBQUksSUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUk7UUFBRSxJQUFHLEVBQUUsSUFBSSxLQUFHLFlBQVUsTUFBTSxFQUFFLEVBQUUsTUFBTSxHQUFFLEVBQUUsSUFBSSxLQUFHLE9BQU8sRUFBQyxLQUFJLElBQUksS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFBQyxJQUFJLElBQUUsRUFBRSxTQUFTLElBQUUsRUFBRSxLQUFLO1lBQUMsRUFBRSw4QkFBNEIsRUFBRSxPQUFPLEdBQUMsQ0FBQztBQUNucEcsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEIsQ0FBQztRQUFFO0lBQUMsSUFBRyxFQUFFLGdCQUFnQixDQUFDLFNBQVEsSUFBRyxFQUFFLGdCQUFnQixDQUFDLFFBQU8sSUFBSTtRQUFDLEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQUMsSUFBRyxFQUFFLGdCQUFnQixDQUFDLFNBQVEsSUFBSTtRQUFDLEVBQUUsQ0FBQyxvRUFBb0UsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQUMsSUFBRyxDQUFDO0FBQUE7QUFBQyxJQUFJLElBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxFQUFDLElBQUU7SUFBQyxZQUFXLENBQUM7SUFBRSxZQUFXLENBQUM7SUFBRSxlQUFjLENBQUM7SUFBRSxPQUFNLElBQUk7QUFBRztBQUFFLGVBQWUsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRyxLQUFHLEVBQUUsVUFBVSxJQUFHLENBQUEsRUFBRSxVQUFVLElBQUUsRUFBRSxhQUFhLEFBQUQsR0FBRztRQUFDLEVBQUU7UUFBNEIsSUFBSSxJQUFFLE1BQU0sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUMsUUFBTyxDQUFDO1FBQUM7UUFBRyxLQUFJLElBQUksS0FBSyxFQUFFLEtBQUssQ0FBQztZQUFDLElBQUksSUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBLElBQUcsRUFBRSxFQUFFLEtBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFBRSxFQUFFLFdBQVcsQ0FBQztnQkFBQywwQkFBeUI7WUFBQztRQUFFO1FBQUMsRUFBRSxPQUFPLENBQUMsTUFBTTtJQUFFLENBQUM7QUFBQTtBQUFDLElBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxlQUFlLEVBQUM7SUFBQyxJQUFJLElBQUUsRUFBRSxPQUFNLElBQUc7UUFBQyxFQUFFLGlDQUFnQyxFQUFFLFVBQVUsS0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBLElBQUcsRUFBRSxPQUFPLEtBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUEsSUFBRyxFQUFFLE9BQU8sTUFBTSxFQUFDLEVBQUUsRUFBRSxFQUFFO1FBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSSxDQUFDLENBQUEsSUFBRyxFQUFFLElBQUksS0FBRztRQUFRLElBQUcsR0FBRTtZQUFDLElBQUksSUFBRSxJQUFJLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQSxJQUFHLEVBQUUsRUFBRSxJQUFHLElBQUUsT0FBTyxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUEsSUFBRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUk7WUFBRyxFQUFFLFVBQVUsS0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBLElBQUcsRUFBRSxHQUFHLENBQUM7UUFBRyxDQUFDO1FBQUE7SUFBRztJQUFHLEVBQUUsZ0JBQWdCLENBQUMsUUFBTyxJQUFJO1FBQUMsSUFBSSxJQUFFLFlBQVksSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFRO1FBQU0sRUFBRSxnQkFBZ0IsQ0FBQyxTQUFRLElBQUksY0FBYztJQUFHLElBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFRLFVBQVM7UUFBQyxNQUFNLEtBQUksRUFBRSxDQUFDLEVBQUU7SUFBQSxFQUFFO0FBQUEsQ0FBQztBQUFBLEVBQUUsVUFBUztJQUFDLEVBQUUsdUNBQXNDLEVBQUUsVUFBVSxLQUFHLENBQUMsR0FBRSxHQUFHO0FBQUE7QUFBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDO0lBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLCtCQUE4QixDQUFBLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFHLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJO1FBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxFQUFFLHFCQUFxQixJQUFHLENBQUEsRUFBRSxzQ0FBcUMsRUFBRSxhQUFhLEtBQUcsQ0FBQyxHQUFFLEdBQUcsQUFBRDtJQUFFLEVBQUUsQUFBRDtBQUFFO0FBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLE9BQU8sRUFBRSxzQkFBc0IsSUFBRyxDQUFBLEVBQUUsNkNBQTRDLEdBQUcsQUFBRCxHQUFHLENBQUMsQ0FBQztBQUFBIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMTguMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS03ZDY3NTFkM2I1NGNhOGIzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtdHJhbnNmb3JtZXItbWFuaWZlc3RAMC4xNC4zL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXRyYW5zZm9ybWVyLW1hbmlmZXN0L3J1bnRpbWUvcGxhc21vLWRlZmF1bHQtYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbT10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciB5PSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIEE9bmV3IFNldChtKSxfPWU9PkEuaGFzKGUpLFc9bS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxzXSk9PihlW3RdPXMsZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixJPWcoKTt2YXIgZj0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgdj0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLGI9KC4uLmUpPT5mKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksaD0oLi4uZSk9PmYoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsYz0oLi4uZSk9PmcoKSYmZihgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBvPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiL2hvbWUvcmV2YW4vY29kZS9naXQtcHJvamVjdHMvTWluZGZ1bENhcnRfRXh0ZW5zaW9uL25vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXRyYW5zZm9ybWVyLW1hbmlmZXN0QDAuMTQuMy9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC10cmFuc2Zvcm1lci1tYW5pZmVzdC9ydW50aW1lL3BsYXNtby1kZWZhdWx0LWJhY2tncm91bmQudHNcIixcImJ1bmRsZUlkXCI6XCJlNTczMWU2YjgzNDVjMTkzXCIsXCJlbnZIYXNoXCI6XCIyMTAyODFjYWY4ZDQxNjBkXCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NDM1ODl9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1vLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6by52ZXJib3NlfX07dmFyIFQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gRChlKXtULmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUQ7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuY2hyb21lfHxnbG9iYWxUaGlzLmJyb3dzZXJ8fG51bGw7ZnVuY3Rpb24gdSgpe3JldHVybiFvLmhvc3R8fG8uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm8uaG9zdH1mdW5jdGlvbiBwKCl7cmV0dXJuIG8ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgQj1gJHtvLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHt1KCl9OiR7cCgpfS9gO2FzeW5jIGZ1bmN0aW9uIHgoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKEIpO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKHM9PnNldFRpbWVvdXQocyxlKSl9fWlmKGwucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1sLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgcz10LnJlcXVlc3QudXJsO2lmKHMuc3RhcnRzV2l0aChlKSl7bGV0IG49bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQocy5zbGljZShlLmxlbmd0aCkpKTtuLmhvc3RuYW1lPT09by5ob3N0JiZuLnBvcnQ9PT1gJHtvLnBvcnR9YD8obi5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChuKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIFIoZSx0KXtsZXR7bW9kdWxlczpzfT1lO3JldHVybiBzPyEhc1t0XTohMX1mdW5jdGlvbiBrKGU9cCgpKXtsZXQgdD11KCk7cmV0dXJuYCR7by5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gUyhlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ2KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoayhOdW1iZXIocCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihzKXtpZihKU09OLnBhcnNlKHMuZGF0YSkudHlwZT09PVwiYnVpbGRfcmVhZHlcIil7YXdhaXQgZSgpO3JldHVybn19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFMpLHR9ZnVuY3Rpb24gRShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoaygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKHMpe2xldCBuPUpTT04ucGFyc2Uocy5kYXRhKTtpZihuLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKG4uYXNzZXRzKSxuLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIG4uZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGk9ci5jb2RlZnJhbWV8fHIuc3RhY2s7aChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtpK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsUyksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57YihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke28uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntoKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7by5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGhtclVwZGF0ZWQ6ITEsY3NDb2RlQ2hhbmdlZDohMSxwb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBkKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmKGEuaG1yVXBkYXRlZHx8YS5jc0NvZGVDaGFuZ2VkKSl7YyhcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZ1wiKTtsZXQgdD1hd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBzIG9mIGEucG9ydHMpe2xldCBuPXQuc29tZShyPT5yLmlkPT09cy5zZW5kZXIudGFiLmlkKTtzLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186bn0pfWwucnVudGltZS5yZWxvYWQoKX19aWYoIXd8fCF3LmlzUGFyY2VsUmVxdWlyZSl7bGV0IGU9RShhc3luYyB0PT57YyhcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5obXJVcGRhdGVkfHw9dC5maWx0ZXIobj0+bi5lbnZIYXNoPT09by5lbnZIYXNoKS5zb21lKG49PlIobW9kdWxlLmJ1bmRsZSxuLmlkKSk7bGV0IHM9dC5maW5kKG49Pm4udHlwZT09PVwianNvblwiKTtpZihzKXtsZXQgbj1uZXcgU2V0KHQubWFwKGk9PmkuaWQpKSxyPU9iamVjdC52YWx1ZXMocy5kZXBzQnlCdW5kbGUpLm1hcChpPT5PYmplY3QudmFsdWVzKGkpKS5mbGF0KCk7YS5obXJVcGRhdGVkfHw9ci5ldmVyeShpPT5uLmhhcyhpKSl9ZCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCB4KCksZCghMCl9KX1MKGFzeW5jKCk9PntjKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxhLmJ1aWxkUmVhZHl8fD0hMCxkKCl9KTtsLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2UubmFtZS5zdGFydHNXaXRoKFwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCIpJiYoYS5wb3J0cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnthLnBvcnRzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3QuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYyhcIkJHU1cgUnVudGltZSAtIE9uIENTIGNvZGUgY2hhbmdlZFwiKSxhLmNzQ29kZUNoYW5nZWR8fD0hMCxkKCkpfSkpfSk7bC5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoYyhcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIiksZCgpKSwhMH0pO1xuIiwiIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InBsYXNtby1kZWZhdWx0LWJhY2tncm91bmQuODM0NWMxOTMuanMubWFwIn0=
