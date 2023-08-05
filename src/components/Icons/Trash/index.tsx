import * as React from "react";

const Trash = (props: any) => {
  return (
    <svg width={15} height={18} {...props}>
      <path
        d="M10.572 17.22c1.048 0 1.75-.682 1.802-1.73l.505-10.649h.88c.3 0 .549-.256.549-.556 0-.3-.25-.55-.55-.55h-3.347v-1.12c0-1.062-.688-1.707-1.816-1.707H5.819c-1.128 0-1.817.645-1.817 1.707v1.12H.67a.558.558 0 00-.55.55.56.56 0 00.55.556h.879l.505 10.657c.051 1.047.747 1.721 1.802 1.721h6.716zM9.247 3.734h-4.08V2.688c0-.417.286-.688.725-.688h2.63c.439 0 .725.27.725.688v1.047zm1.208 12.378H3.958c-.417 0-.732-.315-.754-.747L2.691 4.841h9.01l-.477 10.525c-.022.44-.337.747-.769.747zm-5.413-1.252c.279 0 .462-.176.455-.432l-.22-7.837c-.007-.257-.198-.425-.462-.425-.278 0-.461.176-.454.432l.227 7.83c.008.263.183.432.454.432zm2.176 0c.278 0 .469-.176.469-.432v-7.83c0-.256-.19-.432-.47-.432-.278 0-.475.176-.475.432v7.83c0 .256.197.432.476.432zm2.168 0c.263 0 .447-.169.454-.432l.227-7.83c.007-.256-.183-.432-.462-.432-.256 0-.446.168-.454.432l-.22 7.83c-.007.256.176.432.455.432z"
        fill="#8A8A8E"
        fillRule="nonzero"
      />
    </svg>
  );
};

const MemoTrash = React.memo(Trash);
export default MemoTrash;
