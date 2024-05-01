import React from "react";
import Button from "../../Buttons/Button";
import "./Press.css";
import NewsBox from "./news_box/NewsBox";


export default function Press(){

    return(<div className="Press_Section">
        <h1 className="Press_Section_heading">PRESS</h1>
        <div className="press_info">
            <h2>Find us across the digital spectrum, check us out, feel the pulse of the BlockDAG project</h2>
            <div className="press_images">
            <img src="./Press_images/image1.png" alt="social_Images" />
            <img src="./Press_images/image2.png" alt="social_Images" />
            <img src="./Press_images/image3.png" alt="social_Images" />
            <img src="./Press_images/image4.png" alt="social_Images" />
            </div>
            <Button value="Buy Now"/>
        </div>

  <div className="news_box_slider_cntainer">
  <div className="news_box_slide_box">
        <NewsBox title="Bloomberg" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADvUlEQVR4AbWXAURrURjH71r1aqlKVSAVguE9hfRUVySgN6HKC5EICQUgEEgFSMIeVRSEQMoeVapFI8K0FEmoFllVNdtd//cdvl3ttbPu3u39+Q1z3fM/53zff98Ug/pCfCV+Ek7CTfgJjQARIDzEL6KHsBOZhGllENXEJOEjggQ+IER4iVlCJWxE0rIQpcQocUGECSRJhLgmxogyfqchWdm5i3cDk2jEb+I7YTWy+A/iiHeATyLC7/yRyISFXR4RiJKVlYXOzk4MDQ1JGRwcRHd3NxobG1FQUIC0tDSZkSNClV1HGR9VzM6LiorgcrkQDAalvLy84PHxEbe3t3C73RgYGEB+fr7sJFxcXzGycbFwW8Ua2NjYQDJ6eHjAxMQEcnNzZV0yyh2mS+WKxUcGnp6esL+/L77T8Xg8uL6+fmeivb0dKSkp8UxcENUKK5N7NmLEgM/nQ0NDg/hep6KiAs3NzVhbW4OmaYhqbm5O1FA8A2FikgNOsXNwwIgBr9cLu93+7jmLxYKamhpcXV0hqu3tbeTl5ckK0kd8Uzg6Q6YMMIWFhTg+PkZUm5ubsjoAp+pPhfMbn2Ggvr5edAKiGh8fR0ZGRqJ8cBKKx7ABroHa2lpxtDrFxcVobW0VOxY1gNfXV3ESqKurE1eTyICbUALJGHh+fsbBwQF2dnYE2Nvbw+npKe7v78XCIhewu7uLlpYWWK3WjxLyhlBg3EBiCQOHh4ciOZGTk5Nw94ym8Id5A6xQKAS/3w+n04nKykojJhR/MgbEcff396OtrU2nt7cXIyMj4krEFUFI1MLi4qK0DZkAobiTMSBSsLy8POYZkXbp6ekoKSnB1NQUxFUI3d3doaurK5EBD6E4zRmIRfwiXl5e6jUxPz+P1NRUyfMUARwGwc8yUFVVhZOTE0S1srICm80m+1HqUTgOfaYNcBw7HA4EAgFEtbS0JDsBL2GPTryTRNiMAdF2qqpia2tLrwGRCcPDw7K5YPbt5FxNXBgxIFpsYWEB09PTOjMzM1hdXcX5+bm+OKemLLb9hPr3+D1KhIzkQCQSiYEXjQmks7MzdHR0xBvPNGI83rheSrjijWTr6+u8mJxwOAwxrNzc3GB5eRlNTU3xFo/w2FcmG0rVeEMpDZ183HLGxsbQ19cH0QXZ2dmySeiIB19LorHc8R/HcofR/wbf+ag0AiYJ8dWqssVl11HGxeL/x9MIc2eNEqX8zqRlY+ezhNfgX7Ug4eNsqeYOM61MTq0ezm/Pm0FG41NyE06O9m8ccB/qD2owo2x6v5q7AAAAAElFTkSuQmCC"/>
        <NewsBox title="Dailycoin" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6Ojp4eHglJSVFRUUXFA/r6+v///+urq6lpaXKysrDw8NQUFCAgIBvb2/09PQAAAC7u7uVlZVhYWFuVQ+GZxP7wST/yCWrhBj/xCSyiRmObRSxBNDjAAAAHHRSTlMAH0uXw+ny/xCG1ED///////////////////9NKfRD6AAAARpJREFUeAGVkwUOwzAQBM0bTpmZ/v/EuqfruQwjjSDgXZNKaGOdD8E7a7R6RlsPwdvHT7IcD+TZ3fsCTxSZEsqAF4RS/g94Schux6/qBm3dIR9SqB+6vX50QAo5zQ9ErzdkR0hcZmtB1P0xJmSLhI0DeBDVtEO20bH08FoZIHXgHrMoM78mSH600+stUoYDiOlgjHrQkpNBBcYproC2bsiYTzJe4aHDjJQOUHjqsCCZIBHTZctWqKOMl5KUL3ZSSSsdFpd8kbGyUDPKf+owl6VecT53SEt9zRhPqmiDVfTCetOhBNnuWW/BUn5nu9vzdqtcOsxSfuewOwJ5OnLUYcUdKOLU4SP3/dB+PvafL87nq/ff5ZXrDzxc/zNgeiKy36vDpwAAAABJRU5ErkJggg=="/>
        <NewsBox title="Yahoo!" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEVgAdJ8Ltrk1PeufujGpO7///+DOdxwG9b8+/7gzva0iOqZXOJmC9P07vzu5frbxvTAmu2jbOWqeOeUVOD49f1pENSWWOHo2/jr3/mlcOWRUOC7kuvWvvPYwvR2JNiIQd23jOrKq/DSuPJgXEy7AAAAsUlEQVR4Ad3SxRHDQBAEwDGImRnzD9Ijxiv/1Z9j3MWTvd70gdhXIhlCispxDWK6RAaETIvjtomNww4X9GHFgSeRj52AHWHEis1KjGRq7qXsyqaJNnKJChxk7HoD5bh1JVF9c62mHrc2E3Jx0nKsK6a7mqbga9SQE15RL6kFrjpp1E+/HONClkY53hLdxGm6ewIUojgFEnmA6aZajBs5xy0TYsMntRB7cVyt/+RQh6f6AanbCL/9Rz1bAAAAAElFTkSuQmCC"/>
        <NewsBox title="CoinDesk" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJAXosxz4vx58Xw9sUw3ZpxovJAUAAADKmxh8YA8+MAcuJAa6jxZNPAnJmxi6jxdtUw1tVA2LaxFOPAkfGASbdxKbdxNsVA1dSAubeBIQDAK7bOm2AAAAFXRSTlMAEGCfz+//XyCQj98w/////////6AtnGAtAAABFklEQVR4AYWTBQ7DMAxFHfqjNh4z4/1vuEzu5Dat1CcpaExsUox1PgDBu4GhNsNRgOKG2bUZI2PcVJ+gxaRmpMjvRaLo1m/bMHqfS0g2eXx5pENZl5GnwCzO0ziN84Wc/pwsZTln5vlv4FVMQ5TTEZGBELmJnAZDFsI6Gdhsd8y7zSYZWkOw4kFMbNK4T4OMgiOPikMSaOMpQJgxH9EmEKBZbJLcCUijGiNAs9gD5zMSl6sKBAhn5lWnC68+uoNcNgUWmZQjC2HKPF/c7sx31BmQCflT34DHCRWGaKQCMVYCzw0Ep9/9mvP7gzXH6hf0u/8m8PmPyqi/5PqLtr/sextHMCNkjEzevEsoYaTqirHLqv1tTfsLwrIcNpVgZnwAAAAASUVORK5CYII="/>
        <NewsBox title="NewsBTC" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAELElEQVR4AbWXA5AkWRRF39q2GVzbtnfDa4ax3sDaats2ylZWjW20u6Y99jQKd97PmClkZbv7Rtxy5blfL/+nF754dUYmq/QkWT1WMruNZJAenel1pv8Hh3Qv2SQnWTxgOMjENrhAepeNmt13z1sAbvH1ZPPUsMNxcKOAs3VOkNYZIo2zioNcN2cBqNZ5Djm8f5FdGuYuxwRwkMYBamY32oep3v6X+O+MAxBwAkM/5C4f4GdMAw5qYNfbQLW2AaqxfiiuNa0AZHPfTU7vEoZDhttmAK8TAdjVVjzlXL50/9jYfZMGIEk6l1zedHJKwbmCn13vQMeBwwiHERoLhrJ3A+eqBmDwU9zqHoZjruBUZUV+ew9iFQZ6DodCT6kF2D7X8FelVVDTX+s6uhMDOL2BqcD/aO1CTc8ganrZ/Cxc4R/AVXpvHPySRheGhkcT4N6BXTixyHQoLgA1rDptKvCP12yGmjxDu3GjwReBU6UFmp4hKLVvNIDravlaBcYw/fLLiYIdmXyTwW90LMLBQBBKdR08gqSt3bhR74vAP168AWp6T1oDyjeA8gzi+cxoAJPv4ongJ+lcWLRrL5QSgXLaepC0hQPovDL8Bo2E/WMBKFXX2R+F57JTtedHAjDo8okm3A+bO6BUmN3UMyTD5QBaL06stMLHw6FU3+FhXFhmi8Jz9KCMhkuiARyOK8eD3ystw1goDKVW7d5/HM7ukgN8t3prYtAw8Kx5aTw8W9h8ecwQeK5Sg5+pd6PlwCHVFqW2+CPwpM1deEtajdFQCEqlbuhMhGfqQCn6K+MDqKzznM4eKDUcDOEN35o4eBq/FqGU2rTnAE4vMsfDsxieIay5Kj6AAv7y4jUII1FfcTfzjI/AhVfzcCgleuPOJp86PF2rCMCTMBZ+idGrWkTEej+R1/pNOm8E3uwfgpq+W7ZlfHgaO24IeBnGlldd/w4otZeX1rVaSV5qPOFkeE7LNhwOBNWrXd4E8FQNP9dcFg1QbbrgOPyzVZvVi8ji9TKcKiy4SSMhaVOXKELq1a7KOTE8hZ3edGE0gMFwpoDfbF2oWu0a/IMROJWbRQB5ONT0vnvN5PCkZtAvsZUQOOHkJkdoiUq16z8yggsbnBE4lZlxVb0LZW29qGrvO+Ze2b+sbJkSnB0UzLi74b8tXTvUqt0LrhVxcCoxgYrZRUZQIbsgUl6nBv+f/V9zf8LtWGwSGNiJGGW2+OcB3uSn/3SPqW7JmHkGr9/f+PnI1v2HcGa1fS7hAYanUHbD2ZNuSoeB65+yL6ubQ/hCStbcMe1zAYMfphLzslnAexn+DtH0tuWJ54MiwzsM98vw/KnAtYcoWfuz2HTM3dFMbNty9d9x6/dOAA+yi0Wdn7/DKVcwyjakMHwkBs7WGShdc+t8n44jpkzDDQyvkMHJzQ/O9DpHAVilA51GEoywAAAAAElFTkSuQmCC"/>
        <NewsBox title="CoinTelegraph" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAyVBMVEUAAAAgICAbGx0bHB0aGx0aGh0aGx0cHB1TVFapqavj4+P////x8fHGxseam5w3ODrU1NTFxsd/f4BwcXKpqaq4uLhhYmTi4+M3ODmMjY4oJR76vyzstStiYmRSRCGYdybClil8YyS0iyiYeCa0jCjCliiYdyU2MB9EOiBgTyIoJh5FRkhuWSPQoSnU1NVgTiLeqyq0jCe0iyc2Lx+NjY6KbSTGxsZ+f4B8YyPT1NUoKSumgSeKbSVGRkcbHB4aGh0YGCAaHB0bHB3dTmSGAAAAQ3RSTlMAIL/v/6/vr////////////////////////////////////////////////////////////////////////++wIK+/j8FRAAAAAVtJREFUeAF90oV2gzAYhmHafTN+PFTDqtvq7i73f1HDD6Er7xHswZJIUi7/gme95tzrL8joLSe9I7O8hOzeYvDxKRMpqqZDLAQfBpkW+2CaTLb+D2BUiE4X5ZL+AMpUgVAa2Ca8qjyVEwHlC141pyZUb0SAAtBsQKjVjkEFXvVvCP00Y6Do/onfmlsHbl1vz6nFgPxfc7hXD0CH+/VjUDDIHgD+pQ6A4Uj8TVIGTCZFVcf6ZBq/PQlKJYaBValUgg/t8FqvPmsmgK2RyvT43iF3myMBiJVtIpIr4DUPTBbzaT8BZIOWwEeR6TUOv9W0gwTQ1hu5pH0MdG8wF8MhtrwrzqayLLMd0Rit6ZTzYZc3H9aDrWOv6/g5DGu8Nj0iBVCWSbWKe7gNnWkbIvAr2js6+T/KRxBAOj7tZIKa00EmOPQggjPEhkiBPDK7SNczMjpfJel6e375fpX+AB7GLPqtBAC5AAAAAElFTkSuQmCC"/>
        <NewsBox title="CriptoNews" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAZlBMVEVHcEynLYPbWZHbWZHaWZGjKoKxM4XbWZHdWpGnLoOhKIGnLoOoLoTcWpHdWpKxSInaWZFzIX8sE3QvFXO5MoVMGX1ZHH5YG34zFnQ0F3RJGX1ZHH41F3R3IoA4FnU+F3c2FnRZHH4Q0Cr+AAAAInRSTlMAQauldfT+/0///vZe9MEW5v09tf//+03v////2v9q/4itumSNYAAAANxJREFUeAF1jOESwTAYBC9QDQhKK4Ly/i8pNecmn5nc39tdcG42LzdbwM4tm5Vda3/v1/6PKBtu4zNRbzifV23Q9/UG/VqDvmlYwputtzsD7AMY4LZoS+IQIIA/EHalL0A/2KAvQD8b9AXoZ4M+AfuzQV9A41Cu5S+gOZ4McOoscD5e+qH4wzV2Ar7+LaU0QP41xngXMPkpLzfkT+sI0E9s0I9qbOirQV8N+WzQZyMAD/lTon/y57qAoU+GGA3wAjAkux8x8odpkOCeyKs36Ncb9KsN+rWGfBFvO/kfLsou4AQMWjAAAAAASUVORK5CYII="/>
        <NewsBox title="CoinW" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFUklEQVR4Aa3WA4wtzRIH8F/POXttO59t27Zt27Zt27Zt2+Z+17ZW0+9lJ8mZ3J2TvQ+VVP7d1dWF7moEgHmOid3aTXd0CNYJSTMLQcYJLfo5lLXnhr4RXPPZheFegACL7BPnSYO3Q2KeEJgb5+aQJQmCuaXa+ibrfnNpqA0w/97x7xDMk2TGCCRzZBcKMHPaYmzug5hp2dI8u8V9kmAfEGQQiKjIcpiXF+tkELRG3UpldYng6DQlRmIei2Sx0m5NR9QqRdYuxybLSJBWok4DIZMxBy44iFUWYcUFGdCDpsisen4axqe/8ekfCEhaX4nmgh+yU4zV9jjfXm4Bjt2OFReC6jRyEre/zgtfks1tJYjBO8ZY7LSC+2zMCTvQpsy0GdHj79f5rjbx95ioVAq6dkwtMpDd1ikb3KcMnv6Ua19kZn2lsIsoDNo+xuqZc9R2/+ZtiJG7X6l304vBzIaawkBpstVKTQ7dpGRAr5LfRnLQrcysQ6bTgpKsmIoLa5d1M+fTZka7X1Tn0sfbmD67pmrxUfL8523sf2OTkRNSCw3gxC3zhVsUQFRocEBPDtsSOP2uRp//1lY13TynkVET2zjghtSkaanNV2CF+bMxsWUQSTWDB23BgF488U6DFz6pESNps4Os+h88mVN2kjnNjQUZjphYdv6jjeDozWTzKz6KVyBNK0obrQBc82Rokem9J2SnYq/16d+zMv+wzfj2Os7aJZO9+X2Nn4Y2WmQQy8/bMlGRJC24RFZelH49+OLX1LBxZVmW2dh+GzO4Ty4DUYzstDqHbQ7ssBq9uhDT4J0fErD8/MUXXSITSFNkQgsMAD7+Pj+JgT05Yhtg8rQUxDTbkhN3BKbPiqBdOQvsp6EBDOpZfMsmuWXPsIle3YDxU0N+6Z2wE1068NjbDYZPCMjmHbEVHdvx4FsNmUOVgvtrFDBf3ziH84yTomVpbAKo7P/2a7P16gwf2+TqJ8tEYIuV2W51zcfuzldq5CmmdGwXQENjlS0oWpaR4yIY1Dvr9+zMcTsAVz8ejRofABywKVmxpoaPY+T4CFZfLAt+3aWAn4dFRb7KMUXIPzr8UhsRrLV0pnTYtgzqw8ufNHj8nbKQMKsO6NwheO/bBk99UBYCj7/XaJvVa5y+CzuvVamn+99sEtOkha+k8sRW8OtfgzETo4WHsMv6HLQVk6amzr2bGLO6eOb9FNmWnH5nENMs489+Kbv2ydkaG2Oz86kzUqfc1eivMTX5O0PMUOi6ToxFj9CJuzc5ac8SgCsebnL1YyWZLpLUUvM2GjouNF/P8j+khK7t6/XqGo2dmpjVWKPqg9dlrRiLBrp2Tn14a9CvVzB0dLTSgamQlCrfsYDWnvF8v1in8hjNuRWTpyWOu7YRDOkXHLRVSbFuhnmepx/Pn8/eG+Z1qtwDMXcR5fdI5NVPa5xxcwM470CuP7ZyMtICg+3bcPR2PHMuiw6hZ6fGwgDzAYUOq1b7D1Rwx3UbnL5fYnDfEnj3a976kj9GUCrRqzsrLcpmK9OlI3Dzs3Uuf7QslEoVe0XYfpXWfkQZDulT78Q92G7dGu3aBtXo4x8aXP146rNf2whJUN25jNutVFyE1WRdO9ZZfSmWXTg2v4TZ/c+fI4NXPkuNn9ouc5zMnb3QboX4tsQ6rUaa8P/WEXyTpLxb/ZdTLKumM7d20gwFrgmWid3aJL4OiXn+l0wFkhyGMEe75Zzav+4P8ya+CZOT1LoxVVuJvjqm+XYec5xmTJS1W65KbdpgXUhg9jehtv6rMG+a2jdG31SUC7jYYD6g4n7G78TUuWZZtvaRUAv/AuYY42BKXeP0AAAAAElFTkSuQmCC"/>
        <NewsBox title="BitGet" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADn0lEQVRYhb2X72sURxjHP3N3xkTJZXM/kiObFqyJYF9b8E0L1dJ7UVpLKJrUpgi+8o39CxQUtPFV8cAGFSGt0dS+kKallLNphPZNEV/3hSkVWqTRnGQvIbHN3eXpi9m9ZG9v93aN9AsDd7Mz8/nuzOwzzyiiyJJDQB7YB7wCdNtPFoE/gPtAEUNNhx1ShYBmgAIwEsks3AROYqinz2/AkovAyYjgRhUw1CfRDFjSBcwB2S3CHS0Agxiq3NqAJS8BfwYOF2/Sc90uwXoZQ/3lb0C/uRU4xHbY8dsD4ktLoOzu1QrVbC/Pdu0KY8LYPBOJhodzgV07oOv7OySH8sim6tobbzL/zQyuSn/NAT3On1i9Wm84/zXvgK4fZugcyrNumohpAlAdOszfxVkkHgtrIGuzAGcJLEkDpUB4cZbO9w7WwerRI6pDh5m/cQvWCAt3GzFUyZmBQmT4B8NbgdeZzgw0H8IPfuQo8xOTW4FrGUrF7PDqVTsk79z1wodHmf/iBcABLDmUQMd2txLQ+cuvJN89UIezskzl+AkeX/oc/rXhbXi/o4pdwikfQx8sbimIl5646/5ZpTawRwNteLpQwGxT9O0dpG/vIGYuRfdXU7AztIF9YEkJS8RT1kRS4xPSD2KappimKf0g2VPnhKrdpiKSOXtBt8n1ipnrlX6Q1NVJodJkTG8pgSU13wYVkdTlLz0mMqfPb5ioimTOjHnapK5cD2OiFmzAMXHlutfEmTGXiezp814Tl1uaqPkvQaOJq5Oeqc6cvbABqIpkT53zmhifENaCl+BeiLUSKiLd126KmU5J3+4B6ds9ICZIeuyisLppOT79TMz2hMuEMTUtrDQd914CnUa91nK/rsDi8AiLow2JURUdE5T+Hf/9AbTvcDWpZXr8Ysb9GFAM/dFUgNWG4sC3Q+7Yx2y7Ng47OwEduJa+m2X59f3aqFfF4FAcRgpog9yxj0jcuuGKmsvf/kQ5fwCe+fQ1lHIOo6ktwUdHosN10lo/jDLovC06/OgREre/boDPUM4fDIIDZDDUUz0DhioRdCRHgU//GAZecNL1xpzwCa0yYQWqtk7u/beI/3zX5WnpdpHyO2+3gi9gqHpKFj0pjUHHw4ckFh5DYpuuE6GWTLL66h59UgbLlZQ+X1oeY3M2aZsAai3hLdLyDRP/28Wk8T20DFW21yn8xvRXAUP1NINDuMtp2jbyYUTwFPpy6p9thzLgNvPCr+f/ASs7mTnTXHWnAAAAAElFTkSuQmCC"/>
        <NewsBox title="CoinCheckup" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAALVBMVEVHcEwKqJ4KqJ4KqJ4KqJ4KqJ4KqJ4KqJ4KqJ4KqJ4KqJ4KqJ4KqJ4KqJ4KqJ7qnSlmAAAAD3RSTlMA/wcDDBqNNM+/Td1z8KiBW2kkAAABaUlEQVQ4jWVUCbbDIAgkguIW73/czyKJ6ee9tNWZsgzTAgAmAEi9tDFa6WlfQEJ7lSMh0BzXjjHJEWUppg/X64jKJy6ZkO/rE3c/cAm+fkMYB55HFO/clycbFLg8xfGi/T7tlI1LqXzvGwDKWtDPlDYO88nZx620ZRfTRpVbaJEAtZfO7CVX4OAZpe38GaQmHxXgCsJ32pu24C/BMozWfIw7py34O4R2Jyp371onAhJWfc5UVn+maIGHTstljQSuSzo30ViHynMvjk1lixaNS4NN4WoV5o7/y1wqLlNYQPw1v7hM1mesSAgJsJy4LhExJeZuHF35wVgk/mRTmbw5l7OPqA9U3VCK12YEW0pfQ3HMOoMwhHdVXEpwf4r1MxPq925lKE4qwelfNHxkb6lmwFmK6bX9Z7jcm/zyvg3x4lq/2haL5v/F04OLVTgMlV48tcDD8EqVj3GUmcYPbq/mf7Qffck76fkP8AeTCwrOdhLpEQAAAABJRU5ErkJggg=="/>
        <NewsBox title="Toobit" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAAcICIcHyMbHyMbHyMaHiIaICIZICIbHyNUV1pxc3ViZWipq63////x8fGNj5GbnZ/Gx8jU1dYpLTFxc3ZGSU1/gYO4ubvU1dXj4+M4Oz8bICQcHiQcICSC6j7bAAAAHnRSTlMAb+//339/cO////////////////////////9wgIC9nLmkAAAAmUlEQVR4AcXTRxaEIBBF0TJLBnPc/za7OE7hO2vfxHTNQFSUVba6IWorWEc1Bj1VL/0dCCmVQEAbzjoMOJ8GQggdwhDFmAR8YOKFj0sEZl4uCCy8FDkQtF55sVU58LSPEHBb9i28EMLz0qGHrIIxFoL4mAgcFlxhC2EznH55C3tgEOYqCeSTOr4YtBiUFaymE4OL6AbTtzzpB/GfE/Z8d0eUAAAAAElFTkSuQmCC"/>
        <NewsBox title="BeInCripto" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEWx/QCn7wGc4AOt9wBYhA0XKhcdMxaJxwZGaxACDhsHFRqAugckPRVAYxFLcg+V1wSR0QQsRxSq8wEzURQJFxk6WxQLGxlqnQsVKBh4rwk9XxJIbRBVfw5hkAxsnwtypgmEHRcPAAAAkElEQVR4Ae2RAxIEMRAAwzVj5/+/PNsobxeSscDCR0CE8LmMEYLgHEKL8lwuC0rAOVXdtOdy29TVWX5Sdf0wTuUIxnINBGAc+q4ihyqI1jMDjIueSSGE0hslm2uKzh02Ggl53Rg6a4sfO3QjchvTI4fNz//fAYbNmFP0CWsfMcielJsxA3y9qPdX/fJYC69YAcD9Ci0TTXq9AAAAAElFTkSuQmCC"/>
        <NewsBox title="BITCOINST" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACP0lEQVR4Ae2WA5AcQRSG52LbVilWGbFdjm2jGNv2OrZt27ZtO+/9yXZX9Vaf72bm/K05Xz2OYSwkxOYtfgskCaRzE1I4Y1Gg9zHG599A50MsXpdbS0jmiEGBNfcYfhrvZBReRvBz5jXsEzj7Blh+h9HpEKP4CsLL7wAxkM1HaL1fyrhvsi0C4oCh8fUPMPAEY9NDKdD2gE0CqV2EalsYy+4wwsN7i1FipY01kGeJHonzb4G3P6Dxh4BR5xhBdgg02KFHoMQKWfk1tjJOvYLGoBNsvcDEiwGBZ9+gfZbWTXj0BYp7n2C9wIlXUKy4yyE+P/ICilffLRZI7yb8Jii2P2ZRmNl98rMW+xh/GYqtjyxNgcxz5JDtWXk9WSsw8lxA4N1PYNx5xvGXADE0XnwDSq22oQ0PPAscacODQHgLLiXMu8ZgKEQtpHJZPIi+/4Wi//GQ+Z12WQ9FuwNsWkD8yZRLjJlX9D+vtC7kd5vt1r8z4YJJgeQOwv3PCAExREGmcekR2vxQF+h+xKRArsUkttsDXULxi4Br74ETL0MfxwWWWlgDxZYTdj1h+PlNCB09/NZ3wenXEFRcR+h2hNW0u/dJRuMPA9c/AH2PMYIcFGkBiswXM3pIhPX9T4jlM+SMFBh2hk2eEzr+dhASkTghOfoCWHdfHnC3TAeqbjYpUKdfQ8OY/7fz/xcciR+oHT/8rJyCaV1kWkBKLKSuSsL+my6gJBZQDykRKwIqEr0MB3FsCUgJB/WNRQGVjgExIfAPRFQZ4eSRLDkAAAAASUVORK5CYII="/>
        <NewsBox title="CriptoSlate" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUQDhsPDhsPDxsODxsQDhkGABUAABIAABEAAA8FBhZDQUmCgoSjoqSwsLG9vb6enp4AAABPTlXDw8PY2Njm5uabm5vj4+PJycnZ2Nns7OxaWV59fIKJiI2TkpYAAAxvb3MAAAhhYGZram10c3e3t7jM5CXBAAABiklEQVR4AWWSBaLjQAxDJU3KkDJz9/5nXMd2fumFozc8ACWhgX83FaFQUnx5KlHyXP5VRE+ryF0glLrg5Bvl9eo7FVHp5TmhJsIL5pV3kn59QnaMbq/X6xtdftekwXBkjI3JdDqtZ8IXnfm4ruuFsVytVtNGIIp3VgqhXq/XLmw2JhBSjBKQXFg3wna73e1X+4UJUPHxR47eYWocjdP5fD5eKAiMaa1gXK771Wpzmd1uM+PmEQrtAhjCarPZsAiNHzkUh/QSKosTvRaTbATLlyAcQm01Epz+fbvYLlCgkuWzeClSKywWYAVHBkK1O/kS/Et61V35VLVCM8xL/3Lp4ofLY7dcLs82S8fr83kPI2uSXTnMrTGp6/HpptcWhhorBGtlO1mv69GNIFgIUK7FVK+yBhdUYgqT7uGfMbbwdByNHv2CF7Hug5txuVz6vW63O2D0jgILlAMvpZ1/MheMzLny4ThwpLgoVG74d4yHJXeCu7lp3FUjtj+MSnDogpcx5DW6lXnl5y9C8B/MTxXci+T1aAAAAABJRU5ErkJggg=="/>
        <NewsBox title="Decrypt" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAADPklEQVR4AZXQA7QQCAAEwP1OZ2ccs23bPNu2bdu2bdu2bSv3mmzPMxdZojY5PHfV+aT533W/r/B4js7qWQGbln9htKt9BeA5db9O5SyXtnl1Pz8BGOcNT3nLsfJj1s4yHd7Jh4BJrjFILRUVK1NHZfkua2ap7j0SwGnqKLGW5vobbbje+mil/A9ZK0uwcuG3jwHeUF9sbJBN9VVLiWKrWMe6YsktKhU+dDo4TaxpoDF6qaRUZ4e73Wve94yrDJHvsk6W4JwjJh4nGs8sXU2BIR6wsLuVLuWLb6OPLfQRNd1unnvd7EfAi/JGFuviS6buJ/qK/iYDXrKf2n/3MsiaNvUv2FVGZBG77gr2EGcCPjNUbkrLok+hqmhjKr5VcF8WUmMDwJXiaHCVwg/TNUm74/C7KtqKh0DdL7OQ1z8BN4se4iAnTcxlmanCX//jITFanAx6/pUFdNsSfC82tqV+Ii9nlptvB7uKLcyZ1+2PLODlP0BLJcYYKA5z3Pgcm2S7ncAvSrUxSNwHNvok86k3AFwjBhqtUCtwgry2HWCY2FQja/gH3yq8J/M57CpQRRWbqaOCseBamXIIuEn0NkZsBc6XfTJP4d3f4h4x2EBxK3hA7k9y6vHeVGoTI7UTn4GWUjXz1PoEBitvS5V0BP8q+DOFmeHuqGsrw8Uu4Hm5KfNr8TeTVdHYEPEI2Ep6ZIahvb7bVAyzuvUAjaVO5tfwZ95WXj+1NAefyaOZ4ezhYH8V1fQDuEhOyoIqPs/TCowRh4NDJqZ9OpR8cB5gsugCPpWvsoiTP/GbGCluA1XHr/7uwb4B3GcdTRTa18/WnZDqWUSVuj+dprbeVvY6HtfMVMAPdhC1bGqEyKTUyWJVza819LaOD3GNofjNo/ZWRXQ20jC1VNZlSvbJElTPT22s4SX8qJLGailTpKkRRuqswGpex6HKX5jVsljrlf1W6BbQT3Q01GaGaGllhYb5D1Bd2mQJquXXQeAPzZUor0wFlQ30DOA7zWRMlmLd/PQI4D6nOsMdfgBwnYrfplmWoXLZLy9Z1Bv6ymWpmOVQJc/t50MA37pEH7k17bICtswdDT/r+U/3vxp8UnhfDk6DLME0sVCQfBcJ4BIAAAAASUVORK5CYII="/>
        <NewsBox title="Investopedia" sorce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAERUlEQVR4AaxXA5AkSRTNsxU6277rmr65xmhtV9Xatm3btm3b3rFte9qs2p8RWxu1HTndWR3zIv4gP95LZyFa/Knv/BGj4VmVllsH9gCsDKzyXy1XAb/TwR4zGm6DSs+1/Ouvbu+gusJfwey3Ki2/CQgsYCKlmUHYKkbPfuU3cWhozzdVGn4xFLPhon6aA2wRw/R/TRG5Wt/+O0iMpiKhMBiNR3gkqcgDNB3/hYRinFjHVvhPYPsffc63EvJLI/veEpYOLTQvHBLfv3XXSIqcXMxR+5zr2Bha8ols93Bx6VBRMteSIdnQLvjOZZ+Ehoa+ijyh0nDLlQzp/oF9bmFimQkaPd2Che06Dcnxt57/Ca9YJQJaNuiULywZYpAE5M0a/ERBvv2FLQoN2/1ZWO0bd868Cutge//edwL1vKIOMFpuIcLQ6Vq9B8Nvok+us61ZwTAt30b4eFWa3Iodnl9UXPYwMTnjdmjj3tV+C9GwTRA+ZmkT/gvu5Dhz/uYNURTN4jO4BaF45rwNj/wTwc9FoOIhTfCo8YuibXZ7ukhAfkHJA38EBDfudREvwHKvq7390PK8/JIo0QsiohJvKiH+P6SL69zF2w/dbncSFmAnBamDOjlPnbtxE+qbRB84deY6tYCJ01aGOxyurGepNViA0zOo54BpSUaTOZ5EZrc7spJTsu/I21Zv2HfXF3H9Zn0rElMyb0O4gHPkAkrlQekZuXelIDkEQTAePHrxFh6ZC5fv3pD7Ro1fHFUbMY7HeZBfQ+hPNsJnMw5cunLXfZiTYpGAsvKqJ+06jsyRisbGpdyS+7kuo7MkH2Ek40g1XS5X3rpNB7ah/kNmLS4vr4ogBYGgosUrtt/3LAxnwCN5nL5+N9OLq7tnDSxMLNJFmsWbd8JvaOt3N+MHD4KGDoQg263b4Rc1Yd0MpJ5ZLNYk2dRUSe0Bel7Yte90uNstVIsElJdXPmjbcWS67FJqgwW8B2Z5vioMxsTu/SZLw000ICh5rtRmT8NtXXpNjDUaTeG1jGTxkpXbPd8Lpb//zr6OMCBmM/SkcvvuE7ehF25fpyGuKRU3GEwx9+5H4e3qIHA7IyITbgY16mkg3AWrkISoqMQfG7XqX0B1DXcYWiBSwGA0xXbvOyWZWAcuP3Vwxy+RHOCYQSNg8Mh5slVNHO6CmfPXP/ZaR8eOQ57QaNi34HJI8iVg8fLtD0UynI8j4i/oGvSo8HoN67i7eO69fIRwhd4KdOszOQH2cKac2Wq1JQ0cPieO4hGSp1aznyBv+EfL/uPrZRwY3Ml4+er9s7AbCjZvP3KZ0fEuiunLCtCxPyMa4PcaqCUfrx7HLP5N8xJmgtp9ipQAP5fwgwEKWAlF6R+fOnY6/acZAYyW/x5/9UIxgwJiA4zganjs/IDqCvjx+q+Ge7pIkMGgvh7QkqfQtsRfUMIFV2qW4ZMNrUP9tB1CeYg1FwBi+ltNQ0unJwAAAABJRU5ErkJggg=="/>
        </div>
  </div>

    </div>)
}
