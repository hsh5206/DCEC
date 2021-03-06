import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <ScrollView style={styles.content}>
        <Text style={{fontSize:18,fontWeight:'bold'}}>다전공(복수,부,연계,융합전공) 포기신청 공고{"\n"}</Text>
        <Text style={{fontSize:15}}>다전공 포기 신청을 아래와 같이 안내하니 희망자는 아래 기간내 신청하시기 바랍니다.{"\n"}{"\n"}
        1. 포기신청 기간: 2021.6.17.(목) 11:00 ~ 2021.6.24.(목) 23:50{"\n"}{"\n"}

 
        2. 신청자격: 다전공을 이수중인 재학 또는 휴학생 {"\n"}{"\n"}
          ※ 졸업예정자의 경우 온라인 포기신청이 제한되므로 소속 단과대학에 별도 문의 바람
        3. 포기대상 다전공 유형: 복수전공, 부전공, 연계전공, 융합전공, 자기설계연계전공{"\n"}{"\n"}
        4. 신청방법: [온라인 포기신청 바로가기] [다전공(복수,부,연계,융합전공) 포기신청 매뉴얼 바로가기(PDF)]{"\n"}{"\n"}

             5. 포기처리 최종 확인: 2021. 7. 5.(월) 11:00 이후 {"\n"}
             ※ 학적조회 메뉴 [바로가기] 를 통해 다전공 학과 정보가 삭제되었는지 본인이 직접 확인{"\n"}{"\n"}
          6. 주의사항{"\n"}
          가. 한번 포기한 다전공의 경우 향후 동일유형, 동일학과로는 재신청이 불가함{"\n"}
          나. 온라인 포기신청은 4학년 1학기까지만 가능하며, 졸업예정자인 경우에는 불가함{"\n"}
          - 현재 4학년 1학기까지 마치고, 2학기를 준비중인 학생도 온라인 포기신청 가능함{"\n"}
          다. 부전공, 복수전공 중인 학과로 전과는 반드시 다전공 포기신청이 선행되어야 함{"\n"}
          라. 부전공 학과를 복수전공으로 전환 희망 시, 부전공 포기 진행 후 동일 학과로 복수전공 신청{"\n"}
          마. 복수전공하는 학과를 변경하고자 할 경우에도 현재 복수전공의 포기 신청부터 먼저 진행한 다음 다른 학과 복수전공을 신규 신청{"\n"}
          바. 포기 시 이미 이수한 다전공 과목의 이수구분은 모두 자유선택으로 인정됨{"\n"}{"\n"}
          7. 향후 관련일정(※ 상기 일정은 학사일정에 따라 다소 변동될 수 있음){"\n"}{"\n"}
          구 분 / 일 정 / 비 고{"\n"}

          다전공 신청 / 2021.7. 5.(월) ∼ 7.15.(목) / 온라인 신청{"\n"}

          다전공 합격자 선발 공고 / 2021.8. 3.(화) 이후 / 학적 조회에서 직접 확인{"\n"}

          수강신청(2021-2학기) / 2021.8.10.(화) ∼ 8.13.(금) / 다전공 과목 수강신청 가능{"\n"}{"\n"}
          2021. 6.{"\n"}
          교 무 처 장
        </Text>
      </ScrollView>
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