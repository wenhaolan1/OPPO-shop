import{s as i,u as n,j as a,a as e}from"./index.a3106524.js";const t=i.div`
    .header-search {
        display: flex;
        flex: 1;
        width: 18.76rem;
        height: 2.2rem;
        align-items:center;
        justify-content:center;
        .back-icon-contain {
            float: left;
            width: 2.45rem;
            height: 2.2rem;
            display:flex;
            align-items:center;
            justify-content:center;
            img {
                width: 1.25rem;
                height: 1.25rem;
            }
        }
        .icon {
            background: #f7f8fa;
            width: 1.65rem;
            height: 1.55rem;
            display:flex;
            align-items:center;
            justify-content:center;
            color: #b2b2b2;
        }
        .search-box{
            display: flex;
            flex: 1;
            width: 1.65rem;
            height: 1.55rem;
            align-items:center;
            background: #f7f8fa;
            .search-eara {
                width: 100%;
                background: #f7f8fa;
                input {
                    outline: none;
                    border: none;
                    background: #f7f8fa;
                }
            }
            .search-login {
                display: flex;
                width: 2.4rem;
                height: 100%;
                align-items:center;
                justify-content:center;
                background: white;
            }
        }
        
    }
    .recommend {
        width: 17.55rem;
        height: 5.85rem;
        padding: 1.55rem 0.6rem 0;
        .hot-recommend {
            color: #999;
            font-weight: 400;
            font-size: 0.65rem;
        }
        .label-panel {
            margin-top: 0.9rem;
            overflow: hidden;
            .style {
            float: left;
            margin-right: 0.4rem;
            margin-bottom: 0.4rem;
            padding: 0.1rem 0.5rem;
            font-weight: 400;
            font-size: 0.65rem;
            line-height: 1.55rem;
            border-radius: 0.25rem;
            background: #f7f8fa;
            &:not(:first-child){
                background:#ff6843;
            }
            }
        }
        
    }
`;function l(){const r=n();return a(t,{children:[a("div",{className:"header-search",children:[e("div",{className:"back-icon-contain",onClick:()=>{r("/home")},children:e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAADX0lEQVR4Xu2avU8UQRjGn3f4OO5AbSgsqWl39i84IJIYSTSgiVSamNBhR6eVVGKjhVqgiRRSWBgLKxsr7yvkTKCAhIJEEwzJxeQ+gX3NFUeWC7cMN3t7Z3i3no/n+d2z783MDkGeQAIkfIIJCKBzEiKABJBdEZEESYIkQXYEJEF2/KQGSYIkQXYEJEF2/KQGSYIkQXYEJEF2/CKrQRWtpz3gUbxQuEc7O1U72dH1jgRQVeuZY+aPIIopoi+xYvEObW7WorPZ/kwdB1Ry3TkwfwAw0JBJROvxdPpu+7Kj69lRQGXXnQfzKgP9J5aYq0w0N5zJfI7OZvszdQxQWeuHAF4z0OeTV/aIbo+k01/blxxtz44AqrjuAnveSyZSPjtFUupWPJX6Fq1Fu9lCB1TS+jGA5wBOxibgL5S6GU+lvtvJjb53qIDKjrPERMt+G8xcGABuDGazP6K3Zz9jaICKWj8l4EmTpIN+5qnBbDZnL7U7I4QCqOw4y0y0dMoC834fMBHLZn92x1o4s1oDKmn9AsBik5xffZ43EcvltsKR2b1R2gbEAFVc9xUzLzTJ3zs8Okpe29jY7p6t8GZuCxADqqT1WwIeNEnZpVotGc/nd8OT2N2RLgyovvAru+57MN/3SyfmbVYqmUin97prKdzZLwSIHWegrNQamGdPwQG2PObkcDb7O1x53R/NGBCPjw+WE4l1ADN+2QrIH9Zqk1fy+f3u2wlfgRGg3bGxoeujo58YmG6SkDtSaupqKnUQvrTeGNEIUIu/8t5wYKAikckY+TxrKKOOJa3/ABg10NKTTQTQOT9LFIDOWi33ZFrOEtVxQFKkDbIgf/MmkAIWikPMSbrMC8UGv/pWo6L1OwbmZavRIlWBm1WlkvFU6vJuVn1JkuMOg7KEitYrHlA/qPc/cmDmp9HqyNVjnhzJ5fImoHu1jdFWw0S8HNobUKp/9gHRs/pxrK95oZ9ZPvs0gFS0XvSAFflwGJAo+fRs8rppXT/QfyOXFwJg1a+/MPMqmq6/KKK5oct+/aXBreo4s8dEa3KBKiBJRa1nSK7gBRcmucRpULj/xyahraT/R/MmmgXQOZQEkAAyeZFat5EESYIkQXYEJEF2/KQGSYIkQXYEJEF2/KQGSYIkQXYEJEF2/P4BJJdPWPbGgiUAAAAASUVORK5CYII=",alt:""})}),e("div",{className:"icon",children:e("i",{className:"fa fa-search"})}),a("div",{className:"search-box",children:[e("div",{className:"search-eara",children:e("input",{type:"text",placeholder:"\u964D\u566A\u8033\u673A"})}),e("div",{className:"search-login",children:e("span",{children:"\u641C\u7D22"})})]})]}),a("div",{className:"recommend",children:[e("div",{className:"hot-recommend",children:"\u70ED\u95E8\u63A8\u8350"}),a("div",{className:"label-panel",children:[e("span",{className:"style",children:"\u65B0\u4EBA 9.9 \u5143\u5305\u90AE"}),e("span",{className:"style",children:"OPPO Reno8"}),e("span",{className:"style",children:"Find X5 Pro"}),e("span",{className:"style",children:"\u4E00\u52A0 Ace"}),e("span",{className:"style",children:"\u65B0\u54C1\u5E73\u677F"}),e("span",{className:"style",children:"\u964D\u566A\u8033\u673A"})]})]})]})}export{l as default};
