import React, { ReactNode, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

type Props = {
  title: string;
  children: ReactNode;
  icon?: JSX.Element;
}

const Accordion = ({ title, children, icon }: Props) => {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <View style={styles.accordBody}>{children}</View>;

  return (
    <View>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <View style={styles.accordWrapper}>
          {icon}
          <Text style={styles.accordTitle}>{title}</Text>
        </View>
        <Icon name={expanded ? 'chevron-up' : 'chevron-down'}
          size={15} color="#bbb" />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
};

const styles = StyleSheet.create({
  accordHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accordWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  accordTitle: {
    fontSize: 16,
  },
  accordBody: {
    paddingTop: 4
  },
});

export default Accordion;