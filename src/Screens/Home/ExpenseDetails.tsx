import { HStack, Icon, Select, Text, VStack, View } from "native-base";
import { RouterProps } from "../../../App";
import AppBar from "../../Common/AppBar";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import TransactionHistory from "../../Common/TransactionHistory";
import { transactionHistory } from "./Home";
import { StyleSheet, processColor } from "react-native";
import { BarChart } from 'react-native-charts-wrapper';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        flex: 1,
        borderRadius: 10
    }
});
const barChartData = {
    dataSets: [{
        values: [{ y: 3000 }, { y: 2000 }, { y: 4000 }, { y: 5000 }, { y: 2500 }, { y: 3500 }],
        label: 'Expense',
        config: {
            color: processColor('#CBCBCB'),
            highlightAlpha: 255,
            highlightColor: processColor('#004852'),
        },
    }],
    config: {
        barWidth: 0.5
    },
}
const legend = {
    enabled: false,
}
const highlights = [{ x: 3 }, { x: 1 }]
const xAxis = {
    valueFormatter: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
    position: 'BOTTOM',
    granularityEnabled: false,
    granularity: 0.7,
    drawGridLines: false,
    drawAxisLine: false,
    drawLabels: false,
}
const yAxis = {
    left: {
        drawLabels: false,
        drawAxisLine: false,
        drawGridLines: false,
    },
    right: {
        enabled: false
    }
}
const description = {
    text: '',
}
const BarChartMock = () => {
    return (
        <View h={400} w={450}>
            <BarChart
                style={styles.chart}
                data={barChartData}
                xAxis={xAxis}
                yAxis={yAxis}
                animation={{
                    durationY: 1000,
                    easingY: 'EaseOutQuad',
                }}
                gridBackgroundColor={processColor('#e8b99d')}
                drawHighlightArrow
                drawBarShadow={false}
                highlights={highlights}
                drawBorders={false}
                legend={legend}
                noDataText="Opps... no data available!"
                chartDescription={description}
                drawValueAboveBar
                scaleEnabled={true}
                dragEnabled={true}
                pinchZoom={true}
                doubleTapToZoomEnabled={true}
            />
        </View>
    )
}
const ExpenseDetails = ({ navigation }: RouterProps) => {
    const [period, setPeriod] = React.useState<string>();
    return (
        <VStack>
            <AppBar title='Welcome, Tom!' useNotifyIcon />
            <HStack mx={10} my={3} space={1} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" lineHeight={39} fontSize={26}>$9870.00</Text>
                <Select placeholder="Today" color={"grey.200"} mt={1.5} _selectedItem={{ endIcon: <Icon as={<FontAwesomeIcon color='#52525b' icon={faCheck} />} /> }} size={"container"} dropdownIcon={<Icon bg={"transparent"} size={"xs"} as={<FontAwesomeIcon color='#969696' icon={faChevronDown} />} />} selectedValue={period} minWidth="120" onValueChange={itemValue => setPeriod(itemValue)} variant='unstyled'>
                    <Select.Item label="Today" value="today" />
                    <Select.Item label="Yesterday" value="yesterday" />
                    <Select.Item label="Last week" value="last week" />
                    <Select.Item label="Last month" value="last month" />
                    <Select.Item label="Last year" value="last year" />
                </Select>
            </HStack>
            {/* Chart */}
            <BarChartMock />
            <TransactionHistory mx={10} transactionHistory={transactionHistory} listHeight={250} />
        </VStack>
    )
}
export default ExpenseDetails;