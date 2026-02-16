import React, { useEffect, useRef } from "react"
import { RichTextEditor, type RichTextEditorRef } from "mui-tiptap"
import StarterKit from "@tiptap/starter-kit"
import { Box, Typography, useTheme } from "@mui/material"

type Props = {
    label?: string
    value: string                 // HTML content
    onChange: (value: string) => void
}

const FormTextEditor: React.FC<Props> = ({ label, value, onChange }) => {
    const editorRef = useRef<RichTextEditorRef>(null)
    const isUpdating = useRef(false)
    const theme = useTheme()

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
                    },
                    '& .ProseMirror': {
                        color: theme.palette.text.primary,

                        '& p': {
                            color: theme.palette.text.primary,
                        },
                        '& h1, & h2, & h3, & h4, & h5, & h6': {
                            color: theme.palette.text.primary,
                        },
                        '& strong': {
                            color: theme.palette.text.primary,
                        },
                        '& em': {
                            color: theme.palette.text.primary,
                        },
                        '& ul, & ol': {
                            color: theme.palette.text.primary,
                        },
                        '& blockquote': {
                            color: theme.palette.text.secondary,
                            borderLeftColor: theme.palette.divider,
                        },
                        '& code': {
                            color: theme.palette.primary.main,
                            backgroundColor: theme.palette.action.hover,
                        },
                        '& pre': {
                            backgroundColor: theme.palette.action.hover,
                            color: theme.palette.text.primary,
                        }
                    },
                    '& .MuiRichTextEditor-toolbar': {
                        backgroundColor: theme.palette.background.paper,
                        borderBottomColor: theme.palette.divider,
                    },
                    '& .MuiRichTextEditor-toolbar button': {
                        color: theme.palette.text.primary,
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                        }
                    }
                }}
            >
                <RichTextEditor
                    ref={editorRef}
                    extensions={[StarterKit]}
                    content={value || "<p></p>"}
                    onUpdate={({ editor }) => {
                        if (!isUpdating.current) {
                            onChange(editor.getHTML())
                        }
                    }}
                />
            </Box>
        </Box>
    )
}

export default FormTextEditor
