import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

interface MusicScoreLinesProps {
    lineColor?: string;
    lineThickness?: number;
    lineSpacing?: number;
}

const MusicScoreLines: React.FC<MusicScoreLinesProps> = ({
    lineColor = '#000', // Default to black lines
    lineThickness = 2, // Default thickness of 2px
    lineSpacing = 16, // Default spacing of 16px
}) => {
    return (
        <View style={styles.container}>
            {/* Render 5 lines */}
            {[...Array(5)].map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.line,
                        {
                            backgroundColor: 'black',
                            height: lineThickness,
                            marginBottom: index < 4 ? lineSpacing : 0, // No spacing after the last line
                        },
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%', // Full width
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20, // Add some vertical padding
    },
    line: {
        width: '90%', // Lines take 90% of the screen's width
    },
});

export default MusicScoreLines;