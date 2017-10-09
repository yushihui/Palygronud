package com.palygronud.web.inventory;

import com.palygronud.domain.inventory.Device;
import com.palygronud.domain.inventory.DevicevRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/inventory/devices")
public class DeviceController {


    private final DevicevRepository devicevRepository;

    @Autowired
    public DeviceController(DevicevRepository devicevRepository) {

        this.devicevRepository = devicevRepository;
    }


    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public Device getDeviceById(@PathVariable String id) {
        return devicevRepository.findOne(id);
    }


    @RequestMapping(method = RequestMethod.GET)
    public List<Device> getDevices() {
        return devicevRepository.findAll();
    }
}
