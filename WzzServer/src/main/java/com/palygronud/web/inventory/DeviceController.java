package com.palygronud.web.inventory;

import com.palygronud.domain.inventory.Device;
import com.palygronud.domain.inventory.DevicevRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/inventory/devices")
public class DeviceController {


    private final DevicevRepository devicevRepository;

    public DeviceController(DevicevRepository devicevRepository) {

        this.devicevRepository = devicevRepository;
    }


    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Device getDeviceById(String id) {
        return devicevRepository.findOne(id);
    }

}
