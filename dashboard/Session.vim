let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Projetos/curso-vuejsorg/dashboard
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
edit src/services/index.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 10 - ((9 * winheight(0) + 18) / 37)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
10
normal! 018|
tabnext 1
badd +0 src/services/index.js
badd +7 src/views/Home/index.vue
badd +39 src/services/auth.spec.js
badd +29 src/services/auth.js
badd +29 src/utils/validators.spec.js
badd +21 src/utils/validators.js
badd +15 src/store/user.js
badd +13 src/store/user.spec.js
badd +6 src/router/index.js
badd +35 package.json
badd +4 jest.config.js
badd +1 Home.spec.js
badd +1 .browserslistrc
badd +29 tests/e2e/specs/home.js
badd +17 src/views/Home/CustomHeader.vue
badd +42 src/components/ModalLogin/index.vue
badd +22 src/components/HeaderLogged/index.vue
badd +18 tests/e2e/specs/credentials.js
badd +48 src/views/Credentials/index.vue
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOSA
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
nohlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
