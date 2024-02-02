import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, rgbToHex, ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';

const Theme = createTheme();

const Btn = styled(Button)`
  font-size: 16rem;
`;
const TextF = styled(TextField)`
  font-size: 20rem;
`;

// signup (login)
export default function Index() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  sx={{ mb: 1 }}
                  style={{ fontSize: '25rem' }}
                >
                  로그인
                </Typography>
                {/* 아이디 */}
                {/* <p style={{ fontSize: 16 }}>아이디</p> */}
                <TextF
                  required
                  fullWidth
                  id="userId"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                {/* 비밀번호 */}
                {/* <p style={{ fontSize: 16 }}>비밀번호</p> */}
                <TextF
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                />
              </Grid>
            </Grid>
            {/* 로그인 버튼 */}
            <Btn
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Btn>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
