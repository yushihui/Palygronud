package com.palygronud.web.inventory;

import com.palygronud.domain.inventory.Device;
import com.palygronud.domain.inventory.DevicevRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory/devices")
@CrossOrigin(origins = "http://192.168.32.48:4200")
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
