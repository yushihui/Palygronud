package com.palygronud.domain.inventory;

import org.springframework.beans.factory.annotation.Value;

public interface ConfigurationProjection {
    @Value("#{target.config}")
    String getConfiguration();
}
