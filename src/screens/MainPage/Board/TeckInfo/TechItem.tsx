import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.content}>
        <Text style={{fontSize:18, fontWeight: 'bold'}}>제목임미다{"\n"}</Text>
        <Text style={{fontSize: 18, fontWeight:'bold'}}>크루들의 지식과 경험을 나눠 함께 성장해 가는 
        Techtalk 다 번째 이야기{"\n"}</Text>
        <Text style={{fontSize:15}}>
        먼저 레디스 클러스터를 사내 쿠버네티스(Kubernetes, k8s)로 옮기는 좌충우돌 경험과 이를 트러블슈팅하는 과정을 공유하였습니다. 물리 서버(PM: Physical Machine)에 있던 레디스 클러스터(Redis Cluster)를 쿠버네티스의 가상 서버(VM: Virtual Machine)로 옮기는 과정에서 성능과 효율을 모두 잡기 위한 노하우와 기술을 소개했습니다. 발표 주제가 현업 개발자들의 관심 분야이다 보니 질의응답에도 많은 시간이 소요되었는데요, 진행을 위해 세미나에 참여했던 개발자들의 질문을 중단시킬 정도였습니다. 🙂{"\n"}
        {"\n"}
        다음으로 MSA로 이전하는 과정에서 데브옵스(DevOps)를 실용주의 관점에서 소개했습니다. k8S 클러스터를 구축하고 CI/CD 시스템을 구축하며, 인프라 서비스를 설치하고 관리하는 과정 전반을 다뤘습니다. 신규 개발 프로젝트나 MSA를 위한 백엔드 리팩토링을 시작할 때 어느 개발팀이나 겪을 수 있는 리서치&선정&노하우&기술을 공유하여 세미나에 참여한 사내 개발자들의 많은 공감과 호응을 얻어냈습니다.{"\n"}

        {"\n"}
        1. 쿠버네티스 레디스 클러스터 구축기 –  카카오 / heo.d (허윤행) {"\n"}
        동영상개발파트에서 백엔드 개발을 하고 있습니다. 게임을 좋아하고 “일도 게임처럼 할 수 없을까?” 라는 생각을 종종 하고 있습니다.{"\n"}
        쿠버네티스 위에 레디스 클러스터를 올리면서 했던 삽질과 경험을 공유합니다. PM 서버 위에서 잘 돌아가던 레디스 클러스터를 왜 쿠버네티스 위에 올리게 되었는지, 어떻게 쿠버네티스 위에 올렸는지, 장단점은 무엇인지 이야기 하려고 합니다. 저와 비슷한 고민과 작업을 하고 계신 분들께 조금이나마 도움이 되었으면 좋겠기에 발표하게 되었습니다.{"\n"}
        
        {"\n"}
        2. 실용주의 데브옵스 for MSA –  카카오 / knight.lee (이선진) {"\n"}
        동영상개발 파트에서 카카오TV 서비스 개발을 하고 있습니다. 동영상 통계 데이터 수집 및 분석을 주 업무로 수행하고 있으며, 취미 삼아 데브옵스 시스템도 운영하고 있습니다. 현재는 동영상 서비스 추천 시스템에 대한 연구/개발을 진행 중이며, 언젠가 너튜브의 추천 시스템을 능가하는 시스템을 구축하고 싶은 꿈 많은 개발자입니다.{"\n"}
        작년 카카오TV 오리지널 서비스 오픈을 위해 한 달 만에 준비한 MSA를 위한 데브옵스 시스템! 이 데브옵스 시스템을 현재까지 최소한의 운영 리소스로 말썽 없이 편리하게 잘 사용하고 있습니다. 그것을 가능하게 하는 원리와 Best Practice + 땀 내나는 삽질기를 카카오 개발자 크루들에게 공유합니다.{"\n"}
        
        {"\n"}
        다섯 번째 Techtalk을 마치며{"\n"}
        동료들의 추천으로 발표를 하게 되었는데요, 발표 준비에 시간은 들어가지만 시간을 들여서 준비할만한 가치가 있다고 느꼈습니다. 작업할 때는 신경 쓰지 못했던 부분이나 크게 신경 쓰지 않고 넘어갔던 부분들도 다시 한번 생각하게 되었고, 미처 준비하지 못한 부분들도 고민을 하게 되었던 것 같습니다. 좋은 자리를 마련해 주신 테크톡TF에 고맙다는 감사의 인사 전하고 싶습니다! 고생 많으셨습니다.{"\n"}
        제가 예전에 책을 쓰고 그 책에 관한 컨퍼런스를 준비하고 발표를 했었는데요, 그때 당시에는 조금 무섭고 용기도 안났지만, 막상 이를 극복하고 준비해서 발표까지 해보니 제가 개발자로서 한층 성장했다는 느낌을 받을 수 있었습니다. 그래서 파트 내 개발자 동료들에게도 테크톡 발표에 참여하도록 적극 장려하고 있는데요! 크루 분들 중에서도 조금 더 개발자로서 성장하고 싶으시다거나, 공유하고 싶은 이야기가 있으신 분들은 망설이지 마시고 가벼운 마음으로 테크톡 발표자로 참여해 보시길 적극 추천드립니다!{"\n"}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    marginHorizontal:'5%',
    backgroundColor: Colors.grey200,
  },
})