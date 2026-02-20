import React, { useEffect, useRef } from "react"
import { RichTextEditor, type RichTextEditorRef, MenuButtonBold, MenuButtonItalic } from "mui-tiptap"
import StarterKit from "@tiptap/starter-kit"
import { Box, Typography, useTheme } from "@mui/material"
import {
    MenuButtonUnderline,
    MenuButtonStrikethrough,
    MenuButtonCode,
    MenuButtonCodeBlock,
    MenuButtonOrderedList,
    MenuButtonBulletedList,
    MenuButtonBlockquote,
    MenuButtonHorizontalRule,
    MenuButtonUndo,
    MenuButtonRedo,
    MenuSelectHeading,
    MenuButtonTextColor,
    MenuButtonHighlightColor,
    MenuDivider
} from "mui-tiptap"
import Underline from "@tiptap/extension-underline"
import { TextStyle } from "@tiptap/extension-text-style"
import { Color } from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"

type Props = {
    label?: string
    value: string                 // HTML content
    onChange: (value: string) => void
}

const FormTextEditor: React.FC<Props> = ({ label, value, onChange }) => {
    const editorRef = useRef<RichTextEditorRef>(null)
    const isUpdating = useRef(false)
    const theme = useTheme()

    const extensions = [
        StarterKit,
        Underline,
        TextStyle,
        Color,
        Highlight.configure({
            multicolor: true
        })
    ]

    useEffect(() => {
        const editor = editorRef.current?.editor
        if (!editor || isUpdating.current) return

        // Get current editor content
        const currentContent = editor.getHTML()

        // Only update if the value is different from current content
        if (currentContent !== value) {
            isUpdating.current = true
            editor.commands.setContent(value || "<p></p>")
            // Reset flag after a short delay to allow the update to complete
            setTimeout(() => {
                isUpdating.current = false
            }, 0)
        }
    }, [value])

    return (
        <Box sx={{ gridColumn: 'span 2' }}>
            {label && (
                <Typography variant="subtitle2" mb={1}>
                    {label}
                </Typography>
            )}

            <Box
                sx={{
                    '& .MuiRichTextEditor-root': {
                        color: theme.palette.text.primary,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                    },
                    '& .ProseMirror': {
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.background.paper,
                        padding: 2,
                        minHeight: '150px',
                        '& p': {
                            color: theme.palette.text.primary,
                            margin: '8px 0',
                        },
                        '& h1, & h2, & h3, & h4, & h5, & h6': {
                            color: theme.palette.text.primary,
                            fontWeight: 'bold',
                            margin: '16px 0 8px 0',
                        },
                        '& h1': { fontSize: '2em' },
                        '& h2': { fontSize: '1.5em' },
                        '& h3': { fontSize: '1.25em' },
                        '& strong': {
                            color: theme.palette.text.primary,
                            fontWeight: 'bold',
                        },
                        '& em': {
                            color: theme.palette.text.primary,
                            fontStyle: 'italic',
                        },
                        '& ul, & ol': {
                            color: theme.palette.text.primary,
                            paddingLeft: '24px',
                            margin: '8px 0',
                        },
                        '& li': {
                            margin: '4px 0',
                        },
                        '& blockquote': {
                            color: theme.palette.text.secondary,
                            borderLeft: `4px solid ${theme.palette.divider}`,
                            paddingLeft: '16px',
                            margin: '16px 0',
                            fontStyle: 'italic',
                        },
                        '& code': {
                            color: theme.palette.primary.main,
                            backgroundColor: theme.palette.action.hover,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontFamily: 'monospace',
                        },
                        '& pre': {
                            backgroundColor: theme.palette.action.hover,
                            color: theme.palette.text.primary,
                            padding: '12px',
                            borderRadius: '4px',
                            overflow: 'auto',
                            margin: '8px 0',
                            '& code': {
                                backgroundColor: 'transparent',
                                padding: 0,
                            }
                        },
                        '& hr': {
                            border: 'none',
                            borderTop: `2px solid ${theme.palette.divider}`,
                            margin: '16px 0',
                        },
                        '&:focus': {
                            outline: 'none',
                            borderColor: theme.palette.primary.main,
                        }
                    },
                    '& .MuiRichTextEditor-toolbar': {
                        backgroundColor: theme.palette.background.paper,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        padding: '8px 12px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '6px',
                    },
                    '& .MuiRichTextEditor-toolbar button': {
                        color: theme.palette.text.primary,
                        minWidth: '32px',
                        height: '32px',
                        padding: '6px',
                        borderRadius: 1,
                        flex: '0 0 auto', // Don't grow or shrink
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                        },
                        '&[data-active="true"]': {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                        }
                    },
                    '& .MuiRichTextEditor-menuSelect': {
                        flex: '0 0 auto',
                        minWidth: '120px',
                        '& .MuiSelect-select': {
                            color: theme.palette.text.primary,
                            fontSize: '0.875rem',
                            padding: '6px 12px',
                        }
                    },
                    '& .MuiRichTextEditor-menuDivider': {
                        width: '1px',
                        height: '24px',
                        backgroundColor: theme.palette.divider,
                        margin: '0 4px',
                        flex: '0 0 auto',
                    }
                }}
            >
                <RichTextEditor
                    ref={editorRef}
                    extensions={extensions}
                    content={value || "<p></p>"}
                    onUpdate={({ editor }) => {
                        if (!isUpdating.current) {
                            onChange(editor.getHTML())
                        }
                    }}
                    renderControls={() => (
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: 1,
                            width: '100%'
                        }}>
                            {/* Text Formatting Group */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <MenuSelectHeading />
                                <MenuDivider />
                            </Box>

                            {/* Basic Formatting */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <MenuButtonBold />
                                <MenuButtonItalic />
                                <MenuButtonUnderline />
                                <MenuButtonStrikethrough />
                                <MenuDivider />
                            </Box>

                            {/* Color Controls */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <MenuButtonTextColor
                                    defaultTextColor={theme.palette.text.primary}
                                    swatchColors={[
                                        { value: theme.palette.text.primary, label: "Default" },
                                        { value: theme.palette.primary.main, label: "Primary" },
                                        { value: theme.palette.secondary.main, label: "Secondary" },
                                        { value: "#e53e3e", label: "Red" },
                                        { value: "#38a169", label: "Green" },
                                        { value: "#3182ce", label: "Blue" },
                                        { value: "#805ad5", label: "Purple" },
                                        { value: "#d69e2e", label: "Yellow" },
                                        { value: "#718096", label: "Gray" },
                                    ]}
                                />
                                <MenuButtonHighlightColor
                                    swatchColors={[
                                        { value: "#fff3cd", label: "Yellow highlight" },
                                        { value: "#d1ecf1", label: "Blue highlight" },
                                        { value: "#d4edda", label: "Green highlight" },
                                        { value: "#f8d7da", label: "Red highlight" },
                                        { value: "#e2e3e5", label: "Gray highlight" },
                                    ]}
                                />
                                <MenuDivider />
                            </Box>

                            {/* Lists */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <MenuButtonBulletedList />
                                <MenuButtonOrderedList />
                                <MenuDivider />
                            </Box>

                            {/* Code and Quotes */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <MenuButtonCode />
                                <MenuButtonCodeBlock />
                                <MenuButtonBlockquote />
                                <MenuDivider />
                            </Box>

                            {/* Utilities */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <MenuButtonHorizontalRule />
                                <MenuDivider />
                            </Box>

                            {/* Undo/Redo */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <MenuButtonUndo />
                                <MenuButtonRedo />
                            </Box>
                        </Box>
                    )}
                />
            </Box>
        </Box>
    )
}

export default FormTextEditor
