import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  useTheme,
  Paper,
  Fade,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import PageContainer from "@ec/components/organisms/PageContainer";
import { LITTLE_AVATAR } from "@ec/constants/images"; 
import contactInfo from "@ec/data/texts-info.json"; 

const Contact = () => {
  const theme = useTheme();
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    
    const subject = encodeURIComponent("Inquiry from Portfolio");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
  }

  return (
    <PageContainer>
        <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            margin: "0 auto", 
            padding: "1rem",
            minHeight: "60vh",
            justifyContent: "center",
            width: "100%",
        }}>
            
            <Fade in={true} timeout={800}>
                <Stack direction="row" spacing={2} sx={{ width: "100%", mb: 4, alignItems: "flex-end" }}>
                   <Box
                        component="img"
                        src={LITTLE_AVATAR.src}
                        alt="Ec"
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            border: `2px solid ${theme.palette.primary.main}`,
                            objectFit: "cover"
                        }}
                   />
                   <Paper elevation={3} sx={{ 
                       p: 3, 
                       borderRadius: "20px 20px 20px 0", 
                       backgroundColor: theme.palette.background.paper,
                       maxWidth: "80%"
                    }}>
                       <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                           <strong>Hi there, I'm Ernesto Cabañas!</strong>
                       </Typography>
                       <Typography variant="body1" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                           Thanks for stopping by. I'm always open to discussing new ideas, 
                           opportunities, or just having a chat about tech. 
                           How can I help you today?
                       </Typography>
                   </Paper>
                </Stack>
            </Fade>

            <Fade in={true} timeout={1200}>
                <Paper elevation={0} sx={{ 
                    width: "100%", 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 2,
                    p: 2,
                    borderRadius: "16px",
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: "rgba(255,255,255,0.5)"
                }}>
                     <Typography variant="caption" sx={{ color: theme.palette.text.secondary, ml: 1 }}>
                        YOUR MESSAGE
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        minRows={2}
                        maxRows={6}
                        placeholder="Type your message here..."
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                backgroundColor: theme.palette.background.paper,
                                color: theme.palette.text.primary, 
                            },
                             "& .MuiInputBase-input": {
                                color: theme.palette.text.primary,
                            }
                        }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            variant="contained"
                            endIcon={<Send />}
                            onClick={handleSend}
                            disabled={!message.trim()}
                            sx={{
                                borderRadius: "100px",
                                px: 4,
                                py: 1.5,
                                backgroundColor: theme.palette.primary.main,
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.dark,
                                }
                            }}
                        >
                            SEND EMAIL
                        </Button>
                    </Box>
                </Paper>
            </Fade>
        </Box>
    </PageContainer>
  );
};

export default Contact;
