"use client"
import Button from "../../component/core/Button";
import Icon from "../../component/core/Icon";
import HeaderSetting from "../../component/layout/Header/HeaderSetting";
import Upload from "../../component/layout/Upload/Upload";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

export default function Home() {
  const { isMobile, isIpad } = useCheckMobileScreen()
  return (
    <section className={`flex flex--direction-column width--column-flex ${isMobile || isIpad ? 'container--fluid pt--30 pb--30' : 'pt--50 pb--50 pl--30 pr--30'}`}>
      <div className="flex flex--align-items-center flex--justify-content-between mb--25">
        <h1 className="fs--24 font--family-figtree font--semibold color--black">Upload CSV</h1>
        {
          !isMobile && !isIpad ?
            <HeaderSetting />
            : ''
        }
      </div>
      <Upload />
    </section>
  )
}