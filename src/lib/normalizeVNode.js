export function normalizeVNode(vNode) {
  if (vNode === null || vNode === undefined || typeof vNode === "boolean") {
    return "";
  }
  if (typeof vNode === "string" || typeof vNode === "number") {
    return String(vNode);
  }
  if (typeof vNode.type === "function") {
    return normalizeVNode(vNode.type(vNode.props));
  }
  return vNode;
}
