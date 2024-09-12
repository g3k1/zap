var Yr = Object.defineProperty;
var Qr = (e, t, n) =>
  t in e
    ? Yr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ht = (e, t, n) => (Qr(e, typeof t != "symbol" ? t + "" : t, n), n);
import {
  n as Jr,
  s as Ye,
  c as G,
  r as a,
  W as z,
  R as c,
  ao as Rn,
  a7 as Fe,
  ap as Et,
  aq as eo,
  ar as to,
  o as no,
  a as Dn,
  I as Ln,
  _ as L,
  ai as zn,
  M as Bn,
  ad as ro,
  g as Z,
  e as _n,
  as as oo,
  at as ao,
  au as so,
  av as io,
  aw as lo,
  ax as co,
  w as Lt,
  U as uo,
  ay as fo,
  az as po,
  $ as mo,
  b as Kt,
  m as go,
  k as vo,
  l as ho,
  aA as bo,
} from "./chunk-c19d60b9.js";
import { d as zt, g as Ge } from "./chunk-61361a5e.js";
import {
  j as xo,
  k as yo,
  l as q,
  m as Bt,
  n as Wn,
  o as qe,
  u as pe,
  P as oe,
  g as Te,
  h as re,
  e as Vn,
  f as Eo,
  i as wo,
  p as ae,
  r as we,
  M as _t,
  I as Ie,
  c as Un,
} from "./chunk-61d077b0.js";
import { v as Qe, a as Co } from "./chunk-37259eac.js";
async function So(e) {
  return new Promise((t) => {
    const n = localStorage.getItem(e);
    try {
      const r = JSON.parse(n);
      t(r);
    } catch {
      t(n);
    }
  });
}
async function wt(e) {
  return new Promise((t, n) => {
    setTimeout(t, e);
  });
}
function ko(e) {
  return Jr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M247 24v15.2C134.4 43.81 43.81 134.4 39.2 247H24v18h15.2c4.61 112.6 95.2 203.2 207.8 207.8V488h18v-15.2c112.6-4.6 203.2-95.2 207.8-207.8H488v-18h-15.2C468.2 134.4 377.6 43.81 265 39.2V24h-18zm0 33.21V88h18V57.21C367.8 61.78 450.2 144.2 454.8 247H424v18h30.8c-4.6 102.8-87 185.2-189.8 189.8V424h-18v30.8c-102.8-4.6-185.22-87-189.79-189.8H88v-18H57.21C61.78 144.2 144.2 61.78 247 57.21zm9 52.79a64 64 0 0 0-64 64 64 64 0 0 0 38.1 58.5C172.6 280.9 161.9 349.6 176 406h160c14.1-56.4 3.3-125.2-54.1-173.6A64 64 0 0 0 320 174a64 64 0 0 0-64-64z",
        },
      },
    ],
  })(e);
}
const $o = Ye.div`
  display: ${({ isVisible: e }) => (e ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  backdrop-filter: blur(5px);
  #funnelPreviewContainer {
    width: 90%;
    max-width: 35rem;
    height: 100%;
    border-radius: 0.25rem;
    padding: 1rem;
    box-shadow: 0px 0px 15px -5px black;
    background: var(--background-default);
    color: var(--primary);
    display: grid;
    grid-template-rows: 2rem 6rem 1fr 1fr 4rem;
    place-items: center;
    h1 {
      color: var(--primary-strong);
      font-size: 1.5rem;
    }
    .profilePic {
      fill: var(--avatar-placeholder-primary);
      background: var(--avatar-placeholder-background);
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      &.profilePicDefault {
        padding: 0.5rem;
        box-sizing: border-box;
      }
    }
    #funnelDetails {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .detailContainer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0.25rem 0;
        .detailsIcon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
          fill: var(--primary);
        }
        span {
          font-size: 1.25rem;
          font-weight: 400;
          strong {
            font-weight: 700;
          }
        }
      }
    }
    #warningsContainer {
      width: 100%;
      height: 100%;
      font-size: 0.75rem;
      display: grid;
      place-items: center;
      filter: brightness(0.8);

      table {
        height: 100%;
        width: 100%;
        table-layout: fixed;
        border-radius: 0.5rem;
        overflow: hidden;
        thead {
          th {
            padding: 0.5rem 0;
            font-size: 1rem;
            font-weight: 700;
            border-bottom: 0.5px solid var(--secondary);
            &.can {
              background: ${G(0.9, "#09CAA7")};
            }
            &.cant {
              background: ${G(0.9, "#FF5151")};
            }
            &.shouldnt {
              background: ${G(0.9, "#EBC826")};
            }
            .thContainer {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              .thIconsContainer {
                width: 1rem;
                height: 1rem;
                .thIcons {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
        tbody {
          tr {
            &:not(:last-child) {
              td {
                border-bottom: 0.5px solid var(--secondary);
              }
            }
            td {
              padding: 0.25rem 0.5rem;
              &.can {
                background: ${G(0.95, "#09CAA7")};
              }
              &.cant {
                background: ${G(0.95, "#FF5151")};
              }
              &.shouldnt {
                background: ${G(0.95, "#EBC826")};
              }
            }
          }
        }
      }
    }
    #actionContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      button {
        width: 10rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        color: var(--primary);
        transition: filter 0.2s;
        &:hover {
          filter: brightness(1.2);
        }
        &#cancelBtn {
          background: ${G(0.3, "#FF5151")};
        }
        &#sendBtn {
          background: ${G(0.3, "#09CAA7")};
        }
      }
    }
  }
`;
let Ze = "unknown",
  $e = !1,
  He = !1,
  Xt = !1;
