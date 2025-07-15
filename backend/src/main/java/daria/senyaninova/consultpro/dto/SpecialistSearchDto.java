package daria.senyaninova.consultpro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.regex.Pattern;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpecialistSearchDto {
    private String department;
    private String experience;
    private String wage;
    private boolean testRequest;

    public Integer getExperienceValue() {
        if (experience == null) return null;
        return extractInt(experience);
    }

    public String getExperienceUnit() {
        if (experience == null) return null;
        return extractUnit(experience);
    }

    public Integer getWageValue() {
        if (wage == null) return null;
        return extractInt(wage);
    }

    public String getWageUnit() {
        if (wage == null) return null;
        return extractUnit(wage);
    }

    private Integer extractInt(String text) {
        var matcher = Pattern.compile("(\\d+)").matcher(text);
        return matcher.find() ? Integer.parseInt(matcher.group(1)) : null;
    }

    private String extractUnit(String text) {
        var matcher = Pattern.compile("(\\d+)(\\D+)").matcher(text.replaceAll("\\s+", ""));
        return matcher.find() ? matcher.group(2).trim() : null;
    }
}
