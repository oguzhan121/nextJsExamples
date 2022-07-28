import Link from "next/link"
export default function Header () {
    return <header>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Anasayfa
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
            header{
                background:#ccc;
                height:70px;
                display:flex;
                align-items:center;
                ul{
                    list-style:none;
                    display:flex;
                    flex-wrap:wrap;
                }
                li{
                    margin-right:30px
                }
                a{
                    font-size:18px
                }
            }
        `}</style>
    </header>
}