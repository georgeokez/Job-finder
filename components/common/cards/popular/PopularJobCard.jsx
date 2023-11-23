import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../utils";

import jobImage from "../../../../assets/images/job_img.png";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const handlePress = (item) => {
    console.log(item);
  };

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/13/72/29/360_F_513722905_SgxiGdjQZsdvP4ODmERsQGgW2bUwj1lT.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
