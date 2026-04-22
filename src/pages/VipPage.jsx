import VipHero       from '../components/Vip/VipHero/VipHero';
import VipWhyJoin    from '../components/Vip/VipWhyJoin/VipWhyJoin';
import VipBenefits   from '../components/Vip/VipBenefits/VipBenefits';
import VipAbout      from '../components/Vip/VipAbout/VipAbout';
import VipCTA        from '../components/Vip/VipCTA/VipCTA';
import VipFooter     from '../components/Vip/VipFooter/VipFooter';

export default function VipPage() {
  return (
    <>
      <main>
        <VipHero />
        <VipWhyJoin />
        <VipBenefits />
        <VipAbout />
        <VipCTA />
      </main>
      <VipFooter />
    </>
  );
}
