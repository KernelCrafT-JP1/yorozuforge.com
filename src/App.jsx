import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, List, EnvelopeSimple, Copy, Check } from '@phosphor-icons/react';

const boothUrl = 'https://yorozuforge.booth.pm/';
const email = 'contact@yorozuforge.com';
const mailto = `mailto:${email}?subject=${encodeURIComponent('IT相談・受託開発のお問い合わせ')}`;

function Brand({ onClick }) {
  return <a className="brand" href="./" onClick={onClick} aria-label="YOROZU FORGE トップへ"><img src="./assets/yorozu-logo.png" alt="" width="600" height="600" /><span>YOROZU FORGE <small>（ヨロズフォージ）</small></span></a>;
}

export function App() {
  const page = location.pathname.endsWith('/representative.html') ? 'representative' : location.pathname.endsWith('/services.html') ? 'services' : location.pathname.endsWith('/workshop.html') ? 'workshop' : 'home';
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);
  function closeDialog() { dialogRef.current?.close(); }
  function contact() { lastFocus.current = document.activeElement; setMenuOpen(false); setCopied(false); setCopyError(false); dialogRef.current.showModal(); document.body.classList.add('dialog-open'); }
  useEffect(() => { const escape = e => { if (e.key === 'Escape') setMenuOpen(false); }; window.addEventListener('keydown', escape); return () => window.removeEventListener('keydown', escape); }, []);
  const nav = <><a href="./services.html" onClick={() => setMenuOpen(false)}>相談・開発</a><a href="./workshop.html" onClick={() => setMenuOpen(false)}>工房について</a><a href={boothUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>BOOTH<span className="sr-only">（新しいタブで開きます）</span></a><button className="nav-contact" onClick={contact}>お問い合わせ</button></>;
  const cta = <button className="button-primary" onClick={contact}><span>IT相談・開発について相談する</span><ArrowRight size={25} aria-hidden="true" /></button>;
  return <>
    <a className="skip-link" href="#main">本文へスキップ</a>
    <header className="site-header" id="top"><Brand onClick={() => setMenuOpen(false)} /><nav className="desktop-nav" aria-label="メインナビゲーション">{nav}</nav><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={26} /> : <List size={26} />}</button><nav id="mobile-nav" className="mobile-nav" aria-label="モバイルナビゲーション" hidden={!menuOpen}>{nav}</nav></header>
    <main id="main">
      {page === 'home' && <>
      <section className="hero" aria-labelledby="hero-title"><div className="hero-inner"><p className="eyebrow">デジタルのよろず鍛冶場</p><h1 id="hero-title"><span className="headline-line"><span className="headline-start">その</span><span className="headline-quote">「こんなの欲しい」</span><span>を、</span></span><span className="headline-line"><em>形</em>にする。</span></h1><p className="hero-intro">YOROZU FORGE（ヨロズフォージ）は、アイデアを叩いて、<br className="desktop-break" />削って、形にするデジタル工房です。</p><p className="hero-description">仕事で使うソフトウェアも、日々のITの困りごとも。<br className="desktop-break" />相談しながら考え、作って、試して、形にしていきます。</p>{cta}</div></section>
      <section className="manifesto" aria-label="工房のものづくり"><h2><span>作って、試して、</span><span>壊して、また作る<em>。</em></span></h2></section>
      <section className="services" id="services" aria-labelledby="services-title"><h2 id="services-title">仕事の「<em>欲しい</em>」も、ここから。</h2><div className="service-columns"><article><h3>IT相談</h3><p>困りごとを整理し、<br />進め方を一緒に<br className="mobile-break" />考えます。</p></article><article><h3>受託開発</h3><p>仕事に合わせて、<br />必要な仕組みを<br className="mobile-break" />つくります。</p></article></div><a className="text-link" href="./services.html">相談・開発について詳しく見る<ArrowRight size={22} aria-hidden="true" /></a></section>
      <section className="home-workshop"><p>ジャンルを決めず、「こんなの欲しい」から。</p><a className="text-link" href="./workshop.html">工房について<ArrowRight size={22} aria-hidden="true" /></a></section></>}
{page !== 'home' && <div className="breadcrumbs"><a href="./">トップ</a><span aria-hidden="true"> / </span><span>{page === 'services' ? '相談・開発' : page === 'representative' ? '代表紹介' : '工房について'}</span></div>}
{page === 'services' && (      <section className="services" id="services" aria-labelledby="services-title"><p className="eyebrow">IT CONSULTATION & DEVELOPMENT</p><h1 className="page-title" id="services-title">相談・開発</h1><p className="page-lead">仕事の「欲しい」も、ここから。</p><div className="service-columns"><article><h3>IT相談</h3><p>困りごとを整理し、<br />進め方を一緒に<br className="mobile-break" />考えます。</p></article><article><h3>受託開発</h3><p>仕事に合わせて、<br />必要な仕組みを<br className="mobile-break" />つくります。</p></article></div><div className="service-details"><div><h3>こんなことから、ご相談ください。</h3><ul><li>手作業や転記が多い業務を、もっと楽にしたい。</li><li>自社の仕事に合ったWebサイトやシステムを作りたい。</li><li>今のシステムやクラウド環境の進め方を相談したい。</li></ul></div><div><h3>相談できること</h3><dl><dt>Web制作・システム開発</dt><dd>Webサイトの制作や、業務に合わせたソフトウェアの開発。</dd><dt>業務改善・自動化</dt><dd>日々の作業を整理し、繰り返しの手間を減らす仕組みづくり。</dd><dt>クラウド・開発環境</dt><dd>AWS / Azure環境の構築、システム運用、CI/CD導入に関するご相談。</dd></dl></div></div><div className="service-inquiry"><h3>まずは、いま困っていることから。</h3><p>作りたいものが決まっていなくても大丈夫です。<br className="desktop-break" />目的や現在の状況を伺い、対応範囲・進め方・費用やスケジュールを相談しながら確認します。</p><button className="text-link" onClick={contact}>相談内容を伝える<ArrowRight size={22} aria-hidden="true" /></button></div></section>
)}
{page === 'workshop' && (      <section className="workshop-section" id="workshop" aria-labelledby="workshop-title"><div className="workshop-heading"><p className="eyebrow">ABOUT YOROZU FORGE</p><h1 className="page-title" id="workshop-title">工房について</h1><p className="workshop-tagline">アイデアを叩いて、<br />削って、形にする。</p></div><div className="workshop-copy"><p>YOROZU FORGE（ヨロズフォージ）は、アイデアを叩いて、削って、形にするデジタル工房です。</p><p>フォント、デザイン素材、ソフトウェア。<br />ジャンルを決めず、「こんなの欲しい」から制作を始めます。</p><p>作って、試して、壊して、また作る。<br />そうして出来上がったものを、ひとつずつ世に送り出しています。</p><p>何が出てくるかは、その時次第。<br />デジタルのよろず鍛冶場、YOROZU FORGEです。</p><a className="text-link" href={boothUrl} target="_blank" rel="noreferrer">BOOTHで制作物を見る<ArrowRight size={22} aria-hidden="true" /><span className="sr-only">（新しいタブで開きます）</span></a></div><div className="representative-link"><a className="text-link" href="./representative.html">代表・冨田 和臣について<ArrowRight size={22} aria-hidden="true" /></a></div></section>
)}
{page === 'representative' && <section className="representative-section" aria-labelledby="representative-title"><p className="eyebrow">REPRESENTATIVE</p><h1 className="page-title" id="representative-title">代表紹介</h1><div className="profile-inner"><div><p className="profile-label">代表</p><h3>冨田 和臣</h3></div><div><p>Web・クラウド領域のエンジニアとして、システム開発・運用、AWS/Azure環境の構築、CI/CD導入などに従事。</p><p>現在はYOROZU FORGEとして、Web制作、業務改善・自動化、デジタルプロダクトの制作を行っています。</p></div></div><a className="text-link" href="./workshop.html">工房について<ArrowRight size={22} aria-hidden="true" /></a></section>}
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">まだ、うまく言葉になっていなくても。</h2>{cta}</section>
    </main>
    <footer className="site-footer"><Brand /><nav aria-label="フッターナビゲーション">{nav}</nav></footer>
    <dialog ref={dialogRef} className="contact-dialog" onClick={e => { if(e.target === e.currentTarget) closeDialog(); }} onClose={() => { document.body.classList.remove('dialog-open'); lastFocus.current?.focus(); }} aria-labelledby="dialog-title"><div className="dialog-content"><button className="dialog-close" aria-label="閉じる" onClick={closeDialog}><X size={24} /></button><p className="eyebrow">YOROZU FORGE</p><h2 id="dialog-title">「こんなの欲しい」を、<br />聞かせてください。</h2><p>いま困っていることや、作ってみたいもの。<br />まとまっていなくても、お気軽にお聞かせください。</p><a className="email-link" href={mailto}><EnvelopeSimple size={23} aria-hidden="true" />{email}</a><div className="dialog-actions"><a className="button-primary" href={mailto}>メールを作成する<ArrowRight size={22} aria-hidden="true" /></a><button className="copy-button" onClick={async () => { try { await navigator.clipboard.writeText(email); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }}>{copied ? <Check size={20} aria-hidden="true" /> : <Copy size={20} aria-hidden="true" />}{copied ? 'コピーしました' : 'アドレスをコピー'}</button></div><p className="contact-note" aria-live="polite">{copyError ? 'コピーできませんでした。上のアドレスを選択してコピーしてください。' : copied ? 'メールアドレスをコピーしました。' : 'メールアプリが開きます。送信前に内容をご確認ください。'}</p></div></dialog>
  </>;
}