const Po = () => (self || window).require("__debug");
let X;
const Ct = {};
function Mo() {
  if ($e) return;
  const e = self || window,
    t = setInterval(async () => {
      if (!e.require || !e.__d) {
        clearInterval(t);
        return;
      }
      if (window.ZVWAPI) {
        clearInterval(t);
        return;
      }
      if (Xt) {
        clearInterval(t);
        return;
      }
      (Xt = !0),
        (Ze = "meta"),
        (X = function (l) {
          try {
            return e.ErrorGuard.skipGuardGlobal(!0), e.importNamespace(l);
          } catch {}
          return null;
        }),
        Object.defineProperty(X, "m", {
          get: () => {
            var d;
            const l = Po().modulesMap,
              s = Object.keys(l).filter((u) => /^(?:use)?WA/.test(u)),
              f = {};
            for (const u of s) f[u] = (d = l[u]) == null ? void 0 : d.factory;
            return f;
          },
        }),
        ($e = !0),
        await new Promise((l) => setTimeout(l, 1e3)),
        (He = !0),
        (window.ZVWAPI = await Yt()),
        window.wppForceMainLoad &&
          (await new Promise((l) => setTimeout(l, 5e3)));
    }, 1e3),
    n = "webpackChunkwhatsapp_web_client",
    r = e[n] || [];
  typeof e[n] > "u" ? (e[n] = r) : (Ze = "webpack");
  const o = async (l) => {
      (Ze = "webpack"),
        (X = l),
        ($e = !0),
        await new Promise((d) => setTimeout(d, 500));
      const s = new Array(1e4)
          .fill(1)
          .map((d, u) => d + u)
          .filter((d) => {
            const u = X.u(d);
            return u.includes("locales")
              ? navigator.languages.some((m) => u.includes(`locales/${m}`))
              : !u.includes("undefined");
          }),
        f = s.filter((d) => {
          const u = X.u(d);
          return u.includes("main") && !u.includes("locales");
        });
      for (const d of f)
        try {
          await X.e(d);
        } catch {}
      (He = !0),
        (window.ZVWAPI = await Yt()),
        window.wppForceMainLoad &&
          (await new Promise((d) => setTimeout(d, 5e3)));
      for (const d of s)
        try {
          await X.e(d);
        } catch {}
    },
    i = Date.now();
  r.push([
    [i],
    {},
    (l) => {
      (X = l), queueMicrotask(() => o(l));
    },
  ]);
}
const st = new Map();
function jn(e) {
  if (Ze !== "webpack" || !X.m[e]) return "";
  if (st.has(e)) return st.get(e);
  const t = X.m[e].toString();
  return st.set(e, t), t;
}
const it = new Map();
function To(e) {
  if (it.has(e)) return it.get(e);
  const t = /\w+\.(Pure)?Component\s*\{/,
    n = jn(e),
    r = t.test(n);
  return it.set(e, r), r;
}
function Ao(e, t = !1) {
  let n = Object.keys(X.m);
  t && (n = n.reverse());
  for (const r of n)
    if (!To(r))
      try {
        const o = X(r);
        if (e(o, r)) return r;
      } catch {
        continue;
      }
  n = Object.keys(Ct);
  for (const r of n)
    try {
      const o = Ct[r];
      if (e(o, r)) return r;
    } catch {
      continue;
    }
  return null;
}
function Fo(e) {
  return /^fallback_/.test(e) ? Ct[e] : X(e);
}
const No = [
  {
    id: "Store",
    conditions: (e) =>
      e.default && e.default.Chat && e.default.Msg ? e.default : null,
  },
  {
    id: "MediaCollection",
    conditions: (e) =>
      e.default &&
      e.default.prototype &&
      e.default.prototype.processAttachments !== void 0
        ? e.default
        : null,
  },
  { id: "MediaProcess", conditions: (e) => (e.BLOB ? e : null) },
  {
    id: "MediaPrep",
    conditions: (e) => (e.uploadProductImage && e.MediaPrep ? e : null),
  },
  {
    id: "OpaqueData",
    conditions: (e) => (e.default && e.default.createFromData ? e : null),
    properties: (e) => e.default,
  },
  {
    id: "ChatUtil",
    conditions: (e) => (e.sendClear && e.clearChat ? e : null),
  },
  {
    id: "GroupInvite",
    conditions: (e) => (e.sendQueryGroupInviteCode ? e : null),
  },
  { id: "Wap", conditions: (e) => (e.createGroup ? e : null) },
  {
    id: "ServiceWorker",
    conditions: (e) => (e.default && e.default.killServiceWorker ? e : null),
  },
  { id: "State", conditions: (e) => (e.STATE && e.STREAM ? e : null) },
  {
    id: "WapDelete",
    conditions: (e) =>
      e.sendConversationDelete && e.sendConversationDelete.length === 2
        ? e
        : null,
  },
  {
    id: "Conn",
    conditions: (e) =>
      (e.default && e.Conn) || (e.Conn && e.ConnImpl) ? e.default : null,
  },
  {
    id: "Clock",
    conditions: (e) =>
      e.Clock.globalUnixTime || e.default.globalUnixTime ? e : null,
  },
  { id: "Constants", conditions: (e) => (e.ACK.CLOCK === 0 ? e : null) },
  {
    id: "WapQuery",
    conditions: (e) =>
      e.default && e.default.queryExist && e.default.getCapabilities
        ? e.default
        : null,
  },
  { id: "CryptoLib", conditions: (e) => (e.decryptE2EMedia ? e : null) },
  {
    id: "OpenChat",
    conditions: (e) =>
      e.default && e.default.prototype && e.default.prototype.openChat
        ? e.default
        : null,
  },
  {
    id: "UserConstructor",
    conditions: (e) =>
      e.default &&
      e.default.prototype &&
      e.default.prototype.isServer &&
      e.default.prototype.isUser
        ? e.default
        : null,
  },
  {
    id: "sendTextMsgToChat",
    conditions: (e) => (e.sendTextMsgToChat ? e.sendTextMsgToChat : null),
  },
  { id: "SendSeen", conditions: (e) => (e.sendSeen ? e.sendSeen : null) },
  { id: "Archive", conditions: (e) => (e.setArchive ? e : null) },
  {
    id: "pinChat",
    conditions: (e) => (e.setPin.toString().includes(".unproxy") ? e : null),
  },
  { id: "sendDelete", conditions: (e) => (e.sendDelete ? e.sendDelete : null) },
  {
    id: "addAndSendMsgToChat",
    conditions: (e) => (e.addAndSendMsgToChat ? e.addAndSendMsgToChat : null),
  },
  {
    id: "sendMsgToChat",
    conditions: (e) => (e.sendMsgToChat ? e.sendMsgToChat : null),
  },
  { id: "Catalog", conditions: (e) => (e.Catalog ? e.Catalog : null) },
  {
    id: "Perfil",
    conditions: (e) =>
      e.__esModule === !0 && e.setPushname && !e.getComposeContents ? e : null,
  },
  {
    id: "MsgHandler",
    conditions: (e) =>
      e.default &&
      typeof e.default.toString == "function" &&
      e.default.toString().includes("Msg:out of order ack")
        ? e
        : null,
  },
  {
    id: "MsgKey",
    conditions: (e) =>
      e.default &&
      typeof e.default.toString == "function" &&
      e.default.toString().includes("MsgKey error: obj is null/undefined")
        ? e.default
        : null,
  },
  {
    id: "Parser",
    conditions: (e) => (e.convertToTextWithoutSpecialEmojis ? e.default : null),
  },
  {
    id: "Builders",
    conditions: (e) =>
      e.TemplateMessage && e.HydratedFourRowTemplate ? e : null,
  },
  { id: "Me", conditions: (e) => (e.PLATFORMS && e.Conn ? e.default : null) },
  {
    id: "CallUtils",
    conditions: (e) => (e.sendCallEnd && e.parseCall ? e : null),
  },
  {
    id: "Identity",
    conditions: (e) => (e.queryIdentity && e.updateIdentity ? e : null),
  },
  {
    id: "MyStatus",
    conditions: (e) => (e.getStatus && e.setMyStatus ? e : null),
  },
  {
    id: "ChatStates",
    conditions: (e) =>
      e.sendChatStatePaused &&
      e.sendChatStateRecording &&
      e.sendChatStateComposing
        ? e
        : null,
  },
  {
    id: "ChatPresence",
    conditions: (e) =>
      e.markComposing && e.markPaused && e.markRecording ? e : null,
  },
  {
    id: "GroupActions",
    conditions: (e) => (e.sendExitGroup && e.localExitGroup ? e : null),
  },
  {
    id: "Features",
    conditions: (e) => (e.FEATURE_CHANGE_EVENT && e.features ? e : null),
  },
  {
    id: "MessageUtils",
    conditions: (e) => (e.storeMessages && e.appendMessage ? e : null),
  },
  {
    id: "WebMessageInfo",
    conditions: (e) =>
      e.WebMessageInfo && e.WebFeatures ? e.WebMessageInfo : null,
  },
  {
    id: "createMessageKey",
    conditions: (e) =>
      e.createMessageKey && e.createDeviceSentMessage
        ? e.createMessageKey
        : null,
  },
  {
    id: "Participants",
    conditions: (e) =>
      e.addParticipants &&
      e.removeParticipants &&
      e.promoteParticipants &&
      e.demoteParticipants
        ? e
        : null,
  },
  {
    id: "WidFactory",
    conditions: (e) =>
      e.isWidlike && e.createWid && e.createWidFromWidLike ? e : null,
  },
  {
    id: "Base",
    conditions: (e) =>
      e.setSubProtocol && e.binSend && e.actionNode ? e : null,
  },
  {
    id: "Base2",
    conditions: (e) =>
      e.supportsFeatureFlags &&
      e.parseMsgStubProto &&
      e.binSend &&
      e.subscribeLiveLocation
        ? e
        : null,
  },
  {
    id: "Versions",
    conditions: (e) =>
      e.loadProtoVersions && e.default[15] && e.default[16] && e.default[17]
        ? e
        : null,
  },
  {
    id: "Sticker",
    conditions: (e) => (e.StickerCollection && e.default ? e : null),
  },
  {
    id: "MediaObject",
    conditions: (e) =>
      e.getOrCreateMediaObject && e.disassociateMediaFromStickerPack ? e : null,
  },
  {
    id: "MediaUpload",
    conditions: (e) => (e.default && e.default.mediaUpload ? e.default : null),
  },
  {
    id: "UploadUtils",
    conditions: (e) =>
      e.default && e.default.encryptAndUpload ? e.default : null,
  },
  {
    id: "Cmd",
    conditions: (e) => (e.default && e.default.openChatFromUnread ? e : null),
  },
  { id: "ReadSeen", conditions: (e) => (e.sendSeen ? e : null) },
  {
    id: "Block",
    conditions: (e) => (e.blockContact && e.unblockContact ? e : null),
  },
  { id: "BlockList", conditions: (e) => (e.BlocklistCollection ? e : null) },
  { id: "Theme", conditions: (e) => (e.getTheme && e.setTheme ? e : null) },
  { id: "Vcard", conditions: (e) => (e.vcardFromContactModel ? e : null) },
  {
    id: "Profile",
    conditions: (e) => (e.sendSetPicture && e.requestDeletePicture ? e : null),
  },
  { id: "SendMute", conditions: (e) => (e.sendConversationMute ? e : null) },
  { id: "Validators", conditions: (e) => (e.findLinks ? e : null) },
  { id: "Wap2", conditions: (e) => (e.Wap ? e : null) },
  { id: "LinkPreview", conditions: (e) => (e.findFirstWebLink ? e : null) },
  {
    id: "fetchLinkPreview",
    conditions: (e, t) => {
      if (e.getLinkPreview && !e.getAck) return !0;
      const n = jn(t);
      return (
        n.includes(".genMinimalLinkPreview") &&
        n.includes(".getProductOrCatalogLinkPreview")
      );
    },
    properties: (e) => e.getLinkPreview || e.default,
  },
  {
    id: "genId",
    conditions: (e) =>
      e.default &&
      typeof e.default == "function" &&
      typeof e.default.toString == "function" &&
      e.default.toString().match(/crypto/)
        ? e
        : null,
  },
  {
    id: "GroupMetadata",
    conditions: (e) => (e.default && e.default.handlePendingInvite ? e : null),
  },
  {
    id: "i10n",
    conditions: (e) =>
      e.default && e.default.downloadAppLocale ? e.default : null,
  },
  {
    id: "NetworkStatus",
    conditions: (e) =>
      e.default && e.default._logOnlineOffline ? e.default : null,
  },
  {
    id: "Stream",
    conditions: (e) => (e.default && e.default.unobscure ? e.default : null),
  },
  {
    id: "ws2",
    conditions: (e) =>
      e.default && e.default.destroyStorage ? e.default : null,
  },
  {
    id: "BlobCache",
    conditions: (e) =>
      e.default && e.default.getOrCreateURL ? e.default : null,
  },
  { id: "UserPrefs", conditions: (e) => (e.getMaybeMeUser ? e : null) },
  {
    id: "randomMessageId",
    conditions: (e) => (e.randomId || e.default.randomId ? e : null),
  },
  { id: "sendSetGroupSubject", conditions: (e) => e.sendSetGroupSubject },
  { id: "sendSetGroupProperty", conditions: (e) => e.sendSetGroupProperty },
  {
    id: "sendSetGroupDescription",
    conditions: (e) => e.sendSetGroupDescription,
  },
  {
    id: "changeEphemeralDuration",
    conditions: (e) => e.changeEphemeralDuration,
  },
  { id: "sendCallSignalingMsg", conditions: (e) => e.sendCallSignalingMsg },
  {
    id: "sendQueryExists",
    conditions: (e) =>
      (e.queryExists && e.queryPhoneExists) ||
      (e.queryWidExists && e.queryPhoneExists),
    properties: (e) => e.queryExists || e.queryWidExists,
  },
  { id: "findChat", conditions: (e) => (e.findChat ? e.findChat : null) },
  { id: "sendCreateGroup", conditions: (e) => e.sendCreateGroup },
  {
    id: "msgFindQuery",
    conditions: (e) =>
      (e.msgFindQuery && e.msgFindByIds) ||
      (e.msgFindQuery && e.getMsgsByMsgKey)
        ? e.msgFindQuery
        : null,
  },
];
let N = {};
async function Yt() {
  if ($e && He)
    try {
      return (
        (N = No.reduce(
          (t, n) => {
            const r = Ao(n.conditions);
            if (!r) return t;
            const o = Fo(r),
              i = n.properties ? n.properties(o) : n.conditions(o);
            return (
              i &&
                (n.id === "Store"
                  ? (t.wapi = { ...t.wapi, ...i })
                  : (t.wapi[n.id] = i)),
              t
            );
          },
          { wapi: {} }
        ).wapi),
        N
      );
    } catch (e) {
      console.log(e);
    }
}
function ne() {
  return N.Chat.getModelsArray().find((t) => t.active);
}
function Io({ funnel: e, setFunnelPopUp: t }) {
  var h, y, S;
  const [n, r] = a.exports.useState(!1),
    [o, i] = a.exports.useState(0),
    [l, s] = a.exports.useState(0),
    [f, d] = a.exports.useState(0),
    [u, m] = a.exports.useState(""),
    [g, b] = a.exports.useState(),
    [x, p] = a.exports.useState();
  return (
    a.exports.useEffect(() => {
      var v;
      try {
        r(!0);
        const C = ne();
        if (!e || !C) {
          e
            ? C ||
              z.error(
                "Nenhum chat aberto para enviar o funil, clique na conversa desejada antes de enviar"
              )
            : z.error(
                "Funil carregado incorretamente, recarregue a p\xE1gina e tente novamente"
              ),
            p(void 0),
            t(void 0),
            r(!1);
          return;
        }
        p(C);
        const E =
          (v = e == null ? void 0 : e.data) == null
            ? void 0
            : v.reduce((M, A) => M + A.delay, 0);
        i(E != null ? E : 0);
      } catch (C) {
        console.log(C), z.error(C.toString()), p(void 0), t(void 0), r(!1);
      }
    }, [e]),
    a.exports.useEffect(() => {
      s(Math.floor(o / 1e3 / 60)), d(Math.floor((o / 1e3) % 60));
      const v = new Date();
      v.setMilliseconds(v.getUTCMilliseconds() + o), m(v.toLocaleString());
    }, [o]),
    a.exports.useEffect(() => {
      const v =
        x &&
        N.ProfilePicThumb.getModelsArray().find(
          (C) => C.id._serialized === x.id._serialized
        );
      b((v == null ? void 0 : v.img) || void 0);
    }, [e, x]),
    c.createElement(
      $o,
      { isVisible: n },
      e && x
        ? c.createElement(
            "div",
            { id: "funnelPreviewContainer" },
            c.createElement("h1", null, "Confirma o envio do funil abaixo?"),
            g
              ? c.createElement("img", {
                  src: g,
                  alt: x.formattedTitle,
                  className: "profilePic",
                })
              : c.createElement(Rn, {
                  className: "profilePic profilePicDefault",
                }),
            c.createElement(
              "div",
              { id: "funnelDetails" },
              c.createElement(
                "div",
                { className: " detailContainer recipient" },
                c.createElement(ko, { className: "detailsIcon" }),
                c.createElement(
                  "span",
                  null,
                  "Destinat\xE1rio:",
                  " ",
                  c.createElement(
                    "strong",
                    null,
                    x.formattedTitle,
                    ((h = x.contact) == null
                      ? void 0
                      : h.isAddressBookContact) === 0 &&
                      ((y = x.contact) == null ? void 0 : y.notifyName) &&
                      ` ( ${(S = x.contact) == null ? void 0 : S.notifyName} )`
                  )
                )
              ),
              c.createElement(
                "div",
                { className: " detailContainer funnelName" },
                c.createElement(Fe, { className: "detailsIcon" }),
                c.createElement(
                  "span",
                  null,
                  "Funil: ",
                  c.createElement("strong", null, e.name)
                )
              ),
              c.createElement(
                "div",
                { className: " detailContainer duration" },
                c.createElement(Et, { className: "detailsIcon" }),
                c.createElement(
                  "span",
                  null,
                  "Dura\xE7\xE3o:",
                  " ",
                  c.createElement(
                    "strong",
                    null,
                    l > 0 && `${l} min e `,
                    " ",
                    f,
                    " ",
                    "seg"
                  )
                )
              ),
              c.createElement(
                "div",
                { className: " detailContainer deadline" },
                c.createElement(eo, { className: "detailsIcon" }),
                c.createElement(
                  "span",
                  null,
                  "T\xE9rmino: ",
                  c.createElement("strong", null, u)
                )
              )
            ),
            c.createElement(
              "div",
              { id: "warningsContainer" },
              c.createElement(
                "table",
                null,
                c.createElement(
                  "thead",
                  null,
                  c.createElement(
                    "tr",
                    null,
                    c.createElement(
                      "th",
                      { className: "can" },
                      c.createElement(
                        "div",
                        { className: "thContainer" },
                        c.createElement(
                          "div",
                          { className: "thIconsContainer" },
                          c.createElement(xo, { className: "thIcons" })
                        ),
                        "Voc\xEA pode"
                      )
                    ),
                    c.createElement(
                      "th",
                      { className: "cant" },
                      c.createElement(
                        "div",
                        { className: "thContainer" },
                        c.createElement(
                          "div",
                          { className: "thIconsContainer" },
                          c.createElement(yo, { className: "thIcons" })
                        ),
                        "N\xE3o pode"
                      )
                    ),
                    c.createElement(
                      "th",
                      { className: "shouldnt" },
                      c.createElement(
                        "div",
                        { className: "thContainer" },
                        c.createElement(
                          "div",
                          { className: "thIconsContainer" },
                          c.createElement(to, {
                            fill: "#EBC826",
                            className: "thIcons",
                          })
                        ),
                        "N\xE3o recomendado"
                      )
                    )
                  )
                ),
                c.createElement(
                  "tbody",
                  null,
                  c.createElement(
                    "tr",
                    null,
                    c.createElement(
                      "td",
                      { className: "can" },
                      "Continuar a utilizar o whatsapp normalmente."
                    ),
                    c.createElement(
                      "td",
                      { className: "cant" },
                      "Recarregar a p\xE1gina do whatsapp web ",
                      c.createElement("br", null),
                      "(isso cancelar\xE1 todos os funis atuais)"
                    ),
                    c.createElement(
                      "td",
                      { className: "shouldnt" },
                      "Disparar muitos funis ao mesmo tempo ",
                      c.createElement("br", null),
                      "(m\xE9dia simultanea recomendada: 10)"
                    )
                  ),
                  c.createElement(
                    "tr",
                    null,
                    c.createElement(
                      "td",
                      { className: "can" },
                      "Enviar mensagens e funis para outros chats ao mesmo tempo."
                    ),
                    c.createElement(
                      "td",
                      { className: "cant" },
                      "Fechar o whatsapp web ",
                      c.createElement("br", null),
                      "(isso cancelar\xE1 todos os funis atuais)"
                    ),
                    c.createElement(
                      "td",
                      { className: "shouldnt" },
                      "Enviar funis para usu\xE1rios que n\xE3o aceitaram receber mensagens (Spam)"
                    )
                  ),
                  c.createElement(
                    "tr",
                    null,
                    c.createElement(
                      "td",
                      { className: "can" },
                      "Vender muito e continuar encantando seus clientes com seu atendimento."
                    ),
                    c.createElement("td", { className: "cant" }),
                    c.createElement(
                      "td",
                      { className: "shouldnt" },
                      "Sair da aba do web whatsapp durante os disparos"
                    )
                  )
                )
              )
            ),
            c.createElement(
              "div",
              { id: "actionContainer" },
              c.createElement(
                "button",
                {
                  type: "button",
                  id: "cancelBtn",
                  onClick: () => {
                    r(!1), t(void 0);
                  },
                },
                "Cancelar"
              ),
              c.createElement(
                "button",
                {
                  type: "button",
                  id: "sendBtn",
                  onClick: () => {
                    at.add(e, x.id.toString()), r(!1), t(void 0);
                  },
                },
                "Enviar"
              )
            )
          )
        : c.createElement("h1", null, "Carregando...")
    )
  );
}
function Oo(e) {
  if (!e) return;
  let t = e;
  if (N.WidFactory.isWidlike(t)) return N.WidFactory.createWidFromWidLike(t);
  if (
    (t &&
      typeof t == "object" &&
      typeof t._serialized == "object" &&
      (t = t._serialized),
    typeof t == "string")
  ) {
    if (/^\d+$/.test(t)) return N.WidFactory.createUserWid(t, "c.us");
    if (/^\d+-\d+$/.test(t)) return N.WidFactory.createUserWid(t, "g.us");
    if (/status$/.test(t)) return N.WidFactory.createUserWid(t, "broadcast");
  }
}
function Gn(e) {
  const t = Oo(e);
  if (!!t) return t;
}
async function Ro(e) {
  const t = Gn(e);
  return await N.findChat(t);
}
function Qt(e) {
  if (!e) return !1;
  e = typeof e == "string" ? e : e._serialized;
  const t = N.Chat.get(e);
  return (
    t &&
      (t.sendMessage = t.sendMessage
        ? t.sendMessage
        : function () {
            return N.sendTextMsgToChat(this, ...arguments);
          }),
    t
  );
}
async function Je(e) {
  if (!e) return;
  let t = e,
    n = await Qt(t);
  if (!n && !t.includes("@g")) {
    const r = await N.sendQueryExists(Gn(t));
    if (!r) return;
    await Ro(r.wid), (t = r.wid._serialized), (n = await Qt(t));
  }
  return n;
}
async function Do(e) {
  try {
    const t = await e.arrayBuffer(),
      r = await new AudioContext().decodeAudioData(t),
      o = r.getChannelData(0),
      i = 64,
      l = Math.floor(o.length / i),
      s = [];
    for (let m = 0; m < i; m++) {
      const g = l * m;
      let b = 0;
      for (let x = 0; x < l; x++) b = b + Math.abs(o[g + x]);
      s.push(b / l);
    }
    const f = Math.pow(Math.max(...s), -1),
      d = s.map((m) => m * f),
      u = new Uint8Array(d.map((m) => Math.floor(100 * m)));
    return { duration: Math.floor(r.duration), waveform: u };
  } catch (t) {
    console.log("Failed to generate waveform", t);
  }
}
async function Wt(e, t, n) {
  n = { type: "auto-detect", waveform: !0, ...n };
  const r = await no(t, n.filename, n.mimetype);
  r.name;
  const o = await N.OpaqueData.createFromData(r, r.type),
    i = {};
  let l;
  n.type === "audio"
    ? (await Dn(String(t)),
      (i.isPtt = n.isPtt),
      (i.precomputedFields = await Do(r)))
    : n.type === "image"
    ? (l = n.isViewOnce)
    : n.type === "video"
    ? (i.asGif = n.isGif)
    : n.type === "document"
    ? (i.asDocument = !0)
    : n.type === "sticker" && (i.asSticker = !0);
  const s = N.MediaPrep.prepRawMedia(o, i);
  return (
    await s.waitForPrep(),
    s.sendToChat(e, {
      quotedMsg: n.quotedMsg,
      caption: n.caption,
      footer: n.footer,
      isViewOnce: l,
    })
  );
}
async function Lo(e, t, n = !1) {
  try {
    const r = await Wt(t, e, {
      type: "audio",
      isPtt: !0,
      waveform: !0,
      quotedMsg: t.composeQuotedMsg,
      ...(!!t.isGroup &&
        !!n && {
          mentionedList: t.groupMetadata.participants
            .getModelsArray()
            .map((o) => o.id),
        }),
    });
    return (t.composeQuotedMsg = null), r;
  } catch (r) {
    throw (
      ((r == null ? void 0 : r.name) === "InvalidMediaFileType" &&
        console.log(r),
      r)
    );
  }
}
async function zo(e, t, n, r = !1) {
  const o = await Wt(t, e, {
    type: "document",
    filename: n,
    quotedMsg: t.composeQuotedMsg,
    ...(!!t.isGroup &&
      !!r && {
        mentionedList: t.groupMetadata.participants
          .getModelsArray()
          .map((i) => i.id),
      }),
  });
  return (t.composeQuotedMsg = null), o;
}
async function Jt(e, t, n, r = !1) {
  const o = await Wt(t, e, {
    type: "auto-detect",
    caption: n,
    quotedMsg: t.composeQuotedMsg,
    ...(!!t.isGroup &&
      !!r && {
        mentionedList: t.groupMetadata.participants
          .getModelsArray()
          .map((i) => i.id),
      }),
  });
  return (t.composeQuotedMsg = null), o;
}
async function Bo(e, t, n = !1) {
  let r;
  try {
    await new Promise(async (i) => {
      var s;
      setTimeout(() => {
        i(!1);
      }, 1e3);
      const l = await ((s = N.LinkPreview) == null
        ? void 0
        : s.findFirstWebLink(e));
      (r = l && (await N.fetchLinkPreview(l))), i(!0);
    });
  } catch (i) {
    console.log(i);
  }
  const o = await N.sendTextMsgToChat(t, e, {
    quotedMsg: t.composeQuotedMsg,
    linkPreview: r == null ? void 0 : r.data,
    ...(!!t.isGroup &&
      !!n && {
        mentionedJidList: t.groupMetadata.participants
          .getModelsArray()
          .map((i) => i.id),
      }),
  });
  return (t.composeQuotedMsg = null), o;
}
const H = window.localStorage.getItem("ZVExtensionId") || "",
  _o =
    0 >= H.indexOf("febglfjdlgcbli") &&
    0 >= H.indexOf("milglmkiipgoia") &&
    0 >= H.indexOf("fsoiwefnosklsd") &&
    0 >= H.indexOf("2hudj89jfjiodsf") &&
    0 >= H.indexOf("dfsh2ojisddljls");
async function Wo() {
  return new Promise((e) => {
    _o && chrome.runtime.sendMessage(H, { type: "saveValidOnStorage" }),
      chrome.runtime.sendMessage(
        H,
        { type: "checkPremium" },
        ({ type: t, response: n }) => {
          t === "checkPremium" && e(n);
        }
      );
  });
}
const Zn = a.exports.createContext({});
function Vo({ children: e }) {
  const [t, n] = a.exports.useState(!1),
    [r, o] = a.exports.useState(""),
    [i, l] = a.exports.useState(!1),
    s = a.exports.useCallback(() => !!t, [t, r]);
  function f() {
    t ||
      Wo().then(({ premium: u, data: m, number_warning: g }) => {
        l(g === !0), o(m), n(!!u);
      });
  }
  a.exports.useEffect(() => {
    !r && !t && f();
  });
  const d = {
    isPremium: t,
    keyData: r,
    number_warning: i,
    refreshPremium: f,
    getPremium: s,
  };
  return c.createElement(Zn.Provider, { value: d }, e);
}
function Vt() {
  return a.exports.useContext(Zn);
}
async function Uo() {
  return new Promise((e, t) => {
    chrome.runtime.sendMessage(
      H,
      { type: "getIndexesFromStorage" },
      async ({ type: n, response: r }) => n === "getIndexesFromStorage" && e(r)
    );
  });
}
async function jo({ message: e }) {
  return new Promise((t, n) => {
    chrome.runtime.sendMessage(
      H,
      { type: "checkTriggersShouldFireByMessage", data: { message: e } },
      async ({ type: r, response: o }) =>
        r === "checkTriggersShouldFireByMessage" && t(o)
    );
  });
}
const Ee = {
    shouldHideShortcuts: "GCZVshouldHideShortcuts",
    shouldAskToSendShortcuts: "GCZVshouldAskToSendShortcuts",
    shouldHideCurrentFunnelPopover: "GCZVshouldHideCurrentFunnelPopover",
    shouldMentionAllUsersOnGroup: "GCZVshouldMentionAllUsersOnGroup",
  },
  qn = a.exports.createContext({});
function Oe(e, t) {
  e
    ? window.localStorage.removeItem(Ee[t])
    : window.localStorage.setItem(Ee[t], "true");
}
function Go({ children: e }) {
  const [t, n] = a.exports.useState(
      !!window.localStorage.getItem(Ee.shouldHideShortcuts)
    ),
    [r, o] = a.exports.useState(
      !!window.localStorage.getItem(Ee.shouldHideCurrentFunnelPopover)
    ),
    [i, l] = a.exports.useState(
      !!window.localStorage.getItem(Ee.shouldAskToSendShortcuts)
    ),
    [s, f] = a.exports.useState(
      !!window.localStorage.getItem(Ee.shouldMentionAllUsersOnGroup)
    );
  function d() {
    o((x) => (Oe(x, "shouldHideCurrentFunnelPopover"), !x));
  }
  function u() {
    n((x) => {
      var h, y;
      Oe(x, "shouldHideShortcuts");
      const p = document.querySelector("#main");
      return (
        x
          ? (h = p == null ? void 0 : p.parentElement) == null ||
            h.classList.add("zvWithShortcuts")
          : (y = p == null ? void 0 : p.parentElement) == null ||
            y.classList.remove("zvWithShortcuts"),
        !x
      );
    });
  }
  function m() {
    l((x) => (Oe(x, "shouldAskToSendShortcuts"), !x));
  }
  function g() {
    f((x) => (Oe(x, "shouldMentionAllUsersOnGroup"), !x));
  }
  const b = {
    shouldHideShortcuts: t,
    toggleShouldHideShortcuts: u,
    shouldAskToSendShortcuts: i,
    toggleShouldAskToSendShortcuts: m,
    shouldHideCurrentFunnelPopover: r,
    toggleShouldHideCurrentFunnelPopover: d,
    shouldMentionAllUsersOnGroup: s,
    toggleShouldMentionAllUsersOnGroup: g,
  };
  return c.createElement(qn.Provider, { value: b }, e);
}
function Ut() {
  return a.exports.useContext(qn);
}
var Zo = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ve = new WeakMap(),
  Re = new WeakMap(),
  De = {},
  lt = 0,
  Hn = function (e) {
    return e && (e.host || Hn(e.parentNode));
  },
  qo = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Hn(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return Boolean(n);
      });
  },
  Ho = function (e, t, n, r) {
    var o = qo(t, Array.isArray(e) ? e : [e]);
    De[n] || (De[n] = new WeakMap());
    var i = De[n],
      l = [],
      s = new Set(),
      f = new Set(o),
      d = function (m) {
        !m || s.has(m) || (s.add(m), d(m.parentNode));
      };
    o.forEach(d);
    var u = function (m) {
      !m ||
        f.has(m) ||
        Array.prototype.forEach.call(m.children, function (g) {
          if (s.has(g)) u(g);
          else {
            var b = g.getAttribute(r),
              x = b !== null && b !== "false",
              p = (ve.get(g) || 0) + 1,
              h = (i.get(g) || 0) + 1;
            ve.set(g, p),
              i.set(g, h),
              l.push(g),
              p === 1 && x && Re.set(g, !0),
              h === 1 && g.setAttribute(n, "true"),
              x || g.setAttribute(r, "true");
          }
        });
    };
    return (
      u(t),
      s.clear(),
      lt++,
      function () {
        l.forEach(function (m) {
          var g = ve.get(m) - 1,
            b = i.get(m) - 1;
          ve.set(m, g),
            i.set(m, b),
            g || (Re.has(m) || m.removeAttribute(r), Re.delete(m)),
            b || m.removeAttribute(n);
        }),
          lt--,
          lt ||
            ((ve = new WeakMap()),
            (ve = new WeakMap()),
            (Re = new WeakMap()),
            (De = {}));
      }
    );
  },
  Kn = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || Zo(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        Ho(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Pe = "right-scroll-bar-position",
  Me = "width-before-scroll-bar",
  Ko = "with-scroll-bars-hidden",
  Xo = "--removed-body-scroll-bar-size";
function Yo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Qo(e, t) {
  var n = a.exports.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function Xn(e, t) {
  return Qo(t || null, function (n) {
    return e.forEach(function (r) {
      return Yo(r, n);
    });
  });
}
function Jo(e) {
  return e;
}
function ea(e, t) {
  t === void 0 && (t = Jo);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var l = t(i, r);
        return (
          n.push(l),
          function () {
            n = n.filter(function (s) {
              return s !== l;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var l = n;
          (n = []), l.forEach(i);
        }
        n = {
          push: function (s) {
            return i(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var l = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(i), (l = n);
        }
        var f = function () {
            var u = l;
            (l = []), u.forEach(i);
          },
          d = function () {
            return Promise.resolve().then(f);
          };
        d(),
          (n = {
            push: function (u) {
              l.push(u), d();
            },
            filter: function (u) {
              return (l = l.filter(u)), n;
            },
          });
      },
    };
  return o;
}
function Yn(e) {
  e === void 0 && (e = {});
  var t = ea(null);
  return (t.options = q({ async: !0, ssr: !1 }, e)), t;
}
var Qn = function (e) {
  var t = e.sideCar,
    n = Bt(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return a.exports.createElement(r, q({}, n));
};
Qn.isSideCarExport = !0;
function Jn(e, t) {
  return e.useMedium(t), Qn;
}
var er = Yn(),
  ct = function () {},
  et = a.exports.forwardRef(function (e, t) {
    var n = a.exports.useRef(null),
      r = a.exports.useState({
        onScrollCapture: ct,
        onWheelCapture: ct,
        onTouchMoveCapture: ct,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      f = e.className,
      d = e.removeScrollBar,
      u = e.enabled,
      m = e.shards,
      g = e.sideCar,
      b = e.noIsolation,
      x = e.inert,
      p = e.allowPinchZoom,
      h = e.as,
      y = h === void 0 ? "div" : h,
      S = e.gapMode,
      v = Bt(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = g,
      E = Xn([n, t]),
      M = q(q({}, v), o);
    return a.exports.createElement(
      a.exports.Fragment,
      null,
      u &&
        a.exports.createElement(C, {
          sideCar: er,
          removeScrollBar: d,
          shards: m,
          noIsolation: b,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!p,
          lockRef: n,
          gapMode: S,
        }),
      l
        ? a.exports.cloneElement(
            a.exports.Children.only(s),
            q(q({}, M), { ref: E })
          )
        : a.exports.createElement(y, q({}, M, { className: f, ref: E }), s)
    );
  });
et.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
et.classNames = { fullWidth: Me, zeroRight: Pe };
var ta = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function na() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ta();
  return t && e.setAttribute("nonce", t), e;
}
function ra(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function oa(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var aa = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = na()) && (ra(t, n), oa(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  sa = function () {
    var e = aa();
    return function (t, n) {
      a.exports.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  jt = function () {
    var e = sa(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  ia = { left: 0, top: 0, right: 0, gap: 0 },
  dt = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  la = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [dt(n), dt(r), dt(o)];
  },
  ca = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return ia;
    var t = la(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  da = jt(),
  ua = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      l = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Ko,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Pe,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Me,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Pe, " .")
        .concat(
          Pe,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Me, " .")
        .concat(
          Me,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(Xo, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  tr = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      i = a.exports.useMemo(
        function () {
          return ca(o);
        },
        [o]
      );
    return a.exports.createElement(da, {
      styles: ua(i, !t, o, n ? "" : "!important"),
    });
  },
  St = !1;
if (typeof window < "u")
  try {
    var Le = Object.defineProperty({}, "passive", {
      get: function () {
        return (St = !0), !0;
      },
    });
    window.addEventListener("test", Le, Le),
      window.removeEventListener("test", Le, Le);
  } catch {
    St = !1;
  }
var he = St ? { passive: !1 } : !1,
  fa = function (e) {
    return e.tagName === "TEXTAREA";
  },
  nr = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !fa(e) && n[t] === "visible")
    );
  },
  pa = function (e) {
    return nr(e, "overflowY");
  },
  ma = function (e) {
    return nr(e, "overflowX");
  },
  en = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = rr(e, r);
      if (o) {
        var i = or(e, r),
          l = i[1],
          s = i[2];
        if (l > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  ga = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  va = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  rr = function (e, t) {
    return e === "v" ? pa(t) : ma(t);
  },
  or = function (e, t) {
    return e === "v" ? ga(t) : va(t);
  },
  ha = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  ba = function (e, t, n, r, o) {
    var i = ha(e, window.getComputedStyle(t).direction),
      l = i * r,
      s = n.target,
      f = t.contains(s),
      d = !1,
      u = l > 0,
      m = 0,
      g = 0;
    do {
      var b = or(e, s),
        x = b[0],
        p = b[1],
        h = b[2],
        y = p - h - i * x;
      (x || y) && rr(e, s) && ((m += y), (g += x)), (s = s.parentNode);
    } while ((!f && s !== document.body) || (f && (t.contains(s) || t === s)));
    return (
      ((u && ((o && m === 0) || (!o && l > m))) ||
        (!u && ((o && g === 0) || (!o && -l > g)))) &&
        (d = !0),
      d
    );
  },
  ze = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  tn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  nn = function (e) {
    return e && "current" in e ? e.current : e;
  },
  xa = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  ya = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Ea = 0,
  be = [];
function wa(e) {
  var t = a.exports.useRef([]),
    n = a.exports.useRef([0, 0]),
    r = a.exports.useRef(),
    o = a.exports.useState(Ea++)[0],
    i = a.exports.useState(jt)[0],
    l = a.exports.useRef(e);
  a.exports.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    a.exports.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var p = Wn([e.lockRef.current], (e.shards || []).map(nn), !0).filter(
            Boolean
          );
          return (
            p.forEach(function (h) {
              return h.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                p.forEach(function (h) {
                  return h.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = a.exports.useCallback(function (p, h) {
      if ("touches" in p && p.touches.length === 2)
        return !l.current.allowPinchZoom;
      var y = ze(p),
        S = n.current,
        v = "deltaX" in p ? p.deltaX : S[0] - y[0],
        C = "deltaY" in p ? p.deltaY : S[1] - y[1],
        E,
        M = p.target,
        A = Math.abs(v) > Math.abs(C) ? "h" : "v";
      if ("touches" in p && A === "h" && M.type === "range") return !1;
      var P = en(A, M);
      if (!P) return !0;
      if ((P ? (E = A) : ((E = A === "v" ? "h" : "v"), (P = en(A, M))), !P))
        return !1;
      if (
        (!r.current && "changedTouches" in p && (v || C) && (r.current = E), !E)
      )
        return !0;
      var O = r.current || E;
      return ba(O, h, p, O === "h" ? v : C, !0);
    }, []),
    f = a.exports.useCallback(function (p) {
      var h = p;
      if (!(!be.length || be[be.length - 1] !== i)) {
        var y = "deltaY" in h ? tn(h) : ze(h),
          S = t.current.filter(function (E) {
            return E.name === h.type && E.target === h.target && xa(E.delta, y);
          })[0];
        if (S && S.should) {
          h.cancelable && h.preventDefault();
          return;
        }
        if (!S) {
          var v = (l.current.shards || [])
              .map(nn)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(h.target);
              }),
            C = v.length > 0 ? s(h, v[0]) : !l.current.noIsolation;
          C && h.cancelable && h.preventDefault();
        }
      }
    }, []),
    d = a.exports.useCallback(function (p, h, y, S) {
      var v = { name: p, delta: h, target: y, should: S };
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== v;
          });
        }, 1);
    }, []),
    u = a.exports.useCallback(function (p) {
      (n.current = ze(p)), (r.current = void 0);
    }, []),
    m = a.exports.useCallback(function (p) {
      d(p.type, tn(p), p.target, s(p, e.lockRef.current));
    }, []),
    g = a.exports.useCallback(function (p) {
      d(p.type, ze(p), p.target, s(p, e.lockRef.current));
    }, []);
  a.exports.useEffect(function () {
    return (
      be.push(i),
      e.setCallbacks({
        onScrollCapture: m,
        onWheelCapture: m,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", f, he),
      document.addEventListener("touchmove", f, he),
      document.addEventListener("touchstart", u, he),
      function () {
        (be = be.filter(function (p) {
          return p !== i;
        })),
          document.removeEventListener("wheel", f, he),
          document.removeEventListener("touchmove", f, he),
          document.removeEventListener("touchstart", u, he);
      }
    );
  }, []);
  var b = e.removeScrollBar,
    x = e.inert;
  return a.exports.createElement(
    a.exports.Fragment,
    null,
    x ? a.exports.createElement(i, { styles: ya(o) }) : null,
    b ? a.exports.createElement(tr, { gapMode: e.gapMode }) : null
  );
}
const Ca = Jn(er, wa);
var ar = a.exports.forwardRef(function (e, t) {
  return a.exports.createElement(et, q({}, e, { ref: t, sideCar: Ca }));
});
ar.classNames = et.classNames;
const Sa = ar,
  sr = (e) => {
    const { present: t, children: n } = e,
      r = (function (l) {
        const [s, f] = a.exports.useState(),
          d = a.exports.useRef({}),
          u = a.exports.useRef(l),
          m = a.exports.useRef("none"),
          g = l ? "mounted" : "unmounted",
          [b, x] = (function (p, h) {
            return a.exports.useReducer((y, S) => {
              const v = h[y][S];
              return v != null ? v : y;
            }, p);
          })(g, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended",
            },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
          });
        return (
          a.exports.useEffect(() => {
            const p = Be(d.current);
            m.current = b === "mounted" ? p : "none";
          }, [b]),
          qe(() => {
            const p = d.current,
              h = u.current;
            if (h !== l) {
              const y = m.current,
                S = Be(p);
              l
                ? x("MOUNT")
                : S === "none" || (p == null ? void 0 : p.display) === "none"
                ? x("UNMOUNT")
                : x(h && y !== S ? "ANIMATION_OUT" : "UNMOUNT"),
                (u.current = l);
            }
          }, [l, x]),
          qe(() => {
            if (s) {
              const p = (y) => {
                  const S = Be(d.current).includes(y.animationName);
                  y.target === s && S && x("ANIMATION_END");
                },
                h = (y) => {
                  y.target === s && (m.current = Be(d.current));
                };
              return (
                s.addEventListener("animationstart", h),
                s.addEventListener("animationcancel", p),
                s.addEventListener("animationend", p),
                () => {
                  s.removeEventListener("animationstart", h),
                    s.removeEventListener("animationcancel", p),
                    s.removeEventListener("animationend", p);
                }
              );
            }
            x("ANIMATION_END");
          }, [s, x]),
          {
            isPresent: ["mounted", "unmountSuspended"].includes(b),
            ref: a.exports.useCallback((p) => {
              p && (d.current = getComputedStyle(p)), f(p);
            }, []),
          }
        );
      })(t),
      o =
        typeof n == "function"
          ? n({ present: r.isPresent })
          : a.exports.Children.only(n),
      i = pe(r.ref, o.ref);
    return typeof n == "function" || r.isPresent
      ? a.exports.cloneElement(o, { ref: i })
      : null;
  };
function Be(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
sr.displayName = "Presence";
let ut = 0;
function ka() {
  a.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : rn()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : rn()
      ),
      ut++,
      () => {
        ut === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          ut--;
      }
    );
  }, []);
}
function rn() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const ir = a.exports.forwardRef((e, t) => {
    var n, r;
    const { containerRef: o, style: i, ...l } = e,
      s =
        (n = o == null ? void 0 : o.current) !== null && n !== void 0
          ? n
          : globalThis == null ||
            (r = globalThis.document) === null ||
            r === void 0
          ? void 0
          : r.body,
      [, f] = a.exports.useState({});
    return (
      qe(() => {
        f({});
      }, []),
      s
        ? Ln.createPortal(
            a.exports.createElement(
              oe.div,
              L({ "data-radix-portal": "" }, l, {
                ref: t,
                style:
                  s === document.body
                    ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 2147483647,
                        ...i,
                      }
                    : void 0,
              })
            ),
            s
          )
        : null
    );
  }),
  on = { bubbles: !1, cancelable: !0 },
  $a = a.exports.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, f] = a.exports.useState(null),
      d = Te(o),
      u = Te(i),
      m = a.exports.useRef(null),
      g = pe(t, (p) => f(p)),
      b = a.exports.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    a.exports.useEffect(() => {
      if (r) {
        let p = function (y) {
            if (b.paused || !s) return;
            const S = y.target;
            s.contains(S) ? (m.current = S) : le(m.current, { select: !0 });
          },
          h = function (y) {
            !b.paused &&
              s &&
              (s.contains(y.relatedTarget) || le(m.current, { select: !0 }));
          };
        return (
          document.addEventListener("focusin", p),
          document.addEventListener("focusout", h),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", h);
          }
        );
      }
    }, [r, s, b.paused]),
      a.exports.useEffect(() => {
        if (s) {
          ln.add(b);
          const h = document.activeElement;
          if (!s.contains(h)) {
            const y = new Event("focusScope.autoFocusOnMount", on);
            s.addEventListener("focusScope.autoFocusOnMount", d),
              s.dispatchEvent(y),
              y.defaultPrevented ||
                ((function (S, { select: v = !1 } = {}) {
                  const C = document.activeElement;
                  for (const E of S)
                    if ((le(E, { select: v }), document.activeElement !== C))
                      return;
                })(((p = an(s)), p.filter((S) => S.tagName !== "A")), {
                  select: !0,
                }),
                document.activeElement === h && le(s));
          }
          return () => {
            s.removeEventListener("focusScope.autoFocusOnMount", d),
              setTimeout(() => {
                const y = new Event("focusScope.autoFocusOnUnmount", on);
                s.addEventListener("focusScope.autoFocusOnUnmount", u),
                  s.dispatchEvent(y),
                  y.defaultPrevented ||
                    le(h != null ? h : document.body, { select: !0 }),
                  s.removeEventListener("focusScope.autoFocusOnUnmount", u),
                  ln.remove(b);
              }, 0);
          };
        }
        var p;
      }, [s, d, u, b]);
    const x = a.exports.useCallback(
      (p) => {
        if ((!n && !r) || b.paused) return;
        const h = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          y = document.activeElement;
        if (h && y) {
          const S = p.currentTarget,
            [v, C] = (function (E) {
              const M = an(E),
                A = sn(M, E),
                P = sn(M.reverse(), E);
              return [A, P];
            })(S);
          v && C
            ? p.shiftKey || y !== C
              ? p.shiftKey &&
                y === v &&
                (p.preventDefault(), n && le(C, { select: !0 }))
              : (p.preventDefault(), n && le(v, { select: !0 }))
            : y === S && p.preventDefault();
        }
      },
      [n, r, b.paused]
    );
    return a.exports.createElement(
      oe.div,
      L({ tabIndex: -1 }, l, { ref: g, onKeyDown: x })
    );
  });
function an(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function sn(e, t) {
  for (const n of e) if (!Pa(n, { upTo: t })) return n;
}
function Pa(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function le(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }),
      e !== n &&
        (function (r) {
          return r instanceof HTMLInputElement && "select" in r;
        })(e) &&
        t &&
        e.select();
  }
}
const ln = (function () {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = cn(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = cn(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
})();
function cn(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ma(e) {
  const t = Te(e);
  a.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return (
      document.addEventListener("keydown", n),
      () => document.removeEventListener("keydown", n)
    );
  }, [t]);
}
let dn,
  _e = 0;
function Ta({ disabled: e }) {
  const t = a.exports.useRef(!1);
  qe(() => {
    if (e) {
      let n = function () {
          _e--, _e === 0 && (document.body.style.pointerEvents = dn);
        },
        r = function (o) {
          t.current = o.pointerType !== "mouse";
        };
      return (
        _e === 0 && (dn = document.body.style.pointerEvents),
        (document.body.style.pointerEvents = "none"),
        _e++,
        document.addEventListener("pointerup", r),
        () => {
          t.current ? document.addEventListener("click", n, { once: !0 }) : n(),
            document.removeEventListener("pointerup", r);
        }
      );
    }
  }, [e]);
}
const Aa = a.exports.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Fa = a.exports.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: l,
        onDismiss: s,
        ...f
      } = e,
      d = a.exports.useContext(Aa),
      [u, m] = a.exports.useState(null),
      [, g] = a.exports.useState({}),
      b = pe(t, (M) => m(M)),
      x = Array.from(d.layers),
      [p] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = x.indexOf(p),
      y = u ? x.indexOf(u) : -1,
      S = d.layersWithOutsidePointerEventsDisabled.size > 0,
      v = y >= h,
      C = (function (M) {
        const A = Te(M),
          P = a.exports.useRef(!1);
        return (
          a.exports.useEffect(() => {
            const O = (T) => {
                T.target &&
                  !P.current &&
                  fn("dismissableLayer.pointerDownOutside", A, {
                    originalEvent: T,
                  }),
                  (P.current = !1);
              },
              w = window.setTimeout(() => {
                document.addEventListener("pointerdown", O);
              }, 0);
            return () => {
              window.clearTimeout(w),
                document.removeEventListener("pointerdown", O);
            };
          }, [A]),
          { onPointerDownCapture: () => (P.current = !0) }
        );
      })((M) => {
        const A = M.target,
          P = [...d.branches].some((O) => O.contains(A));
        v &&
          !P &&
          (o == null || o(M),
          l == null || l(M),
          M.defaultPrevented || s == null || s());
      }),
      E = (function (M) {
        const A = Te(M),
          P = a.exports.useRef(!1);
        return (
          a.exports.useEffect(() => {
            const O = (w) => {
              w.target &&
                !P.current &&
                fn("dismissableLayer.focusOutside", A, { originalEvent: w });
            };
            return (
              document.addEventListener("focusin", O),
              () => document.removeEventListener("focusin", O)
            );
          }, [A]),
          {
            onFocusCapture: () => (P.current = !0),
            onBlurCapture: () => (P.current = !1),
          }
        );
      })((M) => {
        const A = M.target;
        [...d.branches].some((P) => P.contains(A)) ||
          (i == null || i(M),
          l == null || l(M),
          M.defaultPrevented || s == null || s());
      });
    return (
      Ma((M) => {
        y === d.layers.size - 1 &&
          (r == null || r(M), M.defaultPrevented || s == null || s());
      }),
      Ta({ disabled: n }),
      a.exports.useEffect(() => {
        u &&
          (n && d.layersWithOutsidePointerEventsDisabled.add(u),
          d.layers.add(u),
          un());
      }, [u, n, d]),
      a.exports.useEffect(
        () => () => {
          u &&
            (d.layers.delete(u),
            d.layersWithOutsidePointerEventsDisabled.delete(u),
            un());
        },
        [u, d]
      ),
      a.exports.useEffect(() => {
        const M = () => g({});
        return (
          document.addEventListener("dismissableLayer.update", M),
          () => document.removeEventListener("dismissableLayer.update", M)
        );
      }, []),
      a.exports.createElement(
        oe.div,
        L({}, f, {
          ref: b,
          style: {
            pointerEvents: S ? (v ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: re(e.onFocusCapture, E.onFocusCapture),
          onBlurCapture: re(e.onBlurCapture, E.onBlurCapture),
          onPointerDownCapture: re(
            e.onPointerDownCapture,
            C.onPointerDownCapture
          ),
        })
      )
    );
  });
function un() {
  const e = new Event("dismissableLayer.update");
  document.dispatchEvent(e);
}
function fn(e, t, n) {
  const r = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  return t && r.addEventListener(e, t, { once: !0 }), !r.dispatchEvent(o);
}
const Na = a.exports.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return a.exports.createElement(
      oe.svg,
      L({}, i, {
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
      }),
      e.asChild
        ? n
        : a.exports.createElement("polygon", { points: "0,0 30,0 15,10" })
    );
  }),
  Ia = Na;
function pn(e) {
  const [t, n] = a.exports.useState(void 0);
  return (
    a.exports.useEffect(() => {
      if (e) {
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let l, s;
          if ("borderBoxSize" in i) {
            const f = i.borderBoxSize,
              d = Array.isArray(f) ? f[0] : f;
            (l = d.inlineSize), (s = d.blockSize);
          } else {
            const f = e.getBoundingClientRect();
            (l = f.width), (s = f.height);
          }
          n({ width: l, height: s });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      }
      n(void 0);
    }, [e]),
    t
  );
}
function Oa(e, t) {
  const n = ce.get(e);
  return (
    n === void 0
      ? (ce.set(e, { rect: {}, callbacks: [t] }),
        ce.size === 1 && (kt = requestAnimationFrame(lr)))
      : (n.callbacks.push(t), t(e.getBoundingClientRect())),
    () => {
      const r = ce.get(e);
      if (r === void 0) return;
      const o = r.callbacks.indexOf(t);
      o > -1 && r.callbacks.splice(o, 1),
        r.callbacks.length === 0 &&
          (ce.delete(e), ce.size === 0 && cancelAnimationFrame(kt));
    }
  );
}
let kt;
const ce = new Map();
function lr() {
  const e = [];
  ce.forEach((t, n) => {
    const r = n.getBoundingClientRect();
    var o, i;
    (o = t.rect),
      (i = r),
      (o.width !== i.width ||
        o.height !== i.height ||
        o.top !== i.top ||
        o.right !== i.right ||
        o.bottom !== i.bottom ||
        o.left !== i.left) &&
        ((t.rect = r), e.push(t));
  }),
    e.forEach((t) => {
      t.callbacks.forEach((n) => n(t.rect));
    }),
    (kt = requestAnimationFrame(lr));
}
function Ra(e) {
  const [t, n] = a.exports.useState();
  return (
    a.exports.useEffect(() => {
      if (e) {
        const r = Oa(e, n);
        return () => {
          n(void 0), r();
        };
      }
    }, [e]),
    t
  );
}
function Da({
  anchorRect: e,
  popperSize: t,
  arrowSize: n,
  arrowOffset: r = 0,
  side: o,
  sideOffset: i = 0,
  align: l,
  alignOffset: s = 0,
  shouldAvoidCollisions: f = !0,
  collisionBoundariesRect: d,
  collisionTolerance: u = 0,
}) {
  if (!e || !t || !d) return { popperStyles: La, arrowStyles: ft };
  const m = (function (A, P, O = 0, w = 0, T) {
      const k = T ? T.height : 0,
        F = mn(P, A, "x"),
        $ = mn(P, A, "y"),
        _ = $.before - O - k,
        I = $.after + O + k,
        W = F.before - O - k,
        D = F.after + O + k;
      return {
        top: {
          start: { x: F.start + w, y: _ },
          center: { x: F.center, y: _ },
          end: { x: F.end - w, y: _ },
        },
        right: {
          start: { x: D, y: $.start + w },
          center: { x: D, y: $.center },
          end: { x: D, y: $.end - w },
        },
        bottom: {
          start: { x: F.start + w, y: I },
          center: { x: F.center, y: I },
          end: { x: F.end - w, y: I },
        },
        left: {
          start: { x: W, y: $.start + w },
          center: { x: W, y: $.center },
          end: { x: W, y: $.end - w },
        },
      };
    })(t, e, i, s, n),
    g = m[o][l];
  if (f === !1) {
    const A = gn(g);
    let P = ft;
    return (
      n &&
        (P = hn({
          popperSize: t,
          arrowSize: n,
          arrowOffset: r,
          side: o,
          align: l,
        })),
      {
        popperStyles: {
          ...A,
          "--radix-popper-transform-origin": vn(t, o, l, r, n),
        },
        arrowStyles: P,
        placedSide: o,
        placedAlign: l,
      }
    );
  }
  const b = DOMRect.fromRect({ ...t, ...g }),
    x =
      ((p = d),
      (h = u),
      DOMRect.fromRect({
        width: p.width - 2 * h,
        height: p.height - 2 * h,
        x: p.left + h,
        y: p.top + h,
      }));
  var p, h;
  const y = xn(b, x),
    S = m[bn(o)][l],
    v = (function (A, P, O) {
      const w = bn(A);
      return P[A] && !O[w] ? w : A;
    })(o, y, xn(DOMRect.fromRect({ ...t, ...S }), x)),
    C = (function (A, P, O, w, T) {
      const k = O === "top" || O === "bottom",
        F = k ? "left" : "top",
        $ = k ? "right" : "bottom",
        _ = k ? "width" : "height",
        I = P[_] > A[_];
      return (w === "start" || w === "center") && ((T[F] && I) || (T[$] && !I))
        ? "end"
        : (w === "end" || w === "center") && ((T[$] && I) || (T[F] && !I))
        ? "start"
        : w;
    })(t, e, o, l, y),
    E = gn(m[v][C]);
  let M = ft;
  return (
    n &&
      (M = hn({
        popperSize: t,
        arrowSize: n,
        arrowOffset: r,
        side: v,
        align: C,
      })),
    {
      popperStyles: {
        ...E,
        "--radix-popper-transform-origin": vn(t, v, C, r, n),
      },
      arrowStyles: M,
      placedSide: v,
      placedAlign: C,
    }
  );
}
function mn(e, t, n) {
  const r = e[n === "x" ? "left" : "top"],
    o = n === "x" ? "width" : "height",
    i = e[o],
    l = t[o];
  return {
    before: r - l,
    start: r,
    center: r + (i - l) / 2,
    end: r + i - l,
    after: r + i,
  };
}
function gn(e) {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "max-content",
    willChange: "transform",
    transform: `translate3d(${Math.round(e.x + window.scrollX)}px, ${Math.round(
      e.y + window.scrollY
    )}px, 0)`,
  };
}
function vn(e, t, n, r, o) {
  const i = t === "top" || t === "bottom",
    l = o ? o.width : 0,
    s = o ? o.height : 0,
    f = l / 2 + r;
  let d = "",
    u = "";
  return (
    i
      ? ((d = { start: `${f}px`, center: "center", end: e.width - f + "px" }[
          n
        ]),
        (u = t === "top" ? `${e.height + s}px` : -s + "px"))
      : ((d = t === "left" ? `${e.width + s}px` : -s + "px"),
        (u = { start: `${f}px`, center: "center", end: e.height - f + "px" }[
          n
        ])),
    `${d} ${u}`
  );
}
const La = {
    position: "fixed",
    top: 0,
    left: 0,
    opacity: 0,
    transform: "translate3d(0, -200%, 0)",
  },
  ft = { position: "absolute", opacity: 0 };
function hn({
  popperSize: e,
  arrowSize: t,
  arrowOffset: n,
  side: r,
  align: o,
}) {
  const i = (e.width - t.width) / 2,
    l = (e.height - t.width) / 2,
    s = { top: 0, right: 90, bottom: 180, left: -90 }[r],
    f = Math.max(t.width, t.height),
    d = {
      width: `${f}px`,
      height: `${f}px`,
      transform: `rotate(${s}deg)`,
      willChange: "transform",
      position: "absolute",
      [r]: "100%",
      direction: za(r, o),
    };
  return (
    (r !== "top" && r !== "bottom") ||
      (o === "start" && (d.left = `${n}px`),
      o === "center" && (d.left = `${i}px`),
      o === "end" && (d.right = `${n}px`)),
    (r !== "left" && r !== "right") ||
      (o === "start" && (d.top = `${n}px`),
      o === "center" && (d.top = `${l}px`),
      o === "end" && (d.bottom = `${n}px`)),
    d
  );
}
function za(e, t) {
  return ((e !== "top" && e !== "right") || t !== "end") &&
    ((e !== "bottom" && e !== "left") || t === "end")
    ? "ltr"
    : "rtl";
}
function bn(e) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[e];
}
function xn(e, t) {
  return {
    top: e.top < t.top,
    right: e.right > t.right,
    bottom: e.bottom > t.bottom,
    left: e.left < t.left,
  };
}
const [cr, dr] = Vn("Popper"),
  [Ba, ur] = cr("Popper"),
  _a = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = a.exports.useState(null);
    return a.exports.createElement(
      Ba,
      { scope: t, anchor: r, onAnchorChange: o },
      n
    );
  },
  Wa = a.exports.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = ur("PopperAnchor", n),
      l = a.exports.useRef(null),
      s = pe(t, l);
    return (
      a.exports.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
      }),
      r ? null : a.exports.createElement(oe.div, L({}, o, { ref: s }))
    );
  }),
  [Va, Ua] = cr("PopperContent"),
  ja = a.exports.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o,
        align: i = "center",
        alignOffset: l,
        collisionTolerance: s,
        avoidCollisions: f = !0,
        ...d
      } = e,
      u = ur("PopperContent", n),
      [m, g] = a.exports.useState(),
      b = Ra(u.anchor),
      [x, p] = a.exports.useState(null),
      h = pn(x),
      [y, S] = a.exports.useState(null),
      v = pn(y),
      C = pe(t, (k) => p(k)),
      E = (function () {
        const [k, F] = a.exports.useState(void 0);
        return (
          a.exports.useEffect(() => {
            let $;
            function _() {
              F({ width: window.innerWidth, height: window.innerHeight });
            }
            function I() {
              window.clearTimeout($), ($ = window.setTimeout(_, 100));
            }
            return (
              _(),
              window.addEventListener("resize", I),
              () => window.removeEventListener("resize", I)
            );
          }, []),
          k
        );
      })(),
      M = E ? DOMRect.fromRect({ ...E, x: 0, y: 0 }) : void 0,
      {
        popperStyles: A,
        arrowStyles: P,
        placedSide: O,
        placedAlign: w,
      } = Da({
        anchorRect: b,
        popperSize: h,
        arrowSize: v,
        arrowOffset: m,
        side: r,
        sideOffset: o,
        align: i,
        alignOffset: l,
        shouldAvoidCollisions: f,
        collisionBoundariesRect: M,
        collisionTolerance: s,
      }),
      T = O !== void 0;
    return a.exports.createElement(
      "div",
      { style: A, "data-radix-popper-content-wrapper": "" },
      a.exports.createElement(
        Va,
        { scope: n, arrowStyles: P, onArrowChange: S, onArrowOffsetChange: g },
        a.exports.createElement(
          oe.div,
          L({ "data-side": O, "data-align": w }, d, {
            style: { ...d.style, animation: T ? void 0 : "none" },
            ref: C,
          })
        )
      )
    );
  }),
  Ga = a.exports.forwardRef(function (e, t) {
    const { __scopePopper: n, offset: r, ...o } = e,
      i = Ua("PopperArrow", n),
      { onArrowOffsetChange: l } = i;
    return (
      a.exports.useEffect(() => l(r), [l, r]),
      a.exports.createElement(
        "span",
        { style: { ...i.arrowStyles, pointerEvents: "none" } },
        a.exports.createElement(
          "span",
          {
            ref: i.onArrowChange,
            style: {
              display: "inline-block",
              verticalAlign: "top",
              pointerEvents: "auto",
            },
          },
          a.exports.createElement(
            Ia,
            L({}, o, { ref: t, style: { ...o.style, display: "block" } })
          )
        )
      )
    );
  }),
  Za = _a,
  qa = Wa,
  Ha = ja,
  Ka = Ga,
  [Xa, oc] = Vn("Popover", [dr]),
  tt = dr(),
  [Ya, Ce] = Xa("Popover"),
  Qa = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: l = !1,
      } = e,
      s = tt(t),
      f = a.exports.useRef(null),
      [d, u] = a.exports.useState(!1),
      [m = !1, g] = Eo({ prop: r, defaultProp: o, onChange: i });
    return a.exports.createElement(
      Za,
      s,
      a.exports.createElement(
        Ya,
        {
          scope: t,
          contentId: wo(),
          triggerRef: f,
          open: m,
          onOpenChange: g,
          onOpenToggle: a.exports.useCallback(() => g((b) => !b), [g]),
          hasCustomAnchor: d,
          onCustomAnchorAdd: a.exports.useCallback(() => u(!0), []),
          onCustomAnchorRemove: a.exports.useCallback(() => u(!1), []),
          modal: l,
        },
        n
      )
    );
  },
  Ja = a.exports.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Ce("PopoverTrigger", n),
      i = tt(n),
      l = pe(t, o.triggerRef),
      s = a.exports.createElement(
        oe.button,
        L(
          {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": pr(o.open),
          },
          r,
          { ref: l, onClick: re(e.onClick, o.onOpenToggle) }
        )
      );
    return o.hasCustomAnchor
      ? s
      : a.exports.createElement(qa, L({ asChild: !0 }, i), s);
  }),
  es = a.exports.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Ce("PopoverContent", e.__scopePopover);
    return a.exports.createElement(
      sr,
      { present: n || o.open },
      o.modal
        ? a.exports.createElement(ts, L({}, r, { ref: t }))
        : a.exports.createElement(ns, L({}, r, { ref: t }))
    );
  }),
  ts = a.exports.forwardRef((e, t) => {
    const { allowPinchZoom: n, portalled: r = !0, ...o } = e,
      i = Ce("PopoverContent", e.__scopePopover),
      l = a.exports.useRef(null),
      s = pe(t, l),
      f = a.exports.useRef(!1);
    a.exports.useEffect(() => {
      const u = l.current;
      if (u) return Kn(u);
    }, []);
    const d = r ? ir : a.exports.Fragment;
    return a.exports.createElement(
      d,
      null,
      a.exports.createElement(
        Sa,
        { allowPinchZoom: n },
        a.exports.createElement(
          fr,
          L({}, o, {
            ref: s,
            trapFocus: i.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: re(e.onCloseAutoFocus, (u) => {
              var m;
              u.preventDefault(),
                f.current ||
                  (m = i.triggerRef.current) === null ||
                  m === void 0 ||
                  m.focus();
            }),
            onPointerDownOutside: re(
              e.onPointerDownOutside,
              (u) => {
                const m = u.detail.originalEvent,
                  g = m.button === 0 && m.ctrlKey === !0,
                  b = m.button === 2 || g;
                f.current = b;
              },
              { checkForDefaultPrevented: !1 }
            ),
            onFocusOutside: re(e.onFocusOutside, (u) => u.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
          })
        )
      )
    );
  }),
  ns = a.exports.forwardRef((e, t) => {
    const { portalled: n = !0, ...r } = e,
      o = Ce("PopoverContent", e.__scopePopover),
      i = a.exports.useRef(!1),
      l = n ? ir : a.exports.Fragment;
    return a.exports.createElement(
      l,
      null,
      a.exports.createElement(
        fr,
        L({}, r, {
          ref: t,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          onCloseAutoFocus: (s) => {
            var f, d;
            (f = e.onCloseAutoFocus) === null || f === void 0 || f.call(e, s),
              s.defaultPrevented ||
                (i.current ||
                  (d = o.triggerRef.current) === null ||
                  d === void 0 ||
                  d.focus(),
                s.preventDefault()),
              (i.current = !1);
          },
          onInteractOutside: (s) => {
            var f, d;
            (f = e.onInteractOutside) === null || f === void 0 || f.call(e, s),
              s.defaultPrevented || (i.current = !0);
            const u = s.target;
            !((d = o.triggerRef.current) === null || d === void 0) &&
              d.contains(u) &&
              s.preventDefault();
          },
        })
      )
    );
  }),
  fr = a.exports.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: l,
        onEscapeKeyDown: s,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: u,
        ...m
      } = e,
      g = Ce("PopoverContent", n),
      b = tt(n);
    return (
      ka(),
      a.exports.createElement(
        $a,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
        },
        a.exports.createElement(
          Fa,
          {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onInteractOutside: u,
            onEscapeKeyDown: s,
            onPointerDownOutside: f,
            onFocusOutside: d,
            onDismiss: () => g.onOpenChange(!1),
          },
          a.exports.createElement(
            Ha,
            L(
              { "data-state": pr(g.open), role: "dialog", id: g.contentId },
              b,
              m,
              {
                ref: t,
                style: {
                  ...m.style,
                  "--radix-popover-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                },
              }
            )
          )
        )
      )
    );
  }),
  rs = a.exports.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Ce("PopoverClose", n);
    return a.exports.createElement(
      oe.button,
      L({ type: "button" }, r, {
        ref: t,
        onClick: re(e.onClick, () => o.onOpenChange(!1)),
      })
    );
  }),
  os = a.exports.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = tt(n);
    return a.exports.createElement(Ka, L({}, o, r, { ref: t }));
  });
