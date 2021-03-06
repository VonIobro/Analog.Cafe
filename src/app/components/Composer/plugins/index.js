// tools
import { html } from "../schema.js"

// components
import { MarkHotkey } from "./mark-hotkey"
import { Linkify } from "./linkify"
import { Paste } from "./paste-html"
import { Save } from "./save"
import AutoReplace from "slate-auto-replace"
import EditBlockquote from "slate-edit-blockquote"

// export
export const plugins = [
	// tools
	Linkify({}),
	Paste({ html }),
	Save({ html }),
	// hot keys
  MarkHotkey({ 	key: "b", 			type: "bold" }),
  MarkHotkey({ 	key: "i", 			type: "italic" }),
  // markdown shortcuts
  AutoReplace({
    trigger: 		"space",
    before: 		/^(>)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "quote" })
    }
  }),
  AutoReplace({
    trigger: 		"enter",
    before: 		/^(\*\*\*)$/,
    transform: 	(transform, e, data, matches) => {
      return transform
      	.setBlock({ type: "divider", isVoid: true })
      	.collapseToEndOfNextBlock()
      	.collapseToEndOfNextBlock()
    }
  }),
  AutoReplace({
    trigger: 		"space",
    before: 		/^(#)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "heading" })
    }
  }),
  AutoReplace({
    trigger: 		"enter",
    before: 		/./,
    onlyIn:			"heading",
    transform: 	(transform, e, data, matches) => {
      return transform
      	.splitBlock()
      	.setBlock({ type: "paragraph" })
    }
  }),
  // special editor menu for quote
	EditBlockquote({
		type: 				"quote",
		typeDefault: 	"paragraph",
	}),
]