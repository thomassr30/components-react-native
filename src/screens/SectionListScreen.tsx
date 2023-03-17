import React from 'react'
import { SectionList, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin",
      "Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin",
    ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", 
      "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", 
      "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", 
      "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", 
    ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];

const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
        <SectionList 
            sections={casas}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(item, index) => item + index}
            stickySectionHeadersEnabled={true}
            renderSectionHeader={({section}) => (
                <View style={{backgroundColor: 'white'}}>
                    <HeaderTitle title={section.casa} />
                </View>
            )}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default SectionListScreen