export default `
/*comment*/
*,:after,:before{
    box-sizing:border-box;
    border:0 solid
}
:after,:before{
    --tw-content:""
}
:host,html{
    line-height:1.5;
    -webkit-text-size-adjust:100%;
    -moz-tab-size:4;
    -o-tab-size:4;
    tab-size:4;
    font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-feature-settings:normal;
    font-variation-settings:normal;
    -webkit-tap-highlight-color:transparent
}
body{
    margin:0;
    line-height:inherit
}
hr{
    height:0;
    color:inherit;
    border-top-width:1px
}
abbr:where([title]){
    -webkit-text-decoration:underline dotted;
    text-decoration:underline dotted
}
h1,h2,h3,h4,h5,h6{
    font-size:inherit;
    font-weight:inherit
}
a{
    color:inherit;
    text-decoration:inherit
}
b,strong{
    font-weight:bolder
}
code,kbd,pre,samp{
    font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    font-feature-settings:normal;
    font-variation-settings:normal;
    font-size:1em
}
small{
    font-size:80%
}
sub,sup{
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:initial
}
sub{
    bottom:-.25em
}
sup{
    top:-.5em
}
table{
    text-indent:0;
    border-color:inherit;
    border-collapse:collapse
}
button,input,optgroup,select,textarea{
    font-family:inherit;
    font-feature-settings:inherit;
    font-variation-settings:inherit;
    font-size:100%;
    font-weight:inherit;
    line-height:inherit;
    letter-spacing:inherit;
    color:inherit;
    margin:0;
    padding:0
}
button,select{
    text-transform:none
}
button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){
    -webkit-appearance:button;
    background-color:initial;
    background-image:none
}
:-moz-focusring{
    outline:auto
}
:-moz-ui-invalid{
    box-shadow:none
}
progress{
    vertical-align:initial
}
::-webkit-inner-spin-button,::-webkit-outer-spin-button{
    height:auto
}
[type=search]{
    -webkit-appearance:textfield;
    outline-offset:-2px
}
::-webkit-search-decoration{
    -webkit-appearance:none
}
::-webkit-file-upload-button{
    -webkit-appearance:button;
    font:inherit
}
summary{
    display:list-item
}
blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{
    margin:0
}
fieldset{
    margin:0
}
fieldset,legend{
    padding:0
}
menu,ol,ul{
    list-style:none;
    margin:0;
    padding:0
}
dialog{
    padding:0
}
textarea{
    resize:vertical
}
input::-moz-placeholder,textarea::-moz-placeholder{
    opacity:1;
    color:#9ca3af
}
input::placeholder,textarea::placeholder{
    opacity:1;
    color:#9ca3af
}
[role=button],button{
    cursor:pointer
}
:disabled{
    cursor:default
}
audio,canvas,embed,iframe,img,object,svg,video{
    display:block;
    vertical-align:middle
}
img,video{
    max-width:100%;
    height:auto
}
[hidden]{
    display:none
}
*,::backdrop,:after,:before{
    --tw-border-spacing-x:0;
    --tw-border-spacing-y:0;
    --tw-translate-x:0;
    --tw-translate-y:0;
    --tw-rotate:0;
    --tw-skew-x:0;
    --tw-skew-y:0;
    --tw-scale-x:1;
    --tw-scale-y:1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness:proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width:0px;
    --tw-ring-offset-color:#fff;
    --tw-ring-color:#3b82f680;
    --tw-ring-offset-shadow:0 0 #0000;
    --tw-ring-shadow:0 0 #0000;
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style: 
}
.m-3{
    margin:.75rem
}
.mx-3{
    margin-left:.75rem;
    margin-right:.75rem
}
.mx-5{
    margin-left:1.25rem;
    margin-right:1.25rem
}
.mx-auto{
    margin-left:auto;
    margin-right:auto
}
.mb-5{
    margin-bottom:1.25rem
}
.inline-block{
    display:inline-block
}
.h-3{
    height:.75rem
}
.w-3{
    width:.75rem
}
.w-32{
    width:8rem
}
.w-full{
    width:100%
}
.max-w-prose{
    max-width:65ch
}
.rounded{
    border-radius:.25rem
}
.rounded-full{
    border-radius:9999px
}
.border{
    border-width:1px
}
.border-azure{
    --tw-border-opacity:1;
    border-color:rgb(64 147 234/var(--tw-border-opacity))
}
.bg-azure{
    --tw-bg-opacity:1;
    background-color:rgb(64 147 234/var(--tw-bg-opacity))
}
.bg-black{
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
}
.bg-white{
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
}
.p-10{
    padding:2.5rem
}
.p-3{
    padding:.75rem
}
.p-5{
    padding:1.25rem
}
.text-center{
    text-align:center
}
.text-2xl{
    font-size:1.5rem;
    line-height:2rem
}
.text-4xl{
    font-size:2.25rem;
    line-height:2.5rem
}
.font-bold{
    font-weight:700
}
.opacity-25{
    opacity:.25
}
`;