function pr(e) {
  return e ? "open" : "closed";
}
const mr = Qa,
  gr = Ja,
  vr = es,
  hr = rs,
  br = os,
  as = ae({
    "0%": { opacity: 0, transform: "translateY(2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  ss = ae({
    "0%": { opacity: 0, transform: "translateX(-2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  }),
  is = ae({
    "0%": { opacity: 0, transform: "translateY(-2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  ls = ae({
    "0%": { opacity: 0, transform: "translateX(2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  }),
  cs = we(vr, {
    borderRadius: 4,
    padding: 20,
    width: 260,
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      animationFillMode: "forwards",
      willChange: "transform, opacity",
      '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: is },
        '&[data-side="right"]': { animationName: ls },
        '&[data-side="bottom"]': { animationName: as },
        '&[data-side="left"]': { animationName: ss },
      },
    },
    variants: {
      theme: {
        dark: { backgroundColor: "#1a1a1a", color: "#FFFFFF" },
        light: { backgroundColor: "#FFFFFF", color: "#1a1a1a" },
        whatsapp: {
          background: "var(--background-default)",
          color: "var(--primary)",
        },
      },
    },
  }),
  ds = we(br, {
    variants: {
      theme: {
        dark: { fill: "#1a1a1a" },
        light: { fill: "#FFFFFF" },
        whatsapp: { fill: "var(--background-default)" },
      },
    },
  }),
  us = we(hr, {
    all: "unset",
    fontFamily: "inherit",
    borderRadius: "100%",
    height: 25,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    border: "1px solid red",
    top: 5,
    right: 5,
    "&:hover": { backgroundColor: G(0.85, "red") },
  }),
  fs = mr,
  ps = gr,
  ms = cs,
  gs = ds,
  vs = us;
function hs({ children: e, trigger: t, triggerAsChild: n, theme: r, side: o }) {
  return c.createElement(
    fs,
    null,
    c.createElement(ps, { asChild: !!n }, t),
    c.createElement(
      ms,
      { side: o, sideOffset: 5, theme: r },
      e,
      c.createElement(gs, { theme: r }),
      c.createElement(
        vs,
        { "aria-label": "Close" },
        c.createElement(zn, { fill: "red" })
      )
    )
  );
}
function Gt(e) {
  return N.Chat.getModelsArray().find((n) => n.id.toString() === e);
}
function bs({ isOpen: e, onRequestClose: t }) {
  function n() {
    return at.getFunnels().filter((m) => m.status === "running");
  }
  const [r, o] = a.exports.useState(n());
  a.exports.useEffect(() => {
    setTimeout(() => {
      o(n());
    }, 1e3);
  }, [r]);
  const [i, l] = a.exports.useState(!1),
    s = {
      details: {
        title: "Carregando...",
        okTitle: "Carregando...",
        cancelTitle: "Carregando...",
        fillCancel: "grey",
        fillOk: Z.red,
      },
      onRequestOk: async () => {
        console.log("Default onRequestOk Cancel Funnel");
      },
      isOpen: !1,
      onRequestClose: () => {
        l(!1);
      },
    },
    [f, d] = a.exports.useState(s);
  return c.createElement(
    Bn,
    {
      closeTimeoutMS: 400,
      isOpen: e,
      onRequestClose: () => {
        t();
      },
      overlayClassName: "react-modal-overlay",
      className: "react-modal-content relative h-full",
    },
    c.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          t();
        },
        className: "react-modal-close",
      },
      c.createElement(ro, { fill: Z.red })
    ),
    c.createElement(
      "h2",
      { className: "text-xl font-bold text-center" },
      r.length > 0 && r.length,
      " ",
      r.length === 1 ? "Funil" : "Funis",
      " em andamento"
    ),
    c.createElement(
      "div",
      { className: "w-full h-full  relative overflow-y-scroll" },
      c.createElement(
        "div",
        { className: "absolute top-0 py-4 flex flex-col items-center w-full" },
        r.length === 0 &&
          c.createElement(
            "span",
            null,
            "Nenhum funil est\xE1 sendo enviado no momento."
          ),
        r.map((u) => {
          var y, S, v, C, E, M;
          const m = u.current
              ? _n((y = u.current) == null ? void 0 : y.type)
              : oo,
            g = N.ProfilePicThumb.getModelsArray().find(
              (A) => A.id._serialized === u.targetId
            ),
            b = Gt(u.targetId),
            x =
              ((S = u == null ? void 0 : u.current) == null
                ? void 0
                : S.expectDeliveryTimestamp) &&
              ((v = u == null ? void 0 : u.current) == null
                ? void 0
                : v.expectDeliveryTimestamp) - Date.now(),
            p = x && Math.floor(x / 1e3 / 60),
            h = x && Math.floor((x / 1e3) % 60);
          return c.createElement(
            "div",
            {
              key: u.generatedId,
              className:
                "flex items-center justify-between bg-[var(--panel-header-background)] p-4 rounded-lg my-1 w-full",
            },
            c.createElement(
              "div",
              null,
              c.createElement(
                "div",
                { className: "flex items-center justify-start" },
                c.createElement(
                  "div",
                  { className: "w-12 h-12 p-1 grid place-items-center" },
                  g != null && g.img
                    ? c.createElement("img", {
                        src: g.img,
                        alt: "Foto do contato",
                        className: " w-full h-full rounded-full",
                      })
                    : c.createElement(Rn, {
                        className:
                          "fill-[var(--avatar-placeholder-primary)] bg-[var(--avatar-placeholder-background)] w-full h-full  rounded-full",
                      })
                ),
                c.createElement(
                  "span",
                  null,
                  b == null ? void 0 : b.formattedTitle,
                  ((C = b == null ? void 0 : b.contact) == null
                    ? void 0
                    : C.isAddressBookContact) === 0 &&
                    ((E = b == null ? void 0 : b.contact) == null
                      ? void 0
                      : E.notifyName) &&
                    ` ( ${
                      (M = b == null ? void 0 : b.contact) == null
                        ? void 0
                        : M.notifyName
                    } )`
                )
              ),
              c.createElement(
                "div",
                { className: "flex items-center justify-start" },
                c.createElement(
                  "div",
                  { className: "w-12 h-12 p-1 grid place-items-center" },
                  c.createElement(Fe, {
                    className: "fill-zap-gold w-3/4 h-3/4",
                  })
                ),
                c.createElement("span", null, u.funnel.name)
              )
            ),
            c.createElement(
              "div",
              { className: "text-left" },
              !!u.current &&
                c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    "div",
                    { className: "flex items-center justify-between" },
                    c.createElement("span", null, "Atual:"),
                    c.createElement(m, null),
                    c.createElement(
                      "span",
                      null,
                      "(",
                      u.current.queuePosition,
                      "/",
                      u.current.queueLength,
                      ")"
                    )
                  ),
                  c.createElement("div", null, "Ser\xE1 enviado em"),
                  c.createElement(
                    "div",
                    { className: "text-center" },
                    p,
                    "min e ",
                    h,
                    "seg"
                  )
                ),
              c.createElement(
                "button",
                {
                  onClick: () => {
                    d({
                      ...f,
                      details: {
                        ...f.details,
                        title: `Tem certeza que deseja cancelar o funil no chat: ${b.formattedTitle}?`,
                        description:
                          "Voc\xEA poder\xE1 reenviar o funil a partir de um item clicando na \u{1F50E} lupa do funil dentro da extens\xE3o",
                        cancelTitle: "Cancelar",
                        okTitle: "Cancelar Funil",
                      },
                      onRequestOk: async () => {
                        l(!1), u.stopFunction();
                      },
                    }),
                      l(!0);
                  },
                  className: "bg-zap-red p-2 rounded-lg mt-2 hover:opacity-80",
                },
                "Cancelar Funil"
              )
            )
          );
        }),
        c.createElement(_t, { ...f, isOpen: i })
      )
    )
  );
}
async function xs() {
  return new Promise((e, t) => {
    chrome.runtime.sendMessage(
      H,
      { type: "getFlags", data: {} },
      async ({ type: n, response: r }) => n === "getFlags" && e(r)
    );
  });
}
const $t = { eventName: "ZVEvent" };
function ys(e) {
  const t = new CustomEvent($t.eventName, { detail: e });
  window.dispatchEvent(t);
}
const xr = a.exports.createContext({});
class Es {
  constructor() {
    Ht(this, "fired", !1);
  }
  async fire(t, n) {
    if (!t || !n || this.fired) return;
    this.fired = !0;
    const r = await So("chave");
    setTimeout(
      () =>
        ys({
          type: "ads",
          item: {
            id: "warning-key",
            title:
              "A chave do Zap Voice que voc\xEA est\xE1 utilizando est\xE1 atribu\xEDda a outro n\xFAmero de telefone.",
            description:
              "*Voc\xEA ainda tem a possibilidade de usar o ZapVoice por um tempo para regularizar seu acesso. Clique no bot\xE3o abaixo e entre em contato com o suporte para regulariza\xE7\xE3o o mais breve poss\xEDvel.",
            image:
              "https://zapvoice.com.br/wp-content/uploads/2023/08/Frame-1.png",
            canSetAsSeen: !1,
            footer:
              "Caso nenhuma a\xE7\xE3o seja tomada, o acesso poder\xE1 ser bloqueado em breve",
            cta: {
              text: "Clique para Suporte",
              url: `https://wa.me/5514991238006?text=Recebi%20um%20aviso%20de%20chave%20no%20Zap%20Voice%20e%20gostaria%20de%20resolver%20o%20problema%20chave%20${r}`,
              closeAfterClick: !0,
            },
          },
        }),
      5e3
    );
  }
}
const ws = new Es();
function Cs({ children: e }) {
  const { isPremium: t, keyData: n, number_warning: r } = Vt(),
    [o, i] = a.exports.useState({});
  t && r && o.keyWarningAd === !0 && ws.fire(t, r);
  function l() {
    xs().then((s) => {
      s && Object.keys(s).length > 0 && i(s);
    });
  }
  return (
    a.exports.useEffect(() => {
      l();
    }, [t, n]),
    c.createElement(xr.Provider, { value: { flags: o, refreshFlags: l } }, e)
  );
}
function Zt() {
  return a.exports.useContext(xr);
}
async function Ss() {
  return new Promise((e, t) => {
    chrome.runtime.sendMessage(
      H,
      { type: "openOptionsPage", data: {} },
      async ({ type: n, response: r }) => n === "openOptionsPage" && e()
    );
  });
}
function yr({ children: e }) {
  const [t, n] = a.exports.useState(!1);
  function r() {
    n(!0);
  }
  function o() {
    n(!1);
  }
  const {
      shouldAskToSendShortcuts: i,
      shouldHideShortcuts: l,
      shouldHideCurrentFunnelPopover: s,
      shouldMentionAllUsersOnGroup: f,
      toggleShouldAskToSendShortcuts: d,
      toggleShouldHideShortcuts: u,
      toggleShouldHideCurrentFunnelPopover: m,
      toggleShouldMentionAllUsersOnGroup: g,
    } = Ut(),
    { flags: b } = Zt();
  return c.createElement(
    "div",
    { style: { marginLeft: "10px" } },
    c.createElement(
      hs,
      {
        theme: "whatsapp",
        side: "bottom",
        trigger: c.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
          e
        ),
      },
      c.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
            marginTop: "1rem",
          },
        },
        c.createElement(
          "h1",
          {
            style: {
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            },
          },
          "Personaliza\xE7\xE3o ZapVoice"
        ),
        c.createElement(
          "div",
          {
            className:
              "grid grid-cols-[1fr_auto] items-center w-full bg-[var(--panel-header-background)] p-1 mb-1 rounded",
          },
          c.createElement("span", null, "Ocultar atalhos"),
          c.createElement(Ie, {
            zvTheme: "dark",
            checked: !!l,
            onChange: u,
            className: "ml-2",
          })
        ),
        c.createElement(
          "div",
          {
            className:
              "grid grid-cols-[1fr_auto] items-center w-full bg-[var(--panel-header-background)] p-1 mb-1 rounded",
          },
          c.createElement("span", null, "Perguntar ao enviar itens \xFAnicos"),
          c.createElement(Ie, {
            zvTheme: "dark",
            checked: !!i,
            onChange: d,
            className: "ml-2",
          })
        ),
        c.createElement(
          "div",
          {
            className:
              "grid grid-cols-[1fr_auto] items-center w-full bg-[var(--panel-header-background)] p-1 mb-1 rounded",
          },
          c.createElement("span", null, "Ocultar indicador do funil atual"),
          c.createElement(Ie, {
            zvTheme: "dark",
            checked: !!s,
            onChange: m,
            className: "ml-2",
          })
        ),
        !!b.mentionAllUsersFromGroup &&
          c.createElement(
            "div",
            {
              className:
                "grid grid-cols-[1fr_auto] items-center w-full bg-[var(--panel-header-background)] p-1 mb-1 rounded",
            },
            c.createElement(
              "span",
              null,
              "Mencionar todos os participantes do grupo ao enviar pelo ZapVoice"
            ),
            c.createElement(Ie, {
              zvTheme: "dark",
              checked: !!f,
              onChange: g,
              className: "ml-2",
            })
          ),
        c.createElement(
          "div",
          null,
          c.createElement(
            "button",
            {
              type: "button",
              onClick: () => {
                r();
              },
              className:
                "bg-zap-yellow p-2 mt-2 text-white font-bold rounded flex items-center justify-center ",
            },
            c.createElement(
              "div",
              { className: "w-10 rounded-full grid place-items-center" },
              c.createElement(Fe, { className: "text-white h-full w-full" })
            ),
            "Status dos funis em andamento"
          ),
          c.createElement(bs, { isOpen: t, onRequestClose: o }),
          c.createElement(
            "button",
            {
              onClick: () => {
                Ss();
              },
              type: "button",
              className:
                "w-full bg-zap-veryperi p-2 mt-2 text-white font-bold rounded flex items-center justify-center",
            },
            "Abrir Dashboard"
          )
        )
      )
    )
  );
}
function Er(e) {
  return a.exports.createElement(
    "svg",
    {
      width: 128,
      height: 128,
      viewBox: "0 0 128 128",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
    },
    a.exports.createElement(
      "g",
      { clipPath: "url(#clip0_4_3)", fillRule: "evenodd", clipRule: "evenodd" },
      a.exports.createElement("path", {
        opacity: 0.957,
        d: "M62.5-.5h8c.342.838 1.008 1.172 2 1a98.284 98.284 0 001 19.5c-1.519-.33-2.852-.164-4 .5a27.426 27.426 0 00-11-2c.313-.889 1.48-1.555 3.5-2 .5-5.657.666-11.324.5-17z",
        fill: "#7D62EE",
      }),
      a.exports.createElement("path", {
        opacity: 0.962,
        d: "M57.5-.5h5c.166 5.676 0 11.343-.5 17-2.02.445-3.187 1.111-3.5 2-1.43 1.038-3.097 1.704-5 2-.892-5.871-1.226-12.205-1-19l5-2z",
        fill: "#7970ED",
      }),
      a.exports.createElement("path", {
        opacity: 0.988,
        d: "M72.5.5a54.029 54.029 0 019 2c-.33 22.506.003 44.84 1 67-2.837 6.838-7.837 11.171-15 13a8.434 8.434 0 01-4-.5c.752-.67 1.086-1.504 1-2.5 8.147-1.812 12.814-6.812 14-15a50.441 50.441 0 01-10-.5c-2.87-2.84-2.537-5.173 1-7a40.936 40.936 0 019-.5v-4a40.936 40.936 0 01-9-.5c-3.359-2.034-3.692-4.368-1-7a50.441 50.441 0 0110-.5v-5a50.441 50.441 0 01-10-.5c-2.667-2.333-2.667-4.667 0-7a52.204 52.204 0 0010-1.5c-1.628-4.625-4.628-7.959-9-10 1.148-.664 2.481-.83 4-.5a98.284 98.284 0 01-1-19.5z",
        fill: "#7E57EE",
      }),
      a.exports.createElement("path", {
        opacity: 0.992,
        d: "M52.5 1.5c-.226 6.795.108 13.129 1 19-2.605 1.837-4.772 4.17-6.5 7a8.434 8.434 0 00-.5 4 32.437 32.437 0 018 .5c2.554 2.27 2.554 4.602 0 7a40.936 40.936 0 01-9 .5v4c2.885-.306 5.552.027 8 1a32.437 32.437 0 00-8 .5l9 1c1.333 1.333 1.333 2.667 0 4-11.982.83-11.982 1.33 0 1.5-2.787.977-5.787 1.31-9 1v4a40.936 40.936 0 019 .5c2.148 2.075 2.482 4.408 1 7-3.525.179-6.859.679-10 1.5-.806 4.589.86 8.422 5 11.5-.667.667-1.333.667-2 0a31.992 31.992 0 01-5.5-7.5c-.399.228-.565.562-.5 1-1.518-3.034-2.351-6.368-2.5-10-.816-1.323-1.983-1.99-3.5-2-.014-1.112.986-1.279 3-.5 1.393 1.171 2.227 2.671 2.5 4.5.5-19.664.667-39.33.5-59a27.55 27.55 0 0110-2z",
        fill: "#787DEE",
      }),
      a.exports.createElement("path", {
        opacity: 0.991,
        d: "M81.5 2.5a31.703 31.703 0 016 2c.645 18.07-.022 35.904-2 53.5l5 1c-.556.383-.89.883-1 1.5-1.542-.8-3.209-1.134-5-1a78.439 78.439 0 01-2 10c-.997-22.16-1.33-44.494-1-67z",
        fill: "#824DEF",
      }),
      a.exports.createElement("path", {
        opacity: 0.988,
        d: "M42.5 3.5c.167 19.67 0 39.336-.5 59-.273-1.829-1.107-3.329-2.5-4.5-2.014-.779-3.014-.612-3 .5-1.082 1.094-1.748 2.427-2 4a168.87 168.87 0 004 14 30.112 30.112 0 003.5 6c.5 14.663.667 29.33.5 44h-10V7.5a91.56 91.56 0 0110-4z",
        fill: "#748AED",
      }),
      a.exports.createElement("path", {
        opacity: 0.988,
        d: "M87.5 4.5a54.304 54.304 0 019 4v108c-2.747 2.707-6.08 4.373-10 5a245.884 245.884 0 000-44 7.253 7.253 0 00-2.5 2c-.399-.228-.565-.562-.5-1 3.789-5.367 5.789-11.367 6-18 .11-.617.444-1.117 1-1.5l-5-1c1.978-17.596 2.645-35.43 2-53.5z",
        fill: "#8343EE",
      }),
      a.exports.createElement("path", {
        opacity: 0.989,
        d: "M32.5 7.5v119h-6v-115c1.705-1.692 3.705-3.025 6-4z",
        fill: "#7293EE",
      }),
      a.exports.createElement("path", {
        opacity: 0.99,
        d: "M26.5 11.5v115h-4v-112c.936-1.474 2.27-2.474 4-3z",
        fill: "#7199ED",
      }),
      a.exports.createElement("path", {
        opacity: 0.988,
        d: "M96.5 8.5a58.52 58.52 0 0110 8v93c-2.775 3.105-6.108 5.438-10 7V8.5z",
        fill: "#8636EF",
      }),
      a.exports.createElement("path", {
        opacity: 0.986,
        d: "M22.5 14.5v112h-5v-108c1.08-2.043 2.746-3.376 5-4z",
        fill: "#709FED",
      }),
      a.exports.createElement("path", {
        opacity: 0.987,
        d: "M17.5 18.5v108h-5v-102c.943-2.61 2.61-4.61 5-6z",
        fill: "#6EA5ED",
      }),
      a.exports.createElement("path", {
        opacity: 0.998,
        d: "M58.5 18.5c3.819-.086 7.485.58 11 2 4.372 2.041 7.372 5.375 9 10a52.204 52.204 0 01-10 1.5c-2.667 2.333-2.667 4.667 0 7 3.317.498 6.65.665 10 .5v5a50.441 50.441 0 00-10 .5c-2.692 2.632-2.359 4.966 1 7 2.982.498 5.982.665 9 .5v4a40.936 40.936 0 00-9 .5c-3.537 1.827-3.87 4.16-1 7 3.317.498 6.65.665 10 .5-1.186 8.188-5.853 13.188-14 15-10.314.681-16.647-3.986-19-14 3.141-.821 6.475-1.321 10-1.5 1.482-2.592 1.148-4.925-1-7a40.936 40.936 0 00-9-.5v-4c3.213.31 6.213-.023 9-1 1.941-1.51 2.441-3.51 1.5-6-.67-.752-1.504-1.086-2.5-1-2.448-.973-5.115-1.306-8-1v-4a40.936 40.936 0 009-.5c2.554-2.398 2.554-4.73 0-7a32.437 32.437 0 00-8-.5 8.434 8.434 0 01.5-4c1.728-2.83 3.895-5.163 6.5-7 1.903-.296 3.57-.962 5-2z",
        fill: "#FAF9FE",
      }),
      a.exports.createElement("path", {
        opacity: 0.977,
        d: "M106.5 16.5c3.734 2.731 6.734 6.064 9 10-.331 24.172.002 48.172 1 72a39.312 39.312 0 01-10 11v-93z",
        fill: "#892AEF",
      }),
      a.exports.createElement("path", {
        opacity: 0.984,
        d: "M12.5 24.5v102h-5v-95c.933-2.87 2.6-5.204 5-7z",
        fill: "#6DABED",
      }),
      a.exports.createElement("path", {
        opacity: 0.976,
        d: "M115.5 26.5c5.602 7.205 9.602 15.205 12 24v24c-2.029 8.727-5.696 16.727-11 24a1296.165 1296.165 0 01-1-72z",
        fill: "#8B20F0",
      }),
      a.exports.createElement("path", {
        opacity: 0.976,
        d: "M7.5 31.5v95c-3.178-.844-5.845-2.511-8-5v-70a73.81 73.81 0 018-20z",
        fill: "#6CB2ED",
      }),
      a.exports.createElement("path", {
        opacity: 0.976,
        d: "M53.5 44.5c.996-.086 1.83.248 2.5 1 .941 2.49.441 4.49-1.5 6-11.982-.17-11.982-.67 0-1.5 1.333-1.333 1.333-2.667 0-4l-9-1a32.437 32.437 0 018-.5z",
        fill: "#6662EB",
      }),
      a.exports.createElement("path", {
        opacity: 0.996,
        d: "M36.5 58.5c1.517.01 2.684.677 3.5 2 .149 3.632.982 6.966 2.5 10 5.161 10.748 13.495 14.748 25 12 7.163-1.829 12.163-6.162 15-13a78.439 78.439 0 002-10c1.791-.134 3.458.2 5 1-.211 6.633-2.211 12.633-6 18l-8 7c-3.35 1.003-6.683 2.003-10 3-.986 4.47-1.32 9.137-1 14h8c2.584.548 3.584 2.215 3 5-.473 1.406-1.473 2.073-3 2-7.34.166-14.674 0-22-.5-2.634-2.293-2.634-4.46 0-6.5h9c.32-4.863-.014-9.53-1-14-4.686-.847-9.02-2.513-13-5-2-2.667-4.333-5-7-7a168.87 168.87 0 01-4-14c.252-1.573.918-2.906 2-4z",
        fill: "#FAF9FE",
      }),
      a.exports.createElement("path", {
        d: "M45.5 65.5c2.353 10.014 8.686 14.681 19 14 .086.996-.248 1.83-1 2.5a8.434 8.434 0 004 .5c-11.505 2.748-19.839-1.252-25-12-.065-.438.101-.772.5-1a31.992 31.992 0 005.5 7.5c.667.667 1.333.667 2 0-4.14-3.078-5.806-6.911-5-11.5z",
        fill: "#746DED",
      }),
      a.exports.createElement("path", {
        opacity: 0.988,
        d: "M38.5 76.5c2.667 2 5 4.333 7 7-1.238.31-1.238.81 0 1.5l8 4c-.43 4.392-1.43 8.559-3 12.5v1c-2.634 2.04-2.634 4.207 0 6.5 7.326.5 14.66.666 22 .5-2.787.977-5.787 1.31-9 1-4.817-.61-6.817-.277-6 1v15h-15c.167-14.67 0-29.337-.5-44a30.112 30.112 0 01-3.5-6z",
        fill: "#787CEE",
      }),
      a.exports.createElement("path", {
        opacity: 0.988,
        d: "M86.5 121.5c-4.388 1.934-9.055 3.267-14 4v-14c-3.213.31-6.213-.023-9-1 3.213.31 6.213-.023 9-1 1.527.073 2.527-.594 3-2 1.507-3.891 2.174-8.058 2-12.5-.097-3.433-.763-6.6-2-9.5l8-7c-.065.438.101.772.5 1a7.253 7.253 0 012.5-2 245.884 245.884 0 010 44z",
        fill: "#8052EE",
      }),
      a.exports.createElement("path", {
        d: "M75.5 85.5c1.237 2.9 1.903 6.067 2 9.5.174 4.442-.493 8.609-2 12.5.584-2.785-.416-4.452-3-5-2.107-.968-4.44-1.302-7-1v-13c3.317-.997 6.65-1.997 10-3z",
        fill: "#7D5BEE",
      }),
      a.exports.createElement("path", {
        d: "M45.5 83.5c3.98 2.487 8.314 4.153 13 5v13h-8c1.57-3.941 2.57-8.108 3-12.5l-8-4c-1.238-.69-1.238-1.19 0-1.5z",
        fill: "#746DED",
      }),
      a.exports.createElement("path", {
        opacity: 0.979,
        d: "M58.5 88.5c.986 4.47 1.32 9.137 1 14h-9v-1h8v-13z",
        fill: "#AAA2F4",
      }),
      a.exports.createElement("path", {
        opacity: 0.958,
        d: "M65.5 88.5v13c2.56-.302 4.893.032 7 1h-8c-.32-4.863.014-9.53 1-14z",
        fill: "#CABFF8",
      }),
      a.exports.createElement("path", {
        opacity: 0.942,
        d: "M63.5 110.5c2.787.977 5.787 1.31 9 1v14c-4.982.553-9.982.887-15 1v-15c-.817-1.277 1.183-1.61 6-1z",
        fill: "#7C66EE",
      })
    ),
    a.exports.createElement(
      "defs",
      null,
      a.exports.createElement(
        "clipPath",
        { id: "clip0_4_3" },
        a.exports.createElement("path", { fill: "#fff", d: "M0 0H128V128H0z" })
      )
    )
  );
}
function ks({
  currentActionIndexes: e,
  setFunnelPopUp: t,
  reloadCurrentActionIndexes: n,
}) {
  var x, p, h, y, S;
  const { refreshFlags: r } = Zt(),
    { shouldAskToSendShortcuts: o } = Ut(),
    { isPremium: i, keyData: l, refreshPremium: s } = Vt(),
    [f, d] = a.exports.useState(!1);
  function u(v) {
    d(v != null ? v : !f);
  }
  const m = {
      details: {
        title: "Carregando...",
        okTitle: "Carregando...",
        cancelTitle: "Carregando...",
        fillCancel: "grey",
        fillOk: Z.green,
      },
      onRequestOk: async () => {
        console.log("Default onRequestOk SimpleModal");
      },
      isOpen: !1,
      onRequestClose: () => {
        u(!1);
      },
    },
    [g, b] = a.exports.useState(m);
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(
      yr,
      null,
      c.createElement(
        "div",
        { className: " w-7 h-7 mx-2" },
        c.createElement(Er, { style: { width: "100%", height: "100%" } })
      )
    ),
    c.createElement(
      "div",
      {
        id: "actionsContainerZV",
        style: {
          display: "flex",
          flex: 1,
          alignItems: "center",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
        },
        onWheel: (v) => {
          const { deltaY: C } = v,
            E = document.getElementById("actionsContainerZV");
          E == null ||
            E.scrollTo({ top: 0, left: E.scrollLeft + C, behavior: "smooth" });
        },
      },
      c.createElement(_t, { ...g, isOpen: f }),
      ((x = e.funis.filter((v) => (v == null ? void 0 : v.data))) == null
        ? void 0
        : x.length) > 0 &&
        e.funis.map(
          (v) =>
            v.data &&
            v.data.length > 0 &&
            c.createElement(
              "div",
              {
                className: "btnSendContainerZV funnelContainer",
                style: { flex: "none" },
                key: v.id,
              },
              c.createElement(
                "button",
                {
                  type: "button",
                  className: "btnSendItemZV funnelBtn",
                  style: {
                    background: G(0.5, Z.gold),
                    color: "var(--primary)",
                    fontWeight: "500",
                    padding: "0.25rem",
                    borderRadius: "0.5rem",
                    margin: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                  onClick: () => {
                    if (!i)
                      z.error(
                        `${l} => Funis n\xE3o liberados, considere assinar a vers\xE3o PREMIUM`,
                        { theme: "colored", autoClose: 3e3 }
                      ),
                        s();
                    else {
                      if (!v.data || v.data.length === 0) return;
                      t(v);
                    }
                  },
                },
                c.createElement(
                  "div",
                  {
                    style: {
                      width: "1rem",
                      height: "1rem",
                      marginRight: "0.25rem",
                      display: "grid",
                      placeItems: "center",
                    },
                  },
                  c.createElement(Fe, null)
                ),
                v.name
              )
            )
        ),
      ((p = e.audiosIndex) == null ? void 0 : p.length) > 0 &&
        e.audiosIndex.map((v, C) =>
          c.createElement(
            "div",
            {
              className: "btnSendContainerZV audioContainer",
              style: { flex: "none" },
              key: v == null ? void 0 : v.id,
            },
            c.createElement(
              "button",
              {
                type: "button",
                className: "btnSendItemZV audioBtn",
                style: {
                  background: G(0.5, Z.blue),
                  color: "var(--primary)",
                  fontWeight: "500",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  margin: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                onClick: () => {
                  const E = ne();
                  if (!E) {
                    z.error("Nenhum chat aberto, envio cancelado");
                    return;
                  }
                  o
                    ? (b({
                        ...g,
                        details: {
                          ...g.details,
                          title: `Enviar \xE1udio para ${E.formattedTitle}?`,
                          description: `Item => ${v.name}`,
                          cancelTitle: "Cancelar",
                          okTitle: "Enviar \xC1udio",
                        },
                        onRequestOk: async () => {
                          u(!1),
                            Q.add({ itemId: v.id, chatId: E.id.toString() });
                        },
                      }),
                      u(!0))
                    : Q.add({ itemId: v.id, chatId: E.id.toString() });
                },
              },
              c.createElement(
                "div",
                {
                  style: {
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                    display: "grid",
                    placeItems: "center",
                  },
                },
                c.createElement(ao, null)
              ),
              v.name
            )
          )
        ),
      ((h = e.mensagensIndex) == null ? void 0 : h.length) > 0 &&
        e.mensagensIndex.map((v, C) =>
          c.createElement(
            "div",
            {
              className: "btnSendContainerZV messageContainer",
              style: { flex: "none" },
              key: v == null ? void 0 : v.id,
            },
            c.createElement(
              "button",
              {
                type: "button",
                className: "btnSendItemZV messageBtn",
                style: {
                  background: G(0.5, Z.purple),
                  color: "var(--primary)",
                  fontWeight: "500",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  margin: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                onClick: () => {
                  const E = ne();
                  if (!E) {
                    z.error("Nenhum chat aberto, envio cancelado");
                    return;
                  }
                  o
                    ? (b({
                        ...g,
                        details: {
                          ...g.details,
                          title: `Enviar mensagem para ${E.formattedTitle}?`,
                          description: `Item => ${v.name}`,
                          cancelTitle: "Cancelar",
                          okTitle: "Enviar Mensagem",
                        },
                        onRequestOk: async () => {
                          u(!1),
                            Q.add({ itemId: v.id, chatId: E.id.toString() });
                        },
                      }),
                      u(!0))
                    : Q.add({ itemId: v.id, chatId: E.id.toString() });
                },
              },
              c.createElement(
                "div",
                {
                  style: {
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                    display: "grid",
                    placeItems: "center",
                  },
                },
                c.createElement(so, null)
              ),
              v.name
            )
          )
        ),
      ((y = e.mediasIndex) == null ? void 0 : y.length) > 0 &&
        e.mediasIndex.map((v, C) =>
          c.createElement(
            "div",
            {
              className: "btnSendContainerZV mediaContainer",
              style: { flex: "none" },
              key: v == null ? void 0 : v.id,
            },
            c.createElement(
              "button",
              {
                type: "button",
                className: "btnSendItemZV mediaBtn",
                style: {
                  background: G(0.5, Z.green),
                  color: "var(--primary)",
                  fontWeight: "500",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  margin: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                onClick: () => {
                  const E = ne();
                  if (!E) {
                    z.error("Nenhum chat aberto, envio cancelado");
                    return;
                  }
                  o
                    ? (b({
                        ...g,
                        details: {
                          ...g.details,
                          title: `Enviar m\xEDdia para ${E.formattedTitle}?`,
                          description: `Item => ${v.name}`,
                          cancelTitle: "Cancelar",
                          okTitle: "Enviar M\xEDdia",
                        },
                        onRequestOk: async () => {
                          u(!1),
                            Q.add({ itemId: v.id, chatId: E.id.toString() });
                        },
                      }),
                      u(!0))
                    : Q.add({ itemId: v.id, chatId: E.id.toString() });
                },
              },
              c.createElement(
                "div",
                {
                  style: {
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                    display: "grid",
                    placeItems: "center",
                  },
                },
                c.createElement(io, null)
              ),
              v.name
            )
          )
        ),
      ((S = e.docsIndex) == null ? void 0 : S.length) > 0 &&
        e.docsIndex.map((v, C) =>
          c.createElement(
            "div",
            {
              className: "btnSendContainerZV docContainer",
              style: { flex: "none" },
              key: v == null ? void 0 : v.id,
            },
            c.createElement(
              "button",
              {
                type: "button",
                className: "btnSendItemZV docBtn",
                style: {
                  background: G(0.5, Z.veryperi),
                  color: "var(--primary)",
                  fontWeight: "500",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  margin: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                onClick: () => {
                  const E = ne();
                  if (!E) {
                    z.error("Nenhum chat aberto, envio cancelado");
                    return;
                  }
                  o
                    ? (b({
                        ...g,
                        details: {
                          ...g.details,
                          title: `Enviar documento para ${E.formattedTitle}?`,
                          description: `Item => ${v.name}`,
                          cancelTitle: "Cancelar",
                          okTitle: "Enviar Documento",
                        },
                        onRequestOk: async () => {
                          u(!1),
                            Q.add({ itemId: v.id, chatId: E.id.toString() });
                        },
                      }),
                      u(!0))
                    : Q.add({ itemId: v.id, chatId: E.id.toString() });
                },
              },
              c.createElement(
                "div",
                {
                  style: {
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                    display: "grid",
                    placeItems: "center",
                  },
                },
                c.createElement(lo, null)
              ),
              v.name
            )
          )
        )
    ),
    c.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          n(),
            r(),
            z.success("Barra de atalhos e funis atualizada com sucesso");
        },
        style: {
          marginLeft: "15px",
          padding: "5px 10px",
          background: Z.green,
          borderRadius: "0.5rem",
        },
      },
      c.createElement(co, {
        fill: "white",
        style: { width: "1rem", height: "1rem" },
      })
    )
  );
}
const pt = ({ children: e, container: t, key: n }) =>
    Lt.exports.createPortal(e, t, n),
  $s = ae({
    "0%": { opacity: 0, transform: "translateY(2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  Ps = ae({
    "0%": { opacity: 0, transform: "translateX(-2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  }),
  Ms = ae({
    "0%": { opacity: 0, transform: "translateY(-2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  Ts = ae({
    "0%": { opacity: 0, transform: "translateX(2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  }),
  As = we(vr, {
    borderRadius: 4,
    padding: 20,
    width: 260,
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      animationFillMode: "forwards",
      willChange: "transform, opacity",
      '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: Ms },
        '&[data-side="right"]': { animationName: Ts },
        '&[data-side="bottom"]': { animationName: $s },
        '&[data-side="left"]': { animationName: Ps },
      },
    },
    variants: {
      theme: {
        dark: { backgroundColor: "#1a1a1a", color: "#FFFFFF" },
        light: { backgroundColor: "#FFFFFF", color: "#1a1a1a" },
        whatsapp: {
          background: "var(--background-default)",
          color: "var(--primary)",
        },
      },
    },
  }),
  Fs = we(br, {
    variants: {
      theme: {
        dark: { fill: "#1a1a1a" },
        light: { fill: "#FFFFFF" },
        whatsapp: { fill: "var(--background-default)" },
      },
    },
  }),
  Ns = we(hr, {
    all: "unset",
    fontFamily: "inherit",
    borderRadius: "100%",
    height: 25,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    border: "1px solid red",
    top: 5,
    right: 5,
    "&:hover": { backgroundColor: G(0.85, "red") },
  }),
  Is = mr,
  Os = gr,
  Rs = As,
  Ds = Fs,
  Ls = Ns;
function zs({
  children: e,
  trigger: t,
  isOpen: n,
  setIsOpen: r,
  triggerAsChild: o,
  theme: i,
  side: l,
}) {
  return c.createElement(
    Is,
    {
      open: n,
      onOpenChange: (s) => {
        r(s);
      },
    },
    c.createElement(Os, { asChild: !!o }, t),
    c.createElement(
      Rs,
      { side: l, sideOffset: 5, theme: i },
      e,
      c.createElement(Ds, { theme: i }),
      c.createElement(
        Ls,
        { "aria-label": "Close" },
        c.createElement(zn, { fill: "red" })
      )
    )
  );
}
function Ke(e) {
  if (!e) {
    const n = ne();
    if (!n) return;
    e = n.id.toString();
  }
  const t = at.getFunnels();
  return t == null
    ? void 0
    : t.find((n) => n.targetId === e && n.status === "running");
}
function Bs({ foundFunnel: e, reloadFoundFunnel: t, chatId: n }) {
  var d, u, m;
  const r =
      (d = e == null ? void 0 : e.current) != null && d.expectDeliveryTimestamp
        ? ((u = e == null ? void 0 : e.current) == null
            ? void 0
            : u.expectDeliveryTimestamp) - Date.now()
        : 0,
    [o, i] = a.exports.useState(r),
    l =
      (m = e == null ? void 0 : e.current) == null
        ? void 0
        : m.expectDeliveryTimestamp,
    s = Math.floor(o / 1e3 / 60),
    f = Math.floor((o / 1e3) % 60);
  return (
    a.exports.useEffect(() => {
      setTimeout(() => {
        const g = Ke(n);
        if (
          ((e == null ? void 0 : e.current) !==
            (g == null ? void 0 : g.current) && t(),
          !Number.isNaN(l) && l !== void 0)
        ) {
          const b = l - Date.now();
          if (b <= 0) {
            t();
            return;
          }
          i(b);
        } else i(0);
      }, 1e3);
    }, [o, e]),
    c.createElement(
      "div",
      { className: "flex flex-col text-center" },
      c.createElement("span", null, "Sera enviado em"),
      c.createElement(
        "span",
        null,
        String(s).padStart(2, "0"),
        "min e",
        " ",
        String(f).padStart(2, "0"),
        "seg"
      )
    )
  );
}
function _s({ chatId: e, setCurrentFunnel: t }) {
  var h;
  const [n, r] = a.exports.useState(Ke(e));
  function o() {
    const y = Ke(e);
    r(y);
  }
  const [i, l] = a.exports.useState(!1),
    [s, f] = a.exports.useState(!1),
    d = Gt(e),
    u = {
      details: {
        title: "Carregando...",
        okTitle: "Carregando...",
        cancelTitle: "Carregando...",
        fillCancel: "grey",
        fillOk: Z.red,
      },
      onRequestOk: async () => {
        console.log("Default onRequestOk Cancel Funnel");
      },
      isOpen: !1,
      onRequestClose: () => {
        f(!1);
      },
    },
    [m, g] = a.exports.useState(u);
  a.exports.useEffect(() => {
    n || (l(!1), t(void 0));
  }, [n == null ? void 0 : n.current]);
  const b = uo`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,
    x = Ye.div`
    width: 100%;
    height: 100%;
    background-image: conic-gradient(transparent, #08a6da47, #08a6da);
    border-radius: 50%;
    position: absolute;
    z-index: -2;
    animation: ${b} 2s linear infinite;
  `,
    p = !!(n != null && n.current) && _n(n.current.type);
  return c.createElement(
    zs,
    {
      theme: "whatsapp",
      side: "bottom",
      isOpen: i,
      setIsOpen: l,
      triggerAsChild: !0,
      trigger: c.createElement(
        "div",
        {
          style: {
            display: "grid",
            placeItems: "center",
            filter: "opacity(0.5)",
            width: "4rem",
            height: "4rem",
            position: "absolute",
            top: "4.5rem",
            left: "1rem",
            zIndex: "999999999",
          },
        },
        c.createElement(
          "button",
          {
            type: "button",
            id: "currentFunnelButton",
            style: {
              border: "none",
              width: "90%",
              height: "90%",
              background: Z.gold,
              borderRadius: "50%",
            },
          },
          c.createElement(Fe, {
            fill: "white",
            style: { width: "50%", height: "50%", margin: "0 auto" },
          })
        ),
        c.createElement(x, null)
      ),
    },
    c.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        },
      },
      c.createElement(
        "h2",
        {
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          },
        },
        "Funil Atual"
      ),
      c.createElement(
        "span",
        {
          style: { fontSize: "1rem", fontWeight: "bold", marginBottom: "1rem" },
          className: "underline text-base font-bold mt-2",
        },
        (h = n == null ? void 0 : n.funnel) == null ? void 0 : h.name
      ),
      (n == null ? void 0 : n.current) &&
        c.createElement(
          c.Fragment,
          null,
          c.createElement("span", null, "---------------"),
          c.createElement("span", null, "Pr\xF3ximo item"),
          c.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            p && c.createElement(p, null),
            c.createElement(
              "span",
              null,
              "(",
              n.current.queuePosition,
              "/",
              n.current.queueLength,
              ")"
            )
          ),
          c.createElement(Bs, {
            foundFunnel: n,
            reloadFoundFunnel: o,
            chatId: e,
          })
        ),
      c.createElement(_t, { ...m, isOpen: s }),
      c.createElement(
        "button",
        {
          className:
            "border-none p-2 rounded text-base font-bold text-white bg-zap-red mt-4",
          type: "button",
          onClick: () => {
            g({
              ...m,
              details: {
                ...m.details,
                title: `Tem certeza que deseja cancelar o funil no chat: ${d.formattedTitle}?`,
                description:
                  "Voc\xEA poder\xE1 reenviar o funil a partir de um item clicando na \u{1F50E} lupa do funil dentro da extens\xE3o",
                cancelTitle: "Cancelar",
                okTitle: "Cancelar Funil",
              },
              onRequestOk: async () => {
                f(!1), n == null || n.stopFunction(), l(!1), t(void 0);
              },
            }),
              f(!0);
          },
        },
        "CANCELAR FUNIL"
      )
    )
  );
}
const Ws = { eventName: "ZVEventPTC" };
function Xe(e) {
  const t = new CustomEvent(Ws.eventName, { detail: e });
  window.dispatchEvent(t);
}
async function Vs(e, t, n) {
  return new Promise((r) => {
    const o = Qe();
    let i = !1;
    function l() {
      (i = !0), r(!0), window.removeEventListener(o, l);
    }
    window.addEventListener(o, l),
      setTimeout(() => {
        i || l();
      }, 1500),
      Xe({
        type: "sendFunnel",
        funnelId: e,
        chatTargetId: t,
        promiseId: o,
        secondsBeforeSend: n,
      });
  });
}
async function Us(e, t, n, r, o) {
  return new Promise((i) => {
    var u;
    const l = o || Qe(),
      s = t || ne();
    let f = !1;
    function d() {
      (f = !0), i(!0), window.removeEventListener(l, d);
    }
    window.addEventListener(l, d),
      setTimeout(() => {
        f || d();
      }, 1500),
      Xe({
        type: "sendItem",
        itemId: e,
        chatTargetId:
          (u = s == null ? void 0 : s.id) == null ? void 0 : u.toString(),
        promiseId: l,
        avoidToast: n,
        premium: r,
      });
  });
}
function js(e) {
  return a.exports.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      style: { margin: "auto", background: "0 0" },
      width: "200px",
      height: "200px",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      display: "block",
      ...e,
    },
    a.exports.createElement(
      "circle",
      {
        cx: 50,
        cy: 50,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 10,
        r: 35,
        strokeDasharray: "164.93361431346415 56.97787143782138",
      },
      a.exports.createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        repeatCount: "indefinite",
        dur: "1s",
        values: "0 50 50;360 50 50",
        keyTimes: "0;1",
      })
    )
  );
}
const Gs = Ye.div`
  display: ${({ isVisible: e }) => (e ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  #bulkPreviewContainer {
    width: 90%;
    max-width: 35rem;
    height: 100%;
    border-radius: 0.25rem;
    padding: 1rem;
    box-shadow: 0px 0px 15px -5px black;
    background: var(--background-default);
    color: var(--primary);
    text-align: center;
    display: grid;
    grid-template-rows: 4rem 1fr 4rem;
    header {
      h1 {
        color: var(--primary-strong);
        font-size: 1.5rem;
        margin-top: 0.25rem;
      }
      span {
        font-size: 1rem;
        b {
          margin: 0 0.5rem;
          font-weight: bold;
          &.pendingCount {
            color: ${Z.gold};
          }
          &.successCount {
            color: ${Z.green};
          }
          &.errorCount {
            color: ${Z.red};
          }
        }
      }
    }
    #bulkDetails {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 70vh;
      #delayWrapper {
        margin-bottom: 1rem;
      }
      #tableWrapper {
        height: 100%;
        overflow-y: scroll;
        table {
          width: 100%;
          table-layout: fixed;
          overflow: hidden;
          margin-bottom: 5rem;
          thead {
            background: var(--active-tab-marker);
            th {
              text-align: center;
              padding: 0.5rem 0;
              font-size: 1rem;
              font-weight: 700;
              border: 0.5px solid var(--secondary);
            }
          }
          tbody {
            tr {
              td {
                text-align: center;
                padding: 0.25rem 0.5rem;
                border: 0.5px solid var(--secondary);
              }
            }
          }
        }
      }
    }
    #bulkActionContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      button {
        width: 10rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        color: var(--primary);
        transition: filter 0.2s;
        &:hover {
          filter: brightness(1.2);
        }
        &#cancelBtn {
          background: ${G(0.3, "#FF5151")};
        }
        &#sendBtn {
          background: ${G(0.3, "#09CAA7")};
        }
      }
    }
  }
`,
  Zs = Ye.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background: ${({ props: e }) => G(0.7, e.fill)};
  color: ${({ props: e }) => e.textColor};
  .iconWrapper {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0px 0.5rem;
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  span {
    text-align: left;
    width: 100%;
    color: ${({ props: e }) => (e.textColor ? e.textColor : e.fill)};
    font-size: 0.75rem;
    font-weight: bold;
  }
`;
function qs(e) {
  const { Icon: t, title: n, fill: r, textColor: o, spin: i } = e;
  return c.createElement(
    Zs,
    { props: e },
    c.createElement(
      "div",
      { className: "iconWrapper" },
      c.createElement(t, { size: 20, fill: r, color: r })
    ),
    c.createElement("span", { style: { color: o } }, n)
  );
}
function Hs(e) {
  switch (e) {
    case "pending":
      return {
        Icon: Et,
        title: "Na fila",
        fill: "grey",
        textColor: "var(--primary);",
      };
    case "running":
      return { Icon: js, title: "Carregando...", fill: Z.blue };
    case "success":
      return { Icon: po, title: "Enviado", fill: Z.green };
    case "error":
      return { Icon: fo, title: "Erro", fill: Z.red };
    default:
      return {
        Icon: Et,
        title: "Na fila",
        fill: "grey",
        textColor: "var(--primary);",
      };
  }
}
const Pt = [];
function Ks() {
  for (; Pt.length > 0; ) {
    const e = Pt.shift();
    e && e();
  }
}
function Xs({ bulk: e }) {
  const [t, n] = a.exports.useState(!1),
    [r, o] = a.exports.useState(!1),
    [i, l] = a.exports.useState(!1),
    [s, f] = a.exports.useState(),
    [d, u] = a.exports.useState([]),
    [m, g] = a.exports.useState();
  function b(x, p) {
    const { status: h, target: y, message: S } = x,
      v = (p || d).map((E) =>
        E.phone_number === y ? { ...E, status: h, message: S } : E
      );
    u(v);
    const C = v.reduce(
      (E, M) => (
        M.status === "success"
          ? (E.success += 1)
          : M.status === "error"
          ? (E.error += 1)
          : (E.pending += 1),
        E
      ),
      { pending: 0, success: 0, error: 0 }
    );
    return g(C), C.pending === 0 && (l(!0), o(!1)), v;
  }
  return (
    a.exports.useEffect(() => {
      try {
        if ((n(!0), r)) {
          z.error(
            "J\xE1 existe um disparo em andamento, aguarde o t\xE9rmino do mesmo para iniciar um novo disparo."
          );
          return;
        }
        if ((l(!1), o(!1), !e)) {
          z.error(
            "Disparo carregado incorretamente, recarregue a p\xE1gina e tente novamente"
          ),
            f(void 0),
            n(!1);
          return;
        }
        f(e);
      } catch (x) {
        console.log(x), z.error(x.toString()), f(void 0), n(!1);
      }
    }, [e]),
    a.exports.useEffect(() => {
      var x, p, h;
      u(
        (x = s == null ? void 0 : s.targetNumbers) != null && x.length
          ? s.targetNumbers.map((y) => ({
              phone_number: y,
              status: "pending",
              message: "Na fila",
            }))
          : []
      ),
        (p = s == null ? void 0 : s.targetNumbers) != null &&
          p.length &&
          g({
            error: 0,
            success: 0,
            pending:
              (h = s == null ? void 0 : s.targetNumbers) == null
                ? void 0
                : h.length,
          });
    }, [s]),
    c.createElement(
      Gs,
      { isVisible: t },
      s && d.length
        ? c.createElement(
            "div",
            { id: "bulkPreviewContainer" },
            c.createElement(
              "header",
              null,
              c.createElement(
                "h1",
                null,
                !r && !i && "Confirma o envio do disparo abaixo?",
                !r && !!i && "Disparo Finalizado com sucesso!",
                !!r && "Disparo em andamento..."
              ),
              m &&
                c.createElement(
                  "span",
                  null,
                  "Pendentes",
                  c.createElement(
                    "b",
                    { className: "pendingCount" },
                    m.pending
                  ),
                  "Enviados",
                  c.createElement(
                    "b",
                    { className: "successCount" },
                    m.success
                  ),
                  "Falhas",
                  c.createElement("b", { className: "errorCount" }, m.error)
                )
            ),
            c.createElement(
              "div",
              { id: "bulkDetails" },
              c.createElement(
                "div",
                { id: "delayWrapper" },
                "Delay entre n\xFAmeros: ",
                s.delay.min,
                " seg -",
                " ",
                s.delay.max,
                " seg"
              ),
              c.createElement(
                "div",
                { id: "tableWrapper" },
                c.createElement(
                  "table",
                  null,
                  c.createElement(
                    "colgroup",
                    null,
                    c.createElement("col", { style: { width: "65%" } }),
                    c.createElement("col", { style: { width: "35%" } })
                  ),
                  c.createElement(
                    "thead",
                    null,
                    c.createElement(
                      "tr",
                      null,
                      c.createElement("th", null, "Enviar para"),
                      c.createElement("th", null, "Status")
                    )
                  ),
                  c.createElement(
                    "tbody",
                    null,
                    d.map((x, p) =>
                      c.createElement(
                        "tr",
                        { key: `${p} - ${x.phone_number}` },
                        c.createElement("td", null, x.phone_number),
                        c.createElement(
                          "td",
                          null,
                          c.createElement(qs, {
                            ...Hs(x.status),
                            ...(x.message && { title: x.message }),
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            c.createElement(
              "div",
              { id: "bulkActionContainer" },
              r &&
                c.createElement(
                  "button",
                  {
                    type: "button",
                    id: "cancelBtn",
                    onClick: () => {
                      z.warning("Disparo cancelado!"), Ks(), l(!0), o(!1);
                    },
                  },
                  "Interromper Disparo"
                ),
              !r &&
                !i &&
                c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    "button",
                    {
                      type: "button",
                      id: "cancelBtn",
                      onClick: () => {
                        n(!1);
                      },
                    },
                    "Cancelar"
                  ),
                  c.createElement(
                    "button",
                    {
                      type: "button",
                      id: "sendBtn",
                      onClick: () => {
                        o(!0);
                        const x = ql(s, b);
                        Pt.push(x);
                      },
                    },
                    "Enviar"
                  )
                ),
              i &&
                c.createElement(
                  "button",
                  {
                    type: "button",
                    id: "cancelBtn",
                    onClick: () => {
                      n(!1), l(!1), o(!1), f(void 0), u([]), g(void 0);
                    },
                  },
                  "Limpar Tudo e Fechar"
                )
            )
          )
        : c.createElement("h1", null, "Carregando...")
    )
  );
}
function ue(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Ys(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Qs(...e) {
  return (t) => e.forEach((n) => Ys(n, t));
}
function Ne(...e) {
  return a.exports.useCallback(Qs(...e), e);
}
function Js(e, t = []) {
  let n = [];
  function r(i, l) {
    const s = a.exports.createContext(l),
      f = n.length;
    n = [...n, l];
    function d(m) {
      const { scope: g, children: b, ...x } = m,
        p = (g == null ? void 0 : g[e][f]) || s,
        h = a.exports.useMemo(() => x, Object.values(x));
      return a.exports.createElement(p.Provider, { value: h }, b);
    }
    function u(m, g) {
      const b = (g == null ? void 0 : g[e][f]) || s,
        x = a.exports.useContext(b);
      if (x) return x;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${i}\``);
    }
    return (d.displayName = i + "Provider"), [d, u];
  }
  const o = () => {
    const i = n.map((l) => a.exports.createContext(l));
    return function (s) {
      const f = (s == null ? void 0 : s[e]) || i;
      return a.exports.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: f } }),
        [s, f]
      );
    };
  };
  return (o.scopeName = e), [r, ei(o, ...t)];
}
function ei(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = r.reduce((s, { useScope: f, scopeName: d }) => {
        const m = f(i)[`__scope${d}`];
        return { ...s, ...m };
      }, {});
      return a.exports.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
const Mt = Boolean(globalThis == null ? void 0 : globalThis.document)
    ? a.exports.useLayoutEffect
    : () => {},
  ti = mo["useId".toString()] || (() => {});
let ni = 0;
function mt(e) {
  const [t, n] = a.exports.useState(ti());
  return (
    Mt(() => {
      e || n((r) => (r != null ? r : String(ni++)));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function fe(e) {
  const t = a.exports.useRef(e);
  return (
    a.exports.useEffect(() => {
      t.current = e;
    }),
    a.exports.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function ri({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = oi({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    s = fe(n),
    f = a.exports.useCallback(
      (d) => {
        if (i) {
          const m = typeof d == "function" ? d(e) : d;
          m !== e && s(m);
        } else o(d);
      },
      [i, e, o, s]
    );
  return [l, f];
}
function oi({ defaultProp: e, onChange: t }) {
  const n = a.exports.useState(e),
    [r] = n,
    o = a.exports.useRef(r),
    i = fe(t);
  return (
    a.exports.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
function ai(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function si(...e) {
  return (t) => e.forEach((n) => ai(n, t));
}
const nt = a.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = a.exports.Children.toArray(n),
    i = o.find(li);
  if (i) {
    const l = i.props.children,
      s = o.map((f) =>
        f === i
          ? a.exports.Children.count(l) > 1
            ? a.exports.Children.only(null)
            : a.exports.isValidElement(l)
            ? l.props.children
            : null
          : f
      );
    return a.exports.createElement(
      Tt,
      L({}, r, { ref: t }),
      a.exports.isValidElement(l) ? a.exports.cloneElement(l, void 0, s) : null
    );
  }
  return a.exports.createElement(Tt, L({}, r, { ref: t }), n);
});
nt.displayName = "Slot";
const Tt = a.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return a.exports.isValidElement(n)
    ? a.exports.cloneElement(n, {
        ...ci(r, n.props),
        ref: t ? si(t, n.ref) : n.ref,
      })
    : a.exports.Children.count(n) > 1
    ? a.exports.Children.only(null)
    : null;
});
Tt.displayName = "SlotClone";
const ii = ({ children: e }) =>
  a.exports.createElement(a.exports.Fragment, null, e);
function li(e) {
  return a.exports.isValidElement(e) && e.type === ii;
}
function ci(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...s) => {
            i(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
const di = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  me = di.reduce((e, t) => {
    const n = a.exports.forwardRef((r, o) => {
      const { asChild: i, ...l } = r,
        s = i ? nt : t;
      return (
        a.exports.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        a.exports.createElement(s, L({}, l, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function ui(e, t) {
  e && Lt.exports.flushSync(() => e.dispatchEvent(t));
}
function fi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e);
  a.exports.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const At = "dismissableLayer.update",
  pi = "dismissableLayer.pointerDownOutside",
  mi = "dismissableLayer.focusOutside";
let yn;
const gi = a.exports.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  vi = a.exports.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: l,
        onInteractOutside: s,
        onDismiss: f,
        ...d
      } = e,
      u = a.exports.useContext(gi),
      [m, g] = a.exports.useState(null),
      b =
        (n = m == null ? void 0 : m.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, x] = a.exports.useState({}),
      p = Ne(t, (P) => g(P)),
      h = Array.from(u.layers),
      [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = h.indexOf(y),
      v = m ? h.indexOf(m) : -1,
      C = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = v >= S,
      M = hi((P) => {
        const O = P.target,
          w = [...u.branches].some((T) => T.contains(O));
        !E ||
          w ||
          (i == null || i(P),
          s == null || s(P),
          P.defaultPrevented || f == null || f());
      }, b),
      A = bi((P) => {
        const O = P.target;
        [...u.branches].some((T) => T.contains(O)) ||
          (l == null || l(P),
          s == null || s(P),
          P.defaultPrevented || f == null || f());
      }, b);
    return (
      fi((P) => {
        v === u.layers.size - 1 &&
          (o == null || o(P),
          !P.defaultPrevented && f && (P.preventDefault(), f()));
      }, b),
      a.exports.useEffect(() => {
        if (!!m)
          return (
            r &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((yn = b.body.style.pointerEvents),
                (b.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(m)),
            u.layers.add(m),
            En(),
            () => {
              r &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (b.body.style.pointerEvents = yn);
            }
          );
      }, [m, b, r, u]),
      a.exports.useEffect(
        () => () => {
          !m ||
            (u.layers.delete(m),
            u.layersWithOutsidePointerEventsDisabled.delete(m),
            En());
        },
        [m, u]
      ),
      a.exports.useEffect(() => {
        const P = () => x({});
        return (
          document.addEventListener(At, P),
          () => document.removeEventListener(At, P)
        );
      }, []),
      a.exports.createElement(
        me.div,
        L({}, d, {
          ref: p,
          style: {
            pointerEvents: C ? (E ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: ue(e.onFocusCapture, A.onFocusCapture),
          onBlurCapture: ue(e.onBlurCapture, A.onBlurCapture),
          onPointerDownCapture: ue(
            e.onPointerDownCapture,
            M.onPointerDownCapture
          ),
        })
      )
    );
  });
function hi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e),
    r = a.exports.useRef(!1),
    o = a.exports.useRef(() => {});
  return (
    a.exports.useEffect(() => {
      const i = (s) => {
          if (s.target && !r.current) {
            let d = function () {
              wr(pi, n, f, { discrete: !0 });
            };
            const f = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = d),
                t.addEventListener("click", o.current, { once: !0 }))
              : d();
          }
          r.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(l),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function bi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e),
    r = a.exports.useRef(!1);
  return (
    a.exports.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          wr(mi, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function En() {
  const e = new CustomEvent(At);
  document.dispatchEvent(e);
}
function wr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? ui(o, i) : o.dispatchEvent(i);
}
const gt = "focusScope.autoFocusOnMount",
  vt = "focusScope.autoFocusOnUnmount",
  wn = { bubbles: !1, cancelable: !0 },
  xi = a.exports.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, f] = a.exports.useState(null),
      d = fe(o),
      u = fe(i),
      m = a.exports.useRef(null),
      g = Ne(t, (p) => f(p)),
      b = a.exports.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    a.exports.useEffect(() => {
      if (r) {
        let p = function (v) {
            if (b.paused || !s) return;
            const C = v.target;
            s.contains(C) ? (m.current = C) : te(m.current, { select: !0 });
          },
          h = function (v) {
            if (b.paused || !s) return;
            const C = v.relatedTarget;
            C !== null && (s.contains(C) || te(m.current, { select: !0 }));
          },
          y = function (v) {
            const C = document.activeElement;
            for (const E of v)
              E.removedNodes.length > 0 &&
                ((s != null && s.contains(C)) || te(s));
          };
        document.addEventListener("focusin", p),
          document.addEventListener("focusout", h);
        const S = new MutationObserver(y);
        return (
          s && S.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", h),
              S.disconnect();
          }
        );
      }
    }, [r, s, b.paused]),
      a.exports.useEffect(() => {
        if (s) {
          Sn.add(b);
          const p = document.activeElement;
          if (!s.contains(p)) {
            const y = new CustomEvent(gt, wn);
            s.addEventListener(gt, d),
              s.dispatchEvent(y),
              y.defaultPrevented ||
                (yi(ki(Cr(s)), { select: !0 }),
                document.activeElement === p && te(s));
          }
          return () => {
            s.removeEventListener(gt, d),
              setTimeout(() => {
                const y = new CustomEvent(vt, wn);
                s.addEventListener(vt, u),
                  s.dispatchEvent(y),
                  y.defaultPrevented ||
                    te(p != null ? p : document.body, { select: !0 }),
                  s.removeEventListener(vt, u),
                  Sn.remove(b);
              }, 0);
          };
        }
      }, [s, d, u, b]);
    const x = a.exports.useCallback(
      (p) => {
        if ((!n && !r) || b.paused) return;
        const h = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          y = document.activeElement;
        if (h && y) {
          const S = p.currentTarget,
            [v, C] = Ei(S);
          v && C
            ? !p.shiftKey && y === C
              ? (p.preventDefault(), n && te(v, { select: !0 }))
              : p.shiftKey &&
                y === v &&
                (p.preventDefault(), n && te(C, { select: !0 }))
            : y === S && p.preventDefault();
        }
      },
      [n, r, b.paused]
    );
    return a.exports.createElement(
      me.div,
      L({ tabIndex: -1 }, l, { ref: g, onKeyDown: x })
    );
  });
function yi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((te(r, { select: t }), document.activeElement !== n)) return;
}
function Ei(e) {
  const t = Cr(e),
    n = Cn(t, e),
    r = Cn(t.reverse(), e);
  return [n, r];
}
function Cr(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Cn(e, t) {
  for (const n of e) if (!wi(n, { upTo: t })) return n;
}
function wi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ci(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function te(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ci(e) && t && e.select();
  }
}
const Sn = Si();
function Si() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = kn(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = kn(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function kn(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ki(e) {
  return e.filter((t) => t.tagName !== "A");
}
const $i = a.exports.forwardRef((e, t) => {
  var n;
  const {
    container: r = globalThis == null ||
    (n = globalThis.document) === null ||
    n === void 0
      ? void 0
      : n.body,
    ...o
  } = e;
  return r
    ? Ln.createPortal(a.exports.createElement(me.div, L({}, o, { ref: t })), r)
    : null;
});
function Pi(e, t) {
  return a.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const rt = (e) => {
  const { present: t, children: n } = e,
    r = Mi(t),
    o =
      typeof n == "function"
        ? n({ present: r.isPresent })
        : a.exports.Children.only(n),
    i = Ne(r.ref, o.ref);
  return typeof n == "function" || r.isPresent
    ? a.exports.cloneElement(o, { ref: i })
    : null;
};
rt.displayName = "Presence";
function Mi(e) {
  const [t, n] = a.exports.useState(),
    r = a.exports.useRef({}),
    o = a.exports.useRef(e),
    i = a.exports.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [s, f] = Pi(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    a.exports.useEffect(() => {
      const d = We(r.current);
      i.current = s === "mounted" ? d : "none";
    }, [s]),
    Mt(() => {
      const d = r.current,
        u = o.current;
      if (u !== e) {
        const g = i.current,
          b = We(d);
        e
          ? f("MOUNT")
          : b === "none" || (d == null ? void 0 : d.display) === "none"
          ? f("UNMOUNT")
          : f(u && g !== b ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, f]),
    Mt(() => {
      if (t) {
        const d = (m) => {
            const b = We(r.current).includes(m.animationName);
            m.target === t &&
              b &&
              Lt.exports.flushSync(() => f("ANIMATION_END"));
          },
          u = (m) => {
            m.target === t && (i.current = We(r.current));
          };
        return (
          t.addEventListener("animationstart", u),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            t.removeEventListener("animationstart", u),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else f("ANIMATION_END");
    }, [t, f]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: a.exports.useCallback((d) => {
        d && (r.current = getComputedStyle(d)), n(d);
      }, []),
    }
  );
}
function We(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let ht = 0;
function Ti() {
  a.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : $n()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : $n()
      ),
      ht++,
      () => {
        ht === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          ht--;
      }
    );
  }, []);
}
function $n() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var Sr = Yn(),
  bt = function () {},
  ot = a.exports.forwardRef(function (e, t) {
    var n = a.exports.useRef(null),
      r = a.exports.useState({
        onScrollCapture: bt,
        onWheelCapture: bt,
        onTouchMoveCapture: bt,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      f = e.className,
      d = e.removeScrollBar,
      u = e.enabled,
      m = e.shards,
      g = e.sideCar,
      b = e.noIsolation,
      x = e.inert,
      p = e.allowPinchZoom,
      h = e.as,
      y = h === void 0 ? "div" : h,
      S = Bt(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      v = g,
      C = Xn([n, t]),
      E = q(q({}, S), o);
    return a.exports.createElement(
      a.exports.Fragment,
      null,
      u &&
        a.exports.createElement(v, {
          sideCar: Sr,
          removeScrollBar: d,
          shards: m,
          noIsolation: b,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!p,
          lockRef: n,
        }),
      l
        ? a.exports.cloneElement(
            a.exports.Children.only(s),
            q(q({}, E), { ref: C })
          )
        : a.exports.createElement(y, q({}, E, { className: f, ref: C }), s)
    );
  });
ot.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ot.classNames = { fullWidth: Me, zeroRight: Pe };
var Ft = !1;
if (typeof window < "u")
  try {
    var Ve = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ft = !0), !0;
      },
    });
    window.addEventListener("test", Ve, Ve),
      window.removeEventListener("test", Ve, Ve);
  } catch {
    Ft = !1;
  }
var xe = Ft ? { passive: !1 } : !1,
  Ai = function (e) {
    return e.tagName === "TEXTAREA";
  },
  kr = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Ai(e) && n[t] === "visible")
    );
  },
  Fi = function (e) {
    return kr(e, "overflowY");
  },
  Ni = function (e) {
    return kr(e, "overflowX");
  },
  Pn = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = $r(e, n);
      if (r) {
        var o = Pr(e, n),
          i = o[1],
          l = o[2];
        if (i > l) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  Ii = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Oi = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  $r = function (e, t) {
    return e === "v" ? Fi(t) : Ni(t);
  },
  Pr = function (e, t) {
    return e === "v" ? Ii(t) : Oi(t);
  },
  Ri = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Di = function (e, t, n, r, o) {
    var i = Ri(e, window.getComputedStyle(t).direction),
      l = i * r,
      s = n.target,
      f = t.contains(s),
      d = !1,
      u = l > 0,
      m = 0,
      g = 0;
    do {
      var b = Pr(e, s),
        x = b[0],
        p = b[1],
        h = b[2],
        y = p - h - i * x;
      (x || y) && $r(e, s) && ((m += y), (g += x)), (s = s.parentNode);
    } while ((!f && s !== document.body) || (f && (t.contains(s) || t === s)));
    return (
      ((u && ((o && m === 0) || (!o && l > m))) ||
        (!u && ((o && g === 0) || (!o && -l > g)))) &&
        (d = !0),
      d
    );
  },
  Ue = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Mn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Tn = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Li = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  zi = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Bi = 0,
  ye = [];
function _i(e) {
  var t = a.exports.useRef([]),
    n = a.exports.useRef([0, 0]),
    r = a.exports.useRef(),
    o = a.exports.useState(Bi++)[0],
    i = a.exports.useState(function () {
      return jt();
    })[0],
    l = a.exports.useRef(e);
  a.exports.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    a.exports.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var p = Wn([e.lockRef.current], (e.shards || []).map(Tn), !0).filter(
            Boolean
          );
          return (
            p.forEach(function (h) {
              return h.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                p.forEach(function (h) {
                  return h.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = a.exports.useCallback(function (p, h) {
      if ("touches" in p && p.touches.length === 2)
        return !l.current.allowPinchZoom;
      var y = Ue(p),
        S = n.current,
        v = "deltaX" in p ? p.deltaX : S[0] - y[0],
        C = "deltaY" in p ? p.deltaY : S[1] - y[1],
        E,
        M = p.target,
        A = Math.abs(v) > Math.abs(C) ? "h" : "v";
      if ("touches" in p && A === "h" && M.type === "range") return !1;
      var P = Pn(A, M);
      if (!P) return !0;
      if ((P ? (E = A) : ((E = A === "v" ? "h" : "v"), (P = Pn(A, M))), !P))
        return !1;
      if (
        (!r.current && "changedTouches" in p && (v || C) && (r.current = E), !E)
      )
        return !0;
      var O = r.current || E;
      return Di(O, h, p, O === "h" ? v : C, !0);
    }, []),
    f = a.exports.useCallback(function (p) {
      var h = p;
      if (!(!ye.length || ye[ye.length - 1] !== i)) {
        var y = "deltaY" in h ? Mn(h) : Ue(h),
          S = t.current.filter(function (E) {
            return E.name === h.type && E.target === h.target && Li(E.delta, y);
          })[0];
        if (S && S.should) {
          h.cancelable && h.preventDefault();
          return;
        }
        if (!S) {
          var v = (l.current.shards || [])
              .map(Tn)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(h.target);
              }),
            C = v.length > 0 ? s(h, v[0]) : !l.current.noIsolation;
          C && h.cancelable && h.preventDefault();
        }
      }
    }, []),
    d = a.exports.useCallback(function (p, h, y, S) {
      var v = { name: p, delta: h, target: y, should: S };
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== v;
          });
        }, 1);
    }, []),
    u = a.exports.useCallback(function (p) {
      (n.current = Ue(p)), (r.current = void 0);
    }, []),
    m = a.exports.useCallback(function (p) {
      d(p.type, Mn(p), p.target, s(p, e.lockRef.current));
    }, []),
    g = a.exports.useCallback(function (p) {
      d(p.type, Ue(p), p.target, s(p, e.lockRef.current));
    }, []);
  a.exports.useEffect(function () {
    return (
      ye.push(i),
      e.setCallbacks({
        onScrollCapture: m,
        onWheelCapture: m,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", f, xe),
      document.addEventListener("touchmove", f, xe),
      document.addEventListener("touchstart", u, xe),
      function () {
        (ye = ye.filter(function (p) {
          return p !== i;
        })),
          document.removeEventListener("wheel", f, xe),
          document.removeEventListener("touchmove", f, xe),
          document.removeEventListener("touchstart", u, xe);
      }
    );
  }, []);
  var b = e.removeScrollBar,
    x = e.inert;
  return a.exports.createElement(
    a.exports.Fragment,
    null,
    x ? a.exports.createElement(i, { styles: zi(o) }) : null,
    b ? a.exports.createElement(tr, { gapMode: "margin" }) : null
  );
}
const Wi = Jn(Sr, _i);
var Mr = a.exports.forwardRef(function (e, t) {
  return a.exports.createElement(ot, q({}, e, { ref: t, sideCar: Wi }));
});
Mr.classNames = ot.classNames;
const Vi = Mr,
  Tr = "Dialog",
  [Ar, ac] = Js(Tr),
  [Ui, J] = Ar(Tr),
  ji = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: l = !0,
      } = e,
      s = a.exports.useRef(null),
      f = a.exports.useRef(null),
      [d = !1, u] = ri({ prop: r, defaultProp: o, onChange: i });
    return a.exports.createElement(
      Ui,
      {
        scope: t,
        triggerRef: s,
        contentRef: f,
        contentId: mt(),
        titleId: mt(),
        descriptionId: mt(),
        open: d,
        onOpenChange: u,
        onOpenToggle: a.exports.useCallback(() => u((m) => !m), [u]),
        modal: l,
      },
      n
    );
  },
  Fr = "DialogPortal",
  [Gi, Nr] = Ar(Fr, { forceMount: void 0 }),
  Zi = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = J(Fr, t);
    return a.exports.createElement(
      Gi,
      { scope: t, forceMount: n },
      a.exports.Children.map(r, (l) =>
        a.exports.createElement(
          rt,
          { present: n || i.open },
          a.exports.createElement($i, { asChild: !0, container: o }, l)
        )
      )
    );
  },
  Nt = "DialogOverlay",
  qi = a.exports.forwardRef((e, t) => {
    const n = Nr(Nt, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = J(Nt, e.__scopeDialog);
    return i.modal
      ? a.exports.createElement(
          rt,
          { present: r || i.open },
          a.exports.createElement(Hi, L({}, o, { ref: t }))
        )
      : null;
  }),
  Hi = a.exports.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = J(Nt, n);
    return a.exports.createElement(
      Vi,
      { as: nt, allowPinchZoom: !0, shards: [o.contentRef] },
      a.exports.createElement(
        me.div,
        L({ "data-state": Or(o.open) }, r, {
          ref: t,
          style: { pointerEvents: "auto", ...r.style },
        })
      )
    );
  }),
  Ae = "DialogContent",
  Ki = a.exports.forwardRef((e, t) => {
    const n = Nr(Ae, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = J(Ae, e.__scopeDialog);
    return a.exports.createElement(
      rt,
      { present: r || i.open },
      i.modal
        ? a.exports.createElement(Xi, L({}, o, { ref: t }))
        : a.exports.createElement(Yi, L({}, o, { ref: t }))
    );
  }),
  Xi = a.exports.forwardRef((e, t) => {
    const n = J(Ae, e.__scopeDialog),
      r = a.exports.useRef(null),
      o = Ne(t, n.contentRef, r);
    return (
      a.exports.useEffect(() => {
        const i = r.current;
        if (i) return Kn(i);
      }, []),
      a.exports.createElement(
        Ir,
        L({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: ue(e.onCloseAutoFocus, (i) => {
            var l;
            i.preventDefault(),
              (l = n.triggerRef.current) === null || l === void 0 || l.focus();
          }),
          onPointerDownOutside: ue(e.onPointerDownOutside, (i) => {
            const l = i.detail.originalEvent,
              s = l.button === 0 && l.ctrlKey === !0;
            (l.button === 2 || s) && i.preventDefault();
          }),
          onFocusOutside: ue(e.onFocusOutside, (i) => i.preventDefault()),
        })
      )
    );
  }),
  Yi = a.exports.forwardRef((e, t) => {
    const n = J(Ae, e.__scopeDialog),
      r = a.exports.useRef(!1),
      o = a.exports.useRef(!1);
    return a.exports.createElement(
      Ir,
      L({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var l;
          if (
            ((l = e.onCloseAutoFocus) === null || l === void 0 || l.call(e, i),
            !i.defaultPrevented)
          ) {
            var s;
            r.current ||
              (s = n.triggerRef.current) === null ||
              s === void 0 ||
              s.focus(),
              i.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (i) => {
          var l, s;
          (l = e.onInteractOutside) === null || l === void 0 || l.call(e, i),
            i.defaultPrevented ||
              ((r.current = !0),
              i.detail.originalEvent.type === "pointerdown" &&
                (o.current = !0));
          const f = i.target;
          ((s = n.triggerRef.current) === null || s === void 0
            ? void 0
            : s.contains(f)) && i.preventDefault(),
            i.detail.originalEvent.type === "focusin" &&
              o.current &&
              i.preventDefault();
        },
      })
    );
  }),
  Ir = a.exports.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...l
      } = e,
      s = J(Ae, n),
      f = a.exports.useRef(null),
      d = Ne(t, f);
    return (
      Ti(),
      a.exports.createElement(
        a.exports.Fragment,
        null,
        a.exports.createElement(
          xi,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
          },
          a.exports.createElement(
            vi,
            L(
              {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": Or(s.open),
              },
              l,
              { ref: d, onDismiss: () => s.onOpenChange(!1) }
            )
          )
        ),
        !1
      )
    );
  }),
  Qi = "DialogTitle",
  Ji = a.exports.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = J(Qi, n);
    return a.exports.createElement(me.h2, L({ id: o.titleId }, r, { ref: t }));
  }),
  el = "DialogDescription",
  tl = a.exports.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = J(el, n);
    return a.exports.createElement(
      me.p,
      L({ id: o.descriptionId }, r, { ref: t })
    );
  }),
  nl = "DialogClose",
  rl = a.exports.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = J(nl, n);
    return a.exports.createElement(
      me.button,
      L({ type: "button" }, r, {
        ref: t,
        onClick: ue(e.onClick, () => o.onOpenChange(!1)),
      })
    );
  });
function Or(e) {
  return e ? "open" : "closed";
}
const ol = ji,
  Rr = Zi,
  Dr = qi,
  Lr = Ki,
  zr = Ji,
  Br = tl,
  al = rl;
var sl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const il = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ll = (e, t) => {
    const n = a.exports.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          children: s,
          ...f
        },
        d
      ) =>
        a.exports.createElement(
          "svg",
          {
            ref: d,
            ...sl,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
            className: `lucide lucide-${il(e)}`,
            ...f,
          },
          [
            ...t.map(([u, m]) => a.exports.createElement(u, m)),
            ...((Array.isArray(s) ? s : [s]) || []),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
var cl = ll;
const dl = cl("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function ul() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = _r(t)) && (r && (r += " "), (r += n));
  return r;
}
function _r(e) {
  if (typeof e == "string") return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = _r(e[r])) && (n && (n += " "), (n += t));
  return n;
}
var qt = "-";
function fl(e) {
  var t = ml(e),
    n = e.conflictingClassGroups,
    r = e.conflictingClassGroupModifiers,
    o = r === void 0 ? {} : r;
  function i(s) {
    var f = s.split(qt);
    return f[0] === "" && f.length !== 1 && f.shift(), Wr(f, t) || pl(s);
  }
  function l(s, f) {
    var d = n[s] || [];
    return f && o[s] ? [].concat(d, o[s]) : d;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: l };
}
function Wr(e, t) {
  var l;
  if (e.length === 0) return t.classGroupId;
  var n = e[0],
    r = t.nextPart.get(n),
    o = r ? Wr(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length !== 0) {
    var i = e.join(qt);
    return (l = t.validators.find(function (s) {
      var f = s.validator;
      return f(i);
    })) == null
      ? void 0
      : l.classGroupId;
  }
}
var An = /^\[(.+)\]$/;
function pl(e) {
  if (An.test(e)) {
    var t = An.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function ml(e) {
  var t = e.theme,
    n = e.prefix,
    r = { nextPart: new Map(), validators: [] },
    o = vl(Object.entries(e.classGroups), n);
  return (
    o.forEach(function (i) {
      var l = i[0],
        s = i[1];
      It(s, r, l, t);
    }),
    r
  );
}
function It(e, t, n, r) {
  e.forEach(function (o) {
    if (typeof o == "string") {
      var i = o === "" ? t : Fn(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (gl(o)) {
        It(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(function (l) {
      var s = l[0],
        f = l[1];
      It(f, Fn(t, s), n, r);
    });
  });
}
function Fn(e, t) {
  var n = e;
  return (
    t.split(qt).forEach(function (r) {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function gl(e) {
  return e.isThemeGetter;
}
function vl(e, t) {
  return t
    ? e.map(function (n) {
        var r = n[0],
          o = n[1],
          i = o.map(function (l) {
            return typeof l == "string"
              ? t + l
              : typeof l == "object"
              ? Object.fromEntries(
                  Object.entries(l).map(function (s) {
                    var f = s[0],
                      d = s[1];
                    return [t + f, d];
                  })
                )
              : l;
          });
        return [r, i];
      })
    : e;
}
function hl(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    n = new Map(),
    r = new Map();
  function o(i, l) {
    n.set(i, l), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get: function (l) {
      var s = n.get(l);
      if (s !== void 0) return s;
      if ((s = r.get(l)) !== void 0) return o(l, s), s;
    },
    set: function (l, s) {
      n.has(l) ? n.set(l, s) : o(l, s);
    },
  };
}
var Vr = "!";
function bl(e) {
  var t = e.separator || ":",
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (l) {
    for (var s = [], f = 0, d = 0, u, m = 0; m < l.length; m++) {
      var g = l[m];
      if (f === 0) {
        if (g === r && (n || l.slice(m, m + o) === t)) {
          s.push(l.slice(d, m)), (d = m + o);
          continue;
        }
        if (g === "/") {
          u = m;
          continue;
        }
      }
      g === "[" ? f++ : g === "]" && f--;
    }
    var b = s.length === 0 ? l : l.substring(d),
      x = b.startsWith(Vr),
      p = x ? b.substring(1) : b,
      h = u && u > d ? u - d : void 0;
    return {
      modifiers: s,
      hasImportantModifier: x,
      baseClassName: p,
      maybePostfixModifierPosition: h,
    };
  };
}
function xl(e) {
  if (e.length <= 1) return e;
  var t = [],
    n = [];
  return (
    e.forEach(function (r) {
      var o = r[0] === "[";
      o ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
    }),
    t.push.apply(t, n.sort()),
    t
  );
}
function yl(e) {
  return { cache: hl(e.cacheSize), splitModifiers: bl(e), ...fl(e) };
}
var El = /\s+/;
function wl(e, t) {
  var n = t.splitModifiers,
    r = t.getClassGroupId,
    o = t.getConflictingClassGroupIds,
    i = new Set();
  return e
    .trim()
    .split(El)
    .map(function (l) {
      var s = n(l),
        f = s.modifiers,
        d = s.hasImportantModifier,
        u = s.baseClassName,
        m = s.maybePostfixModifierPosition,
        g = r(m ? u.substring(0, m) : u),
        b = Boolean(m);
      if (!g) {
        if (!m) return { isTailwindClass: !1, originalClassName: l };
        if (((g = r(u)), !g))
          return { isTailwindClass: !1, originalClassName: l };
        b = !1;
      }
      var x = xl(f).join(":"),
        p = d ? x + Vr : x;
      return {
        isTailwindClass: !0,
        modifierId: p,
        classGroupId: g,
        originalClassName: l,
        hasPostfixModifier: b,
      };
    })
    .reverse()
    .filter(function (l) {
      if (!l.isTailwindClass) return !0;
      var s = l.modifierId,
        f = l.classGroupId,
        d = l.hasPostfixModifier,
        u = s + f;
      return i.has(u)
        ? !1
        : (i.add(u),
          o(f, d).forEach(function (m) {
            return i.add(s + m);
          }),
          !0);
    })
    .reverse()
    .map(function (l) {
      return l.originalClassName;
    })
    .join(" ");
}
function Cl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r,
    o,
    i,
    l = s;
  function s(d) {
    var u = t[0],
      m = t.slice(1),
      g = m.reduce(function (b, x) {
        return x(b);
      }, u());
    return (r = yl(g)), (o = r.cache.get), (i = r.cache.set), (l = f), f(d);
  }
  function f(d) {
    var u = o(d);
    if (u) return u;
    var m = wl(d, r);
    return i(d, m), m;
  }
  return function () {
    return l(ul.apply(null, arguments));
  };
}
function V(e) {
  var t = function (r) {
    return r[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var Ur = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Sl = /^\d+\/\d+$/,
  kl = new Set(["px", "full", "screen"]),
  $l = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Pl =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ml = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Y(e) {
  return de(e) || kl.has(e) || Sl.test(e) || Ot(e);
}
function Ot(e) {
  return ge(e, "length", Ol);
}
function Tl(e) {
  return ge(e, "size", jr);
}
function Al(e) {
  return ge(e, "position", jr);
}
function Fl(e) {
  return ge(e, "url", Rl);
}
function je(e) {
  return ge(e, "number", de);
}
function de(e) {
  return !Number.isNaN(Number(e));
}
function Nl(e) {
  return e.endsWith("%") && de(e.slice(0, -1));
}
function Se(e) {
  return Nn(e) || ge(e, "number", Nn);
}
function R(e) {
  return Ur.test(e);
}
function ke() {
  return !0;
}
function ee(e) {
  return $l.test(e);
}
function Il(e) {
  return ge(e, "", Dl);
}
function ge(e, t, n) {
  var r = Ur.exec(e);
  return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function Ol(e) {
  return Pl.test(e);
}
function jr() {
  return !1;
}
function Rl(e) {
  return e.startsWith("url(");
}
function Nn(e) {
  return Number.isInteger(Number(e));
}
function Dl(e) {
  return Ml.test(e);
}
function Ll() {
  var e = V("colors"),
    t = V("spacing"),
    n = V("blur"),
    r = V("brightness"),
    o = V("borderColor"),
    i = V("borderRadius"),
    l = V("borderSpacing"),
    s = V("borderWidth"),
    f = V("contrast"),
    d = V("grayscale"),
    u = V("hueRotate"),
    m = V("invert"),
    g = V("gap"),
    b = V("gradientColorStops"),
    x = V("gradientColorStopPositions"),
    p = V("inset"),
    h = V("margin"),
    y = V("opacity"),
    S = V("padding"),
    v = V("saturate"),
    C = V("scale"),
    E = V("sepia"),
    M = V("skew"),
    A = V("space"),
    P = V("translate"),
    O = function () {
      return ["auto", "contain", "none"];
    },
    w = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    T = function () {
      return ["auto", R, t];
    },
    k = function () {
      return [R, t];
    },
    F = function () {
      return ["", Y];
    },
    $ = function () {
      return ["auto", de, R];
    },
    _ = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    I = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    W = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    D = function () {
      return [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ];
    },
    B = function () {
      return ["", "0", R];
    },
    j = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    },
    U = function () {
      return [de, je];
    },
    ie = function () {
      return [de, R];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [ke],
      spacing: [Y],
      blur: ["none", "", ee, R],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ee, R],
      borderSpacing: k(),
      borderWidth: F(),
      contrast: U(),
      grayscale: B(),
      hueRotate: ie(),
      invert: B(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Nl, Ot],
      inset: T(),
      margin: T(),
      opacity: U(),
      padding: k(),
      saturate: U(),
      scale: U(),
      sepia: B(),
      skew: ie(),
      space: k(),
      translate: k(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", R] }],
      container: ["container"],
      columns: [{ columns: [ee] }],
      "break-after": [{ "break-after": j() }],
      "break-before": [{ "break-before": j() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(_(), [R]) }],
      overflow: [{ overflow: w() }],
      "overflow-x": [{ "overflow-x": w() }],
      "overflow-y": [{ "overflow-y": w() }],
      overscroll: [{ overscroll: O() }],
      "overscroll-x": [{ "overscroll-x": O() }],
      "overscroll-y": [{ "overscroll-y": O() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [p] }],
      "inset-x": [{ "inset-x": [p] }],
      "inset-y": [{ "inset-y": [p] }],
      start: [{ start: [p] }],
      end: [{ end: [p] }],
      top: [{ top: [p] }],
      right: [{ right: [p] }],
      bottom: [{ bottom: [p] }],
      left: [{ left: [p] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Se] }],
      basis: [{ basis: T() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", R] }],
      grow: [{ grow: B() }],
      shrink: [{ shrink: B() }],
      order: [{ order: ["first", "last", "none", Se] }],
      "grid-cols": [{ "grid-cols": [ke] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Se] }, R] }],
      "col-start": [{ "col-start": $() }],
      "col-end": [{ "col-end": $() }],
      "grid-rows": [{ "grid-rows": [ke] }],
      "row-start-end": [{ row: ["auto", { span: [Se] }, R] }],
      "row-start": [{ "row-start": $() }],
      "row-end": [{ "row-end": $() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", R] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", R] }],
      gap: [{ gap: [g] }],
      "gap-x": [{ "gap-x": [g] }],
      "gap-y": [{ "gap-y": [g] }],
      "justify-content": [{ justify: ["normal"].concat(D()) }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal"].concat(D(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [].concat(D(), ["baseline"]) }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [S] }],
      px: [{ px: [S] }],
      py: [{ py: [S] }],
      ps: [{ ps: [S] }],
      pe: [{ pe: [S] }],
      pt: [{ pt: [S] }],
      pr: [{ pr: [S] }],
      pb: [{ pb: [S] }],
      pl: [{ pl: [S] }],
      m: [{ m: [h] }],
      mx: [{ mx: [h] }],
      my: [{ my: [h] }],
      ms: [{ ms: [h] }],
      me: [{ me: [h] }],
      mt: [{ mt: [h] }],
      mr: [{ mr: [h] }],
      mb: [{ mb: [h] }],
      ml: [{ ml: [h] }],
      "space-x": [{ "space-x": [A] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [A] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", R, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", R, Y] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [ee] },
            ee,
            R,
          ],
        },
      ],
      h: [{ h: [R, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", R, Y] }],
      "max-h": [{ "max-h": [R, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", ee, Ot] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            je,
          ],
        },
      ],
      "font-family": [{ font: [ke] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            R,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", de, je] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            R,
            Y,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", R] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", R] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(I(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", Y] }],
      "underline-offset": [{ "underline-offset": ["auto", R, Y] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: k() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            R,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", R] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(_(), [Al]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Tl] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Fl,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [x] }],
      "gradient-via-pos": [{ via: [x] }],
      "gradient-to-pos": [{ to: [x] }],
      "gradient-from": [{ from: [b] }],
      "gradient-via": [{ via: [b] }],
      "gradient-to": [{ to: [b] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [].concat(I(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: I() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: [""].concat(I()) }],
      "outline-offset": [{ "outline-offset": [R, Y] }],
      "outline-w": [{ outline: [Y] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: F() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [Y] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", ee, Il] }],
      "shadow-color": [{ shadow: [ke] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": W() }],
      "bg-blend": [{ "bg-blend": W() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [f] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", ee, R] }],
      grayscale: [{ grayscale: [d] }],
      "hue-rotate": [{ "hue-rotate": [u] }],
      invert: [{ invert: [m] }],
      saturate: [{ saturate: [v] }],
      sepia: [{ sepia: [E] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [f] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
      "backdrop-invert": [{ "backdrop-invert": [m] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [v] }],
      "backdrop-sepia": [{ "backdrop-sepia": [E] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [l] }],
      "border-spacing-x": [{ "border-spacing-x": [l] }],
      "border-spacing-y": [{ "border-spacing-y": [l] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            R,
          ],
        },
      ],
      duration: [{ duration: ie() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", R] }],
      delay: [{ delay: ie() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", R] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [Se, R] }],
      "translate-x": [{ "translate-x": [P] }],
      "translate-y": [{ "translate-y": [P] }],
      "skew-x": [{ "skew-x": [M] }],
      "skew-y": [{ "skew-y": [M] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            R,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            R,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": k() }],
      "scroll-mx": [{ "scroll-mx": k() }],
      "scroll-my": [{ "scroll-my": k() }],
      "scroll-ms": [{ "scroll-ms": k() }],
      "scroll-me": [{ "scroll-me": k() }],
      "scroll-mt": [{ "scroll-mt": k() }],
      "scroll-mr": [{ "scroll-mr": k() }],
      "scroll-mb": [{ "scroll-mb": k() }],
      "scroll-ml": [{ "scroll-ml": k() }],
      "scroll-p": [{ "scroll-p": k() }],
      "scroll-px": [{ "scroll-px": k() }],
      "scroll-py": [{ "scroll-py": k() }],
      "scroll-ps": [{ "scroll-ps": k() }],
      "scroll-pe": [{ "scroll-pe": k() }],
      "scroll-pt": [{ "scroll-pt": k() }],
      "scroll-pr": [{ "scroll-pr": k() }],
      "scroll-pb": [{ "scroll-pb": k() }],
      "scroll-pl": [{ "scroll-pl": k() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", R] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Y, je] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
var zl = Cl(Ll);
function se(...e) {
  return zl(Un(e));
}
const Bl = ol,
  Gr = ({ className: e, ...t }) =>
    a.exports.createElement(Rr, { className: se(e), ...t });
Gr.displayName = Rr.displayName;
const Zr = a.exports.forwardRef(({ className: e, ...t }, n) =>
  a.exports.createElement(Dr, {
    ref: n,
    className: se(
      "fixed inset-0 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80 z-[calc(9e10)]",
      e
    ),
    ...t,
  })
);
Zr.displayName = Dr.displayName;
const qr = a.exports.forwardRef(({ className: e, children: t, ...n }, r) =>
  a.exports.createElement(
    Gr,
    null,
    a.exports.createElement(Zr, null),
    a.exports.createElement(
      Lr,
      {
        ref: r,
        className: se(
          "fixed left-[50%] top-[50%] z-[calc(9e10)] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
          e
        ),
        ...n,
      },
      t,
      a.exports.createElement(
        al,
        {
          className:
            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-800 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",
        },
        a.exports.createElement(dl, { className: "h-4 w-4" }),
        a.exports.createElement("span", { className: "sr-only" }, "Close")
      )
    )
  )
);
qr.displayName = Lr.displayName;
const Hr = ({ className: e, ...t }) =>
  a.exports.createElement("div", {
    className: se("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
Hr.displayName = "DialogHeader";
const Kr = ({ className: e, ...t }) =>
  a.exports.createElement("div", {
    className: se(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
Kr.displayName = "DialogFooter";
const Xr = a.exports.forwardRef(({ className: e, ...t }, n) =>
  a.exports.createElement(zr, {
    ref: n,
    className: se("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Xr.displayName = zr.displayName;
const Rt = a.exports.forwardRef(({ className: e, ...t }, n) =>
  a.exports.createElement(Br, {
    ref: n,
    className: se("text-sm text-slate-500 dark:text-slate-400", e),
    ...t,
  })
);
Rt.displayName = Br.displayName;
const In = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  On = Un,
  _l = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return On(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      l = Object.keys(o).map((d) => {
        const u = n == null ? void 0 : n[d],
          m = i == null ? void 0 : i[d];
        if (u === null) return null;
        const g = In(u) || In(m);
        return o[d][g];
      }),
      s =
        n &&
        Object.entries(n).reduce((d, u) => {
          let [m, g] = u;
          return g === void 0 || (d[m] = g), d;
        }, {}),
      f =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((d, u) => {
              let { class: m, className: g, ...b } = u;
              return Object.entries(b).every((x) => {
                let [p, h] = x;
                return Array.isArray(h)
                  ? h.includes({ ...i, ...s }[p])
                  : { ...i, ...s }[p] === h;
              })
                ? [...d, m, g]
                : d;
            }, []);
    return On(
      e,
      l,
      f,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  Wl = _l(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-800",
    {
      variants: {
        variant: {
          default:
            "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
          destructive:
            "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
          outline:
            "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          secondary:
            "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
          ghost:
            "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Dt = a.exports.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const l = r ? nt : "button";
      return a.exports.createElement(l, {
        className: se(Wl({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
Dt.displayName = "Button";
function Vl({ url: e }) {
  return c.createElement("img", { src: e });
}
function Ul({ url: e }) {
  const t = new URL(e);
  return t.host !== "youtube.com" && t.host !== "www.youtube.com"
    ? null
    : (t.searchParams.set("controls", "0"),
      t.searchParams.set("modestbranding", "1"),
      c.createElement("iframe", {
        sandbox:
          "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        className: "w-full h-full",
        src: t.toString(),
      }));
}
function jl({
  ad: {
    id: e,
    title: t,
    description: n,
    image: r,
    footer: o,
    videoUrl: i,
    canSetAsSeen: l,
    cta: s,
  },
  setAdsState: f,
}) {
  const d = ["wa.me", "api.whatsapp.com", "web.whatsapp.com"],
    u = (s == null ? void 0 : s.url) && d.some((m) => s.url.includes(m));
  return c.createElement(
    Bl,
    {
      defaultOpen: !0,
      onOpenChange: (m) => {
        m || f(void 0);
      },
    },
    c.createElement(
      qr,
      { className: "sm:max-w-[425px]" },
      (t || n) &&
        c.createElement(
          Hr,
          null,
          t && c.createElement(Xr, null, t),
          n && c.createElement(Rt, null, n)
        ),
      r && c.createElement(Vl, { url: r }),
      i && c.createElement(Ul, { url: i }),
      o && c.createElement(Rt, null, o),
      c.createElement(
        Kr,
        null,
        l &&
          c.createElement(
            Dt,
            {
              onClick: () => {
                Xe({ type: "markAdAsSeen", adId: e }), f(void 0);
              },
              variant: "ghost",
            },
            "Marcar como visto"
          ),
        s &&
          c.createElement(
            Dt,
            {
              asChild: !0,
              onClick: () => {
                Xe({ type: "openAdCta", adId: e, ctaUrl: s.url }),
                  s.closeAfterClick && f(void 0);
              },
              variant: "default",
              className:
                "bg-zap-purple text-slate-50 hover:bg-zap-purple/80 dark:bg-zap-purple dark:text-slate-50 dark:hover:bg-zap-purple/80",
            },
            c.createElement(
              "a",
              { href: s.url, target: u ? "_self" : "_blank" },
              s.text
            )
          )
      )
    )
  );
}
async function Gl({ phone: e, name: t, operatorPhone: n }) {
  return new Promise((r, o) => {
    chrome.runtime.sendMessage(
      H,
      { type: "newChat", data: { phone: e, name: t, operatorPhone: n } },
      async ({ type: i, response: l }) => i === "newChat" && r()
    );
  });
}
function Zl() {
  const e = [];
  function t(o) {
    e.push(o);
  }
  async function n(o) {
    return new Promise((i) => {
      const l = Qe();
      let s = !1;
      function f() {
        (s = !0), window.removeEventListener(l, f), i(!0);
      }
      window.addEventListener(l, f),
        setTimeout(() => {
          s || f();
        }, 1e4),
        e.push({ ...o, promiseIdPassed: l });
    });
  }
  async function r() {
    if (e.length > 0) {
      const o = e.shift();
      if (o) {
        const i = await Je(o.chatId);
        i
          ? await Us(
              o.itemId,
              i,
              o.avoidToast,
              o.premiumDrilling,
              o.promiseIdPassed
            )
          : z.error(
              `N\xE3o foi poss\xEDvel enviar o item para o chat ${o.chatId}`
            );
      }
    }
    setTimeout(r, 100);
  }
  return r(), { queue: e, add: t, addAndWait: n };
}
const Q = Zl();
function ql(e, t) {
  zt({
    type: "bulkSendStarted",
    timestamp: Date.now(),
    metadata: {
      amount: e.targetNumbers.length,
      itemType: e.item.type,
      delayMax: e.delay.max,
      delayMin: e.delay.min,
    },
  });
  let n,
    r = !1;
  function o() {
    r = !0;
    for (const i of n || [])
      ((i == null ? void 0 : i.status) === "running" ||
        (i == null ? void 0 : i.status) === "pending") &&
        (n = t(
          {
            target: i.phone_number,
            status: "pending",
            message: "Disparo interrompido",
          },
          n
        ));
  }
  return (
    new Promise(async (i) => {
      const { targetNumbers: l, delay: s, item: f } = e;
      for (const d of l) {
        if (r) break;
        const u = Ge(s.min * 1e3, s.max * 1e3);
        n = t(
          {
            target: d,
            status: "running",
            message: `Checando o n\xFAmero ${d}`,
          },
          n
        );
        try {
          const m = await Je(`55${d}@c.us`);
          if (!m)
            n = t(
              {
                target: d,
                status: "error",
                message: "N\xFAmero n\xE3o encontrado",
              },
              n
            );
          else {
            if (
              ((n = t(
                {
                  target: d,
                  status: "running",
                  message: `Ser\xE1 enviado em ${Math.round(u / 1e3)} segundos`,
                },
                n
              )),
              await wt(u),
              r)
            )
              break;
            await Q.addAndWait({
              itemId: f.id,
              chatId: m.id.toString(),
              avoidToast: !0,
            }),
              (n = t(
                {
                  target: d,
                  status: "success",
                  message: "Enviado com sucesso",
                },
                n
              ));
          }
        } catch {
          n = t(
            { target: d, status: "error", message: "N\xFAmero inv\xE1lido" },
            n
          );
        }
      }
      z.success("Envio finalizado"), i(!0);
    }),
    () => {
      o();
    }
  );
}
function Hl({
  funnel: e,
  chat: t,
  changeFunnelStatus: n,
  generatedId: r,
  delayAtStart: o,
}) {
  const i = e.data || [];
  let l = !1;
  function s() {
    N.ChatPresence.markPaused(t),
      (l = !0),
      n(r, "stopped", void 0),
      z.info(`Funil ${e.name} Interrompido no chat ${t.formattedTitle}`);
  }
  function f(d) {
    async function u() {
      t.presence.subscribe(),
        N.ChatPresence.sendPresenceAvailable(),
        N.ChatPresence.markPaused(t),
        l ||
          ((d.type === "mensagens" || d.type === "audios") &&
            (d.type === "mensagens"
              ? await N.ChatPresence.markComposing(t)
              : d.type === "audios" &&
                (await N.ChatPresence.markRecording(t))));
    }
    u();
    const m = d.type === "mensagens" ? 500 : 5e3;
    return setInterval(u, Ge(m, m + 1e3));
  }
  return (
    new Promise(async (d) => {
      for (const [u, m] of i.entries()) {
        if (l) {
          N.ChatPresence.markPaused(t);
          break;
        }
        const { delay: g, id: b } = m,
          x = g > 0 ? Ge(g, g + 1500) : Ge(500, 1300);
        if (
          (setTimeout(() => {
            n(r, "running", {
              expectDeliveryTimestamp: Date.now() + x + ((u === 0 && o) || 0),
              type: m.type,
              queuePosition: u + 1,
              queueLength: i.length,
            });
          }, 1e3),
          u === 0 && o && o > 0 && (await wt(o), l))
        ) {
          N.ChatPresence.markPaused(t);
          break;
        }
        const p = f(m);
        await wt(x),
          l ||
            Q.add({
              itemId: b,
              chatId: t.id.toString(),
              avoidToast: !0,
              premiumDrilling: !0,
            }),
          clearInterval(p),
          N.ChatPresence.markPaused(t);
      }
      N.ChatPresence.markPaused(t), !l && n(r, "done", void 0), d(!0);
    }),
    { funnelId: e.id, stopFunction: s }
  );
}
function Kl() {
  const e = [];
  function t(o, i, l) {
    const s = e.find(
        (d) =>
          d.generatedId === o &&
          (d.status === "queued" || d.status === "running")
      ),
      f = s && e.indexOf(s);
    s &&
      typeof f < "u" &&
      !Number.isNaN(f) &&
      f > -1 &&
      e.splice(f, 1, { ...s, status: i, current: l });
  }
  async function n(o, i, l) {
    const s = Qe(),
      f = e.find((m) => m.targetId === i && m.status === "running"),
      d = await Je(i);
    if (f) {
      z.info(
        `Um funil j\xE1 est\xE1 sendo disparado para ${
          d == null ? void 0 : d.formattedTitle
        }, cancelando...`
      );
      return;
    }
    const { stopFunction: u } = Hl({
      funnel: o,
      chat: d,
      changeFunnelStatus: t,
      generatedId: s,
      delayAtStart: l,
    });
    e.push({
      generatedId: s,
      funnel: o,
      targetId: d.id.toString(),
      stopFunction: u,
      status: "queued",
      current: void 0,
    }),
      zt({
        type: "funnelSent",
        timestamp: Date.now(),
        metadata: { funnelId: o.id },
      });
  }
  function r() {
    return e;
  }
  return { queue: e, add: n, getFunnels: r, changeFunnelStatus: t };
}
const at = Kl();
function Xl() {
  var P, O;
  const { isPremium: e, keyData: t, refreshPremium: n, getPremium: r } = Vt(),
    { flags: o } = Zt(),
    {
      shouldAskToSendShortcuts: i,
      shouldHideShortcuts: l,
      shouldHideCurrentFunnelPopover: s,
      shouldMentionAllUsersOnGroup: f,
    } = Ut(),
    [d, u] = a.exports.useState(),
    [m, g] = a.exports.useState(),
    [b, x] = a.exports.useState(),
    [p, h] = a.exports.useState(),
    [y, S] = a.exports.useState();
  async function v() {
    var k, F;
    const w = document.querySelector("#main");
    if (l) {
      g(void 0),
        (k = w == null ? void 0 : w.parentElement) == null ||
          k.classList.remove("zvWithShortcuts");
      return;
    }
    const T = await Uo();
    g(T),
      T &&
        Object.values(T).filter(($) => $.length > 0).length > 0 &&
        ((F = w == null ? void 0 : w.parentElement) == null ||
          F.classList.add("zvWithShortcuts"));
  }
  a.exports.useEffect(() => {
    const w = setInterval(() => {
      var k;
      const T = Ke();
      if ((u(T), T && !document.getElementById("currentFunnelWrapper"))) {
        const F = document.createElement("div");
        (F.id = "currentFunnelWrapper"),
          (F.style.cssText = `
          position: fixed;
          transform: translate(10px, 10px);
            `),
          (k = document.querySelector(
            "[data-testid=conversation-panel-messages]"
          )) == null || k.appendChild(F);
      }
    }, 1e3);
    return () => clearInterval(w);
  }, []);
  const C = async (w) => {
    function T(k) {
      k && window.dispatchEvent(new CustomEvent(k));
    }
    try {
      const { detail: k } = w,
        { type: F, item: $ } = k;
      if (F === "toast") {
        z[$.type]($.message);
        return;
      }
      if (F === "ads") {
        const { item: B } = k;
        h(B);
        return;
      }
      const { chatTargetId: _, promiseId: I, avoidToast: W } = k;
      if (F === "funis") {
        x($);
        return;
      }
      if (F === "bulk") {
        S($), T(I);
        return;
      }
      const D = _ ? await Je(_) : ne();
      if (!D && !_) {
        z.error(
          "Nenhum chat aberto, clique na conversa desejada antes de enviar um item"
        ),
          T(I);
        return;
      }
      if (!D && !!_) {
        z.error(`Chat(${_}) n\xE3o encontrado`), T(I);
        return;
      }
      if (F === "directFunnel") {
        if ((T(I), !e)) return;
        at.add($, D.id.toString(), k.delayAtStart);
        return;
      }
      if (F === "mensagens") {
        const B = Bo(String($.data), D, f)
          .then((j) => {
            T(I);
          })
          .catch((j) => {
            throw (T(I), j);
          });
        W ||
          z.promise(B, {
            pending: "Enviando mensagem...",
            success: "Mensagem enviada!",
            error: "Erro ao enviar a mensagem.",
          });
        return;
      }
      if (F === "audios") {
        const { premium: B } = k;
        if ((r(), !e && !B && (await Dn($.data)) > 60)) {
          z.error(
            `${t} => O audio n\xE3o pode ser enviado porque excede o limite de 60 segundos, considere assinar a vers\xE3o PREMIUM `,
            { theme: "colored", autoClose: 3e3 }
          ),
            T(I),
            n();
          return;
        }
        if ($.sendAsForwarded) {
          const j = Jt($.data, D, void 0, f)
            .then((U) => {
              T(I);
            })
            .catch((U) => {
              throw (T(I), U);
            });
          W ||
            z.promise(j, {
              pending: "Enviando \xE1udio...",
              success: "\xC1udio enviado!",
              error: "Erro ao enviar o \xE1udio.",
            });
        } else {
          const j = Lo($.data, D, f)
            .then((U) => {
              T(I);
            })
            .catch((U) => {
              throw (
                (console.log(U),
                T(I),
                z.error(
                  typeof U == "string"
                    ? U
                    : JSON.stringify(U.toString ? U.toString() : U),
                  { autoClose: 5e3 }
                ),
                U)
              );
            });
          W ||
            z.promise(j, {
              pending: "Enviando \xE1udio...",
              success: "\xC1udio enviado!",
              error: "Erro ao enviar o \xE1udio.",
            });
        }
        return;
      }
      if (F === "medias") {
        const B = Jt($.data, D, $.caption, f)
          .then((j) => {
            T(I);
          })
          .catch((j) => {
            throw (T(I), j);
          });
        W ||
          z.promise(B, {
            pending: "Enviando m\xEDdia...",
            success: "M\xEDdia enviada!",
            error: "Erro ao enviar a m\xEDdia.",
          });
        return;
      }
      if (F === "docs") {
        const B = zo($.data, D, $.fileName, f)
          .then((j) => {
            T(I);
          })
          .catch((j) => {
            throw (T(I), j);
          });
        W ||
          z.promise(B, {
            pending: "Enviando documento...",
            success: "Documento enviado!",
            error: "Erro ao enviar o documento.",
          });
      }
      D.composeQuotedMsg = null;
    } catch (k) {
      console.log(k),
        z.error(
          typeof k == "string"
            ? k
            : JSON.stringify(k.toString ? k.toString() : k),
          { autoClose: 5e3 }
        );
    }
  };
  function E({ triggers: w, chatTitle: T, chatTargetId: k }) {
    if (w.length === 0) return;
    w.length > 1 &&
      z.info(
        c.createElement(
          "div",
          { className: "flex flex-col" },
          c.createElement(
            "span",
            null,
            "Mais de um gatilho correspondente no chat ",
            T,
            ", enviando o primeiro encontrado."
          ),
          c.createElement(
            "span",
            { className: "underline text-zap-blue" },
            "Lista: "
          ),
          c.createElement(
            "ol",
            null,
            w.map((I) =>
              c.createElement("li", { key: I.triggerId }, " - ", I.name)
            )
          )
        )
      );
    const [F] = w,
      { funnelId: $, secondsBeforeSend: _ } = F;
    Vs($, k, _),
      zt({
        type: "triggerFired",
        timestamp: Date.now(),
        metadata: { triggerId: F.triggerId },
      });
  }
  const M = (w) => {
      var T;
      (w == null ? void 0 : w.type) === "ciphertext" &&
        (w == null ||
          w.once("change:type", () => {
            queueMicrotask(() => {
              M(w);
            });
          })),
        (w == null ? void 0 : w.isNewMsg) &&
          !((T = w == null ? void 0 : w.id) != null && T.fromMe) &&
          (w == null ? void 0 : w.type) === "chat" &&
          queueMicrotask(async () => {
            const k = w == null ? void 0 : w.body;
            if (!k) return;
            const F = await jo({ message: k });
            if (F.length === 0) return;
            if (F.length > 0 && !e) {
              n();
              return;
            }
            const $ = Gt(w == null ? void 0 : w.id.remote.toString()),
              _ =
                !!$.isUser &&
                !!$.contact.isAddressBookContact &&
                $.formattedTitle.replace(/\D/g, "") !== $.id.user;
            if (!!$.isGroup) {
              const W = F.filter((D) => !D.dontSendToGroups);
              E({
                chatTargetId: $ == null ? void 0 : $.id.toString(),
                chatTitle: $ == null ? void 0 : $.formattedTitle,
                triggers: W,
              });
            } else if (_) {
              const W = F.filter((D) => !D.dontSendToContact);
              E({
                chatTargetId: $ == null ? void 0 : $.id.toString(),
                chatTitle: $ == null ? void 0 : $.formattedTitle,
                triggers: W,
              });
            } else
              E({
                chatTargetId: $ == null ? void 0 : $.id.toString(),
                chatTitle: $ == null ? void 0 : $.formattedTitle,
                triggers: F,
              });
          });
    },
    A = async (w) => {
      if (w != null && w.isUser) {
        await new Promise((W) => {
          const D = (B) => {
            (B == null ? void 0 : B.type) === "ciphertext"
              ? B == null ||
                B.once("change:type", () => {
                  queueMicrotask(() => {
                    D(B);
                  });
                })
              : (B == null ? void 0 : B.type) !== "e2e_notification" &&
                (w.msgs.off("add", D), W(!0));
          };
          w.msgs.on("add", D),
            setTimeout(() => {
              W(!0), w.msgs.off("add", D);
            }, 1e4);
        });
        const T = await (N == null
            ? void 0
            : N.msgFindQuery("before", { count: 1 / 0, remote: w.id })),
          [k] = T.filter((W) => W.type !== "e2e_notification");
        if (!(k != null && k.id) || k.id.fromMe === !0) return;
        const F = k.t * 1e3,
          $ = Date.now() - F,
          _ = 24 * 60 * 60 * 1e3;
        if (Math.floor($ / _) > 0) return;
        queueMicrotask(() => {
          var j, U, ie;
          const W =
              ((j = w.contact) == null ? void 0 : j.pushname) ||
              ((U = w.contact) == null ? void 0 : U.verifiedName) ||
              (w == null ? void 0 : w.formattedTitle),
            D = w.id.user,
            B =
              ((ie = N == null ? void 0 : N.UserPrefs.getMe()) == null
                ? void 0
                : ie.user) || Co();
          Gl({ name: W, phone: D, operatorPhone: B });
        });
      }
    };
  return (
    a.exports.useEffect(
      () => (
        N == null || N.Msg.on("add", M),
        N == null || N.Chat.on("add", A),
        () => {
          N == null || N.Msg.off("add", M), N == null || N.Chat.off("add", A);
        }
      ),
      [e, t, o]
    ),
    a.exports.useEffect(() => {
      const w = setInterval(async () => {
        var F, $;
        const T = document.querySelector('#main [contenteditable="true"]');
        document.querySelector("#main") &&
          !(
            (F = document.getElementById("actionsContainerZV")) != null &&
            F.innerHTML
          ) &&
          !l &&
          (await v()),
          !!(
            ($ = document.getElementById("actionsContainerZV")) != null &&
            $.innerHTML
          ) &&
            !l &&
            T &&
            !T.onkeyup &&
            !!document.getElementById("actionsContainerZV") &&
            document.getElementById("actionsContainerZV").children.length > 0 &&
            ((T.onkeyup = (_) => {
              var W;
              const I = (W = _.target) == null ? void 0 : W.textContent;
              Array.from(
                document.getElementById("actionsContainerZV").children
              ).forEach((D) => {
                const B = D.innerText;
                I && !Kt(B).toLowerCase().includes(Kt(I).toLowerCase())
                  ? (D.style.display = "none")
                  : (D.style.display = "block");
              });
            }),
            (T.onblur = (_) => {
              !!T &&
                !T.textContent &&
                !!document.getElementById("actionsContainerZV") &&
                document.getElementById("actionsContainerZV").children
                  .length !==
                  Array.from(
                    document.getElementById("actionsContainerZV").children
                  ).filter((I) => I.style.display === "block").length &&
                Array.from(
                  document.getElementById("actionsContainerZV").children
                ).forEach((I) => {
                  I.style.display = "block";
                });
            }));
      }, 1e3);
      return () => {
        clearInterval(w);
      };
    }, [i, l, s]),
    a.exports.useEffect(
      () => (
        window.addEventListener($t.eventName, C),
        () => {
          window.removeEventListener($t.eventName, C);
        }
      ),
      [e, t, f]
    ),
    c.createElement(
      c.Fragment,
      null,
      c.createElement("div", {
        id: "zv-injected",
        className: "invisible hidden",
      }),
      p && c.createElement(jl, { ad: p, setAdsState: h }),
      b && c.createElement(Io, { funnel: b, setFunnelPopUp: x }),
      y && c.createElement(Xs, { bulk: y }),
      !s &&
        document.getElementById("main") &&
        d &&
        c.createElement(
          pt,
          { container: document.getElementById("main") },
          c.createElement(_s, { chatId: d.targetId, setCurrentFunnel: u })
        ),
      document.getElementById("configPopoverZV") &&
        c.createElement(
          pt,
          { container: document.getElementById("configPopoverZV") },
          c.createElement(
            yr,
            null,
            c.createElement(
              "div",
              { className: " w-7 h-7 mx-2" },
              c.createElement(Er, { style: { width: "100%", height: "100%" } })
            )
          )
        ),
      !l &&
        ((P = document.getElementById("main")) == null
          ? void 0
          : P.parentElement) &&
        m &&
        Object.values(m).filter((w) => w.length > 0).length > 0 &&
        c.createElement(
          pt,
          {
            container:
              (O = document.getElementById("main")) == null
                ? void 0
                : O.parentElement,
          },
          c.createElement(
            "div",
            {
              id: "actionsWrapperZV",
              className: `
          flex items-center justify-between w-[98%] absolute bottom-0 z-[9999999990]
          `,
            },
            c.createElement(ks, {
              currentActionIndexes: m,
              setFunnelPopUp: x,
              reloadCurrentActionIndexes: v,
            })
          )
        )
    )
  );
}
async function xt(e) {
  return new Promise((t, n) => {
    chrome.runtime.sendMessage(
      H,
      { type: "getSmallItemFromStorage", data: { id: e } },
      async ({ type: r, response: o }) =>
        r === "getSmallItemFromStorage" && t(o.item)
    );
  });
}
async function yt(e) {
  for (const t in e) localStorage.setItem(t, e[t]);
}
Bn.setAppElement("#app");
try {
  Mo();
} catch (e) {
  console.log(e);
}
function Yl() {
  xt("chave").then((e) => {
    !e || yt({ chave: e });
  }),
    xt("nmb").then((e) => {
      !e || yt({ nmb: e });
    }),
    xt("wppVersion").then((e) => {
      !e || yt({ wppVersion: e });
    });
}
Yl();
const Ql = setInterval(() => {
  var e;
  if ($e && He) {
    if ((clearInterval(Ql), !document.getElementById("rootZV"))) {
      const t = document.createElement("div");
      (t.id = "rootZV"), document.body.appendChild(t);
    }
    if (!document.getElementById("configPopoverZV")) {
      const t = document.createElement("div");
      (t.id = "configPopoverZV"),
        (e = document.querySelector(".two header")) == null || e.appendChild(t);
    }
    go
      .createRoot(document.getElementById("rootZV"))
      .render(
        c.createElement(
          c.StrictMode,
          null,
          c.createElement(
            Go,
            null,
            c.createElement(
              Vo,
              null,
              c.createElement(
                Cs,
                null,
                c.createElement(vo, {
                  theme: "dark",
                  hideProgressBar: !1,
                  newestOnTop: !1,
                  closeOnClick: !0,
                  rtl: !1,
                  pauseOnFocusLoss: !1,
                  draggable: !0,
                  pauseOnHover: !0,
                  position: "top-center",
                  autoClose: 2e3,
                }),
                c.createElement(Xl, null),
                c.createElement(ho, null)
              )
            )
          ),
          c.createElement(bo, null)
        )
      ),
      H
        ? z.success(
            c.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "1rem",
                },
              },
              c.createElement("span", null, "ZapVoice carregado!"),
              c.createElement("span", null, "Seu Whatsapp Web agora tem"),
              c.createElement(
                "span",
                {
                  style: {
                    background: "linear-gradient(to bottom, #6CB2ED, #8D1AF1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginTop: "0.5rem",
                  },
                },
                "Habilidades e Superpoderes!!"
              )
            ),
            { autoClose: 3e3 }
          )
        : z.error(
            "ID da extens\xE3o n\xE3o localizado, recarregue a p\xE1gina"
          );
  }
}, 1e3);
